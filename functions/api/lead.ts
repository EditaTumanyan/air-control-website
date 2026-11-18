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
const SKIP = new Set(['bf-svc', 'kind', 'file', 'website', 'bf-phone-cc', 'fb-phone-cc']);
const MAX_FILE = 45 * 1024 * 1024; // Telegram bots can upload up to 50 MB

async function sendFile(api: string, chatId: string, method: string, field: string, file: File) {
  const fd = new FormData();
  fd.set('chat_id', chatId);
  fd.set(field, file, file.name || 'file');
  fd.set('caption', 'Հայտին կցված ֆայլ');
  const res = await fetch(`${api}/${method}`, { method: 'POST', body: fd }).catch(() => null);
  return !!res && res.ok;
}

async function sendText(api: string, chatId: string, text: string) {
  await fetch(`${api}/sendMessage`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text })
  }).catch(() => null);
}

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

  // Phone fields come as country ("🇦🇲 Armenia (+374)") + national number: join them.
  for (const f of ['bf-phone', 'fb-phone']) {
    const num = String(form.get(f) || '').trim();
    const cc = (String(form.get(f + '-cc') || '').match(/\+\d+/) || [''])[0];
    if (num && cc && !/^(\+|00)/.test(num)) form.set(f, cc + ' ' + num.replace(/^0+/, ''));
  }
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

  const file = form.get('file') as unknown as File | string | null;
  if (file && typeof file !== 'string' && file.size > 0) {
    if (file.size > MAX_FILE) {
      await sendText(api, env.TELEGRAM_CHAT_ID, `⚠️ Հաճախորդը կցել էր ֆայլ (${Math.round(file.size / 1048576)} ՄԲ), բայց այն չափազանց մեծ է։ Խնդրեք ուղարկել WhatsApp/Viber-ով։`);
    } else {
      const type = file.type || '';
      // sendPhoto only accepts common formats up to 10 MB; anything else goes as video/document.
      const isPhoto = /^image\/(jpeg|png|webp|gif)$/.test(type) && file.size <= 10 * 1024 * 1024;
      const isVideo = type.startsWith('video/');
      const first = isPhoto ? ['sendPhoto', 'photo'] : isVideo ? ['sendVideo', 'video'] : ['sendDocument', 'document'];
      let ok = await sendFile(api, env.TELEGRAM_CHAT_ID, first[0], first[1], file);
      if (!ok && first[0] !== 'sendDocument') ok = await sendFile(api, env.TELEGRAM_CHAT_ID, 'sendDocument', 'document', file);
      if (!ok) await sendText(api, env.TELEGRAM_CHAT_ID, '⚠️ Հաճախորդի կցած ֆայլը չհաջողվեց ուղարկել։ Խնդրեք ուղարկել WhatsApp/Viber-ով։');
    }
  }

  return json({ ok: true });
};

export const onRequest: PagesFunction<Env> = async () => json({ ok: false, error: 'method_not_allowed' }, 405);
