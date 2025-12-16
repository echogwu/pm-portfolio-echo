# Contributing / Local Development

## Prereqs

- **Node.js**: a recent LTS is recommended
- **pnpm**: this repo includes `pnpm-lock.yaml`, so pnpm is the intended package manager

If you don’t have pnpm:

```bash
npm i -g pnpm
```

## Changelog

- Keep `CHANGELOG.md` updated for any user-facing change.
- Add entries under **[Unreleased]** using Keep a Changelog headings (Added/Changed/Fixed/Removed).
- When cutting a release, move entries from **[Unreleased]** into a dated version section (e.g. `## [0.2.0] - YYYY-MM-DD`).

## Install

From the repo root:

```bash
pnpm install
```

## Run (dev)

```bash
pnpm dev
```

Then open `http://localhost:3000`.

## Build (static export)

```bash
pnpm build
```

## Preview the static export (prod-like)

After `pnpm build`, Next.js outputs a static site to `out/`. To preview it locally:

```bash
pnpm dlx serve out
```

## Lint

```bash
pnpm lint
```

Note: `pnpm lint` currently runs `eslint .`, but ESLint is not installed/configured in `package.json` yet, so this will fail in a fresh checkout.

If you want linting, either:

- Add ESLint tooling (recommended): install `eslint` + `eslint-config-next` and add an `.eslintrc` configuration, or switch the script to `next lint`.
- Treat linting as optional for now.

## Environment variables

- This project currently does **not** require env vars.
- If you introduce them later, use `env.example` as the template and copy it to `.env.local`.

## Project structure

See `PROJECT_STRUCTURE.md`.

## Project detail page consistency

When adding/editing case studies under `app/projects/*`, follow the **Project detail page layout (standard)** and **Project detail page typography (standard)** sections in `PROJECT_STRUCTURE.md`.

In practice:

- Use the shared layout component: `components/project-detail-layout.tsx`
- Keep content scannable (short paragraphs + bullets)
- Avoid “mega wrapper” cards; rely on whitespace + thin rules + vertical dividers

## Work samples (artifacts)

`/work-samples` is where we showcase concrete deliverables (strategy docs, ERDs, prototypes, legal PDFs, etc.).

### Adding a new artifact card

1. **Add assets to `public/`**
   - Images: `public/<name>.png` (or `.jpg/.webp`)
   - PDFs: `public/<name>.pdf`
2. **Wire the artifact into** `components/work-samples-grid.tsx`
   - Add a new entry to the exported `WORK_SAMPLES` array.
   - **Project grouping (tabs)**: set `projectLabel` (e.g. `"Dishclosure"`, `"Gainbridge"`). `/work-samples` groups artifacts by this label.
   - **Backlink**: set `projectHref` to the relevant project page.
   - **Thumbnail**: set `images: [{ src: "/your-preview.png", alt: "..." }]`
   - **Gallery** (optional): add multiple entries in `images[]`
   - **PDF preview** (optional): set `pdfSrc: "/your-doc.pdf"` and `artifactHref: "/your-doc.pdf"` (use `artifactLabel: "Open PDF"`).
   - **External artifact link** (optional): set `artifactHref` (+ `artifactLabel`) to a URL (Figma/GitHub/etc.)
3. **Verify static export**
   - Run `pnpm build` and confirm the artifact opens correctly in the modal.

### Notes

- Static assets must live in **`public/`** to be served at `/<filename>` (required for static export).
- Prefer exporting screenshots at **2x/3x** (retina) so modal previews don’t look blurry when enlarged.


