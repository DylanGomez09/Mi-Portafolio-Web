# Dylan Gómez — Portfolio

Sitio personal en español rioplatense, con estética editorial monocroma: una página principal, una página de servicios, una tarjeta de enlaces (`/link`) para compartir desde el celular y el aviso de privacidad.

Construido con Astro 5, Tailwind CSS 3.4, TypeScript y JavaScript vanilla. Sin librerías de animación ni frameworks de UI en runtime. El QR de `/link` se genera en build.

## Stack

- [Astro 5](https://astro.build) — sitio estático y componentes `.astro`.
- [Tailwind CSS 3.4](https://tailwindcss.com) — tokens, tipografía y layout.
- Inter Tight (300/400/500/600/800) y JetBrains Mono (400/500), self-hosted con Fontsource.
- TypeScript para el contenido en `src/data/portfolio.ts`.

## Requisitos

- Node.js 20 o superior.
- pnpm 10 (`corepack enable` o `npm i -g pnpm`).

## Desarrollo

```bash
pnpm install
pnpm dev
```

Sitio local: `http://localhost:4321`.

## Scripts

| Comando        | Descripción                                                              |
| -------------- | ------------------------------------------------------------------------ |
| `pnpm dev`     | Servidor de desarrollo con HMR.                                          |
| `pnpm build`   | Genera el sitio estático en `dist/`.                                     |
| `pnpm preview` | Sirve `dist/` localmente.                                                |
| `pnpm check`   | Ejecuta `astro check` (TypeScript y componentes).                        |
| `pnpm seo:assets`  | Regenera `images/og.jpg` e iconos PWA desde el monograma y el retrato. |
| `pnpm seo:indexnow` | Avisa a Bing/Yandex las URLs del sitemap (después de deployar).    |

## Estructura

```text
public/
  images/
    avatar.jpg          Recorte cuadrado para el navbar y /link (120×120)
    about-600.webp      Retrato de Sobre mí (600×800)
    about-1200.webp     Ídem en alta densidad (1200×1600)
    hero-800.webp       Retrato del hero (800×1067)
    hero-1200.webp      Ídem, tamaño por defecto (1200×1600)
    hero-2000.webp      Ídem para pantallas retina (2000×2667)
    og.jpg              Open Graph 1200×630 generado con Sharp
  icons/
    favicon.svg         Favicon vectorial
    favicon-32.png      Favicon PNG (32×32)
    favicon-48.png      Favicon PNG (48×48)
    icon-192.png        Icono PWA / Android
    icon-512.png        Icono PWA / Android (también maskable)
    apple-touch-icon.png  Icono iOS 180×180
  site.webmanifest      Manifest PWA
  llms.txt              Resumen del sitio para asistentes de IA
  <clave>.txt           Clave pública de IndexNow
  robots.txt            Allow total + sitemap
  _redirects            Apex → www y rutas legacy del sitio anterior
assets/
  portrait-hero-source.webp  Original del hero (3000×4000, no se publica)
  portrait(2).jpg            Original del retrato anterior (no se publica)
scripts/
  generate-seo-assets.mjs  OG e iconos desde las fuentes locales
  indexnow.mjs             Ping a IndexNow con las URLs del sitemap
src/
  components/         Navbar, Hero, About, Skills, Projects, Mentions,
                      Process, Footer, SectionHeading, Icon
  data/portfolio.ts   Perfil, proyectos, skills, prensa y proceso
  data/services.ts    Servicios, perfiles, etapas y FAQ
  lib/seo.ts          Esquemas JSON-LD (Person, WebSite, Service, FAQ…)
  layouts/Layout.astro  SEO, Open Graph, schema, Clarity, Umami, reloj, parallax
  pages/index.astro   Página principal
  pages/servicios.astro  Oferta de servicios + FAQ
  pages/link.astro    Tarjeta de enlaces con QR generado en build
  pages/privacidad.astro  Aviso de privacidad (Clarity y Umami)
  pages/404.astro     Página no encontrada (noindex)
  styles/global.css   Tokens, grano, hero, navbar y responsive
netlify.toml          Build, publish, headers de seguridad y caché
astro.config.mjs      Sitemap con prioridades y `site` canónico
```

## Contenido

Casi todo el texto vive en `src/data/portfolio.ts`. Para cambiar proyectos, skills, menciones o proceso, editá ese archivo.

El hero usa tres variantes (`hero-800/1200/2000.webp`) generadas desde `assets/portrait-hero-source.webp`, y Sobre mí usa dos (`about-600/1200.webp`); la de 1200 también alimenta Open Graph. `avatar.jpg` es el recorte de 120×120 del navbar. Las fotos y `og.jpg` viven en `public/images/`; favicons e iconos de plataforma, en `public/icons/`.

Las rutas y los `srcset` viven en `src/data/portfolio.ts` (`photo*` y `heroPhoto*`). Si cambiás una foto, generá las variantes con Sharp, en escala de grises y con el ajuste tonal ya horneado, y dejá el original fuera de `public/` para no publicarlo:

```bash
node -e "const sharp=require('sharp');sharp('assets/portrait-hero-source.webp').resize({width:1200}).grayscale().linear(1.28,-20).modulate({brightness:0.92}).webp({quality:64,effort:6}).toFile('public/images/hero-1200.webp')"
```

### Contacto

`site.email` está configurado con el email de contacto, así que el CTA principal del footer y la tarjeta de `/link` abren `mailto:`. Si lo cambiás, se actualiza en todos lados (incluido el JSON-LD).

## Analítica y mapas de calor

El sitio mide con dos herramientas, ambas cargadas desde `src/layouts/Layout.astro` (aplican a todas las páginas):

- **Microsoft Clarity**: mapas de calor, scroll y grabaciones de sesión. Se carga en tiempo ocioso y sólo en `www.dylangomez.online`, así no graba localhost ni deploy previews.
- **Umami Cloud**: estadísticas agregadas sin cookies. El script usa `data-domains` y respeta `Do Not Track`.

Los IDs no son secretos (viajan en el HTML), así que quedan como valor por defecto. Para cambiarlos sin editar código:

```dotenv
PUBLIC_CLARITY_PROJECT_ID=tu_project_id
PUBLIC_UMAMI_WEBSITE_ID=tu_website_id
```

En Netlify, cargá las variables en **Site configuration → Environment variables** y volvé a deployar: Astro las hornea en build. Reiniciá el dev server después de tocar `.env`.

Eventos disponibles en Umami: `email-cta`, `email`, `github`, `linkedin`, `proyecto-demo`, `proyecto-repo` (con el nombre del proyecto), `qr-open` y los enlaces de `/link`.

Los heatmaps de Clarity tardan unos minutos y necesitan visitas reales. El aviso de privacidad está en `/privacidad/`.

## SEO y contenido

### Qué está implementado

- **Metadatos por página**: `title`, `description`, `author`, canonical absoluto, `lang="es-AR"`, `hreflang` `es-ar` / `x-default` y robots con `max-image-preview:large`. La 404 va con `noindex, nofollow`.
- **Open Graph y Twitter Cards**: `images/og.jpg` 1200×630 con tipo, dimensiones y alt; `summary_large_image` para Twitter/X.
- **Datos estructurados** (`src/lib/seo.ts`): `Person`, `WebSite`, `ProfilePage`, `ItemList` de proyectos, `BreadcrumbList`, `ProfessionalService` con catálogo de servicios y `FAQPage`. Todo se emite como JSON-LD en el `<head>`.
- **Rastreo**: `robots.txt` con `Allow: /` y referencia al sitemap; `sitemap-index.xml` generado por `@astrojs/sitemap` con prioridades (home 1.0, servicios 0.9, link 0.5, privacidad 0.3) y `lastmod`.
- **Contenido para IA**: `llms.txt` resume el perfil, los servicios y los enlaces.
- **PWA**: manifest con iconos 192/512, `apple-touch-icon` y `theme-color`.
- **Enlazado interno**: navbar, hero, Sobre mí y footer apuntan a `/servicios/`; los anchors del navbar funcionan desde cualquier ruta (`/#proyectos`, `/#inicio`).
- **Marketing**: la página `/servicios/` ataca búsquedas de intención comercial (“desarrollo web Buenos Aires”, “software a medida”, “apps móviles”, “automatización con IA”) con propuesta de valor, perfiles, proceso y seis preguntas frecuentes.
- **Rendimiento**: sitio estático, fuentes self-hosted, imágenes WebP con `srcset`, preload sólo del hero y JavaScript mínimo. Los headers de `netlify.toml` cachean assets con hash por un año.

### Puesta en marcha en buscadores

1. **Google Search Console** → agregar propiedad `https://www.dylangomez.online` → verificar por etiqueta HTML y cargar `PUBLIC_GOOGLE_SITE_VERIFICATION` en Netlify. Después enviar `https://www.dylangomez.online/sitemap-index.xml`.
2. **Bing Webmaster Tools** → importar desde Google o verificar con `PUBLIC_BING_SITE_VERIFICATION` → enviar el mismo sitemap. Bing alimenta también Copilot y algunos resultados de IA.
3. **IndexNow** → después de cada deploy de contenido: `pnpm seo:indexnow`. La clave pública está en `public/<clave>.txt`.
4. **Perfiles externos**: mantener el sitio en la bio de GitHub, LinkedIn y cualquier directorio. El `<link rel="me">` y el `sameAs` del schema ya conectan ambas cuentas.

### Reglas de contenido

- Una intención de búsqueda por página; no duplicar el título de la home en `/servicios/`.
- Descripciones de 120–155 caracteres, con la keyword principal al inicio.
- Cada `h1` único; el resto de la jerarquía en `h2`/`h3`.
- Al agregar un proyecto o servicio, actualizar `src/data/*.ts`: el contenido y el schema se generan desde ahí.
- Si cambiás el dominio, actualizá `site` en `astro.config.mjs`, `site.website` en `src/data/portfolio.ts` y el sitemap de `robots.txt`.
- Para regenerar la imagen social y los iconos: `pnpm seo:assets`.

### Diagnóstico rápido

```bash
pnpm build
Get-Content dist/sitemap-0.xml
curl.exe -I https://www.dylangomez.online/
```

Validar los datos estructurados en [Schema Markup Validator](https://validator.schema.org/) y la vista previa social en [OpenGraph.xyz](https://www.opengraph.xyz/).

## Responsive y accesibilidad

- Mobile first desde 360 px; grillas a una columna por debajo de 820 px.
- Hero a `100svh`, foto a ancho completo con máscara vertical en mobile, 72% en tablets verticales y 58% en desktop apaisado.
- El retrato de “Sobre mí” sólo es sticky desde 820 px.
- `env(safe-area-inset-*)` y `viewport-fit=cover`.
- Foco visible, HTML semántico y contraste AA en textos informativos.
- Secciones y tarjetas aparecen al hacer scroll con `IntersectionObserver`; sin JS quedan visibles.
- `prefers-reduced-motion` desactiva grano, spotlight, parallax y animaciones de entrada y scroll.
- El spotlight sólo se activa en dispositivos con `hover: hover` y puntero fino.

## Deploy

Hosting: Netlify, conectado a la rama `master` del repo. Cada push a `master` dispara el deploy.

`netlify.toml` fija todo lo necesario, así no depende de la configuración del panel:

- build: `pnpm build`
- publish: `dist`
- `NODE_VERSION=20`
- headers: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, cache inmutable para `/_astro/*` y cache largo para imágenes.

Dominio canónico: `https://www.dylangomez.online`. El apex redirige a `www` y las rutas del sitio anterior (`/en/*`) caen en la home, según `public/_redirects`. `/link` es una página real. Netlify sirve `404.html` automáticamente y el sitemap queda en `/sitemap-index.xml`.

Build local y preview:

```bash
pnpm build
pnpm preview
```

Si el sitio va en un subdirectorio, configurá `base` en `astro.config.mjs`. Actualizá también `site` en `astro.config.mjs` y `site.website` en `src/data/portfolio.ts` si cambia el dominio.

## Verificación

```bash
pnpm check
pnpm build
```

El sitio se probó sin overflow horizontal ni errores de consola entre 360 px y 1920 px en `/`, `/servicios/`, `/link/`, `/privacidad/` y la 404, incluyendo filtros multi-categoría, FAQ desplegables, reloj en vivo, navegación responsive, animaciones de scroll y el diálogo del QR en `/link`. También se validaron el sitemap, los esquemas JSON-LD, el manifest y los iconos.
