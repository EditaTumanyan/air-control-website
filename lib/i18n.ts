/**
 * Two languages: Armenian (default, at /) and Russian (at /ru/).
 * Components keep Armenian text in place and wrap it with L("…");
 * the Russian text lives in lib/ru/<Component>.ts, keyed by the Armenian original.
 */
export type Lang = 'hy' | 'ru';

export function tr(lang: string | undefined, RU: Record<string, string>) {
  return (s: string) => (lang === 'ru' ? (RU[s] ?? s) : s);
}

/** Internal link for the current language: "/contacts/" → "/ru/contacts/". */
export function path(lang: string | undefined, p: string) {
  if (lang !== 'ru' || !p.startsWith('/') || p.startsWith('/ru/')) return p;
  return '/ru' + p;
}

/** Same page in the other language. */
export function switchPath(pathname: string, to: Lang) {
  const base = pathname.replace(/^\/ru(\/|$)/, '/');
  return to === 'ru' ? (base === '/' ? '/ru/' : '/ru' + base) : base;
}
