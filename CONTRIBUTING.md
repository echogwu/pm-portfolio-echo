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

## Build + start (prod-like)

```bash
pnpm build
pnpm start
```

## Lint

```bash
pnpm lint
```

Note: the `lint` script currently runs `eslint .`, but ESLint is not installed/configured in `package.json` yet. Either add ESLint, or treat linting as optional for now.

## Environment variables

- This project currently does **not** require env vars.
- If you introduce them later, use `env.example` as the template and copy it to `.env.local`.

## Project structure

See `PROJECT_STRUCTURE.md`.


