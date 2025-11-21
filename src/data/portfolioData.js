export const navigationLinks = [
  { id: 'hero', label: 'Início' },
  { id: 'technical-highlights', label: 'Destaques Técnicos' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'skills', label: 'Skills' },
  { id: 'recent-works', label: 'Projetos' },
  { id: 'experience', label: 'Experiência' },
  { id: 'contact', label: 'Contato' }
];

export const heroData = {
  greeting: 'Olá, eu sou',
  name: 'Gabriel Chiarelli',
  photoUrl: 'https://avatars.githubusercontent.com/u/108583444?v=4',
  photoAlt: 'Gabriel Chiarelli sorrindo',
  highlightedRole: 'Backend Engineer & Integrations',
  typewriterPhrases: [
    'Integro Protheus com APIs REST',
    'Otimizo queries em Oracle, MySQL e PostgreSQL',
    'Crio automações confiáveis em ADVPL e Python'
  ],
  description:
    'Sou backend developer focado em integrações profundas. Desenho APIs REST, escrevo ADVPL para o Protheus, construo serviços em Python e monitoro tudo para garantir que dados fiscais e operações fluam sem atrito.',
  badges: [
    { icon: 'fa-solid fa-database', label: 'Oracle • MySQL • PostgreSQL' },
    { icon: 'fa-solid fa-code', label: 'Backend Specialist' },
    { icon: 'fa-solid fa-share-nodes', label: 'Integrações Protheus' }
  ],
  ctas: [
    { label: 'Ver destaques técnicos', href: '#technical-highlights', variant: 'primary' },
    { label: 'Vamos conversar', href: '#contact', variant: 'ghost' }
  ],
  metrics: [
    { value: '20+', label: 'APIs REST entregues' },
    { value: '05+', label: 'Integrações Protheus' },
    { value: '03', label: 'Bancos em produção' }
  ],
  availability: 'Aberto para projetos freelas e consultorias em backend e integrações.'
};

export const technicalHighlightsData = [
  {
    title: 'Integrações corporativas Protheus',
    description:
      'APIs em ADVPL que conectam Protheus, SEFAZ e portais logísticos. Eu desenho o contrato REST, programo o fluxo completo e cuido da observabilidade e dos logs.',
    stack: ['ADVPL', 'Protheus', 'REST', 'SEFAZ'],
    link: 'https://github.com/gaab0418/geranf',
    badge: 'ERP Integrations',
    icon: 'fa-solid fa-network-wired',
    stats: 'NF-e emitida via API em minutos'
  },
  {
    title: 'Arquitetura de APIs e filas',
    description:
      'Serviços Python/FastAPI com autenticação JWT, filas paralelas e monitoramento de downloads. Foco em DX limpa, documentação com Swagger e versionamento cuidadoso.',
    stack: ['FastAPI', 'Python', 'MySQL', 'JWT'],
    link: 'https://github.com/gaab0418',
    badge: 'APIs REST',
    icon: 'fa-solid fa-server',
    stats: 'Fila paralela com priorização'
  },
  {
    title: 'Engenharia de dados fiscais',
    description:
      'Modelagem de dados Oracle/PostgreSQL, consultas otimizadas e dashboards para acompanhar indicadores fiscais e de estoque em tempo quase real.',
    stack: ['Oracle', 'PostgreSQL', 'SQL', 'Observability'],
    link: 'https://github.com/gaab0418',
    badge: 'Data Ops',
    icon: 'fa-solid fa-database',
    stats: 'Consultas 40% mais rápidas'
  }
];

export const aboutData = {
  title: 'Construindo o próximo capítulo das integrações inteligentes',
  paragraphs: [
    'Sou quem liga os pontos entre ERP, APIs e bases de dados. Minha base é back-end e meu foco é tirar gargalos de times que dependem de integrações confiáveis com Protheus, SEFAZ e serviços corporativos.',
    'Atualmente, estou aprofundando arquitetura de software, design de APIs e performance em bancos Oracle/PostgreSQL. Quero colaborar com equipes que acreditam que integrações bem pensadas são vantagem competitiva.'
  ],
  highlights: [
    { label: 'Stack favorita', value: 'ADVPL • Python/FastAPI • Node.js • Oracle • PostgreSQL' },
    { label: 'Foco', value: 'Integrações profundas + APIs escaláveis + observabilidade' }
  ]
};

const portfolioStart = new Date('2025-01-01T00:00:00Z');
const msPerYear = 1000 * 60 * 60 * 24 * 365;
const yearsConnecting = Math.max(1, Math.floor((Date.now() - portfolioStart.getTime()) / msPerYear));

export const statsData = [
  { number: `${yearsConnecting}`, label: 'anos conectando sistemas' },
  { number: '08+', label: 'tecnologias dominadas' },
  { number: '∞', label: 'automations shipping soon' }
];

export const experienceData = [
  {
    date: 'Set 2025 - Atual',
    title: 'Assistente de TI • Grupo Krona',
    subtitle: 'Joinville, Santa Catarina • Híbrido',
    content:
      'Evoluo o Protheus com ADVPL, desenho APIs REST para emissão de notas e mantenho integrações com SEFAZ e portais de transporte com foco em observabilidade.'
  },
  {
    date: 'Fev 2025 - Set 2025',
    title: 'Estagiário de Desenvolvimento • Grupo Krona',
    subtitle: 'Joinville, Santa Catarina • Presencial',
    content:
      'Construí customizações do Protheus, apoiei squads de back-office e aprendi a desenhar integrações seguras para dados fiscais e logísticos.'
  },
  {
    date: 'Ago 2023 - Jan 2025',
    title: 'Aprendiz TIC • Viqua',
    subtitle: 'Santa Catarina, Brasil',
    content:
      'Contato diário com infraestrutura, suporte e redes corporativas. Essa base me ajuda a entender as dores operacionais antes de propor soluções backend.'
  }
];

export const educationData = [
  {
    date: '2025 - 2029',
    title: 'Bacharelado em Engenharia de Software',
    subtitle: 'Universidade Brasileira',
    content:
      'Currículo voltado para arquitetura de software, banco de dados, engenharia de requisitos e computação distribuída. Projetos de pesquisa envolvendo IA aplicada e integrações complexas.'
  },
  {
    date: '2020 - Presente',
    title: 'Estudos Contínuos',
    subtitle: 'Auto-didata',
    content:
      'Aprendizado constante em ADVPL, arquitetura orientada a eventos, design de APIs, desempenho em Oracle e, claro, IA generativa + automações.'
  }
];

export const skillsData = {
  'Backend & Integrações': [
    { icon: 'fa-solid fa-code', text: 'ADVPL / Protheus' },
    { icon: 'fa-brands fa-python', text: 'Python / FastAPI' },
    { icon: 'fa-brands fa-node-js', text: 'Node.js' },
    { icon: 'fa-brands fa-java', text: 'Java / Spring' }
  ],
  'APIs & Arquitetura': [
    { icon: 'fa-solid fa-plug', text: 'REST & GraphQL' },
    { icon: 'fa-solid fa-diagram-project', text: 'Integrações corporativas' },
    { icon: 'fa-solid fa-shuffle', text: 'Mensageria e filas' },
    { icon: 'fa-solid fa-lock', text: 'Autenticação & JWT' }
  ],
  'Bancos & Dados': [
    { icon: 'fa-solid fa-database', text: 'Oracle' },
    { icon: 'fa-solid fa-database', text: 'MySQL' },
    { icon: 'fa-solid fa-database', text: 'PostgreSQL' },
    { icon: 'fa-solid fa-chart-line', text: 'Monitoração & logs' }
  ],
  'Ferramentas & Entrega': [
    { icon: 'fa-solid fa-screwdriver-wrench', text: 'Git & CI/CD' },
    { icon: 'fa-solid fa-cloud', text: 'Docker & Deploy' },
    { icon: 'fa-solid fa-book', text: 'Documentação técnica' },
    { icon: 'fa-solid fa-people-group', text: 'Trabalho com squads' }
  ]
};

export const worksData = [
  {
    visual: {
      icon: 'fa-solid fa-file-invoice-dollar',
      gradient: ['#FF6FD8', '#3813C2']
    },
    category: 'ADVPL',
    title: 'Gerador fiscal inteligente',
    description:
      'WebService REST em ADVPL que integra Protheus e SEFAZ para emitir e devolver NFe com logs detalhados e auditoria de regras fiscais.',
    tags: ['ADVPL', 'REST', 'APIs Governamentais'],
    link: 'https://github.com/gaab0418/geranf'
  },
  {
    visual: {
      icon: 'fa-solid fa-wave-square',
      gradient: ['#00F5A0', '#00D9F5']
    },
    category: 'Automation Mesh',
    title: 'Fluxo multicanal com N8N',
    description:
      'Hub centralizado que conecta CRMs, gateways e notificações. Cada automação possui versionamento, rollback e alertas para manter integrações saudáveis.',
    tags: ['N8N', 'Node.js', 'Supabase'],
    link: 'https://github.com/gaab0418'
  },
  {
    visual: {
      icon: 'fa-solid fa-music',
      gradient: ['#FEE140', '#FA709A']
    },
    category: 'API Experience',
    title: 'SpotDown - Spotify Downloader API',
    description:
      'API em FastAPI com filas assíncronas, autenticação JWT e monitoramento de downloads. Demonstra preocupação com arquitetura limpa e DX clara.',
    tags: ['FastAPI', 'JWT', 'FFmpeg'],
    link: 'https://github.com/gaab0418/SpotDown'
  },
  {
    visual: {
      icon: 'fa-solid fa-scale-balanced',
      gradient: ['#7F7FD5', '#86A8E7']
    },
    category: 'IA + Legislação',
    title: 'Spoiler - Compliance Copilot',
    description:
      'Projeto em desenvolvimento que cruza legislação tributária com agentes de IA para sugerir obrigações e gerar relatórios auditáveis.',
    tags: ['IA aplicada', 'Legislação', 'Arquitetura em evolução'],
    link: 'https://github.com/gaab0418'
  }
];

export const contactData = {
  location: 'Brasil • Santa Catarina',
  availability: 'Pronto para colaborar em projetos de backend, integrações e automações',
  items: [
    { icon: 'fa-brands fa-linkedin', text: 'LinkedIn', link: 'https://www.linkedin.com/in/gabriel-chiarelli-sz' },
    { icon: 'fa-brands fa-github', text: 'GitHub', link: 'https://github.com/gaab0418' },
    { icon: 'fa-brands fa-discord', text: 'Discord', link: 'https://discord.com/users/477968592994828290' },
    { icon: 'fa-solid fa-envelope', text: 'gabriel.chiarelli.sz1804@gmail.com', link: 'mailto:gabriel.chiarelli.sz1804@gmail.com' }
  ]
};

export const seoData = {
  title: 'Gabriel Chiarelli • Backend Engineer & Integrations',
  description:
    'Portfólio do Gabriel Chiarelli: especialista em backend, integrações com Protheus e APIs escaláveis com Oracle, MySQL e PostgreSQL.',
  url: 'https://gaab0418.github.io/portifolio',
  image: 'https://avatars.githubusercontent.com/u/108583444?v=4'
};

