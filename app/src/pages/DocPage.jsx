import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  ArrowLeft, Search, AlertTriangle, Info, ChevronDown, ChevronUp,
  Hash, BookOpen, Printer, Copy, Check, FileText
} from 'lucide-react'
import { getDoc } from '../data/docs'
import { brands } from '../data/brands'
import epb1Details from '../data/epb1Details.json'
import epb2Details from '../data/epb2Details.json'
import meaDetails from '../data/meaDetails.json'
import schindlerDetails from '../data/schindlerDetails.json'

const allDetails = { ...epb1Details, ...epb2Details, ...meaDetails, ...schindlerDetails }

const colorMap = {
  emerald: {
    gradient: 'from-emerald-500 to-emerald-700',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-600',
    border: 'border-emerald-500/30',
    ring: 'ring-emerald-500/30',
    badge: 'bg-emerald-500/12 text-emerald-700',
    codeBg: 'bg-emerald-500/15 text-emerald-700',
    hoverBorder: 'hover:border-emerald-500/50',
    accent: '#059669',
  },
  red: {
    gradient: 'from-red-500 to-red-700',
    bg: 'bg-red-500/10',
    text: 'text-red-600',
    border: 'border-red-500/30',
    ring: 'ring-red-500/30',
    badge: 'bg-red-500/12 text-red-700',
    codeBg: 'bg-red-500/15 text-red-700',
    hoverBorder: 'hover:border-red-500/50',
    accent: '#dc2626',
  },
  purple: {
    gradient: 'from-purple-500 to-purple-700',
    bg: 'bg-purple-500/10',
    text: 'text-purple-600',
    border: 'border-purple-500/30',
    ring: 'ring-purple-500/30',
    badge: 'bg-purple-500/12 text-purple-700',
    codeBg: 'bg-purple-500/15 text-purple-700',
    hoverBorder: 'hover:border-purple-500/50',
    accent: '#9333ea',
  },
  amber: {
    gradient: 'from-amber-500 to-amber-700',
    bg: 'bg-amber-500/10',
    text: 'text-amber-600',
    border: 'border-amber-500/30',
    ring: 'ring-amber-500/30',
    badge: 'bg-amber-500/12 text-amber-700',
    codeBg: 'bg-amber-500/15 text-amber-700',
    hoverBorder: 'hover:border-amber-500/50',
    accent: '#d97706',
  },
  blue: {
    gradient: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-500/10',
    text: 'text-blue-600',
    border: 'border-blue-500/30',
    ring: 'ring-blue-500/30',
    badge: 'bg-blue-500/12 text-blue-700',
    codeBg: 'bg-blue-500/15 text-blue-700',
    hoverBorder: 'hover:border-blue-500/50',
    accent: '#2563eb',
  },
  slate: {
    gradient: 'from-slate-500 to-slate-700',
    bg: 'bg-slate-500/10',
    text: 'text-slate-600',
    border: 'border-slate-500/30',
    ring: 'ring-slate-500/30',
    badge: 'bg-slate-500/12 text-slate-700',
    codeBg: 'bg-slate-500/15 text-slate-700',
    hoverBorder: 'hover:border-slate-500/50',
    accent: '#475569',
  },
  sky: {
    gradient: 'from-sky-500 to-sky-700',
    bg: 'bg-sky-500/10',
    text: 'text-sky-600',
    border: 'border-sky-500/30',
    ring: 'ring-sky-500/30',
    badge: 'bg-sky-500/12 text-sky-700',
    codeBg: 'bg-sky-500/15 text-sky-700',
    hoverBorder: 'hover:border-sky-500/50',
    accent: '#0284c7',
  },
  orange: {
    gradient: 'from-orange-500 to-orange-700',
    bg: 'bg-orange-500/10',
    text: 'text-orange-600',
    border: 'border-orange-500/30',
    ring: 'ring-orange-500/30',
    badge: 'bg-orange-500/12 text-orange-700',
    codeBg: 'bg-orange-500/15 text-orange-700',
    hoverBorder: 'hover:border-orange-500/50',
    accent: '#ea580c',
  },
}

function getImportedDoc(slug) {
  try {
    const docs = JSON.parse(localStorage.getItem('imported-docs') || '{}')
    const doc = docs[slug]
    if (!doc) return null
    // Normalize sections: imported uses "name", built-in uses "title"
    return {
      ...doc,
      sections: (doc.sections || []).map(s => ({
        ...s,
        title: s.title || s.name,
        entries: s.entries || [],
      }))
    }
  } catch { return null }
}

export default function DocPage() {
  const { docSlug } = useParams()
  const doc = getDoc(docSlug) || getImportedDoc(docSlug)
  const [search, setSearch] = useState('')
  const [openSections, setOpenSections] = useState({})
  const [copiedCode, setCopiedCode] = useState(null)
  const [expandedCode, setExpandedCode] = useState(null)

  if (!doc) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <AlertTriangle className="w-16 h-16 text-amber-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Document non trouvé</h1>
        <p className="text-[var(--text-tertiary)] mb-8">Le document demandé n'existe pas.</p>
        <Link to="/" className="btn-primary">
          <ArrowLeft className="w-5 h-5" />
          Retour à l'accueil
        </Link>
      </div>
    )
  }

  const c = colorMap[doc.color] || colorMap.blue

  const toggleSection = (title) => {
    setOpenSections(prev => ({ ...prev, [title]: prev[title] === false ? true : prev[title] === undefined ? false : !prev[title] }))
  }

  const isSectionOpen = (title) => openSections[title] !== false

  const handleCopy = (code, label) => {
    navigator.clipboard.writeText(`${code} - ${label}`)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 1500)
  }

  const totalEntries = doc.sections.reduce((sum, s) => sum + s.entries.length, 0)

  const filteredSections = doc.sections.map(section => ({
    ...section,
    entries: search.length > 0
      ? section.entries.filter(e =>
          e.code.toLowerCase().includes(search.toLowerCase()) ||
          e.label.toLowerCase().includes(search.toLowerCase()) ||
          (e.desc && e.desc.toLowerCase().includes(search.toLowerCase()))
        )
      : section.entries
  })).filter(s => s.entries.length > 0 || (s.note && !search))

  const matchCount = filteredSections.reduce((sum, s) => sum + s.entries.length, 0)

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Header */}
      <section
        className="relative overflow-hidden border-b"
        style={{ borderColor: 'var(--border-color)', background: 'var(--bg-secondary)' }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-[0.04]`} />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8">
            <Link
              to="/"
              className="transition-colors"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => e.target.style.color = 'var(--text-secondary)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >Accueil</Link>
            <span style={{ color: 'var(--text-muted)' }}>/</span>
            <Link
              to={`/marque/${doc.brandId}`}
              className={`${c.text} hover:underline transition-colors font-medium`}
            >{doc.brand}</Link>
            <span style={{ color: 'var(--text-muted)' }}>/</span>
            <span style={{ color: 'var(--text-secondary)' }}>{doc.title}</span>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Icon */}
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${c.gradient} flex items-center justify-center shadow-xl shrink-0`}>
              <FileText className="w-8 h-8 text-white" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className={`brand-badge ${c.badge} text-xs font-semibold`}>{doc.brand}</span>
                <span
                  className="brand-badge text-xs"
                  style={{ background: 'var(--bg-tertiary)', color: 'var(--text-tertiary)', border: '1px solid var(--border-color)' }}
                >
                  {totalEntries} codes
                </span>
              </div>

              <h1
                className="text-3xl md:text-4xl font-extrabold font-display mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {doc.title}
              </h1>
              {doc.subtitle && (
                <p className="text-lg" style={{ color: 'var(--text-tertiary)' }}>{doc.subtitle}</p>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-2 shrink-0">
              <button
                onClick={() => window.print()}
                className="p-2.5 rounded-xl border transition-all"
                style={{
                  background: 'var(--bg-tertiary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-muted)',
                }}
                title="Imprimer"
              >
                <Printer className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="mt-8 max-w-lg">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                style={{ color: 'var(--text-muted)' }}
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher un code ou un défaut..."
                className="input-field w-full pl-12 pr-16 py-3 text-sm"
              />
              {search && (
                <span
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {matchCount} résultat{matchCount !== 1 ? 's' : ''}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-6">
          {filteredSections.map((section, si) => {
            const isOpen = isSectionOpen(section.title)

            return (
              <div key={section.title} className="animate-slide-up rounded-2xl overflow-hidden border shadow-sm" style={{ borderColor: `${c.accent}30`, animationDelay: `${si * 80}ms` }}>
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center justify-between px-5 py-4 transition-all group"
                  style={{
                    background: `linear-gradient(135deg, ${c.accent}12 0%, ${c.accent}06 100%)`,
                    borderBottom: isOpen ? `1px solid ${c.accent}20` : 'none',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg ${c.bg}`}>
                      <BookOpen className={`w-4 h-4 ${c.text}`} />
                    </div>
                    <h2
                      className="text-base font-bold font-display text-left"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {section.title}
                    </h2>
                    <span
                      className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                      style={{ background: `${c.accent}18`, color: c.accent }}
                    >
                      {section.entries.length}
                    </span>
                  </div>
                  {isOpen
                    ? <ChevronUp className="w-5 h-5" style={{ color: 'var(--text-muted)' }} />
                    : <ChevronDown className="w-5 h-5" style={{ color: 'var(--text-muted)' }} />
                  }
                </button>

                {/* Section Note */}
                {isOpen && section.note && (
                  <div
                    className="px-5 py-3 flex items-start gap-3 border-b text-sm"
                    style={{ background: `${c.accent}08`, borderColor: `${c.accent}20`, color: c.accent }}
                  >
                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                    <p>{section.note}</p>
                  </div>
                )}

                {/* Entries Table */}
                {isOpen && (
                  <div style={{ background: 'var(--bg-secondary)' }}>
                    <div className="divide-y" style={{ borderColor: 'var(--border-color)' }}>
                      {section.entries.map((entry, ei) => (
                        <div
                          key={`${entry.code}-${ei}`}
                          className="flex items-start gap-4 px-5 py-3.5 transition-colors group/row"
                          style={{ '--hover-bg': 'var(--bg-tertiary)' }}
                          onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-tertiary)'}
                          onMouseLeave={e => e.currentTarget.style.background = ''}
                        >
                          {/* Code Badge */}
                          {(entry.codeImg || entry.codeImgs) ? (
                            <div className="shrink-0 flex items-center gap-0.5 mt-0.5">
                              {(entry.codeImg || entry.codeImgs).map((src, idx) => (
                                <img
                                  key={idx}
                                  src={src}
                                  alt=""
                                  className="h-7 w-auto select-none"
                                  style={{ imageRendering: 'pixelated' }}
                                />
                              ))}
                            </div>
                          ) : (
                            <div className={`shrink-0 min-w-[60px] px-3 py-1.5 rounded-lg ${c.codeBg} font-mono font-bold text-sm text-center`}>
                              {entry.code}
                            </div>
                          )}

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <button
                              className="text-left w-full group/label"
                              onClick={() => allDetails[entry.code] ? setExpandedCode(expandedCode === entry.code ? null : entry.code) : null}
                            >
                              <p
                                className={`text-sm font-semibold leading-relaxed ${allDetails[entry.code] ? 'cursor-pointer' : ''}`}
                                style={{ color: 'var(--text-primary)' }}
                              >
                                {entry.label}
                                {allDetails[entry.code] && (
                                  <span
                                    className="ml-2 text-xs font-medium opacity-60 group-hover/label:opacity-100 transition-opacity"
                                    style={{ color: c.accent }}
                                  >
                                    {expandedCode === entry.code ? '▲ fermer' : '▼ détails'}
                                  </span>
                                )}
                              </p>
                              {entry.desc && (
                                <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
                                  {entry.desc}
                                </p>
                              )}
                            </button>

                            {/* Detail panel */}
                            {expandedCode === entry.code && allDetails[entry.code] && (
                              <div
                                className="mt-3 rounded-xl p-4 space-y-1.5 border text-xs leading-relaxed"
                                style={{
                                  background: `${c.accent}08`,
                                  borderColor: `${c.accent}25`,
                                }}
                              >
                                {allDetails[entry.code].map((item, idx) =>
                                  item.type === 'header' ? (
                                    <p
                                      key={idx}
                                      className="font-bold uppercase tracking-wider mt-3 mb-1 first:mt-0"
                                      style={{ color: c.accent }}
                                    >
                                      {item.text
                                        .replace('CAUSESPOSSIBLE', 'CAUSES POSSIBLES')
                                        .replace('CAUSESS', 'CAUSES')
                                        .replace('CONSEQUENCES', 'CONSÉQUENCES')
                                        .replace('REMEDE', 'REMÈDE')
                                        .replace(/\s+/g, ' ')}
                                    </p>
                                  ) : (
                                    <p key={idx} style={{ color: 'var(--text-secondary)' }}>{item.text}</p>
                                  )
                                )}
                              </div>
                            )}
                          </div>

                          {/* Copy Button */}
                          <button
                            onClick={() => handleCopy(entry.code, entry.label)}
                            className="opacity-0 group-hover/row:opacity-100 p-1.5 rounded-lg transition-all shrink-0"
                            style={{ color: 'var(--text-muted)' }}
                            title="Copier"
                          >
                            {copiedCode === entry.code
                              ? <Check className="w-3.5 h-3.5" style={{ color: c.accent }} />
                              : <Copy className="w-3.5 h-3.5" />
                            }
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {filteredSections.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--text-muted)' }} />
            <p className="text-lg font-medium" style={{ color: 'var(--text-tertiary)' }}>Aucun résultat pour « {search} »</p>
            <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>Essayez un autre terme de recherche</p>
          </div>
        )}

        {/* Back Navigation */}
        <div
          className="mt-12 pt-8 border-t flex items-center justify-between"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <Link
            to={`/marque/${doc.brandId}`}
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: 'var(--text-tertiary)' }}
            onMouseEnter={e => e.currentTarget.style.color = c.accent}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-tertiary)'}
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à {doc.brand}
          </Link>
          <Link
            to="/"
            className="text-sm transition-colors"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            Accueil
          </Link>
        </div>
      </section>
    </div>
  )
}
