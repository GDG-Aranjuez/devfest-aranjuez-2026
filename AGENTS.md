## Project structure

```
src/
├── components/
│   ├── ui/           # Reusable primitives (Container, Section)
│   ├── layout/       # Site chrome (Header, Footer, nav)
│   ├── home/         # Home page blocks
│   └── shared/       # Cross-page blocks (ComingSoon only — no junk drawer)
├── data/             # Static site configuration
├── layouts/          # BaseLayout.astro
├── pages/
├── styles/           # globals.css, variables.css, typography.css
├── types/
└── utils/            # Pure functions (nav, path)
```

## Responsive layout

- **Layout breakpoint:** `lg` (1024px) for nav and hero. Footer uses `md` (768px).
- **Prefer** a single markup with responsive utilities (`flex-col lg:flex-row`, semantic classes in `styles/`).
- **Dual layout** (two DOM trees) only when structure differs radically — use Tailwind visibility classes directly (`md:hidden`, `hidden md:flex`).
- **Content** lives in `src/data/`; pure helpers in `src/utils/`.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
