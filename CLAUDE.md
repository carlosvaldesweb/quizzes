# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server (access via https://webapp.quizzes.test)
npm run build        # Build for production
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm run typecheck    # TypeScript type checking
npx vitest           # Run all tests
npx vitest --project unit   # Run unit tests only
npx vitest --project nuxt   # Run Nuxt environment tests only
npx vitest --project e2e    # Run e2e tests only
```

## Tech Stack

- **Nuxt 4** with Vue 3 and strict TypeScript
- **Client-side only** (`ssr: true`) - SPA mode
- **Nuxt UI v4** for components (not v3)
- **Tailwind CSS** for styling
- **Zod** for schema validation
- **nuxt-auth-sanctum** for Laravel Sanctum authentication

## Architecture

### Directory Structure (Nuxt 4)

- `app/` - Main application code (components, composables, pages, layouts)
- `server/` - Server engine for SSR and API routes
- `public/` - Static assets

### Key Composables

- `useSanctumFetch()` / `useLazySanctumFetch()` - Use instead of `useAsyncData` or `useFetch`
- `useSanctumAuth()` - Global auth state
- `useSanctumUser()` - Global user state
- `useSubmit()` - For user interaction-related requests (handles loading state, Laravel validation errors, rate limiting)

### Authentication

- Uses Laravel Sanctum via `nuxt-auth-sanctum` module
- Route protection via `sanctum:auth` middleware
- Test credentials: `test@example.com` / `password`

## Critical Rules

1. **API paths**: Never add `api/` or `v1/` prefixes to routes - the API domain is `https://api.quizzes.test/v1`
2. **UI Components**: Always check if Nuxt UI v4 has an existing component before building custom ones
3. **Colors**: Do not modify text/background colors - Nuxt UI handles light/dark mode automatically. Use Nuxt UI color variations.
4. **Access URL**: Always use `https://webapp.quizzes.test`, never `localhost:3000`
5. **Backend reference**: Consult `/quizzes-backend` workspace for backend details
6. **LLM documentation**: Reference `nuxt-llms.txt` and `nuxt-ui-llms.txt` for Nuxt/UI guidance
7. **MCP Servers**: Use nuxt-ui-remote and nuxt-remote MCP servers for Nuxt/UI guidance
8. **Typescript**: Use strict TypeScript
9. **Vue**: Use Vue 3 Composition API with `<script setup>` syntax
10. **Images**: Use Nuxt UI Image component for images
11. **Comments**: Comments in the code should be in English
12. **Pro Icon**: Use `i-lucide-sparkles` for pro icon
13. **UCard**: Use `UCard` component for cards

## Testing

Tests are organized in `test/` directory:

- `test/unit/` - Unit tests (node environment)
- `test/nuxt/` - Nuxt environment tests
- `test/e2e/` - End-to-end tests

## Commit Convention

Format: `type(scope): subject`

Types: `feat`, `fix`, `refactor`, `style`, `docs`, `chore`

Scopes: `quizzes`, `sessions`, `participants`, `questions`, `practices`, `ui`, `config`, `auth`

## Permissions and Behavior

- You have full permission to read any file in the project to understand the context.
- It is not necessary to ask for permission to read configuration files, Laravel models, or Nuxt components.
