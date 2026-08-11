import { useState } from 'react'
import { ArrowRight, Check, Clock } from 'lucide-react'
import { Container } from './ui'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

const BENEFITS = [
  'Diagnóstico da sua operação sem compromisso',
  'Demonstração guiada por um especialista',
  'Um plano de implantação para a sua realidade',
]

export function FinalCta() {
  const [sent, setSent] = useState(false)
  const [values, setValues] = useState({ nome: '', email: '', empresa: '' })

  const update = (key: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.value }))

  return (
    <section id="demo" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-ink-border bg-ink px-6 py-12 text-ink-foreground sm:px-12 sm:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full opacity-50 blur-3xl"
              style={{
                background:
                  'radial-gradient(closest-side, oklch(0.645 0.181 41 / 0.5), transparent)',
              }}
            />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-ink-border bg-white/5 px-3 py-1.5 text-[0.72rem] font-medium text-ink-muted">
                  <Clock className="size-3.5 text-primary" />
                  Resposta em minutos
                </span>
                <h2 className="mt-6 font-display text-3xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-4xl">
                  Construindo o futuro dos negócios com tecnologia moldada à sua realidade.
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted">
                  Fale com um especialista e veja, na prática, como o VSat ERP
                  pode apoiar a sua operação de ponta a ponta.
                </p>
                <ul className="mt-8 flex flex-col gap-3">
                  {BENEFITS.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-ink-foreground/90">
                      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary/20 text-primary">
                        <Check className="size-3" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-ink-border bg-white/4 p-6 sm:p-8">
                {sent ? (
                  <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
                    <span className="grid size-14 place-items-center rounded-full bg-primary/15 text-primary">
                      <Check className="size-7" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold">
                      Recebemos o seu contato.
                    </h3>
                    <p className="mt-2 max-w-xs text-sm text-ink-muted">
                      Um especialista da Areco vai falar com você em instantes
                      para apresentar o VSat.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setSent(true)
                    }}
                    className="flex flex-col gap-4"
                  >
                    <h3 className="font-display text-lg font-semibold">
                      Solicitar demonstração
                    </h3>
                    <Field
                      id="nome"
                      label="Nome"
                      value={values.nome}
                      onChange={update('nome')}
                      autoComplete="name"
                      placeholder="Seu nome"
                    />
                    <Field
                      id="email"
                      label="Email corporativo"
                      type="email"
                      value={values.email}
                      onChange={update('email')}
                      autoComplete="email"
                      placeholder="voce@empresa.com.br"
                    />
                    <Field
                      id="empresa"
                      label="Empresa"
                      value={values.empresa}
                      onChange={update('empresa')}
                      autoComplete="organization"
                      placeholder="Nome da empresa"
                    />
                    <button
                      type="submit"
                      className="group mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-lg
                       bg-primary px-6 text-[0.95rem] font-medium text-primary-foreground shadow-[0_10px_24px_-12px_oklch(0.645_0.181_41/0.8)] 
                       transition-all duration-200 hover:brightness-[1.06] focus-visible:ring-3 focus-visible:ring-primary/40 
                       focus-visible:ring-offset-2 focus-visible:ring-offset-ink focus-visible:outline-none active:translate-y-px"
                    >
                      Agendar Demonstração
                      <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </button>
                    <p className="text-[0.72rem] leading-relaxed text-ink-muted">
                      Ao enviar, você concorda com a Política de Privacidade. Seus
                      dados serão usados exclusivamente para contato.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

function Field({
  id,
  label,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { id: string; label: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[0.8rem] font-medium text-ink-foreground/90">
        {label}
      </label>
      <input
        id={id}
        name={id}
        required
        className={cn(
          'h-11 rounded-lg border border-ink-border bg-ink/40 px-3.5 text-sm text-ink-foreground placeholder:text-ink-muted/70 outline-none transition-colors focus:border-primary/60 focus:ring-3 focus:ring-primary/20',
          className,
        )}
        {...props}
      />
    </div>
  )
}
