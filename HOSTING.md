# Nad Wasit website: running it on your own hosting

Everything here is yours. This file explains what the project is, how to build
it, and how to put it on nadwasit.com.

## Read this first: it is not a static site

Your old nadwasit.com was plain HTML on GitHub Pages. This one is different.

It is a **React 19 + TanStack Start** app that is **server rendered** and builds
into a **Cloudflare Worker**. The build produces a small server bundle plus a
folder of static files. There is no `index.html` to drop into a folder, so
**GitHub Pages cannot host this as it stands.** Pages only serves static files;
it cannot run the server half.

You have three sensible options, in order of least work:

| Option | Effort | Notes |
|---|---|---|
| **Cloudflare Workers** (recommended) | ~15 min | What the project already targets. Free tier is plenty. Custom domain supported. |
| **Cloudflare Pages** | ~15 min | Same platform, slightly different flow. Also fine. |
| **Convert to a fully static site** | a few hours | Possible, because this site has no backend logic. It would then run on GitHub Pages. Ask and it can be done. |

Keep the repo on GitHub either way. Cloudflare builds straight from GitHub.

## What you need

- [Bun](https://bun.sh) (the package manager and test runner this project uses)
- A free [Cloudflare](https://dash.cloudflare.com) account
- Node 20+ (only for a couple of build scripts)

Everything runs from the `app/` directory, not the repo root.

```bash
cd app
bun install
bun run dev        # local dev server
bun run build      # production build
```

`bun run build` writes:

- `app/dist/server/server.js` — the Worker (server rendering)
- `app/dist/client/` — hashed static files (JS, CSS, images, video, menus)

## Deploying to Cloudflare Workers

`app/wrangler.jsonc` is already configured and the Worker is named `nadwasit`.

### One time

```bash
cd app
bunx wrangler login
```

### Every deploy

```bash
cd app
bun run build
bunx wrangler deploy
```

That gives you a `nadwasit.<your-subdomain>.workers.dev` URL. Check it works,
then attach your domain.

### Pointing nadwasit.com at it

1. Add `nadwasit.com` as a site in the Cloudflare dashboard and move your
   nameservers to Cloudflare (they walk you through it).
2. Workers and Pages, pick `nadwasit`, then Settings, Domains and Routes.
3. Add a custom domain: `nadwasit.com`, and again for `www.nadwasit.com`.

Cloudflare issues the TLS certificate itself. Nothing to configure.

**Before you switch the domain over**, note that your current GitHub Pages site
is served from the same domain via the `CNAME` file in your old repo. Moving
nameservers to Cloudflare replaces that. Keep the old repo until you are happy
with the new site.

## Deploying from GitHub automatically

`.github/workflows/deploy.yml` builds and deploys on every push to `main`. To
turn it on, add two repository secrets (Settings, Secrets and variables,
Actions):

- `CLOUDFLARE_API_TOKEN` — create at Cloudflare, My Profile, API Tokens, using
  the "Edit Cloudflare Workers" template
- `CLOUDFLARE_ACCOUNT_ID` — on the right side of your Cloudflare dashboard home

Until those exist the workflow will fail, which is harmless.

## One thing to change after the domain is live

`app/src/app-meta.json` holds the page title, description, favicon and the
social preview image. `og_image_url` is currently the root relative path
`/assets/og-cover.png`. Most social platforms prefer an absolute URL, so once
the domain is pointed, change it to:

```json
"og_image_url": "https://nadwasit.com/assets/og-cover.png"
```

Then rebuild and redeploy. `marketplace_cover_url` is only read by the platform
this was built on and can be deleted.

## Where the content lives

You can change most of the site without touching the layout code.

| What | File |
|---|---|
| Phone numbers, addresses, hours, branches, dishes, services, timeline, delivery apps | `app/src/site/data.ts` |
| The four chapters that read over the hero film | `app/src/scroll-scrub-scenes.ts` |
| Every colour, font and spacing value | `app/src/site/site.css` (the tokens are at the very top) |
| Page title, description, favicon, social image | `app/src/app-meta.json` |
| Which sections appear and in what order | `app/src/routes/index.tsx` |

Adding a branch is one entry in `BRANCHES` in `data.ts`. It appears in the
branch list, the emirate filter and the WhatsApp chooser automatically.

## Where the assets live

| Folder | What |
|---|---|
| `app/public/assets/brand/` | Your logo files and the favicon |
| `app/public/assets/img/` | Dish photos, branch photos, delivery posters |
| `app/public/assets/world/` | The hero film: four clips plus mobile versions and posters |
| `app/public/menus/` | All five menus, rendered page by page as images |
| `app/public/fonts/` | Archivo, Instrument Sans and JetBrains Mono, self hosted |
| `refs/` | The storyboard the hero film was shot from. Reference only, not served. |

The hero film is four clips cut from one continuous take. Scroll position drives
playback. If you ever replace it, the four clips must be consecutive cuts of a
single video or the joins will jump, and each poster image must be the exact
first frame of the clip beside it.

## Things in the repo you did not ask for

This was generated from a template that carries some infrastructure the site
does not use:

- `app/packages/` — vendored UI libraries. **Do not delete these.** The build
  imports one of them for its Tailwind setup, so removing them breaks the build.
- `app/src/module/design-inspector/` and `app/src/lib/higgsfield-error-reporting.ts`
  — a visual editor bridge and error reporter from the original platform. Inert
  once you host it yourself.
- `app/src/components/ui/`, `app/src/layouts/`, `app/src/routes/app.tsx`,
  `app/public/presets/` — unused scaffold. Safe to remove, but nothing forces you
  to.

These can all be cleaned out properly later. It was left alone deliberately: a
repo that builds is worth more than a tidy one that does not, and this cleanup
is easier to verify once you have your own build running.

## If you want it on GitHub Pages instead

It is genuinely possible. The site has no database, no forms, no server logic
at all, so it can be prerendered to static HTML. That means changing the build
to prerender the single route and emit an `index.html`, then publishing
`app/dist/client` to the `gh-pages` branch. It is a real change and needs
testing, so it was not done blind. Say the word.
