# 💼 Portfolio Profissional - Gabriel Chiarelli

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)](./LICENSE)

Portfolio profissional moderno desenvolvido em React, apresentando experiências, habilidades técnicas e projetos recentes com design elegante e responsivo.

---

## ✨ Features

### 🎨 Design Moderno
- **Dark/Light Mode** - Sistema completo de temas com transições suaves
- **Design System Roxo** - Paleta de cores elegante e profissional
- **Animações Fluidas** - Transições e efeitos de hover suaves
- **Glassmorphism** - Efeitos modernos de vidro fosco

### 🚀 Performance
- **Vite** - Build ultra-rápida e Hot Module Replacement
- **Componentes React** - Arquitetura modular e reutilizável
- **Lazy Loading** - Otimização de carregamento de recursos
- **CSS Otimizado** - Variáveis CSS e transições GPU-aceleradas

### 📱 Responsividade
- **Mobile-First** - Design adaptativo para todos os dispositivos
- **Breakpoints Inteligentes** - Layout otimizado para diferentes telas
- **Touch-Friendly** - Interações otimizadas para dispositivos móveis

### ♿ Acessibilidade
- **WCAG AA Compliant** - Contraste e legibilidade otimizados
- **Semantic HTML** - Estrutura acessível para leitores de tela
- **Keyboard Navigation** - Totalmente navegável via teclado

---

## 🛠️ Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool de próxima geração
- **CSS3** - Estilização moderna com variáveis e animações
- **Font Awesome** - Biblioteca de ícones
- **Google Fonts** - Tipografia profissional (Inter + Sora)

---

## 🚀 Começando

### Pré-requisitos

- **Node.js** 16+ ([Download](https://nodejs.org/))
- **npm** ou **yarn**

### Instalação

```bash
# Clone o repositório
git clone https://github.com/gaab0418/portfolio.git

# Entre no diretório
cd portfolio

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

O aplicativo estará disponível em: **http://localhost:5173**

### Build para Produção

```bash
# Gere a build otimizada
npm run build

# Preview da build
npm run preview
```

Os arquivos otimizados serão gerados na pasta `dist/`

---

## 📁 Estrutura do Projeto

```
portfolio/
├── public/                 # Assets estáticos
│   └── assets/            # Imagens dos projetos
│       ├── grnf.png
│       └── spotdown.png
│
├── src/
│   ├── components/        # Componentes React
│   │   ├── About.jsx
│   │   ├── Brands.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── NavigationDots.jsx
│   │   ├── RecentWorks.jsx
│   │   ├── ScrollIndicator.jsx
│   │   ├── Skills.jsx
│   │   ├── Stats.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── TimelineItem.jsx
│   │   └── WorkItem.jsx
│   │
│   ├── hooks/            # Custom React Hooks
│   │   ├── useNavigationDots.js
│   │   ├── useScrollAnimations.js
│   │   ├── useScrollIndicator.js
│   │   ├── useTheme.js
│   │   └── useTypewriter.js
│   │
│   ├── data/             # Dados do portfolio
│   │   └── portfolioData.js
│   │
│   ├── styles/           # Estilos CSS
│   │   └── index.css
│   │
│   ├── App.jsx           # Componente principal
│   └── main.jsx          # Ponto de entrada
│
├── index.html            # HTML base
├── vite.config.js        # Configuração do Vite
├── package.json          # Dependências
├── DESIGN_GUIDE.md       # Guia de design detalhado
├── INSTRUÇÕES.md         # Instruções em português
└── README.md             # Este arquivo
```

---

## 🎨 Personalização

### 1️⃣ Dados Pessoais

Edite o arquivo **`src/data/portfolioData.js`** para personalizar:

- ✏️ Nome, foto e descrição
- 💼 Experiências profissionais
- 🎓 Formação acadêmica
- 🛠️ Habilidades e tecnologias
- 🚀 Projetos e trabalhos
- 📞 Informações de contato

### 2️⃣ Cores e Temas

Modifique as variáveis CSS em **`src/styles/index.css`**:

```css
:root[data-theme="light"] {
  --accent-primary: #9333EA;  /* Cor principal */
  --accent-hover: #7C3AED;    /* Cor no hover */
}

:root[data-theme="dark"] {
  --accent-primary: #A78BFA;  /* Cor principal */
  --accent-hover: #C4B5FD;    /* Cor no hover */
}
```

### 3️⃣ Imagens dos Projetos

Adicione suas imagens em **`public/assets/`** e referencie em `portfolioData.js`:

```javascript
{
  image: '/assets/seu-projeto.png',
  title: 'Seu Projeto',
  // ...
}
```

---

## 🎯 Paleta de Cores

### Light Mode ☀️
- **Background**: `#F5F3F7` - Cinza-lavanda suave
- **Cards**: `#FAF5FF` - Lavanda claro
- **Accent**: `#9333EA` - Roxo vibrante
- **Text**: `#2D3748` - Cinza escuro

### Dark Mode 🌙
- **Background**: `#0A0118` - Preto roxo profundo
- **Cards**: `#1A0B2E` - Roxo escuro
- **Accent**: `#A78BFA` - Roxo claro
- **Text**: `#E9D5FF` - Lavanda clarinho

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abrir um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

## 👤 Autor

**Gabriel Chiarelli**

- 💼 LinkedIn: [gabriel-chiarelli-sz](http://www.linkedin.com/in/gabriel-chiarelli-sz)
- 🐙 GitHub: [@gaab0418](https://github.com/gaab0418)
- 💬 Discord: [gaab0418](https://discord.com/users/477968592994828290)
- 📧 Email: gabriel.chiarelli.sz1804@gmail.com
- 📍 Localização: Brasil, SC