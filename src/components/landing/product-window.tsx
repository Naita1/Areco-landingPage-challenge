import {
  ArrowUpRight,
  Boxes,
  CircleDollarSign,
  LayoutDashboard,
  Lock,
  Search,
  Sparkles,
  TrendingUp,
  Users,
  Wallet,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const SIDEBAR = [
  { icon: LayoutDashboard, label: 'Controladoria', active: true },
  { icon: Wallet, label: 'Financeiro' },
  { icon: CircleDollarSign, label: 'Comercial' },
  { icon: Boxes, label: 'Materiais' },
  { icon: Users, label: 'Pessoas' },
]

const KPIS = [
  { label: 'Receita líquida', value: 'R$ 4,82M', delta: '+12,4%', up: true },
  { label: 'Margem de contribuição', value: '38,6%', delta: '+2,1 p.p.', up: true },
  { label: 'Fluxo de caixa', value: 'R$ 1,17M', delta: '+8,9%', up: true },
]

const BARS = [42, 55, 48, 63, 58, 72, 68, 84, 79, 91, 86, 97]

const LEDGER = [
  { doc: 'NF-e 48.221', dim: 'Fiscal', value: 'R$ 128.400', status: 'Autorizada', tone: 'ok' },
  { doc: 'Pedido 9.117', dim: 'Comercial', value: 'R$ 86.900', status: 'Faturado', tone: 'ok' },
  { doc: 'OP 3.402', dim: 'Produção', value: 'R$ 54.220', status: 'Em curso', tone: 'wait' },
]

export function ProductWindow({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-black/10 bg-card shadow-[0_40px_80px_-30px_oklch(0.2_0.02_255/0.45)]',
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-border bg-muted/60 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
        </div>
        <div className="mx-auto flex w-full max-w-xs items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-[0.7rem] text-muted-foreground">
          <Lock className="size-3" />
          <span className="truncate">app.vsat.areco.com.br/controladoria</span>
        </div>
        <div className="hidden size-6 place-items-center rounded-md text-muted-foreground sm:grid">
          <Search className="size-3.5" />
        </div>
      </div>

      <div className="flex">
        <aside className="hidden w-42 shrink-0 border-r border-border bg-muted/30 p-3 sm:block">
          <div className="px-2 pb-2 text-[0.6rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
            Sistemas
          </div>
          <ul className="flex flex-col gap-0.5">
            {SIDEBAR.map(({ icon: Icon, label, active }) => (
              <li key={label}>
                <span
                  className={cn(
                    'flex items-center gap-2.5 rounded-md px-2.5 py-2 text-[0.78rem] font-medium',
                    active
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground',
                  )}
                >
                  <Icon className="size-4" />
                  {label}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-lg border border-border bg-card p-3">
            <div className="flex items-center gap-1.5 text-[0.7rem] font-semibold text-foreground">
              <Sparkles className="size-3.5 text-primary" />
              Insights
            </div>
            <p className="mt-1 text-[0.65rem] leading-relaxed text-muted-foreground">
              3 recomendações em tempo real
            </p>
          </div>
        </aside>

        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-[0.7rem] text-muted-foreground">Controladoria</div>
              <div className="font-display text-[0.98rem] font-semibold text-foreground">
                Painel financeiro
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[0.68rem] font-medium text-primary">
              <span className="size-1.5 animate-pulse rounded-full bg-primary" />
              Tempo real
            </span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2.5">
            {KPIS.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-lg border border-border bg-background p-3"
              >
                <div className="truncate text-[0.62rem] text-muted-foreground">
                  {kpi.label}
                </div>
                <div className="mt-1 font-display text-[0.95rem] font-semibold text-foreground">
                  {kpi.value}
                </div>
                <div className="mt-1 inline-flex items-center gap-0.5 text-[0.62rem] font-medium text-emerald-600">
                  <TrendingUp className="size-3" />
                  {kpi.delta}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-lg border border-border bg-background p-4">
            <div className="flex items-center justify-between">
              <div className="text-[0.72rem] font-medium text-foreground">
                Resultado por competência
              </div>
              <div className="text-[0.62rem] text-muted-foreground">12 meses</div>
            </div>
            <div className="mt-3 flex h-24 items-end gap-1.5">
              {BARS.map((h, i) => (
                <div
                  key={i}
                  className={cn(
                    'flex-1 rounded-t-[3px]',
                    i === BARS.length - 1 ? 'bg-primary' : 'bg-primary/20',
                  )}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="mt-3 overflow-hidden rounded-lg border border-border">
            <div className="grid grid-cols-[1.4fr_1fr_1fr_auto] items-center gap-2 border-b border-border bg-muted/40 px-3 py-2 text-[0.6rem] font-semibold tracking-wide text-muted-foreground uppercase">
              <span>Documento</span>
              <span className="hidden sm:block">Dimensão</span>
              <span>Valor</span>
              <span className="text-right">Status</span>
            </div>
            {LEDGER.map((row) => (
              <div
                key={row.doc}
                className="grid grid-cols-[1.4fr_1fr_1fr_auto] items-center gap-2 border-b border-border/60 px-3 py-2.5 text-[0.72rem] text-foreground last:border-0"
              >
                <span className="font-medium">{row.doc}</span>
                <span className="hidden text-muted-foreground sm:block">{row.dim}</span>
                <span className="tabular-nums">{row.value}</span>
                <span className="flex justify-end">
                  <span
                    className={cn(
                      'rounded-full px-2 py-0.5 text-[0.62rem] font-medium',
                      row.tone === 'ok'
                        ? 'bg-emerald-500/12 text-emerald-600'
                        : 'bg-primary/12 text-primary',
                    )}
                  >
                    {row.status}
                  </span>
                </span>
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-start gap-2.5 rounded-lg border border-primary/20 bg-primary/6 p-3">
            <span className="grid size-6 shrink-0 place-items-center rounded-md bg-primary/15 text-primary">
              <Sparkles className="size-3.5" />
            </span>
            <p className="text-[0.72rem] leading-relaxed text-foreground">
              <span className="font-semibold">Areco Insights:</span> margem 2,1 p.p.
              acima do trimestre. Antecipar créditos fiscais pode liberar{' '}
              <span className="font-semibold text-primary">R$ 214 mil</span> em caixa.
              <ArrowUpRight className="ml-0.5 inline size-3" />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
