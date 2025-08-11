
# Action & Anchors – Design Kit (Drop-in)

This kit focuses on **design-first**: refreshed homepage, a style guide route, and a small UI library (Button, Card, Badge) with theme tokens.

## What's inside
- `app/page.tsx` – new hero + sections
- `app/style-guide/page.tsx` – live style guide
- `components/ui/{Button,Card,Badge}.tsx` – small UI atoms
- `app/globals.css` – design tokens & utilities (append to yours)
- `public/waves.svg` – subtle nautical divider

## How to apply
1. Copy folders into your repo, merging with existing paths.
2. Ensure your TS path alias supports `@/*` to project root.
3. Commit and deploy to Netlify.

## Notes
- Colors and spacing are driven by CSS variables to make theme swaps easy.
- No fonts added; uses system stack. If you want custom fonts later, we can add via `next/font`.
