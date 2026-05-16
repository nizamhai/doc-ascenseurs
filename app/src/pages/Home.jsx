import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Search, FileText, Building2, 
  FolderOpen, Shield, Zap, BookOpen, ChevronRight 
} from 'lucide-react'
import { stats } from '../data/brands'
import { useTheme } from '../contexts/ThemeContext'
import BrandCard from '../components/BrandCard'

export default function Home() {
  const { effectiveBrands } = useTheme()
  const [search, setSearch] = useState('')

  const allDocs = effectiveBrands.flatMap(brand =>
    brand.categories.flatMap(cat =>
      cat.docs.map(doc => ({ ...doc, brand: brand.name, brandId: brand.id, category: cat.name, colorBadge: brand.colorBadge }))
    )
  )

  const filteredDocs = search.length > 1
    ? allDocs.filter(doc =>
        doc.title.toLowerCase().includes(search.toLowerCase()) ||
        doc.description.toLowerCase().includes(search.toLowerCase()) ||
        doc.brand.toLowerCase().includes(search.toLowerCase())
      )
    : []

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-3xl" style={{ background: 'hsl(var(--accent-hue) 70% 50% / 0.04)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-20 md:pb-24">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in" style={{ background: 'hsl(var(--accent-hue) 70% 50% / 0.1)', border: '1px solid hsl(var(--accent-hue) 70% 50% / 0.2)', color: 'var(--accent-color)' }}>
              <Zap className="w-4 h-4" />
              Documentation technique ascenseurs
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight animate-slide-up text-[var(--text-primary)]">
              Aides Techniques{' '}
              <span className="gradient-text">Ascenseurs</span>
            </h1>

            <p className="text-base md:text-lg mb-10 leading-relaxed animate-slide-up text-[var(--text-tertiary)]" style={{ animationDelay: '100ms' }}>
              Toute la documentation technique pour la maintenance et le dépannage 
              des ascenseurs Schindler, Otis, ThyssenKrupp, Autinor, MEA et plus encore.
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto mb-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Rechercher : MICV, RCB, MLI, Eurolift..."
                  className="input-field w-full pl-12 pr-4 py-3.5 text-sm"
                />
              </div>
            </div>

            {/* Search Results */}
            {filteredDocs.length > 0 && (
              <div className="max-w-xl mx-auto mb-8 glass-card p-2 max-h-80 overflow-y-auto text-left">
                {filteredDocs.slice(0, 15).map((doc, i) => (
                  <Link
                    key={i}
                    to={doc.internal ? doc.href : `/marque/${doc.brandId}`}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors"
                  >
                    <FileText className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium text-[var(--text-primary)] block truncate">{doc.title}</span>
                      <span className="text-xs text-[var(--text-muted)]">{doc.category}</span>
                    </div>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[var(--bg-tertiary)] text-[var(--text-tertiary)]">{doc.brand}</span>
                  </Link>
                ))}
              </div>
            )}

            {search.length > 1 && filteredDocs.length === 0 && (
              <p className="text-[var(--text-muted)] text-sm mb-8">Aucun document trouvé pour « {search} »</p>
            )}

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-slide-up" style={{ animationDelay: '300ms' }}>
              <Link to="/marque/schindler" className="btn-primary text-sm">
                <BookOpen className="w-4 h-4" />
                Explorer la documentation
              </Link>
              <Link to="/mes-onglets" className="btn-secondary text-sm">
                Mes Onglets
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-16 max-w-3xl mx-auto">
            {[
              { label: 'Documents', value: `${stats.totalDocs}+`, icon: FileText },
              { label: 'Marques', value: stats.brands, icon: Building2 },
              { label: 'Catégories', value: stats.categories, icon: FolderOpen },
              { label: 'PDFs', value: `${stats.pdfDocs}+`, icon: Shield },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="glass-card p-4 text-center animate-slide-up"
                style={{ animationDelay: `${400 + i * 100}ms` }}
              >
                <stat.icon className="w-5 h-5 mx-auto mb-2" style={{ color: 'var(--accent-color)' }} />
                <div className="text-2xl font-bold text-[var(--text-primary)]">{stat.value}</div>
                <div className="text-xs text-[var(--text-muted)] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-10">
          <h2 className="section-title mb-4">
            Documentation par <span className="gradient-text">Marque</span>
          </h2>
          <p className="text-[var(--text-tertiary)] max-w-2xl mx-auto text-sm md:text-base">
            Sélectionnez une marque pour accéder à toute sa documentation technique.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {effectiveBrands.map((brand, index) => (
            <BrandCard key={brand.id} brand={brand} index={index} />
          ))}
        </div>
      </section>

      {/* Quick Access */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
        <div className="glass-card p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="section-title mb-3">Accès Rapide</h2>
              <p className="text-[var(--text-tertiary)] text-sm">
                Les documents les plus consultés par les techniciens.
              </p>
            </div>
            <div className="space-y-2">
              {[
                { title: 'Défauts MICV - Schindler', path: '/doc/schindler-micv' },
                { title: 'RCB I & II - Otis', path: '/doc/otis-rcb1' },
                { title: 'Défauts MLI - Autinor', path: '/doc/autinor-defmli' },
                { title: 'Kone V3F10', path: '/doc/kone-v3f10' },
                { title: 'Codes MEA NG02', path: '/doc/mea-ng02' },
              ].map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  className="flex items-center justify-between px-4 py-3 rounded-lg border transition-all group"
                  style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
                >
                  <span className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                    {item.title}
                  </span>
                  <ChevronRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent-color)] transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
