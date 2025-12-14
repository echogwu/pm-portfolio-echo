# Project Structure

This repo is a **Next.js (App Router) + TypeScript + Tailwind v4** portfolio site.

## Quick map

```text
/
  app/                      # Next.js App Router routes + global styles
    layout.tsx              # Root layout + metadata + analytics
    page.tsx                # Home route (/)
    globals.css             # Tailwind + design tokens (CSS variables)
    projects/               # Projects index + per-project case study routes
      page.tsx              # /projects
      <project-slug>/page.tsx
    work-samples/page.tsx   # /work-samples

  components/               # Reusable React components (mostly client components)
    home-content.tsx        # Home page content sections
    projects-timeline.tsx   # /projects timeline cards (“Career Journey”)
    route-map.tsx           # Legacy/experimental journey map (currently unused)
    project-detail-layout.tsx # Standard project detail layout (hero + guided rows)
    preserve-scroll.tsx     # Scroll position preservation helper (client)
    scroll-to-top.tsx       # Scroll-to-top helper (client)
    back-button.tsx         # Back navigation UI
    theme-provider.tsx      # `next-themes` provider (available for future use)

  lib/
    utils.ts                # `cn()` className helper (clsx + tailwind-merge)

  public/                   # Static assets served at /
    *.png/*.jpg/*.gif/*.svg # Logos, screenshots, icons, etc.

  styles/
    globals.css             # Legacy/alternate global styles (currently unused by default)

  next.config.mjs           # Next config (note: build errors are currently ignored)
  tsconfig.json             # TS config + path alias (@/*)
  postcss.config.mjs        # Tailwind v4 PostCSS plugin
  components.json           # shadcn/ui config + path aliases
  package.json              # Scripts + dependencies (pnpm lockfile in repo)
```

## Routing conventions (App Router)

- **Routes** are folders under `app/` with a `page.tsx`.
  - `app/page.tsx` → `/`
  - `app/projects/page.tsx` → `/projects`
  - `app/projects/<slug>/page.tsx` → `/projects/<slug>`
  - `app/work-samples/page.tsx` → `/work-samples`
- **Metadata** can be exported per-route (`export const metadata = { ... }`).
- **Global layout** is `app/layout.tsx`.

## Components and client/server boundaries

- Files that use React hooks or browser APIs should start with **`"use client"`**.
- Most shared UI lives in `components/`.
- `components/theme-provider.tsx` wraps `next-themes` and is ready if/when you wire up a theme toggle.

## Styling and design tokens

- Primary global stylesheet is `app/globals.css`.
  - Tailwind v4 is imported via `@import "tailwindcss";`
  - Design tokens are defined as CSS variables under `:root` / `.dark`
- `styles/globals.css` exists but is **not** the default entrypoint (keep it only if you still need it).

## Path aliases

`tsconfig.json` defines:

- `@/*` → `./*`

`components.json` (shadcn) additionally declares aliases such as:

- `@/components`
- `@/lib/utils`
- `@/components/ui` (not currently present; add later if you adopt shadcn components)

## Adding a new project page (case study)

1. Create a folder under `app/projects/`:
   - Example: `app/projects/my-new-project/page.tsx`
2. Link to it from wherever you want (commonly the Projects route map or the home featured projects section).
3. Add any required images to `public/` and reference them by absolute path (`/my-image.png`).

## Project detail page layout (standard)

All case studies under `app/projects/*/page.tsx` should use the shared `ProjectDetailLayout` component:

- **Component**: `components/project-detail-layout.tsx`
- **Goal**: a clean, editorial reading flow guided by **spacing + thin rules**, not heavy cards/boxes.

### Required structure (must match)

1. **Header band (hero)**:
   - Top-left link: “← Back to projects”
   - Two columns (equal-ish):
     - Left: title, 1–2 line subline, tag chips
     - Right: hero image (rounded, fixed aspect, `object-cover`)
   - Then a full-width thin rule: `border-t border-neutral-200`
2. **Row 1**: **Challenge | Role**
   - Two equal columns
   - Subtle tint for the whole row: `bg-neutral-50/50`
   - On `md+`, add a vertical divider between columns: `md:border-l md:border-neutral-200`
   - End with a full-width thin rule
3. **Row 2**: **Approach & Decisions** (primary focus)
   - Full-width band with heading + italic throughline
   - Two equal internal columns
   - Each column has a **left spine line** (thin vertical rule) to guide the eye
   - Decision blocks are narrative (title → 1 sentence → optional bullets); no cards/boxes
   - End with a full-width thin rule
4. **Row 3**: **Outcomes | Learnings**
   - Two equal columns with the same `md+` vertical divider treatment as Row 1

### Content conventions

- Prefer **bullets and short paragraphs**; keep sections scannable.
- Keep “Approach & Decisions” blocks structured as:
  - **Bold title**
  - **1 sentence explanation**
  - Optional: **2–3 short bullets**
- Avoid adding a “mega wrapper” card around all sections; each band stands alone.

## Project detail page typography (standard)

`ProjectDetailLayout` already applies the core type scale below. If you add custom content, use these **exact Tailwind classes** so every project detail page stays consistent.

### Font family

- **Default**: `font-sans` (configured to **Geist** and loaded via `next/font` in `app/layout.tsx`)
  - `app/layout.tsx` registers Geist as CSS variables (`--font-sans` / `--font-mono`) and applies them on `<body>`
  - `app/globals.css` uses those variables so Tailwind’s `font-sans` renders Geist consistently in dev + static export builds

### Type scale (Tailwind defaults)

- **Page title (`h1`)**: `text-4xl lg:text-5xl font-bold tracking-tight text-balance`
  - `text-4xl` = 2.25rem (36px), `text-5xl` = 3rem (48px)
- **Section heading (`h2`)**: `text-3xl font-bold mb-4 tracking-tight`
  - `text-3xl` = 1.875rem (30px)
- **Subheading (`h3`)**: `text-xl font-semibold mb-2` (or `mb-3` when spacing needs more air)
  - `text-xl` = 1.25rem (20px)
- **Card title (`h3` inside cards)**: `text-lg font-semibold mb-2`
  - `text-lg` = 1.125rem (18px)
- **Body paragraph**: `text-foreground/90 leading-relaxed`
  - default text size is `text-base` (1rem / 16px) unless overridden
- **Muted descriptor line**: `text-muted-foreground italic`
  - used for role/position taglines and “Approach” sequences
- **Lead paragraph (under `h1`)**: `text-xl text-muted-foreground leading-relaxed`

### Lists

- **Bulleted list**: `list-disc pl-6 space-y-2 text-foreground/90`

## Static assets

- Put images and icons in `public/` and reference them like `src="/profile-avatar.png"`.
- `next.config.mjs` currently sets `images.unoptimized = true`, so `<img>` works fine without Next Image optimization.

## Static export output (`out/`)

- `next.config.mjs` sets `output: "export"`, so `pnpm build` emits a fully static site to `out/`.
- To preview locally, serve that folder (example: `pnpm dlx serve out`).
- If you host the site under a subpath, set `NEXT_PUBLIC_BASE_PATH` at build time (it maps to `basePath` + `assetPrefix`).

## Notes / known rough edges

- `next.config.mjs` currently has `typescript.ignoreBuildErrors = true`. That’s convenient during rapid iteration but can hide real issues; consider turning it off once the codebase stabilizes.
- The repo includes a `lint` script, but lint tooling/config may be intentionally minimal right now; see `CONTRIBUTING.md` for recommendations.

## Changelog

- See `CHANGELOG.md` for user-facing changes.

