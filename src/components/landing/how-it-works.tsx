import { Compass, Settings2, Workflow, RefreshCw } from 'lucide-react'
import { Container, SectionLabel } from './ui'
import { Reveal } from './reveal'

const STEPS = [
  {
    icon: Compass,
    title: 'Diagnóstico',
    desc: 'Mapeamos a sua operação de ponta a ponta. O VSat parte do princípio de que cada organização é única.',
  },
  {
    icon: Settings2,
    title: 'Implantação com o Maestro',
    desc: 'Um único lugar para implantar. O Maestro orquestra o ambiente, treina e certifica os usuários para operá-lo.',
  },
  {
    icon: Workflow,
    title: 'Operação integrada',
    desc: 'Físico, financeiro e fiscal passam a fluir em uma só cadeia de valor, com o Areco Insights em tempo real.',
  },
  {
    icon: RefreshCw,
    title: 'Evolução contínua',
    desc: 'Mais de 120 atualizações mensais chegam sem interromper a rotina — a operação é preservada pelo e-Pier.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <SectionLabel>Como funciona</SectionLabel>
          <h2 className="mt-5 font-display text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
            Da sua realidade à operação no ar, com método.
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute top-5 right-0 left-0 hidden h-px bg-border lg:block"
          />
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 0.08}>
                <div className="relative flex flex-col">
                  <div className="flex items-center gap-3">
                    <span className="relative z-10 grid size-10 place-items-center rounded-full border border-border bg-card font-display text-sm font-semibold text-primary">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="h-px flex-1 bg-border lg:hidden" />
                  </div>
                  <span className="mt-6 grid size-9 place-items-center rounded-lg bg-muted text-foreground">
                    <step.icon className="size-4.5" />
                  </span>
                  <h3 className="mt-4 text-[1.02rem] font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
