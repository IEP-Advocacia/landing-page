# Acessibilidade (WCAG 2.1)

Este documento descreve as práticas de acessibilidade implementadas na landing page Campelo Advogados.

## O que foi implementado

### Navegação por teclado
- **Link “Pular para o conteúdo”**: primeiro elemento focável; ao focar (Tab), fica visível e leva ao `<main>`.
- **Foco visível**: todos os links, botões e o logo têm contorno laranja (`#FF5C00`) em `:focus-visible` (só ao navegar por teclado).
- **Logo**: funciona com Enter e Espaço; `aria-label` descreve a ação (“Ir para o topo da página”).

### Redução de movimento
- **`prefers-reduced-motion: reduce`**: animações e transições são praticamente desativadas para quem prefere menos movimento (epilepsia, labirintite, preferência do usuário).

### Landmarks e estrutura
- **`<main id="main-content" role="main">`**: conteúdo principal identificável por leitores de tela.
- **`<nav aria-label="Menu principal">`**: navegação principal nomeada.
- **`<footer role="contentinfo" aria-label="Rodapé do site">`**: rodapé identificado.
- **Seções**: cada `<section>` tem `aria-labelledby` apontando para o título (h2) da seção (Hero, Escritório, Áreas, Metodologia, Liderança, Contato).

### Conteúdo decorativo
- **`aria-hidden="true"`** em: camada de grão, spots de luz (.spotlight), overlays de gradiente e **todos os ícones** Material Symbols (o texto ao lado já descreve a informação).

### Botões e links
- **Botões**: `type="button"` e `aria-label` quando o texto sozinho não basta (ex.: “Agendar Consulta”, “Fale Conosco”).
- **WhatsApp**: trocado de `<button>` para `<a href="https://wa.me/5585988542604">` com `target="_blank"`, `rel="noopener noreferrer"` e `aria-label` descritivo.
- **Links “em breve”**: Política de Privacidade e Termos de Uso com `aria-label` indicando “(página em breve)”.

### Imagens
- **Alt text** descritivo: escritório (“Sala do escritório Campelo Advogados com estante de livros jurídicos…”), foto do fundador (“Dr. Cláudio Pacheco Campelo, advogado e fundador…”).

### Listas e grupos
- **Estatísticas (15+, 500+, etc.)**: container com `role="list"` e cada card com `role="listitem"` e `aria-label` (ex.: “15 ou mais anos de experiência”).
- **Metodologia (pilares)**: `role="list"` no grid e `role="listitem"` em cada card.
- **Contato**: cada bloco (endereço, telefone, e-mail, horário) com `role="group"` e `aria-labelledby` no título (h4).

### Citações
- **Rui Barbosa**: trecho em `<blockquote>` com `<cite>` para o autor.

### Idioma
- **`<html lang="pt-BR">`**: idioma da página declarado.

---

## Como testar

1. **Teclado**: navegue só com Tab, Shift+Tab, Enter e Espaço; confira o link “Pular para o conteúdo” e o foco visível em todos os interativos.
2. **Leitor de tela**: NVDA (Windows), VoiceOver (macOS) ou TalkBack (Android); verifique anúncio de landmarks, títulos e links.
3. **Redução de movimento**: em Windows: Configurações > Acessibilidade > Efeitos visuais > Efeitos de animação desativados; recarregue a página e confira se animações/transições foram reduzidas.
4. **Ferramentas**: Lighthouse (Chrome DevTools, aba Accessibility) ou axe DevTools.

Com isso, a página está alinhada às recomendações de acessibilidade (WCAG 2.1 Nível AA) para o conteúdo atual.
