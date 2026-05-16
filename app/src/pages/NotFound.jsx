import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-extrabold font-display gradient-text mb-4">404</div>
        <h1 className="text-2xl font-bold text-white mb-3">Page non trouvée</h1>
        <p className="text-dark-400 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/" className="btn-primary">
            <Home className="w-5 h-5" />
            Accueil
          </Link>
          <button onClick={() => window.history.back()} className="btn-secondary">
            <ArrowLeft className="w-5 h-5" />
            Retour
          </button>
        </div>
      </div>
    </div>
  )
}
