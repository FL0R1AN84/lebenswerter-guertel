# AGENTS.md — AI Agent Guide for lebenswerter-guertel

A modern Vue 3 + TypeScript SPA for IG Lebenswerter Gürtel, a citizens' initiative advocating for Tempo 30 on Cologne's
Gürtel.

## Project at a Glance

- **Frontend:** Vue 3 (Composition API, `<script setup>`) + TypeScript (strict)
- **Build & Dev:** Vite with Tailwind CSS v4 (@tailwindcss/vite), Vue Router (HTML5), Pinia
- **Backend:** PHP contact handler (`/api/contact.php`) using Dotenv for email config
- **Tests:** Vitest (unit, jsdom) + Cypress (e2e)
- **Locale:** German (language/content/UX)

## Architecture & Data Flow

### Core App Structure

```
src/
├── views/              # Route-level components (5 routes defined in router/index.ts)
├── components/         # Reusable Vue SFCs
│   ├── news/2026/      # Year-organized news posts (IGGruendung, KlageKSTA, etc.)
│   ├── icons/          # SVG icon components
│   └── __tests__/      # Vitest specs co-located
├── router/index.ts     # Vue Router config (scroll behavior with header offset)
├── stores/             # Pinia (currently empty; reserve for shared state)
└── assets/             # Global CSS (variables.css, base.css, main.css imports Tailwind)
```

**Path alias:** `@` resolves to `src/` (configured in `vite.config.ts`). Use `@/components/...` for all cross-directory
imports.

### Routes & Views

| Path           | Component               | Notes                                       |
|----------------|-------------------------|---------------------------------------------|
| `/`            | `HomeView.vue`          | Hero, 5 reasons for Tempo 30, donation CTA  |
| `/aktuelles`   | `NewsView.vue`          | Lists news posts by year (imported in view) |
| `/kontakt`     | `ContactView.vue`       | Contact form + FooterNav                    |
| `/datenschutz` | `PrivacyPolicyView.vue` | Privacy policy                              |
| `/antrag`      | `AntragView.vue`        | Application form page                       |

**Key Pattern:** Router has custom `scrollBehavior` that respects `<header>` height for hash navigation.

### Contact Form Flow

**Frontend → Backend:**

1. `ContactForm.vue` validates locally (name, email format, message length ≥10 chars)
2. On submit: POST JSON to `/api/contact.php` with `{name, email, phone?, message}`
3. Backend (`api/contact.php`):
    - Loads env vars: `CONTACT_EMAIL` (destination), `FROM_EMAIL` (from header)
    - Sanitizes input with `strip_tags()`
    - Sends via PHP `mail()` function
    - Returns JSON response (`{"message": "..."}`) with HTTP status

**Testing Pattern:** ContactForm.spec.ts mocks fetch with Vitest, tests validation + async submission states.

## Design System & Styling

### Colors (CSS Variables)

```css
--color-blue: #009ee3 /* Primary */
--color-green: #74b828 /* Accent */
--color-pink: #d8127e /* Highlight/Error */
--color-dark: #181818

/* Dark mode */
```

### Tailwind + Scoped CSS Pattern

- `main.css` imports Tailwind via `@import "tailwindcss"`
- Components use **scoped `<style>`** for component-specific classes (e.g., `.contact-form`, `.home-section`)
- Tailwind utilities + CSS custom properties combined (e.g., `text-(--color-pink)`,
  `bg-linear-to-br from-(--color-blue)`)
- Dark mode support via Tailwind's `dark:` prefix

## TypeScript & Type Safety

- **Strict mode** enabled; project references in `tsconfig.json`
- Three configs: `tsconfig.app.json` (src/), `tsconfig.node.json` (tooling), `tsconfig.vitest.json` (test overrides)
- Type-checking via `vue-tsc --build` (part of `npm run build`)
- Vue 3 `<script setup>` with explicit type annotations (see `ContactForm.vue` interfaces)

## Testing Conventions

### Unit Tests (Vitest)

- Location: `src/components/__tests__/*.spec.ts` (co-located)
- Environment: jsdom
- Pattern: Mount component, use helpers (`fillField`, `submitForm`), assert DOM
- Mocking: `vi.stubGlobal('fetch', ...)` for async calls
- Timers: `vi.useFakeTimers()` for testing delays (success/error message hiding)

Example (ContactForm.spec.ts):

```typescript
const fillField = async (wrapper, id: string, value: string) => {
    await wrapper.find(`#${id}`).setValue(value)
}
const submitForm = async (wrapper) => {
    await wrapper.find('form').trigger('submit')
}
```

### E2E Tests (Cypress)

- Location: `cypress/e2e/*.cy.ts`
- Pattern: Full browser test against preview server (port 4173)
- Dev mode: `npm run test:e2e:dev` spins up Vite on 4173, opens Cypress interactive UI

## Critical Workflows

### Local Development

```bash
npm install                    # Install deps (Node ^20.19.0 or >=22.12.0)
npm run dev                   # Vite dev server @ localhost:5173
npm run build                 # Type-check + vite build (dist/)
npm run preview               # Preview built dist/ @ localhost:4173
```

### Testing

```bash
npm run test:unit             # Run Vitest specs
npm run test:e2e              # Headless Cypress against preview build
npm run test:e2e:dev          # Interactive Cypress against dev server
```

### Vite Plugins

Active plugins in `vite.config.ts` (order matters):

- `@tailwindcss/vite` — Tailwind CSS v4, no PostCSS config required
- `@vitejs/plugin-vue` — `.vue` SFC support
- `@vitejs/plugin-vue-jsx` — JSX/TSX support
- `vite-plugin-vue-devtools` — Vue DevTools overlay (dev only)

### Code Quality

```bash
npm run lint                  # ESLint auto-fix (.ts, .vue, .tsx)
npm run format                # Prettier write --experimental-cli (src/ only)
npm run type-check            # vue-tsc --build (called in build)
```

## Project-Specific Conventions

### News/Aktuelles Management

**Problem:** Keep news chronological and findable.

**Pattern:** Year-based folder structure under `src/components/news/`

- Each year gets a subfolder: `news/2026/`, `news/2027/`, etc.
- Each post is a `.vue` component (e.g., `IGGruendung.vue`)
- `NewsView.vue` imports and registers posts manually, ordered newest first per year-group
- News card template (from README):
  ```vue
  <article class="news-card shadow-md dark:shadow-md dark:shadow-neutral-800/50">
    <header class="news-card__header">
      <span class="news-card__date"><time>...</time></span>
      <span class="news-card__tag">Press Release</span>
    </header>
    <h2 class="news-card__title">...</h2>
    <div class="news-card__body"><p>...</p></div>
  </article>
  ```

**Adding a post:** Create `.vue` in year folder, import in `NewsView.vue`, add to appropriate
`<section class="news-year-group">`.

### SEO & Head Management

**Tool:** `@unhead/vue` (imported in `main.ts`)

**Pattern:** Use `useHead()` in each view to set:

- `title`, `meta` (description, keywords, og:*, twitter:*)
- Locale: `og:locale: 'de_DE'`

Example (HomeView.vue):

```typescript
useHead({
    title: 'IG Lebenswerter Gürtel – Tempo 30 für den Kölner Gürtel',
    meta: [{name: 'description', content: '...'}, ...]
})
```

### Form Validation & Accessibility

**Pattern:** Client-side validation + detailed German error messages

- `aria-invalid` and `aria-describedby` on form fields
- Error messages in German, contextual (e.g., "Die E-Mail-Adresse scheint ungültig zu sein…")
- Validation functions return `boolean`, populate reactive error object
- Success/error alerts: 5-second timeout auto-dismiss

See `ContactForm.vue` for canonical example.

### German Locale

- All user-facing strings in German (labels, errors, content)
- Email templates in PHP also German
- Date formats: "DD. Month YYYY" (e.g., "12. Juni 2026")
- Use `<time datetime="YYYY-MM-DD">` for semantic HTML

## Environment & Deployment

### Environment Variables

Backend (PHP) needs:

- `CONTACT_EMAIL` — destination email
- `FROM_EMAIL` — sender email

Loaded via `Dotenv\Dotenv` in `api/contact.php` (vendor/autoload required).

### Build & Deployment

- **Output:** Vite produces `dist/` with index.html entry
- **Base URL:** Configured as `/` in `vite.config.ts`
- **API endpoint:** Relative path `/api/contact.php`
- **Hosting:** Static site + PHP backend (shared host setup typical)

### Dependency Management & CI

- **Renovate** (`renovate.json`) targets the `develop` branch and opens PRs for all dependency updates with automerge
  enabled.
- **GitHub Actions gate PRs:** `vitest.yml` (runs Vitest unit tests) and `build.yml` (installs deps + builds) must pass
  before automerge. No dependency update merges unless tests pass and the build succeeds.

## Key Dependencies & Versions

See `package.json` for current versions:

- `vue@3.5.33`, `vue-router@5.0.6`, `pinia@3.0.4`
- `vite@8.1.5`, `tailwindcss@4.3.3`, `@tailwindcss/vite@4.3.3`
- `@unhead/vue@3.2.3` (SEO/head management)
- `vitest@4.1.10`, `cypress@15.19.0`
- `typescript@6.0.3`, `vue-tsc@3.3.8` (type-checking)

## Common Tasks for Agents

1. **Add a news post:** Create `.vue` in `src/components/news/YYYY/`, register in `NewsView.vue`
2. **Add a route:** Define in `src/router/index.ts`, create view component, add SEO metadata with `useHead`
3. **Style a component:** Use Tailwind + scoped CSS, reference color variables via CSS custom properties
4. **Fix test:** Update `vitest.config.ts` if needed (jsdom, plugin config); ensure mocks match expected API
5. **Type safety:** Run `npm run type-check` before commit; strict mode catches many errors
6. **Language:** Keep all strings in German; if uncertain, check existing components

