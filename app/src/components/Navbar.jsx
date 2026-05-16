import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Wrench, Settings, FolderPlus, FileUp } from 'lucide-react'
import { brands } from '../data/brands'

const brandLinks = brands.map(b => ({ name: b.name, path: `/marque/${b.id}` }))

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const linkClass = (path) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-all ${
      isActive(path)
        ? 'bg-[hsl(var(--accent-hue)_70%_50%/0.15)] text-[var(--accent-color)]'
        : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]'
    }`

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-color)', backdropFilter: 'blur(12px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'hsl(var(--accent-hue) 70% 50% / 0.15)' }}>
              <Wrench className="w-4.5 h-4.5" style={{ color: 'var(--accent-color)' }} />
            </div>
            <div className="hidden sm:block">
              <span className="text-base font-bold text-[var(--text-primary)]">Ascenseurs</span>
              <span className="text-[10px] block text-[var(--text-muted)] -mt-0.5">Aides Techniques</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            <Link to="/" className={linkClass('/')}>Accueil</Link>
            {brandLinks.map((link) => (
              <Link key={link.path} to={link.path} className={linkClass(link.path)}>
                {link.name}
              </Link>
            ))}
            <div className="w-px h-6 bg-[var(--border-color)] mx-2" />
            <Link to="/mes-onglets" className={linkClass('/mes-onglets')}>
              <span className="flex items-center gap-1.5">
                <FolderPlus className="w-3.5 h-3.5" />
                Mes Onglets
              </span>
            </Link>
            <Link to="/import-pdf" className={linkClass('/import-pdf')}>
              <span className="flex items-center gap-1.5">
                <FileUp className="w-3.5 h-3.5" />
                Import PDF
              </span>
            </Link>
            <Link to="/options" className={linkClass('/options')}>
              <span className="flex items-center gap-1.5">
                <Settings className="w-3.5 h-3.5" />
                Options
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden border-b" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
          <div className="px-3 py-3 space-y-0.5 max-h-[70vh] overflow-y-auto">
            <Link to="/" onClick={() => setIsOpen(false)} className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive('/') ? 'bg-[hsl(var(--accent-hue)_70%_50%/0.15)] text-[var(--accent-color)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'}`}>
              Accueil
            </Link>
            <div className="px-4 pt-3 pb-1">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">Marques</span>
            </div>
            {brandLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path) ? 'bg-[hsl(var(--accent-hue)_70%_50%/0.15)] text-[var(--accent-color)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t my-2" style={{ borderColor: 'var(--border-color)' }} />
            <Link to="/mes-onglets" onClick={() => setIsOpen(false)} className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive('/mes-onglets') ? 'bg-[hsl(var(--accent-hue)_70%_50%/0.15)] text-[var(--accent-color)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'}`}>
              <FolderPlus className="w-4 h-4" />
              Mes Onglets
            </Link>
            <Link to="/import-pdf" onClick={() => setIsOpen(false)} className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive('/import-pdf') ? 'bg-[hsl(var(--accent-hue)_70%_50%/0.15)] text-[var(--accent-color)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'}`}>
              <FileUp className="w-4 h-4" />
              Import PDF
            </Link>
            <Link to="/options" onClick={() => setIsOpen(false)} className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive('/options') ? 'bg-[hsl(var(--accent-hue)_70%_50%/0.15)] text-[var(--accent-color)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'}`}>
              <Settings className="w-4 h-4" />
              Options
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
