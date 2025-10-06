# 🚀 Guia de Início Rápido

## Instalação e Execução

### 1. Entre no diretório do projeto
```bash
cd react-portfolio
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute o projeto em modo de desenvolvimento
```bash
npm run dev
```

O aplicativo estará disponível em: **http://localhost:5173**

---

## 📦 Build para Produção

Para criar uma build otimizada para produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

Para visualizar a build de produção localmente:

```bash
npm run preview
```

---

## 🎨 Personalização

### Modificar dados do portfólio

Todos os dados do portfólio estão centralizados no arquivo:

**`src/data/portfolioData.js`**

Você pode editar:
- ✏️ Informações pessoais (nome, foto, descrição)
- 📊 Estatísticas
- 💼 Experiências profissionais
- 🎓 Formação acadêmica
- 🛠️ Habilidades e tecnologias
- 🚀 Projetos e trabalhos recentes
- 📞 Informações de contato

### Alterar cores e estilos

As variáveis CSS estão definidas em:

**`src/styles/index.css`**

No início do arquivo você encontra as variáveis de cor:

```css
:root {
  --dark-bg: #121212;
  --dark-secondary: #1e1e1e;
  --text-primary: #ffffff;
  --text-secondary: #b3b3b3;
  --accent: #5c6bc0;
  --accent-hover: #7986cb;
}
```

### Adicionar/Remover Seções

Os componentes são modulares. Para adicionar ou remover seções, edite:

**`src/App.jsx`**

---

## 📁 Estrutura de Componentes

```
src/
├── components/
│   ├── About.jsx          # Seção sobre mim
│   ├── Brands.jsx         # Tecnologias/Marcas
│   ├── Contact.jsx        # Contato
│   ├── Education.jsx      # Educação
│   ├── Experience.jsx     # Experiências
│   ├── Footer.jsx         # Rodapé
│   ├── Header.jsx         # Cabeçalho
│   ├── NavigationDots.jsx # Navegação lateral
│   ├── RecentWorks.jsx    # Trabalhos recentes
│   ├── ScrollIndicator.jsx# Barra de progresso
│   ├── Skills.jsx         # Habilidades
│   ├── Stats.jsx          # Estatísticas
│   ├── TimelineItem.jsx   # Item de timeline
│   └── WorkItem.jsx       # Item de trabalho
├── hooks/
│   ├── useNavigationDots.js  # Hook de navegação
│   ├── useScrollAnimations.js# Hook de animações
│   ├── useScrollIndicator.js # Hook de progresso
│   └── useTypewriter.js      # Hook de efeito de digitação
├── data/
│   └── portfolioData.js   # Dados do portfólio
└── styles/
    └── index.css          # Estilos globais
```

---

## 🔥 Features

✨ Animações suaves ao scroll  
📱 Design totalmente responsivo  
🎯 Navegação por dots lateral  
📊 Indicador de progresso de scroll  
💬 Cópia de email para clipboard  
🎨 Efeito typewriter no nome  
🖼️ Showcase interativo de projetos  
🏷️ Filtros de habilidades por categoria  

---

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript
- **Vite** - Build tool moderna
- **Font Awesome** - Ícones
- **CSS3** - Estilização com variáveis e animações

---

## 📝 Dicas

1. **Imagens dos projetos**: Coloque suas imagens na pasta `public/assets/`
2. **Favicon**: Adicione seu favicon em `public/`
3. **Meta tags**: Edite as meta tags no arquivo `index.html`
4. **Performance**: O Vite já otimiza automaticamente na build
5. **Deploy**: Faça deploy da pasta `dist/` após rodar `npm run build`

---

## 💡 Sugestões de Deploy

- **Vercel** (Recomendado): Deploy automático e gratuito
- **Netlify**: Fácil configuração com domínio customizado
- **GitHub Pages**: Gratuito para repositórios públicos
- **Firebase Hosting**: Rápido e confiável

---

## 📞 Suporte

Se tiver alguma dúvida ou problema, verifique:

1. Se todas as dependências foram instaladas corretamente
2. Se está usando Node.js versão 16 ou superior
3. Se a porta 5173 não está sendo usada por outro processo

---

**Divirta-se criando seu portfólio! 🎉**

