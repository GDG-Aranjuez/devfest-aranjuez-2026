# FresON Fest 2026

[![CI](https://github.com/GDG-Aranjuez/devfest-aranjuez-2026/actions/workflows/ci.yaml/badge.svg)](https://github.com/GDG-Aranjuez/devfest-aranjuez-2026/actions/workflows/ci.yaml)
[![Deploy](https://github.com/GDG-Aranjuez/devfest-aranjuez-2026/actions/workflows/deploy.yaml/badge.svg)](https://github.com/GDG-Aranjuez/devfest-aranjuez-2026/actions/workflows/deploy.yaml)
[![License: MIT](https://img.shields.io/github/license/GDG-Aranjuez/devfest-aranjuez-2026)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

Official website for **FresON Fest 2026**, organized by **GDG Aranjuez** — October 24, 2026 in Aranjuez, Spain.

**Live site:** [gdg-aranjuez.github.io/devfest-aranjuez-2026](https://gdg-aranjuez.github.io/devfest-aranjuez-2026/)

**Repository:** [github.com/GDG-Aranjuez/devfest-aranjuez-2026](https://github.com/GDG-Aranjuez/devfest-aranjuez-2026)

> The GitHub repository slug still uses `devfest-aranjuez-2026` for deploy URLs. Branding in the site and docs is **FresON Fest**.

## Stack

- [Astro](https://astro.build/) 7 — static site generator
- [Tailwind CSS](https://tailwindcss.com/) 4 — styling
- [GitHub Pages](https://pages.github.com/) — hosting (deployed from `main`)

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) **22.12.0** or newer
- [pnpm](https://pnpm.io/) **9**

### Setup

```sh
git clone https://github.com/GDG-Aranjuez/devfest-aranjuez-2026.git
cd devfest-aranjuez-2026
pnpm install
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

## Commands

| Command        | Description                           |
| -------------- | ------------------------------------- |
| `pnpm dev`     | Start the development server          |
| `pnpm build`   | Build the production site to `dist/`  |
| `pnpm preview` | Preview the production build locally  |
| `pnpm lint`    | Lint `.astro`, `.ts`, and `.js` files |
| `pnpm format`  | Check formatting with Prettier        |

## Project structure

```
src/
├── components/
│   ├── ui/           # Reusable primitives (Container, Section)
│   ├── layout/       # Header, Footer, navigation
│   ├── home/         # Home page blocks
│   └── shared/       # Cross-page blocks
├── data/             # Site content and configuration
├── layouts/          # BaseLayout.astro
├── pages/            # Routes
├── styles/           # globals.css, variables.css, typography.css
├── types/
└── utils/            # Pure functions (nav, path)
```

Content lives in `src/data/`. See [AGENTS.md](./AGENTS.md) for layout and responsive conventions.

## Design system

Tokens and UI conventions (colors, type, buttons, spacing) live in [docs/design-system.md](./docs/design-system.md). Prefer semantic design tokens over raw Tailwind color/spacing scales when building components.

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request.

- [Open an issue](https://github.com/GDG-Aranjuez/devfest-aranjuez-2026/issues)
- [Code of Conduct](./CODE_OF_CONDUCT.md)

## Contact

- **Email:** [gdgaranjuez@gmail.com](mailto:gdgaranjuez@gmail.com)
- **LinkedIn:** [GDG Aranjuez](https://www.linkedin.com/company/gdg-aranjuez)
- **X:** [@gdgaranjuez](https://twitter.com/gdgaranjuez)
