'use client';
// "Before / after" cleaning comparison with a slider. Shown on the Videos (works) page.
import React from 'react';
import { css } from '../lib/dc';

const T = {
  hy: {
    baEyebrow: 'Առաջ և հետո', baTitle: 'Ի՞նչ է տալիս օդորակիչի լվացումը', baSub: 'Ներքին բլոկի ռադիատորը մինչև և լվացումից հետո։ Քաշեք սահիչը։',
    before: 'Առաջ', after: 'Հետո', baAria: 'Համեմատել առաջ և հետո',
    baList: [['−30%', 'էլեկտրաէներգիայի ծախս'], ['100%', 'բորբոսի և հոտի վերացում'], ['2×', 'ավելի ուժեղ օդահոսք']]
  },
  ru: {
    baEyebrow: 'До и после', baTitle: 'Что даёт чистка кондиционера', baSub: 'Радиатор внутреннего блока до и после чистки. Потяните ползунок.',
    before: 'До', after: 'После', baAria: 'Сравнить до и после',
    baList: [['−30%', 'расход электроэнергии'], ['100%', 'удаление плесени и запаха'], ['2×', 'более сильный поток воздуха']]
  }
};

const CSS = '.twinkle{transform-box:fill-box;transform-origin:center;animation:ba-twinkle 2.2s ease-in-out infinite}@keyframes ba-twinkle{0%,100%{opacity:0;transform:scale(.4)}50%{opacity:1;transform:scale(1)}}@media (prefers-reduced-motion:reduce){.twinkle{animation:none}}';

export default function BeforeAfter({ lang = 'hy' }: { lang?: string }) {
  const t = lang === 'ru' ? T.ru : T.hy;
  const [pos, setPos] = React.useState(50);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <section id="ba" className="sec" style={{ padding : "72px 24px", background : "#fff" }}>
          <div style={{ maxWidth : "1280px", margin : "0 auto", display : "flex", flexWrap : "wrap", gap : "56px", alignItems : "center" }}>
            <div className="rv" style={{ flex : "1 1 400px", minWidth : "0" }}>
              <div style={{ fontSize : "14px", fontWeight : "800", letterSpacing : ".12em", textTransform : "uppercase", color : "#B85A0E", marginBottom : "12px" }}>
                {t.baEyebrow}
              </div>
              <h2 className="h2x" style={{ margin : "0 0 14px", fontSize : "48px", lineHeight : "1.1", letterSpacing : "-0.03em", fontWeight : "800" }}>
                {t.baTitle}
              </h2>
              <p style={{ margin : "0 0 30px", fontSize : "17px", lineHeight : "1.6", color : "#4A5F73" }}>
                {t.baSub}
              </p>
              {t.baList.map((bl, $i7) => (
                <React.Fragment key={$i7}>
                  <div style={{ display : "flex", gap : "16px", alignItems : "center", padding : "14px 0", borderTop : "1px solid #E8F0F6" }}>
                    <span style={{ fontSize : "26px", fontWeight : "800", color : "#0A6FB0", minWidth : "92px" }}>
                      {bl[0]}
                    </span>
                    <span style={{ fontSize : "16px", fontWeight : "600", color : "#3F566B" }}>
                      {bl[1]}
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div className="rv" style={{ flex : "1 1 600px", minWidth : "0", position : "relative", height : "440px", borderRadius : "32px", overflow : "hidden", boxShadow : "0 40px 80px -40px rgba(11,34,54,.5)" }}>
              <svg aria-hidden="true" viewBox="0 0 600 440" preserveAspectRatio="xMidYMid slice" style={{ position : "absolute", inset : "0", width : "100%", height : "100%" }}>
                <defs>
                  <pattern id="finC" width="12" height="440" patternUnits="userSpaceOnUse">
                    <rect width="12" height="440" fill="#E9F4FC" />
                    <rect x="5" width="2.5" height="440" fill="#A9CDE6" />
                  </pattern>
                </defs>
                <rect width="600" height="440" fill="url(#finC)" />
                <g fill="#C98A4B">
                  <rect y="70" width="600" height="16" rx="8" />
                  <rect y="190" width="600" height="16" rx="8" />
                  <rect y="310" width="600" height="16" rx="8" />
                </g>
                <g fill="#fff">
                  <path className="twinkle" d="M430 120 l6 14 14 6 -14 6 -6 14 -6 -14 -14 -6 14 -6z" />
                  <path className="twinkle" style={{ animationDelay : ".7s" }} d="M520 250 l5 11 11 5 -11 5 -5 11 -5 -11 -11 -5 11 -5z" />
                  <path className="twinkle" style={{ animationDelay : "1.3s" }} d="M360 370 l4 9 9 4 -9 4 -4 9 -4 -9 -9 -4 9 -4z" />
                </g>
              </svg>
              <div aria-hidden="true" style={css(`position: absolute; inset: 0; clip-path: inset(0 ${100 - pos}% 0 0)`)}>
                <svg viewBox="0 0 600 440" preserveAspectRatio="xMidYMid slice" style={{ position : "absolute", inset : "0", width : "100%", height : "100%" }}>
                  <defs>
                    <pattern id="finD" width="12" height="440" patternUnits="userSpaceOnUse">
                      <rect width="12" height="440" fill="#9A8D7B" />
                      <rect x="5" width="2.5" height="440" fill="#7A6D5C" />
                    </pattern>
                    <filter id="grime">
                      <feTurbulence type="fractalNoise" baseFrequency=".018" numOctaves="3" seed="4" />
                      <feColorMatrix values="0 0 0 0 .3  0 0 0 0 .25  0 0 0 0 .18  0 0 0 1.4 -.55" />
                    </filter>
                  </defs>
                  <rect width="600" height="440" fill="url(#finD)" />
                  <g fill="#8D6A44">
                    <rect y="70" width="600" height="16" rx="8" />
                    <rect y="190" width="600" height="16" rx="8" />
                    <rect y="310" width="600" height="16" rx="8" />
                  </g>
                  <rect width="600" height="440" filter="url(#grime)" opacity=".85" />
                  <g fill="#4F4335" opacity=".45">
                    <ellipse cx="120" cy="140" rx="70" ry="34" />
                    <ellipse cx="260" cy="270" rx="90" ry="40" />
                    <ellipse cx="90" cy="360" rx="60" ry="26" />
                  </g>
                </svg>
              </div>
              <div aria-hidden="true" style={css(`position: absolute; top: 0; bottom: 0; left: ${pos}%; width: 3px; margin-left: -1.5px; background: #fff; box-shadow: 0 0 0 1px rgba(11,34,54,.1)`)}>
                <span style={{ position : "absolute", top : "50%", left : "50%", width : "56px", height : "56px", margin : "-28px 0 0 -28px", borderRadius : "50%", background : "#fff", display : "flex", alignItems : "center", justifyContent : "center", boxShadow : "0 10px 30px -8px rgba(11,34,54,.6)" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0B2236" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
              <span aria-hidden="true" style={{ position : "absolute", left : "20px", top : "20px", background : "rgba(11,34,54,.78)", color : "#fff", borderRadius : "999px", padding : "8px 16px", fontWeight : "800", fontSize : "14px" }}>
                {t.before}
              </span>
              <span aria-hidden="true" style={{ position : "absolute", right : "20px", top : "20px", background : "#fff", color : "#0A6FB0", borderRadius : "999px", padding : "8px 16px", fontWeight : "800", fontSize : "14px" }}>
                {t.after}
              </span>
              <input type="range" min="0" max="100" value={pos} onChange={(e) => setPos(+e.target.value)} aria-label={t.baAria} style={{ position : "absolute", inset : "0", width : "100%", height : "100%", margin : "0", opacity : "0", cursor : "ew-resize" }} />
            </div>
          </div>
        </section>
    </>
  );
}
