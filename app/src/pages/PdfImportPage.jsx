import { useState, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  Upload, FileText, Loader2, CheckCircle2, AlertTriangle,
  ChevronDown, ChevronUp, Trash2, Plus, Save, Eye, EyeOff,
  ArrowLeft, Sparkles, X, Edit3, FolderOpen
} from 'lucide-react'
import { brands } from '../data/brands'
import { processPdf } from '../utils/pdfExtractor'

const STORAGE_KEY = 'imported-docs'

function getImportedDocs() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') } catch { return {} }
}

function saveImportedDocs(docs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(docs))
}

export default function PdfImportPage() {
  const [step, setStep] = useState('upload') // upload | processing | preview | configure | done
  const [file, setFile] = useState(null)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [progress, setProgress] = useState('')
  const [rawVisible, setRawVisible] = useState(false)
  const [sections, setSections] = useState([])
  const [openSections, setOpenSections] = useState({})
  const [docTitle, setDocTitle] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedColor, setSelectedColor] = useState('blue')
  const [mergeTarget, setMergeTarget] = useState('new')
  const [savedDocs, setSavedDocs] = useState(getImportedDocs())
  const fileInputRef = useRef(null)
  const dropRef = useRef(null)

  const colorMap = {
    schindler: 'blue', otis: 'red', autinor: 'emerald',
    thyssenkrupp: 'purple', mea: 'amber', kone: 'sky', autres: 'slate'
  }

  const handleFile = useCallback(async (f) => {
    if (!f || !f.name.endsWith('.pdf')) {
      setError('Veuillez sélectionner un fichier PDF.')
      return
    }
    setFile(f)
    setError(null)
    setStep('processing')
    setProgress('Lecture du PDF...')

    try {
      setProgress('Extraction du texte...')
      const res = await processPdf(f)
      setProgress('Analyse des codes défauts...')

      // Small delay to show progress
      await new Promise(r => setTimeout(r, 400))

      setResult(res)
      setSections(res.sections.map((s, i) => ({
        ...s,
        id: i,
        enabled: true,
        entries: s.entries.map((e, j) => ({ ...e, id: `${i}-${j}`, enabled: true }))
      })))
      setDocTitle(f.name.replace('.pdf', '').replace(/[_-]/g, ' '))
      setStep('preview')
    } catch (err) {
      console.error(err)
      setError(`Erreur lors du traitement : ${err.message}`)
      setStep('upload')
    }
  }, [])

  const onDrop = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    dropRef.current?.classList.remove('ring-2')
    const f = e.dataTransfer?.files?.[0]
    if (f) handleFile(f)
  }, [handleFile])

  const toggleSection = (id) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const toggleSectionEnabled = (id) => {
    setSections(prev => prev.map(s => s.id === id ? { ...s, enabled: !s.enabled } : s))
  }

  const toggleEntry = (sectionId, entryId) => {
    setSections(prev => prev.map(s =>
      s.id === sectionId
        ? { ...s, entries: s.entries.map(e => e.id === entryId ? { ...e, enabled: !e.enabled } : e) }
        : s
    ))
  }

  const removeEntry = (sectionId, entryId) => {
    setSections(prev => prev.map(s =>
      s.id === sectionId
        ? { ...s, entries: s.entries.filter(e => e.id !== entryId) }
        : s
    ))
  }

  const updateEntry = (sectionId, entryId, field, value) => {
    setSections(prev => prev.map(s =>
      s.id === sectionId
        ? { ...s, entries: s.entries.map(e => e.id === entryId ? { ...e, [field]: value } : e) }
        : s
    ))
  }

  const updateSectionName = (id, name) => {
    setSections(prev => prev.map(s => s.id === id ? { ...s, name } : s))
  }

  const addManualEntry = (sectionId) => {
    setSections(prev => prev.map(s =>
      s.id === sectionId
        ? { ...s, entries: [...s.entries, { id: `${sectionId}-m${Date.now()}`, code: '', label: '', enabled: true, manual: true }] }
        : s
    ))
  }

  const totalEnabled = sections.reduce((sum, s) => s.enabled ? sum + s.entries.filter(e => e.enabled).length : sum, 0)

  const handleSave = () => {
    const slug = `import-${Date.now()}`
    const brandId = selectedBrand || 'autres'
    const brand = brands.find(b => b.id === brandId)

    const doc = {
      slug,
      brandId,
      brand: brand?.name || 'Importé',
      title: docTitle || 'Document importé',
      color: colorMap[brandId] || 'slate',
      imported: true,
      importedAt: new Date().toISOString(),
      sourceFile: file?.name || 'unknown.pdf',
      sections: sections
        .filter(s => s.enabled)
        .map(s => ({
          name: s.name,
          entries: s.entries
            .filter(e => e.enabled && (e.code || e.label))
            .map(e => ({ code: e.code, label: e.label }))
        }))
        .filter(s => s.entries.length > 0)
    }

    const docs = getImportedDocs()
    docs[slug] = doc
    saveImportedDocs(docs)
    setSavedDocs(docs)
    setStep('done')
  }

  const deleteImported = (slug) => {
    const docs = getImportedDocs()
    delete docs[slug]
    saveImportedDocs(docs)
    setSavedDocs(docs)
  }

  const resetAll = () => {
    setStep('upload')
    setFile(null)
    setResult(null)
    setError(null)
    setSections([])
    setDocTitle('')
    setSelectedBrand('')
    setMergeTarget('new')
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Link to="/" className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent-color)] text-sm mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Retour
      </Link>

      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'hsl(var(--accent-hue) 70% 50% / 0.15)' }}>
          <Sparkles className="w-5 h-5" style={{ color: 'var(--accent-color)' }} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">Import PDF Intelligent</h1>
          <p className="text-sm text-[var(--text-tertiary)]">L'IA extrait automatiquement les codes défauts de vos PDFs</p>
        </div>
      </div>

      {/* Steps indicator */}
      <div className="flex items-center gap-2 mb-8">
        {['Upload', 'Analyse', 'Vérification', 'Configuration', 'Terminé'].map((label, i) => {
          const stepIndex = { upload: 0, processing: 1, preview: 2, configure: 3, done: 4 }[step]
          const isActive = i === stepIndex
          const isDone = i < stepIndex
          return (
            <div key={label} className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                isDone ? 'bg-green-500 text-white' : isActive ? 'text-white' : 'text-[var(--text-muted)]'
              }`} style={isActive ? { background: 'var(--accent-color)' } : isDone ? {} : { background: 'var(--bg-tertiary)' }}>
                {isDone ? '✓' : i + 1}
              </div>
              <span className={`text-xs hidden sm:inline ${isActive ? 'text-[var(--text-primary)] font-medium' : 'text-[var(--text-muted)]'}`}>{label}</span>
              {i < 4 && <div className="w-4 md:w-8 h-px" style={{ background: isDone ? 'var(--accent-color)' : 'var(--border-color)' }} />}
            </div>
          )
        })}
      </div>

      {/* STEP: Upload */}
      {step === 'upload' && (
        <div className="space-y-6">
          <div
            ref={dropRef}
            onDrop={onDrop}
            onDragOver={(e) => { e.preventDefault(); dropRef.current?.classList.add('ring-2') }}
            onDragLeave={() => dropRef.current?.classList.remove('ring-2')}
            onClick={() => fileInputRef.current?.click()}
            className="glass-card p-12 md:p-16 text-center cursor-pointer transition-all hover:scale-[1.01]"
            style={{ borderStyle: 'dashed', borderWidth: '2px', borderColor: 'var(--border-color)', ringColor: 'var(--accent-color)' }}
          >
            <Upload className="w-12 h-12 mx-auto mb-4 text-[var(--text-muted)]" />
            <p className="text-lg font-semibold text-[var(--text-primary)] mb-2">
              Glissez un PDF ici ou cliquez pour sélectionner
            </p>
            <p className="text-sm text-[var(--text-tertiary)]">
              Supporte tous les formats : Schindler, Otis, Kone, ThyssenKrupp, MEA, Autinor...
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={(e) => handleFile(e.target.files?.[0])}
            />
          </div>

          {error && (
            <div className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              <AlertTriangle className="w-5 h-5 shrink-0" />
              {error}
            </div>
          )}

          {/* Previously imported docs */}
          {Object.keys(savedDocs).length > 0 && (
            <div className="glass-card p-6">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <FolderOpen className="w-4 h-4" style={{ color: 'var(--accent-color)' }} />
                Documents importés ({Object.keys(savedDocs).length})
              </h3>
              <div className="space-y-2">
                {Object.values(savedDocs).map(doc => (
                  <div key={doc.slug} className="flex items-center justify-between px-4 py-3 rounded-lg border" style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}>
                    <div className="flex items-center gap-3 min-w-0">
                      <FileText className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-[var(--text-primary)] truncate">{doc.title}</p>
                        <p className="text-[10px] text-[var(--text-muted)]">
                          {doc.brand} • {doc.sections?.reduce((s, sec) => s + sec.entries.length, 0)} codes • {new Date(doc.importedAt).toLocaleDateString('fr-FR')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link to={`/doc/${doc.slug}`} className="p-1.5 rounded-lg hover:bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--accent-color)] transition-colors">
                        <Eye className="w-4 h-4" />
                      </Link>
                      <button onClick={() => deleteImported(doc.slug)} className="p-1.5 rounded-lg hover:bg-red-500/10 text-[var(--text-muted)] hover:text-red-400 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* STEP: Processing */}
      {step === 'processing' && (
        <div className="glass-card p-16 text-center">
          <Loader2 className="w-12 h-12 mx-auto mb-4 animate-spin" style={{ color: 'var(--accent-color)' }} />
          <p className="text-lg font-semibold text-[var(--text-primary)] mb-2">Analyse en cours...</p>
          <p className="text-sm text-[var(--text-tertiary)]">{progress}</p>
          {file && <p className="text-xs text-[var(--text-muted)] mt-3">{file.name} ({(file.size / 1024).toFixed(0)} Ko)</p>}
        </div>
      )}

      {/* STEP: Preview */}
      {step === 'preview' && result && (
        <div className="space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: 'Pages', value: result.totalPages, icon: FileText },
              { label: 'Lignes', value: result.totalLines, icon: FileText },
              { label: 'Codes trouvés', value: result.totalCodes, icon: CheckCircle2 },
              { label: 'Sections', value: result.sections.length, icon: FolderOpen },
            ].map(s => (
              <div key={s.label} className="glass-card p-4 text-center">
                <s.icon className="w-4 h-4 mx-auto mb-1" style={{ color: 'var(--accent-color)' }} />
                <div className="text-xl font-bold text-[var(--text-primary)]">{s.value}</div>
                <div className="text-[10px] text-[var(--text-muted)]">{s.label}</div>
              </div>
            ))}
          </div>

          {result.totalCodes === 0 && (
            <div className="glass-card p-8 text-center">
              <AlertTriangle className="w-10 h-10 mx-auto mb-3 text-amber-400" />
              <p className="text-base font-semibold text-[var(--text-primary)] mb-2">Aucun code détecté automatiquement</p>
              <p className="text-sm text-[var(--text-tertiary)] mb-4">
                Le format de ce PDF n'est pas standard. Vous pouvez consulter le texte brut et ajouter manuellement les codes.
              </p>
              <button onClick={() => setRawVisible(!rawVisible)} className="btn-secondary text-sm">
                {rawVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                {rawVisible ? 'Masquer' : 'Voir'} le texte brut
              </button>
            </div>
          )}

          {/* Raw text toggle */}
          <div>
            <button onClick={() => setRawVisible(!rawVisible)} className="text-xs text-[var(--text-muted)] hover:text-[var(--accent-color)] flex items-center gap-1 mb-2 transition-colors">
              {rawVisible ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
              {rawVisible ? 'Masquer' : 'Afficher'} le texte brut extrait
            </button>
            {rawVisible && (
              <pre className="glass-card p-4 text-xs text-[var(--text-tertiary)] max-h-60 overflow-auto whitespace-pre-wrap font-mono leading-relaxed">
                {result.rawText}
              </pre>
            )}
          </div>

          {/* Extracted sections */}
          {sections.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                Codes extraits — {totalEnabled} sélectionnés
              </h3>
              {sections.map(section => (
                <div key={section.id} className="glass-card overflow-hidden">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left"
                    style={{ background: 'var(--bg-tertiary)' }}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={section.enabled}
                        onChange={(e) => { e.stopPropagation(); toggleSectionEnabled(section.id) }}
                        className="rounded"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <span className="text-sm font-semibold text-[var(--text-primary)]">{section.name}</span>
                      <span className="text-[10px] text-[var(--text-muted)] px-1.5 py-0.5 rounded-full" style={{ background: 'var(--bg-card)' }}>
                        {section.entries.filter(e => e.enabled).length}/{section.entries.length}
                      </span>
                    </div>
                    {openSections[section.id] ? <ChevronUp className="w-4 h-4 text-[var(--text-muted)]" /> : <ChevronDown className="w-4 h-4 text-[var(--text-muted)]" />}
                  </button>

                  {openSections[section.id] && (
                    <div className="px-4 py-3 space-y-1.5">
                      {/* Editable section name */}
                      <div className="flex items-center gap-2 mb-3">
                        <Edit3 className="w-3 h-3 text-[var(--text-muted)]" />
                        <input
                          type="text"
                          value={section.name}
                          onChange={(e) => updateSectionName(section.id, e.target.value)}
                          className="input-field text-xs px-2 py-1 flex-1"
                          placeholder="Nom de la section"
                        />
                      </div>

                      {section.entries.map(entry => (
                        <div key={entry.id} className="flex items-center gap-2 group">
                          <input
                            type="checkbox"
                            checked={entry.enabled}
                            onChange={() => toggleEntry(section.id, entry.id)}
                            className="rounded shrink-0"
                          />
                          <input
                            type="text"
                            value={entry.code}
                            onChange={(e) => updateEntry(section.id, entry.id, 'code', e.target.value)}
                            className="input-field text-xs px-2 py-1.5 w-20 font-mono font-bold shrink-0"
                            placeholder="Code"
                          />
                          <input
                            type="text"
                            value={entry.label}
                            onChange={(e) => updateEntry(section.id, entry.id, 'label', e.target.value)}
                            className="input-field text-xs px-2 py-1.5 flex-1"
                            placeholder="Description"
                          />
                          <button onClick={() => removeEntry(section.id, entry.id)} className="p-1 rounded text-[var(--text-muted)] hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all">
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}

                      <button onClick={() => addManualEntry(section.id)} className="flex items-center gap-1.5 text-xs text-[var(--accent-color)] hover:underline mt-2">
                        <Plus className="w-3 h-3" /> Ajouter un code manuellement
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button onClick={resetAll} className="btn-secondary text-sm">
              <ArrowLeft className="w-4 h-4" /> Recommencer
            </button>
            <button onClick={() => setStep('configure')} className="btn-primary text-sm" disabled={totalEnabled === 0}>
              <Save className="w-4 h-4" /> Configurer l'import ({totalEnabled} codes)
            </button>
          </div>
        </div>
      )}

      {/* STEP: Configure */}
      {step === 'configure' && (
        <div className="space-y-6">
          <div className="glass-card p-6 space-y-5">
            <h3 className="text-base font-bold text-[var(--text-primary)]">Configuration de l'import</h3>

            {/* Document title */}
            <div>
              <label className="text-xs font-medium text-[var(--text-secondary)] block mb-1.5">Nom du document</label>
              <input
                type="text"
                value={docTitle}
                onChange={(e) => setDocTitle(e.target.value)}
                className="input-field w-full text-sm px-3 py-2.5"
                placeholder="Ex: Défauts LCE Kone..."
              />
            </div>

            {/* Brand selection */}
            <div>
              <label className="text-xs font-medium text-[var(--text-secondary)] block mb-1.5">Marque d'ascenseur</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {brands.map(b => (
                  <button
                    key={b.id}
                    onClick={() => { setSelectedBrand(b.id); setSelectedColor(colorMap[b.id] || 'slate') }}
                    className={`px-3 py-2.5 rounded-lg border text-sm font-medium transition-all text-left ${
                      selectedBrand === b.id
                        ? 'border-[var(--accent-color)] bg-[hsl(var(--accent-hue)_70%_50%/0.1)]'
                        : 'border-[var(--border-color)] hover:border-[var(--accent-color)]'
                    }`}
                    style={selectedBrand === b.id ? { color: 'var(--accent-color)' } : { color: 'var(--text-secondary)', background: 'var(--bg-tertiary)' }}
                  >
                    <span className="block">{b.name}</span>
                    <span className="text-[10px] opacity-60">{b.categories.length} cat.</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="p-4 rounded-lg border" style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}>
              <h4 className="text-xs font-semibold text-[var(--text-muted)] uppercase mb-2">Résumé</h4>
              <div className="text-sm text-[var(--text-secondary)] space-y-1">
                <p><strong>Document :</strong> {docTitle || '(sans titre)'}</p>
                <p><strong>Marque :</strong> {brands.find(b => b.id === selectedBrand)?.name || 'Non sélectionnée'}</p>
                <p><strong>Sections :</strong> {sections.filter(s => s.enabled).length}</p>
                <p><strong>Codes défauts :</strong> {totalEnabled}</p>
                <p><strong>Source :</strong> {file?.name}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => setStep('preview')} className="btn-secondary text-sm">
              <ArrowLeft className="w-4 h-4" /> Retour
            </button>
            <button
              onClick={handleSave}
              disabled={!docTitle.trim() || !selectedBrand}
              className="btn-primary text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="w-4 h-4" /> Importer {totalEnabled} codes
            </button>
          </div>
        </div>
      )}

      {/* STEP: Done */}
      {step === 'done' && (
        <div className="glass-card p-12 text-center">
          <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-green-500" />
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">Import terminé !</h2>
          <p className="text-sm text-[var(--text-tertiary)] mb-6">
            {totalEnabled} codes défauts ont été importés pour <strong>{brands.find(b => b.id === selectedBrand)?.name}</strong>
          </p>
          <div className="flex items-center justify-center gap-3">
            <button onClick={resetAll} className="btn-secondary text-sm">
              <Plus className="w-4 h-4" /> Importer un autre PDF
            </button>
            <Link to={`/marque/${selectedBrand}`} className="btn-primary text-sm">
              <Eye className="w-4 h-4" /> Voir la marque
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
