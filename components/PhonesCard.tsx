import React from 'react';

export const PHONES = [
  { n: '+374 41 55 99 10', d: '37441559910' },
  { n: '+374 91 10 58 87', d: '37491105887' }
];

const T = {
  hy: { title: 'Հեռախոս · WhatsApp · Viber', sub: 'Երկու համարն էլ հասանելի են զանգի և չատի համար', call: 'Զանգ' },
  ru: { title: 'Телефон · WhatsApp · Viber', sub: 'Оба номера доступны для звонков и чатов', call: 'Позвонить' }
};

const chip = (bg: string, fg: string): React.CSSProperties => ({
  padding: '7px 12px', borderRadius: '999px', background: bg, color: fg, fontWeight: 700, fontSize: '13px', textDecoration: 'none', whiteSpace: 'nowrap'
});

/** One card listing both numbers, each with Call / WhatsApp / Viber buttons. */
export default function PhonesCard({ lang = 'hy', className = '' }: { lang?: string; className?: string }) {
  const t = lang === 'ru' ? T.ru : T.hy;
  return (
    <div className={className} style={{ background: '#fff', border: '1px solid #E1ECF5', borderRadius: '22px', padding: '18px 20px', color: '#0B2236' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ width: '50px', height: '50px', borderRadius: '16px', background: '#EAF4FB', color: '#0A6FB0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
          </svg>
        </span>
        <span style={{ minWidth: 0 }}>
          <span style={{ display: 'block', fontWeight: 800, fontSize: '17px' }}>{t.title}</span>
          <span style={{ display: 'block', fontSize: '13px', color: '#4A5F73', fontWeight: 600, marginTop: '2px' }}>{t.sub}</span>
        </span>
      </div>
      {PHONES.map((p) => (
        <div key={p.d} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginTop: '14px', paddingTop: '14px', borderTop: '1px solid #E1ECF5' }}>
          <a href={'tel:+' + p.d} style={{ fontWeight: 800, fontSize: '18px', color: '#0B2236', textDecoration: 'none', whiteSpace: 'nowrap' }}>{p.n}</a>
          <span style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <a href={'tel:+' + p.d} className="chip" style={chip('#EAF4FB', '#0A6FB0')}>{t.call}</a>
            <a href={'https://wa.me/' + p.d} target="_blank" rel="noopener noreferrer" className="chip" style={chip('#E3F9EC', '#1F7A4D')}>WhatsApp</a>
            <a href={'viber://chat?number=%2B' + p.d} className="chip" style={chip('#EFEAFB', '#5B3FA8')}>Viber</a>
          </span>
        </div>
      ))}
    </div>
  );
}
