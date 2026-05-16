import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, FolderOpen, FileText, ChevronDown, ChevronUp, Search, FileUp, Sparkles, Trash2 } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import DocumentCard from '../components/DocumentCard'

function getImportedDocsForBrand(brandId) {
  try {
    const all = JSON.parse(localStorage.getItem('imported-docs') || '{}')
    return Object.values(all).filter(d => d.brandId === brandId)
  } catch { return [] }
}

function deleteImportedDoc(slug) {
  try {
    const all = JSON.parse(localStorage.getItem('imported-docs') || '{}')
    delete all[slug]
    localStorage.setItem('imported-docs', JSON.stringify(all))
  } catch {}
}

export default function BrandPage() {
  const { brandId } = useParams()
  const { effectiveBrands } = useTheme()
  const brand = effectiveBrands.find(b => b.id === brandId)
  const [search, setSearch] = useState('')
  const [openCategories, setOpenCategories] = useState({})
  const [importedDocs, setImportedDocs] = useState(() => getImportedDocsForBrand(brandId))

  const removeImported = (slug) => {
    deleteImportedDoc(slug)
    setImportedDocs(prev => prev.filter(d => d.slug !== slug))
  }

  if (!brand) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Marque non trouvée</h1>
        <p className="text-[var(--text-tertiary)] mb-8">La marque demandée n'existe pas.</p>
        <Link to="/" className="btn-primary">
          <ArrowLeft className="w-5 h-5" />
          Retour à l'accueil
        </Link>
      </div>
    )
  }

  const toggleCategory = (catName) => {
    setOpenCategories(prev => ({ ...prev, [catName]: !prev[catName] }))
  }

  const totalDocs = brand.categories.reduce((sum, cat) => sum + cat.docs.length, 0)

  const filteredCategories = brand.categories.map(cat => ({
    ...cat,
    docs: search.length > 1
      ? cat.docs.filter(doc =>
          doc.title.toLowerCase().includes(search.toLowerCase()) ||
          doc.description.toLowerCase().includes(search.toLowerCase())
        )
      : cat.docs
  })).filter(cat => cat.docs.length > 0)

  return (
    <div>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 md:pt-12 md:pb-14">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent-color)] text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </Link>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            {brand.logo ? (
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white flex items-center justify-center p-2.5 shadow-md ring-1 ring-black/5">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ) : (
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${brand.color} flex items-center justify-center`}>
                <span className="text-white text-2xl md:text-3xl font-bold">
                  {brand.name.charAt(0)}
                </span>
              </div>
            )}
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-[var(--text-primary)] mb-1">
                {brand.name}
              </h1>
              <p className="text-sm text-[var(--text-tertiary)]">{brand.description}</p>
              <div className="flex items-center gap-4 mt-2 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <FolderOpen className="w-3.5 h-3.5" />
                  {brand.categories.length} catégories
                </span>
                <span className="flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5" />
                  {totalDocs} documents
                </span>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="mt-6 max-w-sm relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`Rechercher dans ${brand.name}...`}
              className="input-field w-full pl-10 pr-4 py-2.5 text-sm"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="space-y-6">
          {filteredCategories.map((category, catIndex) => {
            const isOpen = openCategories[category.name] !== false

            return (
              <div key={category.name} className="animate-slide-up" style={{ animationDelay: `${catIndex * 80}ms` }}>
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg border transition-all group mb-3"
                  style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
                >
                  <div className="flex items-center gap-2.5">
                    <FolderOpen className="w-4 h-4" style={{ color: 'var(--accent-color)' }} />
                    <h2 className="text-sm md:text-base font-bold text-[var(--text-primary)]">
                      {category.name}
                    </h2>
                    <span className="text-[10px] text-[var(--text-muted)] px-1.5 py-0.5 rounded-full" style={{ background: 'var(--bg-card)' }}>
                      {category.docs.length}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[var(--text-muted)]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[var(--text-muted)]" />
                  )}
                </button>

                {isOpen && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {category.docs.map((doc, docIndex) => (
                      <DocumentCard key={doc.title} doc={doc} index={docIndex} />
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-16">
            <FileText className="w-12 h-12 text-[var(--text-muted)] mx-auto mb-4" />
            <p className="text-[var(--text-tertiary)]">Aucun document trouvé pour « {search} »</p>
          </div>
        )}
      </section>

      {/* Imported Docs for this brand */}
      {importedDocs.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="glass-card p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                <Sparkles className="w-4 h-4" style={{ color: 'var(--accent-color)' }} />
                Documents importés via PDF ({importedDocs.length})
              </h3>
              <Link to="/import-pdf" className="text-xs flex items-center gap-1 hover:text-[var(--accent-color)] text-[var(--text-muted)] transition-colors">
                <FileUp className="w-3 h-3" /> Importer un PDF
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {importedDocs.map(doc => (
                <div key={doc.slug} className="glass-card-hover p-4 relative group">
                  <Link to={`/doc/${doc.slug}`} className="block">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-violet-500/10 shrink-0">
                        <FileText className="w-4 h-4 text-violet-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-[var(--text-primary)] truncate">{doc.title}</h4>
                        <p className="text-[10px] text-[var(--text-muted)] mt-0.5">
                          {doc.sections?.reduce((s, sec) => s + sec.entries.length, 0)} codes • {new Date(doc.importedAt).toLocaleDateString('fr-FR')}
                        </p>
                        <span className="inline-block mt-1.5 text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-violet-500/10 text-violet-400">PDF Importé</span>
                      </div>
                    </div>
                  </Link>
                  <button
                    onClick={() => removeImported(doc.slug)}
                    className="absolute top-2 right-2 p-1 rounded opacity-0 group-hover:opacity-100 hover:bg-red-500/10 hover:text-red-400 text-[var(--text-muted)] transition-all"
                    title="Supprimer"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {importedDocs.length === 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <Link
            to="/import-pdf"
            className="flex items-center gap-3 p-4 rounded-xl border border-dashed transition-all hover:border-[var(--accent-color)] group"
            style={{ borderColor: 'var(--border-color)', background: 'var(--bg-tertiary)' }}
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'hsl(var(--accent-hue) 70% 50% / 0.1)' }}>
              <FileUp className="w-4 h-4 group-hover:text-[var(--accent-color)] text-[var(--text-muted)] transition-colors" />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                Importer un PDF pour {brand.name}
              </p>
              <p className="text-xs text-[var(--text-muted)]">L'IA extrait automatiquement les codes défauts</p>
            </div>
          </Link>
        </section>
      )}

      {/* Other Brands */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h3 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">Autres marques</h3>
        <div className="flex flex-wrap gap-2">
          {effectiveBrands.filter(b => b.id !== brandId).map(b => (
            <Link
              key={b.id}
              to={`/marque/${b.id}`}
              className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all border"
              style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
            >
              {b.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
