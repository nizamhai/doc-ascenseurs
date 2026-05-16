import * as pdfjsLib from 'pdfjs-dist'
import pdfjsWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorkerUrl

/**
 * Extract text content from a PDF file
 */
export async function extractTextFromPdf(file) {
  const arrayBuffer = await file.arrayBuffer()
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise
  const pages = []

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i)
    const content = await page.getTextContent()
    const lines = []
    let currentLine = ''
    let lastY = null

    for (const item of content.items) {
      if (lastY !== null && Math.abs(item.transform[5] - lastY) > 3) {
        if (currentLine.trim()) lines.push(currentLine.trim())
        currentLine = ''
      }
      currentLine += item.str + ' '
      lastY = item.transform[5]
    }
    if (currentLine.trim()) lines.push(currentLine.trim())
    pages.push({ page: i, lines })
  }

  return pages
}

/**
 * Smart fault code extraction engine
 * Handles multiple formats found in elevator documentation PDFs
 */
export function extractFaultCodes(pages) {
  const allLines = pages.flatMap(p => p.lines)
  const results = []
  let currentSection = 'Codes défauts'
  let pendingEntry = null

  // Clean a label: remove trailing page/class references like "(B) Page 79" or "(A,*)"
  const cleanLabel = (s) =>
    s.replace(/\s*\([A-Z,*]+\)\s*(Page\s*\d+)?$/i, '')
     .replace(/\s+Page\s*\d+\s*$/i, '')
     .replace(/\s+/g, ' ')
     .trim()

  // Patterns for fault codes (various formats) — ordered by specificity
  const patterns = [
    // "-01- DESCRIPTION" or "-01- DESCRIPTION (B) Page 79"
    /^-\s*(\d{1,4})\s*-\s+(.{3,})/,
    // "01- DESCRIPTION" (dash only after)
    /^(\d{1,4})-\s+(.{5,})/,
    // "0001 - Description" or "0001 – Description"
    /^([A-Z]{0,3}\d{2,5})\s*[-–]\s*(.{5,})/,
    // "0001 : Description"
    /^([A-Z]{0,3}\d{2,5})\s*:\s*(.{5,})/,
    // "0001  Description" (2+ spaces, tabular)
    /^([A-Z]{0,3}\d{2,5})\s{2,}(.{5,})/,
    // "0001 Description" (1 space, code then label)
    /^([A-Z]?\d{3,5})\s+(.{5,})/,
    // "E01 Description" or "F12 Description"
    /^([A-HJ-Z]\d{1,4})\s+(.{5,})/,
    // "01 Description" simple numeric
    /^(\d{1,3})\s{2,}(.{5,})/,
    // "Code XX : Description"
    /^(?:Code|Err(?:eur)?|D[eé]faut?|Fault|Alarm)\s*[:\s]\s*([A-Z0-9]{1,8})\s*[-–:]\s*(.{3,})/i,
  ]

  // Section header patterns
  const sectionPatterns = [
    /^(?:SECTION|CHAPITRE|PARTIE|GROUPE|CARTE|MODULE|BOARD)\s*[-–:]?\s*(.+)/i,
    /^(?:Défauts?|Erreurs?|Codes?|Pannes?|Faults?)\s+(?:de\s+|du\s+|des\s+)?(.{3,})/i,
    /^[A-ZÀÂÉÈÊËÎÏÔÙÛÜ\s]{8,}$/, // ALL CAPS header (min 8 chars)
    /^[-=*]{3,}\s*(.+?)\s*[-=*]*$/, // --- Header ---
  ]

  // Lines that are clearly continuations (no code at start, long enough)
  const isContinuation = (line) => {
    const t = line.trim()
    return (
      t.length > 5 &&
      !/^-?\d/.test(t) &&
      !/^[A-Z]{1,5}\d/.test(t) &&
      !/^\(/.test(t) &&
      !/^Page\s/i.test(t)
    )
  }

  for (let i = 0; i < allLines.length; i++) {
    const trimmed = allLines[i].trim()
    if (!trimmed || trimmed.length < 2) {
      if (pendingEntry) { results.push(pendingEntry); pendingEntry = null }
      continue
    }

    // Check section header
    let isSection = false
    for (const sp of sectionPatterns) {
      const match = trimmed.match(sp)
      if (match) {
        const name = (match[1] || trimmed).trim()
        if (name.length > 3 && name.length < 120 && !/^\d+$/.test(name) && !/^Page\s/i.test(name)) {
          if (pendingEntry) { results.push(pendingEntry); pendingEntry = null }
          currentSection = name
          isSection = true
          break
        }
      }
    }
    if (isSection) continue

    // Try to extract fault code
    let matched = false
    for (const pattern of patterns) {
      const match = trimmed.match(pattern)
      if (match) {
        if (pendingEntry) results.push(pendingEntry)
        const code = match[1].trim()
        const label = cleanLabel(match[2])
        if (label.length > 2 && code.length <= 12) {
          pendingEntry = { code, label, section: currentSection }
        } else {
          pendingEntry = null
        }
        matched = true
        break
      }
    }

    // If no match, try to append to previous entry (multi-line description)
    if (!matched && pendingEntry && isContinuation(trimmed)) {
      const extra = cleanLabel(trimmed)
      if (extra.length > 2) pendingEntry.label += ' ' + extra
    } else if (!matched) {
      if (pendingEntry) { results.push(pendingEntry); pendingEntry = null }
    }
  }

  if (pendingEntry) results.push(pendingEntry)
  return results
}

/**
 * Group extracted codes into sections
 */
export function groupBySection(codes) {
  const sections = {}
  for (const entry of codes) {
    if (!sections[entry.section]) {
      sections[entry.section] = []
    }
    sections[entry.section].push({ code: entry.code, label: entry.label })
  }
  return Object.entries(sections).map(([name, entries]) => ({ name, entries }))
}

/**
 * Full pipeline: file -> structured fault codes
 */
export async function processPdf(file) {
  const pages = await extractTextFromPdf(file)
  const rawText = pages.flatMap(p => p.lines).join('\n')
  const codes = extractFaultCodes(pages)
  const sections = groupBySection(codes)
  return {
    fileName: file.name,
    totalPages: pages.length,
    totalLines: pages.reduce((s, p) => s + p.lines.length, 0),
    totalCodes: codes.length,
    rawText,
    sections,
  }
}
