'use client';
// Phone field with a country-code picker (default Armenia +374).
// The picker is a native <select> (good on phones) laid over a compact "🇦🇲 +374 ▾" label.
// sendForm() sends `<id>-cc` (country) and `<id>` (number); the server joins them (functions/api/lead.ts).
import React from 'react';
import { DIAL, TOP, flag } from '../lib/countries';
import { NAMES_HY, NAMES_RU } from '../lib/countryNames';

type Props = { id: string; lang?: string; required?: boolean; placeholder?: string; inputStyle?: React.CSSProperties };

function names(lang: string) {
  const map = lang === 'ru' ? NAMES_RU : NAMES_HY;
  return (iso: string) => map[iso] || iso;
}

export default function PhoneInput({ id, lang = 'hy', required, placeholder, inputStyle }: Props) {
  const [iso, setIso] = React.useState('AM');
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => setReady(true), []);
  const name = React.useMemo(() => names(lang), [lang]);
  const options = React.useMemo(() => {
    const top = TOP.map((c) => DIAL.find((d) => d[0] === c)!).filter(Boolean);
    const rest = DIAL.filter((d) => !TOP.includes(d[0])).sort((a, b) => name(a[0]).localeCompare(name(b[0]), lang === 'ru' ? 'ru' : 'hy'));
    return { top, rest };
  }, [name, lang]);
  const dial = (DIAL.find((d) => d[0] === iso) || ['AM', '374'])[1];
  const label = lang === 'ru' ? 'Код страны' : 'Երկրի կոդ';
  const opt = (d: [string, string]) => (
    <option key={d[0]} value={d[0]}>{flag(d[0]) + ' ' + name(d[0]) + ' (+' + d[1] + ')'}</option>
  );
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <div style={{ position: 'relative', flex: 'none' }}>
        <span aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', height: '54px', padding: '0 12px', border: '1.5px solid #D5E2EE', borderRadius: '14px', background: '#F7FAFD', fontWeight: 700, fontSize: '16px', color: '#0B2236', whiteSpace: 'nowrap' }}>
          <span style={{ fontSize: '18px' }}>{flag(iso)}</span>+{dial}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4A5F73" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
        </span>
        <select id={id + '-cc'} aria-label={label} value={iso} onChange={(e) => setIso(e.target.value)}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer', fontSize: '16px' }}>
          {ready ? (
            <>
              <optgroup label="★">{options.top.map(opt)}</optgroup>
              <optgroup label={lang === 'ru' ? 'Все страны' : 'Բոլոր երկրները'}>{options.rest.map(opt)}</optgroup>
            </>
          ) : (
            <option value="AM">{flag('AM') + ' (+374)'}</option>
          )}
        </select>
      </div>
      <input id={id} type="tel" required={required} autoComplete="tel-national" inputMode="tel"
        placeholder={placeholder ?? (iso === 'AM' ? '__ ___ ___' : '')}
        style={{ flex: 1, minWidth: 0, height: '54px', border: '1.5px solid #D5E2EE', borderRadius: '14px', padding: '0 16px', fontFamily: 'inherit', fontSize: '16px', background: '#F7FAFD', color: '#0B2236', ...inputStyle }} />
    </div>
  );
}
