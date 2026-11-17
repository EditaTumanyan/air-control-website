/**
 * Cloudflare Pages Function: POST /api/lead
 * Receives the website forms and forwards them to a Telegram group.
 *
 * Required environment variables (Cloudflare Pages → Settings → Environment variables):
 *   TELEGRAM_BOT_TOKEN – token from @BotFather
 *   TELEGRAM_CHAT_ID   – id of the group/chat that receives the requests (e.g. -1001234567890)
 */

interface Env {
  TELEGRAM_BOT_TOKEN: string;
  TELEGRAM_CHAT_ID: string;
}

const LABELS: Record<string, string> = {
  kind: 'Տեսակ',
  type: 'Հաճախորդ',
  service: 'Ծառայություն',
  'bf-name': 'Անուն',
  'bf-phone': 'Հեռախոս',
  'bf-co': 'Ընկերություն',
  'bf-units': 'Օդորակիչների քանակ',
  'bf-addr': 'Հասցե / թաղամաս',
  'bf-msg': 'Խնդիր',
  'fb-msg': 'Հաղորդագրություն',
  'fb-name': 'Անուն',
  'fb-phone': 'Հեռախոս',
  'fb-when': 'Երբ և որտեղ',
  rating: 'Գնահատական',
  anonymous: 'Անանուն',
  page: 'Էջ'
};
const SKIP = new Set(['bf-svc', 'kind', 'file', 'website']);
const MAX_FILE = 20 * 1024 * 1024;

function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) return json({ ok: false, error: 'not_configured' }, 500);

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, error: 'bad_request' }, 400);
  }
  // Honeypot against bots: a hidden "website" field must stay empty.
  if (String(form.get('website') || '').trim()) return json({ ok: true });

  const kind = String(form.get('kind') || 'booking');
  const isBiz = String(form.get('type') || '') === 'business';
  if (form.get('type')) form.set('type', isBiz ? 'Բիզնես' : 'Անհատ');
  const title = kind === 'feedback' ? '💬 <b>Բողոք / առաջարկ</b>' : isBiz ? '🏢 <b>Նոր բիզնես հայտ</b>' : '🔔 <b>Նոր հայտ կայքից</b>';
  const lines = [title, ''];
  for (const [key, value] of form.entries()) {
    if (SKIP.has(key) || typeof value !== 'string' || !value.trim()) continue;
    lines.push(`<b>${esc(LABELS[key] || key)}:</b> ${esc(value.trim().slice(0, 1500))}`);
  }
  const phone = String(form.get('bf-phone') || form.get('fb-phone') || '').replace(/[^\d+]/g, '');
  if (phone) lines.push('', `📞 <a href="tel:${esc(phone)}">${esc(phone)}</a>`);
  const text = lines.join('\n').slice(0, 4000);

  const api = `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}`;
  const res = await fetch(`${api}/sendMessage`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text, parse_mode: 'HTML', disable_web_page_preview: true })
  });
  if (!res.ok) return json({ ok: false, error: 'telegram_failed' }, 502);

  const file = form.get('file');
  if (file && typeof file !== 'string' && file.size > 0 && file.size <= MAX_FILE) {
    const isVideo = (file.type || '').startsWith('video/');
    const isImage = (file.type || '').startsWith('image/');
    const method = isImage ? 'sendPhoto' : isVideo ? 'sendVideo' : 'sendDocument';
    const field = isImage ? 'photo' : isVideo ? 'video' : 'document';
    const fd = new FormData();
    fd.set('chat_id', env.TELEGRAM_CHAT_ID);
    fd.set(field, file, file.name || 'file');
    fd.set('caption', 'Հայտին կցված ֆայլ');
    await fetch(`${api}/${method}`, { method: 'POST', body: fd }).catch(() => null);
  }

  return json({ ok: true });
};

export const onRequest: PagesFunction<Env> = async () => json({ ok: false, error: 'method_not_allowed' }, 405);
