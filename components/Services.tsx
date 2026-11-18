// @ts-nocheck
'use client';
// Services — generated from the Air Control design. Edit the texts and layout here.
import React from 'react';
import { DCLogic, css, muteVideo } from '../lib/dc';
import { tr, path } from '../lib/i18n';
import { RU } from '../lib/ru/Services';
import Header from './Header';
import Footer from './Footer';

const STYLES = "body{margin:0}\na{color:#0A6FB0}a:hover{color:#08568A}\n*,*::before,*::after{box-sizing:border-box}\n:focus-visible{outline:3px solid #F28A2E;outline-offset:3px}\n.hd-nav a{position:relative;text-decoration:none;color:#0B2236;padding:10px 4px;font-weight:600;font-size:15px;transition:color .2s;white-space:nowrap}\n.hd-nav a::after{content:\"\";position:absolute;left:4px;right:4px;bottom:3px;height:2px;border-radius:2px;background:#F28A2E;transform:scaleX(0);transform-origin:left;transition:transform .35s cubic-bezier(.2,.8,.2,1)}\n.hd-nav a:hover{color:#0A6FB0}.hd-nav a:hover::after,.hd-nav a.on::after{transform:scaleX(1)}\n.hd-burger{display:none !important}.hd-phone{display:none !important}\n@media (max-width:1200px){.hd-nav{display:none !important}.hd-burger{display:inline-flex !important}.hd-phone{display:inline-flex !important}}\n@media (max-width:760px){.hd-phone{display:none !important}.hd-word{font-size:22px !important}.hd-sub{font-size:7px !important;letter-spacing:.05em !important}.hd-mark{width:42px;height:42px}.hd-urgent{display:none !important}.hd-top-left{display:none !important}.hd-cta{display:none !important}.hd-phone-txt{display:none}.h1x{font-size:40px !important}.h2x{font-size:32px !important}}\n.ft-link{text-decoration:none;transition:color .2s}.ft-link:hover{color:#fff !important}\n.btn-o,.btn-w,.btn-b{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-weight:800;text-decoration:none;border:0;border-radius:999px;padding:17px 28px;font-size:16px;cursor:pointer;position:relative;overflow:hidden;font-family:inherit;transition:transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s}\n.btn-o{background:#F28A2E;color:#0B2236 !important}.btn-b{background:#0A6FB0;color:#fff !important}.btn-w{background:#fff;color:#0B2236 !important;box-shadow:inset 0 0 0 1.5px #D3E2EF}\n.btn-o:hover,.btn-b:hover,.btn-w:hover{transform:translateY(-3px)}.btn-o:hover{box-shadow:0 16px 32px -12px rgba(242,138,46,.8)}\n.lift{transition:transform .4s cubic-bezier(.2,.8,.2,1),box-shadow .4s}.lift:hover{transform:translateY(-6px);box-shadow:0 30px 60px -30px rgba(11,34,54,.4)}\n.chip{transition:background .2s,color .2s,border-color .2s,transform .2s}.chip:hover{transform:translateY(-2px)}\n.row{transition:background .2s}.row:hover{background:#F4F8FC}\n.spin{transform-box:fill-box;transform-origin:center;animation:spin 10s linear infinite}.spin-r{transform-box:fill-box;transform-origin:center;animation:spin 7s linear infinite reverse}\n@keyframes spin{to{transform:rotate(360deg)}}\n.pulse-dot{animation:pulse 1.8s ease-in-out infinite}@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(242,138,46,.7)}50%{box-shadow:0 0 0 7px rgba(242,138,46,0)}}\n.rise{animation:rise .9s cubic-bezier(.2,.8,.2,1) both}.d1{animation-delay:.1s}.d2{animation-delay:.22s}\n@keyframes rise{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}\n.bub{animation:rise .5s cubic-bezier(.2,.8,.2,1) both}\n.blob{animation:blob 18s ease-in-out infinite alternate}@keyframes blob{0%{transform:translate(0,0)}100%{transform:translate(-60px,40px) scale(1.1)}}\n@supports (animation-timeline:view()){.rv{animation:rv both cubic-bezier(.2,.8,.2,1);animation-timeline:view();animation-range:entry 0% entry 55%}}\n@keyframes rv{from{opacity:0;transform:translateY(48px)}to{opacity:1;transform:none}}\n.ann-shine{position:relative;overflow:hidden}.ann-shine::after{content:\"\";position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,rgba(255,255,255,.5) 50%,transparent 70%);transform:translateX(-100%);animation:annshine 5s ease-in-out infinite;pointer-events:none}@keyframes annshine{0%,55%{transform:translateX(-100%)}100%{transform:translateX(100%)}}.ann:hover{background:#F59A45 !important}\n.ann-gift{animation:annwig 2.6s ease-in-out infinite}@keyframes annwig{0%,60%,100%{transform:rotate(0) scale(1)}10%{transform:rotate(-14deg) scale(1.1)}20%{transform:rotate(12deg) scale(1.1)}30%{transform:rotate(-8deg)}40%{transform:rotate(4deg)}}\n.ann-short{display:none}@media (max-width:760px){.ann-long{display:none !important}.ann-short{display:inline !important}.ofc-pill{bottom:16px !important;left:12px !important}}\n.ofc,.ofc-pill{animation:ofcin .6s cubic-bezier(.2,.8,.2,1) both}@keyframes ofcin{from{opacity:0;transform:translateY(30px) scale(.95)}to{opacity:1;transform:none}}\n.ofc-ping{animation:ofping 2s cubic-bezier(0,0,.2,1) infinite}@keyframes ofping{75%,100%{transform:scale(1.7);opacity:0}}\n.xo2{position:relative;display:inline-block}.xo2::after{content:\"\";position:absolute;left:-5px;right:-5px;top:52%;height:3px;border-radius:3px;background:#D9480F;transform:rotate(-10deg) scaleX(0);transform-origin:left center;animation:xo2 4s ease-in-out infinite}@keyframes xo2{0%,12%{transform:rotate(-10deg) scaleX(0)}32%,100%{transform:rotate(-10deg) scaleX(1)}}\n@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation:none !important;transition:none !important}}\n.btn-w.btn-ghost{background:transparent !important;color:#fff !important;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.5) !important}.btn-w.btn-ghost:hover{background:rgba(255,255,255,.12) !important}\n.fb input:focus,.fb textarea:focus{border-color:#0A6FB0 !important;box-shadow:0 0 0 4px rgba(10,111,176,.15);outline:none}\n.fb-in{animation:fbin .45s cubic-bezier(.2,.8,.2,1) both}@keyframes fbin{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}\n.fb-check{stroke-dasharray:60;stroke-dashoffset:60;animation:fbck .8s .2s ease forwards}@keyframes fbck{to{stroke-dashoffset:0}}\n.fb-chip{transition:background .2s,color .2s,transform .2s}.fb-chip:hover{transform:translateY(-2px)}\n.fb-star{transition:transform .2s}.fb-star:hover{transform:scale(1.15)}\n.fb-btn{transition:transform .3s,box-shadow .3s}.fb-btn:hover{transform:translateY(-2px);box-shadow:0 14px 28px -12px rgba(10,111,176,.7)}\n.fbm{animation:fbfade .3s ease both}@keyframes fbfade{from{opacity:0}to{opacity:1}}\n.fbm-card{animation:fbpop .45s cubic-bezier(.2,.8,.2,1) both}@keyframes fbpop{from{opacity:0;transform:translateY(30px) scale(.96)}to{opacity:1;transform:none}}\n.ft-btn{background:none;border:0;padding:6px 0;cursor:pointer;font-family:inherit;text-align:left;transition:color .2s}.ft-btn:hover{color:#fff !important}\n@media (max-width:760px){.ptable{min-width:0 !important}.ptable thead{display:none}.ptable,.ptable tbody,.ptable tr,.ptable td{display:block;width:100%}.ptable tr{padding:14px 0}.ptable td{padding:6px 20px !important;text-align:left !important;white-space:normal !important}.ptable td[data-label]::before{content:attr(data-label);display:block;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#7A8C9C;font-weight:700;margin-bottom:2px}.ptable td:last-child{padding-top:10px !important}.ptable td:last-child a{width:100%}.ptable .ptext{max-width:none !important}}";

export default class Services extends DCLogic {
  renderVals() {
    const L = tr(this.props.lang, RU);
    const P = (p: string) => path(this.props.lang, p);
    const s = this.state || {};
    const cat = s.cat || 'all';
    const I = {
      install: 'M3 4h18v8H3z M12 21v-6 M9 18l3-3 3 3', repair: 'M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z',
      care: 'M12 3c3 4 5 6.5 5 9a5 5 0 0 1-10 0c0-2.5 2-5 5-9z', montage: 'M3 7h8a3 3 0 0 1 3 3v4a3 3 0 0 0 3 3h4 M3 11h6'
    };
    // [category, service, price (or text), unit, 'from' | 'fixed' | 'text']
    const all = [
      ["install", L("Տեղադրում 7–12k BTU"), '20 000', '֏', "from"],
      ["install", L("Տեղադրում 18–24k BTU"), '25 000', '֏', "from"],
      ["install", L("Մուլտիսպլիտ համակարգ"), L("Կախված է բլոկների քանակից"), '', "text"],
      ["install", L("Ապամոնտաժում"), '10 000', '֏', "fixed"],
      ["repair", L("Ախտորոշում"), '5 000', '֏', "fixed"],
      ["repair", L("Պլատայի վերանորոգում կամ փոխարինում"), '20 000', '֏', "from"],
      ["repair", L("Կոմպրեսորի փոխարինում"), '50 000', '֏', "from"],
      ["repair", L("Կոնդենսատորի փոխարինում"), '10 000', '֏', "fixed"],
      ["repair", L("Ֆրեոն գազի արտահոսքի հայտնաբերում և վերացում"), '10 000', '֏', "from"],
      ["care", L("Լվացում (ներսի և դրսի բլոկ)"), '15 000', '֏', "fixed"],
      ["care", L("Ֆրեոնի լիցքավորում"), '10 000', '֏', "from"],
      ["care", L("Ֆրեոնի ամբողջական լիցքավորում"), L("Արժեքը կախված է ֆրեոն գազի տեսակից և օդորակիչի չափսից"), '', "text"],
      ["care", L("VRF համակարգերի սպասարկում"), '20 000', '֏', "from"],
      ["montage", L("Խողովակաշարի մոնտաժ"), '6 000', L("֏ / մ"), "from"],
      ["montage", L("Արտաքին բլոկի հենակներ"), '3 500', '֏', "from"]
    ];
    const catDefs = [['all',L("Բոլորը")],['install',L("Տեղադրում")],['repair',L("Վերանորոգում")],['care',L("Սպասարկում")],['montage',L("Մոնտաժային աշխատանքներ")]];
    const cats = catDefs.map(c => {
      const on = c[0] === cat;
      return { label: c[1], count: c[0] === 'all' ? all.length : all.filter(r => r[0] === c[0]).length, on, pick: () => this.setState({ cat: c[0] }),
        style: 'min-height: 46px; padding: 0 20px; border-radius: 999px; font-family: inherit; font-size: 15px; font-weight: 800; cursor: pointer; ' + (on ? 'background: #0B2236; color: #fff; border: 1.5px solid #0B2236' : 'background: #fff; color: #0B2236; border: 1.5px solid #D5E2EE') };
    });
    const rows = all.filter(r => cat === 'all' || r[0] === cat).map(r => ({ promo: r[1] === L("Լվացում (ներսի և դրսի բլոկ)"), icon: I[r[0]], name: r[1], price: r[2], unit: r[3], from: r[4] === 'from', isText: r[4] === 'text' }));
    const incl = [
      { t: L("Բախիլներ և պաշտպանիչ թաղանթ"), d: L("Պաշտպանում ենք պատերը և հատակը"), ic: 'M4 20h16 M6 20V10l6-6 6 6v10' },
      { t: L("Մաքրություն"), d: L("Աշխատանքից հետո հավաքում ենք ամեն ինչ"), ic: 'M3 21l6-6 M14 4l6 6-8 8-6-6z' },
      { t: L("Գինը նախօրոք"), d: L("Ոչ մի թաքնված վճար"), ic: 'M12 2v20 M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' },
      { t: L("Որակի երաշխիք"), d: L("Մեր աշխատանքից առաջացած խնդիրը կվերացնենք անվճար"), ic: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M9 12l2 2 4-4' },
      { t: L("Պրոֆեսիոնալ գործիքներ"), d: L("Վակուումային պոմպ, մանոմետրեր, կշեռք"), ic: 'M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z' },
      { t: L("Վճարում արդյունքից հետո"), d: L("Կանխիկ, քարտով կամ փոխանցումով"), ic: 'M3 6h18v12H3z M3 10h18 M7 15h3' }
    ];
    return { cats, rows, incl };
  }

  render() {
    const L = tr(this.props.lang, RU);
    const P = (p: string) => path(this.props.lang, p);
    const V: any = this.renderVals() || {};
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div style={{ fontFamily : "'Manrope', 'Noto Sans Armenian', system-ui, sans-serif", color : "#0B2236", background : "#F4F8FC", overflowX : "clip" }}>
        <div style={{ position : "sticky", top : "0", zIndex : "60" }}>
          <Header active="services" lang={this.props.lang ?? 'hy'} />
        </div>
        <section style={{ position : "relative", overflow : "hidden", padding : "56px 24px 40px" }}>
          <div aria-hidden="true" className="blob" style={{ position : "absolute", right : "-200px", top : "-260px", width : "700px", height : "700px", borderRadius : "50%", background : "radial-gradient(circle, rgba(169,211,239,.7), rgba(169,211,239,0) 68%)" }} />
          <div style={{ maxWidth : "1280px", margin : "0 auto", position : "relative" }}>
            <nav aria-label={L("Ճանապարհ")} className="rise" style={{ fontSize : "14px", color : "#4A5F73", display : "flex", gap : "8px" }}>
              <a href={P("/")} style={{ textDecoration : "none" }}>
                {L("Գլխավոր")}
              </a>
              <span aria-hidden="true">
                {"/"}
              </span>
              <span>
                {L("Ծառայություններ և գներ")}
              </span>
            </nav>
            <h1 className="rise d1 h1x" style={{ margin : "20px 0 16px", fontSize : "64px", lineHeight : "1.05", letterSpacing : "-0.035em", fontWeight : "800", maxWidth : "900px" }}>
              {L("Ծառայություններ և ")}
              <span style={{ color : "#0A6FB0" }}>
                {L("թափանցիկ գներ")}
              </span>
            </h1>
            <p className="rise d2" style={{ margin : "0", fontSize : "19px", lineHeight : "1.6", color : "#3F566B", maxWidth : "680px" }}>
              {L("Սպասարկում ենք բոլոր մոդելների օդորակիչները։ Արժեքը ձևավորվում է՝ ելնելով աշխատանքի բարդությունից և ծավալից․ վերջնական գինը հստակեցնում ենք տեղում՝ ախտորոշումից հետո և նախքան աշխատանքը սկսելը։")}
            </p>
          </div>
        </section>
        <section style={{ padding : "16px 24px 56px" }}>
          <div style={{ maxWidth : "1280px", margin : "0 auto" }}>
            <a href={P("/contacts/#offer")} className="ann-shine lift" style={{ display : "flex", flexWrap : "wrap", alignItems : "center", gap : "16px", background : "#FFF1E4", border : "1.5px solid #F6C9A0", borderRadius : "22px", padding : "16px 20px", textDecoration : "none", color : "#0B2236", marginBottom : "22px" }}>
              <span className="ann-gift" style={{ width : "50px", height : "50px", borderRadius : "15px", background : "#F28A2E", color : "#0B2236", display : "inline-flex", alignItems : "center", justifyContent : "center", flex : "none" }}>
                <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h18v4H3z M5 12v9h14v-9 M12 8v13 M12 8c-2-4-6-4-6-1.5S10 8 12 8z M12 8c2-4 6-4 6-1.5S14 8 12 8z" />
                </svg>
              </span>
              <span style={{ flex : "1 1 320px", minWidth : "0" }}>
                <span style={{ display : "block", fontSize : "12px", fontWeight : "800", letterSpacing : ".08em", textTransform : "uppercase", color : "#B85A0E" }}>
                  {L("Հատուկ առաջարկ")}
                </span>
                <span style={{ display : "block", fontWeight : "800", fontSize : "17px", lineHeight : "1.4" }}>
                  {L("Լվացում (ներսի և դրսի բլոկ) ընդամենը 15 000 ֏ + ֆրեոնի լիցքավորում և ախտորոշում՝ նվեր")}
                </span>
              </span>
              <span style={{ display : "inline-flex", alignItems : "baseline", gap : "10px", whiteSpace : "nowrap" }}>
                <span className="xo2" style={{ fontWeight : "800", color : "#6B7F92" }}>
                  {"30 000 ֏"}
                </span>
                <span style={{ fontSize : "26px", fontWeight : "800" }}>
                  {"15 000 ֏"}
                </span>
              </span>
              <span className="btn-o" style={{ padding : "12px 20px", fontSize : "15px" }}>
                {L("Պատվիրել")}
              </span>
            </a>
            <div role="group" aria-label={L("Կատեգորիա")} style={{ display : "flex", flexWrap : "wrap", gap : "10px", marginBottom : "24px" }}>
              {(V.cats ?? []).map((c: any, $i7: number) => (
                <React.Fragment key={$i7}>
                  <button type="button" className="chip" onClick={c?.pick} aria-pressed={c?.on} style={css(c?.style)}>
                    {c?.label}{" "}
                    <span style={{ opacity : ".7", fontWeight : "600" }}>
                      {c?.count}
                    </span>
                  </button>
                </React.Fragment>
              ))}
            </div>
            <div className="rv" style={{ background : "#fff", border : "1px solid #E1ECF5", borderRadius : "28px", overflow : "hidden" }}>
              <div style={{ overflowX : "auto" }}>
                <table className="ptable" style={{ width : "100%", borderCollapse : "collapse", minWidth : "560px" }}>
                  <thead>
                    <tr style={{ background : "#0B2236", color : "#fff", textAlign : "left" }}>
                      <th scope="col" style={{ padding : "18px 24px", fontSize : "13px", letterSpacing : ".08em", textTransform : "uppercase" }}>
                        {L("Ծառայություն")}
                      </th>
                      <th scope="col" style={{ padding : "18px 24px", fontSize : "13px", letterSpacing : ".08em", textTransform : "uppercase", textAlign : "right" }}>
                        {L("Գին")}
                      </th>
                      <th scope="col" style={{ padding : "18px 24px" }}>
                        <span style={{ position : "absolute", width : "1px", height : "1px", overflow : "hidden", clip : "rect(0 0 0 0)" }}>
                          {L("Պատվիրել")}
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {(V.rows ?? []).map((r: any, $i10: number) => (
                      <React.Fragment key={$i10}>
                        <tr className="row" style={{ borderTop : "1px solid #EDF3F8" }}>
                          <td style={{ padding : "20px 24px", verticalAlign : "top" }}>
                            <span style={{ display : "flex", alignItems : "center", gap : "14px" }}>
                              <span style={{ width : "42px", height : "42px", borderRadius : "12px", background : "#EAF4FB", color : "#0A6FB0", display : "inline-flex", alignItems : "center", justifyContent : "center", flex : "none" }}>
                                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d={r?.icon} />
                                </svg>
                              </span>
                              <span>
                                <span style={{ display : "block", fontWeight : "800", fontSize : "17px" }}>
                                  {r?.name}
                                </span>
                                {r?.promo ? (
                                  <>
                                    <span style={{ display : "inline-flex", marginTop : "6px", background : "#F28A2E", color : "#0B2236", borderRadius : "999px", padding : "3px 10px", fontSize : "12px", fontWeight : "800" }}>
                                      {L("Ակցիա՝ + նվերներ")}
                                    </span>
                                  </>
                                ) : null}
                              </span>
                            </span>
                          </td>
                          <td data-label={L("Գին")} style={{ padding : "20px 24px", textAlign : "right", verticalAlign : "top" }}>
                            {r?.isText ? (
                              <span className="ptext" style={{ display : "inline-block", maxWidth : "260px", color : "#3F566B", fontWeight : "700", lineHeight : "1.45" }}>
                                {r?.price}
                              </span>
                            ) : (
                              <span style={{ whiteSpace : "nowrap" }}>
                                {r?.from ? (
                                  <span style={{ color : "#4A5F73", fontWeight : "700", fontSize : "14px", marginRight : "6px" }}>
                                    {L("սկսած")}
                                  </span>
                                ) : null}
                                <span style={{ fontSize : "21px", fontWeight : "800" }}>
                                  {r?.price}
                                </span>
                                {" "}
                                <span style={{ color : "#4A5F73", fontWeight : "700" }}>
                                  {r?.unit}
                                </span>
                              </span>
                            )}
                          </td>
                          <td style={{ padding : "14px 24px", textAlign : "right", verticalAlign : "top" }}>
                            <a href={P("/contacts/")} className="btn-w" style={{ padding : "11px 18px", fontSize : "14px", whiteSpace : "nowrap" }}>
                              {L("Պատվիրել")}
                            </a>
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p style={{ fontSize : "14px", color : "#4A5F73", margin : "16px 4px 0" }}>
              {L("Գներում ներառված չեն պահեստամասերը և նյութերը։ Ախտորոշումն անվճար է, եթե վերանորոգումը կատարում ենք մենք։")}
            </p>
          </div>
        </section>
        <section style={{ padding : "56px 24px 96px" }}>
          <div style={{ maxWidth : "1280px", margin : "0 auto" }}>
            <h2 className="rv h2x" style={{ margin : "0 0 32px", fontSize : "44px", lineHeight : "1.1", letterSpacing : "-0.03em", fontWeight : "800", maxWidth : "720px" }}>
              {L("Մեր աշխատանքի չափանիշները")}
            </h2>
            <div style={{ display : "grid", gridTemplateColumns : "repeat(auto-fit, minmax(260px, 1fr))", gap : "16px" }}>
              {(V.incl ?? []).map((i: any, $i7: number) => (
                <React.Fragment key={$i7}>
                  <div className="rv" style={{ display : "flex", gap : "16px", alignItems : "flex-start", background : "#fff", border : "1px solid #E1ECF5", borderRadius : "22px", padding : "24px" }}>
                    <span style={{ width : "48px", height : "48px", borderRadius : "14px", background : "#FFF1E4", color : "#B85A0E", display : "inline-flex", alignItems : "center", justifyContent : "center", flex : "none" }}>
                      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d={i?.ic} />
                      </svg>
                    </span>
                    <span>
                      <span style={{ display : "block", fontWeight : "800", fontSize : "17px", marginBottom : "4px" }}>
                        {i?.t}
                      </span>
                      <span style={{ display : "block", color : "#4A5F73", lineHeight : "1.5" }}>
                        {i?.d}
                      </span>
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
        <Footer lang={this.props.lang ?? 'hy'} />
      </div>
      </>
    );
  }
}
