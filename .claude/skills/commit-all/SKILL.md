---
name: commit-all
description: Stage all changes and create a commitlint-compliant commit. Use when the user says "/commit-all", "commit everything", or wants to commit all current changes (staged + unstaged + untracked) in one go.
---

# Stage All and Commit

Stage every change in the working tree, then create a commit following the same process as the `commit` skill.

## Step 1 — Stage All Changes

```bash
git add -A
```

## Step 2 — Invoke the Commit Skill

Use the Skill tool to load and execute the `commit` skill:

```text
Skill(commit)
```

The `commit` skill handles everything from here: inspecting the staged diff, retrieving commitlint rules, writing the commit message, and creating the commit. Do not attempt to replicate its steps manually — always invoke it via the Skill tool so that its full instructions are loaded into context.
