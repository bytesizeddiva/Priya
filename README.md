# priya

Personal site for **Priya Jadhav** — developer and AI researcher.

A single-page React site: a portrait and headline, a row of decorative
technology icons, a short bio, a selected-work list that links out to each
project, and contact links that copy to the clipboard.

Built with **Vite 8**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.
It is entirely static — no backend, no database, and **no API keys or secrets
of any kind**.

## Requirements

Node.js `^20.19.0 || >=22.12.0` (Vite 8 needs 20.19+ or 22.12+). The version is
pinned in `package.json` under `engines`.

## Getting started

```bash
npm install
npm run dev
```

Open **http://localhost:3200**.

## Scripts

| Command           | What it does                                    |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Dev server with hot reload on `localhost:3200`  |
| `npm run dev:host`| Same, exposed on your LAN address               |
| `npm run build`   | Production build into `dist/`                   |
| `npm run preview` | Serve the production build locally             |
| `npm run lint`    | Typecheck with `tsc --noEmit` (strict mode)     |
| `npm run clean`   | Delete `dist/`                                  |

### Changing the port

The default is **3200**. Override it per run with `PORT`, or change the `PORT`
constant at the top of `vite.config.ts` to make it permanent:

```bash
PORT=8080 npm run dev
```

`strictPort` is enabled, so if the port is taken the server fails with a clear
error instead of quietly moving to the next free one.

## Project structure

```
index.html              Document shell, font loading, meta tags
public/favicon.svg      Favicon
src/
  main.tsx              Entry point, StrictMode, error boundary
  App.tsx               Layout, clipboard handling, toast state
  index.css             Tailwind import, aurora shimmer keyframes
  components/
    Headline.tsx        Name and role
    Portrait.tsx        Circular portrait with initials fallback
    Dock.tsx            Decorative technology icons
    Decor.tsx           Chequered flag band (generated, not an image)
    AboutView.tsx       The bio paragraph
    Works.tsx           Selected work list
    Connect.tsx         Contact links
    Toast.tsx           Copy confirmations
vite.config.ts          Port, alias, plugins
vercel.json             Vercel build and routing config
```

## Editing the site

All the copy a visitor reads lives in three files.

**`src/components/AboutView.tsx`** — the bio, as a single `ABOUT` string near
the top.

**`src/components/Works.tsx`** — the work list, as a `WORKS` array:

```ts
{ name: 'Project name', role: 'One-line result', url: 'https://…' }
```

`name` is the left column and `role` the right. **The entries currently in the
file are placeholders pointing at `example.com` — replace them with your real
projects.** Adding a `url` turns the name into a link that opens in a new tab;
omit it and the name renders as plain text.

**`src/components/App.tsx`** — the contact details, near the top:

```ts
const EMAIL = '…';
const X_URL = '…';
```

### Using your own photo

The portrait is served from `public/pfp.jpg`. To swap it, replace that file, or
point `<Portrait />` at a different one in `src/App.tsx`:

```tsx
<Portrait customImage="/me.jpg" />
```

The frame is a square circle, so a portrait-orientation crop reads best — add
`object-top` if a face is being cut off at the top. If the image fails to load,
the component falls back to a `PJ` monogram.

### Social preview image

`index.html` sets `og:` and `twitter:` tags but no image, so link previews
render without artwork. Add a 1200×630 image to `public/` and point `og:image`
and `twitter:image` at it.

## Deploying

`npm run build` produces a fully static `dist/`, which works on any static host
— Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3.

### Vercel

`vercel.json` is already configured, so importing the repo is enough. It pins
the framework, build command, and output directory, and declares a SPA rewrite
to `index.html` that excludes `/assets/*` so deep links resolve if a router is
ever added. The Node version in `engines` takes precedence over the dashboard
setting.

## Notes

**Clipboard buttons.** The Email and X buttons use `navigator.clipboard`, which
browsers only expose in secure contexts — `https://` or `http://localhost`. Over
plain HTTP on a LAN address
(`npm run dev:host`, then browsing to `http://192.168.x.x:3200`) the clipboard
is unavailable and the app says so rather than reporting a false success. Use
`localhost` if you need those buttons to work.

**Animations.** `prefers-reduced-motion` is respected throughout, including the
aurora shimmer on hovered work links.
