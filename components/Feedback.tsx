// @ts-nocheck
'use client';
// Feedback — generated from the Air Control design. Edit the texts and layout here.
import React from 'react';
import PhoneInput from './PhoneInput';
import { DCLogic, css, muteVideo } from '../lib/dc';
import { tr, path } from '../lib/i18n';
import { RU } from '../lib/ru/Feedback';
import { sendForm, sendErrorText } from '../lib/lead';


const STYLES = "body{margin:0}";

export default class Feedback extends DCLogic {
  renderVals() {
    const L = tr(this.props.lang, RU);
    const P = (p: string) => path(this.props.lang, p);
    const st0 = this.state || {};
    const fbType = st0.fbType || this.props.defaultType || 'complaint', rating = st0.rating || 0, anon = !!st0.anon;
    const types = [['complaint',L("Բողոք"),'M12 9v4 M12 17h.01 M10.3 3.9L2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z'],['idea',L("Առաջարկություն"),'M9 18h6 M10 21h4 M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z'],['thanks',L("Շնորհակալություն"),'M12 21s-7-4.4-9.2-9A5 5 0 0 1 12 6a5 5 0 0 1 9.2 6c-2.2 4.6-9.2 9-9.2 9z']];
    const rl = [L("Ընտրեք աստղերը"), L("Շատ վատ"), L("Վատ"), L("Միջին"), L("Լավ"), L("Գերազանց")];
    const fbExtra = {
      fbTypes: types.map(t => { const on = t[0] === fbType; return { label: t[1], ic: t[2], on, pick: () => this.setState({ fbType: t[0] }), style: 'min-height: 50px; border-radius: 14px; font-family: inherit; font-size: 15px; font-weight: 800; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 8px; ' + (on ? 'background: #0B2236; color: #fff; border: 1.5px solid #0B2236' : 'background: #fff; color: #0B2236; border: 1.5px solid #D5E2EE') }; }),
      stars: [1, 2, 3, 4, 5].map(n => ({ label: n + ' / 5', on: n === rating, fill: n <= rating ? '#F28A2E' : 'none', stroke: n <= rating ? '#F28A2E' : '#9FB4C7', pick: () => this.setState({ rating: n }) })),
      ratingLabel: rl[rating],
      fbMsgLabel: fbType === 'complaint' ? L("Նկարագրեք խնդիրը") : (fbType === 'idea' ? L("Ձեր առաջարկը") : L("Ձեր խոսքը")),
      fbMsgPh: fbType === 'complaint' ? L("Ի՞նչը ձեզ դուր չեկավ։ Մենք կուսումնասիրենք և կուղղենք։") : (fbType === 'idea' ? L("Ի՞նչ կարող ենք անել ավելի լավ։") : L("Ո՞ւմ և ինչի համար եք ուզում շնորհակալություն հայտնել։")),
      notAnon: !anon, toggleAnon: (e) => this.setState({ anon: e.target.checked }), isComplaint: fbType === 'complaint', notComplaint: fbType !== 'complaint', showOpt: fbType !== 'complaint' && !anon,
      fbSent: !!st0.fbSent, fbNotSent: !st0.fbSent,
      fbOkText: (anon && fbType !== 'complaint') ? L("Ձեր դիմումը կուսումնասիրվի։ Շնորհակալություն, որ օգնում եք մեզ դառնալ ավելի լավը։") : L("Մենք կուսումնասիրենք ձեր դիմումը և կկապվենք ձեզ հետ։"),
      fbSubmit: (e) => { e.preventDefault(); if (st0.fbSending) return; const form = e.currentTarget; this.setState({ fbSending: true }); sendForm('feedback', form, { kind: (types.find(x => x[0] === fbType) || [])[1] || fbType, rating: rating ? rating + ' / 5' : '', anonymous: anon && fbType !== 'complaint' ? L("Այո") : '' }).then(() => this.setState({ fbSent: true, fbSending: false })).catch(() => { this.setState({ fbSending: false }); alert(sendErrorText('hy')); }); },
      fbReset: () => this.setState({ fbSent: false, rating: 0, anon: false }),
      fbPoints: [
        { t: L("Բողոքի դեպքում կկապվենք ձեզ հետ"), d: L("Բողոքի համար անունը և հեռախոսը պարտադիր են։ Առաջարկ կամ շնորհակալություն կարող եք թողնել անանուն։"), ic: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 21a8 8 0 0 1 16 0' },
        { t: L("Բողոքը չի մնա անուշադրության"), d: L("Եթե խնդիրը մեր աշխատանքից է, կգանք և անվճար կուղղենք։"), ic: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M9 12l2 2 4-4' },
        { t: L("Առաջարկներն իրականացնում ենք"), d: L("Լավագույն գաղափարները դառնում են մեր ծառայության մաս։"), ic: 'M9 18h6 M10 21h4 M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z' }
      ]
    };
    const yer = [L("Կենտրոն"), L("Արաբկիր"), L("Աջափնյակ"), L("Ավան"), L("Դավթաշեն"), L("Էրեբունի"), L("Մալաթիա-Սեբաստիա"), L("Նոր Նորք"), L("Նորք-Մարաշ"), L("Նուբարաշեն"), L("Շենգավիթ"), L("Քանաքեռ-Զեյթուն")];
    const reg = [L("Կոտայք"), L("Արարատ"), L("Արմավիր"), L("Արագածոտն")];
    const pill = (b) => 'border-radius: 999px; padding: 8px 14px; font-weight: 700; font-size: 14px; ' + (b ? 'background: #EAF4FB; color: #0A6FB0' : 'background: #FFF1E4; color: #9A4A12');
    return {
      ...fbExtra,
      rootStyle: 'width: 100%; box-sizing: border-box; font-family: \'Manrope\', \'Noto Sans Armenian\', system-ui, sans-serif; color: #0B2236; ' + (this.props.plain ? 'padding: 20px 32px 32px; background: #fff' : 'padding: 36px; background: #F4F8FC; border: 1px solid #E1ECF5; border-radius: 32px')
    };
  }

  render() {
    const L = tr(this.props.lang, RU);
    const P = (p: string) => path(this.props.lang, p);
    const V: any = this.renderVals() || {};
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="fb" style={css(V.rootStyle)}>
        {V.fbSent ? (
          <>
            <div className="fb-in" style={{ textAlign : "center", padding : "40px 12px" }}>
              <svg aria-hidden="true" width="96" height="96" viewBox="0 0 96 96" style={{ margin : "0 auto", display : "block" }}>
                <circle cx="48" cy="48" r="44" fill="#E8F5EE" />
                <circle cx="48" cy="48" r="32" fill="#1F7A4D" />
                <path className="fb-check" d="M34 49l9 9 19-20" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div style={{ fontSize : "28px", fontWeight : "800", letterSpacing : "-0.02em", margin : "22px 0 10px" }}>
                {L("Շնորհակալություն, ձեր դիմումն ընդունված է")}
              </div>
              <p style={{ margin : "0 auto 22px", maxWidth : "440px", color : "#4A5F73", lineHeight : "1.6" }}>
                {V.fbOkText}
              </p>
              <button type="button" onClick={V.fbReset} className="fb-chip" style={{ padding : "14px 22px", borderRadius : "999px", border : "0", background : "#fff", boxShadow : "inset 0 0 0 1.5px #D3E2EF", fontFamily : "inherit", fontWeight : "800", fontSize : "16px", cursor : "pointer", color : "#0B2236" }}>
                {L("Գրել նոր դիմում")}
              </button>
            </div>
          </>
        ) : null}
        {V.fbNotSent ? (
          <>
            <form onSubmit={V.fbSubmit} style={{ display : "flex", flexDirection : "column", gap : "20px" }}>
              <div>
                <div style={{ display : "block", fontWeight : "700", fontSize : "14px", marginBottom : "8px" }}>
                  {L("Դիմումի տեսակ")}
                </div>
                <div role="group" aria-label={L("Դիմումի տեսակ")} style={{ display : "grid", gridTemplateColumns : "repeat(auto-fit, minmax(150px, 1fr))", gap : "8px" }}>
                  {(V.fbTypes ?? []).map((ft: any, $i9: number) => (
                    <React.Fragment key={$i9}>
                      <button type="button" className="fb-chip" onClick={ft?.pick} aria-pressed={ft?.on} style={css(ft?.style)}>
                        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d={ft?.ic} />
                        </svg>
                        {ft?.label}
                      </button>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ display : "block", fontWeight : "700", fontSize : "14px", marginBottom : "8px" }}>
                  {L("Ինչպես կգնահատեք մեր աշխատանքը")}
                </div>
                <div role="group" aria-label={L("Գնահատական")} style={{ display : "flex", flexWrap : "wrap", gap : "6px", alignItems : "center" }}>
                  {(V.stars ?? []).map((st: any, $i9: number) => (
                    <React.Fragment key={$i9}>
                      <button type="button" onClick={st?.pick} aria-label={st?.label} aria-pressed={st?.on} className="fb-star" style={{ width : "46px", height : "46px", border : "0", background : "transparent", cursor : "pointer", padding : "0" }}>
                        <svg aria-hidden="true" width="38" height="38" viewBox="0 0 24 24" fill={st?.fill} stroke={st?.stroke} strokeWidth="1.5" strokeLinejoin="round">
                          <path d="M12 2l3 6.6 7.2.7-5.4 4.8 1.6 7.1L12 17.6 5.6 21.2l1.6-7.1L1.8 9.3 9 8.6z" />
                        </svg>
                      </button>
                    </React.Fragment>
                  ))}
                  <span style={{ marginLeft : "8px", fontWeight : "700", color : "#4A5F73" }}>
                    {V.ratingLabel}
                  </span>
                </div>
              </div>
              <div>
                <label htmlFor="fb-msg" style={{ display : "block", fontWeight : "700", fontSize : "14px", marginBottom : "8px" }}>
                  {V.fbMsgLabel}{" *"}
                </label>
                <textarea id="fb-msg" required rows="5" placeholder={V.fbMsgPh} style={{ width : "100%", border : "1.5px solid #D5E2EE", borderRadius : "14px", padding : "14px 16px", fontFamily : "inherit", fontSize : "16px", background : "#fff", color : "#0B2236", resize : "vertical" }} />
              </div>
              {V.isComplaint ? (
                <>
                  <div className="fb-in" style={{ display : "grid", gridTemplateColumns : "repeat(2, minmax(0, 1fr))", gap : "16px" }}>
                    <div>
                      <label htmlFor="fb-name" style={{ display : "block", fontWeight : "700", fontSize : "14px", marginBottom : "8px" }}>
                        {L("Անուն *")}
                      </label>
                      <input id="fb-name" required autoComplete="name" placeholder={L("Ձեր անունը")} style={{ width : "100%", height : "54px", border : "1.5px solid #D5E2EE", borderRadius : "14px", padding : "0 16px", fontFamily : "inherit", fontSize : "16px", background : "#fff", color : "#0B2236" }} />
                    </div>
                    <div>
                      <label htmlFor="fb-phone" style={{ display : "block", fontWeight : "700", fontSize : "14px", marginBottom : "8px" }}>
                        {L("Հեռախոս *")}
                      </label>
                      <PhoneInput id="fb-phone" lang={this.props.lang ?? 'hy'} required />
                    </div>
                    <div style={{ gridColumn : "1 / -1" }}>
                      <label htmlFor="fb-when" style={{ display : "block", fontWeight : "700", fontSize : "14px", marginBottom : "8px" }}>
                        {L("Երբ և որտեղ է կատարվել աշխատանքը (ըստ ցանկության)")}
                      </label>
                      <input id="fb-when" placeholder={L("Օր․՝ նոյեմբերի 10, Արաբկիր")} style={{ width : "100%", height : "54px", border : "1.5px solid #D5E2EE", borderRadius : "14px", padding : "0 16px", fontFamily : "inherit", fontSize : "16px", background : "#fff", color : "#0B2236" }} />
                    </div>
                  </div>
                </>
              ) : null}
              {V.notComplaint ? (
                <>
                  <label style={{ display : "flex", gap : "12px", alignItems : "center", fontWeight : "700", cursor : "pointer" }}>
                    <input type="checkbox" onChange={V.toggleAnon} style={{ width : "20px", height : "20px", margin : "0", accentColor : "#0A6FB0" }} />
                    {L("Ուզում եմ գրել անանուն")}
                  </label>
                </>
              ) : null}
              {V.showOpt ? (
                <>
                  <div className="fb-in" style={{ display : "grid", gridTemplateColumns : "repeat(2, minmax(0, 1fr))", gap : "16px" }}>
                    <div>
                      <label htmlFor="fb-name" style={{ display : "block", fontWeight : "700", fontSize : "14px", marginBottom : "8px" }}>
                        {L("Անուն")}
                      </label>
                      <input id="fb-name" autoComplete="name" placeholder={L("Ձեր անունը")} style={{ width : "100%", height : "54px", border : "1.5px solid #D5E2EE", borderRadius : "14px", padding : "0 16px", fontFamily : "inherit", fontSize : "16px", background : "#fff", color : "#0B2236" }} />
                    </div>
                    <div>
                      <label htmlFor="fb-phone" style={{ display : "block", fontWeight : "700", fontSize : "14px", marginBottom : "8px" }}>
                        {L("Հեռախոս")}
                      </label>
                      <PhoneInput id="fb-phone" lang={this.props.lang ?? 'hy'} />
                    </div>
                    <div style={{ gridColumn : "1 / -1" }}>
                      <label htmlFor="fb-when" style={{ display : "block", fontWeight : "700", fontSize : "14px", marginBottom : "8px" }}>
                        {L("Երբ և որտեղ է կատարվել աշխատանքը (ըստ ցանկության)")}
                      </label>
                      <input id="fb-when" placeholder={L("Օր․՝ նոյեմբերի 10, Արաբկիր")} style={{ width : "100%", height : "54px", border : "1.5px solid #D5E2EE", borderRadius : "14px", padding : "0 16px", fontFamily : "inherit", fontSize : "16px", background : "#fff", color : "#0B2236" }} />
                    </div>
                  </div>
                </>
              ) : null}
              <button type="submit" className="fb-btn" style={{ width : "100%", padding : "18px 28px", fontSize : "17px", display : "inline-flex", alignItems : "center", justifyContent : "center", gap : "10px", border : "0", borderRadius : "999px", background : "#0A6FB0", color : "#fff", fontFamily : "inherit", fontWeight : "800", cursor : "pointer" }}>
                {L("Ուղարկել դիմումը ")}
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </form>
          </>
        ) : null}
      </div>
      </>
    );
  }
}
