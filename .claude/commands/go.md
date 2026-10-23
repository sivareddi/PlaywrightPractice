---
description: Commit all changes and push to origin
argument-hint: "[optional commit message]"
allowed-tools: Bash(git status:*), Bash(git diff:*), Bash(git log:*), Bash(git branch:*), Bash(git add:*), Bash(git commit:*), Bash(git push:*), Bash(git rev-parse:*), Bash(git ls-files:*)
---

Commit every pending change in this repository and push it to `origin`.

## Context

- Branch: !`git rev-parse --abbrev-ref HEAD`
- Status: !`git status --short`
- Staged diff stat: !`git diff --cached --stat`
- Unstaged diff stat: !`git diff --stat`
- Recent commits: !`git log --oneline -5`
- Untracked files: !`git ls-files --others --exclude-standard`

## User-supplied message (may be empty)

$ARGUMENTS

## Steps

1. If the status above shows no changes, say so and stop — do not create an empty commit.
2. Review the diffs. Before staging, check that nothing being added is a secret, credential, `.env` file, token, or generated artifact (`node_modules/`, `test-results/`, `playwright-report/`, `.playwright-mcp/`). If something like that would be committed, stop and report it instead of committing — offer to add it to `.gitignore`.
3. Stage everything with `git add -A`.
4. Commit. If the user supplied a message above, use it verbatim as the subject. Otherwise write one from the actual diff: a concise imperative subject under 72 characters, plus a short body listing what changed and why when the change touches more than one area. Describe the change, not the files.
5. End the commit message with:

   ```
   Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
   ```

6. Push with `git push`. If the branch has no upstream, use `git push -u origin HEAD`.
7. If the push is rejected as non-fast-forward, do not force. Report the rejection and suggest `git pull --rebase`, then wait for the user.
8. Report the final commit hash, subject, branch, and the remote it landed on.

Do not run tests, lint, or other checks unless the user asks. Never use `--no-verify`, `--amend`, or `--force`.
