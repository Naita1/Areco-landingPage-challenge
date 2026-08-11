import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Play } from 'lucide-react'
import { Container, CtaLink } from './ui'
import { ProductWindow } from './product-window'

const CHIPS = [
  'Nativo na Web · ERP 4.0',
  'Areco Insights · IA integrada',
  'Pronto para a Reforma Tributária',
]

export function Hero() {
  const reduce = useReducedMotion()

  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink text-ink-foreground"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(1 0 0 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.04) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(120% 80% at 50% 0%, black 30%, transparent 75%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-105 w-205 -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, oklch(0.645 0.181 41 / 0.45), transparent)',
        }}
      />

      <Container className="relative pt-28 pb-16 sm:pt-36 sm:pb-20">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.09, delayChildren: 0.05 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={item} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-border bg-white/5 px-3.5 py-1.5 text-[0.72rem] font-medium text-ink-muted">
              <span className="size-1.5 rounded-full bg-primary" />
              Gestão Empresarial de Alta Performance
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            transition={{ duration: 0.5 }}
            className="mt-6 font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
          >
            Evolua sua gestão sem perder o controle do seu negócio.
          </motion.h1>

          <motion.p
            variants={item}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-muted text-pretty sm:text-lg"
          >
            Conecte a gestão física, financeira e fiscal em um único ambiente nativo na web. Decisões baseadas em dados em tempo real, inteligência artificial integrada e conformidade tributária automática.
          </motion.p>

          <motion.div
            variants={item}
            transition={{ duration: 0.5 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <CtaLink href="#demo" className="w-full sm:w-auto">
              Solicitar Demonstração
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </CtaLink>
            <CtaLink
              href="#produtos"
              variant="secondary-dark"
              className="w-full sm:w-auto"
            >
              <Play className="size-3.5" />
              Conhecer o VSat
            </CtaLink>
          </motion.div>

          <motion.ul
            variants={item}
            transition={{ duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
          >
            {CHIPS.map((chip) => (
              <li
                key={chip}
                className="flex items-center gap-2 text-[0.78rem] text-ink-muted"
              >
                <span className="size-1 rounded-full bg-primary/70" />
                {chip}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.21, 0.5, 0.32, 1] }}
          className="relative mx-auto mt-14 max-w-4xl sm:mt-16"
        >
          <ProductWindow />
        </motion.div>
      </Container>
    </section>
  )
}
