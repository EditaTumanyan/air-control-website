'use client';

/**
 * Sends a form (booking request or feedback) to /api/lead,
 * which forwards it to the company's Telegram group (see functions/api/lead.ts).
 */
export async function sendForm(kind: 'booking' | 'feedback', form: HTMLFormElement, extra: Record<string, string> = {}) {
  const data = new FormData();
  data.set('kind', kind);
  data.set('page', typeof window !== 'undefined' ? window.location.pathname : '');

  for (const el of Array.from(form.elements) as HTMLInputElement[]) {
    const key = el.name || el.id;
    if (!key || el.disabled) continue;
    if (el.type === 'file') {
      if (el.files && el.files[0]) data.set('file', el.files[0]);
      continue;
    }
    if (el.type === 'checkbox' || el.type === 'radio') {
      if (!el.checked) continue;
    }
    if (el.tagName === 'SELECT') {
      const sel = el as unknown as HTMLSelectElement;
      data.set(key, sel.options[sel.selectedIndex]?.text ?? sel.value);
      continue;
    }
    if (typeof el.value === 'string' && el.value.trim()) data.set(key, el.value.trim());
  }
  for (const [k, v] of Object.entries(extra)) if (v) data.set(k, v);

  const res = await fetch('/api/lead', { method: 'POST', body: data });
  if (!res.ok) throw new Error('Request failed: ' + res.status);
  return res.json().catch(() => ({}));
}

export function sendErrorText(lang?: string) {
  return lang === 'ru'
    ? 'Не удалось отправить. Пожалуйста, позвоните нам: +374 41 55 99 10'
    : 'Չհաջողվեց ուղարկել։ Խնդրում ենք զանգահարել՝ +374 41 55 99 10';
}
