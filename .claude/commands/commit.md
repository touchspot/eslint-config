---
description: Create a git commit using staged changes
---

Follow these steps to create a git commit:

1. First, run !`lint-staged` to format and lint the staged files
    - If `lint-staged` fails, report the error details to the user and stop immediately - do not proceed with the commit
2. Use the `git-commit` skill to create the commit

Do not stage any additional files.
