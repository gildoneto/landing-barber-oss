<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->
---
name: Barber Oss
description: Landing page institucional da barbearia do barbeiro e lutador de jiu-jitsu Braulio Almeida (Braw)
colors:
  primary: "#e11d48"
  neutral-bg: "#121212"
  neutral-surface: "#1a1a1a"
  neutral-border: "#2e2e2e"
  neutral-ink: "#ffffff"
  neutral-ink-muted: "#a3a3a3"
typography:
  display:
    fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 5rem)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0.05em"
rounded:
  sm: "2px"
  md: "4px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "64px"
---

# Design System: Barber Oss

## 1. Overview

**Creative North Star: "The Urban Dojo"**

O sistema de design da Barber Oss expressa uma fusão entre a cultura das ruas (estilo urbano, Recife, tranças) e a disciplina e estética do Jiu-Jitsu. A experiência visual segue a **Direção A (Raw Athletic / Tactical Mono)**, caracterizando-se por alto contraste, tipografia sans-serif robusta e elementos técnicos de alta precisão.

### Key Characteristics:
- Contraste imersivo com predominância de superfícies escuras (Charcoal/Chumbo).
- Tipografia funcional de alto impacto visual (Display Sans + Mono).
- Movimento coreografado com entradas e transições fluidas que guiam a atenção.
- Acabamento robusto com cantos pouco arredondados (estilo industrial/tatame).

## 2. Colors

**The Committed Dark Rule.** A superfície e o layout principal utilizam tons escuros (como preto carvão ou chumbo profundo) cobrindo entre 30% a 60% do peso visual da tela. Cores de sotaque (como vermelho carmim/crimson) são usadas estritamente para foco, tags de estado e conversão (≤10%).

### Primary
- **Crimson Red** (#e11d48): Usado como a cor primária de destaque (CTAs de agendamento, status ativo e detalhes dinâmicos).

### Neutral
- **Dark Charcoal** (#121212): Cor de fundo principal, oferecendo imersão e alto contraste.
- **Surface Gray** (#1a1a1a): Cor de preenchimento para cards, seções destacadas e containers.
- **Tactical Border** (#2e2e2e): Bordas nítidas de 1px para delimitar grades e seções.
- **Pure White** (#ffffff): Usado para textos de leitura principal e títulos de seções.
- **Muted Gray** (#a3a3a3): Usado para textos secundários e legendas de baixa prioridade.

## 3. Typography

**Display Font:** Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif (para títulos principais e chamadas).
**Body Font:** system-ui, -apple-system, sans-serif (para textos corridos e parágrafos).
**Label/Mono Font:** ui-monospace, monospace (para badges, tags, horários e pequenos dados técnicos).

**Character:** Uma combinação que une a força de uma fonte Display robusta e expressiva com a precisão e aridez industrial de fontes monoespaçadas nas etiquetas e pequenos dados.

### Hierarchy
- **Display** (Bold 900, clamp(2.5rem, 6vw, 5rem), Line-height 1.1): Títulos de seções principais e Hero.
- **Body** (Regular 400, 1rem, Line-height 1.5): Textos explicativos e seções textuais da página.
- **Label** (Medium 500, 0.875rem, Letter-spacing 0.05em): Tags, horários e identificadores.

## 4. Elevation

O sistema utiliza um modelo predominantemente plano com foco em camadas bidimensionais e bordas nítidas. Sombras e elevações não são usadas para simular profundidade suave, mas sim para indicar interações sob foco/hover através de bordas ou pequenas variações de opacidade.

**The Flat-First Rule.** Elementos de conteúdo são planos por padrão. Efeitos de elevação ou bordas destacadas surgem apenas como resposta à interação do usuário (hover/foco).

## 5. Components

*Nota: Componentes não existem no estágio inicial de semente (seed). Serão documentados automaticamente e mapeados à medida que o código for gerado.*

## 6. Do's and Don'ts

### Do:
- **Do** usar um tema escuro e de alto contraste baseado no preto carvão/chumbo.
- **Do** usar tipografia monoespaçada em etiquetas, dados secundários e detalhes de design.
- **Do** dar destaque claro aos botões de agendamento (CTAs) usando o Crimson Red (#e11d48).
- **Do** usar bordas finas de 1px (#2e2e2e) e cantos pouco arredondados (2px a 4px) para cartões e containers.

### Don't:
- **Don't** parecer uma landing page de SaaS genérica (evitar Tailwind azul padrão, fonte Inter padrão e cantos arredondados suaves idênticos).
- **Don't** adotar a estética clássica vintage saturada (evitar tons de sépia envelhecidos, caveiras, navalhas vitorianas e texturas de madeira artificial).
- **Don't** comprometer o contraste de textos curtos e longos (respeitar sempre a legibilidade WCAG AA).
