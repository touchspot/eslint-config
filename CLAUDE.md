# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a monorepo for `@touchspot/eslint-config`, a shareable ESLint configuration package with optional addons for React, Next.js, and Tailwind CSS. The project uses pnpm workspaces, Turborepo for task orchestration, and follows a modular architecture with composable rulesets.

## Environment Requirements

- **Node.js**: 24.x (exact version specified in `.node-version`)
- **pnpm**: 10.20.0 (exact version required by `packageManager` field)
- Package manager is strictly enforced; do not use npm or yarn

## Common Commands

### Building

```bash
# Build all packages
turbo run build

# Build only the main package
turbo run build --filter=@touchspot/eslint-config

# Watch mode for development
turbo run dev --filter=@touchspot/eslint-config
```

### Linting and Formatting

```bash
# Check everything (runs all check tasks)
turbo run check

# Check formatting only
turbo run check:format

# Check for unused dependencies
turbo run check:unused

# Fix formatting issues
turbo run fix:format

# Package-specific linting
turbo run check:lint --filter=@touchspot/eslint-config
turbo run fix:lint --filter=@touchspot/eslint-config
```

### Testing

```bash
# Run all tests
turbo run test

# Run tests for main package with coverage
turbo run test --filter=@touchspot/eslint-config
```

### Running a Single Test

```bash
# Run a specific test file
turbo run test --filter=@touchspot/eslint-config -- test/snapshots/addons/react.test.ts

# Run tests matching a pattern
turbo run test --filter=@touchspot/eslint-config -- -t "react addon"
```

### Playground Development

```bash
# Run ESLint on Next.js playground
turbo run test --filter=playground-next

# Run ESLint on Node playground
turbo run test --filter=playground-node
```

### Utilities

```bash
# Open ESLint config inspector
turbo run inspect --filter=@touchspot/eslint-config
```

## Architecture

### Monorepo Structure

The repository is organized as a pnpm workspace with two main workspace groups:

- **`packages/`**: Contains the publishable `@touchspot/eslint-config` package
- **`playgrounds/`**: Contains test environments (`next`, `node`) for validating the ESLint config

### Main Package Structure (`packages/eslint-config/`)

```
lib/
  default.ts              # Public entry point, re-exports from src/
  addons/
    next.ts               # Next.js addon entry point
    react.ts              # React addon entry point
    tailwindcss.ts        # Tailwind CSS addon entry point

src/
  config.ts               # Main config factory, composes all rulesets
  env.ts                  # Environment-specific helpers (node, browser)
  rulesets/
    eslint.ts             # Base ESLint rules
    tseslint.ts           # TypeScript-specific rules (accepts tsconfigRootDir)
    unicorn.ts            # eslint-plugin-unicorn rules
    import-x.ts           # Import organization and validation
    unused-imports.ts     # Unused import detection
    no-relative-import-paths.ts  # Enforce absolute imports
    functional.ts         # Functional programming patterns
    perfectionist.ts      # Code sorting and organization
    check-file.ts         # File naming conventions
    react.ts              # React-specific rules
    react-hooks.ts        # React Hooks rules
    next.ts               # Next.js-specific rules
    better-tailwindcss.ts # Tailwind CSS linting
  addons/
    [addon implementations]

test/
  snapshots/              # Snapshot tests for config outputs
```

### Key Architectural Patterns

1. **Composable Rulesets**: Each ruleset in `src/rulesets/` is a self-contained module that returns ESLint config objects. The main `config()` function in `src/config.ts` composes these rulesets together.

2. **Entry Points via lib/**: The `lib/` directory contains thin re-export files that serve as the package's public API. These use path aliases (`#src/`) to reference the actual implementations in `src/`.

3. **Path Alias System**: The package uses TypeScript path aliases extensively:
    - `#src/*.js` → `./src/*.ts` (source code)
    - `#test/*.js` → `./test/*.ts` (test code)
    - Build process uses `typescript-transform-paths` to resolve these

4. **Flat ESLint Config**: This package uses ESLint's modern flat config format (not the legacy `.eslintrc` format). Configs are composable arrays of config objects.

5. **Addon Pattern**: Optional features (React, Next.js, Tailwind) are exposed as separate imports that return config arrays to be spread into the main config:
    ```js
    config({ tsconfigRootDir: import.meta.dirname }, react(), next());
    ```

### TypeScript Configuration

- **Base**: Extends `@tsconfig/node24` and `@tsconfig/strictest`
- **Build**: Uses `ts-patch` with `typescript-transform-paths` to transform path aliases in output
- **Module System**: `nodenext` (strict ESM with `.js` extensions in imports)
- **Build Output**: Compiled to `dist/` with source maps and declaration maps

### Testing Strategy

Tests are snapshot-based, validating the complete ESLint configuration output for different addon combinations. This ensures config stability and catches unintended changes.

## Turbo Task Graph

Key task dependencies (defined in `turbo.json`):

- `build`: Standalone, outputs to `dist/`
- `check`: Depends on `check:format`, `check:lint`, `check:type`
- `check:lint` and `check:type`: Depend on `^build` (upstream packages must build first)
- `fix:lint`: Depends on `^build` and `fix:format`
- `test`: Depends on `^build`
- `inspect`: Depends on `^build` and `build`, runs persistently
- `dev`: Runs persistently (watch mode)
- `ci`: Runs `check` and `test` for packages

## Commit Guidelines

This repository uses conventional commits with commitlint:

- **Format**: `type(scope): subject`
- **Scopes**: Validated against pnpm workspace package names
- **Hooks**: Husky runs commitlint on commit-msg and lint-staged on pre-commit

Subject case must not be start-case, pascal-case, or upper-case.

## Important Notes

- **Never modify `dist/` directly**: It's a build artifact, edit source in `src/` or `lib/`
- **Path aliases are build-time**: When adding imports, use `#src/` aliases, not relative paths
- **Peer dependencies are optional**: React, Next.js, and Tailwind addons have optional peer deps
- **Global ignores**: `.cache/`, `.turbo/`, `coverage/`, `dist/` are ignored by default in the ESLint config
