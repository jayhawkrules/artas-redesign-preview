# ARTAS Redesign Preview — Project Context for Claude Code

**Repo:** `jayhawkrules/artas-redesign-preview` (default branch: `master`)
**Owner:** Andrew Ward (andrewpward@gmail.com)
**Public:** yes (only public repo in the portfolio — preview hosting needs anonymous access)

## What this is

A static-HTML preview of a redesign for **realitytelevisionawards.com** (ARTAS — American Reality Television Awards). Used to share the redesign with stakeholders before swapping the live WordPress site over. Hosted on a static host (Netlify-style — `_redirects` + `200.html` SPA fallback).

## Stack

Plain static HTML + CSS (`artas-wp-styles.css` carries WordPress-derived styles), small Express `server.js` for local preview, and a Python `patch_html.py` script for batch HTML edits. No build framework. **`master` branch, not `main`.**

## Key files

| File | Purpose |
|------|---------|
| `index.html` / `200.html` | SPA fallback for static host (identical content) |
| `_redirects` | Netlify-style rewrites |
| `about.html`, `academy.html`, `awards-show.html`, `gallery.html`, `nominees.html`, `past-winners.html`, `reality-royalty.html`, `submit.html`, `the-buzz.html`, `winners.html` | Redesigned site sections |
| `artas-wp-styles.css` | Stylesheet ported from WordPress theme |
| `global-search.js` | Client-side search across pages |
| `winner-categories.json` | Data for winners/nominees pages |
| `patch_html.py` | Batch HTML patcher (sed-like, Python) |
| `server.js` | Local preview Express server |

## Locked decisions (do not change without conversation)

- **Public repo** — preview is shared via direct URL; do not put secrets, draft copy, or unannounced winners in this repo
- **Default branch is `master`** (not `main`) — leave as-is unless coordinating a rename
- **Static-only** — adding React/build tooling would diverge from the WP-replacement strategy

## Stop and ask before

- Publishing actual winner names before the live ceremony / embargo
- Adding any analytics or third-party scripts (this is publicly accessible, privacy implications)
- Renaming pages (breaks shared preview links)
- Changing the default branch from `master`

## Claude Code Skills (cross-repo, cross-machine)

Shared user-level skills are versioned at **[jayhawkrules/claude-skills](https://github.com/jayhawkrules/claude-skills)** (private). Once cloned to `~/.claude/skills/` on a Mac, they auto-load in every project on that machine.

Available: `new-app-starter`, `firebase-hosting-security`, `firestore-rbac-helpers`, `firebase-actions-deploy`, `vendor-onboarding-walkthrough`, `cowork-kickoff`, `feature-scaffold`, `repo-health-audit`.

To bring a new Mac to parity:
```bash
git clone git@github.com:jayhawkrules/claude-skills.git ~/.claude/skills
```

> **Stack note:** Static-only HTML with no JS framework. Most portfolio skills don't apply. `cowork-kickoff`, `repo-health-audit` (link checks, dead pages), and visual/copy review work are the relevant uses.
