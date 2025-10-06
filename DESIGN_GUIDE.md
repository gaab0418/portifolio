# 🎨 Guia do Novo Design

## ✨ O que mudou?

Seu portfólio foi completamente redesenhado com um visual **moderno, soft e profissional**!

---

## 🌓 Dark Mode & Light Mode

### Como usar:

1. **Botão no canto superior direito** com ícone de sol/lua
2. **Alterna entre os temas** automaticamente
3. **Salva sua preferência** no navegador
4. **Respeita preferência do sistema** na primeira visita

### Características:

✅ Transição suave entre temas  
✅ Todas as cores se adaptam perfeitamente  
✅ Leitura confortável em ambos os modos  
✅ Persistência da preferência  

---

## 🎨 Paleta de Cores

### Light Mode (Tema Claro)
- **Fundo Principal**: `#FAFBFC` - Branco suave
- **Cartões**: `#FFFFFF` - Branco puro
- **Texto Principal**: `#1F2937` - Cinza escuro
- **Texto Secundário**: `#6B7280` - Cinza médio
- **Accent**: `#6366F1` - Índigo vibrante

### Dark Mode (Tema Escuro)
- **Fundo Principal**: `#0F172A` - Azul escuro profundo
- **Cartões**: `#1E293B` - Azul escuro médio
- **Texto Principal**: `#F1F5F9` - Branco suave
- **Texto Secundário**: `#CBD5E1` - Cinza claro
- **Accent**: `#818CF8` - Índigo claro

---

## 🆕 Novidades do Design

### 1. **Tipografia Moderna**
- **Títulos**: Fonte Sora (elegante e moderna)
- **Corpo**: Fonte Inter (legível e profissional)
- **Tamanhos responsivos** que se adaptam a qualquer tela

### 2. **Cartões Modernos**
- Bordas arredondadas (16-24px)
- Sombras suaves e elegantes
- Efeito hover com elevação
- Bordas que mudam de cor ao passar o mouse

### 3. **Efeitos Visuais**

#### Glassmorphism
- Botão de tema com efeito vidro
- Backdrop blur para profundidade

#### Gradientes
- Títulos com gradiente colorido
- Botões com transições suaves
- Indicador de progresso animado

#### Animações
- Hover states responsivos
- Transições suaves (0.3s cubic-bezier)
- Float animation no ícone do header
- Pulse animation nos elementos em destaque

### 4. **Cards de Projeto**
- Layout grid moderno
- Imagens com zoom ao hover
- Tags interativas
- Links com animação de seta

### 5. **Timeline Melhorada**
- Linha vertical com gradiente
- Pontos circulares animados
- Hover com deslocamento suave
- Datas com badges coloridos

### 6. **Stats Section**
- Cards individuais elevados
- Números com gradiente
- Efeito hover com elevação
- Grid responsivo

### 7. **Skills Section**
- Categorias com tabs modernos
- Tags interativas
- Ícones coloridos
- Animação de entrada

---

## 🎯 Elementos Interativos

### Hover Effects
- **Cartões**: Elevam 4-8px
- **Botões**: Escalam 1.05-1.1x
- **Imagens**: Zoom suave (1.08x)
- **Links**: Setas animadas

### Transições
- **Tema**: 0.3s ease
- **Hover**: 0.3s cubic-bezier
- **Animações**: 0.8s ease

### Sombras Dinâmicas
- **Pequena**: Para elementos sutis
- **Média**: Para cartões
- **Grande**: Para hover states
- **Glow**: Para elementos ativos (accent)

---

## 📱 Responsividade

### Desktop (> 1024px)
- Layout em grid completo
- Navegação dots visível
- Todos os efeitos ativos

### Tablet (768px - 1024px)
- Grid adaptado
- Espaçamentos otimizados
- Elementos centralizados

### Mobile (< 768px)
- Grid de 1 coluna
- Navegação dots oculta
- Imagens responsivas
- Tipografia escalada

---

## 🎨 Classes Utilitárias

### Gradiente de Texto
```css
.text-gradient {
  background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Efeito Vidro
```css
.glass-effect {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

---

## 🎭 Personalização Rápida

### Mudar cor de destaque (Accent)

No arquivo `src/styles/index.css`, procure por:

```css
:root[data-theme="light"] {
  --accent-primary: #6366F1;  /* Sua cor aqui */
  --accent-hover: #4F46E5;    /* Tom mais escuro */
}

:root[data-theme="dark"] {
  --accent-primary: #818CF8;  /* Sua cor aqui */
  --accent-hover: #A5B4FC;    /* Tom mais claro */
}
```

### Sugestões de cores accent:

#### 🔵 Azul Profissional (Padrão)
- Light: `#6366F1`
- Dark: `#818CF8`

#### 💚 Verde Moderno
- Light: `#10B981`
- Dark: `#34D399`

#### 💜 Roxo Criativo
- Light: `#8B5CF6`
- Dark: `#A78BFA`

#### 🔴 Vermelho Vibrante
- Light: `#EF4444`
- Dark: `#F87171`

#### 🟠 Laranja Energético
- Light: `#F59E0B`
- Dark: `#FBBF24`

---

## 📊 Melhorias de UX

✅ **Legibilidade**: Contraste otimizado (WCAG AA)  
✅ **Feedback Visual**: Todo elemento interativo responde  
✅ **Animações**: Suaves e não invasivas  
✅ **Loading**: Transições imperceptíveis  
✅ **Acessibilidade**: Cores e contrastes adequados  

---

## 🚀 Performance

- ⚡ **CSS Otimizado**: Variáveis reutilizáveis
- 🎯 **Seletores eficientes**: Sem aninhamento desnecessário
- 🔄 **Transições GPU**: Transform e opacity
- 📦 **Fontes otimizadas**: Google Fonts com display=swap

---

## 💡 Dicas

1. **Teste ambos os temas** durante o desenvolvimento
2. **Use o modo claro** para apresentações
3. **Use o modo escuro** para codificação noturna
4. **Verifique contraste** ao mudar cores
5. **Teste em mobile** regularmente

---

## 🎨 Design System

### Espaçamentos
- **Extra small**: 0.5rem (8px)
- **Small**: 1rem (16px)
- **Medium**: 1.5rem (24px)
- **Large**: 2rem (32px)
- **Extra large**: 3rem (48px)

### Border Radius
- **Small**: 8px
- **Medium**: 12px
- **Large**: 16px
- **Extra large**: 24px
- **Full**: 50% (círculos)

### Sombras
- **sm**: Sutil
- **md**: Padrão
- **lg**: Elevado
- **xl**: Muito elevado
- **glow**: Com brilho de accent

---

**Seu portfólio agora tem um design profissional, moderno e elegante! 🎉**

