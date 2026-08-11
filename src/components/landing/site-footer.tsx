import { Container } from './ui'
import { Logo } from './logo'

const COLUMNS = [
  {
    title: 'Soluções',
    links: ['VSat ERP', 'Linha arc', 'Team', 'Sign', 'e-Pier'],
  },
  {
    title: 'Institucional',
    links: ['A Areco', 'Carreiras', 'Parceiros', 'Notícias'],
  },
  {
    title: 'Atendimento',
    links: ['Fale conosco', 'Central de ajuda', 'WhatsApp', 'Agent'],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr] lg:gap-16">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground text-pretty">
              Tecnologia que fortalece empresas para governarem seus próprios
              dados e decisões. Obstinados em fazer o extraordinário.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="text-[0.72rem] font-semibold tracking-[0.14em] text-foreground uppercase">
                  {col.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#contato"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Areco Consultoria e Tecnologia de
            Sistemas Ltda. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#contato"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Política de privacidade
            </a>
            <a
              href="#top"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Mapa do site
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
