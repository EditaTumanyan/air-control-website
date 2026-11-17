/**
 * Cloudflare Worker entry.
 * Static pages come from ./out (see wrangler.jsonc). Only /api/* reaches this code.
 *
 * Secrets (Worker → Settings → Variables and Secrets):
 *   TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID
 */
import { onRequest, onRequestPost } from '../functions/api/lead';

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  TELEGRAM_BOT_TOKEN: string;
  TELEGRAM_CHAT_ID: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname === '/api/lead' || pathname === '/api/lead/') {
      const ctx = { request, env } as any;
      return request.method === 'POST' ? onRequestPost(ctx) : onRequest(ctx);
    }

    return env.ASSETS.fetch(request);
  }
};
