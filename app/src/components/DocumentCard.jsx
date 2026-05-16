import { Link } from 'react-router-dom'
import { FileText, FileType, ExternalLink, File, ArrowRight } from 'lucide-react'

const typeConfig = {
  html: { icon: FileText, label: 'HTML', color: 'text-blue-400 bg-blue-400/10' },
  pdf: { icon: FileType, label: 'PDF', color: 'text-red-400 bg-red-400/10' },
  doc: { icon: File, label: 'DOC', color: 'text-green-400 bg-green-400/10' },
}

function CardContent({ doc, config }) {
  const Icon = config.icon
  return (
    <div className="flex items-start gap-3">
      <div className={`p-2 rounded-lg ${config.color} shrink-0`}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <h3 className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors truncate">
            {doc.title}
          </h3>
          {doc.internal
            ? <ArrowRight className="w-3 h-3 text-[var(--text-muted)] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
            : <ExternalLink className="w-3 h-3 text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
          }
        </div>
        <p className="text-xs text-[var(--text-tertiary)] line-clamp-2">{doc.description}</p>
        <div className="flex items-center gap-1.5 mt-1.5">
          <span className={`inline-block px-1.5 py-0.5 text-[9px] font-bold uppercase rounded ${config.color}`}>
            {config.label}
          </span>
          {doc.internal && (
            <span className="inline-block px-1.5 py-0.5 text-[9px] font-bold uppercase rounded" style={{ background: 'hsl(var(--accent-hue) 70% 50% / 0.1)', color: 'var(--accent-color)' }}>
              React
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function DocumentCard({ doc, index }) {
  const config = typeConfig[doc.type] || typeConfig.html
  const className = "glass-card-hover p-4 group cursor-pointer animate-slide-up block no-underline"
  const style = { animationDelay: `${index * 40}ms` }

  if (doc.internal) {
    return (
      <Link to={doc.href} className={className} style={style}>
        <CardContent doc={doc} config={config} />
      </Link>
    )
  }

  return (
    <a href={doc.href || '#'} target="_blank" rel="noopener noreferrer" className={className} style={style}>
      <CardContent doc={doc} config={config} />
    </a>
  )
}
