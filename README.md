<div align="center">
  
# Areco VSat ERP — B2B Experience Landing Page
**Gestão Empresarial de Alta Performance. Uma só cadeia de valor para o físico, o financeiro e o fiscal.**

![Areco VSat ERP](./public/preview.png)

</div>

<br />

## 🎯 Proposta de Valor e Conceito do Projeto

Este projeto foi construído a partir de uma imersão profunda no ecossistema e produto real da **Areco** (areco.com.br). O objetivo da landing page é transmitir, de forma imersiva e sofisticada, o valor do **VSat ERP** para líderes e tomadores de decisão corporativos.

A arquitetura do conteúdo destaca a unificação das **três dimensões operacionais (Físico, Financeiro e Fiscal)** em uma única cadeia de valor livre de retrabalho. Além disso, a página põe em foco os principais diferenciais nativos da plataforma moderna: o suporte contínuo ao **Areco Insights** (IA nativa e recomendações preditivas) e a prontidão absoluta para a **Reforma Tributária** brasileira (IBS/CBS).

---

## 🎨 Decisões de UX/UI & Design System

A construção visual da landing page foi planejada para refletir autoridade, tecnologia de ponta e confiança corporativa:

- **Paleta de Cores:** Fundo predominante em tons de *Dark Slate/Obsidian*, transmitindo segurança e sofisticação (foco Enterprise), acompanhado de destaques pontuais em *Terracota/Laranja Areco* para guiar a atenção e ações (Call-to-Actions).
- **Tipografia e Hierarquia Visual:** Layout totalmente clean, desenhado para leitura fluida e escaneabilidade. Títulos fortes e parágrafos curtos garantem que CFOs e Diretores de TI compreendam a proposta de valor em segundos.
- **Interatividade & Animações:** 
  - **Header Inteligente:** A Navbar reage ao comportamento do usuário, iniciando de forma limpa sobre fundo escuro e adotando uma transição suave para *Glassmorphism* (fundo claro com desfoque) durante a rolagem nas áreas de leitura.
  - **Dashboard Mockup Interativo:** Elementos visuais que simulam a interface real da plataforma para tangibilizar o software.
  - **Componentização Modular:** Abas interativas de produtos que apresentam a arquitetura de softwares do Núcleo VSat, Linha Arc e Add-Ons.
  - **Scroll Suave:** Navegação por âncoras (`scroll-behavior: smooth`) guiando a jornada de compra de forma lógica e macia.

---

## 🛠️ Tecnologias Utilizadas (Tech Stack)

A landing page foi desenvolvida focando em performance absurda, escalabilidade e design moderno, utilizando as seguintes tecnologias:

- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) **React 18+**
- ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) **Vite**
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) **TypeScript**
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) **Tailwind CSS v4**
- ![Lucide](https://img.shields.io/badge/lucide-%23F24E1E.svg?style=for-the-badge&logo=lucide&logoColor=white) **Lucide Icons**
- ![Radix UI](https://img.shields.io/badge/radix%20ui-%23161618.svg?style=for-the-badge&logo=radix-ui&logoColor=white) **Shadcn UI / Radix UI**

---

## 📂 Estrutura do Projeto

O código foi organizado seguindo os princípios de componentização atômica e reuso.

```text
📦 vsat-experience
 ┣ 📂 public
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 landing          # Componentes visuais da Landing Page
 ┃ ┃ ┃ ┣ 📜 differentiators.tsx # Grid de Casos de Sucesso e Pilares
 ┃ ┃ ┃ ┣ 📜 features.tsx        # Abas de Produtos e Ecossistema
 ┃ ┃ ┃ ┣ 📜 final-cta.tsx       # Formulário de demonstração
 ┃ ┃ ┃ ┣ 📜 hero.tsx            # Apresentação Principal e CTA
 ┃ ┃ ┃ ┣ 📜 how-it-works.tsx    # Infográficos de operação
 ┃ ┃ ┃ ┣ 📜 problem.tsx         # Dores do usuário
 ┃ ┃ ┃ ┣ 📜 site-header.tsx     # Navbar Dinâmica Glassmorphism
 ┃ ┃ ┃ ┣ 📜 ui.tsx              # Botões e labels padronizados
 ┃ ┃ ┃ ┗ 📜 value-props.tsx     # Pilares e Areco Insights
 ┃ ┃ ┗ 📂 ui               # Componentes Shadcn reutilizáveis
 ┃ ┣ 📂 lib
 ┃ ┃ ┗ 📜 utils.ts         # Utilitários globais (e.g. merge de Tailwind, cn)
 ┃ ┣ 📜 App.tsx            # Montagem estrutural das seções da Landing Page
 ┃ ┗ 📜 index.css          # Variáveis OKLCH e configurações globais do Tailwind v4
 ┣ 📜 package.json
 ┗ 📜 vite.config.ts
```

---

## 🚀 Como Rodar o Projeto Localmente

Siga o passo a passo abaixo para rodar a landing page na sua máquina:

```bash
# 1. Clone o repositório
git clone https://github.com/Naita1/Areco-landingPage-challenge.git

# 2. Acesse a pasta do projeto
cd vsat-experience

# 3. Instale todas as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Abra o seu navegador e acesse `http://localhost:5173` (ou a porta especificada no terminal) para visualizar a landing page renderizada em tempo real.

---

<div align="center">
  <p>Desenvolvido por <strong>Tainá Ribeiro</strong> para o desafio prático de UI/UX & Frontend da Areco.</p>
</div>
