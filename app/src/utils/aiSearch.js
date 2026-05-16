import { docs } from '../data/docs'
import { brands } from '../data/brands'

function getImportedDocs() {
  try { return Object.values(JSON.parse(localStorage.getItem('imported-docs') || '{}')) }
  catch { return [] }
}

function getAllEntries() {
  const entries = []

  // Built-in docs
  for (const doc of Object.values(docs)) {
    for (const section of doc.sections) {
      for (const entry of section.entries) {
        entries.push({
          code: entry.code,
          label: entry.label,
          desc: entry.desc || '',
          section: section.title || section.name || '',
          docTitle: doc.title,
          docSlug: doc.slug,
          brand: doc.brand,
          brandId: doc.brandId,
        })
      }
    }
  }

  // Imported docs
  for (const doc of getImportedDocs()) {
    for (const section of (doc.sections || [])) {
      for (const entry of (section.entries || [])) {
        entries.push({
          code: entry.code,
          label: entry.label,
          desc: entry.desc || '',
          section: section.title || section.name || '',
          docTitle: doc.title,
          docSlug: doc.slug,
          brand: doc.brand,
          brandId: doc.brandId,
        })
      }
    }
  }

  return entries
}

function normalize(s) {
  return (s || '').toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
}

function score(entry, tokens) {
  const haystack = normalize(`${entry.code} ${entry.label} ${entry.desc} ${entry.section} ${entry.docTitle} ${entry.brand}`)
  let s = 0
  for (const t of tokens) {
    if (entry.code.toLowerCase() === t) s += 10
    else if (haystack.includes(t)) s += (t.length > 4 ? 3 : 1)
  }
  return s
}

// Brand name aliases (spoken French variants)
const brandAliases = {
  kone: ['kone', 'cone', 'kon'],
  schindler: ['schindler', 'chindler', 'sindler', 'schindleur'],
  otis: ['otis', 'oti'],
  autinor: ['autinor', 'autineur', 'autino'],
  thyssenkrupp: ['thyssen', 'thyssenkrupp', 'krupp', 'tissen'],
  mea: ['mea', 'méa', 'mia'],
}

function detectBrand(tokens) {
  for (const [id, aliases] of Object.entries(brandAliases)) {
    if (tokens.some(t => aliases.some(a => t.includes(a)))) return id
  }
  return null
}

function detectCode(tokens) {
  // Numeric codes like 0001, E001, F12, etc.
  return tokens.find(t => /^[a-z]?\d{2,5}$/i.test(t)) || null
}

// Intent detection
function detectIntent(q) {
  const n = normalize(q)
  if (/\b(qu.?est.?ce|c.?est quoi|signif|veut dire|definition|expliqu)\b/.test(n)) return 'explain'
  if (/\b(list|tous les|toutes les|combien|quels? defaut|codes? defaut)\b/.test(n)) return 'list'
  if (/\b(cherch|trouv|search|recherch)\b/.test(n)) return 'search'
  if (/\b(aide|help|comment|utiliser|bonjour|salut|hello)\b/.test(n)) return 'help'
  return 'search'
}

export function aiQuery(question) {
  const tokens = normalize(question).split(/\s+/).filter(t => t.length > 1)
  const brand = detectBrand(tokens)
  const code = detectCode(tokens)
  const intent = detectIntent(question)

  if (intent === 'help' || tokens.length === 0) {
    return {
      type: 'help',
      text: `Bonjour ! Je peux vous aider à trouver des codes défauts. Exemples :
• "Code 0021 Kone" — explication d'un code
• "Défaut frein Schindler" — recherche par mot-clé
• "Tous les codes Otis" — liste d'une marque
Parlez ou tapez votre question.`,
      results: [],
    }
  }

  const allEntries = getAllEntries()

  // Filter by brand first
  const pool = brand ? allEntries.filter(e => e.brandId === brand) : allEntries

  // Exact code lookup
  if (code) {
    const exact = pool.filter(e => e.code.toLowerCase() === code.toLowerCase())
    if (exact.length > 0) {
      const e = exact[0]
      const text = `Code ${e.code} — ${e.label}${e.desc ? '. ' + e.desc : ''}. Document : ${e.docTitle}${e.brand ? ', ' + e.brand : ''}.`
      return { type: 'code', text, results: exact.slice(0, 5) }
    }
  }

  // "List all" intent
  if (intent === 'list' && brand) {
    const brandData = brands.find(b => b.id === brand)
    const brandEntries = allEntries.filter(e => e.brandId === brand)
    const docCount = [...new Set(brandEntries.map(e => e.docSlug))].length
    const text = `${brandData?.name || brand} : ${brandEntries.length} codes défauts dans ${docCount} documents.`
    return { type: 'list', text, results: brandEntries.slice(0, 8) }
  }

  // Keyword search
  const keywords = tokens.filter(t =>
    t.length > 2 &&
    !['les', 'des', 'une', 'que', 'qui', 'est', 'pour', 'sur', 'code', 'defaut', 'erreur', 'panne'].includes(t)
  )

  if (keywords.length === 0) {
    return { type: 'empty', text: 'Pouvez-vous préciser votre question ? Par exemple : "code 0021" ou "défaut frein".', results: [] }
  }

  const scored = pool
    .map(e => ({ ...e, _score: score(e, keywords) }))
    .filter(e => e._score > 0)
    .sort((a, b) => b._score - a._score)
    .slice(0, 8)

  if (scored.length === 0) {
    const brandName = brand ? brands.find(b => b.id === brand)?.name : null
    const txt = brandName
      ? `Aucun résultat pour "${keywords.join(' ')}" chez ${brandName}.`
      : `Aucun résultat pour "${keywords.join(' ')}". Essayez un autre terme.`
    return { type: 'empty', text: txt, results: [] }
  }

  const top = scored[0]
  let text = `${scored.length} résultat${scored.length > 1 ? 's' : ''} trouvé${scored.length > 1 ? 's' : ''}.`
  if (scored.length === 1) {
    text = `Code ${top.code} — ${top.label}${top.desc ? '. ' + top.desc : ''}. (${top.brand}, ${top.docTitle})`
  } else {
    text = `${scored.length} résultats. Le plus pertinent : code ${top.code} — ${top.label}. (${top.brand})`
  }

  return { type: 'results', text, results: scored }
}

export function speak(text) {
  if (!window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const utt = new SpeechSynthesisUtterance(text)
  utt.lang = 'fr-FR'
  utt.rate = 1.05
  utt.pitch = 1
  // Prefer a French voice if available
  const voices = window.speechSynthesis.getVoices()
  const frVoice = voices.find(v => v.lang.startsWith('fr'))
  if (frVoice) utt.voice = frVoice
  window.speechSynthesis.speak(utt)
}

export function stopSpeaking() {
  if (window.speechSynthesis) window.speechSynthesis.cancel()
}
