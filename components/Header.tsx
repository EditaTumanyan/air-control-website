// @ts-nocheck
'use client';
// Header — generated from the Air Control design. Edit the texts and layout here.
import React from 'react';
import { DCLogic, css, muteVideo } from '../lib/dc';
import PhonesCard from './PhonesCard';
import { path, switchPath } from '../lib/i18n';


const STYLES = "body{margin:0}";

export default class Header extends DCLogic {
  renderVals() {
    const s = this.state || {};
    const lang = this.props.lang ?? 'hy';
    const active = this.props.active ?? 'home';
    const T = {
      hy: { offerTag: 'Հատուկ առաջարկ', offerLong: 'Լվացում ընդամենը 15 000 ֏ + ֆրեոնի լիցքավորում և ախտորոշում՝ ՆՎԵՐ', offerShort: 'Լվացում 15 000 ֏ + նվերներ', offerMore: 'Մանրամասն', hours: 'Երկ–Կիր · 09:00–24:00', area: 'Երևան և հարակից մարզեր', urgent: 'Արագ սպասարկում՝ 1–2 օրում', cta: 'Թողնել հայտ', menu: 'Մենյու', navLabel: 'Հիմնական մենյու', langLabel: 'Լեզու',
        nav: [['services','Ծառայություններ'],['works','Տեսանյութեր'],['business','Բիզնեսի համար'],['problems','Անսարքություններ'],['about','Մեր մասին'],['contacts','Կոնտակտներ']] },
      ru: { offerTag: 'Спецпредложение', offerLong: 'Чистка всего за 15 000 ֏ + заправка фреоном и диагностика в ПОДАРОК', offerShort: 'Чистка 15 000 ֏ + подарки', offerMore: 'Подробнее', hours: 'Пн–Вс · 09:00–24:00', area: 'Ереван и прилегающие области', urgent: 'Быстрое обслуживание за 1–2 дня', cta: 'Оставить заявку', menu: 'Меню', navLabel: 'Главное меню', langLabel: 'Язык',
        nav: [['services','Услуги'],['works','Видео'],['business','Для бизнеса'],['problems','Неисправности'],['about','О нас'],['contacts','Контакты']] }
    };
    const files = { works: path(lang, '/works/'), services: path(lang, '/services/'), business: path(lang, '/business/'), problems: path(lang, '/problems/'), about: path(lang, '/about/'), contacts: path(lang, '/contacts/') };
    const t = T[lang] || T.hy;
    const pill = (on) => 'min-width: 44px; min-height: 30px; border: 0; border-radius: 999px; font-family: inherit; font-size: 12px; font-weight: 800; cursor: pointer; padding: 0 10px; ' + (on ? 'background: #F28A2E; color: #0B2236' : 'background: transparent; color: #D5E4F2');
    const open = !!s.open;
    return {
      promoHref: active === 'home' ? '#promo' : path(lang, '/') + '#promo',
      t, open,
      nav: t.nav.map(n => ({ href: files[n[0]], label: n[1], cls: n[0] === active ? 'on' : '' })),
      isHy: lang === 'hy', isRu: lang === 'ru',
      hyStyle: pill(lang === 'hy'), ruStyle: pill(lang === 'ru'),
      setHy: () => { window.location.href = switchPath(window.location.pathname, 'hy') + window.location.hash; },
      setRu: () => { window.location.href = switchPath(window.location.pathname, 'ru') + window.location.hash; },
      toggle: () => this.setState({ open: !open }),
      burgerPath: open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'
    };
  }

  render() {
    const V: any = this.renderVals() || {};
    const P = (p: string) => path(this.props.lang ?? 'hy', p);
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <header style={{ width : "100%", fontFamily : "'Manrope', 'Noto Sans Armenian', system-ui, sans-serif", color : "#0B2236" }}>
        <a href={V.promoHref} className="ann ann-shine" style={{ display : "block", background : "#F28A2E", color : "#0B2236", textDecoration : "none", fontSize : "14px", fontWeight : "700", transition : "background .2s" }}>
          <span style={{ maxWidth : "1280px", margin : "0 auto", padding : "8px 24px", display : "flex", alignItems : "center", justifyContent : "center", gap : "12px", textAlign : "center" }}>
            <span className="ann-gift" style={{ display : "inline-flex", flex : "none" }}>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h18v4H3z M5 12v9h14v-9 M12 8v13 M12 8c-2-4-6-4-6-1.5S10 8 12 8z M12 8c2-4 6-4 6-1.5S14 8 12 8z" />
              </svg>
            </span>
            <span className="ann-long">
              <b>
                {V.t?.offerTag}
              </b>
              {" · "}{V.t?.offerLong}
            </span>
            <span className="ann-short">
              <b>
                {V.t?.offerShort}
              </b>
            </span>
            <span style={{ display : "inline-flex", alignItems : "center", gap : "6px", background : "#0B2236", color : "#fff", borderRadius : "999px", padding : "4px 12px", fontSize : "13px", fontWeight : "800", whiteSpace : "nowrap", flex : "none" }}>
              {V.t?.offerMore}{" →"}
            </span>
          </span>
        </a>
        <div style={{ background : "#0B2236", color : "#D5E4F2", fontSize : "13px" }}>
          <div style={{ maxWidth : "1280px", margin : "0 auto", padding : "7px 24px", display : "flex", justifyContent : "space-between", alignItems : "center", gap : "16px" }}>
            <div className="hd-top-left" style={{ display : "flex", gap : "24px", alignItems : "center" }}>
              <span style={{ display : "inline-flex", gap : "8px", alignItems : "center" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9FC3E0" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                {V.t?.hours}
              </span>
              <span style={{ display : "inline-flex", gap : "8px", alignItems : "center" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9FC3E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </svg>
                {V.t?.area}
              </span>
            </div>
            <div className="hd-topbar" style={{ display : "flex", gap : "18px", alignItems : "center", marginLeft : "auto" }}>
              <style>{"@media (max-width:440px){.hd-topbar{gap:10px !important}.hd-topbar>a{font-size:13px}.hd-topbar>a svg{display:none}}@media (max-width:359px){.hd-tel2{display:none !important}}"}</style>
              <a href="tel:+37441559910" style={{ display : "inline-flex", gap : "8px", alignItems : "center", fontWeight : "800", color : "#fff", textDecoration : "none", whiteSpace : "nowrap" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F6A75F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
                </svg>
                {"+374 41 55 99 10"}
              </a>
              <a href="tel:+37491105887" className="hd-tel2" style={{ display : "inline-flex", gap : "8px", alignItems : "center", fontWeight : "800", color : "#fff", textDecoration : "none", whiteSpace : "nowrap" }}>
                {"+374 91 10 58 87"}
              </a>
              <span style={{ display : "inline-flex", gap : "8px", alignItems : "center", fontWeight : "700" }} className="hd-urgent">
                <span className="pulse-dot" style={{ width : "8px", height : "8px", borderRadius : "50%", background : "#F28A2E" }} />
                {V.t?.urgent}
              </span>
              <div role="group" aria-label={V.t?.langLabel} style={{ display : "flex", background : "rgba(255,255,255,.08)", borderRadius : "999px", padding : "3px" }}>
                <button type="button" onClick={V.setHy} aria-pressed={V.isHy} style={css(V.hyStyle)}>
                  {"ՀՅ"}
                </button>
                <button type="button" onClick={V.setRu} aria-pressed={V.isRu} style={css(V.ruStyle)}>
                  {"РУ"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background : "rgba(255,255,255,.86)", backdropFilter : "saturate(1.6) blur(18px)", WebkitBackdropFilter : "saturate(1.6) blur(18px)", borderBottom : "1px solid rgba(11,34,54,.08)" }}>
          <div className="hd-row" style={{ maxWidth : "1280px", margin : "0 auto", padding : "12px 24px", display : "flex", alignItems : "center", gap : "16px" }}>
            <a href={P("/")} aria-label="Air Control" style={{ display : "flex", alignItems : "center", gap : "12px", textDecoration : "none", flex : "none" }}>
              <svg className="hd-mark" aria-hidden="true" width="52" height="52" viewBox="0 0 64 64">
                <g className="spin">
                  <circle cx="29" cy="12" r="6" fill="none" stroke="#0B7CC4" strokeWidth="4" strokeDasharray="2.4 1.37" />
                  <circle cx="29" cy="12" r="5" fill="#0B7CC4" />
                  <circle cx="29" cy="12" r="2" fill="#fff" />
                </g>
                <g className="spin-r">
                  <circle cx="37" cy="17" r="4" fill="none" stroke="#F28A2E" strokeWidth="2.5" strokeDasharray="1.6 1.54" />
                  <circle cx="37" cy="17" r="3" fill="#fff" stroke="#F28A2E" strokeWidth="1" />
                </g>
                <path d="M11 24 A7 7 0 0 0 11 38 Z" fill="#F28A2E" />
                <g stroke="#F28A2E" strokeWidth="2" strokeLinecap="round">
                  <path d="M2 31h2.5" />
                  <path d="M4 25l2 1.5" />
                  <path d="M4 37l2-1.5" />
                </g>
                <rect x="17" y="35" width="32" height="6" rx="2.5" fill="#7FB3D5" />
                <rect x="14" y="22" width="38" height="16" rx="4" fill="#A9D3EF" />
                <rect x="40" y="31" width="8" height="3" rx="1" fill="#fff" />
                <g stroke="#0B7CC4" strokeWidth="1.8" strokeLinecap="round" fill="none">
                  <path d="M56 21v20" />
                  <path d="M56 31h6" />
                  <path d="M56 26l4-3" />
                  <path d="M56 36l4 3" />
                </g>
                <g stroke="#A9D3EF" strokeWidth="2" strokeLinecap="round" fill="none">
                  <path d="M24 45c-2 2.5-2 4 0 6.5s2 4 0 6.5" />
                  <path d="M33 45c-2 2.5-2 4 0 6.5s2 4 0 6.5" />
                  <path d="M42 45c-2 2.5-2 4 0 6.5s2 4 0 6.5" />
                </g>
              </svg>
              <span style={{ display : "flex", flexDirection : "column", lineHeight : "1" }}>
                <span className="hd-word" style={{ fontFamily : "'Playfair Display', Georgia, serif", fontWeight : "900", fontSize : "27px", letterSpacing : "-0.01em", whiteSpace : "nowrap" }}>
                  <span style={{ color : "#0B7CC4" }}>
                    {"Air"}
                  </span>
                  {" "}
                  <span style={{ color : "#F28A2E" }}>
                    {"Control"}
                  </span>
                </span>
                <span className="hd-sub" style={{ fontFamily : "'Noto Sans Armenian', sans-serif", fontSize : "8.5px", letterSpacing : ".12em", color : "#0A6FB0", marginTop : "6px", whiteSpace : "nowrap" }}>
                  {this.props.lang === "ru" ? "ЦЕНТР ОБСЛУЖИВАНИЯ КОНДИЦИОНЕРОВ" : "ՕԴՈՐԱԿԻՉՆԵՐԻ ՍՊԱՍԱՐԿՄԱՆ ԿԵՆՏՐՈՆ"}
                </span>
              </span>
            </a>
            <div style={{ flex : "1" }} />
            <nav className="hd-nav" aria-label={V.t?.navLabel} style={{ display : "flex", gap : "10px", alignItems : "center" }}>
              {(V.nav ?? []).map((n: any, $i7: number) => (
                <React.Fragment key={$i7}>
                  <a href={n?.href} className={n?.cls}>
                    {n?.label}
                  </a>
                </React.Fragment>
              ))}
            </nav>
            <a href="tel:+37441559910" className="hd-phone" aria-label="+374 41 55 99 10" style={{ display : "inline-flex", alignItems : "center", gap : "10px", textDecoration : "none", color : "#0B2236", fontWeight : "800", fontSize : "15px", flex : "none" }}>
              <span style={{ width : "44px", height : "44px", borderRadius : "50%", background : "#EAF4FB", display : "inline-flex", alignItems : "center", justifyContent : "center" }}>
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0A6FB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
                </svg>
              </span>
            </a>
            <a href={P("/contacts/")} className="hd-cta btn-o" style={{ padding : "13px 22px", fontSize : "15px", flex : "none", whiteSpace : "nowrap" }}>
              {V.t?.cta}
            </a>
            <button type="button" className="hd-burger" onClick={V.toggle} aria-expanded={V.open} aria-label={V.t?.menu} style={{ width : "46px", height : "46px", borderRadius : "14px", border : "1px solid rgba(11,34,54,.14)", background : "#fff", alignItems : "center", justifyContent : "center", cursor : "pointer", flex : "none" }}>
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B2236" strokeWidth="2.2" strokeLinecap="round">
                <path d={V.burgerPath} />
              </svg>
            </button>
          </div>
          {V.open ? (
            <>
              <div className="bub" style={{ maxWidth : "1280px", margin : "0 auto", padding : "8px 24px 22px", display : "flex", flexDirection : "column" }}>
                {(V.nav ?? []).map((n: any, $i8: number) => (
                  <React.Fragment key={$i8}>
                    <a href={n?.href} style={{ display : "flex", justifyContent : "space-between", alignItems : "center", padding : "16px 4px", borderBottom : "1px solid #E8F0F6", textDecoration : "none", color : "#0B2236", fontSize : "18px", fontWeight : "700" }}>
                      {n?.label}
                      <span aria-hidden="true" style={{ color : "#0A6FB0" }}>
                        {"→"}
                      </span>
                    </a>
                  </React.Fragment>
                ))}
                <a href={P("/contacts/")} className="btn-o" style={{ marginTop : "18px" }}>
                  {V.t?.cta}
                </a>
                <div style={{ marginTop : "18px" }}>
                  <PhonesCard lang={V.isRu ? "ru" : "hy"} />
                </div>
                <div style={{ display : "flex", flexDirection : "column", gap : "10px", marginTop : "16px", color : "#4A5F73", fontSize : "15px", fontWeight : "600" }}>
                  <span style={{ display : "inline-flex", gap : "10px", alignItems : "center" }}>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A6FB0" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                    {V.t?.hours}
                  </span>
                  <span style={{ display : "inline-flex", gap : "10px", alignItems : "center" }}>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A6FB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
                    {V.t?.area}
                  </span>
                  <span style={{ display : "inline-flex", gap : "10px", alignItems : "center", color : "#B85A0E" }}>
                    <span className="pulse-dot" style={{ width : "8px", height : "8px", borderRadius : "50%", background : "#F28A2E", margin : "0 4px" }} />
                    {V.t?.urgent}
                  </span>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </header>
      </>
    );
  }
}
