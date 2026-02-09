# Checklist SEO – Campelo Advogados

O que já está implementado no site:

## ✅ Implementado

- **Title** otimizado com palavras-chave (Fortaleza, advocacia, excelência jurídica)
- **Meta description** (~155 caracteres) com foco em local e serviços
- **Meta keywords** relevantes para advocacia e região
- **Canonical URL** (ajuste o domínio em `index.html` se for outro)
- **Open Graph** (Facebook/LinkedIn) – título, descrição, imagem, locale pt_BR
- **Twitter Card** – summary_large_image com título, descrição e imagem
- **JSON-LD** (dados estruturados):
  - `LegalService` – escritório, endereço, telefone, e-mail, horário
  - `Person` – Dr. Cláudio Pacheco Campelo
  - `WebSite` – para o Google
- **robots.txt** – permite indexação e aponta para o sitemap
- **sitemap.xml** – URL principal com prioridade e lastmod
- **Acessibilidade** – link “Pular para o conteúdo”, `aria-label` no menu, `role="main"`, `id="main-content"`
- **Semântica** – um único `<h1>`, hierarquia de `<h2>`/`<h3>`, `<main>`, `<nav>`, `<footer>`
- **Imagens** – `alt` descritivos nas imagens de conteúdo

## 🔧 O que você precisa fazer

1. **URL real**  
   Se o domínio for diferente de `https://www.iepadvocacia.com.br/`, substitua em:
   - `index.html`: `canonical`, `og:url`, `twitter:url`, URLs no JSON-LD
   - `public/robots.txt`: linha do Sitemap
   - `public/sitemap.xml`: `<loc>`

2. **Imagem para redes sociais (OG Image)**  
   - Crie ou use uma imagem **1200×630 px** (logo + texto ou foto do escritório).
   - Salve como `og-image.jpg` na pasta `public/`.
   - Assim as tags `og:image` e `twitter:image` já configuradas no HTML funcionarão.

3. **Logo para schema**  
   - Coloque um `logo.png` em `public/` se quiser que o Google use nos resultados (o JSON-LD já referencia `https://www.iepadvocacia.com.br/logo.png`).

4. **Google Search Console**  
   - Quando o site estiver no ar: propriedade em [search.google.com/search-console](https://search.google.com/search-console).
   - Envie o sitemap: `https://www.seudominio.com.br/sitemap.xml`.

5. **Atualizar `lastmod` no sitemap**  
   - Ao fazer mudanças relevantes no conteúdo, altere a data em `public/sitemap.xml` na tag `<lastmod>` (formato AAAA-MM-DD).

Com isso, a base técnica de SEO fica completa; o restante depende de conteúdo, links externos e tempo de indexação.
