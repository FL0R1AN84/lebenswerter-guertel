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
├── components/      # Reusable Vue SFCs (HeaderNavigation, FooterNavigation, ContactForm, …)
│   └── __tests__/   # Vitest unit tests co-located with components
├── router/          # Vue Router configuration (HTML5 history, scroll-behaviour)
├── stores/          # Pinia stores
└── views/           # Route-level components (HomeView, ContactView, PrivacyPolicyView)

api/
└── contact.php      # Server-side contact form handler
```

### Routes

| Path           | Name      | Component               |
|----------------|-----------|-------------------------|
| `/`            | `home`    | `HomeView.vue`          |
| `/kontakt`     | `contact` | `ContactView.vue`       |
| `/datenschutz` | `privacy` | `PrivacyPolicyView.vue` |

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

