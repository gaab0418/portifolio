# 🎯 Portfólio React - Instruções Completas

## 📖 O que foi feito?

Seu portfólio HTML foi **completamente transformado em um aplicativo React moderno**! 

### 🔄 Principais Mudanças:

1. **De HTML estático para React componetizado**
   - Cada seção agora é um componente React reutilizável
   - Código mais organizado e fácil de manter

2. **Hooks personalizados**
   - `useScrollIndicator` - Gerencia a barra de progresso
   - `useNavigationDots` - Controla os dots de navegação lateral
   - `useScrollAnimations` - Anima elementos ao scroll
   - `useTypewriter` - Efeito de máquina de escrever no nome

3. **Dados centralizados**
   - Todos os textos, links e informações em um único arquivo
   - Fácil de editar sem mexer no código dos componentes

4. **Build moderno com Vite**
   - Desenvolvimento ultra-rápido
   - Hot Module Replacement (HMR)
   - Build otimizado para produção

---

## 🚀 Como Começar?

### Passo 1: Abrir o Terminal

No PowerShell ou CMD, navegue até a pasta do projeto:

```bash
cd "C:\files\__Meus Projetos\Portifolio\react-portfolio"
```

### Passo 2: Instalar Dependências

```bash
npm install
```

Este comando vai baixar todas as bibliotecas necessárias (React, Vite, etc.)

### Passo 3: Executar o Projeto

```bash
npm run dev
```

Você verá algo como:

```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Abra o navegador e acesse: **http://localhost:5173**

---

## ✏️ Como Editar o Portfólio?

### Editando Informações Pessoais

Abra o arquivo: **`src/data/portfolioData.js`**

#### Alterar nome e foto:

```javascript
export const aboutData = {
  name: 'Seu Nome Aqui',
  role: 'Seu Cargo',
  description: [
    'Primeira descrição sobre você',
    'Segunda descrição'
  ],
  profileImage: 'URL_DA_SUA_FOTO'
};
```

#### Alterar experiências:

```javascript
export const experienceData = [
  {
    date: '2025 - Atual',
    title: 'Cargo',
    subtitle: 'Empresa, Local',
    content: 'Descrição do que você fez'
  },
  // Adicione mais experiências aqui
];
```

#### Adicionar novos projetos:

```javascript
export const worksData = [
  {
    image: '/assets/nome-da-imagem.png',
    category: 'Categoria',
    title: 'Nome do Projeto',
    description: 'Descrição detalhada',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    link: 'https://github.com/seu-usuario/projeto'
  },
  // Adicione mais projetos aqui
];
```

### Alterando Cores

Abra: **`src/styles/index.css`**

No início do arquivo, você encontra as variáveis de cor:

```css
:root {
  --dark-bg: #121212;        /* Cor de fundo principal */
  --dark-secondary: #1e1e1e; /* Cor de fundo secundária */
  --text-primary: #ffffff;   /* Cor do texto principal */
  --text-secondary: #b3b3b3; /* Cor do texto secundário */
  --accent: #5c6bc0;         /* Cor de destaque */
  --accent-hover: #7986cb;   /* Cor de destaque ao hover */
}
```

Basta alterar os códigos de cor hexadecimais!

### Adicionando Imagens

1. Coloque suas imagens na pasta: **`public/assets/`**
2. Referencie-as no código como: `/assets/nome-da-imagem.png`

Por exemplo:
```javascript
{
  image: '/assets/meu-projeto.png',
  title: 'Meu Projeto',
  // ...
}
```

---

## 🔧 Comandos Úteis

| Comando | O que faz |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria versão otimizada para produção |
| `npm run preview` | Visualiza a build de produção |

---

## 📂 Estrutura do Projeto Explicada

```
react-portfolio/
│
├── public/                 # Arquivos públicos (imagens, ícones)
│   └── assets/            # Suas imagens vão aqui
│
├── src/                   # Código fonte
│   ├── components/        # Componentes React
│   │   ├── About.jsx     # Seção "Sobre Mim"
│   │   ├── Skills.jsx    # Seção "Habilidades"
│   │   ├── Contact.jsx   # Seção "Contato"
│   │   └── ...           # Outros componentes
│   │
│   ├── hooks/            # Hooks personalizados
│   │   ├── useScrollIndicator.js
│   │   └── ...
│   │
│   ├── data/             # Dados do portfólio
│   │   └── portfolioData.js  # EDITE ESTE ARQUIVO!
│   │
│   ├── styles/           # Estilos CSS
│   │   └── index.css    # CSS global
│   │
│   ├── App.jsx           # Componente principal
│   └── main.jsx          # Ponto de entrada
│
├── index.html            # HTML base
├── package.json          # Dependências do projeto
└── vite.config.js        # Configuração do Vite
```

---

## 🎨 Personalizações Comuns

### 1. Mudar o Título da Página

Edite: **`index.html`**

```html
<title>Seu Nome - Portfólio</title>
```

### 2. Adicionar Favicon

1. Coloque seu `favicon.ico` na pasta `public/`
2. No `index.html`, adicione:

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
```

### 3. Remover uma Seção

Abra: **`src/App.jsx`**

Comente ou remova a linha do componente:

```javascript
function App() {
  return (
    <>
      <ScrollIndicator />
      <NavigationDots />
      
      <div className="container">
        <Header />
        <About />
        <Stats />
        <Brands />
        {/* <Experience /> */}  {/* Seção comentada */}
        <Education />
        <Skills />
        <RecentWorks />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
```

### 4. Adicionar Meta Tags (SEO)

No `index.html`, adicione:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Portfólio de Gabriel Chiarelli - Desenvolvedor Back-End" />
  <meta name="keywords" content="desenvolvedor, back-end, react, portfolio" />
  <meta name="author" content="Gabriel Chiarelli" />
  <!-- ... -->
</head>
```

---

## 🌐 Como Fazer Deploy?

### Opção 1: Vercel (Recomendado - GRÁTIS)

1. Crie uma conta no [Vercel](https://vercel.com)
2. Instale o Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. No terminal, dentro da pasta do projeto:
   ```bash
   npm run build
   vercel
   ```
4. Siga as instruções na tela

### Opção 2: Netlify (GRÁTIS)

1. Crie uma conta no [Netlify](https://netlify.com)
2. Arraste a pasta `dist` (após rodar `npm run build`) para o site do Netlify
3. Pronto!

### Opção 3: GitHub Pages

1. Instale o pacote:
   ```bash
   npm install --save-dev gh-pages
   ```
2. No `package.json`, adicione:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Execute:
   ```bash
   npm run deploy
   ```

---

## ❓ Problemas Comuns

### "npm não é reconhecido como comando"

**Solução**: Você precisa instalar o Node.js
- Baixe em: https://nodejs.org/
- Instale a versão LTS (recomendada)
- Reinicie o terminal

### "Port 5173 already in use"

**Solução**: A porta já está sendo usada
```bash
# Use Ctrl+C para parar o servidor atual
# Ou feche outras instâncias do Vite rodando
```

### Mudanças não aparecem

**Solução**: O Vite atualiza automaticamente, mas se não funcionar:
1. Salve o arquivo (Ctrl+S)
2. Recarregue a página (F5)
3. Se persistir, pare o servidor (Ctrl+C) e rode `npm run dev` novamente

### Imagens não aparecem

**Verificações**:
1. A imagem está na pasta `public/assets/`?
2. O nome do arquivo está correto (incluindo extensão)?
3. O caminho no código começa com `/assets/`?

Exemplo correto:
```javascript
image: '/assets/meu-projeto.png'  // ✅ Correto
image: 'assets/meu-projeto.png'   // ❌ Errado (falta a /)
image: '/public/assets/...'       // ❌ Errado (não inclua "public")
```

---

## 📚 Recursos para Aprender Mais

- [Documentação do React](https://react.dev/)
- [Documentação do Vite](https://vitejs.dev/)
- [MDN Web Docs - CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [Font Awesome Icons](https://fontawesome.com/icons)

---

## 🎉 Pronto!

Seu portfólio React está completo e pronto para uso!

**Próximos passos sugeridos:**
1. ✏️ Personalize os dados em `portfolioData.js`
2. 🎨 Ajuste as cores no `index.css`
3. 📸 Adicione suas próprias imagens
4. 🚀 Faça o deploy e compartilhe seu portfólio!

**Boa sorte com seu portfólio! 🚀**

