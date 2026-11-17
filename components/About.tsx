// @ts-nocheck
'use client';
// About — generated from the Air Control design. Edit the texts and layout here.
import React from 'react';
import { DCLogic, css, muteVideo } from '../lib/dc';
import Header from './Header';
import Footer from './Footer';

const STYLES = "body{margin:0}\na{color:#0A6FB0}a:hover{color:#08568A}\n*,*::before,*::after{box-sizing:border-box}\n:focus-visible{outline:3px solid #F28A2E;outline-offset:3px}\n.hd-nav a{position:relative;text-decoration:none;color:#0B2236;padding:10px 4px;font-weight:600;font-size:15px;transition:color .2s;white-space:nowrap}\n.hd-nav a::after{content:\"\";position:absolute;left:4px;right:4px;bottom:3px;height:2px;border-radius:2px;background:#F28A2E;transform:scaleX(0);transform-origin:left;transition:transform .35s cubic-bezier(.2,.8,.2,1)}\n.hd-nav a:hover{color:#0A6FB0}.hd-nav a:hover::after,.hd-nav a.on::after{transform:scaleX(1)}\n.hd-burger{display:none !important}.hd-phone{display:none !important}\n@media (max-width:1200px){.hd-nav{display:none !important}.hd-burger{display:inline-flex !important}.hd-phone{display:inline-flex !important}}\n@media (max-width:760px){.hd-phone{display:none !important}.hd-word{font-size:22px !important}.hd-sub{font-size:7px !important;letter-spacing:.05em !important}.hd-mark{width:42px;height:42px}.hd-urgent{display:none !important}.hd-top-left{display:none !important}.hd-cta{display:none !important}.hd-phone-txt{display:none}.h1x{font-size:42px !important}.h2x{font-size:32px !important}}\n.ft-link{text-decoration:none;transition:color .2s}.ft-link:hover{color:#fff !important}\n.btn-o,.btn-w{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-weight:800;text-decoration:none;border:0;border-radius:999px;padding:17px 28px;font-size:16px;cursor:pointer;font-family:inherit;transition:transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s}\n.btn-o{background:#F28A2E;color:#0B2236 !important}.btn-w{background:#fff;color:#0B2236 !important;box-shadow:inset 0 0 0 1.5px #D3E2EF}\n.btn-o:hover,.btn-w:hover{transform:translateY(-3px)}.btn-o:hover{box-shadow:0 16px 32px -12px rgba(242,138,46,.8)}\n.lift{transition:transform .4s cubic-bezier(.2,.8,.2,1),box-shadow .4s}.lift:hover{transform:translateY(-6px);box-shadow:0 30px 60px -30px rgba(11,34,54,.4)}\n.spin{transform-box:fill-box;transform-origin:center;animation:spin 10s linear infinite}.spin-r{transform-box:fill-box;transform-origin:center;animation:spin 7s linear infinite reverse}@keyframes spin{to{transform:rotate(360deg)}}\n.pulse-dot{animation:pulse 1.8s ease-in-out infinite}@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(242,138,46,.7)}50%{box-shadow:0 0 0 7px rgba(242,138,46,0)}}\n.floaty{animation:floaty 6s ease-in-out infinite}@keyframes floaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}\n.float-a{animation:floatA 5s ease-in-out infinite}.float-b{animation:floatA 6.5s ease-in-out -1s infinite reverse}\n@keyframes floatA{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-18px) rotate(-1.5deg)}}\n.blob{animation:blob 16s ease-in-out infinite alternate}@keyframes blob{0%{transform:translate(0,0) scale(1)}100%{transform:translate(-70px,50px) scale(1.15)}}\n.draw{stroke-dasharray:420;stroke-dashoffset:420;animation:draw 1.4s .7s cubic-bezier(.6,0,.2,1) forwards}@keyframes draw{to{stroke-dashoffset:0}}\n.ticker{animation:tick 28s linear infinite}@keyframes tick{to{transform:translateX(-50%)}}\n.vic{transition:transform .5s cubic-bezier(.2,.8,.2,1),background .3s}.lift:hover .vic{transform:rotate(-14deg) scale(1.12);background:#F28A2E !important;color:#0B2236 !important}\n.ava{transition:transform .5s cubic-bezier(.2,.8,.2,1)}.lift:hover .ava{transform:scale(1.08)}\n.shield{animation:shield 2.4s ease-in-out infinite}@keyframes shield{0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(242,138,46,.6)}50%{transform:scale(1.06);box-shadow:0 0 0 18px rgba(242,138,46,0)}}\n.rise{animation:rise .9s cubic-bezier(.2,.8,.2,1) both}.d1{animation-delay:.1s}.d2{animation-delay:.22s}\n@keyframes rise{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}\n.tl-dot{animation:tlpulse 2s ease-in-out infinite}@keyframes tlpulse{0%,100%{box-shadow:0 0 0 0 rgba(242,138,46,.7)}50%{box-shadow:0 0 0 12px rgba(242,138,46,0)}}\n@supports (animation-timeline:view()){.rv{animation:rv both cubic-bezier(.2,.8,.2,1);animation-timeline:view();animation-range:entry 0% entry 55%}.grow{animation:grow linear both;animation-timeline:view();animation-range:entry 10% cover 60%}}\n@keyframes rv{from{opacity:0;transform:translateY(60px) scale(.94)}to{opacity:1;transform:none}}\n@supports (animation-timeline:view()){.rvl{animation:rvl both cubic-bezier(.2,.8,.2,1);animation-timeline:view();animation-range:entry 0% entry 60%}}\n@keyframes rvl{from{opacity:0;transform:translateX(-80px)}to{opacity:1;transform:none}}\n@keyframes grow{from{transform:scaleY(0)}to{transform:scaleY(1)}}\n@media (max-width:760px){.c4v{font-size:21px !important}}\n@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation:none !important;transition:none !important}}\n.ann-shine{position:relative;overflow:hidden}.ann-shine::after{content:\"\";position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,rgba(255,255,255,.5) 50%,transparent 70%);transform:translateX(-100%);animation:annshine 5s ease-in-out infinite;pointer-events:none}@keyframes annshine{0%,55%{transform:translateX(-100%)}100%{transform:translateX(100%)}}.ann:hover{background:#F59A45 !important}\n.ann-gift{animation:annwig 2.6s ease-in-out infinite}@keyframes annwig{0%,60%,100%{transform:rotate(0) scale(1)}10%{transform:rotate(-14deg) scale(1.1)}20%{transform:rotate(12deg) scale(1.1)}30%{transform:rotate(-8deg)}40%{transform:rotate(4deg)}}\n.ann-short{display:none}@media (max-width:760px){.ann-long{display:none !important}.ann-short{display:inline !important}.ofc-pill{bottom:96px !important;left:12px !important}}\n.ofc,.ofc-pill{animation:ofcin .6s cubic-bezier(.2,.8,.2,1) both}@keyframes ofcin{from{opacity:0;transform:translateY(30px) scale(.95)}to{opacity:1;transform:none}}\n.ofc-ping{animation:ofping 2s cubic-bezier(0,0,.2,1) infinite}@keyframes ofping{75%,100%{transform:scale(1.7);opacity:0}}\n.xo2{position:relative;display:inline-block}.xo2::after{content:\"\";position:absolute;left:-5px;right:-5px;top:52%;height:3px;border-radius:3px;background:#D9480F;transform:rotate(-10deg) scaleX(0);transform-origin:left center;animation:xo2 4s ease-in-out infinite}@keyframes xo2{0%,12%{transform:rotate(-10deg) scaleX(0)}32%,100%{transform:rotate(-10deg) scaleX(1)}}\n.btn-w.btn-ghost{background:transparent !important;color:#fff !important;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.5) !important}.btn-w.btn-ghost:hover{background:rgba(255,255,255,.12) !important}\n.fb input:focus,.fb textarea:focus{border-color:#0A6FB0 !important;box-shadow:0 0 0 4px rgba(10,111,176,.15);outline:none}\n.fb-in{animation:fbin .45s cubic-bezier(.2,.8,.2,1) both}@keyframes fbin{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}\n.fb-check{stroke-dasharray:60;stroke-dashoffset:60;animation:fbck .8s .2s ease forwards}@keyframes fbck{to{stroke-dashoffset:0}}\n.fb-chip{transition:background .2s,color .2s,transform .2s}.fb-chip:hover{transform:translateY(-2px)}\n.fb-star{transition:transform .2s}.fb-star:hover{transform:scale(1.15)}\n.fb-btn{transition:transform .3s,box-shadow .3s}.fb-btn:hover{transform:translateY(-2px);box-shadow:0 14px 28px -12px rgba(10,111,176,.7)}\n.fbm{animation:fbfade .3s ease both}@keyframes fbfade{from{opacity:0}to{opacity:1}}\n.fbm-card{animation:fbpop .45s cubic-bezier(.2,.8,.2,1) both}@keyframes fbpop{from{opacity:0;transform:translateY(30px) scale(.96)}to{opacity:1;transform:none}}\n.ft-btn{background:none;border:0;padding:6px 0;cursor:pointer;font-family:inherit;text-align:left;transition:color .2s}.ft-btn:hover{color:#fff !important}";

export default class About extends DCLogic {
  componentDidMount() {
    const t0 = performance.now(), dur = 1800;
    const step = (now) => {
      const k = Math.min(1, (now - t0) / dur);
      this.setState({ k });
      if (k < 1) this._raf = requestAnimationFrame(step);
    };
    this._raf = requestAnimationFrame(step);
  }
  componentWillUnmount() { cancelAnimationFrame(this._raf); }
  renderVals() {
    const st = this.state || {};
    const k = st.k ?? 1;
    const e = 1 - Math.pow(1 - k, 3);
    const n = (v) => String(Math.round(v * e)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    const words = ['Ազնիվ գին', 'Մաքուր աշխատանք', 'Որակի երաշխիք', 'Երևան և հարակից մարզեր', 'Ճշտապահություն', 'Պատասխանատվություն', 'Վճարում՝ աշխատանքից հետո'];
    return {
      c1: n(10), c2: n(8500) + '+', c4: 'Երաշխիք',
      ticker: words.concat(words),
      values: [
        { t: 'Ազնիվ գին', d: 'Գինը հայտնում ենք նախքան աշխատանքը, առանց թաքնված վճարների։', ic: 'M12 2v20 M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' },
        { t: 'Մաքրություն', d: 'Աշխատում ենք մաքուր և կոկիկ՝ պահպանելով տարածքի մաքրությունը։', ic: 'M12 3c3 4 5 6.5 5 9a5 5 0 0 1-10 0c0-2.5 2-5 5-9z' },
        { t: 'Պրոֆեսիոնալիզմ', d: 'Բարձր պրոֆեսիոնալիզմ, տարիների փորձ ու պատասխանատու մոտեցում։', ic: 'M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z M8.5 14L7 22l5-3 5 3-1.5-8' },
        { t: 'Պատասխանատվություն', d: 'Անհատական մոտեցում յուրաքանչյուր խնդրին։', ic: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M9 12l2 2 4-4' }
      ],
      visit: [
        { n: '01', t: 'Զանգ և համաձայնեցում', d: 'Ճշտում ենք խնդիրը և համաձայնեցնում այցի օրը։' },
        { n: '02', t: 'Ախտորոշում', d: 'Վարպետը ստուգում է օդորակիչը և ասում ճշգրիտ գինը նախքան աշխատանքը։' },
        { n: '03', t: 'Ձեր տան պաշտպանություն', d: 'Բախիլներ, ծածկոցներ և փոշեկուլ՝ կահույքն ու հատակը մաքուր մնալու համար։' },
        { n: '04', t: 'Աշխատանք', d: 'Պրոֆեսիոնալ գործիքներով և ըստ արտադրողի նորմերի։' },
        { n: '05', t: 'Ստուգում ձեր ներկայությամբ', d: 'Միացնում ենք և ցույց տալիս, որ ամեն ինչ աշխատում է։' },
        { n: '06', t: 'Մաքրություն և վճարում', d: 'Թողնում ենք մաքուր, իսկ դուք վճարում եք արդյունքից հետո։' }
      ],
      timeline: [
        { y: '2014', t: 'Սկիզբ', d: 'Երկու վարպետ, մեկ ավտոմեքենա և առաջին 100 հաճախորդները Երևանում։' },
        { y: '2017', t: 'Առաջին բիզնես հաճախորդները', d: 'Սկսեցինք պլանային սպասարկում գրասենյակների և ռեստորանների համար։' },
        { y: '2020', t: 'Հարակից մարզեր', d: 'Ընդլայնեցինք սպասարկման տարածքը՝ ներառելով Երևանին հարակից մարզերը։' },
        { y: '2023', t: 'VRF/VRV համակարգեր', d: 'Թիմը վերապատրաստվեց խոշոր կոմերցիոն համակարգերի սպասարկման համար։' },
        { y: '2026', t: 'Նոր Air Control', d: 'Նոր կայք, առցանց գրանցում և գնահատում լուսանկարով։' }
      ],
      team: [
        { n: '[Անուն Ազգանուն]', r: 'Հիմնադիր, գլխավոր ինժեներ', i: 'Ա', c: '#0A6FB0' },
        { n: '[Անուն Ազգանուն]', r: 'Ավագ վարպետ', i: 'Վ', c: '#0B2236' },
        { n: '[Անուն Ազգանուն]', r: 'Բիզնես հաճախորդների մենեջեր', i: 'Մ', c: '#B85A0E' },
        { n: '[Անուն Ազգանուն]', r: 'Դիսպետչեր', i: 'Դ', c: '#1F7A4D' }
      ]
    };
  }

  render() {
    const V: any = this.renderVals() || {};
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div style={{ fontFamily : "'Manrope', 'Noto Sans Armenian', system-ui, sans-serif", color : "#0B2236", background : "#F4F8FC", overflowX : "clip" }}>
        <div style={{ position : "sticky", top : "0", zIndex : "60" }}>
          <Header active="about" lang="hy" />
        </div>
        <section style={{ padding : "72px 24px 88px", position : "relative", overflow : "hidden" }}>
          <div aria-hidden="true" className="blob" style={{ position : "absolute", width : "680px", height : "680px", right : "-180px", top : "-240px", borderRadius : "50%", background : "radial-gradient(circle, rgba(169,211,239,.8), rgba(169,211,239,0) 68%)" }} />
          <div aria-hidden="true" className="blob" style={{ position : "absolute", width : "420px", height : "420px", left : "-160px", bottom : "-200px", borderRadius : "50%", background : "radial-gradient(circle, rgba(242,138,46,.25), rgba(242,138,46,0) 68%)", animationDuration : "14s" }} />
          <div style={{ maxWidth : "1280px", margin : "0 auto", display : "flex", flexWrap : "wrap", gap : "56px", alignItems : "center", position : "relative" }}>
            <div style={{ flex : "1 1 540px", minWidth : "0" }}>
              <div className="rise" style={{ fontSize : "14px", fontWeight : "800", letterSpacing : ".12em", textTransform : "uppercase", color : "#B85A0E" }}>
                {"Մեր մասին"}
              </div>
              <h1 className="rise d1 h1x" style={{ margin : "18px 0 22px", fontSize : "64px", lineHeight : "1.05", letterSpacing : "-0.035em", fontWeight : "800" }}>
                {"Մենք պատասխանատու ենք ձեր տան "}
                <span style={{ position : "relative", display : "inline-block", color : "#0A6FB0" }}>
                  {"կլիմայի"}
                  <svg aria-hidden="true" viewBox="0 0 300 20" preserveAspectRatio="none" style={{ position : "absolute", left : "0", bottom : "-10px", width : "100%", height : "18px" }}>
                    <path className="draw" d="M4 14 C 70 4, 150 4, 296 12" fill="none" stroke="#F28A2E" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </span>
                {" համար"}
              </h1>
              <p className="rise d2" style={{ margin : "0 0 18px", fontSize : "19px", lineHeight : "1.65", color : "#3F566B" }}>
                {"Մեր թիմը միավորում է գիտելիքն ու փորձը՝ յուրաքանչյուր հաճախորդին լավագույն և հուսալի արդյունքն ապահովելու համար։"}
              </p>
              <p className="rise d2" style={{ margin : "0", fontSize : "19px", lineHeight : "1.65", color : "#3F566B" }}>
                {"Մեր առաջնահերթությունը հաճախորդների վստահությունն է, անհատական մոտեցումը և երկարատև համագործակցությունը։"}
              </p>
            </div>
            <div className="rise d2" style={{ flex : "1 1 440px", minWidth : "0", position : "relative" }}>
              <svg aria-hidden="true" viewBox="0 0 400 400" style={{ position : "absolute", left : "50%", top : "50%", width : "520px", height : "520px", transform : "translate(-50%, -50%)", opacity : ".5" }}>
                <g className="spin" style={{ animationDuration : "24s" }}>
                  <circle cx="200" cy="200" r="150" fill="none" stroke="#A9D3EF" strokeWidth="40" strokeDasharray="40 30.7" />
                </g>
                <g className="spin-r" style={{ animationDuration : "18s" }}>
                  <circle cx="330" cy="70" r="46" fill="none" stroke="#F6C9A0" strokeWidth="18" strokeDasharray="16 14" />
                </g>
              </svg>
              <div style={{ position : "relative", display : "grid", gridTemplateColumns : "repeat(2, minmax(0, 1fr))", gap : "16px" }}>
                <div className="float-a" style={{ background : "#0A6FB0", color : "#fff", display : "flex", flexDirection : "column", justifyContent : "flex-end", borderRadius : "28px", padding : "28px", minHeight : "190px", position : "relative", overflow : "hidden" }}>
                  <svg aria-hidden="true" className="spin" viewBox="0 0 24 24" style={{ position : "absolute", right : "18px", top : "18px", width : "40px", height : "40px", animationDuration : "8s" }} fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="2">
                    <circle cx="12" cy="12" r="7" strokeDasharray="3 2.5" strokeWidth="4" />
                  </svg>
                  <div style={{ fontSize : "56px", fontWeight : "800", letterSpacing : "-0.03em", fontVariantNumeric : "tabular-nums" }}>
                    {V.c1}
                  </div>
                  <div style={{ color : "#D9EAF7" }}>
                    {"տարի ոլորտում"}
                  </div>
                </div>
                <div className="float-b" style={{ background : "#fff", border : "1px solid #E1ECF5", marginTop : "40px", display : "flex", flexDirection : "column", justifyContent : "flex-end", borderRadius : "28px", padding : "28px", minHeight : "190px", position : "relative", overflow : "hidden" }}>
                  <div style={{ fontSize : "56px", fontWeight : "800", letterSpacing : "-0.03em", fontVariantNumeric : "tabular-nums" }}>
                    {V.c2}
                  </div>
                  <div style={{ color : "#4A5F73" }}>
                    {"սպասարկված օդորակիչ"}
                  </div>
                </div>
                <div className="float-b" style={{ background : "#fff", border : "1px solid #E1ECF5", animationDelay : "-2s", display : "flex", flexDirection : "column", justifyContent : "flex-end", borderRadius : "28px", padding : "28px", minHeight : "190px", position : "relative", overflow : "hidden" }}>
                  <div className="c4v" style={{ fontSize : "34px", lineHeight : "1.1", fontWeight : "800", letterSpacing : "-0.02em" }}>
                    {"Փորձառու վարպետներ"}
                  </div>
                </div>
                <div className="float-a" style={{ background : "#F28A2E", color : "#0B2236", marginTop : "40px", animationDelay : "-3s", display : "flex", flexDirection : "column", justifyContent : "flex-end", borderRadius : "28px", padding : "28px", minHeight : "190px", position : "relative", overflow : "hidden" }}>
                  <div className="c4v" style={{ fontSize : "44px", fontWeight : "800", letterSpacing : "-0.03em", fontVariantNumeric : "tabular-nums" }}>
                    {V.c4}
                  </div>
                  <div>
                    {"մեր կատարած աշխատանքին"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div aria-label="Մեր սկզբունքները" style={{ background : "#0B2236", color : "#fff", padding : "22px 0", overflow : "hidden", transform : "rotate(-1.2deg)", margin : "0 -20px", boxShadow : "0 20px 40px -24px rgba(11,34,54,.6)" }}>
          <div className="ticker" style={{ display : "flex", gap : "48px", width : "max-content", alignItems : "center" }}>
            {(V.ticker ?? []).map((w: any, $i6: number) => (
              <React.Fragment key={$i6}>
                <span style={{ display : "inline-flex", alignItems : "center", gap : "48px", fontSize : "26px", fontWeight : "800", letterSpacing : "-0.01em", whiteSpace : "nowrap" }}>
                  {w}
                  <svg aria-hidden="true" className="spin" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#F28A2E" strokeWidth="2.2" strokeLinecap="round" style={{ animationDuration : "6s" }}>
                    <path d="M12 2v20M4.9 7l14.2 10M4.9 17L19.1 7" />
                  </svg>
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
        <section style={{ padding : "72px 24px", background : "#fff" }}>
          <div style={{ maxWidth : "1280px", margin : "0 auto" }}>
            <h2 className="rv h2x" style={{ margin : "0 0 36px", fontSize : "46px", lineHeight : "1.1", letterSpacing : "-0.03em", fontWeight : "800", maxWidth : "720px" }}>
              {"Մեր արժեքները"}
            </h2>
            <div style={{ display : "grid", gridTemplateColumns : "repeat(auto-fit, minmax(260px, 1fr))", gap : "20px" }}>
              {(V.values ?? []).map((v: any, $i7: number) => (
                <React.Fragment key={$i7}>
                  <div className="lift rv" style={{ background : "#F4F8FC", borderRadius : "28px", padding : "30px" }}>
                    <span className="vic" style={{ width : "56px", height : "56px", borderRadius : "18px", background : "#0B2236", color : "#F28A2E", display : "inline-flex", alignItems : "center", justifyContent : "center" }}>
                      <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d={v?.ic} />
                      </svg>
                    </span>
                    <div style={{ fontWeight : "800", fontSize : "17px", margin : "20px 0 8px", overflowWrap : "normal", wordBreak : "keep-all" }}>
                      {v?.t}
                    </div>
                    <div style={{ color : "#4A5F73", lineHeight : "1.55" }}>
                      {v?.d}
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
                {"Ինչու ենք մենք այստեղ"}
              </div>
              <h2 className="h2x" style={{ margin : "0", fontSize : "46px", lineHeight : "1.1", letterSpacing : "-0.03em", fontWeight : "800" }}>
                {"Առաքելություն և տեսլական"}
              </h2>
            </div>
            <div style={{ display : "grid", gridTemplateColumns : "repeat(auto-fit, minmax(340px, 1fr))", gap : "20px" }}>
              <div className="lift rv" style={{ background : "#0B2236", color : "#fff", borderRadius : "32px", padding : "44px", position : "relative", overflow : "hidden" }}>
                <svg aria-hidden="true" viewBox="0 0 200 200" className="spin" style={{ position : "absolute", right : "-60px", bottom : "-60px", width : "240px", height : "240px", opacity : ".12", animationDuration : "36s" }}>
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#F28A2E" strokeWidth="30" strokeDasharray="24 19" />
                </svg>
                <span className="vic" style={{ width : "60px", height : "60px", borderRadius : "18px", background : "#F28A2E", color : "#0B2236", display : "inline-flex", alignItems : "center", justifyContent : "center", position : "relative" }}>
                  <svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="12" cy="12" r="1.5" />
                  </svg>
                </span>
                <div style={{ fontSize : "14px", fontWeight : "800", letterSpacing : ".12em", textTransform : "uppercase", color : "#F6A75F", margin : "26px 0 12px", position : "relative" }}>
                  {"Մեր առաքելությունը"}
                </div>
                <p style={{ margin : "0", fontSize : "24px", lineHeight : "1.45", fontWeight : "700", position : "relative" }}>
                  {"Ապահովել հարմարավետ և առողջ կլիմա յուրաքանչյուր տանն ու գրասենյակում՝ ազնիվ գնով, մաքուր աշխատանքով և պատասխանատվությամբ։"}
                </p>
              </div>
              <div className="lift rv" style={{ background : "#fff", border : "1px solid #E1ECF5", borderRadius : "32px", padding : "44px", position : "relative", overflow : "hidden" }}>
                <svg aria-hidden="true" viewBox="0 0 200 200" className="spin-r" style={{ position : "absolute", right : "-60px", bottom : "-60px", width : "240px", height : "240px", opacity : ".1", animationDuration : "40s" }}>
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#0A6FB0" strokeWidth="30" strokeDasharray="24 19" />
                </svg>
                <span className="vic" style={{ width : "60px", height : "60px", borderRadius : "18px", background : "#0A6FB0", color : "#fff", display : "inline-flex", alignItems : "center", justifyContent : "center", position : "relative" }}>
                  <svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </span>
                <div style={{ fontSize : "14px", fontWeight : "800", letterSpacing : ".12em", textTransform : "uppercase", color : "#0A6FB0", margin : "26px 0 12px", position : "relative" }}>
                  {"Մեր տեսլականը"}
                </div>
                <p style={{ margin : "0", fontSize : "24px", lineHeight : "1.45", fontWeight : "700", position : "relative" }}>
                  {"Դառնալ Երևանում և հարակից մարզերում օդորակիչների սպասարկման ամենավստահելի կենտրոնը, որին դիմում են առանց կասկածի և խորհուրդ են տալիս ընկերներին։"}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section style={{ padding : "72px 24px", background : "#fff" }}>
          <div style={{ maxWidth : "1280px", margin : "0 auto" }}>
            <div className="rv" style={{ display : "flex", flexWrap : "wrap", justifyContent : "space-between", alignItems : "flex-end", gap : "24px", marginBottom : "36px" }}>
              <div style={{ maxWidth : "640px" }}>
                <div style={{ fontSize : "14px", fontWeight : "800", letterSpacing : ".12em", textTransform : "uppercase", color : "#B85A0E", marginBottom : "12px" }}>
                  {"Մեր ստանդարտը"}
                </div>
                <h2 className="h2x" style={{ margin : "0", fontSize : "46px", lineHeight : "1.1", letterSpacing : "-0.03em", fontWeight : "800" }}>
                  {"Ինչպես է անցնում յուրաքանչյուր այց"}
                </h2>
              </div>
              <p style={{ margin : "0", color : "#4A5F73", maxWidth : "440px", lineHeight : "1.6" }}>
                {"Կանոններ, որոնք պահպանում է մեր յուրաքանչյուր վարպետ՝ անկախ աշխատանքի ծավալից։"}
              </p>
            </div>
            <div style={{ display : "grid", gridTemplateColumns : "repeat(auto-fit, minmax(260px, 1fr))", gap : "16px" }}>
              {(V.visit ?? []).map((v: any, $i7: number) => (
                <React.Fragment key={$i7}>
                  <div className="lift rv" style={{ background : "#F4F8FC", borderRadius : "26px", padding : "28px", position : "relative", overflow : "hidden" }}>
                    <span style={{ fontFamily : "'Playfair Display', Georgia, serif", fontSize : "56px", fontWeight : "900", color : "#A9D3EF", lineHeight : "1" }}>
                      {v?.n}
                    </span>
                    <div style={{ fontWeight : "800", fontSize : "19px", margin : "12px 0 6px" }}>
                      {v?.t}
                    </div>
                    <div style={{ color : "#4A5F73", lineHeight : "1.55" }}>
                      {v?.d}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
        <section style={{ padding : "88px 24px" }}>
          <div className="rv" style={{ maxWidth : "1280px", margin : "0 auto", background : "#0B2236", color : "#fff", borderRadius : "40px", padding : "56px", display : "flex", flexWrap : "wrap", gap : "40px", alignItems : "center", position : "relative", overflow : "hidden" }}>
            <svg aria-hidden="true" viewBox="0 0 200 200" className="spin" style={{ position : "absolute", right : "-60px", top : "-60px", width : "300px", height : "300px", opacity : ".12", animationDuration : "40s" }}>
              <circle cx="100" cy="100" r="70" fill="none" stroke="#F28A2E" strokeWidth="30" strokeDasharray="24 19" />
            </svg>
            <span className="shield" style={{ width : "96px", height : "96px", borderRadius : "30px", background : "#F28A2E", color : "#0B2236", display : "inline-flex", alignItems : "center", justifyContent : "center", flex : "none", position : "relative" }}>
              <svg aria-hidden="true" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M9 12l2 2 4-4" />
              </svg>
            </span>
            <div style={{ flex : "1 1 460px", position : "relative" }}>
              <div style={{ fontSize : "14px", fontWeight : "800", letterSpacing : ".12em", textTransform : "uppercase", color : "#F6A75F", marginBottom : "12px" }}>
                {"Որակի երաշխիք"}
              </div>
              <div className="h2x" style={{ fontSize : "42px", lineHeight : "1.1", letterSpacing : "-0.03em", fontWeight : "800", marginBottom : "14px" }}>
                {"Պատասխանատու ենք մեր յուրաքանչյուր աշխատանքի համար"}
              </div>
              <div style={{ color : "#C2D3E2", lineHeight : "1.6", fontSize : "17px" }}>
                {"Մեր աշխատանքի որակը երաշխավորված է․ եթե երբևէ տեխնիկական հարց առաջանա մեր միջամտության հետ կապված, կայցելենք և կկարգավորենք անվճար։"}
              </div>
            </div>
            <div style={{ display : "flex", flexWrap : "wrap", gap : "12px", position : "relative" }}>
              <a href="/contacts/" className="btn-o">
                {"Թողնել հայտ"}
              </a>
              <a href="/services/" className="btn-w btn-ghost">
                {"Ծառայություններ"}
              </a>
            </div>
          </div>
        </section>
        <Footer lang="hy" />
      </div>
      </>
    );
  }
}
