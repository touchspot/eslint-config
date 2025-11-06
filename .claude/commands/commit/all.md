---
description: Stage all changes and create a git commit
---

Follow these steps to create a git commit with all changes:

1. Run !`git add -A` to stage all changes (new, modified, and deleted files)
2. Run !`lint-staged` to format and lint the staged files
    - If `lint-staged` fails, report the error details to the user and stop immediately - do not proceed with the commit
3. Use the `git-commit` skill to create the commit
