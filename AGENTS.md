# AGENTS.md

Project-wide guidance for AI coding agents and human contributors. This file is the canonical source of conventions for `gorzelinski.com`.

## Table of contents

- [Project overview](#project-overview)
- [TypeScript](#typescript)
- [React + Next.js (App Router)](#react--nextjs-app-router)
- [Vitest (unit & component tests)](#vitest-unit--component-tests)
- [Playwright (E2E tests)](#playwright-e2e-tests)

---

## Project overview

Personal website, blog, and portfolio. Bilingual (English + Polish), MDX-driven content, atomic design system.

### Stack

TypeScript • Next.js 15 (App Router) • React 19 • Panda CSS • MDX (`next-mdx-remote`) • Vitest • Playwright • Vercel.

Path alias: `@/*` → repo root (see `tsconfig.json`). Formatting: `.prettierrc.json` (single quotes, no semis, no trailing commas, 2-space). Lint: flat config in `eslint.config.js`.

### Folder map (source of truth)

- `app/[lang]/` — App Router, language-segmented routes (`en`, `pl`). Contains `blog/`, `portfolio/`, `about/`, `uses/`, `api/og`, `api/twitter`, `feed.xml`, `sitemap.ts`, `[...not-found]` (i18n 404 hack).
- `content/` — MDX content: `blog/<slug>/index.mdx` + `index.pl.mdx`, same for `portfolio/`, plus `uses/`.
- `design-system/` — atomic UI, re-exported from `design-system/index.tsx`:
  - `elements/` — atomic, non-composable primitives (e.g. `button`, `heading`, `paragraph`).
  - `components/` — composed from elements/icons/other components (e.g. `socials`, `toc`, `post`).
  - `sections/` — composed of elements/components/icons (e.g. `footer`, `newsletter`, `top-bar`).
  - `icons/` — icon components.
  - `utils/` — shared design-system utilities.
- `hooks/` — React hooks (barrel: `hooks/index.tsx`).
- `lib/` — pure JS/TS helpers, client-safe (barrel: `lib/index.ts`).
- `scripts/` — Node-only server-side helpers (e.g. `mdx`, `dictionaries`).
- `constants/` — global constants (`LINKS`, `SOCIALS`, `THEME`, …).
- `types/` — shared TypeScript types (barrel: `types/index.tsx`).
- `dictionaries/` — UI translations (en, pl).
- `theme/` — Panda CSS tokens and global styles.
- `e2e/` — Playwright tests. `__tests__/` folders colocated with code hold Vitest tests.
- `public/`, `assets/` — static assets / fonts.
- `mdx-components.tsx` — maps markdown + custom MDX components to React.
- `middleware.ts`, `i18n.config.ts` — locale routing.
- `panda.config.ts`, `postcss.config.cjs` — Panda CSS.
- `styled-system/` — Panda's generated output (do not edit).

### Composition rule

Layering is one-directional: `sections → components → elements/icons`. Never import upward (an element must not import a component).

### Common scripts

- `npm run dev` — local dev server
- `npm run build` / `npm start` — production build / run
- `npm run lint` — Next.js ESLint
- `npm test` / `npm run test:watch` / `npm run test:coverage` — Vitest
- `npm run e2e` / `npm run e2e:ui` — Playwright (run `npx playwright install` once)

---

## TypeScript

Applies to all `.ts`, `.tsx`, and `.mts` files.

### Style

- Functional, declarative, DRY; prefer early returns.
- Prefer `type` over `interface`; no `enum` — use `as const` maps.
- Use the `satisfies` operator for type-checked literals.
- Follow `.prettierrc.json` (single quotes, no semicolons, no trailing commas, 2 spaces).

### Naming

- `camelCase` for variables/functions, `UpperCamelCase` for components/classes/types.
- Boolean variables use auxiliary verbs: `isLoading`, `hasError`, `canEdit`.
- Event handlers are prefixed `handle…` (`handleClick`, `handleSubmit`).
- Avoid generic suffix nouns — `results`, not `resultsArray`.
- Files and folders: `kebab-case` (`design-system/components/search-bar`).
- `.ts` for pure logic with no React interaction (e.g. `lib/`, `constants/`, `scripts/`).
- `.tsx` for files in React-adjacent areas (`app/`, `design-system/`, `hooks/`, `types/`) — even if a specific file contains no JSX, match the rest of the feature/folder for consistency (e.g. `socials.helpers.tsx`, `socials.types.tsx`).

### File suffixes (colocated per feature)

| Suffix       | Purpose                    | Example                                             |
| ------------ | -------------------------- | --------------------------------------------------- |
| `.constants` | Module-scoped constants    | `socials.constants.tsx`                             |
| `.helpers`   | Module-scoped pure helpers | `socials.helpers.tsx`                               |
| `.types`     | Module-scoped types        | `socials.types.tsx`                                 |
| `.styles`    | Panda CSS recipes/styles   | `button.styles.tsx`                                 |
| `.pl.mdx`    | Polish content             | `index.pl.mdx` (English uses `index.mdx`, no `.en`) |

### Exports & barrels

- Favor named exports.
- Every folder has an `index.ts`/`index.tsx` barrel that re-exports its public surface.
- Barrel entries are **sorted alphabetically**. Use `export type` for type-only re-exports.

```ts
export { test, expect } from './page'
export type { SettingsPage } from './settings-page'
```

### Import order

Strict 4-group order, with **default imports before named imports** inside each group:

1. External **type** imports (npm packages)
2. Internal **type** imports (`@/types`, local `.types`, `@/styled-system/types`)
3. External **value** imports
4. Internal **value** imports (`@/constants`, `@/lib`, `@/hooks`, `@/scripts`, `@/design-system`, `@/styled-system`, relative)

Always use `import type` for type-only imports.

```ts
// ✅ Correct
import type { Metadata } from 'next'
import type { JSX } from 'react'
import type { PageProps, Theme } from '@/types'
import fs from 'fs/promises'
import { cookies } from 'next/headers'
import { LINKS } from '@/constants'
import { getDictionary } from '@/scripts'
```

```ts
// ❌ Wrong — mixed order, missing `import type`
import { cookies } from 'next/headers'
import { Metadata } from 'next'
import { PageProps } from '@/types'
```

### Inline `type` modifier

Combine only when **both** come from the same package:

```ts
// ✅
import { type NextRequest, NextResponse } from 'next/server'

// ❌ Metadata is from 'next', not 'next/headers'
import { type Metadata, cookies } from 'next/headers'
```

---

## React + Next.js (App Router)

Applies to code under `app/**`, `design-system/**/*.tsx`, `hooks/**/*.tsx`, `middleware.ts`, and `mdx-components.tsx`.

### Component architecture

- Default to **React Server Components**. Add `'use client'` only when you need state, effects, browser APIs, or event handlers.
- Use error boundaries and `Suspense` for async data.
- Optimize for Web Vitals — minimize client JS, lazy-load heavy widgets.
- Respect the one-directional composition rule from [Project overview](#composition-rule).

### Async runtime APIs (Next 15)

`cookies()`, `headers()`, `draftMode()`, `params`, and `searchParams` are all **async**:

```ts
const cookieStore = await cookies()
const headersList = await headers()
const { isEnabled } = await draftMode()

// In layout/page components:
const { lang } = await props.params
const searchParams = await props.searchParams
```

### Forms & state

- Use `useActionState` (not the deprecated `useFormState`).
- Use the enhanced `useFormStatus` (`data`, `method`, `action`) where applicable.
- Keep client state minimal. Reach for URL state (e.g. `nuqs`) before context.

### Styling

- Style with Panda CSS — colocate recipes in `*.styles.tsx`.
- Wire Panda recipes via `styled(...)` from `@/styled-system/jsx`:

```tsx
import NextLink from 'next/link'
import { styled } from '@/styled-system/jsx'
import { button } from './button.styles'

export const Button = styled('button', button)
export const ButtonLink = styled(NextLink, button)
```

- Types live in `@/styled-system/types` and belong in the internal-type-imports group (see [Import order](#import-order)).

### Internationalization

- All user-facing routes live under `app/[lang]/…`; always read `lang` from async `params`.
- UI strings come from `dictionaries/` via `getDictionary` (in `@/scripts`).
- Link helpers in `@/lib` (`localizePath`, `delocalizePath`, `isDefaultLocale`) handle the `en` default vs `pl` prefix.

### Component file layout

A feature folder (under `design-system/{elements,components,sections}`) typically contains:

```
search-bar/
  index.tsx              ← barrel
  search-bar.tsx         ← component
  search-bar.types.tsx   ← types
  search-bar.styles.tsx  ← Panda recipes
  search-bar.helpers.tsx ← optional pure helpers
  search-bar.constants.tsx ← optional constants
  __tests__/             ← Vitest tests
```

After adding/removing a public export, update the folder's `index.tsx` **and** the design-system root `design-system/index.tsx` (alphabetical order).

---

## Vitest (unit & component tests)

Applies to `**/__tests__/**`, `**/*.test.ts`, and `**/*.test.tsx`.

Config: `vitest.config.mts`, setup: `vitest.setup.ts`. React Testing Library + `@testing-library/jest-dom` matchers are preconfigured.

### Where tests live

Inside a `__tests__/` folder colocated with the code under test. Mirror the source filename:

```
design-system/components/socials/
  socials.tsx
  socials.helpers.tsx
  __tests__/
    socials.test.tsx
    socials.helpers.test.tsx
```

File naming: `*.test.ts` for pure logic (e.g. `lib/`), `*.test.tsx` when the test renders JSX.

### Commands

```bash
npm test                # single run
npm run test:watch      # watch mode
npm run test:coverage   # v8 coverage
```

### Conventions

- Inside `__tests__/` and `*.test.*` files, `react-hooks/rules-of-hooks` and `react-hooks/exhaustive-deps` are disabled (see `eslint.config.js`) — call hooks freely in tests.
- Prefer role/label queries (`getByRole`, `getByLabelText`) over `getByTestId`.
- Follow the same [import-order rules](#import-order) as production code (`import type` first, then values).

---

## Playwright (E2E tests)

Applies to `e2e/**/*.ts`.

Config: `playwright.config.ts`. Accessibility checks via `@axe-core/playwright`.

### Where tests live

All E2E tests live under `e2e/` and use the `.spec.ts` suffix (e.g. `e2e/navigation.spec.ts`, `e2e/accessibility.spec.ts`). Shared fixtures live in `e2e/fixtures/`.

`playwright.config.ts` runs across Chromium, Firefox, WebKit, Mobile Chrome, and Mobile Safari, and boots `npm run build && npm run start` as the web server.

### Commands

```bash
npx playwright install   # one-time, install browsers
npm run e2e              # headless run
npm run e2e:ui           # Playwright UI mode
```

### Conventions

- Import `test` and `expect` from project fixtures in `e2e/fixtures/` (not from `@playwright/test` directly) so shared setup is applied.
- Inside `e2e/**/*.ts`, `react-hooks/rules-of-hooks` and `react-hooks/exhaustive-deps` are disabled (see `eslint.config.js`).
- Prefer role/label locators (`getByRole`, `getByLabel`) over CSS selectors.
- Use `baseURL` from the config — write relative paths like `await page.goto('/blog/')`.
- For accessibility specs, run axe via `@axe-core/playwright` and assert zero violations.
- Follow the project's [import-order rules](#import-order) (`import type` first, then values).
