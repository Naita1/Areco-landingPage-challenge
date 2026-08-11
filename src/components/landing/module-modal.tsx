import { useEffect, useState } from 'react'
import type { ModuleData } from '../../data/modules-data'
import { X, CheckCircle2 } from 'lucide-react'

interface ModuleModalProps {
  module: ModuleData | null
  onClose: () => void
}

export function ModuleModal({ module, onClose }: ModuleModalProps) {
  const [renderedModule, setRenderedModule] = useState<ModuleData | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (module) {
      setRenderedModule(module)
      const timer = setTimeout(() => setIsVisible(true), 10)
      document.body.style.overflow = 'hidden'
      return () => clearTimeout(timer)
    } else {
      setIsVisible(false)
      const timer = setTimeout(() => {
        setRenderedModule(null)
        document.body.style.overflow = 'unset'
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [module])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!renderedModule) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        className={`relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xl transition-all duration-200 ease-out transform ${
          isVisible
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-2'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground outline-none"
          aria-label="Fechar"
        >
          <X className="size-5" />
        </button>

        <div>
          <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">
            {renderedModule.category === 'erp' ? 'Módulo ERP' : 'Aplicativo'}
          </span>
          <h2 className="mt-1 font-display text-2xl font-bold text-foreground sm:text-3xl">
            {renderedModule.title}
          </h2>
          <p className="mt-1 text-sm font-medium text-amber-600/90">
            {renderedModule.tagline}
          </p>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground border-b border-border pb-4">
          {renderedModule.description}
        </p>

        <div className="mt-6">
          <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Principais Funcionalidades
          </h3>

          <ul className="grid gap-3 sm:grid-cols-1">
            {renderedModule.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-foreground/90">
                <CheckCircle2 className="size-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}