import { Repeat, ShieldCheck, Network, KeyRound, Quote } from 'lucide-react'
import { Container, SectionLabel } from './ui'
import { Reveal } from './reveal'

const ITEMS = [
  {
    icon: Repeat,
    title: 'Reinvenção com integridade',
    desc: 'Único capaz de se reinventar e manter a integridade dos dados.',
  },
  {
    icon: ShieldCheck,
    title: 'Evolução sem interrupção',
    desc: 'Mais de 120 atualizações mensais entregam melhorias reais.',
  },
  {
    icon: Network,
    title: 'Ecossistema conectado',
    desc: 'VSat e a linha arc operam sozinhos e se conectam nativamente.',
  },
  {
    icon: KeyRound,
    title: 'Você no controle',
    desc: 'Tecnologia para que instituições permaneçam no controle da operação.',
  },
]

const TESTIMONIALS = [
  {
    client: 'Fiolux',
    sector: 'Indústria',
    quote: 'Ter um parceiro que nos acompanhe em todos os momentos da operação, não importa o que aconteça, é indispensável.',
    author: 'Victor Amorim, VP'
  },
  {
    client: 'Cromatek',
    sector: 'Indústria',
    quote: 'Zeramos os erros no tratamento de lotes, no controle de materiais de terceiros e na rastreabilidade.',
    author: 'Equipe Cromatek'
  },
  {
    client: 'Ada Tina',
    sector: 'Atacado / Cosméticos',
    quote: 'Valorizamos a abertura que temos. Ficamos muito tranquilos quanto à confiança e comprometimento.',
    author: 'Diretoria'
  },
  {
    client: 'Grupo Sabe',
    sector: 'Indústria',
    quote: 'Com a Areco, garantimos total segurança dos dados e integração entre as áreas da empresa.',
    author: 'Gestão de TI'
  },
  {
    client: 'Trael Transformadores',
    sector: 'Indústria',
    quote: 'Usamos praticamente todos os sistemas. Ter contato direto com a equipe faz toda a diferença.',
    author: 'Diretoria Executiva'
  }
]

export function Differentiators() {
  return (
    <section id="casos" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <SectionLabel>Casos de Sucesso</SectionLabel>
          <h2 className="mt-5 font-display text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
            Quem opera com a Areco.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Obstinados em fazer o extraordinário, geramos elos entre tecnologia de
            ponta e o futuro dos nossos clientes.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.client} delay={i * 0.05} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col flex-1">
                  <Quote className="size-6 text-primary/40 mb-4 shrink-0" />
                  <blockquote className="flex-1 text-[0.95rem] leading-relaxed text-foreground/90 font-medium">
                    "{t.quote}"
                  </blockquote>
                </div>
                <div className="mt-auto pt-4 flex flex-col">
                  <span className="font-display font-semibold text-primary">{t.client}</span>
                  <span className="text-[0.75rem] text-muted-foreground mt-1">{t.sector} &middot; {t.author}</span>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={5 * 0.05} className="h-full">
            <a href="#demo" className="group flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border bg-muted/20 p-6 sm:p-8 text-center transition-colors hover:border-primary/40 hover:bg-muted/40">
              <span className="grid size-12 place-items-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <Quote className="size-5" />
              </span>
              <div>
                <span className="font-display font-semibold text-foreground">Sua empresa aqui</span>
                <p className="mt-2 text-sm text-muted-foreground">Junte-se às indústrias que operam em alta performance.</p>
              </div>
            </a>
          </Reveal>
        </div>

        <div id="diferenciais" className="mt-24 border-t border-border pt-20 scroll-mt-20">
          <Reveal className="text-center mb-12">
            <h3 className="font-display text-2xl font-semibold">Os pilares da plataforma</h3>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="flex flex-col items-start gap-4 rounded-2xl bg-muted/30 p-6 border border-transparent hover:border-border transition-colors">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-[0.95rem] font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[0.8rem] leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
