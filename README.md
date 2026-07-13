# The Pickle League — website

Next.js + Tailwind, deployed to Cloudflare Workers via the OpenNext adapter.
Event venues are stored in D1 and rendered on an interactive map on the
Home and Events pages.

## Local setup

```
npm install
npm run dev
```

## First-time Cloudflare setup (see chat for full walkthrough)

```
wrangler login
wrangler d1 create pickle-league-db
# copy the returned database_id into wrangler.jsonc
npm run d1:migrate:local
npm run d1:migrate:remote
wrangler secret put ADMIN_KEY   # used to protect POST /api/locations
```

## Deploy

```
npm run deploy
```

## Protecting /admin with Cloudflare Access

The add-venue form at `/admin/venues` has no built-in login — it relies
entirely on Cloudflare Access to block unauthenticated requests before they
reach the site. Set this up once, after your domain is live on Cloudflare:

1. Cloudflare dashboard → **Zero Trust** → **Access** → **Applications** →
   **Add an application** → **Self-hosted**.
2. **Application domain**: your domain, path `/admin/*`
   (this covers both `/admin/venues` and `/admin/api/locations`).
3. **Policy**: Allow → Include → **Emails** →
   - `officialkwpickleleague@gmail.com`
   - `chet@ultimatetennistraining.com`
4. **Login methods**: enable both **One-time PIN** (email code) and
   **Google** under Settings → Authentication.
5. Save. Visiting `/admin/venues` now prompts for login before showing
   anything — the page and its API route are invisible to everyone else.

Add or remove organizer emails any time from this same policy — no code
changes needed. This same `/admin/*` Access policy will also cover future
sections (e.g. `/admin/tournament`) automatically, since it matches by
path prefix.
