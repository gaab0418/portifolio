export const navigationLinks = [
  { id: 'hero', label: 'Início' },
  { id: 'ia-automation', label: 'IA & Automação' },
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
  highlightedRole: 'Back-end & Automation Engineer',
  typewriterPhrases: [
    'Crio agentes de IA que entendem o negócio',
    'Automatizo operações com o ecossistema N8N',
    'Transformo APIs em produtos inteligentes'
  ],
  description:
    'Integro IA generativa, APIs e automações N8N para tirar empresas da rotina manual. Minha obsessão é conectar dados, pessoas e máquinas usando código elegante, arquitetura bem pensada e muita criatividade.',
  badges: [
    { icon: 'fa-solid fa-robot', label: 'AI Enthusiast' },
    { icon: 'fa-solid fa-diagram-project', label: 'Automation Lover' },
    { icon: 'fa-solid fa-bolt', label: 'N8N Power User' }
  ],
  ctas: [
    { label: 'Ver projetos de IA', href: '#ia-automation', variant: 'primary' },
    { label: 'Vamos conversar', href: '#contact', variant: 'ghost' }
  ],
  metrics: [
    { value: '05+', label: 'Workflows de IA em produção' },
    { value: '30+', label: 'Integrações inteligentes entregues' },
    { value: '∞', label: 'Ideias para automatizar processos' }
  ],
  availability: 'Aberto para projetos freelas e consultorias em IA/N8N.'
};

export const iaAutomationData = [
  {
    title: 'AI Orchestrator para times de suporte',
    description:
      'Plataforma que coordena agentes especialistas em ADVPL, ERP Protheus e APIs externas para resolver tickets automaticamente. Fluxos inteligentes priorizam, consultam bases e enviam respostas human-like.',
    stack: ['OpenAI', 'Node.js', 'Totvs ADVPL', 'PostgreSQL'],
    link: 'https://github.com/gaab0418',
    badge: 'Agente de IA',
    icon: 'fa-solid fa-headset',
    stats: '↓ 42% tempo médio de atendimento'
  },
  {
    title: 'N8N Hyper Automation Mesh',
    description:
      'Rede de automações event-driven com N8N orquestrando APIs financeiras, mensageria e alertas em tempo real. Cada workflow é versionado e monitorado com dashboards inteligentes.',
    stack: ['N8N', 'TypeScript', 'Redis', 'Supabase'],
    link: 'https://github.com/gaab0418',
    badge: 'N8N',
    icon: 'fa-solid fa-diagram-project',
    stats: '120+ jobs automatizados'
  },
  {
    title: 'AI Pipeline para decisões fiscais',
    description:
      'Pipeline serverless que consulta modelos, valida regras fiscais e dispara aprovações automáticas. Integra com Protheus, SEFAZ e serviços internos garantindo rastreabilidade total.',
    stack: ['Python', 'FastAPI', 'LangChain', 'Oracle'],
    link: 'https://github.com/gaab0418',
    badge: 'AI + APIs',
    icon: 'fa-solid fa-file-invoice-dollar',
    stats: 'Processamento 3x mais rápido'
  }
];

export const aboutData = {
  title: 'Construindo o próximo capítulo das integrações inteligentes',
  paragraphs: [
    'Sou o cara que liga os pontos entre ERP, APIs, IA e automação. Minha base é back-end, mas minha paixão é transformar processos manuais em experiências inteligentes.',
    'Atualmente, estou apaixonado por IA aplicada a negócios, agentes autônomos e automações com N8N. Quero colaborar com equipes que acreditam que o futuro é automatizado, porém humano.'
  ],
  highlights: [
    { label: 'Stack favorita', value: 'Node.js • Python • N8N • Oracle • FastAPI' },
    { label: 'Foco', value: 'Integrações profundas + automações inteligentes + IA aplicada' }
  ]
};

export const statsData = [
  { number: '2', label: 'anos conectando sistemas' },
  { number: '08+', label: 'tecnologias dominadas' },
  { number: '∞', label: 'automations shipping soon' }
];

export const experienceData = [
  {
    date: '2025 - Atual',
    title: 'Desenvolvedor Full-Stack • IA & Automação',
    subtitle: 'Ambiente Empresarial, Brasil',
    content:
      'Desenho e implemento plataformas que combinam IA generativa com N8N e APIs internas. Criei automações que monitoram indicadores, acionam workflows e desbloqueiam times de negócios.'
  },
  {
    date: '2023 - 2025',
    title: 'Jovem Aprendiz TIC',
    subtitle: 'Infraestrutura, Brasil',
    content:
      'Experiência essencial com infraestrutura, redes e suporte corporativo. Entendi dores reais das operações e transformei isso em contexto para soluções de software mais empáticas.'
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
  'IA & Automação': [
    { icon: 'fa-solid fa-robot', text: 'Agentes de IA' },
    { icon: 'fa-solid fa-diagram-project', text: 'N8N' },
    { icon: 'fa-solid fa-bolt', text: 'Hyper Automation' },
    { icon: 'fa-solid fa-code-branch', text: 'LangChain' }
  ],
  'Back-end & APIs': [
    { icon: 'fa-solid fa-code', text: 'Node.js' },
    { icon: 'fa-brands fa-python', text: 'Python / FastAPI' },
    { icon: 'fa-brands fa-java', text: 'Java / Spring' },
    { icon: 'fa-solid fa-plug', text: 'GraphQL & REST' }
  ],
  'Data & Infra': [
    { icon: 'fa-solid fa-database', text: 'Oracle' },
    { icon: 'fa-solid fa-database', text: 'PostgreSQL' },
    { icon: 'fa-solid fa-square-poll-vertical', text: 'Observability' }
  ],
  'Ferramentas & UX': [
    { icon: 'fa-solid fa-wand-magic-sparkles', text: 'Framer Motion' },
    { icon: 'fa-brands fa-react', text: 'React' },
    { icon: 'fa-solid fa-gear', text: 'CI/CD' }
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
      'Sistema que conversa com SEFAZ, audita regras fiscais e dispara notas via ADVPL com apoio de um agente de IA que valida documentos em tempo real.',
    tags: ['ADVPL', 'AI Validation', 'APIs Governamentais'],
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
      'Hub centralizado que conecta CRMs, gateways e notificações. Cada automação tem observabilidade e rollback inteligente usando N8N.',
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
      'API em FastAPI com filas assíncronas e autenticação JWT para baixar e normalizar mídias. Mostra minha preocupação com DX e arquitetura limpa.',
    tags: ['FastAPI', 'JWT', 'FFmpeg'],
    link: 'https://github.com/gaab0418/SpotDown'
  }
];

export const contactData = {
  location: 'Brasil • Santa Catarina',
  availability: 'Pronto para colaborar em projetos de IA, integrações e automações',
  items: [
    { icon: 'fa-brands fa-linkedin', text: 'LinkedIn', link: 'https://www.linkedin.com/in/gabriel-chiarelli-sz' },
    { icon: 'fa-brands fa-github', text: 'GitHub', link: 'https://github.com/gaab0418' },
    { icon: 'fa-brands fa-discord', text: 'Discord', link: 'https://discord.com/users/477968592994828290' },
    { icon: 'fa-solid fa-envelope', text: 'gabriel.chiarelli.sz1804@gmail.com', link: 'mailto:gabriel.chiarelli.sz1804@gmail.com' }
  ]
};

export const seoData = {
  title: 'Gabriel Chiarelli • Back-end & Automation Engineer',
  description:
    'Portfólio do Gabriel Chiarelli: especialista em back-end, IA aplicada e automações com N8N. Integrações inteligentes, APIs escaláveis e experiências digitais modernas.',
  url: 'https://gaab0418.github.io/portifolio',
  image: 'https://avatars.githubusercontent.com/u/108583444?v=4'
};

