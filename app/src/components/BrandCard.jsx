import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, FolderOpen } from 'lucide-react'

export default function BrandCard({ brand, index }) {
  const totalDocs = brand.categories.reduce((sum, cat) => sum + cat.docs.length, 0)
  const [imgErr, setImgErr] = useState(false)

  return (
    <Link
      to={`/marque/${brand.id}`}
      className="glass-card-hover p-5 group block animate-slide-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start justify-between mb-3">
        {brand.logo && !imgErr ? (
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-sm ring-1 ring-black/5">
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-w-full max-h-full object-contain"
              onError={() => setImgErr(true)}
            />
          </div>
        ) : (
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${brand.color} flex items-center justify-center`}>
            <span className="text-white text-lg font-bold">
              {brand.name.charAt(0)}
            </span>
          </div>
        )}
        <ChevronRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent-color)] group-hover:translate-x-0.5 transition-all" />
      </div>

      <h3 className="text-base font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-color)] transition-colors">
        {brand.name}
      </h3>
      <p className="text-xs text-[var(--text-tertiary)] mb-3 line-clamp-2">
        {brand.description}
      </p>

      <div className="flex items-center gap-3 text-[11px] text-[var(--text-muted)]">
        <span className="flex items-center gap-1">
          <FolderOpen className="w-3 h-3" />
          {brand.categories.length} cat.
        </span>
        <span>{totalDocs} docs</span>
      </div>
    </Link>
  )
}
