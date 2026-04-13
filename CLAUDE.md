# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Dental clinic website (Clínica Dental Liébana, Madrid) built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. Spanish-language site with a blog managed via Decap CMS (formerly Netlify CMS). Deployed on Vercel.

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build
- `npm run lint` — ESLint (next/core-web-vitals + typescript configs)
- Node >= 20.9.0 required (see `.nvmrc`)

## Architecture

**App Router (Next.js):** All pages under `src/app/` using the App Router pattern. Pages: home, blog, blog/[slug], clinica, contacto, equipo, promociones, testimonios, tratamientos.

**Blog system:** Markdown files in `content/blog/` with gray-matter frontmatter. `src/lib/blog.ts` reads and parses them at build time. Blog dates use Spanish format ("15 Nov 2024"). Blog post pages use client components (`BlogClient.tsx`, `BlogPostClient.tsx`) for interactivity.

**Decap CMS:** Admin panel at `/admin/` (static HTML + config.yml in `public/admin/`). Uses GitHub OAuth backend via API routes at `src/app/api/auth/` and `src/app/api/auth/callback/`. Requires `OAUTH_GITHUB_CLIENT_ID` and `OAUTH_GITHUB_CLIENT_SECRET` env vars. Repo: `oneclickflow/website_diego_v4`.

**Styling:** Tailwind CSS v4 with PostCSS. Light-mode only (dark mode forced to light in globals.css). Primary background: `#fffbf0`. Fonts: Geist Sans/Mono via next/font.

**Components:** `src/components/` contains section-level components (Hero, Services, Header, Footer, etc.) and `src/components/icons/` for SVG icon components. Animations use framer-motion via `src/components/animations/FadeIn.tsx`.

**Path alias:** `@/*` maps to `./src/*`.
