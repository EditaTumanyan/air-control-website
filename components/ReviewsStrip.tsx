'use client';
// Customer reviews strip (same look as on the home page). Data: lib/reviews.ts.
import React from 'react';
import { reviewRows, cardWidth } from '../lib/reviews';
import { path } from '../lib/i18n';

const CSS =
  '.rs-wrap{overflow:hidden;margin:0 -24px;padding:12px 0;-webkit-mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)}' +
  '.rs-track{display:flex;gap:20px;width:max-content;animation:rs-marq linear infinite}' +
  '.rs-wrap:hover .rs-track{animation-play-state:paused}' +
  '@keyframes rs-marq{to{transform:translateX(-50%)}}' +
  '.rs-card{transition:transform .4s cubic-bezier(.2,.8,.2,1),box-shadow .4s}.rs-card:hover{transform:translateY(-6px);box-shadow:0 30px 60px -30px rgba(11,34,54,.4)}' +
  '@media (max-width:760px){.rs-card{flex-basis:300px !important;width:300px !important}.rs-track{align-items:flex-start}.rs-card figcaption{flex-wrap:wrap}.rs-card figcaption>span:nth-child(2){min-width:150px !important}.rs-h2{font-size:32px !important}}' +
  '@media (prefers-reduced-motion:reduce){.rs-track{animation:none}}';

const T = {
  hy: { eyebrow: 'Կարծիքներ', title: 'Ինչ են ասում հաճախորդները', boxTitle: 'Արդեն մեր հաճախորդն եք', boxSub: 'Կիսվեք ձեր կարծիքով, մեզ համար դա կարևոր է', cta: 'Թողնել կարծիք' },
  ru: { eyebrow: 'Отзывы', title: 'Что говорят клиенты', boxTitle: 'Уже наш клиент?', boxSub: 'Поделитесь отзывом — для нас это важно', cta: 'Оставить отзыв' }
};

export default function ReviewsStrip({ lang = 'hy' }: { lang?: string }) {
  const t = lang === 'ru' ? T.ru : T.hy;
  const rows = reviewRows(lang);
  const loop = rows.concat(rows);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px' }}>
        <div style={{ maxWidth: '640px' }}>
          <div style={{ fontSize: '14px', fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: '#B85A0E', marginBottom: '12px' }}>{t.eyebrow}</div>
          <h2 className="h2x rs-h2" style={{ margin: 0, fontSize: '48px', lineHeight: 1.1, letterSpacing: '-0.03em', fontWeight: 800 }}>{t.title}</h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: '#F4F8FC', borderRadius: '22px', padding: '16px 22px', flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 800, fontSize: '17px' }}>{t.boxTitle}</span>
            <span style={{ fontSize: '14px', color: '#4A5F73', marginTop: '4px' }}>{t.boxSub}</span>
          </span>
          <a href={path(lang, '/contacts/') + '#feedback'} className="btn-w" style={{ padding: '12px 18px', fontSize: '14px' }}>{t.cta}</a>
        </div>
      </div>
      <div className="rs-wrap">
        <div className="rs-track" style={{ animationDuration: rows.length * 8 + 's' }}>
          {loop.map((r, i) => {
            const [q, n, , tag, initial, color] = r as string[];
            const w = cardWidth(q);
            return (
              <figure key={i} className="rs-card" aria-hidden={i >= rows.length} style={{ flex: '0 0 ' + w, width: w, margin: 0, background: '#F4F8FC', borderRadius: '24px', padding: '22px 24px', display: 'flex', flexDirection: 'column', border: '1px solid #E1ECF5' }}>
                <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="#A9D3EF">
                  <path d="M4 18v-5c0-4 2-7 6-8l1 2c-2 1-3 3-3 5h3v6H4zm9 0v-5c0-4 2-7 6-8l1 2c-2 1-3 3-3 5h3v6h-7z" />
                </svg>
                <blockquote style={{ margin: '10px 0 16px', fontSize: '16px', lineHeight: 1.5, flex: 1 }}>{q}</blockquote>
                <figcaption style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ width: '46px', height: '46px', borderRadius: '50%', background: color, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flex: 'none' }}>{initial}</span>
                  <span style={{ flex: 1, minWidth: 0, fontWeight: 800 }}>{n}</span>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#0A6FB0', background: '#fff', borderRadius: '999px', padding: '6px 12px' }}>{tag}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </>
  );
}
