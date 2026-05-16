import { Wrench, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'hsl(var(--accent-hue) 70% 50% / 0.15)' }}>
                <Wrench className="w-4 h-4" style={{ color: 'var(--accent-color)' }} />
              </div>
              <div>
                <span className="text-base font-bold text-[var(--text-primary)]">Ascenseurs</span>
                <span className="text-[10px] block text-[var(--text-muted)] -mt-0.5">Aides Techniques</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[var(--text-tertiary)]">
              Documentation technique pour la maintenance et le dépannage des ascenseurs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-3 text-[var(--text-muted)]">Marques</h3>
            <ul className="space-y-1.5">
              {['Schindler', 'Otis', 'Autinor', 'ThyssenKrupp', 'MEA', 'Kone'].map((brand) => (
                <li key={brand}>
                  <Link
                    to={`/marque/${brand.toLowerCase()}`}
                    className="text-sm text-[var(--text-tertiary)] hover:text-[var(--accent-color)] transition-colors"
                  >
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-3 text-[var(--text-muted)]">Informations</h3>
            <ul className="space-y-1.5 text-sm text-[var(--text-tertiary)]">
              <li>Site de documentation technique</li>
              <li>Réservé aux techniciens ascensoristes</li>
              <li>Données à titre indicatif</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: 'var(--border-color)' }}>
          <p className="text-xs text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} Manoeuvres Ascenseurs
          </p>
          <p className="text-xs text-[var(--text-muted)] flex items-center gap-1">
            Fait avec <Heart className="w-3 h-3 text-red-500 fill-red-500" /> pour les techniciens
          </p>
        </div>
      </div>
    </footer>
  )
}
