# Onur Eren Akgül — Portfolio

Personal portfolio site for [onureakgul.github.io](https://onureakgul.github.io/).

Built with **Angular 20**, **PrimeNG 20**, **Tailwind CSS v4**, and static prerendering (SSG) for GitHub Pages.

## Features

- Bilingual routes: English at `/...`, Turkish at `/tr/...`
- Path-based routing (no hash) with prerendered HTML for SEO and F5 deep-links
- CV-driven pages: Home, About, Experience, Skills, Projects, Links, Contact
- Contact form via **EmailJS** + PrimeNG Toast feedback
- Dark theme with Outfit / Manrope typography
- `robots.txt`, `sitemap.xml`, per-page meta tags and JSON-LD

## Stack

| Layer | Tech |
|-------|------|
| Framework | Angular 20 (standalone) |
| UI | PrimeNG 20 (Aura) + PrimeIcons |
| Styling | Tailwind CSS v4 + `tailwindcss-primeui` |
| Mail | `@emailjs/browser` |
| Hosting | GitHub Pages (`docs/`) |
| Rendering | `@angular/ssr` prerender / SSG |

## Requirements

- Node.js `^20.19` or `^22.12+` (recommended: Node 22 via `nvm use 22`)
- npm 10+

## Getting started

```bash
npm install
npm start
```

Open [http://localhost:4200/](http://localhost:4200/).

Language switcher in the header toggles between English (root) and Turkish (`/tr`) while keeping the current page.

## Production build (SSG)

```bash
npm run build
```

This command:

1. Prerenders all English (`/*`) and Turkish (`/tr/*`) routes
2. Writes static output to `docs/`
3. Creates `docs/404.html` (SPA fallback for unknown paths) and `docs/.nojekyll`

## Deploy

GitHub Pages serves the `/docs` folder from the `main` branch.

After a successful build, commit the updated `docs/` output and push to `main`.

## Project structure

```text
src/app/
  config/          # EmailJS keys
  data/            # CV content (en/tr) + UI copy
  layout/          # Shell / navigation
  pages/           # Route pages
  services/        # Language, SEO, Mail
public/
  assets/cv/       # Downloadable CVs (PDF)
  robots.txt
  sitemap.xml
scripts/
  github-pages-fallback.mjs
docs/              # Built static site for GitHub Pages
```

## EmailJS setup

Contact form credentials live in [`src/app/config/emailjs.config.ts`](src/app/config/emailjs.config.ts):

- `publicKey`
- `serviceId`
- `templateId`

Template variables expected by the app:

| Variable | Source |
|----------|--------|
| `title` | Subject field |
| `name` | Name field |
| `email` | Visitor email |
| `message` | Message field |
| `time` | Auto-generated timestamp |

## Useful scripts

```bash
npm start          # Dev server
npm run build      # SSG build → docs/
npm test           # Unit tests
```

## License

Private personal portfolio. All rights reserved.
