import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from './logo'
import { CtaLink } from './ui'

const NAV = [
  { label: 'O Desafio', href: '#desafio' },
  { label: 'A Plataforma', href: '#plataforma' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Casos de Sucesso', href: '#casos' },
  { label: 'Diferenciais', href: '#diferenciais' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'transition-all duration-300',
          scrolled
            ? 'border-b border-border/20 bg-white/70 backdrop-blur-xl shadow-sm'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="rounded-md outline-none focus-visible:ring-3 focus-visible:ring-primary/40" aria-label="Areco VSat — início">
            <Logo tone={scrolled ? 'light' : 'dark'} />
          </a>

          <nav className="hidden items-center justify-between gap-6 lg:flex" aria-label="Principal">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap relative rounded-md px-3 py-2 text-sm transition-colors focus-visible:ring-3 focus-visible:ring-primary/40 focus-visible:outline-none",
                  scrolled ? "text-slate-600 hover:text-slate-900 font-medium" : "text-slate-300 hover:text-white"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <CtaLink href="#demo" className="whitespace-nowrap h-10 px-4 text-sm">
              Agendar Demonstração
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </CtaLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "grid size-10 place-items-center rounded-lg border lg:hidden",
              scrolled ? "border-slate-200 bg-white text-slate-900" : "border-white/20 bg-white/10 text-white"
            )}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-background lg:hidden"
          >
            <nav
              className="flex flex-col gap-1 px-5 pt-4 sm:px-8"
              aria-label="Mobile"
            >
              {NAV.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i + 0.05 }}
                  className="flex items-center justify-between border-b border-border/70 py-4 text-lg font-medium text-foreground"
                >
                  {item.label}
                  <ArrowRight className="size-4 text-muted-foreground" />
                </motion.a>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <CtaLink href="#demo" onClick={() => setOpen(false)} className="whitespace-nowrap">
                  Agendar Demonstração
                  <ArrowRight className="size-4" />
                </CtaLink>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
