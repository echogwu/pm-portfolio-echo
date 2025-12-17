# Changelog

All notable changes to this project will be documented in this file.

This format is based on **Keep a Changelog**, and this project aims to follow **Semantic Versioning**.

## [Unreleased]

### Added

- Tags displayed on `/journey` cards (mirrors the tag pills on each project detail page).
- An IDEO project card on the `/journey` view.
- `public/mba.gif` hero asset for the MBA project page.
- Dishclosure artifacts on `/artifacts` with modal previews (images + PDFs), external artifact links (Figma/GitHub/PDF), and backlinks to the project.
- Gainbridge artifacts on `/artifacts` (PDF + diagram previews).
- IDEO artifacts on `/artifacts` (Figma board + slides).
- MBA artifacts on `/artifacts` (Google Sheets + slides + 5-year planning PDF).
- Project tabs on `/artifacts` to switch deliverables by project.

### Changed

- `/journey` cards now use a two-column layout with a dedicated tags column.
- `/journey` cards now use logo badges, subtle brand-tinted fills, and lift shadows.
- Added more top spacing between the nav bar and the journey section.
- Updated the MBA project page and timeline card to “MBA — Designing Decision Systems”.
- Redesigned all project detail pages with an editorial “hero + 3 guided rows” layout using thin rules, subtle tints, and spine-guided decision flows.
- Artifact cards now use a thicker framed preview box to improve contrast.
- Documentation updates: corrected “live site” URL (custom domain), clarified static export preview flow, and refreshed project structure notes.
- GitHub Pages workflow: fixed pnpm-not-found failures during build.

## [0.1.0] - 2025-12-13

### Added

- Baseline version synced from v0/Vercel deployment
- Initial portfolio site scaffold (Next.js App Router + TypeScript + Tailwind v4)
- Project/case-study routes under `app/journey/*`
- Reusable UI components under `components/`

