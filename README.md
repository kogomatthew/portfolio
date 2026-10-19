# Mathew Kogo - Portfolio

The personal portfolio site for **Mathew Kogo**, Cloud & DevOps Engineer. A fast, minimalist single-page site built with [Astro](https://astro.build/).

## Tech

- **Astro** - static-site generator, ships zero JS by default
- Dark-first design with a light-mode toggle (CSS custom properties)
- Self-hosted fonts via `@fontsource` (Lora, Inter)
- Deployed to [Netlify](https://www.netlify.com/)

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into ./dist
npm run preview  # preview the production build locally
```

### Prerequisites

- Node.js 22+

## Content

Site content lives as structured data in `src/data/`:

- `site.ts` - name, title, tagline, contact details, about
- `approach.ts` - "How I work" principles
- `experience.ts` - career timeline
- `projects.ts` - project write-ups
- `skills.ts` - engineering strengths and technical toolkit
- `credentials.ts` - certifications and education

Edit these files to update the site - no markup changes needed. The headshot (`public/images/mathew-kogo.jpg`) and resume (`public/mathew-kogo-resume.pdf`) live in `public/`.

## Deployment

Pushes to `master` trigger a GitHub Actions workflow that pings a Netlify build
webhook (`netlify_webhook` secret); Netlify builds with `npm run build` (see
`netlify.toml`) and publishes `dist/`.

Set the production URL in `astro.config.mjs` (`site`) and `public/robots.txt`.

## Author

**Mathew Kogo** - [LinkedIn](https://www.linkedin.com/in/mathew-kogo/)
