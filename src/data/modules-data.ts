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
]

export function findModuleByTitle(title: string): ModuleData | undefined {
  return MODULES.find((m) => m.title === title)
}