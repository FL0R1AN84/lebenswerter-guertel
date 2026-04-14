# lebenswerter-guertel

![Website](docs/assets/01.webp)

A modern, single-page web application built with Vue 3 and TypeScript, serving as the online presence for the
*Lebenswerter Gürtel* initiative.

---

## Tech Stack

| Layer            | Technology                                                                 |
|------------------|----------------------------------------------------------------------------|
| UI Framework     | [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)            |
| Language         | TypeScript (strict, project references)                                    |
| Build Tool       | [Vite](https://vite.dev/)                                                  |
| Styling          | [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite` plugin |
| Routing          | [Vue Router](https://router.vuejs.org/) with HTML5 History mode            |
| State Management | [Pinia](https://pinia.vuejs.org/)                                          |
| Unit Tests       | [Vitest](https://vitest.dev/) + `@vue/test-utils` (jsdom environment)      |
| E2E Tests        | [Cypress](https://www.cypress.io/)                                         |

---

## Project Structure

```
src/
├── assets/          # Global CSS (base, variables, Tailwind entry)
├── components/      # Reusable Vue SFCs
│   ├── news/        # News & press-release components, organised by year
│   │   └── 2026/    # Components for the year 2026
│   └── __tests__/   # Vitest unit tests co-located with components
├── router/          # Vue Router configuration (HTML5 history, scroll-behaviour)
├── stores/          # Pinia stores
└── views/           # Route-level components (HomeView, ContactView, NewsView, …)

api/
└── contact.php      # Server-side contact form handler
```

### Routes

| Path           | Name      | Component               |
|----------------|-----------|-------------------------|
| `/`            | `home`    | `HomeView.vue`          |
| `/aktuelles`   | `news`    | `NewsView.vue`          |
| `/kontakt`     | `contact` | `ContactView.vue`       |
| `/datenschutz` | `privacy` | `PrivacyPolicyView.vue` |

---

## Aktuelles (News & Press Releases)

### Overview

The **Aktuelles** page (`/aktuelles`) displays current news and press releases from the IG Lebenswerter Gürtel
initiative. Each post is a standalone Vue component that is registered in `NewsView`.

### Structure

```
src/
├── views/
│   └── NewsView.vue                  # Route-level component for /aktuelles
└── components/
    └── news/
        └── 2026/                     # Posts for the year 2026
            └── IGGruendung.vue       # Press release: founding of the IG
```

New years are added as separate subfolders (`2026/`, `2027/`, …) so that posts remain sorted by year and are easy
to find.

### Adding a new post

**1. Create the component**

Add a new file in the appropriate year folder:

```
src/components/news/2026/MyNewPost.vue
```

Minimal template to get started:

```vue

<template>
  <article class="news-card shadow-md dark:shadow-md dark:shadow-neutral-800/50">
    <header class="news-card__header">
      <span class="news-card__date">
        <time datetime="2026-MM-DD">DD. Month 2026</time>
      </span>
      <span class="news-card__tag">Press Release</span>
    </header>
    <h2 class="news-card__title">Post title</h2>
    <div class="news-card__body">
      <p>Content …</p>
    </div>
  </article>
</template>
```

**2. Register in `NewsView.vue`**

```vue

<script lang="ts" setup>
  import HeaderNavigation from '@/components/HeaderNavigation.vue'
  import IGGruendung from '@/components/news/2026/IGGruendung.vue'
  import MyNewPost from '@/components/news/2026/MyNewPost.vue'  // new
</script>

<template>
  …
  <section class="news-year-group">
    <h2 class="news-year-heading">2026</h2>
    <MyNewPost/>     <!-- new – most recent post first -->
    <IGGruendung/>
  </section>
  …
</template>
```

**3. Adding a new year**

Create a new folder (`src/components/news/2027/`) and add a new `<section class="news-year-group">` above the
older years in `NewsView`:

```vue
<!-- 2027 -->
<section class="news-year-group">
  <h2 class="news-year-heading">2027</h2>
  <NewPost2027/>
</section>

<!-- 2026 -->
<section class="news-year-group">
  …
</section>
```

### Existing posts

| Year | Component         | Content                                                 |
|------|-------------------|---------------------------------------------------------|
| 2026 | `IGGruendung.vue` | Press release: founding of the „IG Lebenswerter Gürtel" |

---

## Development

**Requirements:** Node.js `^20.19.0` or `>=22.12.0`

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Type-check + production build
npm run build

# Preview production build (http://localhost:4173)
npm run preview
```

### Vite Configuration

The build is configured in `vite.config.ts` with the following plugins:

- `@tailwindcss/vite` — first-class Tailwind CSS v4 integration (no PostCSS config required)
- `@vitejs/plugin-vue` — `.vue` SFC support
- `@vitejs/plugin-vue-jsx` — JSX/TSX support
- `vite-plugin-vue-devtools` — Vue DevTools overlay in development

Path alias `@` is resolved to `src/` for clean imports across the project.

### TypeScript Configuration

The project uses TypeScript [project references](https://www.typescriptlang.org/docs/handbook/project-references.html)
with three separate `tsconfig` files:

- `tsconfig.app.json` — application source (`src/`)
- `tsconfig.node.json` — Vite/tooling config files (based on `@tsconfig/node24`)
- `tsconfig.vitest.json` — Vitest-specific overrides

Type-checking is performed via `vue-tsc --build` and runs as part of every `npm run build`.

---

## Testing

### Unit Tests (Vitest)

```bash
npm run test:unit
```

Tests run inside a **jsdom** environment. The Vitest config (`vitest.config.ts`) merges the Vite config so that the
same plugins and path aliases are available during testing.

### End-to-End Tests (Cypress)

```bash
# Headless run against preview server
npm run test:e2e

# Interactive mode against dev server
npm run test:e2e:dev
```

`start-server-and-test` spins up the server on port `4173` before launching Cypress and tears it down afterwards.
Spec files live under `cypress/e2e/` and match `**/*.{cy,spec}.{js,jsx,ts,tsx}`.

---

## Dependency Management

This project uses [Renovate](https://docs.renovatebot.com/) to keep dependencies up to date automatically. Renovate
targets the `develop` branch and opens pull requests for all dependency updates — major, minor, and patch — with
automerge enabled.

Before any pull request can be automerged, the following GitHub Actions workflows run automatically:

- **Unit Tests** (`vitest.yml`): Runs all Vitest unit tests on every pull request targeting `main` or `develop`.
- **Build** (`build.yml`): Installs dependencies and builds the project on every pull request targeting `main` or
  `develop`.

This guarantees that no dependency update is merged unless all tests pass and the project builds successfully.

