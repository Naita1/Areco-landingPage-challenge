import { useState } from 'react'
import { Container, SectionLabel } from './ui'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'
import {
  Briefcase,
  Wallet,
  ShoppingCart,
  Factory,
  Users,
  Package,
  Calculator,
  ShieldCheck,
  Clock,
  PenTool,
  Wrench,
  Globe,
  Sparkles,
  Smartphone,
  Box,
  Search,
  FileText
} from 'lucide-react'

const TABS = [
  { id: 'erp', label: 'VSat ERP (Sistemas do Núcleo)' },
  { id: 'arc', label: 'Linha Arc (Apps)' },
  { id: 'addons', label: 'Add-Ons Nativos' },
] as const

const PRODUCTS = {
  erp: [
    { name: 'Controladoria', icon: Briefcase },
    { name: 'Gestão Financeira', icon: Wallet },
    { name: 'Gestão Comercial', icon: ShoppingCart },
    { name: 'PCP (Produção)', icon: Factory },
    { name: 'Recursos Humanos', icon: Users },
    { name: 'Gestão de Materiais', icon: Package },
    { name: 'Custos & Preços', icon: Calculator },
    { name: 'Qualidade', icon: ShieldCheck },
  ],
  arc: [
    { name: 'Team', desc: 'Jornada do trabalho.', icon: Clock },
    { name: 'Sign', desc: 'Assinatura digital.', icon: PenTool },
    { name: 'MobFix', desc: 'Manutenção.', icon: Wrench },
    { name: 'HUBe', desc: 'Vendas online/E-commerce.', icon: Globe },
    { name: 'Areco Insights', desc: 'Inteligência Artificial (IA).', icon: Sparkles },
  ],
  addons: [
    { name: 'MobSales', desc: 'Força de vendas móvel com kits.', icon: Smartphone },
    { name: 'MobWMS', desc: 'Gestão de estoque/almoxarifado.', icon: Box },
    { name: 'Price Search', desc: 'Cotação de compras.', icon: Search },
    { name: 'Receptor', desc: 'Captura de documentos fiscais.', icon: FileText },
  ]
}

export function Features() {
  const [activeTab, setActiveTab] = useState<keyof typeof PRODUCTS>('erp')

  return (
    <section id="produtos" className="scroll-mt-20 bg-muted/40 py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel className="justify-center">Produtos & Ecossistema</SectionLabel>
          <h2 className="mt-5 font-display text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
            A arquitetura oficial da sua operação.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Uma plataforma robusta que se expande através de aplicativos independentes e 
            add-ons nativos. Escolha a dimensão que precisa governar.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 flex max-w-fit items-center gap-2 rounded-full border border-border bg-card p-1.5 shadow-sm overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as keyof typeof PRODUCTS)}
              className={cn(
                'rounded-full px-5 py-2 text-[0.85rem] font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
                activeTab === tab.id
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              )}
            >
              {tab.label}
            </button>
          ))}
        </Reveal>

        <div className="mx-auto mt-10 max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS[activeTab].map((prod, i) => (
              <Reveal
                key={prod.name}
                delay={i * 0.04}
                className={activeTab !== 'erp' ? 'lg:col-span-2' : ''}
              >
                <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] transition-colors hover:border-primary/40">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <prod.icon className="size-[1.1rem]" />
                  </span>
                  <div>
                    <h3 className="font-display text-[0.95rem] font-semibold text-foreground">
                      {prod.name}
                    </h3>
                    {/* @ts-ignore */}
                    {prod.desc && (
                      <p className="mt-1 text-[0.8rem] leading-relaxed text-muted-foreground">
                        {/* @ts-ignore */}
                        {prod.desc}
                      </p>
                    )}
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
