# alaabadr.net

Personal website for Alaa Badr — senior technology executive and community educator based in Seattle.

Monorepo with two Astro template options. Template B (`sites/net-template-b`) is the one in production.

## Stack

- [Astro](https://astro.build/) 5.x with content collections
- Tailwind CSS 3
- pnpm workspaces
- Deployed to Cloudflare Pages

## Working on it

```bash
pnpm install
pnpm dev:net-b     # local preview on http://localhost:4321
```

Build the production site:

```bash
pnpm --filter net-template-b build
```

## Layout

```
sites/
  net-template-a/   # "The Quiet Page" — minimal editorial (unused)
  net-template-b/   # "The Garden Journal" — live site
shared/             # shared utilities
```

Content lives in `sites/net-template-b/src/content/writing/` as Markdown.
