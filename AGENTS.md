# Repository Guidelines

## Project Structure & Module Organization

The core TypeScript sources for the published ESLint preset live in `src/`; `config.ts` assembles the base stack, while `rulesets/*.ts` and `addons/*.ts` group plugin-specific logic. Reusable entry points that consumers import sit in `lib/` and compile into `dist/`—never edit files under `dist/`, regenerate them with `pnpm build`. Fixture projects under `tests/*` (Next, React, TailwindCSS, TypeScript) exercise the config against real lint targets; each fixture carries its own `package.json` and `eslint.config.js`. Any third-party patches live in `patches/` and companion typing shims in `typings/`, so updates to dependencies should check those folders for adjustments.

## Build, Test, and Development Commands

- `pnpm install` to sync workspace dependencies defined in `pnpm-workspace.yaml`.
- `pnpm build` runs `tspc` to emit ESM artifacts into `dist/`.
- `pnpm check:lint`, `pnpm check:type`, and `pnpm check:format` lint, type-check, and verify formatting; `pnpm turbo run check` executes the grouped pipeline.
- `pnpm check:unused` (Knip) flags unused files and exports before publishing.
- `pnpm --filter tests/react test` (or `tests/next`, `tests/typescript`, etc.) runs ESLint inside that fixture; pair with `pnpm turbo run test` for the full matrix.
- `pnpm fix:format` and `pnpm fix:lint` apply auto-fixes; rerun `pnpm build` afterwards so `dist/` reflects source changes.

## Coding Style & Naming Conventions

Formatting is governed by `@touchspot/prettier-config`; rely on Prettier instead of hand-tuning whitespace. Source files use TypeScript with ES modules; export rule collections as `<name>Ruleset` functions from `src/rulesets/<plugin>.ts`, and keep addon entry points in `src/addons/<topic>.ts`. Favor descriptive config `name` fields (see `src/rulesets/unicorn.ts`) so inspector output stays searchable. Align filenames with their plugin (e.g., `unused-imports.ts`) and keep public exports re-exported via `lib/lib.ts` to control the package surface.

## Testing Guidelines

Each fixture under `tests/*` mirrors a consumer stack; lint failures there usually signal regressions. Run `pnpm build` before testing to ensure fixtures pick up the latest compiled config, then execute `pnpm --filter tests/<fixture> test`. Keep fixture configs minimal—add new validation rules alongside a failing example and a fixed counterpart in `tests/<fixture>/src`. There is no coverage gate, but PRs should justify any relaxed rule and demonstrate the expected diagnostics within the appropriate fixture.

## Commit & Pull Request Guidelines

Commits follow Conventional Commits (`feat: …`, `fix: …`, `chore(main): …`) enforced by Commitlint; scope packages with `tests/<fixture>` when touching fixtures. For pull requests, include a brief summary, affected rule sets, and a link to any tracking issue; attach lint output snippets or fixture diffs when behavior changes. Run `pnpm turbo run check test` before requesting review, and call out dependency bumps or patched plugins so maintainers can verify `patches/` and `typings/` still apply. Release automation relies on release-please, so avoid manual version bumps in PRs.
