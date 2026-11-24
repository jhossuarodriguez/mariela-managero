# Managero — Sitio web

Sitio web corporativo de **Managero**, agencia de branding, diseño web, apps, marketing digital y servicios creativos con sede en Santo Domingo, República Dominicana. Construido con [Astro](https://astro.build), desplegado en [Vercel](https://vercel.com).

🔗 [www.managerod.com](https://www.managerord.com)

## Stack

- **[Astro 7](https://astro.build)** — framework principal, renderizado por servidor (adapter de Vercel)
- **[Tailwind CSS 4](https://tailwindcss.com)** — estilos, vía plugin de Vite
- **TypeScript** + **Zod** — tipado y validación de formularios
- **[Resend](https://resend.com)** — envío de correos del formulario de contacto
- **[Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/)** — verificación anti-spam en el formulario
- **[Lenis](https://lenis.darkroom.engineering/)** — scroll suave
- **[Biome](https://biomejs.dev)** — lint y formato
- **Husky** — hooks de git (pre-commit)
- **Google Analytics (gtag.js)** — medición

## Características

- **Bilingüe (es/en)** con Astro i18n, `/es/` como locale por defecto y rutas equivalentes en `/en/`
- **Páginas de servicios dinámicas** (`/[locale]/servicios/[slug]/`) generadas desde `src/data/services.ts`, con contenido, SEO y capacidades por servicio y por idioma
- **Formulario de contacto** con Astro Actions, validación con Zod, verificación Turnstile y envío de doble correo (aviso interno + confirmación al cliente) vía Resend
- **Sitemap** con enlaces `hreflang` alternos entre idiomas (`@astrojs/sitemap`)
- **SEO técnico**: metadatos Open Graph/Twitter, `robots.txt` dinámico, JSON-LD de organización, canonical e idiomas alternos por página
- **Imágenes optimizadas**: generación de tamaños responsivos e imágenes críticas vía scripts propios

## Estructura del proyecto

```text
/
├── public/                     # Archivos estáticos
├── scripts/                    # Scripts de generación de imágenes
├── src/
│   ├── actions/                # Astro Actions (formulario de contacto)
│   ├── assets/                 # Assets procesados por Astro (SVGs, íconos)
│   ├── components/
│   │   ├── layout/             # Navbar, Footer
│   │   ├── pages/              # Composición de cada página (Home, ServiceDetail, etc.)
│   │   ├── sections/           # Secciones reutilizables (Hero, About, Projects, etc.)
│   │   └── ui/                 # Componentes atómicos (Button, Card, Tabs, etc.)
│   ├── data/                   # Fuente de contenido: servicios, marcas, ubicaciones, nav, proyectos...
│   ├── i18n/                   # Diccionario de textos por idioma (content.ts)
│   ├── layouts/                # Layout.astro (head, scripts globales, analytics)
│   ├── pages/                  # Rutas (index, 404, /es/*, /en/*, robots.txt)
│   └── styles/                 # Estilos globales (Tailwind)
├── astro.config.mjs
├── biome.json
└── package.json
```

## Requisitos

- Node.js `>=22.12.0`
- pnpm

## Puesta en marcha

```sh
pnpm install
pnpm dev
```

El sitio queda disponible en `localhost:4321`.

### Variables de entorno

El formulario de contacto necesita estas variables (por ejemplo en un archivo `.env` local, o configuradas en Vercel):

| Variable               | Descripción                                    |
| :--------------------- | :---------------------------------------------- |
| `RESEND_API_KEY`       | API key de Resend para enviar los correos       |
| `TURNSTILE_SECRET_KEY` | Secret de Cloudflare Turnstile para verificar el token del formulario |

## Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                  | Acción                                             |
| :------------------------ | :------------------------------------------------- |
| `pnpm install`             | Instala las dependencias                           |
| `pnpm dev`                 | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build`               | Genera el sitio de producción en `./dist/`         |
| `pnpm preview`             | Previsualiza el build de producción localmente     |
| `pnpm typecheck`           | Corre `astro check` (tipos y errores de Astro)     |
| `pnpm lint`                | Linta `src/` con Biome                             |
| `pnpm lint:fix`            | Linta y corrige automáticamente                    |
| `pnpm lint:format`         | Formatea `src/` con Biome                          |
| `pnpm check`               | Lint + formato con Biome                           |
| `pnpm gen:image-sizes`     | Regenera `src/data/imageSizes.ts` a partir de las imágenes |
| `pnpm gen:critical-images` | Genera las imágenes críticas para preload          |

## Despliegue

El sitio se despliega en Vercel mediante `@astrojs/vercel`. Cada push a `main` en el remoto configurado dispara un nuevo deploy.

## Documentación de referencia

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Resend Docs](https://resend.com/docs)
- [Cloudflare Turnstile Docs](https://developers.cloudflare.com/turnstile/)
