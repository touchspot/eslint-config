# Repository Guidelines

## Project Structure & Module Organization

- Root `packages/eslint-config` publishes the ESLint preset. Source lives in `src/` with addons in `src/addons/` and rule groups in `src/rulesets/`; keep public entrypoints in `src/config.ts` and `src/env.ts`.
- Build artifacts land in `dist/` after `turbo run build --filter=@touchspot/eslint-config`; never edit generated files.
- Tests reside in `test/` with snapshot suites under `test/snapshots/` and shared helpers in `test/helpers.ts`.
- `playgrounds/next` and `playgrounds/node` host minimal consumer apps for manual verification of rule behavior.

## Build, Test, and Development Commands

- `pnpm install` – bootstrap workspace dependencies (Node 22.x, pnpm 10.20.0).
- `turbo run dev --filter=@touchspot/eslint-config` – TypeScript rebuild on file changes while iterating locally.
- `turbo run build --filter=@touchspot/eslint-config` – emit compiled config to `dist/`.
- `turbo run test --filter=@touchspot/eslint-config` – run Vitest with coverage in `coverage/`; append `-- --update` to refresh snapshots.
- `turbo run check` – aggregate formatting, lint, and type checks across the workspace.

## Coding Style & Naming Conventions

- TypeScript uses 2-space indentation and strict compiler options; prefer named exports and keep imports sorted as enforced by `eslint-plugin-perfectionist`.
- File names in `src/rulesets/` follow kebab-case (e.g., `functional.ts`), while shared modules stay singular (`config.ts`, `env.ts`).
- Format with `turbo run check:format` / `turbo run fix:format`; apply ESLint fixes via `turbo run fix:lint --filter=@touchspot/eslint-config`. Commit only clean runs—CI revalidates these tasks.

## Testing Guidelines

- Place specs in `test/snapshots/*.test.ts`, mirroring the rule or addon name. Share factories through `test/helpers.ts`.
- Use Vitest snapshot assertions to lock expected configs; review `coverage/` reports and keep statement coverage above 90%.
- When snapshots change intentionally, explain the delta in the PR and rerun tests on the Playground apps if behavior is user-facing.

## Commit & Pull Request Guidelines

- Follow Conventional Commits (`feat`, `fix`, `chore`) with scopes for specific rule groups (`feat(scope): …`). Mark breaking changes with `!`, consistent with existing history.
- PRs should outline lint behavior changes, list affected downstream projects, and link issues or release-please tasks. Attach before/after lint output or Playground repro steps whenever possible.
