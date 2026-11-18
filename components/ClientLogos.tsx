'use client';
// Moving strip of client logos ("Մեզ վստահում են" / "Нам доверяют").
// Used on the Business page and in the home page "Ում ենք սպասարկում" section.
// The client list lives in lib/clients.ts.
import React from 'react';
import { CLIENTS, SLOTS } from '../lib/clients';

const CSS =
  '.cl-wrap{overflow:hidden;padding:8px 0;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}' +
  '.cl-track{display:flex;gap:16px;width:max-content;animation:cl-marq linear infinite}' +
  '.cl-wrap:hover .cl-track{animation-play-state:paused}' +
  '@keyframes cl-marq{to{transform:translateX(-50%)}}' +
  '@media (prefers-reduced-motion:reduce){.cl-track{animation:none}}';

const card: React.CSSProperties = {
  flex: '0 0 240px', height: '96px', borderRadius: '20px', background: '#fff', display: 'flex',
  flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '10px 14px'
};

export default function ClientLogos({ lang = 'hy', title = true, bleed = true }: { lang?: string; title?: boolean; bleed?: boolean }) {
  const ru = lang === 'ru';
  const real = CLIENTS.map((c) => ({
    name: ru ? c.nameRu : c.name,
    alt: (ru ? c.fullRu : c.full) || (ru ? c.nameRu : c.name),
    logo: c.logo,
    framed: !!c.framed
  }));
  const empty = Math.max(0, SLOTS - real.length);
  const ph = Array.from({ length: empty }, (_, i) => (ru ? `[Логотип клиента ${real.length + i + 1}]` : `[Հաճախորդի լոգո ${real.length + i + 1}]`));
  const items: ({ name: string; alt: string; logo: string; framed: boolean } | string)[] = [...real, ...ph];
  const loop = items.concat(items);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      {title ? (
        <div style={{ textAlign: 'center', fontSize: '14px', fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: '#4A5F73', marginBottom: '20px' }}>
          {ru ? 'Нам доверяют' : 'Մեզ վստահում են'}
        </div>
      ) : null}
      <div className="cl-wrap" style={bleed ? { margin: '0 -24px' } : undefined}>
        <div className="cl-track" style={{ animationDuration: items.length * 5 + 's' }}>
          {loop.map((l, i) =>
            typeof l === 'string' ? (
              <div key={i} aria-hidden={i >= items.length} style={{ ...card, border: '1.5px dashed #C3D6E6', color: '#6B7F92', fontWeight: 700, fontSize: '15px' }}>
                {l}
              </div>
            ) : (
              <div key={i} aria-hidden={i >= items.length} style={{ ...card, border: '1.5px solid #E1ECF5' }}>
                <img src={l.logo} alt={l.alt} style={{ maxHeight: '52px', maxWidth: '160px', objectFit: 'contain', borderRadius: l.framed ? '10px' : undefined }} />
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#4A5F73', whiteSpace: 'nowrap' }}>{l.name}</span>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
