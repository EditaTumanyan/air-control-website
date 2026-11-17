# Air Control — website

Next.js 16 static site for Air Control (AC service centre, Yerevan). Hosted on **Cloudflare Pages**. Form submissions go to **Telegram**.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export -> ./out
npm start          # serve ./out locally
```

## Structure

| Path | What |
|---|---|
| `app/` | Routes: `/`, `/services/`, `/business/`, `/problems/`, `/contacts/`, `/about/`, `/works/`, plus sitemap and robots |
| `components/` | Page components (converted from the Claude Design canvas) |
| `lib/lead.ts` | Client-side form sender (POST `/api/lead`) |
| `lib/site.ts` | Site URL, phones, description |
| `functions/api/lead.ts` | Cloudflare Pages Function: forwards form to Telegram |
| `public/assets/` | Work videos and posters |

## Deploy to Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick this repo.
2. Build settings:
   - Framework preset: *None* (or Next.js static export)
   - Build command: `npm run build`
   - Build output directory: `out`
   - Env var `NODE_VERSION` = `22`
3. **Settings → Environment variables** (Production), add as *Secret*:
   - `TELEGRAM_BOT_TOKEN`: token from @BotFather
   - `TELEGRAM_CHAT_ID`: the group/chat id that receives requests (group ids start with `-100…`)
4. Redeploy after adding the variables.

### Telegram bot

1. In Telegram open @BotFather → `/newbot` → copy the token.
2. Create a group (e.g. "Air Control — Հայտեր"), add the bot.
3. Send any message in the group, then open
   `https://api.telegram.org/bot<TOKEN>/getUpdates` and copy `chat.id`.

### Domain (bought at name.am)

1. Cloudflare → **Add a site** → enter the domain → Free plan. Cloudflare shows 2 nameservers.
2. name.am → domain management → **Nameservers** → replace with the 2 Cloudflare nameservers.
3. When the zone is active: Pages project → **Custom domains** → add `aircontrol.am` and `www.aircontrol.am`.
4. If the domain differs from `aircontrol.am`, update `SITE_URL` in `lib/site.ts`.

## Still to do

- Client logos (Business / About pages)
- Confirm the final domain
