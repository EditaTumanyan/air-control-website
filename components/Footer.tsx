// @ts-nocheck
'use client';
// Footer — generated from the Air Control design. Edit the texts and layout here.
import React from 'react';
import { DCLogic, css, muteVideo } from '../lib/dc';
import Feedback from './Feedback';

const STYLES = "body{margin:0}";

export default class Footer extends DCLogic {
  componentDidMount() {
    let min = false;
    try { min = sessionStorage.getItem('ac_offer_min') === '1'; } catch (e) {}
    this.setState({ min });
    this._onScroll = () => { if (!(this.state && this.state.shown) && window.scrollY > 500) this.setState({ shown: true }); };
    window.addEventListener('scroll', this._onScroll, { passive: true });
    this._timer = setTimeout(() => this.setState({ shown: true }), 7000);
    this._fb = (e) => this.setState({ fbOpen: true, fbType: (e && e.detail) || 'complaint' });
    window.addEventListener('ac:feedback', this._fb);
  }
  componentWillUnmount() { window.removeEventListener('scroll', this._onScroll); window.removeEventListener('ac:feedback', this._fb); clearTimeout(this._timer); }
  renderVals() {
    const st = this.state || {};
    const mobile = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(max-width: 760px)').matches;
    const shown = !!st.shown, min = !!st.min;
    const lang = this.props.lang ?? 'hy';
    const T = {
      hy: { fbEyebrow: 'Հետադարձ կապ', fbTitle: 'Բողոքներ և առաջարկություններ', fbThanks: 'Թողնել կարծիք', ofTag: 'Հատուկ առաջարկ', ofTitle: 'Լվացում (ներսի և դրսի բլոկ)', ofOld: '30 000 ֏', ofPrice: '15 000 ֏', ofG1: 'Ֆրեոնի լիցքավորում (մինչև 300 գ)՝ նվեր', ofG2: 'Օդորակիչի ախտորոշում՝ նվեր', ofCta: 'Պատվիրել հիմա', ofPill: '15 000 ֏ + նվերներ', ofClose: 'Փակել', ctaTitle: 'Խնդիր կա՞ օդորակիչի հետ։', ctaSub: 'Թողեք հայտ կամ զանգահարեք․ մեր մասնագետը կայցելի 1–2 օրվա ընթացքում։', cta: 'Թողնել հայտ',
        about: 'Օդորակիչների տեղադրում, վերանորոգում և սպասարկում Երևանում և հարակից մարզերում՝ 2014 թվականից։',
        colSvc: 'Ծառայություններ', colCo: 'Ընկերություն', colContact: 'Կոնտակտներ',
        svcLinks: ['Տեղադրում և ապամոնտաժում','Վերանորոգում','Լվացում և ախտահանում','Ֆրեոնի լիցքավորում','Խողովակների զոդում և մոնտաժ','Ակոսների փորում'],
        co: [['Մեր աշխատանքները','/works/'],['Բիզնեսի համար','/business/'],['Խնդիրներ և լուծումներ','/problems/'],['Մեր մասին','/about/'],['Կոնտակտներ','/contacts/'],['Գներ','/services/']],
        address: 'Երևան և հարակից մարզեր', hours: 'Երկ–Կիր · 09:00–24:00', urgent: 'Արագ սպասարկում՝ 1–2 օրում', rights: 'Բոլոր իրավունքները պաշտպանված են։', privacy: 'Գաղտնիության քաղաքականություն', terms: 'Երաշխիքի պայմաններ' },
      ru: { fbEyebrow: 'Обратная связь', fbTitle: 'Жалобы и предложения', fbThanks: 'Оставить отзыв', ofTag: 'Спецпредложение', ofTitle: 'Чистка (внутренний и наружный блок)', ofOld: '30 000 ֏', ofPrice: '15 000 ֏', ofG1: 'Заправка фреоном (до 300 г) — в подарок', ofG2: 'Диагностика кондиционера — в подарок', ofCta: 'Заказать сейчас', ofPill: '15 000 ֏ + подарки', ofClose: 'Закрыть', ctaTitle: 'Проблема с кондиционером?', ctaSub: 'Оставьте заявку или позвоните — наш специалист приедет в течение 1–2 дней.', cta: 'Оставить заявку',
        about: 'Установка, ремонт и обслуживание кондиционеров в Ереване и прилегающих областях с 2014 года.',
        colSvc: 'Услуги', colCo: 'Компания', colContact: 'Контакты',
        svcLinks: ['Установка и демонтаж','Ремонт','Чистка и дезинфекция','Заправка фреоном','Пайка и монтаж трассы','Штробление стен'],
        co: [['Наши работы','/works/'],['Для бизнеса','/business/'],['Проблемы и решения','/problems/'],['О нас','/about/'],['Контакты','/contacts/'],['Цены','/services/']],
        address: 'Ереван и прилегающие области', hours: 'Пн–Вс · 09:00–24:00', urgent: 'Быстрое обслуживание за 1–2 дня', rights: 'Все права защищены.', privacy: 'Политика конфиденциальности', terms: 'Условия гарантии' }
    };
    const t = T[lang] || T.hy;
    return {
      fbOpen: !!st.fbOpen, fbType: st.fbType || 'complaint',
      fbTitle: st.fbType === 'thanks' ? t.fbThanks : t.fbTitle,
      fbClose: () => this.setState({ fbOpen: false }),
      openComplaint: () => this.setState({ fbOpen: true, fbType: 'complaint' }),
      showCard: shown && !min && !mobile,
      showPill: shown && (min || mobile),
      minimize: () => { try { sessionStorage.setItem('ac_offer_min', '1'); } catch (e) {} this.setState({ min: true }); },
      pillClick: (e) => { if (!mobile) { e.preventDefault(); try { sessionStorage.removeItem('ac_offer_min'); } catch (er) {} this.setState({ min: false }); } },
      t,
      coLinks: t.co.map(c => ({ label: c[0], href: c[1] })),
      socials: [
        { name: 'Facebook', href: 'https://www.facebook.com/share/19jo4Xdg5S/', d: 'M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H6.5v3.5H9V21h3.5v-8.5H15l.5-3.5h-3V7a1 1 0 0 1 1-1H15z' },
        { name: 'Instagram', href: 'https://www.instagram.com/air_control_ac_service_/', d: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M17.5 6.5h.01' },
        { name: 'TikTok', href: 'https://www.tiktok.com/@air.control4', d: 'M14 3v11a4 4 0 1 1-4-4 M14 3c0 3 2.5 5 6 5' },
        { name: 'Viber', href: 'viber://chat?number=%2B37491105887', d: 'M12 3a8.5 8.5 0 0 0-7.2 13L4 21l5-1.3A8.5 8.5 0 1 0 12 3z' },
        { name: 'WhatsApp', href: 'https://wa.me/37491105887', d: 'M3 21l1.7-5A8.5 8.5 0 1 1 8 19.6L3 21z' }
      ]
    };
  }

  render() {
    const V: any = this.renderVals() || {};
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <footer style={{ width : "100%", fontFamily : "'Manrope', 'Noto Sans Armenian', system-ui, sans-serif", color : "#C2D3E2", background : "#0B2236", padding : "0 24px", position : "relative", overflow : "hidden" }}>
        <div style={{ maxWidth : "1280px", margin : "0 auto", position : "relative", top : "0", paddingTop : "72px" }}>
          <div style={{ background : "#0A6FB0", borderRadius : "36px", padding : "48px 56px", display : "flex", flexWrap : "wrap", gap : "28px", alignItems : "center", justifyContent : "space-between", position : "relative", overflow : "hidden" }}>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="spin" style={{ position : "absolute", right : "26%", top : "-60px", width : "260px", height : "260px", opacity : ".14", animationDuration : "60s" }} fill="none" stroke="#fff" strokeWidth="1" strokeLinecap="round">
              <path d="M12 2v20M4.9 7l14.2 10M4.9 17L19.1 7M9 4l3 2 3-2M9 20l3-2 3 2" />
            </svg>
            <div style={{ position : "relative", maxWidth : "640px" }}>
              <div style={{ fontSize : "38px", lineHeight : "1.12", fontWeight : "800", letterSpacing : "-0.03em", color : "#fff" }}>
                {V.t?.ctaTitle}
              </div>
              <div style={{ fontSize : "17px", color : "#D9EAF7", marginTop : "10px" }}>
                {V.t?.ctaSub}
              </div>
            </div>
            <div style={{ position : "relative", display : "flex", flexWrap : "wrap", gap : "12px" }}>
              <a href="/contacts/" className="btn-o">
                {V.t?.cta}
              </a>
              <a href="tel:+37441559910" className="btn-w btn-ghost">
                {"+374 41 55 99 10"}
              </a>
            </div>
          </div>
          <div style={{ display : "grid", gridTemplateColumns : "repeat(auto-fit, minmax(210px, 1fr))", gap : "40px", padding : "64px 0 48px" }}>
            <div>
              <a href="/" aria-label="Air Control" style={{ textDecoration : "none", display : "inline-flex", flexDirection : "column", lineHeight : "1" }}>
                <span style={{ fontFamily : "'Playfair Display', Georgia, serif", fontWeight : "900", fontSize : "32px" }}>
                  <span style={{ color : "#4BA8E8" }}>
                    {"Air"}
                  </span>
                  {" "}
                  <span style={{ color : "#F28A2E" }}>
                    {"Control"}
                  </span>
                </span>
                <span style={{ fontFamily : "'Noto Sans Armenian', sans-serif", fontSize : "10px", letterSpacing : ".12em", color : "#9FC3E0", marginTop : "8px" }}>
                  {"ՕԴՈՐԱԿԻՉՆԵՐԻ ՍՊԱՍԱՐԿՄԱՆ ԿԵՆՏՐՈՆ"}
                </span>
              </a>
              <p style={{ margin : "20px 0 22px", lineHeight : "1.6", fontSize : "15px" }}>
                {V.t?.about}
              </p>
              <div style={{ display : "flex", gap : "10px" }}>
                {(V.socials ?? []).map((so: any, $i8: number) => (
                  <React.Fragment key={$i8}>
                    <a href={so?.href} aria-label={so?.name} target={so?.href?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ width : "44px", height : "44px", borderRadius : "14px", background : "rgba(255,255,255,.07)", border : "1px solid rgba(255,255,255,.1)", display : "inline-flex", alignItems : "center", justifyContent : "center", color : "#fff" }}>
                      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d={so?.d} />
                      </svg>
                    </a>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div>
              <div style={{ color : "#fff", fontWeight : "800", fontSize : "16px", marginBottom : "18px" }}>
                {V.t?.colSvc}
              </div>
              {(V.t?.svcLinks ?? []).map((l: any, $i7: number) => (
                <React.Fragment key={$i7}>
                  <a href="/services/" className="ft-link" style={{ display : "block", color : "#C2D3E2", padding : "6px 0", fontSize : "15px" }}>
                    {l}
                  </a>
                </React.Fragment>
              ))}
            </div>
            <div>
              <div style={{ color : "#fff", fontWeight : "800", fontSize : "16px", marginBottom : "18px" }}>
                {V.t?.colCo}
              </div>
              {(V.coLinks ?? []).map((l: any, $i7: number) => (
                <React.Fragment key={$i7}>
                  <a href={l?.href} className="ft-link" style={{ display : "block", color : "#C2D3E2", padding : "6px 0", fontSize : "15px" }}>
                    {l?.label}
                  </a>
                </React.Fragment>
              ))}
              <button type="button" className="ft-btn" onClick={V.openComplaint} style={{ display : "block", color : "#F6A75F", fontSize : "15px", fontWeight : "700" }}>
                {V.t?.fbTitle}
              </button>
            </div>
            <div>
              <div style={{ color : "#fff", fontWeight : "800", fontSize : "16px", marginBottom : "18px" }}>
                {V.t?.colContact}
              </div>
              <a href="tel:+37441559910" className="ft-link" style={{ display : "block", color : "#fff", fontWeight : "800", fontSize : "20px", padding : "4px 0" }}>
                {"+374 41 55 99 10"}
              </a>
              <a href="tel:+37491105887" className="ft-link" style={{ display : "block", color : "#fff", fontWeight : "800", fontSize : "20px", padding : "4px 0" }}>
                {"+374 91 10 58 87"}
              </a>
              <div style={{ color : "#9FC3E0", fontSize : "13px", fontWeight : "600", padding : "2px 0 6px" }}>
                {(this.props as any).lang === 'ru' ? "Звонки · WhatsApp · Viber — оба номера" : "Զանգ · WhatsApp · Viber՝ երկու համարով"}
              </div>
              <a href="mailto:air_control_ac_service@mail.ru" className="ft-link" style={{ display : "block", color : "#C2D3E2", padding : "6px 0", fontSize : "15px" }}>
                {"air_control_ac_service@mail.ru"}
              </a>
              <div style={{ padding : "6px 0", fontSize : "15px" }}>
                {V.t?.address}
              </div>
              <div style={{ padding : "6px 0", fontSize : "15px" }}>
                {V.t?.hours}
              </div>
              <div style={{ display : "inline-flex", alignItems : "center", gap : "8px", marginTop : "10px", background : "rgba(242,138,46,.14)", color : "#F6A75F", borderRadius : "999px", padding : "8px 14px", fontWeight : "700", fontSize : "14px" }}>
                <span className="pulse-dot" style={{ width : "8px", height : "8px", borderRadius : "50%", background : "#F28A2E" }} />
                {V.t?.urgent}
              </div>
            </div>
          </div>
          <div style={{ borderTop : "1px solid rgba(255,255,255,.1)", padding : "24px 0 32px", display : "flex", flexWrap : "wrap", gap : "16px", justifyContent : "space-between", fontSize : "14px", color : "#9FB4C7" }}>
            <span>
              {"© 2026 Air Control. "}{V.t?.rights}
            </span>
            <span style={{ display : "flex", gap : "24px" }}>
              <a href="#" className="ft-link" style={{ color : "#9FB4C7" }}>
                {V.t?.privacy}
              </a>
            </span>
          </div>
        </div>
        <div aria-hidden="true" style={{ fontFamily : "'Playfair Display', Georgia, serif", fontWeight : "900", fontSize : "19vw", lineHeight : ".78", letterSpacing : "-0.04em", textAlign : "center", color : "rgba(255,255,255,.035)", whiteSpace : "nowrap", marginBottom : "-2vw", userSelect : "none" }}>
          {"Air Control"}
        </div>
        {V.showCard ? (
          <>
            <div className="ofc" role="complementary" aria-label={V.t?.ofTag} style={{ position : "fixed", left : "24px", bottom : "24px", zIndex : "80", width : "330px", maxWidth : "calc(100vw - 48px)", background : "#fff", color : "#0B2236", borderRadius : "24px", padding : "22px", boxShadow : "0 30px 60px -20px rgba(11,34,54,.55)", borderTop : "5px solid #F28A2E", textAlign : "left" }}>
              <button type="button" onClick={V.minimize} aria-label={V.t?.ofClose} style={{ position : "absolute", right : "10px", top : "10px", width : "36px", height : "36px", borderRadius : "50%", border : "0", background : "#F2F7FB", color : "#4A5F73", cursor : "pointer", display : "inline-flex", alignItems : "center", justifyContent : "center" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
              <div style={{ display : "flex", alignItems : "center", gap : "12px", paddingRight : "30px" }}>
                <span className="ann-gift" style={{ width : "46px", height : "46px", borderRadius : "14px", background : "#F28A2E", color : "#0B2236", display : "inline-flex", alignItems : "center", justifyContent : "center", flex : "none" }}>
                  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8h18v4H3z M5 12v9h14v-9 M12 8v13 M12 8c-2-4-6-4-6-1.5S10 8 12 8z M12 8c2-4 6-4 6-1.5S14 8 12 8z" />
                  </svg>
                </span>
                <span>
                  <span style={{ display : "block", fontSize : "12px", fontWeight : "800", letterSpacing : ".08em", textTransform : "uppercase", color : "#B85A0E" }}>
                    {V.t?.ofTag}
                  </span>
                  <span style={{ display : "block", fontWeight : "800", fontSize : "15px", lineHeight : "1.3" }}>
                    {V.t?.ofTitle}
                  </span>
                </span>
              </div>
              <div style={{ display : "flex", alignItems : "baseline", gap : "12px", margin : "14px 0 10px" }}>
                <span className="xo2" style={{ fontSize : "18px", fontWeight : "800", color : "#6B7F92" }}>
                  {V.t?.ofOld}
                </span>
                <span style={{ fontSize : "34px", fontWeight : "800", letterSpacing : "-0.02em" }}>
                  {V.t?.ofPrice}
                </span>
              </div>
              <div style={{ display : "flex", flexDirection : "column", gap : "6px", marginBottom : "16px", fontSize : "14px", fontWeight : "700" }}>
                <span style={{ display : "flex", gap : "8px", alignItems : "center" }}>
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B85A0E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flex : "none" }}>
                    <path d="M5 12l5 5 9-10" />
                  </svg>
                  {V.t?.ofG1}
                </span>
                <span style={{ display : "flex", gap : "8px", alignItems : "center" }}>
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B85A0E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flex : "none" }}>
                    <path d="M5 12l5 5 9-10" />
                  </svg>
                  {V.t?.ofG2}
                </span>
              </div>
              <a href="/contacts/#offer" className="btn-o" style={{ width : "100%", padding : "14px 20px", fontSize : "15px" }}>
                {V.t?.ofCta}
              </a>
            </div>
          </>
        ) : null}
        {V.showPill ? (
          <>
            <a href="/contacts/#offer" onClick={V.pillClick} className="ofc-pill" style={{ position : "fixed", left : "20px", bottom : "20px", zIndex : "80", display : "inline-flex", alignItems : "center", gap : "10px", background : "#F28A2E", color : "#0B2236", textDecoration : "none", borderRadius : "999px", padding : "8px 18px 8px 8px", fontWeight : "800", fontSize : "15px", boxShadow : "0 18px 36px -12px rgba(242,138,46,.8)" }}>
              <span style={{ position : "relative", width : "38px", height : "38px", borderRadius : "50%", background : "#0B2236", color : "#F28A2E", display : "inline-flex", alignItems : "center", justifyContent : "center", flex : "none" }}>
                <span className="ofc-ping" aria-hidden="true" style={{ position : "absolute", inset : "0", borderRadius : "50%", background : "#0B2236", opacity : ".35" }} />
                <span className="ann-gift" style={{ position : "relative", display : "inline-flex" }}>
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8h18v4H3z M5 12v9h14v-9 M12 8v13 M12 8c-2-4-6-4-6-1.5S10 8 12 8z M12 8c2-4 6-4 6-1.5S14 8 12 8z" />
                  </svg>
                </span>
              </span>
              {V.t?.ofPill}{"\n"}
            </a>
          </>
        ) : null}
        {V.fbOpen ? (
          <>
            <div className="fbm" role="dialog" aria-modal="true" aria-label={V.fbTitle} style={{ position : "fixed", inset : "0", zIndex : "200", background : "rgba(11,34,54,.62)", backdropFilter : "blur(6px)", WebkitBackdropFilter : "blur(6px)", display : "flex", alignItems : "center", justifyContent : "center", padding : "20px", textAlign : "left" }}>
              <button type="button" tabIndex="-1" aria-hidden="true" onClick={V.fbClose} style={{ position : "absolute", inset : "0", width : "100%", height : "100%", background : "transparent", border : "0", cursor : "default" }} />
              <div className="fbm-card" style={{ position : "relative", width : "100%", maxWidth : "720px", maxHeight : "calc(100vh - 40px)", overflowY : "auto", background : "#fff", borderRadius : "32px", boxShadow : "0 40px 80px -30px rgba(0,0,0,.6)", color : "#0B2236" }}>
                <div style={{ display : "flex", justifyContent : "space-between", alignItems : "flex-start", gap : "16px", padding : "28px 32px 0" }}>
                  <div>
                    <div style={{ fontSize : "13px", fontWeight : "800", letterSpacing : ".12em", textTransform : "uppercase", color : "#B85A0E", marginBottom : "6px" }}>
                      {V.t?.fbEyebrow}
                    </div>
                    <div style={{ fontSize : "28px", fontWeight : "800", letterSpacing : "-0.02em", lineHeight : "1.15" }}>
                      {V.fbTitle}
                    </div>
                  </div>
                  <button type="button" onClick={V.fbClose} aria-label={V.t?.ofClose} style={{ width : "44px", height : "44px", borderRadius : "50%", border : "0", background : "#F2F7FB", color : "#4A5F73", cursor : "pointer", display : "inline-flex", alignItems : "center", justifyContent : "center", flex : "none" }}>
                    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                  </button>
                </div>
                <Feedback defaultType={V.fbType} plain={true} />
              </div>
            </div>
          </>
        ) : null}
      </footer>
      </>
    );
  }
}
