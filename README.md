# portfolio website - journey(dishclosure)

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/echogwus-projects/v0-portfolio-website-journey-dishclosure)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/Y9WrOeww46R)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Local development

### Prereqs

- **Node.js**: a recent LTS is recommended
- **pnpm**: this repo includes `pnpm-lock.yaml`, so pnpm is the intended package manager

Install dependencies:

```bash
pnpm install
```

Run the dev server:

```bash
pnpm dev
```

Build (static export):

```bash
pnpm build
```

Preview the static export locally (serves `out/`):

```bash
pnpm dlx serve out
```

Lint:

```bash
pnpm lint
```

Note: the `lint` script currently runs `eslint .`, but ESLint is not installed/configured in `package.json` yet. Either add ESLint, or treat linting as optional for now.

### Deploying under a subpath (basePath)

This site is configured for static export and supports hosting under a subpath via `NEXT_PUBLIC_BASE_PATH` (wired to `next.config.mjs` as `basePath` + `assetPrefix`).

Example (host at `/portfolio`):

```bash
NEXT_PUBLIC_BASE_PATH=/portfolio pnpm build
```

## Docs

- **Project structure**: see `PROJECT_STRUCTURE.md`
- **Changelog**: see `CHANGELOG.md`
- **Contributing**: see `CONTRIBUTING.md`

## Deployment

Your project is live at:

**[https://vercel.com/echogwus-projects/v0-portfolio-website-journey-dishclosure](https://vercel.com/echogwus-projects/v0-portfolio-website-journey-dishclosure)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/Y9WrOeww46R](https://v0.app/chat/Y9WrOeww46R)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository
