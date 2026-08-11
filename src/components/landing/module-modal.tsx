import { memo, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import type { ModuleData } from '../../data/modules-data'
import { X, CheckCircle2 } from 'lucide-react'

interface ModuleModalProps {
  module: ModuleData | null
  onClose: () => void
}

const overlayTransition = { duration: 0.18, ease: [0.2, 0, 0, 1] } as const
const cardTransition = { duration: 0.2, ease: [0.16, 1, 0.3, 1] } as const

export const ModuleModal = memo(function ModuleModal({
  module,
  onClose,
}: ModuleModalProps) {
  useEffect(() => {
    if (module) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = 'unset'
      }
    }
  }, [module])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <AnimatePresence mode="wait">
      {module && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            key="modal-overlay"
            onClick={onClose}
            className="fixed inset-0 bg-black/60 will-change-[opacity]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={overlayTransition}
          />

          <motion.div
            key="modal-card"
            className="relative z-10 w-full max-w-4xl max-h-[85vh] overflow-y-auto no-scrollbar rounded-2xl border border-border bg-card shadow-xl will-change-[transform,opacity]"
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 6 }}
            transition={cardTransition}
          >
            <div className="p-5 sm:p-7">
              <button
                onClick={onClose}
                className="absolute top-3.5 right-3.5 rounded-full p-2 text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground outline-none cursor-pointer"
                aria-label="Fechar"
              >
                <X className="size-5" />
              </button>

              <div className="pr-8">
                <span className="text-[11px] font-semibold tracking-wider text-amber-600 uppercase">
                  {module.category === 'erp'
                    ? 'Módulo ERP'
                    : module.category === 'arc'
                      ? 'Aplicativo'
                      : 'Addon'}
                </span>
                <h2 className="mt-1 font-display text-xl font-bold text-foreground sm:text-2xl">
                  {module.title}
                </h2>
                <p className="mt-0.5 text-sm font-medium text-amber-600/90">
                  {module.tagline}
                </p>
              </div>

              <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground border-b border-border pb-3.5">
                {module.description}
              </p>

              <div className="mt-4">
                <h3 className="font-display text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Principais Funcionalidades
                </h3>

                <ul className="grid gap-2.5 md:grid-cols-2">
                  {module.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-[13px] text-foreground/90"
                    >
                      <CheckCircle2 className="size-3.5 text-amber-600 shrink-0 mt-[3px]" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
})