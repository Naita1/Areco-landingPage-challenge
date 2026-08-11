import {
  Globe,
  Gauge,
  Landmark,
  Blocks,
  Anchor,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Container, SectionLabel } from './ui'
import { Reveal } from './reveal'

export function ValueProps() {
  return (
    <section id="plataforma" className="scroll-mt-20 bg-muted/40 py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <SectionLabel>A plataforma</SectionLabel>
          <h2 className="mt-5 font-display text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
            Um ecossistema único, construído para durar e se reinventar.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            O VSat parte de uma premissa: cada organização é única. A plataforma
            se molda à sua operação sem abrir mão da integridade dos dados.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <Reveal className="lg:row-span-2">
            <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-border bg-ink p-7 text-ink-foreground">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 -right-10 h-48 w-48 rounded-full opacity-60 blur-3xl"
                style={{
                  background:
                    'radial-gradient(closest-side, oklch(0.645 0.181 41 / 0.55), transparent)',
                }}
              />
              <span className="relative grid size-11 place-items-center rounded-xl bg-primary/15 text-primary">
                <Sparkles className="size-5" />
              </span>
              <h3 className="relative mt-6 font-display text-xl font-semibold">
                Areco Insights
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-ink-muted">
                A camada de inteligência artificial integrada ao VSat. Lê a sua
                operação em tempo real e transforma dados em recomendações
                acionáveis — sem exportar nada para fora.
              </p>

              <div className="relative mt-6 flex flex-col gap-2.5">
                {[
                  'Antecipar créditos fiscais libera R$ 214 mil em caixa',
                  'Margem 2,1 p.p. acima do trimestre anterior',
                  'Ruptura provável em 3 itens nos próximos 12 dias',
                ].map((line) => (
                  <div
                    key={line}
                    className="flex items-start gap-2.5 rounded-lg border border-ink-border bg-white/4 px-3 py-2.5"
                  >
                    <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 text-primary" />
                    <span className="text-[0.8rem] leading-snug text-ink-foreground/90">
                      {line}
                    </span>
                  </div>
                ))}
              </div>

              <div className="relative mt-auto pt-6 text-[0.72rem] text-ink-muted">
                Insights ilustrativos · gerados a partir da sua base
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-2">
            <ValueCard
              icon={Globe}
              title="Nativo na web. ERP 4.0"
              desc="Uma experiência de ERP repensada em cada detalhe e entregue direto pelo navegador — sem instalação, sem dificuldade de adaptação, acessível de qualquer lugar."
              wide
            />
          </Reveal>

          <Reveal delay={0.1}>
            <ValueCard
              icon={Gauge}
              title="Potência inigualável"
              desc="Máxima velocidade de processamento por um navegador, para operar volumes reais sem travar a rotina."
            />
          </Reveal>

          <Reveal delay={0.15}>
            <div id="reforma" className="scroll-mt-28 h-full">
              <ValueCard
                icon={Landmark}
                title="Pronto para a Reforma Tributária"
                desc="Suporte a IBS, CBS e Imposto Seletivo. Conformidade que acompanha a legislação e não depende de ajuste manual."
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <ValueCard
              icon={Blocks}
              title="Modular e verticalizado"
              desc="Sistemas modulares que crescem com o seu negócio. Ativa o que precisa e mantém os dados fluindo entre as áreas."
              wide
            />
          </Reveal>

          <Reveal delay={0.15}>
            <ValueCard
              icon={Anchor}
              title="Operação preservada"
              desc="Pelo e-Pier, plataforma nativa do VSat, a sua operação é preservada mesmo com a evolução contínua do sistema."
            />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function ValueCard({
  icon: Icon,
  title,
  desc,
  wide,
}: {
  icon: React.ElementType
  title: string
  desc: string
  wide?: boolean
}) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-colors duration-200 hover:border-foreground/15">
      <span className="grid size-11 place-items-center rounded-xl bg-muted text-foreground transition-colors duration-200 group-hover:bg-primary/10 group-hover:text-primary">
        <Icon className="size-5" />
      </span>
      <h3 className="mt-6 font-display text-lg font-semibold text-foreground">
        {title}
      </h3>
      <p
        className={cn(
          'mt-3 text-sm leading-relaxed text-muted-foreground',
          wide && 'max-w-xl',
        )}
      >
        {desc}
      </p>
    </article>
  )
}
