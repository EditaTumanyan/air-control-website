// @ts-nocheck
'use client';
// Business — generated from the Air Control design. Edit the texts and layout here.
import React from 'react';
import { DCLogic, css, muteVideo } from '../lib/dc';
import { tr, path } from '../lib/i18n';
import { RU } from '../lib/ru/Business';
import Header from './Header';
import PhonesCard from './PhonesCard';
import BookingForm from './BookingForm';
import Footer from './Footer';

const STYLES = "body{margin:0}\na{color:#0A6FB0}a:hover{color:#08568A}\n*,*::before,*::after{box-sizing:border-box}\n:focus-visible{outline:3px solid #F28A2E;outline-offset:3px}\n.hd-nav a{position:relative;text-decoration:none;color:#0B2236;padding:10px 4px;font-weight:600;font-size:15px;transition:color .2s;white-space:nowrap}\n.hd-nav a::after{content:\"\";position:absolute;left:4px;right:4px;bottom:3px;height:2px;border-radius:2px;background:#F28A2E;transform:scaleX(0);transform-origin:left;transition:transform .35s cubic-bezier(.2,.8,.2,1)}\n.hd-nav a:hover{color:#0A6FB0}.hd-nav a:hover::after,.hd-nav a.on::after{transform:scaleX(1)}\n.hd-burger{display:none !important}.hd-phone{display:none !important}\n@media (max-width:1200px){.hd-nav{display:none !important}.hd-burger{display:inline-flex !important}.hd-phone{display:inline-flex !important}}\n@media (max-width:760px){.hd-phone{display:none !important}.hd-word{font-size:22px !important}.hd-sub{font-size:7px !important;letter-spacing:.05em !important}.hd-mark{width:42px;height:42px}.hd-urgent{display:none !important}.hd-top-left{display:none !important}.hd-cta{display:none !important}.hd-phone-txt{display:none}.h1x{font-size:40px !important}.h2x{font-size:32px !important}}\n.ft-link{text-decoration:none;transition:color .2s}.ft-link:hover{color:#fff !important}\n.btn-o,.btn-w,.btn-b{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-weight:800;text-decoration:none;border:0;border-radius:999px;padding:17px 28px;font-size:16px;cursor:pointer;position:relative;overflow:hidden;font-family:inherit;transition:transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s}\n.btn-o{background:#F28A2E;color:#0B2236 !important}.btn-b{background:#0A6FB0;color:#fff !important}.btn-w{background:#fff;color:#0B2236 !important;box-shadow:inset 0 0 0 1.5px #D3E2EF}\n.btn-o:hover,.btn-b:hover,.btn-w:hover{transform:translateY(-3px)}.btn-o:hover{box-shadow:0 16px 32px -12px rgba(242,138,46,.8)}\n.lift{transition:transform .4s cubic-bezier(.2,.8,.2,1),box-shadow .4s}.lift:hover{transform:translateY(-6px);box-shadow:0 30px 60px -30px rgba(11,34,54,.4)}\n.chip{transition:background .2s,color .2s,border-color .2s,transform .2s}.chip:hover{transform:translateY(-2px)}\n.spin{transform-box:fill-box;transform-origin:center;animation:spin 10s linear infinite}.spin-r{transform-box:fill-box;transform-origin:center;animation:spin 7s linear infinite reverse}\n@keyframes spin{to{transform:rotate(360deg)}}\n.pulse-dot{animation:pulse 1.8s ease-in-out infinite}@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(242,138,46,.7)}50%{box-shadow:0 0 0 7px rgba(242,138,46,0)}}\n.rise{animation:rise .9s cubic-bezier(.2,.8,.2,1) both}.d1{animation-delay:.1s}.d2{animation-delay:.22s}.d3{animation-delay:.34s}\n@keyframes rise{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}\n.bub{animation:rise .5s cubic-bezier(.2,.8,.2,1) both}\n.win{animation:win 3s ease-in-out infinite}@keyframes win{0%,100%{opacity:.35}50%{opacity:1}}\n.flow{stroke-dasharray:10 8;animation:flow 1.2s linear infinite}@keyframes flow{to{stroke-dashoffset:-36}}\n.fan{transform-box:fill-box;transform-origin:center;animation:spin 1.6s linear infinite}\n.logomarq{animation:logomarq 30s linear infinite}.logowrap:hover .logomarq{animation-play-state:paused}@keyframes logomarq{to{transform:translateX(-50%)}}\n.logocard{transition:transform .3s,border-color .3s,color .3s}.logocard:hover{transform:translateY(-4px);border-color:#0A6FB0 !important;color:#0A6FB0 !important}\n@media (prefers-reduced-motion:reduce){.logomarq{animation:none}}\n.bf input,.bf select,.bf textarea{transition:border-color .2s,box-shadow .2s}\n.bf input:focus,.bf select:focus,.bf textarea:focus{border-color:#0A6FB0 !important;box-shadow:0 0 0 4px rgba(10,111,176,.15);background:#fff !important;outline:none}\n.check-draw{stroke-dasharray:60;stroke-dashoffset:60;animation:draw .8s .2s ease forwards}@keyframes draw{to{stroke-dashoffset:0}}\n@supports (animation-timeline:view()){.rv{animation:rv both cubic-bezier(.2,.8,.2,1);animation-timeline:view();animation-range:entry 0% entry 55%}}\n@keyframes rv{from{opacity:0;transform:translateY(48px)}to{opacity:1;transform:none}}\n@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation:none !important;transition:none !important}}\n.ann-shine{position:relative;overflow:hidden}.ann-shine::after{content:\"\";position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,rgba(255,255,255,.5) 50%,transparent 70%);transform:translateX(-100%);animation:annshine 5s ease-in-out infinite;pointer-events:none}@keyframes annshine{0%,55%{transform:translateX(-100%)}100%{transform:translateX(100%)}}.ann:hover{background:#F59A45 !important}\n.ann-gift{animation:annwig 2.6s ease-in-out infinite}@keyframes annwig{0%,60%,100%{transform:rotate(0) scale(1)}10%{transform:rotate(-14deg) scale(1.1)}20%{transform:rotate(12deg) scale(1.1)}30%{transform:rotate(-8deg)}40%{transform:rotate(4deg)}}\n.ann-short{display:none}@media (max-width:760px){.ann-long{display:none !important}.ann-short{display:inline !important}.ofc-pill{bottom:16px !important;left:12px !important}}\n.ofc,.ofc-pill{animation:ofcin .6s cubic-bezier(.2,.8,.2,1) both}@keyframes ofcin{from{opacity:0;transform:translateY(30px) scale(.95)}to{opacity:1;transform:none}}\n.ofc-ping{animation:ofping 2s cubic-bezier(0,0,.2,1) infinite}@keyframes ofping{75%,100%{transform:scale(1.7);opacity:0}}\n.xo2{position:relative;display:inline-block}.xo2::after{content:\"\";position:absolute;left:-5px;right:-5px;top:52%;height:3px;border-radius:3px;background:#D9480F;transform:rotate(-10deg) scaleX(0);transform-origin:left center;animation:xo2 4s ease-in-out infinite}@keyframes xo2{0%,12%{transform:rotate(-10deg) scaleX(0)}32%,100%{transform:rotate(-10deg) scaleX(1)}}\n.btn-w.btn-ghost{background:transparent !important;color:#fff !important;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.5) !important}.btn-w.btn-ghost:hover{background:rgba(255,255,255,.12) !important}\n.fb input:focus,.fb textarea:focus{border-color:#0A6FB0 !important;box-shadow:0 0 0 4px rgba(10,111,176,.15);outline:none}\n.fb-in{animation:fbin .45s cubic-bezier(.2,.8,.2,1) both}@keyframes fbin{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}\n.fb-check{stroke-dasharray:60;stroke-dashoffset:60;animation:fbck .8s .2s ease forwards}@keyframes fbck{to{stroke-dashoffset:0}}\n.fb-chip{transition:background .2s,color .2s,transform .2s}.fb-chip:hover{transform:translateY(-2px)}\n.fb-star{transition:transform .2s}.fb-star:hover{transform:scale(1.15)}\n.fb-btn{transition:transform .3s,box-shadow .3s}.fb-btn:hover{transform:translateY(-2px);box-shadow:0 14px 28px -12px rgba(10,111,176,.7)}\n.fbm{animation:fbfade .3s ease both}@keyframes fbfade{from{opacity:0}to{opacity:1}}\n.fbm-card{animation:fbpop .45s cubic-bezier(.2,.8,.2,1) both}@keyframes fbpop{from{opacity:0;transform:translateY(30px) scale(.96)}to{opacity:1;transform:none}}\n.ft-btn{background:none;border:0;padding:6px 0;cursor:pointer;font-family:inherit;text-align:left;transition:color .2s}.ft-btn:hover{color:#fff !important}\n.adv-card>div{min-width:0;overflow-wrap:break-word;hyphens:auto}@media (max-width:360px){.adv-card{padding:20px !important;gap:12px !important;flex-direction:column}}";

export default class Business extends DCLogic {
  renderVals() {
    const L = tr(this.props.lang, RU);
    const P = (p: string) => path(this.props.lang, p);
    const base = [
      { name: L("Մեկանգամյա ծավալային աշխատանք"), desc: L("Տեղադրում, լվացում կամ վերանորոգում միանգամից մի քանի բլոկի համար։"), cta: L("Ստանալ գնահատական"), ic: 'M3 4h18v8H3z M12 21v-6 M9 18l3-3 3 3', feats: [L("Ամբողջ օբյեկտը՝ նվազագույն այցերով"),L("Ծավալային զեղչ"),L("Աշխատանք ձեզ հարմար օրերին"),L("Անկանխիկ փոխանցում, հաշիվ-ապրանքագիր")] },
      { name: L("Պլանային սպասարկում"), desc: L("Կանոնավոր տեխսպասարկում՝ ըստ համաձայնեցված գրաֆիկի։"), cta: L("Կազմել գրաֆիկ"), hot: true, ic: 'M3 5h18v16H3z M3 10h18 M8 3v4 M16 3v4 M8 15l2 2 4-4', feats: [L("2–4 այց տարեկան"),L("Լվացում, ախտահանում, ֆրեոնի ստուգում"),L("Առաջնահերթություն շտապ դեպքերում"),L("Անձնական մենեջեր")] },
      { name: L("Ամբողջական սպասարկում"), desc: L("Բոլոր համակարգերի պատասխանատվությունը՝ մեզ վրա։"), cta: L("Քննարկել պայմանները"), ic: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M9 12l2 2 4-4', feats: [L("Պլանային սպասարկում + վերանորոգում"),L("Վերանորոգման արտոնյալ գներ"),L("Առաջնահերթություն շտապ դեպքերում"),L("Մեկ կոնտակտ բոլոր հարցերի համար")] }
    ];
    const plans = base.map(b => {
      const dark = !!b.hot;
      return { name: b.name, desc: b.desc, cta: b.cta, ic: b.ic, hot: dark, feats: b.feats,
        card: 'position: relative; border-radius: 30px; padding: 34px; display: flex; flex-direction: column; ' + (dark ? 'background: #0B2236; color: #fff' : 'background: #F4F8FC; color: #0B2236; border: 1px solid #E1ECF5'),
        icWrap: 'width: 56px; height: 56px; border-radius: 18px; display: inline-flex; align-items: center; justify-content: center; ' + (dark ? 'background: #F28A2E; color: #0B2236' : 'background: #fff; color: #0A6FB0'),
        muted: dark ? 'color: #9FC3E0' : 'color: #4A5F73', line: dark ? 'rgba(255,255,255,.12)' : '#DCE7F0', btn: dark ? 'btn-o' : 'btn-w' };
    });
    return {
      factors: [L("Բլոկների քանակը և տեսակը"), L("Այցերի հաճախականությունը"), L("Համակարգերի տարիքը և վիճակը"), L("Մատչելիությունը (բարձրություն, տանիք)")],
      plans,
      sectors: [
        { t: L("Գրասենյակներ"), d: L("Հարմարավետ միկրոկլիմա և աշխատանք առանց աղմուկի"), ic: 'M4 21V5l8-2v18 M12 9h8v12 M2 21h20' },
        { t: L("Ռեստորաններ և սրճարաններ"), d: L("Խոհանոցի և սրահի համակարգեր, ճարպից մաքրում"), ic: 'M7 3v8 M5 3v4a2 2 0 0 0 4 0V3 M7 11v10 M17 3c-2 2-2 6 0 8v10' },
        { t: L("Խանութներ և առևտրի կենտրոններ"), d: L("Կասետային և կանալային համակարգեր"), ic: 'M4 7h16l-1 13H5z M8 7a4 4 0 0 1 8 0' },
        { t: L("Հյուրանոցներ"), d: L("Սպասարկում առանց հյուրերին անհանգստացնելու"), ic: 'M3 20V8 M3 14h18v6 M21 20v-8a3 3 0 0 0-3-3h-7v5' },
        { t: L("Բժշկական կենտրոններ"), d: L("Ախտահանում և հիգիենայի նորմերի պահպանում"), ic: 'M12 5v14 M5 12h14' },
        { t: L("Արտադրություն և պահեստներ"), d: L("Մեծ հզորության և արդյունաբերական համակարգեր"), ic: 'M3 21V10l6 4V10l6 4V6l6 4v11z' },
        { t: L("Սերվերային սենյակներ"), d: L("Ճշգրիտ օդորակում և պլանային ստուգումներ"), ic: 'M4 4h16v6H4z M4 14h16v6H4z M8 7h.01 M8 17h.01' },
        { t: L("Կրթական հաստատություններ"), d: L("Դպրոցներ, մանկապարտեզներ, համալսարաններ"), ic: 'M2 9l10-5 10 5-10 5z M6 11v5c3 2 9 2 12 0v-5' }
      ],
      systems: [L("Սպլիտ"), L("Մուլտիսպլիտ"), L("Կասետային"), L("Կանալային"), L("Հատակ-առաստաղային"), 'VRF / VRV', L("Ճշգրիտ օդորակիչներ"), L("Վարագուրային")],
      perks: [
        { t: L("Ծավալային զեղչ"), d: L("Որքան շատ համակարգ, այնքան ձեռնտու գին"), ic: 'M19 5L5 19 M6.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z M17.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z' },
        { t: L("Աշխատանք ձեզ հարմար օրերին"), d: L("Այցերը համաձայնեցնում ենք ձեր աշխատանքային գրաֆիկին"), ic: 'M4 5h16v16H4z M4 10h16 M9 3v4 M15 3v4 M9 15l2 2 4-4' },
        { t: L("Անկանխիկ փոխանցում, հաշիվ-ապրանքագիր"), d: L("Վճարում բանկային փոխանցումով"), ic: 'M3 6h18v12H3z M3 10h18 M7 15h4' },
        { t: L("Առաջնահերթություն շտապ դեպքերում"), d: L("Բիզնես հաճախորդների շտապ կանչերը սպասարկում ենք առաջին հերթին"), ic: 'M13 2L4 14h7l-1 8 9-12h-7z' },
        { t: L("Պրոֆեսիոնալիզմ և փորձ"), d: L("Ցանկացած բարդության խնդրի ճշգրիտ ու որակյալ լուծում։"), ic: 'M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z M8.5 14L7 22l5-3 5 3-1.5-8' },
        { t: L("Անհատական մոտեցում"), d: L("Առաջարկում ենք լուծումներ՝ հիմնված հենց ձեր բիզնեսի կարիքների վրա։"), ic: 'M12 3l8 4.5v9L12 21l-8-4.5v-9z M12 12l8-4.5 M12 12v9 M12 12L4 7.5' }
      ],
      logoLoop: (() => { const l = [L("[Հաճախորդի լոգո 1]"), L("[Հաճախորդի լոգո 2]"), L("[Հաճախորդի լոգո 3]"), L("[Հաճախորդի լոգո 4]"), L("[Հաճախորդի լոգո 5]"), L("[Հաճախորդի լոգո 6]"), L("[Հաճախորդի լոգո 7]"), L("[Հաճախորդի լոգո 8]")]; return l.concat(l); })(),
      logoDur: (8 * 5) + 's',
      steps: [{ n: '1', t: L("Հայտ և զանգ մենեջերից") }, { n: '2', t: L("Ինժեների անվճար այց և աուդիտ") }, { n: '3', t: L("Առաջարկ և համաձայնեցում") }, { n: '4', t: L("Սպասարկում ըստ գրաֆիկի") }]
    };
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
          <Header active="business" lang={this.props.lang ?? 'hy'} />
        </div>
        <section style={{ background : "#0B2236", color : "#fff", padding : "72px 24px 96px", position : "relative", overflow : "hidden" }}>
          <div aria-hidden="true" style={{ position : "absolute", inset : "0", backgroundImage : "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)", backgroundSize : "48px 48px" }} />
          <div style={{ maxWidth : "1280px", margin : "0 auto", display : "flex", flexWrap : "wrap", gap : "48px", alignItems : "center", position : "relative" }}>
            <div style={{ flex : "1 1 540px", minWidth : "0" }}>
              <span className="rise" style={{ display : "inline-flex", alignItems : "center", gap : "10px", background : "rgba(242,138,46,.15)", color : "#F6A75F", borderRadius : "999px", padding : "8px 16px", fontWeight : "800", fontSize : "13px", letterSpacing : ".06em", textTransform : "uppercase" }}>
                <span className="pulse-dot" style={{ width : "8px", height : "8px", borderRadius : "50%", background : "#F28A2E" }} />
                {L("B2B · Կորպորատիվ սպասարկում")}
              </span>
              <h1 className="rise d1 h1x" style={{ margin : "24px 0 20px", fontSize : "64px", lineHeight : "1.05", letterSpacing : "-0.035em", fontWeight : "800" }}>
                {L("Անխափան օդորակում ")}
                <span style={{ color : "#F28A2E" }}>
                  {L("ձեր բիզնեսի համար")}
                </span>
              </h1>
              <p className="rise d2" style={{ margin : "0 0 34px", fontSize : "19px", lineHeight : "1.6", color : "#C2D3E2", maxWidth : "600px" }}>
                {L("Օդորակիչների սպասարկում գրասենյակների, ռեստորանների, խանութների և այլ բիզնես տարածքների համար՝ ձեզ հարմար օրերին, առաջնահերթ սպասարկմամբ և ճկուն գնային պայմաններով։")}
              </p>
              <div className="rise d3" style={{ display : "flex", flexWrap : "wrap", gap : "14px" }}>
                <a href="#b2b-form" className="btn-o">
                  {L("Ստանալ առաջարկ")}
                </a>
              </div>
              <div style={{ display : "grid", gridTemplateColumns : "repeat(3, minmax(0, 1fr))", gap : "16px", marginTop : "48px", maxWidth : "560px" }}>
                <div style={{ borderLeft : "2px solid rgba(255,255,255,.18)", paddingLeft : "16px" }}>
                  <div style={{ fontSize : "34px", fontWeight : "800" }}>
                    {"120+"}
                  </div>
                  <div style={{ color : "#9FC3E0", fontSize : "14px" }}>
                    {L("բիզնես հաճախորդ")}
                  </div>
                </div>
                <div style={{ borderLeft : "2px solid rgba(255,255,255,.18)", paddingLeft : "16px" }}>
                  <div style={{ fontSize : "34px", fontWeight : "800" }}>
                    {L("7 օր")}
                  </div>
                  <div style={{ color : "#9FC3E0", fontSize : "14px" }}>
                    {L("ճկուն աշխատանքային գրաֆիկ")}
                  </div>
                </div>
                <div style={{ borderLeft : "2px solid rgba(255,255,255,.18)", paddingLeft : "16px" }}>
                  <div style={{ fontSize : "34px", fontWeight : "800" }}>
                    {"100%"}
                  </div>
                  <div style={{ color : "#9FC3E0", fontSize : "14px" }}>
                    {L("երաշխավորված որակ")}
                  </div>
                </div>
              </div>
            </div>
            <div className="rise d2" style={{ flex : "1 1 440px", minWidth : "0", display : "flex", justifyContent : "center" }}>
              <svg role="img" aria-label={L("Գրասենյակային շենք օդորակիչներով")} viewBox="0 0 440 440" style={{ width : "100%", maxWidth : "460px" }}>
                <rect x="90" y="60" width="200" height="360" rx="14" fill="#13314A" />
                <rect x="290" y="160" width="110" height="260" rx="12" fill="#183B58" />
                <g fill="#A9D3EF">
                  <rect className="win" x="112" y="90" width="44" height="34" rx="6" />
                  <rect className="win" style={{ animationDelay : ".6s" }} x="168" y="90" width="44" height="34" rx="6" />
                  <rect className="win" style={{ animationDelay : "1.2s" }} x="224" y="90" width="44" height="34" rx="6" />
                  <rect className="win" style={{ animationDelay : "1.8s" }} x="112" y="150" width="44" height="34" rx="6" />
                  <rect className="win" style={{ animationDelay : ".3s" }} x="168" y="150" width="44" height="34" rx="6" />
                  <rect className="win" style={{ animationDelay : "2.1s" }} x="224" y="150" width="44" height="34" rx="6" />
                  <rect className="win" style={{ animationDelay : ".9s" }} x="112" y="210" width="44" height="34" rx="6" />
                  <rect className="win" style={{ animationDelay : "1.5s" }} x="168" y="210" width="44" height="34" rx="6" />
                  <rect className="win" style={{ animationDelay : "2.4s" }} x="224" y="210" width="44" height="34" rx="6" />
                  <rect className="win" style={{ animationDelay : ".45s" }} x="112" y="270" width="44" height="34" rx="6" />
                  <rect className="win" style={{ animationDelay : "1.05s" }} x="168" y="270" width="44" height="34" rx="6" />
                  <rect className="win" style={{ animationDelay : "1.65s" }} x="224" y="270" width="44" height="34" rx="6" />
                  <rect className="win" style={{ animationDelay : ".75s" }} x="310" y="190" width="70" height="30" rx="6" />
                  <rect className="win" style={{ animationDelay : "1.35s" }} x="310" y="240" width="70" height="30" rx="6" />
                  <rect className="win" style={{ animationDelay : "1.95s" }} x="310" y="290" width="70" height="30" rx="6" />
                </g>
                <rect x="170" y="350" width="40" height="70" rx="6" fill="#0A6FB0" />
                <g>
                  <rect x="300" y="110" width="96" height="44" rx="8" fill="#DCEAF5" />
                  <circle className="fan" cx="330" cy="132" r="15" fill="none" stroke="#7FB3D5" strokeWidth="6" strokeDasharray="10 5.7" />
                  <circle cx="330" cy="132" r="4" fill="#7FB3D5" />
                  <rect x="356" y="122" width="30" height="4" rx="2" fill="#9FBCD3" />
                  <rect x="356" y="132" width="30" height="4" rx="2" fill="#9FBCD3" />
                  <rect x="356" y="142" width="30" height="4" rx="2" fill="#9FBCD3" />
                </g>
                <g>
                  <rect x="20" y="180" width="70" height="36" rx="7" fill="#DCEAF5" />
                  <circle className="fan" cx="42" cy="198" r="11" fill="none" stroke="#7FB3D5" strokeWidth="5" strokeDasharray="7 4.5" />
                  <rect x="58" y="190" width="24" height="3" rx="1.5" fill="#9FBCD3" />
                  <rect x="58" y="198" width="24" height="3" rx="1.5" fill="#9FBCD3" />
                </g>
                <g fill="none" stroke="#F28A2E" strokeWidth="3" strokeLinecap="round">
                  <path className="flow" d="M348 110 V70 H260 V60" />
                  <path className="flow" d="M90 198 H70" />
                </g>
                <g className="spin" style={{ animationDuration : "12s" }}>
                  <circle cx="190" cy="34" r="20" fill="none" stroke="#0B7CC4" strokeWidth="9" strokeDasharray="7 5.6" />
                  <circle cx="190" cy="34" r="15" fill="#0B7CC4" />
                  <circle cx="190" cy="34" r="6" fill="#0B2236" />
                </g>
                <g className="spin-r" style={{ animationDuration : "9s" }}>
                  <circle cx="226" cy="44" r="12" fill="none" stroke="#F28A2E" strokeWidth="6" strokeDasharray="4.5 3.9" />
                  <circle cx="226" cy="44" r="9" fill="#0B2236" stroke="#F28A2E" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </div>
        </section>
        <section style={{ padding : "88px 24px" }}>
          <div style={{ maxWidth : "1280px", margin : "0 auto" }}>
            <div className="rv" style={{ maxWidth : "720px", marginBottom : "36px" }}>
              <div style={{ fontSize : "14px", fontWeight : "800", letterSpacing : ".12em", textTransform : "uppercase", color : "#B85A0E", marginBottom : "12px" }}>
                {L("Ոլորտներ")}
              </div>
              <h2 className="h2x" style={{ margin : "0", fontSize : "46px", lineHeight : "1.1", letterSpacing : "-0.03em", fontWeight : "800" }}>
                {L("Ում հետ ենք աշխատում")}
              </h2>
            </div>
            <div style={{ display : "grid", gridTemplateColumns : "repeat(auto-fit, minmax(270px, 1fr))", gap : "16px" }}>
              {(V.sectors ?? []).map((x: any, $i7: number) => (
                <React.Fragment key={$i7}>
                  <div className="lift rv" style={{ background : "#fff", border : "1px solid #E1ECF5", borderRadius : "24px", padding : "26px" }}>
                    <span style={{ width : "52px", height : "52px", borderRadius : "16px", background : "#EAF4FB", color : "#0A6FB0", display : "inline-flex", alignItems : "center", justifyContent : "center" }}>
                      <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d={x?.ic} />
                      </svg>
                    </span>
                    <div style={{ fontWeight : "800", fontSize : "19px", margin : "18px 0 0" }}>
                      {x?.t}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
        <section style={{ padding : "88px 24px" }}>
          <div style={{ maxWidth : "1280px", margin : "0 auto" }}>
            <div className="rv" style={{ maxWidth : "720px", marginBottom : "36px" }}>
              <div style={{ fontSize : "14px", fontWeight : "800", letterSpacing : ".12em", textTransform : "uppercase", color : "#B85A0E", marginBottom : "12px" }}>
                {L("Ինչու մենք")}
              </div>
              <h2 className="h2x" style={{ margin : "0", fontSize : "46px", lineHeight : "1.1", letterSpacing : "-0.03em", fontWeight : "800" }}>
                {L("Մեր առավելությունները")}
              </h2>
            </div>
            <div style={{ display : "grid", gridTemplateColumns : "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap : "16px" }}>
              {(V.perks ?? []).map((k: any, $i7: number) => (
                <React.Fragment key={$i7}>
                  <div className="lift rv adv-card" style={{ background : "#fff", border : "1px solid #E1ECF5", borderRadius : "24px", padding : "26px", display : "flex", gap : "18px", alignItems : "flex-start" }}>
                    <span style={{ width : "52px", height : "52px", borderRadius : "16px", background : "#FFF1E4", color : "#B85A0E", display : "inline-flex", alignItems : "center", justifyContent : "center", flex : "none" }}>
                      <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d={k?.ic} />
                      </svg>
                    </span>
                    <div>
                      <div style={{ fontWeight : "800", fontSize : "18px", marginBottom : "6px" }}>
                        {k?.t}
                      </div>
                      <div style={{ color : "#4A5F73", lineHeight : "1.5", fontSize : "15px" }}>
                        {k?.d}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
        <section style={{ padding : "24px 24px 72px" }}>
          <div style={{ maxWidth : "1280px", margin : "0 auto" }}>
            <div className="rv" style={{ textAlign : "center", fontSize : "14px", fontWeight : "800", letterSpacing : ".12em", textTransform : "uppercase", color : "#4A5F73", marginBottom : "20px" }}>
              {L("Մեզ վստահում են")}
            </div>
            <div className="logowrap" style={{ overflow : "hidden", margin : "0 -24px", padding : "8px 0", maskImage : "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)", WebkitMaskImage : "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }}>
              <div className="logomarq" style={css(`display: flex; gap: 16px; width: max-content; animation-duration: ${V.logoDur ?? ""}`)}>
                {(V.logoLoop ?? []).map((l: any, $i8: number) => (
                  <React.Fragment key={$i8}>
                    <div className="logocard" style={{ flex : "0 0 220px", height : "96px", borderRadius : "20px", background : "#fff", border : "1.5px dashed #C3D6E6", display : "flex", alignItems : "center", justifyContent : "center", color : "#6B7F92", fontWeight : "700", fontSize : "14px" }}>
                      {l}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="b2b-form" style={{ padding : "72px 24px 96px" }}>
          <div style={{ maxWidth : "1280px", margin : "0 auto", display : "flex", flexWrap : "wrap", gap : "48px", alignItems : "flex-start" }}>
            <div className="rv" style={{ flex : "1 1 380px", minWidth : "0" }}>
              <div style={{ fontSize : "14px", fontWeight : "800", letterSpacing : ".12em", textTransform : "uppercase", color : "#B85A0E", marginBottom : "12px" }}>
                {L("Հայտ")}
              </div>
              <h2 className="h2x" style={{ margin : "0 0 14px", fontSize : "46px", lineHeight : "1.1", letterSpacing : "-0.03em", fontWeight : "800" }}>
                {L("Անհատական գնառաջարկ և անվճար տեղազննում")}
              </h2>
              <p style={{ margin : "0 0 28px", color : "#4A5F73", fontSize : "17px", lineHeight : "1.6" }}>
                {L("Մեր մասնագետը կայցելի, կգնահատի օդորակիչների տեխնիկական վիճակը և կներկայացնի անհատական գնառաջարկ։")}
              </p>
              <PhonesCard lang={this.props.lang ?? 'hy'} />
            </div>
            <div className="rv" style={{ flex : "1.3 1 560px", minWidth : "0" }}>
              <BookingForm lang={this.props.lang ?? 'hy'} defaultType="business" />
            </div>
          </div>
        </section>
        <Footer lang={this.props.lang ?? 'hy'} />
      </div>
      </>
    );
  }
}
