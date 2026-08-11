<div align="center">

# Areco VSat Experience

**Landing page de alta performance para o ecossistema Areco VSat ERP — a plataforma de gestão empresarial nativa na web.**

![React](https://img.shields.io/badge/React-19-58c4dc?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178c6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-13-ff4154?style=flat-square&logo=framer&logoColor=white)
![Performance](https://img.shields.io/badge/Performance-60_FPS_·_INP_<100ms-10b981?style=flat-square)
![License](https://img.shields.io/badge/License-Private-71717a?style=flat-square)

---

[Sobre](#sobre-o-projeto) · [Engenharia & Performance](#diferenciais-de-engenharia--performance) · [Tecnologias](#tecnologias-utilizadas) · [Arquitetura](#estrutura-do-projeto) · [Execução Local](#execução-local) · [Commits](#padronização-de-commits)

</div>

---

## Sobre o Projeto

O **VSat Experience** é uma landing page institucional e interativa construída para apresentar o ecossistema de produtos da **Areco** — composto pelo **VSat ERP** (módulos de núcleo), a **Linha Arc** (aplicativos independentes) e os **Add-Ons Nativos**.

A experiência de navegação é organizada em seções temáticas que conduzem o visitante por uma narrativa clara:

- **Hero** — Apresentação de impacto com animações staggered e simulação visual do painel do VSat ERP (`ProductWindow`).
- **O Desafio** — Exposição dos problemas comuns de sistemas fragmentados.
- **A Plataforma** — Propostas de valor com destaque para o Areco Insights (IA integrada), conformidade tributária e arquitetura modular.
- **Como Funciona** — Timeline de 4 etapas do diagnóstico à evolução contínua.
- **Produtos & Ecossistema** — Navegação por abas (ERP / Arc / Add-Ons) com abertura de modais detalhados por produto, contendo funcionalidades em grid responsivo.
- **Casos de Sucesso & Diferenciais** — Depoimentos reais de clientes e os pilares técnicos da plataforma.
- **CTA de Demonstração** — Formulário integrado com a API Web3Forms, validação de domínio corporativo e feedback visual de estados (idle, loading, success, error).
- **Footer** — Links institucionais e de atendimento.

---

## Diferenciais de Engenharia & Performance

### Aceleração por Hardware (GPU)

- Os elementos animados do modal (`overlay` e `card`) utilizam `will-change: transform, opacity` para promover camadas dedicadas na GPU, eliminando repaint desnecessário na thread principal.
- Animações utilizam **exclusivamente** propriedades compostas (`opacity` e `transform`) — zero Layout Thrashing.
- O `backdrop-blur` foi removido do overlay do modal para evitar compositing pesado durante a transição, mantendo a aparência visual com `bg-black/60`.

### Gerenciamento do INP (< 100ms)

- Duração das transições do modal reduzida para **180–200ms** com curvas de aceleração customizadas (`[0.16, 1, 0.3, 1]`), garantindo percepção de resposta instantânea.
- Objetos de configuração de transição (`overlayTransition`, `cardTransition`) são **hoisted como constantes** fora do componente, eliminando alocações no hot path de renderização.
- Animações staggered por item (`motion.li`) foram removidas do modal — os itens de feature renderizam como `<li>` puro, eliminando 8–9 camadas compositor extras.

### Prevenção de Re-renders

- O `ModuleModal` é envolto em `React.memo`, isolando a árvore de renderização do modal das mudanças de estado do componente pai (como troca de abas).
- Os handlers `handleCardClick` e `handleCloseModal` no componente pai (`Features`) são memorizados com `useCallback`, garantindo referências estáveis passadas via props.

### Refinamento de UX

- **Grid de 2 colunas** (`md:grid-cols-2`) para a lista de funcionalidades no modal, aproveitando a largura `max-w-4xl` e eliminando a necessidade de scroll na maioria das resoluções.
- Scrollbar nativa ocultada com a utility `no-scrollbar` (Tailwind v4 `@utility`), mantendo a funcionalidade de scroll via touch e mouse.
- Componente `Reveal` com suporte a `useReducedMotion` para respeitar preferências de acessibilidade do sistema operacional.

---

## Tecnologias Utilizadas

| Tecnologia | Versão | Finalidade |
|---|---|---|
| **React** | 19.2 | Biblioteca de UI com composição por componentes |
| **TypeScript** | 6.0 | Tipagem estática e segurança em tempo de compilação |
| **Vite** | 8.2 | Build tool com HMR instantâneo e bundling otimizado |
| **Tailwind CSS** | 4.3 | Engine de CSS com `@theme`, `@utility` e `@custom-variant` |
| **Motion** (Framer Motion) | 13.1 | Animações declarativas com `AnimatePresence` e spring physics |
| **Lucide React** | 1.31 | Biblioteca de ícones SVG otimizados como componentes React |
| **shadcn** | 4.8 | Design system e primitivos de UI |
| **Base UI** | 1.7 | Primitivos headless (Button) do ecossistema MUI |
| **CVA** | 0.7 | Class Variance Authority para variantes de componentes tipadas |
| **clsx** + **tailwind-merge** | 2.1 / 3.6 | Composição e merge inteligente de classes CSS |
| **tw-animate-css** | 1.4 | Animações CSS utilitárias para Tailwind |
| **PostCSS** | 8.5 | Pipeline de processamento CSS |
| **ESLint** | 10.8 | Linting com plugins para React Hooks e React Refresh |

---

## Estrutura do Projeto

```
vsat-experience/
├── index.html                          # Entry point HTML (lang pt-BR)
├── package.json                        # Dependências e scripts
├── vite.config.ts                      # Configuração do Vite
├── tsconfig.json                       # Configuração raiz do TypeScript
├── tsconfig.app.json                   # Config TS para a aplicação
├── tsconfig.node.json                  # Config TS para scripts Node
├── postcss.config.js                   # Pipeline PostCSS (Tailwind + Autoprefixer)
├── eslint.config.js                    # Configuração do ESLint
│
└── src/
    ├── main.tsx                        # Bootstrap: React 19 createRoot + StrictMode
    ├── App.tsx                         # Composição da página (Header → Seções → Footer)
    ├── index.css                       # Design tokens, @theme, @utility (no-scrollbar, custom-scrollbar)
    │
    ├── lib/
    │   └── utils.ts                    # Função `cn()` (clsx + tailwind-merge)
    │
    ├── data/
    │   └── modules-data.ts             # Catálogo dos 17 módulos (ERP, Arc, Add-Ons) + tipos
    │
    └── components/
        ├── ui/
        │   └── button.tsx              # Primitivo Button (Base UI + CVA)
        │
        └── landing/
            ├── ui.tsx                  # Container, SectionLabel, CtaLink
            ├── logo.tsx                # Logotipo SVG inline (dark/light)
            ├── reveal.tsx              # Wrapper de animação scroll-triggered (viewport)
            ├── product-window.tsx      # Simulação visual do painel VSat ERP
            ├── site-header.tsx         # Header fixo com nav responsiva + menu mobile
            ├── hero.tsx                # Hero section com animações staggered
            ├── problem.tsx             # Seção "O Desafio" (pain points)
            ├── value-props.tsx         # Seção "A Plataforma" (propostas de valor)
            ├── how-it-works.tsx        # Seção "Como Funciona" (timeline 4 etapas)
            ├── features.tsx            # Seção "Produtos" (abas + grid de cards)
            ├── module-modal.tsx        # Modal otimizado (React.memo + GPU + Motion)
            ├── showcase.tsx            # Seção "O Produto" (layout 3 colunas)
            ├── differentiators.tsx     # Seção "Casos de Sucesso" + Diferenciais
            ├── final-cta.tsx           # Formulário de demonstração (Web3Forms API)
            └── site-footer.tsx         # Footer institucional
```

---

## Execução Local

### Pré-requisitos

- **Node.js** ≥ 18
- **npm** ≥ 9

### Instalação

```bash
git clone https://github.com/seu-usuario/vsat-experience.git
cd vsat-experience
npm install
```

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_WEB3FORMS_KEY=sua_chave_web3forms
```

### Desenvolvimento

```bash
npm run dev
```

O servidor de desenvolvimento Vite estará disponível em `http://localhost:5173`.

### Build de Produção

```bash
npm run build
npm run preview
```

### Linting

```bash
npm run lint
```

---

## Padronização de Commits

Este projeto adota o padrão **Conventional Commits** para manter um histórico de alterações legível e semanticamente versionável.

| Prefixo | Quando usar |
|---|---|
| `feat:` | Nova funcionalidade ou seção |
| `fix:` | Correção de bug |
| `perf:` | Otimização de performance (GPU, re-renders, INP) |
| `refactor:` | Reestruturação de código sem alterar comportamento |
| `style:` | Ajustes visuais, espaçamentos, tipografia |
| `docs:` | Documentação (README, comentários) |
| `chore:` | Tarefas de manutenção (deps, configs, CI) |

**Exemplos:**

```
feat: adicionar seção de casos de sucesso com depoimentos
perf: otimizar modal com React.memo e will-change GPU
refactor: memoizar handlers do Features com useCallback
style: ajustar grid de features para 2 colunas no desktop
docs: criar README profissional do projeto
```

---

<div align="center">

Desenvolvido com engenharia de precisão por **Areco Consultoria e Tecnologia de Sistemas**.

</div>
