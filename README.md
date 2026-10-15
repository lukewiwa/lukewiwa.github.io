# lukewiwa.com

The Ramblings of Wiwa. A static site: markdown and React templates in, flat
files out, served by GitHub Pages.

```
blog/*.md ─┐
site/*.tsx ├─ npm run build ─> dist/ ─ GitHub Actions ─> GitHub Pages ─> readers
public/   ─┘
```

## Writing a post

A post is a markdown file in `blog/`. Its file name is its URL:
`blog/pinocchio.md` is served at `/blog/pinocchio/`.

```markdown
---
title: Pinocchio
date: 2018-04-18
description: Optional. Shown on the blog index instead of the excerpt.
draft: true # optional; drafts show in `just dev` but are not published
---

Opening paragraph, shown on the blog index.

<!--more-->

The rest of the post.
```

`just new-post "My Post Title"` scaffolds one as a draft.

**From a phone:** create or edit the file on a branch (the GitHub app, or ask
Claude Code on the web to draft it), open a PR, and merge it. CI publishes
every push to `main`.

## Local development

Open the repo in the dev container. It installs Node 24, `just` and
dependencies. Then:

```bash
just dev          # http://localhost:8080, rebuilds and reloads on save
just build        # build into dist/
just typecheck
```

## How the build works

`site/build.tsx` is the whole generator, a few hundred lines with no
framework:

| Input             | Output                                                           |
| ----------------- | ---------------------------------------------------------------- |
| `public/`         | copied as-is                                                     |
| `site/styles.css` | Tailwind v4, written to `dist/assets/site-<hash>.css`            |
| `site/client/*.ts(x)` | each file is a browser entry, bundled by esbuild into `dist/assets/` |
| `site/pages/`     | React components rendered to static HTML                         |
| `blog/*.md`       | markdown-it, with code highlighted at build time by Shiki        |

It also writes Atom, RSS and JSON feeds under `/feed/blog/`, a sitemap and a
404 page.

Pages are plain React rendered once at build time, so they ship no JavaScript.
To make part of a page interactive, add an entry such as
`site/client/search.tsx` and pass `scripts={["search"]}` to `<Base>`.

New pages are registered in the `pages` map in `site/build.tsx`.

## Deployment

`.github/workflows/main.yaml` type-checks and builds every PR. On a push to
`main` it also publishes `dist/` with GitHub's official Pages actions. There
is no separate publishing branch.

One-off setup:

- **Repository settings → Pages:** set the source to "GitHub Actions" and the
  custom domain to `lukewiwa.com`, with HTTPS enforced.
- **DNS (Route 53, `lukewiwa.com` zone):** A records for the apex pointing at
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and
  `185.199.111.153`, and a `www` CNAME to `lukewiwa.github.io`. GitHub
  redirects `www` to the apex.
