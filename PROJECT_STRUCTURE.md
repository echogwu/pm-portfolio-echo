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
    route-map.tsx           # Interactive “Career Journey” route map (client)
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

## Static assets

- Put images and icons in `public/` and reference them like `src="/profile-avatar.png"`.
- `next.config.mjs` currently sets `images.unoptimized = true`, so `<img>` works fine without Next Image optimization.

## Notes / known rough edges

- `next.config.mjs` currently has `typescript.ignoreBuildErrors = true`. That’s convenient during rapid iteration but can hide real issues; consider turning it off once the codebase stabilizes.
- The repo includes a `lint` script, but lint tooling/config may be intentionally minimal right now; see `CONTRIBUTING.md` for recommendations.


