export interface ModuleData {
  id: string
  title: string
  category: 'erp' | 'arc' | 'addons'
  tagline: string
  description: string
  features: string[]
}

export const MODULES: ModuleData[] = [
  {
    id: 'controladoria',
    title: 'Controladoria',
    category: 'erp',
    tagline: 'A ferramenta mais forte de interpretação e governança.',
    description:
      'Gestão integrada de Contabilidade, Controladoria Gerencial, Ativo Fixo e Escrituração Fiscal. Acompanhe indicadores financeiros, contábeis e fiscais em tempo real com total conformidade e precisão.',
    features: [
      'Integração Nativa: Automatização de Lotes de Origens e capas de lotes diretamente dos movimentos do VSat.',
      'Contabilidade & Consolidação: Razão, Diário, Balancetes, Balanços e visão consolidada multi-empresa em tempo real.',
      'Encerramento Automatizado: Encerramento de exercício completo, reduzindo riscos e erros manuais.',
      'Rateio por Absorção & Padrões: Alocação de custos por Matéria-Prima, Tempo, Peso, Qtd e ordens em andamento.',
      'Internacionalização: Contabilização multi-moeda (IFRS), Variação Cambial e suporte a Dual Ledger.',
      'Reforma Tributária (LC 214/2025): Operação em paralelo (IBS, CBS e IS) durante a transição com suporte a split payment.',
      'Escrituração & Obrigações Fiscais: Apuração de impostos, FCI automática, CAT 42/44, Transfer Price e GNRE (ST/DIFAL).',
      'Ativo Fixo Completo: Catalogação automática por CFOP, depreciação normal/acelerada e separação de Ativo Econômico e Fiscal.',
      'Relatórios Gerenciais & OLAP: Análise multidimensional em Cubos (drill-down/up) e sub-relatórios personalizáveis (análise H/V).'
    ],
  },
  {
    id: 'financeiro',
    title: 'Gestão Financeira',
    category: 'erp',
    tagline: 'Um ambiente único para toda sua operação financeira.',
    description:
      'Tesouraria, contas a pagar, contas a receber e fluxo de caixa operam unificados. Conectado a todos os sistemas do VSat para refletir liquidez, capital de giro e tomadas de decisão antes que virem urgência.',
    features: [
      'Fluxo de Caixa (DFC): Execução diária, semanal, mensal até semestral, previsão de vendas/compras e drill-down à origem.',
      'Tesouraria Completa: Gestão de caixas, bancos, aplicações, cartões, cheques, contas gráficas e extratos do passado/futuro.',
      'Conciliação Bancária Automatizada: Liquidações integradas e identificação automática de diferenças com extratos.',
      'Contas a Receber: CNAB 240/400, FinHUB/Valora, renegociação, aging list, variação cambial e API com Serasa.',
      'Contas a Pagar & DDA: Alçadas de autorização, adiantamentos, confronto entre empresas, retenções e vínculo com DDA.',
      'Crédito & Análise: Gestão de limites por cliente/grupo, reanálise automática, delta dias e trava por venda unitária.',
      'Comissões & Regras: Processamento parametrizável com impacto direto em Folha de Pagamento ou Ordens de Compra.',
      'BI & Cubo OLAP Financeiro: Exploração multidimensional de dados para análise rigorosa de movimentos e saldos.'
    ],
  },
  {
    id: 'comercial',
    title: 'Gestão Comercial',
    category: 'erp',
    tagline: 'Um ambiente único para todo o ciclo comercial.',
    description:
      'Sua operação pode ser por representantes ou time interno. Na sua configuração, cada pedido conversa com crédito, estoque, logística e financeiro, sustentando custos com dados reais.',
    features: [
      'Administração de Vendas: Etapas de liberação, múltiplos agentes, fretes múltiplos e propostas personalizadas com imagens.',
      'Modalidades Especiais: Suporte a triangulação, comodato, locação, consumo, consignação, amostras e bonificações.',
      'Políticas & Margem de Contribuição: Bloqueio automático por regra comercial e margem de contribuição online no pedido.',
      'Emissão Fiscal Completa: Suporte a NF-e, NFS-e, CT-e, MDF-e, importação via Invoice e devoluções via Controle de Qualidade.',
      'Faturamento Avançado: Processamento em Lote, Packing List (manual ou automático) e entrega com roteização.',
      'Areco PDV & Omnichannel: Parametria de lojas e caixas, abertura/fechamento automático e integração com e-commerce e marketplaces (arc HUBe).',
      'Comércio Exterior: Fatura Proforma, Fatura Comercial, Memorando de Exportação, Certificado de Origem e suporte multilíngue.',
      'Diligenciamento & Histórico: Painéis gerenciais da carteira de pedidos e histórico completo do cliente com alertas em cores.'
    ],
  },
  {
    id: 'pcp',
    title: 'PCP (Produção)',
    category: 'erp',
    tagline: 'Engenharia, planejamento e fábrica em uma única estrutura.',
    description:
      'Um ambiente único para todo o ciclo produtivo. Lead time, ocupação de máquina, manutenção, consumo de matéria-prima e custo real viram dados vivos para sustentação de decisões antes que o gargalo apareça.',
    features: [
      'Engenharia de Produtos: Versionamento, revisões em bloco, estruturas BOM, desenhos técnicos, rotas e máquinas alternativas.',
      'Planejamento & Simulação: Capacidade por células e turnos, programação semanal/anual, priorização e integração com manutenção.',
      'Motor MRP I e MRP II: Recálculo automático considerando estoques, OFs em andamento, pedidos e faltas de insumos.',
      'Chão de Fábrica & Apontamentos: Emissão de OFs (produção, desmonte, retrabalho), leitura de código de barras, MobTime e IHMs.',
      'Custo Padrão e Absorção Real: Atualização automática de custos ao finalizar OFs com cálculo de absorção contábil.',
      'Indicadores de Performance: Métricas OEE (Eficiência Global), MTBF, MTTR e mapas comparativos Estimado × Realizado.',
      'Automação & Identificação: Etiquetas com Barcode/QR Code/RFID e movimentações automatizadas via Areco MobWMS.',
      'Qualidade Integrada: Aprovação de lotes acabados, laudos, análises e bloqueio automático para conformidade.'
    ],
  },
  {
    id: 'rh',
    title: 'Recursos Humanos',
    category: 'erp',
    tagline: 'O RH que cuida do legal e do humano.',
    description:
      'No VSat, a entrega legal da folha, eSocial e benefícios opera no mesmo ambiente que o desenvolvimento humano, recrutamento e gestão de desempenho, totalmente integrado ao financeiro e fiscal.',
    features: [
      'Folha de Pagamento Completa: Processamento de folha, adiantamento, 13º, férias, PLR e complementares com reajustes em massa.',
      'Multicontratos & Multissindicatos: Suporte a CLT, diretores, autônomos, estagiários, aprendizes, intermitentes e cooperados.',
      'Assinatura & App: Envio de holerites e folhas de ponto via arcSign e integração nativa com o ecossistema arcTeam.',
      'Recrutamento & Desempenho: Banco de currículos, gestão de movimentações (FMP), avaliação de metas e matriz de competências.',
      'Treinamentos & Certificação: Gestão de cursos, instrutores, fichas de avaliação e controle de certificações.',
      'Ponto Eletrônico & MTP 671: Banco de horas, aprovação de HEs, abonos em massa e arquivos em conformidade normativa.',
      'eSocial Conforme: Envio automatizado de eventos (admissões/desligamentos), auditoria de rubricas e recepção de retornos (S001, S002, S003).',
      'Saúde, SST & Benefícios: Gestão de EPIs, CIPA, atestados, exames toxicológicos, convênios e integração direta ao Contas a Pagar.'
    ],
  },
  {
    id: 'materiais',
    title: 'Gestão de Materiais',
    category: 'erp',
    tagline: 'Todo material é lastro em três dimensões.',
    description:
      'Informações sobre disponibilidade física, custo real, lotes, validades e localizações em um ambiente único. Gestão integrada para compras, tributos, precificação e atendimento à produção.',
    features: [
      'Controle de Estoques & Rastreabilidade: Múltiplos almoxarifados, rastreio por lote/série, conversão de unidades e inventários cíclicos com MobWMS.',
      'Saldos & Cotação Multi-moeda: Leitura online de saldos físicos, pedidos, compras e projeções de estoque em qualquer moeda com câmbio em tempo real.',
      'Ponto de Ressuprimento & Workflow: Automação de estoque mínimo, análise de demandas e alçadas de liberação para requisições.',
      'Compras Inteligentes & PriceSearch: Cotações automatizadas, leilão reverso, cálculo de valor presente com lógica fiscal e emissão de OCs.',
      'Gestão de Contratos de Fornecimento: Contratos padrão com fornecedores/representantes, avaliação de ganhos/perdas e fusão de ordens de compra.',
      'Recebimento & Conferência Cega: Entrada via XML/Receptor, manifestação do destinatário, agregação de custos adicionais e conferência via coletor.',
      'Importação (Comércio Exterior): Despacho, câmbio e fechamento de processo com cálculo de custo real por item sem planilhas paralelas.',
      'Logística de Saída & Identificação: Roteirização de entregas, packing list, MDF-e, controle de multas e etiquetas RFID, QR Code, Zebra e PPL/PGL.'
    ],
  },
  {
    id: 'custos',
    title: 'Custos & Preços',
    category: 'erp',
    tagline: 'A relação entre custo e preço, em dado contínuo.',
    description:
      'A soma viva de insumos, processos, rateios, impostos e câmbio deixa de ser estimativa e vira leitura contínua no VSat. Realize simulações e acompanhe a margem de contribuição em tempo real para precificar com precisão.',
    features: [
      'Custos Industriais & Processos: Detalhamento de insumos, itens de revenda, custos de homem/máquina/ferramental e cálculo para itens sem histórico.',
      'Critérios Flexíveis de Custo: Avaliação com alternativas de custo médio, última compra, contrato padrão, custos indexados e custo meta.',
      'Gestão Tributária no Preço: Ad Valorem, fretes, comissões e aplicação de ICMS, PIS, COFINS, IRPJ, CSLL, IBS e CBS (imposto dentro e fora do preço).',
      'Simulações & Validação de Preços: Cálculo de preço final por markup/lucro líquido com ferramenta online para preservação de margens.',
      'Margem de Contribuição em Tempo Real: Validação automática e alertas preventivos durante a criação de orçamentos, propostas e pedidos.',
      'Análise de Rentabilidade: Visão item a item nas notas fiscais com agrupamentos por produto, cliente, UF, representante e marca.',
      'Gestão de Listas de Preço: Criação de múltiplas listas, atualizações automatizadas e comparação entre preços praticados e margens previstas.',
      'Regras Comerciais & Políticas de Negócio: Parâmetros por cliente/NCM/UF com descontos automatizados por volume e validações em tempo real.'
    ],
  },
  {
    id: 'qualidade',
    title: 'Qualidade',
    category: 'erp',
    tagline: 'Controle de Qualidade como parte do processo.',
    description:
      'A qualidade se integra ao ciclo operacional atualizando a confiabilidade de fornecedores, a estabilidade do processo e a segurança da entrega, protegendo a margem, a marca e o cliente.',
    features: [
      'Laudos & Automação de Aprovações: Padrões de laudos técnicos com emissão e envio automático junto ao faturamento.',
      'Planos de Controle & Skip Lotes: Processos críticos com amostragem estatística (Skip Lot) para reduzir inspeções garantindo conformidade.',
      'Gestão de Devoluções & Garantias: Automação de NFs, motivos de devolução e integração com financeiro, estoques, comercial e grandes varejistas.',
      'Gestão de Não Conformidades: Relatórios detalhados de desvios, ações corretivas e histórico de responsáveis.',
      'Controle de Instrumentos de Medição: Gerenciamento de calibrações, histórico de uso e instrumentos da garantia da qualidade.',
      'Dashboards Gerenciais: Painéis visuais de devoluções e ocorrências com filtros por período e produto.',
      'Índice de Qualidade do Fornecedor (IQF): Captura direta no recebimento com cálculo automatizado por regras e pesos (prazo, quantidade, qualidade, devoluções).',
      'Homologação & Bloqueios de Compras: Integração do IQF com o setor de compras para alertas, bloqueios preventivos de fornecedores mal avaliados e rastreabilidade.'
    ],
  },
  {
    id: 'arc-team',
    title: 'Team',
    category: 'arc',
    tagline: 'Jornada do trabalho.',
    description:
      'Plataforma para gestão de jornada e ponto eletrônico. No app, o colaborador registra batidas e faz solicitações; na central, os gestores acompanham indicadores e garantem conformidade legal (MTP 671).',
    features: [
      'Registro de Ponto Flexível: Modalidades via App mobile, Leitor Facial e QR Code com geolocalização.',
      'Conformidade Legal (MTP 671): Geração e exportação de arquivos fiscais (AFD, AEJ) e atestados para fiscalização.',
      'Gestão de Solicitações: Fluxo para aprovação de horas extras, abonos, férias e envio de atestados médicos.',
      'Central do Gestor & RH: Dashboards de jornadas, divergências e espelho de ponto em tempo real.',
      'Sincronização Nativa: Operação autônoma ou integrada à Folha de Pagamento do VSat ERP.'
    ],
  },
  {
    id: 'arc-sign',
    title: 'Sign',
    category: 'arc',
    tagline: 'Assinatura digital.',
    description:
      'O arcSign integra assinatura digital ao fluxo operacional da empresa, via plataforma ou API. Isso permite o envio automatizado de documentos individuais para múltiplos destinatários com validade jurídica ICP-Brasil e rastreabilidade.',
    features: [
      'Validade Jurídica & ICP-Brasil: Assinaturas digitais e eletrônicas com rastreabilidade e carimbo do tempo.',
      'Envio em Larga Escala: Disparo automatizado de documentos individuais para múltiplos destinatários.',
      'Assinatura Presencial: Coleta de assinaturas diretamente no dispositivo com o destinatário em campo.',
      'Integração Nativa ao ERP: Conexão direta para envio automático de holerites, espelhos de ponto e contratos.',
      'Plataforma & API: Flexibilidade para utilização via portal web ou integrado a outros sistemas.'
    ],
  },
  {
    id: 'arc-mobfix',
    title: 'MobFix',
    category: 'arc',
    tagline: 'Manutenção.',
    description:
      'Gestão móvel de manutenção industrial e de ativos. O MobFix coloca roteiros, checklists e ordens de serviço na mão da equipe técnica no chão de fábrica.',
    features: [
      'Gestão Mobile de OSs: Abertura, acompanhamento e encerramento de ordens de serviço via aplicativo.',
      'Manutenção Preventiva & Corretiva: Cronogramas de revisão, alertas e controle de paradas não programadas.',
      'Checklists Digitais: Padronização de inspeções garantindo o cumprimento de procedimentos operacionais.',
      'Integração com ERP: Sincronização em tempo real de materiais utilizados, custos e disponibilidade de máquinas.'
    ],
  },
  {
    id: 'arc-hube',
    title: 'HUBe',
    category: 'arc',
    tagline: 'Vendas online/E-commerce.',
    description:
      'Hub de integração omnichannel que conecta o ERP aos principais e-commerces e marketplaces, centralizando a publicação de produtos, saldos de estoque e fluxo de pedidos.',
    features: [
      'Centralização de Marketplaces: Conexão com os principais canais de venda online B2B e B2C.',
      'Sincronização de Estoque & Preços: Atualização em tempo real de saldos físicos e tabelas de preço.',
      'Importação Automática de Pedidos: Conversão instantânea das vendas virtuais em pedidos no ERP.',
      'Automação de Faturamento: Agilidade na emissão de NF-e e geração de dados de rastreio de entrega.'
    ],
  },
  {
    id: 'areco-insights',
    title: 'Areco Insights',
    category: 'arc',
    tagline: 'Inteligência Artificial (IA).',
    description:
      'A solução de inteligência artificial nativa do VSat. Analisa o contexto e os dados operacionais em tempo real para entregar interpretações estratégicas e apoiar a tomada de decisão.',
    features: [
      'Visão Multidepartamental: Análises automatizadas para Controladoria, Comercial, Compras, Produção e Qualidade.',
      'Análise Contextual de Dados: Identificação contínua de desvios, inconsistências e tendências operacionais.',
      'Decisões Baseadas em Dados: Recomendações acionáveis para otimizar processos e reduzir gargalos.',
      'Interface Inteligente: Consultas e relatórios direcionados conforme o perfil do usuário.'
    ],
  },
  {
    id: 'mobsales',
    title: 'MobSales',
    category: 'addons',
    tagline: 'Força de vendas móvel com kits.',
    description:
      'Mobilidade e performance comercial com o MobSales. Aplicativo móvel integrado ao Areco ERP que dá autonomia para representantes realizarem pedidos, consultarem catálogo e acompanharem metas em campo.',
    features: [
      'Criação de Pedidos e Orçamentos: Emissão respeitando regras do ERP, tabelas de preço, limites e prazos de pagamento.',
      'Suporte a Kits de Produtos: Flexibilidade na composição e lançamento dinâmico de kits de vendas durante o atendimento.',
      'Catálogo Detalhado & Clientes: Consulta de estoque em tempo real, especificações técnicas e histórico do cliente.',
      'Aplicativo Offline com Sincronização: Gravação local dos dados e sincronização automática ao reestabelecer conexão.',
      'Compartilhamento em PDF: Envio instantâneo de orçamentos e pedidos via WhatsApp, e-mail ou outros canais.'
    ],
  },
  {
    id: 'mobwms',
    title: 'MobWMS',
    category: 'addons',
    tagline: 'Gestão de estoque/almoxarifado.',
    description:
      'O MobWMS controla armazenagem, conferência e movimentação de materiais direto do dispositivo móvel ou coletor Android, com sincronização em tempo real ao VSat ERP.',
    features: [
      'Conferência Cega de Entrada: Leitura via código de barras no recebimento para validação física de mercadorias.',
      'Localização & Endereçamento: Gestão e rastreabilidade de pallets e packs (situação: Liberado, Quarentena ou Bloqueado).',
      'Levantamento de Inventário: Contagem ágil por coletores e exportação direta para o Controle de Estoque do ERP.',
      'Picking & Packing List: Movimentações por embalagem e organização para separação e despacho de materiais.',
      'Etiquetagem Flexível: Leitura e parametrização configurável do padrão de código de barras do fornecedor.'
    ],
  },
  {
    id: 'price-search',
    title: 'Price Search',
    category: 'addons',
    tagline: 'Cotação de compras.',
    description:
      'Leilão reverso para o seu processo de compras. O Price Search notifica os fornecedores sobre o processo, coleta as cotações em um portal web e fecha o ciclo gerando a Ordem de Compra no VSat.',
    features: [
      'Notificação de Fornecedores: Envio automático do processo de compras para preenchimento de propostas no portal.',
      'Leilão Reverso: Disputa comercial transparente para obtenção do melhor custo nas aquisições.',
      'Análise Comparativa: Filtros e mapas comparativos para seleção da melhor oferta pelo comprador.',
      'Ciclo Fechado no VSat: Início na solicitação e encerramento automatizado com a conversão em Ordem de Compra.'
    ],
  },
  {
    id: 'receptor',
    title: 'Receptor',
    category: 'addons',
    tagline: 'Captura de documentos fiscais.',
    description:
      'Automação nativa para busca, monitoramento e captura de documentos fiscais eletrônicos (NF-e, CT-e, NFS-e) emitidos contra a empresa diretamente da SEFAZ.',
    features: [
      'Captura Automática na SEFAZ: Download contínuo de XMLs emitidos contra o CNPJ da empresa.',
      'Manifestação do Destinatário: Registro automatizado de Ciência da Emissão, Confirmação ou Desconhecimento.',
      'Pré-Entrada Automatizada: Agilidade no faturamento e recebimento físico de materiais com leitura dos arquivos.',
      'Guarda e Rastreabilidade Fiscal: Arquivamento centralizado e seguro conforme as exigências fiscais.'
    ],
  },
]

export function findModuleByTitle(title: string): ModuleData | undefined {
  return MODULES.find((m) => m.title === title)
}