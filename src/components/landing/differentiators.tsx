import { Repeat, ShieldCheck, Network, KeyRound, Quote, Star, TrendingUp } from 'lucide-react'
import { Container, SectionLabel } from './ui'
import { Reveal } from './reveal'

const ITEMS = [
  {
    icon: Repeat,
    title: 'Reinvenção com integridade',
    desc: 'Único ERP capaz de se reinventar mantendo a integridade absoluta dos dados legados.',
  },
  {
    icon: ShieldCheck,
    title: 'Evolução sem interrupção',
    desc: 'Mais de 120 atualizações mensais automáticas entregam melhorias e adequação fiscal em tempo real.',
  },
  {
    icon: Network,
    title: 'Ecossistema conectado',
    desc: 'O Núcleo VSat e a linha Arc operam de forma autônoma e se conectam nativamente sem custos extras de API.',
  },
  {
    icon: KeyRound,
    title: 'Você no controle',
    desc: 'Arquitetura modular desenhada para que gestores permaneçam no controle total da operação.',
  },
]

const TESTIMONIALS = [
  {
    client: 'Fiolux',
    sector: 'Indústria Elétrica',
    quote: 'Ter um parceiro que nos acompanhe em todos os momentos da operação, não importa a complexidade, é indispensável.',
    author: 'Victor Amorim',
    role: 'Vice-Presidente',
    metric: '99.8% Uptime Operacional',
  },
  {
    client: 'Cromatek',
    sector: 'Eletrônica & Manufatura',
    quote: 'Zeramos os erros no tratamento de lotes, no controle de materiais de terceiros e conquistamos rastreabilidade total.',
    author: 'Equipe de Operações',
    role: 'Gestão Industrial',
    metric: '-45% Tempo de Triagem',
  },
  {
    client: 'Ada Tina',
    sector: 'Cosméticos & Dermo',
    quote: 'Valorizamos a proximidade do atendimento. Ficamos extremamente tranquilos quanto à conformidade fiscal e segurança.',
    author: 'Diretoria de TI',
    role: 'Governança',
    metric: '100% Adequação Fiscal',
  },
  {
    client: 'Grupo Sabe',
    sector: 'Holdings & Indústria',
    quote: 'Com o VSat ERP, garantimos total integridade de dados e sinergia em tempo real entre todas as áreas do grupo.',
    author: 'Gestão Executiva',
    role: 'Controladoria',
    metric: '+30% Eficiência em Controladoria',
  },
  {
    client: 'Trael Transformadores',
    sector: 'Bens de Capital',
    quote: 'Usamos praticamente todo o ecossistema Areco. Ter contato direto com os especialistas faz toda a diferença.',
    author: 'Diretoria Executiva',
    role: 'Conselho de Administração',
    metric: 'Redução drástica em retrabalho',
  }
]

export function Differentiators() {
  return (
    <section id="casos" className="scroll-mt-20 py-20 sm:py-28 bg-linear-to-b from-transparent via-muted/10 to-transparent">
      <Container>
        <Reveal className="max-w-2xl">
          <SectionLabel>Casos de Sucesso & Destaques</SectionLabel>
          <h2 className="mt-5 font-display text-3xl leading-tight font-bold tracking-tight text-balance sm:text-4xl">
            Empresas líderes que impulsionam resultados com a Areco.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A união entre tecnologia enterprise de ponta e um modelo de parceria humana contínua.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.client} delay={i * 0.05} className="h-full">
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card/60 p-6 sm:p-8 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">

                <div className="flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex text-amber-500 gap-0.5">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="size-3.5 fill-amber-500/90 text-amber-500" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[0.7rem] font-medium text-primary border border-primary/20">
                      <TrendingUp className="size-3" />
                      {t.metric}
                    </span>
                  </div>

                  <Quote className="size-7 text-primary/30 mb-3 shrink-0" />

                  <blockquote className="flex-1 text-[0.925rem] leading-relaxed text-foreground/90 font-medium italic">
                    "{t.quote}"
                  </blockquote>
                </div>

                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-foreground text-base group-hover:text-primary transition-colors">
                      {t.client}
                    </h4>
                    <p className="text-[0.75rem] text-muted-foreground mt-0.5">
                      {t.author} &middot; <span className="opacity-80">{t.role}</span>
                    </p>
                  </div>
                  <span className="text-[0.7rem] px-2 py-1 rounded bg-muted/60 text-muted-foreground font-medium">
                    {t.sector}
                  </span>
                </div>

              </div>
            </Reveal>
          ))}

          <Reveal delay={5 * 0.05} className="h-full">
            <a
              href="#demo"
              className="group flex h-full flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-6 sm:p-8 text-center transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-md"
            >
              <span className="grid size-12 place-items-center rounded-full bg-primary/20 text-primary transition-transform group-hover:scale-110">
                <Quote className="size-6" />
              </span>
              <div>
                <span className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  Sua empresa aqui
                </span>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground max-w-[220px]">
                  Descubra como o VSat ERP pode transformar a eficiência do seu ecossistema industrial.
                </p>
                <span className="inline-block mt-4 text-xs font-semibold text-primary underline underline-offset-4">
                  Agendar um diagnóstico →
                </span>
              </div>
            </a>
          </Reveal>
        </div>

        <div id="diferenciais" className="mt-24 border-t border-border/80 pt-20 scroll-mt-20">
          <Reveal className="text-center mb-12">
            <h3 className="font-display text-2xl font-bold tracking-tight">
              Os pilares da plataforma Areco
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Construído para atender à alta complexidade das operações brasileiras.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="flex flex-col items-start gap-4 rounded-2xl bg-card/40 p-6 border border-border/60 hover:border-primary/40 hover:bg-card/80 transition-all duration-300 hover:shadow-md">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <h4 className="text-[0.95rem] font-bold text-foreground">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-[0.825rem] leading-relaxed text-muted-foreground">
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