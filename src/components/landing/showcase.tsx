import { Globe, Layers3, Sparkles, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Container, SectionLabel } from './ui'
import { Reveal } from './reveal'
import { ProductWindow } from './product-window'

const LEFT = [
  {
    icon: Globe,
    title: 'Nativo na web',
    desc: 'Opera 100% pelo navegador, sem instalação e de qualquer lugar.',
  },
  {
    icon: Layers3,
    title: 'Três dimensões, um dado',
    desc: 'Físico, financeiro e fiscal sempre coerentes entre si.',
  },
]

const RIGHT = [
  {
    icon: Sparkles,
    title: 'Insights em tempo real',
    desc: 'A IA do VSat lê a operação enquanto ela acontece.',
  },
  {
    icon: ShieldCheck,
    title: 'Rastro completo',
    desc: 'Documentos acompanhados de ponta a ponta, com integridade.',
  },
]

function Annotation({
  icon: Icon,
  title,
  desc,
  align,
}: {
  icon: React.ElementType
  title: string
  desc: string
  align: 'left' | 'right'
}) {
  return (
    <div
      className={cn(
        'rounded-xl border border-ink-border bg-white/4 p-4',
        align === 'right' && 'lg:text-right',
      )}
    >
      <span
        className={cn(
          'inline-grid size-9 place-items-center rounded-lg bg-primary/15 text-primary',
        )}
      >
        <Icon className="size-4.5" />
      </span>
      <h3 className="mt-3 text-[0.92rem] font-semibold text-ink-foreground">
        {title}
      </h3>
      <p className="mt-1 text-[0.8rem] leading-relaxed text-ink-muted">{desc}</p>
    </div>
  )
}

export function Showcase() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-ink-foreground sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(1 0 0 / 0.035) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.035) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(120% 90% at 50% 30%, black 30%, transparent 78%)',
        }}
      />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel tone="dark" className="justify-center">
            O produto
          </SectionLabel>
          <h2 className="mt-5 font-display text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
            Sua operação inteira, legível em uma só tela.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted text-pretty">
            Do lançamento à decisão: a mesma informação, viva e consistente, do
            chão de fábrica à controladoria.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,600px)_minmax(0,1fr)] lg:items-center lg:gap-8">
          <div className="order-2 grid gap-4 sm:grid-cols-2 lg:order-1 lg:grid-cols-1">
            {LEFT.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <Annotation {...a} align="right" />
              </Reveal>
            ))}
          </div>

          <Reveal className="order-1 lg:order-2" y={24}>
            <ProductWindow />
          </Reveal>

          <div className="order-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {RIGHT.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <Annotation {...a} align="left" />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
