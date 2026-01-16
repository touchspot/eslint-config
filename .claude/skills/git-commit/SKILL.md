---
name: git-commit
description: Create git commits with Conventional Commits format. Analyzes changes to write meaningful messages. Use when committing changes, committing staged files, creating commits, making commits, or writing git commit messages.
---

# Git Commit Skill

## Overview

This skill enables creating well-structured git commits in sandbox environments where heredoc syntax is unavailable. It provides a workflow for analyzing code changes, understanding what functionality changed (not just which files), and creating Conventional Commits-compliant commit messages with proper multi-line formatting.

## Commit Workflow

Follow this workflow when creating commits:

### Step 1: Analyze Current State

Before creating a commit, gather comprehensive information about the repository state:

```bash
# Check current status
git status

# View unstaged changes
git diff

# View staged changes
git diff --staged

# View recent commit history to understand commit message style
git log --oneline -10

# View detailed recent commits to understand body format
git log -3
```

### Step 2: Retrieve Commitlint Configuration

This project uses commitlint with Conventional Commits. The configuration is automatically retrieved and shown below:

```bash
node $(pnpm --workspace-root exec pwd)/.claude/skills/git-commit/scripts/get-commitlint-rules.ts
```

Use the JSON object above to understand the commitlint rules. **Do not run this script manually** - the output is already included.

**Commitlint rule structure (common to all rules):**

Each rule is an array: `[level, applicability, value]`

- **level**: `1` = warning, `2` = error (disabled rules are filtered out)
- **applicability**: `"always"` or `"never"`
- **value**: Rule-specific value (number, array, string, etc.)

**Key rules to extract:**

**`rules.type-enum`** (e.g., `[2, "always", ["feat", "fix", ...]]`)

- Extract the third element (array of allowed commit types)

**`rules.header-max-length`** (e.g., `[2, "always", 100]`)

- Extract the third element (maximum header length in characters)

**`rules.body-max-line-length`** (e.g., `[2, "always", 100]`)

- Extract the third element (maximum body line length in characters)

**`rules.scope-enum`** (e.g., `[2, "always", ["eslint-config", "global", ...]]`)

- Extract the third element (array of allowed scopes)

### Step 3: Analyze Changes

**Always run this step** to analyze both file changes and dependency updates in a single unified output.

Run the helper script:

```bash
node $(pnpm --workspace-root exec pwd)/.claude/skills/git-commit/scripts/analyze-changes.ts
```

**Output format:**

```json
{
    "scopes": ["eslint-config", "playground-next"],
    "hasProductionDependencyUpdates": true
}
```

- `scopes`: Array of affected workspace names (e.g., `["eslint-config"]`), `["global"]` for root-only changes, or `[]` if empty
- `hasProductionDependencyUpdates`: `true` if any production dependency (`dependencies` in package.json) was updated

**Use this output in subsequent steps:**

1. **For scope selection (Step 5):** Use the `scopes` array directly
    - `["eslint-config", "playground-next"]` → `type(eslint-config,playground-next): subject`
    - `["eslint-config"]` → `type(eslint-config): subject`
    - `["global"]` → `type(global): subject`
    - `[]` → `type: subject` (no scope)

2. **For type selection (Step 4):** Consider `hasProductionDependencyUpdates`
    - If `true` and no source code changes: likely `deps` type
    - If `true` with source code changes: source code purpose takes precedence

### Step 4: Integrated Judgment (MOST CRITICAL STEP)

**THIS IS THE MOST CRITICAL STEP.** You must make an **integrated judgment** considering BOTH source code changes AND dependency updates together. The commit type should reflect the **PRIMARY PURPOSE** of the change.

#### Priority Rule: `feat` > `fix` > `deps` > others

When source code changes and dependency updates coexist, apply this priority to determine the commit type:

| Source Code Change      | Dependency Change                   | Commit Type      | Rationale                               |
| ----------------------- | ----------------------------------- | ---------------- | --------------------------------------- |
| New feature (`feat`)    | Any                                 | `feat`           | Dependency is incidental to the feature |
| Bug fix (`fix`)         | Any                                 | `fix`            | Dependency is incidental to the fix     |
| None                    | `dependencies` (production)         | `deps`           | Pure production dependency update       |
| None                    | `devDependencies` (build tools)     | `build`          | Pure build tool update                  |
| None                    | `devDependencies` (test frameworks) | `test`           | Pure test framework update              |
| None                    | `devDependencies` (linters, etc.)   | `chore`          | Pure development tool update            |
| Refactor/perf/docs/test | None                                | Appropriate type | Based on source code purpose            |

#### Judgment Process

**A) First, assess source code changes:**

Ask: **"Why was this change necessary?"**

- What problem existed before this change?
- What new capability is being added?
- What behavior was wrong and is now fixed?

Focus on the **OUTCOME and PURPOSE**, never the implementation details:

❌ **Bad**: "update `eslint.ts` and add `react.ts`"
✅ **Good**: "add React hooks linting support"

❌ **Bad**: "modify config files"
✅ **Good**: "enable TypeScript strict mode checking"

❌ **Bad**: "add new ruleset and update exports"
✅ **Good**: "add Tailwind CSS class sorting rules"

**B) Then, integrate dependency information from Step 3:**

- **Source code changes exist + `hasProductionDependencyUpdates: true`** → The source code purpose determines the type
- **ONLY dependencies updated (no source code changes)** → Classify by dependency type using the table above

#### Examples of Integrated Judgment

| Change Description                                  | Priority Judgment | Result                                                        |
| --------------------------------------------------- | ----------------- | ------------------------------------------------------------- |
| New feature implementation + new library added      | feat > deps       | feat(eslint-config): add import sorting rules                 |
| New feature implementation + library version update | feat > deps       | feat(eslint-config): add React Server Components support      |
| Bug fix + library version update needed for fix     | fix > deps        | fix(eslint-config): resolve false positives in unused imports |
| Library update only (to fix a known bug)            | deps (no source)  | deps(eslint-config): update `eslint-plugin-react` to 7.37.0   |
| Test framework update only                          | test (dev dep)    | test: update `vitest` to 4.0.0                                |
| TypeScript update only                              | build (dev dep)   | build: update `typescript` to 5.8.0                           |
| Linter config update only                           | chore (dev dep)   | chore: update `eslint` to 9.0                                 |

#### Type Classification Guide

**End User Impact Types (Releasable):**

1. **`feat`**: What new capability can END USERS of this ESLint config now use?
    - For this project: New ESLint rules, new addons (react, next, tailwindcss), new configuration options
    - NOT for: Development tools, CI improvements, documentation tooling, internal refactoring
2. **`fix`**: What was broken for END USERS? What problem did they face?
    - For this project: Broken ESLint rules, incorrect linting behavior, false positives/negatives
    - NOT for: Build process issues, development workflow problems, test failures
3. **`deps`**: What production dependency was updated?
    - `dependencies` or `peerDependencies` in `package.json` that affect library behavior
    - NOT for: `devDependencies` (use `chore`, `build`, or `test` instead)

**Developer/Internal Types:**

4. **`chore`**: What development/maintenance task was done?
    - Development tools (e.g., tools in `mise.toml`), updates to `devDependencies` (linters, formatters)
    - Repository maintenance, tooling improvements, configuration updates
5. **`build`**: What changed in the build system?
    - Build configuration, `package.json` scripts, build tools (`typescript`, bundlers), monorepo setup
6. **`test`**: Test additions or test framework updates
7. **`docs`**: What documentation was improved for end users or developers?
8. **`refactor` / `perf`**: What code behavior improved without adding features?

**Critical: Distinguish between END USER features vs DEVELOPER tools**

- ✅ "feat: add React hooks linting rules (affects users of this config)"
- ❌ "feat: add `git-commit` skill (only affects developers of this project)"
- ✅ "chore: add `git-commit` skill for commit automation"

**The subject line must answer "why", not "what" or "how".**

Read the actual code changes to understand their purpose, not just which files were modified.

### Step 5: Choose Type and Scope

Based on the integrated judgment from Step 4, choose the appropriate type and scope.

**Type Selection:**

Choose a type from the allowed types in `rules.type-enum` (retrieved in Step 2). Use the priority rule and type classification from Step 4.

**Scope Selection:**

**This project uses a monorepo structure.** Use the `scopes` array from Step 3 directly:

- `scopes: ["eslint-config", "playground-next"]` → `type(eslint-config,playground-next): subject`
- `scopes: ["eslint-config"]` → `type(eslint-config): subject`
- `scopes: ["global"]` → `type(global): subject`
- `scopes: []` → `type: subject` (no scope)

**CRITICAL: Do NOT manually filter or exclude scopes.** Even if a package has only minor changes (e.g., a single import update), it MUST be included in the scope. The Step 3 script's output is authoritative.

**Format examples:**

- With single scope: "feat(eslint-config): add React hooks linting rules"
- With multiple scopes: "refactor(eslint-config,playground-next): update import patterns"
- Without scope: "chore: upgrade to Node.js 22"

### Step 6: Craft the Commit Message

Follow Conventional Commits format:

```
<type>: <subject>

<body>

<footer>
```

Or with optional scope:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Important: Write all commit messages in English.**

**Backtick Usage (both Subject and Body):**

Always enclose the following in backticks:

- File names: `eslint.ts`, `package.json`, `tsconfig.json`, `config.ts`
- Directory names: `src/rulesets/`, `lib/addons/`, `packages/eslint-config/`
- Library/package names: `eslint`, `typescript-eslint`, `@touchspot/eslint-config`, `eslint-plugin-react`
- Tool/command names: `git-commit`, `commitlint`, `pnpm`, `turbo`
- Function/method names: `config()`, `react()`, `next()`, `tailwindcss()`
- Code identifiers: `tsconfigRootDir`, `FlatConfig`, `RulesetOptions`
- Constants/naming conventions: `KEBAB_CASE`, `UPPER_CASE`, `camelCase`, `PascalCase`
- Environment variables: `NODE_ENV`, `ESLINT_USE_FLAT_CONFIG`

**Subject (required):**

- **MUST describe the outcome/purpose, NEVER describe file changes**
- Use imperative mood: "add", "fix", "improve" (not "added", "fixed", "improved")
- Answer "why was this change necessary?" not "what files were changed?"
- Apply backtick rules above when mentioning technical terms
- No period at the end
- Keep under `rules.header-max-length` (see Step 2)
- Use lower-case or sentence-case as required by this project

Examples:

- ✅ "feat(eslint-config): add React hooks exhaustive-deps rule"
- ❌ "feat(eslint-config): add react-hooks.ts file and update exports"
- ✅ "fix(eslint-config): prevent false positives in unused imports detection"
- ❌ "fix(eslint-config): update rule options and add ignorePattern config"

**Body (recommended for non-trivial changes):**

- **Explain WHY the change was necessary (the problem/motivation)**
- Explain WHAT was changed in detail (implementation details belong here, not in subject)
- **When dependencies were updated as part of the change, mention them in the body**
- List specific files, components, or modules modified
- Apply backtick rules above consistently
- Use bullet points for multiple changes
- Wrap lines at `rules.body-max-line-length` (see Step 2)
- Leave a blank line after the subject

**Role separation:**

- **Subject**: WHY (the purpose/outcome) - "add React hooks exhaustive-deps rule"
- **Body**: WHAT (the implementation) - "Add `react-hooks.ts` ruleset, configure exhaustive-deps with recommended settings, export from `react()` addon"

**Footer (optional):**

- Reference issues: "Fixes #123", "Relates to #456"
- Document breaking changes: "BREAKING CHANGE: description"
- Leave a blank line after the body

**Example commit message (with incidental dependency update):**

```
feat(eslint-config): add Tailwind CSS class sorting rules

Add automatic class sorting to improve consistency
and reduce merge conflicts in Tailwind projects.

Changes:
- Add `better-tailwindcss.ts` ruleset with recommended settings
- Export `tailwindcss()` addon from `lib/addons/`
- Add `eslint-plugin-better-tailwindcss` as peer dependency
```

**Example commit message (dependency-only update):**

```
deps(eslint-config): update `eslint-plugin-react` to 7.37.0

Update to fix false positives in jsx-no-target-blank rule
that were flagging legitimate rel="noopener" usage.
```

### Step 7: Execute the Commit

**Use the Write tool and `git commit -F` for multi-line commit messages:**

In sandbox environments, heredoc syntax is unavailable. Follow these steps to create properly formatted multi-line commits:

1. **Get a temporary file path** by running the helper script:

    ```bash
    node $(pnpm --workspace-root exec pwd)/.claude/skills/git-commit/scripts/get-message-file-path.ts
    ```

    This outputs the path to a temporary file (e.g., `/tmp/claude/xxxxx/commit-message.txt`).

2. **Write the commit message to the temporary file** using the Write tool:
    - Path: Use the path returned from step 1
    - Content: The full commit message with proper newlines

3. **Execute git commit** using the temporary file:

    ```bash
    git commit -F <temp-file-path>
    ```

4. **Clean up** by removing the temporary file:

    ```bash
    rm <temp-file-path>
    ```

**Example:**

First, run the helper script to get a temporary file path:

```bash
node $(pnpm --workspace-root exec pwd)/.claude/skills/git-commit/scripts/get-message-file-path.ts
# Output: /tmp/claude/xxxxx/commit-message.txt
```

Then, use the Write tool to create the file at that path with content:

```
fix(eslint-config): prevent false positives in no-unused-vars rule

Previously, variables used only in type annotations were being
flagged as unused, causing unnecessary lint errors in TypeScript
projects with strict type imports.

Changes:
- Configure `varsIgnorePattern` to exclude type-only usages
- Update `@typescript-eslint/no-unused-vars` rule options
```

Then execute: `git commit -F <temp-file-path> && rm <temp-file-path>`

### Step 8: Verify the Commit

After committing, verify:

```bash
# Check commit was created
git log -1

# View the full commit message
git log -1 --format=full

# Check commit status
git status
```

## Common Pitfalls to Avoid

1. **Don't describe implementation/files in subject - describe the purpose**
    - ❌ "feat(eslint-config): add react-hooks.ts file and update exports"
    - ✅ "feat(eslint-config): add React hooks exhaustive-deps rule"
    - ❌ "fix(eslint-config): update rule options and add ignorePattern config"
    - ✅ "fix(eslint-config): prevent false positives in unused imports detection"
    - ❌ "refactor(eslint-config): update `tseslint.ts` and `config.ts`"
    - ✅ "refactor(eslint-config): simplify TypeScript ruleset configuration"

2. **Don't use past tense**
    - ❌ "added feature" or "fixed bug"
    - ✅ "add feature" or "fix bug"

3. **Don't exceed length limits**
    - Check `rules.header-max-length` and `rules.body-max-line-length` from Step 2

4. **Don't omit the body for complex changes**
    - Simple one-line changes: subject only is fine
    - Multi-file or complex changes: include body explaining WHY and WHAT
    - **When dependencies are updated incidentally, always mention them in the body**

5. **Don't write the subject before understanding WHY**
    - ALWAYS answer "why was this change necessary?" first
    - Then write the subject based on that answer
    - File changes and implementation details go in the body, not subject

6. **Don't use `feat` for developer-only changes**
    - ❌ "feat: add `git-commit` skill for commit automation"
    - ✅ "chore: add `git-commit` skill for commit automation"
    - ❌ "feat: add GitHub Actions workflow for CI"
    - ✅ "ci: add GitHub Actions workflow for CI"
    - Ask: "Does this change what END USERS can do with this ESLint config?"

7. **Don't forget to apply the priority rule for mixed changes**
    - When source code change + dependency update coexist, source code purpose takes precedence
    - `feat` > `fix` > `deps` > others
    - Mention incidental dependency updates in the commit body

## Breaking Changes

When there are breaking changes, include `BREAKING CHANGE:` in the footer:

```
feat(eslint-config): require ESLint 9.x flat config format

BREAKING CHANGE: Legacy eslintrc format is no longer supported.
Users must migrate to the flat config format (eslint.config.js).
```

For header notation, use "!" after the type/scope:

```
feat(eslint-config)!: require ESLint 9.x flat config format
```
