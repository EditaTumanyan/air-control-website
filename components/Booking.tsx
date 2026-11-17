// @ts-nocheck
'use client';
// Booking — generated from the Air Control design. Edit the texts and layout here.
import React from 'react';
import { DCLogic, css, muteVideo } from '../lib/dc';
import { tr, path } from '../lib/i18n';
import { RU } from '../lib/ru/Booking';
import Header from './Header';
import PhonesCard from './PhonesCard';
import BookingForm from './BookingForm';
import Feedback from './Feedback';
import Footer from './Footer';

const STYLES = "body{margin:0}\na{color:#0A6FB0}a:hover{color:#08568A}\n*,*::before,*::after{box-sizing:border-box}\n:focus-visible{outline:3px solid #F28A2E;outline-offset:3px}\n.hd-nav a{position:relative;text-decoration:none;color:#0B2236;padding:10px 4px;font-weight:600;font-size:15px;transition:color .2s;white-space:nowrap}\n.hd-nav a::after{content:\"\";position:absolute;left:4px;right:4px;bottom:3px;height:2px;border-radius:2px;background:#F28A2E;transform:scaleX(0);transform-origin:left;transition:transform .35s cubic-bezier(.2,.8,.2,1)}\n.hd-nav a:hover{color:#0A6FB0}.hd-nav a:hover::after,.hd-nav a.on::after{transform:scaleX(1)}\n.hd-burger{display:none !important}.hd-phone{display:none !important}\n@media (max-width:1200px){.hd-nav{display:none !important}.hd-burger{display:inline-flex !important}.hd-phone{display:inline-flex !important}}\n@media (max-width:760px){.hd-phone{display:none !important}.hd-word{font-size:22px !important}.hd-sub{font-size:7px !important;letter-spacing:.05em !important}.hd-mark{width:42px;height:42px}.hd-urgent{display:none !important}.hd-top-left{display:none !important}.hd-cta{display:none !important}.hd-phone-txt{display:none}.h1x{font-size:40px !important}}\n.ft-link{text-decoration:none;transition:color .2s}.ft-link:hover{color:#fff !important}\n.btn-o,.btn-w,.btn-b{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-weight:800;text-decoration:none;border:0;border-radius:999px;padding:17px 28px;font-size:16px;cursor:pointer;font-family:inherit;transition:transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s}\n.btn-o{background:#F28A2E;color:#0B2236 !important}.btn-b{background:#0A6FB0;color:#fff !important}.btn-w{background:#fff;color:#0B2236 !important;box-shadow:inset 0 0 0 1.5px #D3E2EF}\n.btn-o:hover,.btn-w:hover{transform:translateY(-3px)}.btn-o:hover{box-shadow:0 16px 32px -12px rgba(242,138,46,.8)}\n.lift{transition:transform .4s cubic-bezier(.2,.8,.2,1),box-shadow .4s}.lift:hover{transform:translateY(-5px);box-shadow:0 26px 50px -28px rgba(11,34,54,.4)}\n.chip{transition:background .2s,color .2s,border-color .2s,transform .2s}.chip:hover{transform:translateY(-2px)}\n.pulse-dot{animation:pulse 1.8s ease-in-out infinite}@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(242,138,46,.7)}50%{box-shadow:0 0 0 7px rgba(242,138,46,0)}}\n.ping{transform-box:fill-box;transform-origin:center;animation:ping 2s cubic-bezier(0,0,.2,1) infinite}@keyframes ping{75%,100%{transform:scale(2.6);opacity:0}}\n.van{animation:van 9s ease-in-out infinite}@keyframes van{0%{offset-distance:0%}100%{offset-distance:100%}}\n.rise{animation:rise .9s cubic-bezier(.2,.8,.2,1) both}.d1{animation-delay:.1s}.d2{animation-delay:.22s}\n@keyframes rise{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}\n.bub{animation:rise .5s cubic-bezier(.2,.8,.2,1) both}\n.bf input,.bf select,.bf textarea{transition:border-color .2s,box-shadow .2s}\n.bf input:focus,.bf select:focus,.bf textarea:focus{border-color:#0A6FB0 !important;box-shadow:0 0 0 4px rgba(10,111,176,.15);background:#fff !important;outline:none}\n.check-draw{stroke-dasharray:60;stroke-dashoffset:60;animation:draw .8s .2s ease forwards}@keyframes draw{to{stroke-dashoffset:0}}\n@supports (animation-timeline:view()){.rv{animation:rv both cubic-bezier(.2,.8,.2,1);animation-timeline:view();animation-range:entry 0% entry 55%}}\n@keyframes rv{from{opacity:0;transform:translateY(48px)}to{opacity:1;transform:none}}\n@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation:none !important;transition:none !important}}\n.ann-shine{position:relative;overflow:hidden}.ann-shine::after{content:\"\";position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,rgba(255,255,255,.5) 50%,transparent 70%);transform:translateX(-100%);animation:annshine 5s ease-in-out infinite;pointer-events:none}@keyframes annshine{0%,55%{transform:translateX(-100%)}100%{transform:translateX(100%)}}.ann:hover{background:#F59A45 !important}\n.ann-gift{animation:annwig 2.6s ease-in-out infinite}@keyframes annwig{0%,60%,100%{transform:rotate(0) scale(1)}10%{transform:rotate(-14deg) scale(1.1)}20%{transform:rotate(12deg) scale(1.1)}30%{transform:rotate(-8deg)}40%{transform:rotate(4deg)}}\n.ann-short{display:none}@media (max-width:760px){.ann-long{display:none !important}.ann-short{display:inline !important}.ofc-pill{bottom:16px !important;left:12px !important}}\n.ofc,.ofc-pill{animation:ofcin .6s cubic-bezier(.2,.8,.2,1) both}@keyframes ofcin{from{opacity:0;transform:translateY(30px) scale(.95)}to{opacity:1;transform:none}}\n.ofc-ping{animation:ofping 2s cubic-bezier(0,0,.2,1) infinite}@keyframes ofping{75%,100%{transform:scale(1.7);opacity:0}}\n.xo2{position:relative;display:inline-block}.xo2::after{content:\"\";position:absolute;left:-5px;right:-5px;top:52%;height:3px;border-radius:3px;background:#D9480F;transform:rotate(-10deg) scaleX(0);transform-origin:left center;animation:xo2 4s ease-in-out infinite}@keyframes xo2{0%,12%{transform:rotate(-10deg) scaleX(0)}32%,100%{transform:rotate(-10deg) scaleX(1)}}\n.btn-w.btn-ghost{background:transparent !important;color:#fff !important;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.5) !important}.btn-w.btn-ghost:hover{background:rgba(255,255,255,.12) !important}\n#feedback button[aria-label]:hover{transform:scale(1.15)}\n.fb input:focus,.fb textarea:focus{border-color:#0A6FB0 !important;box-shadow:0 0 0 4px rgba(10,111,176,.15);outline:none}\n.fb-in{animation:fbin .45s cubic-bezier(.2,.8,.2,1) both}@keyframes fbin{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}\n.fb-check{stroke-dasharray:60;stroke-dashoffset:60;animation:fbck .8s .2s ease forwards}@keyframes fbck{to{stroke-dashoffset:0}}\n.fb-chip{transition:background .2s,color .2s,transform .2s}.fb-chip:hover{transform:translateY(-2px)}\n.fb-star{transition:transform .2s}.fb-star:hover{transform:scale(1.15)}\n.fb-btn{transition:transform .3s,box-shadow .3s}.fb-btn:hover{transform:translateY(-2px);box-shadow:0 14px 28px -12px rgba(10,111,176,.7)}\n.fbm{animation:fbfade .3s ease both}@keyframes fbfade{from{opacity:0}to{opacity:1}}\n.fbm-card{animation:fbpop .45s cubic-bezier(.2,.8,.2,1) both}@keyframes fbpop{from{opacity:0;transform:translateY(30px) scale(.96)}to{opacity:1;transform:none}}\n.ft-btn{background:none;border:0;padding:6px 0;cursor:pointer;font-family:inherit;text-align:left;transition:color .2s}.ft-btn:hover{color:#fff !important}\n.map-m{display:none}@media (max-width:760px){.svc-map{height:auto !important;aspect-ratio:4/3}.map-d{display:none}.map-m{display:block}.map-ov{display:none !important}}";

export default class Booking extends DCLogic {
  renderVals() {
    const L = tr(this.props.lang, RU);
    const P = (p: string) => path(this.props.lang, p);
    const st0 = this.state || {};
    const fbType = st0.fbType || ((typeof location !== 'undefined' && location.hash === '#review') ? 'thanks' : 'complaint'), rating = st0.rating || 0, anon = !!st0.anon;
    const types = [['complaint',L("Բողոք"),'M12 9v4 M12 17h.01 M10.3 3.9L2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z'],['idea',L("Առաջարկություն"),'M9 18h6 M10 21h4 M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z'],['thanks',L("Շնորհակալություն"),'M12 21s-7-4.4-9.2-9A5 5 0 0 1 12 6a5 5 0 0 1 9.2 6c-2.2 4.6-9.2 9-9.2 9z']];
    const rl = [L("Ընտրեք աստղերը"), L("Շատ վատ"), L("Վատ"), L("Միջին"), L("Լավ"), L("Գերազանց")];
    const fbExtra = {
      fbTypes: types.map(t => { const on = t[0] === fbType; return { label: t[1], ic: t[2], on, pick: () => this.setState({ fbType: t[0] }), style: 'min-height: 50px; border-radius: 14px; font-family: inherit; font-size: 15px; font-weight: 800; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 8px; ' + (on ? 'background: #0B2236; color: #fff; border: 1.5px solid #0B2236' : 'background: #fff; color: #0B2236; border: 1.5px solid #D5E2EE') }; }),
      stars: [1, 2, 3, 4, 5].map(n => ({ label: n + ' / 5', on: n === rating, fill: n <= rating ? '#F28A2E' : 'none', stroke: n <= rating ? '#F28A2E' : '#9FB4C7', pick: () => this.setState({ rating: n }) })),
      ratingLabel: rl[rating],
      fbMsgLabel: fbType === 'complaint' ? L("Նկարագրեք խնդիրը") : (fbType === 'idea' ? L("Ձեր առաջարկը") : L("Ձեր խոսքը")),
      fbMsgPh: fbType === 'complaint' ? L("Ի՞նչը ձեզ դուր չեկավ։ Մենք կուսումնասիրենք և կուղղենք։") : (fbType === 'idea' ? L("Ի՞նչ կարող ենք անել ավելի լավ։") : L("Ո՞ւմ և ինչի համար եք ուզում շնորհակալություն հայտնել։")),
      notAnon: !anon, toggleAnon: (e) => this.setState({ anon: e.target.checked }),
      fbSent: !!st0.fbSent, fbNotSent: !st0.fbSent,
      fbOkText: anon ? L("Ձեր դիմումը կուսումնասիրվի։ Շնորհակալություն, որ օգնում եք մեզ դառնալ ավելի լավը։") : L("Մենք կուսումնասիրենք ձեր դիմումը և կկապվենք ձեզ հետ։"),
      fbSubmit: (e) => { e.preventDefault(); this.setState({ fbSent: true }); },
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
      contacts: [
        { label: L("Էլ. փոստ"), value: 'air_control_ac_service@mail.ru', href: 'mailto:air_control_ac_service@mail.ru', bg: '#FFF1E4', fg: '#B85A0E', ic: 'M3 5h18v14H3z M3 6l9 7 9-7' }
      ],
      areas: yer.map(n => ({ n, style: pill(true) })).concat(reg.map(n => ({ n, style: pill(false) })))
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
          <Header active="contacts" lang={this.props.lang ?? 'hy'} />
        </div>
        <section style={{ padding : "56px 24px 88px" }}>
          <div style={{ maxWidth : "1280px", margin : "0 auto" }}>
            <h1 className="rise h1x" style={{ margin : "0 0 12px", fontSize : "60px", lineHeight : "1.05", letterSpacing : "-0.035em", fontWeight : "800" }}>
              {L("Հայտ և ")}
              <span style={{ color : "#0A6FB0" }}>
                {L("կոնտակտներ")}
              </span>
            </h1>
            <p className="rise d1" style={{ margin : "0 0 40px", fontSize : "19px", color : "#3F566B", maxWidth : "640px", lineHeight : "1.6" }}>
              {L("Թողեք հայտ կամ կապվեք մեզ հետ ձեզ հարմար եղանակով։ Կզանգահարենք և կհամաձայնեցնենք վարպետի այցը։")}
            </p>
            <div style={{ display : "flex", flexWrap : "wrap", gap : "32px", alignItems : "flex-start" }}>
              <div className="rise d2" style={{ flex : "1.3 1 560px", minWidth : "0" }}>
                <BookingForm lang={this.props.lang ?? 'hy'} />
              </div>
              <div style={{ flex : "1 1 380px", minWidth : "0", display : "flex", flexDirection : "column", gap : "14px" }}>
                <PhonesCard lang={this.props.lang ?? 'hy'} className="rise d2" />
                {(V.contacts ?? []).map((c: any, $i8: number) => (
                  <React.Fragment key={$i8}>
                    <a href={c?.href} className="lift rise d2" style={{ display : "flex", alignItems : "center", gap : "16px", background : "#fff", border : "1px solid #E1ECF5", borderRadius : "22px", padding : "18px 20px", textDecoration : "none", color : "#0B2236" }}>
                      {c?.ic2 ? (
                        <span style={{ position : "relative", width : "50px", height : "50px", flex : "none" }}>
                          <span style={css(`position: absolute; left: 0; top: 0; width: 30px; height: 30px; border-radius: 10px; background: ${c?.bg ?? ""}; color: ${c?.fg ?? ""}; display: inline-flex; align-items: center; justify-content: center`)}>
                            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d={c?.ic} />
                            </svg>
                          </span>
                          <span style={css(`position: absolute; right: 0; bottom: 0; width: 30px; height: 30px; border-radius: 10px; background: ${c?.bg2 ?? ""}; color: ${c?.fg2 ?? ""}; box-shadow: 0 0 0 3px #fff; display: inline-flex; align-items: center; justify-content: center`)}>
                            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d={c?.ic2} />
                            </svg>
                          </span>
                        </span>
                      ) : (
                      <span style={css(`width: 50px; height: 50px; border-radius: 16px; background: ${c?.bg ?? ""}; color: ${c?.fg ?? ""}; display: inline-flex; align-items: center; justify-content: center; flex: none`)}>
                        <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d={c?.ic} />
                        </svg>
                      </span>
                      )}
                      <span style={{ flex : "1", minWidth : "0" }}>
                        <span style={{ display : "block", fontSize : "13px", color : "#4A5F73", fontWeight : "600" }}>
                          {c?.label}
                        </span>
                        <span style={{ display : "block", fontWeight : "800", fontSize : "17px", marginTop : "2px" }}>
                          {c?.value}
                        </span>
                      </span>
                      <span aria-hidden="true" style={{ color : "#0A6FB0", fontWeight : "800" }}>
                        {"→"}
                      </span>
                    </a>
                  </React.Fragment>
                ))}
                <div className="rise d2" style={{ background : "#0B2236", color : "#fff", borderRadius : "22px", padding : "22px" }}>
                  <div style={{ display : "flex", alignItems : "center", gap : "10px", fontWeight : "800", marginBottom : "12px" }}>
                    <span className="pulse-dot" style={{ width : "10px", height : "10px", borderRadius : "50%", background : "#F28A2E" }} />
                    {L("Աշխատանքային ժամեր")}
                  </div>
                  <div style={{ display : "flex", justifyContent : "space-between", gap : "12px", padding : "6px 0", color : "#C2D3E2" }}>
                    <span>
                      {L("Երկուշաբթի – կիրակի")}
                    </span>
                    <b style={{ color : "#fff", whiteSpace : "nowrap" }}>
                      {"09:00 – 24:00"}
                    </b>
                  </div>
                  <div style={{ display : "flex", justifyContent : "space-between", gap : "12px", padding : "6px 0", color : "#C2D3E2" }}>
                    <span>
                      {L("Վարպետի այց")}
                    </span>
                    <b style={{ color : "#F6A75F" }}>
                      {L("1–2 օրում")}
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ padding : "0 24px 96px" }}>
          <div className="rv" style={{ maxWidth : "1280px", margin : "0 auto", display : "flex", flexWrap : "wrap", gap : "24px" }}>
            <div className="svc-map" style={{ flex : "1.4 1 560px", minWidth : "0", position : "relative", height : "460px", borderRadius : "32px", overflow : "hidden", background : "#E3EEF7" }}>
              <svg className="map-d" role="img" aria-label={L("Սպասարկման տարածքի քարտեզ")} viewBox="0 0 800 460" preserveAspectRatio="xMidYMid slice" style={{ position : "absolute", inset : "0", width : "100%", height : "100%" }}>
                <rect width="800" height="460" fill="#E3EEF7" />
                <path d="M0 300 C 150 260, 260 340, 420 300 S 700 220, 800 260" fill="none" stroke="#B9D5EA" strokeWidth="18" strokeLinecap="round" />
                <g stroke="#fff" strokeWidth="10" strokeLinecap="round" fill="none">
                  <path d="M60 40 L 380 230 L 760 120" />
                  <path d="M380 230 L 300 440" />
                  <path d="M380 230 L 640 420" />
                  <path d="M120 400 L 380 230" />
                  <path d="M380 0 V 230" />
                </g>
                <g fill="#D3E3F0">
                  <rect x="420" y="60" width="90" height="70" rx="10" />
                  <rect x="530" y="150" width="70" height="60" rx="10" />
                  <rect x="180" y="110" width="110" height="60" rx="10" />
                  <rect x="470" y="320" width="100" height="70" rx="10" />
                  <rect x="150" y="250" width="80" height="60" rx="10" />
                  <rect x="640" y="40" width="90" height="60" rx="10" />
                </g>
                <circle cx="380" cy="230" r="190" fill="rgba(10,111,176,.08)" stroke="#0A6FB0" strokeWidth="2.5" strokeDasharray="8 8" opacity=".7" />
                <circle cx="380" cy="230" r="95" fill="rgba(10,111,176,.10)" />
                <circle className="ping" cx="380" cy="230" r="14" fill="#F28A2E" opacity=".5" />
                <circle cx="380" cy="230" r="14" fill="#F28A2E" stroke="#fff" strokeWidth="5" />
                <g fontFamily="Noto Sans Armenian, Manrope, sans-serif" fontWeight="700" fontSize="15" fill="#3F566B" textAnchor="middle">
                  <text x="380" y="282">
                    {L("Երևան")}
                  </text>
                  <text x="560" y="96">
                    {L("Կոտայք")}
                  </text>
                  <text x="560" y="400">
                    {L("Արարատ")}
                  </text>
                  <text x="196" y="376">
                    {L("Արմավիր")}
                  </text>
                  <text x="200" y="92">
                    {L("Արագածոտն")}
                  </text>
                </g>
              </svg>
              <svg className="map-m" role="img" aria-label={L("Սպասարկման տարածքի քարտեզ")} viewBox="120 30 560 420" preserveAspectRatio="xMidYMid meet" style={{ position : "absolute", inset : "0", width : "100%", height : "100%" }}>
                <rect width="800" height="460" fill="#E3EEF7" />
                <path d="M0 300 C 150 260, 260 340, 420 300 S 700 220, 800 260" fill="none" stroke="#B9D5EA" strokeWidth="18" strokeLinecap="round" />
                <g stroke="#fff" strokeWidth="10" strokeLinecap="round" fill="none">
                  <path d="M60 40 L 380 230 L 760 120" />
                  <path d="M380 230 L 300 440" />
                  <path d="M380 230 L 640 420" />
                  <path d="M120 400 L 380 230" />
                  <path d="M380 0 V 230" />
                </g>
                <g fill="#D3E3F0">
                  <rect x="420" y="60" width="90" height="70" rx="10" />
                  <rect x="530" y="150" width="70" height="60" rx="10" />
                  <rect x="180" y="110" width="110" height="60" rx="10" />
                  <rect x="470" y="320" width="100" height="70" rx="10" />
                  <rect x="150" y="250" width="80" height="60" rx="10" />
                  <rect x="640" y="40" width="90" height="60" rx="10" />
                </g>
                <circle cx="380" cy="230" r="190" fill="rgba(10,111,176,.08)" stroke="#0A6FB0" strokeWidth="2.5" strokeDasharray="8 8" opacity=".7" />
                <circle cx="380" cy="230" r="95" fill="rgba(10,111,176,.10)" />
                <circle className="ping" cx="380" cy="230" r="14" fill="#F28A2E" opacity=".5" />
                <circle cx="380" cy="230" r="14" fill="#F28A2E" stroke="#fff" strokeWidth="5" />
                <g fontFamily="Noto Sans Armenian, Manrope, sans-serif" fontWeight="700" fontSize="24" fill="#3F566B" textAnchor="middle">
                  <text x="380" y="282">
                    {L("Երևան")}
                  </text>
                  <text x="560" y="96">
                    {L("Կոտայք")}
                  </text>
                  <text x="560" y="400">
                    {L("Արարատ")}
                  </text>
                  <text x="196" y="376">
                    {L("Արմավիր")}
                  </text>
                  <text x="232" y="92">
                    {L("Արագածոտն")}
                  </text>
                </g>
              </svg>
              <div className="map-ov" style={{ position : "absolute", left : "24px", top : "24px", background : "#fff", borderRadius : "18px", padding : "14px 18px", boxShadow : "0 20px 40px -20px rgba(11,34,54,.5)" }}>
                <div style={{ fontWeight : "800" }}>
                  {"Air Control"}
                </div>
                <div style={{ fontSize : "14px", color : "#4A5F73" }}>
                  {L("Երևան և հարակից մարզեր")}
                </div>
              </div>
              <span className="map-ov" style={{ position : "absolute", right : "20px", top : "20px", background : "rgba(255,255,255,.9)", borderRadius : "999px", padding : "8px 14px", fontSize : "13px", fontWeight : "700", color : "#4A5F73" }}>
                {L("Սպասարկման տարածք")}
              </span>
            </div>
            <div style={{ flex : "1 1 360px", minWidth : "0", background : "#fff", border : "1px solid #E1ECF5", borderRadius : "32px", padding : "32px" }}>
              <div style={{ fontSize : "14px", fontWeight : "800", letterSpacing : ".12em", textTransform : "uppercase", color : "#B85A0E", marginBottom : "10px" }}>
                {L("Սպասարկման տարածք")}
              </div>
              <div style={{ fontSize : "28px", fontWeight : "800", letterSpacing : "-0.02em", marginBottom : "18px" }}>
                {L("Երևան և հարակից մարզեր")}
              </div>
              <div style={{ display : "flex", flexWrap : "wrap", gap : "8px" }}>
                {(V.areas ?? []).map((a: any, $i8: number) => (
                  <React.Fragment key={$i8}>
                    <span style={css(a?.style)}>
                      {a?.n}
                    </span>
                  </React.Fragment>
                ))}
              </div>
              <p style={{ margin : "22px 0 0", color : "#4A5F73", lineHeight : "1.55", fontSize : "15px" }}>
                {L("Վարպետը կգա 1–2 օրվա ընթացքում։ Հարակից մարզեր մեկնումը համաձայնեցվում է նախօրոք։")}
              </p>
            </div>
          </div>
        </section>
        <section id="feedback" style={{ padding : "88px 24px", background : "#fff", position : "relative" }}>
          <span id="review" aria-hidden="true" style={{ position : "absolute", top : "0" }} />
          <div style={{ maxWidth : "1280px", margin : "0 auto", display : "flex", flexWrap : "wrap", gap : "48px", alignItems : "flex-start" }}>
            <div className="rv" style={{ flex : "1 1 380px", minWidth : "0" }}>
              <div style={{ fontSize : "14px", fontWeight : "800", letterSpacing : ".12em", textTransform : "uppercase", color : "#B85A0E", marginBottom : "12px" }}>
                {L("Հետադարձ կապ")}
              </div>
              <h2 className="h1x" style={{ margin : "0 0 16px", fontSize : "46px", lineHeight : "1.1", letterSpacing : "-0.03em", fontWeight : "800" }}>
                {L("Բողոքներ և առաջարկություններ")}
              </h2>
              <p style={{ margin : "0 0 28px", fontSize : "17px", lineHeight : "1.6", color : "#4A5F73" }}>
                {L("Ձեր կարծիքն օգնում է մեզ դառնալ ավելի լավը։ Յուրաքանչյուր դիմում ուսումնասիրվում է անձամբ, և ոչ մեկն անպատասխան չի մնում։")}
              </p>
              {(V.fbPoints ?? []).map((fp: any, $i7: number) => (
                <React.Fragment key={$i7}>
                  <div style={{ display : "flex", gap : "14px", alignItems : "flex-start", padding : "12px 0", borderTop : "1px solid #EDF3F8" }}>
                    <span style={{ width : "42px", height : "42px", borderRadius : "12px", background : "#EAF4FB", color : "#0A6FB0", display : "inline-flex", alignItems : "center", justifyContent : "center", flex : "none" }}>
                      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d={fp?.ic} />
                      </svg>
                    </span>
                    <span>
                      <span style={{ display : "block", fontWeight : "800" }}>
                        {fp?.t}
                      </span>
                      <span style={{ display : "block", color : "#4A5F73", fontSize : "15px", lineHeight : "1.5", marginTop : "2px" }}>
                        {fp?.d}
                      </span>
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div className="rv" style={{ flex : "1.3 1 560px", minWidth : "0" }}>
              <Feedback lang={this.props.lang ?? 'hy'} />
            </div>
          </div>
        </section>
        <Footer lang={this.props.lang ?? 'hy'} />
      </div>
      </>
    );
  }
}
