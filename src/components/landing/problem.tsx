import { Layers, LineChart, ScrollText, Unplug } from 'lucide-react'
import { Container, SectionLabel } from './ui'
import { Reveal } from './reveal'

const PAINS = [
  {
    icon: Unplug,
    title: 'Sistemas que não conversam',
    desc: 'Operação espalhada por planilhas e módulos isolados. O mesmo dado é digitado várias vezes — e diverge em cada lugar.',
  },
  {
    icon: LineChart,
    title: 'Decisão no escuro',
    desc: 'Sem uma visão única, a gestão reage tarde. Relatórios chegam consolidados manualmente e já nascem desatualizados.',
  },
  {
    icon: ScrollText,
    title: 'Risco fiscal crescente',
    desc: 'A Reforma Tributária muda as regras da operação. Conformidade que depende de ajuste manual vira exposição.',
  },
  {
    icon: Layers,
    title: 'Perda de integridade',
    desc: 'Quanto mais a empresa cresce, mais difícil manter o físico, o financeiro e o fiscal coerentes entre si.',
  },
]

export function Problem() {
  return (
    <section id="desafio" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel>O desafio</SectionLabel>
              <h2 className="mt-5 font-display text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
                Crescer não pode significar perder o controle da operação.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                Toda transação existe em três dimensões: física, financeira e fiscal.
                Sistemas fragmentados geram retrabalho e inconsistência. O VSat conecta toda a
                sua gestão sem redundâncias, trazendo a verdade única para o seu negócio.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
              {PAINS.map((pain, i) => (
                <Reveal key={pain.title} delay={i * 0.06} className="h-full">
                  <div className="flex h-full flex-col gap-3 bg-card p-6">
                    <span className="grid size-9 place-items-center rounded-lg bg-muted text-muted-foreground">
                      <pain.icon className="size-4.5" />
                    </span>
                    <h3 className="text-[0.98rem] font-semibold text-foreground">
                      {pain.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {pain.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
