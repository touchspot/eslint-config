# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a composable ESLint configuration package for TypeScript projects with optional support for React, Next.js, and Tailwind CSS. The package provides a base configuration with multiple rulesets and framework-specific addons.

## Build System

- Build: `pnpm build` (uses `tspc` with TypeScript path transformations)
- The build is required before linting/type-checking since tests import the built package
- Use Turbo for orchestrating tasks: `turbo run build` or `turbo run check`

## Development Commands

### Checking Code Quality

- Format check: `pnpm check:format`
- Lint check: `pnpm check:lint` (requires build first)
- Type check: `pnpm check:type` (requires build first)
- Unused exports: `pnpm check:unused` (uses knip)
- Run all checks: `turbo run check`

### Fixing Issues

- Fix formatting: `pnpm fix:format`
- Fix linting: `pnpm fix:lint`

### Testing

- Tests are in `tests/` subdirectories (`typescript`, `react`, `next`, `tailwindcss`)
- Each test directory has its own `package.json` and imports the built config
- Run tests: `turbo run test` (runs `eslint .` in each test directory)
- Individual test: `turbo run --filter=<test-suite-package>` (e.g. `turbo run --filter=test-react`)

### Utilities

- Inspect config: `pnpm inspect` (launches ESLint config inspector)

## Architecture

### Core Configuration System

The main config function is in `src/config.ts` and composes multiple rulesets:

1. **Base rulesets** (always included):
    - `eslintRuleset` - Core ESLint rules
    - `tseslintRuleset` - TypeScript ESLint rules (requires `tsconfigRootDir` option)
    - `unicornRuleset` - eslint-plugin-unicorn
    - `importXRuleset` - Import management rules
    - `unusedImportsRuleset` - Unused import detection
    - `noRelativeImportPathsRuleset` - Enforce absolute imports
    - `functionalRuleset` - Functional programming rules
    - `perfectionistRuleset` - Sorting/ordering rules
    - `checkFileRuleset` - File naming conventions

2. **Addon system** (opt-in via imports):
    - `reactAddon` - React + React Hooks + browser globals
    - `nextAddon` - Extends reactAddon with Next.js rules and Node.js globals
    - `tailwindcssAddon` - Tailwind CSS class sorting and best practices

### Entry Points

- Main export: `lib/lib.ts` (re-exports `src/config.ts` as default and `src/env.ts` as named export)
- Addon exports: `lib/addons/*.ts` (re-export from `src/addons/*.ts`)
- Package exports defined in `package.json`:
    - `.` → `./dist/lib/lib.js`
    - `./addons/*` → `./dist/lib/addons/*.js`

### Import Path Aliases

- `#pkg/*` maps to `src/*` (defined in `tsconfig.json`)
- TypeScript path transformation plugin converts these to relative paths in output
- All internal imports use this alias pattern

### Ruleset Structure

Each ruleset file in `src/rulesets/` returns a function that produces ESLint config arrays:

- Rulesets are namespaced with `@touchspot/eslint-config/rulesets/{name}`
- Some rulesets export multiple configs (e.g., `importXRuleset()` and `importXRulesetNext()`)
- Rulesets can accept options (e.g., `tseslintRuleset` requires `tsconfigRootDir`)

### Environment Configuration

`src/env.ts` exports helper functions for setting up globals:

- `browser()` - Adds browser globals
- `node()` - Adds Node.js globals
- Both accept optional `files` array to scope to specific patterns

## Configuration Usage Pattern

Users configure ESLint by:

1. Importing the base config: `import config from "@touchspot/eslint-config"`
2. Calling it with required options: `config({ tsconfigRootDir: import.meta.dirname })`
3. Optionally passing addons as additional parameters: `config(options, ...reactAddon(), ...nextAddon())`

Example:

```javascript
import config from "@touchspot/eslint-config";
import next from "@touchspot/eslint-config/addons/next";

export default config({ tsconfigRootDir: import.meta.dirname }, ...next());
```

## Key Implementation Details

- All configs use the flat config format (ESLint 9+)
- TypeScript strict type checking is enabled via `typescript-eslint` strict configs
- Custom naming conventions enforce: camelCase/PascalCase/UPPER_CASE, no leading/trailing underscores (except parameters/variables can have leading underscore)
- Return await is enforced: functions must use `return await` for consistency
- Strict boolean expressions: no truthy/falsy checks, explicit comparisons required
- Import sorting via perfectionist plugin
- File naming conventions via check-file plugin

## Package Manager

Uses pnpm with workspaces. The tests are workspace packages that depend on the main package via `workspace:^`.
