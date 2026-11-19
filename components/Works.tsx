// @ts-nocheck
'use client';
// Works — generated from the Air Control design. Edit the texts and layout here.
import React from 'react';
import { DCLogic, css, muteVideo } from '../lib/dc';
import { tr, path } from '../lib/i18n';
import { RU } from '../lib/ru/Works';
import BeforeAfter from './BeforeAfter';
import Header from './Header';
import Footer from './Footer';

const STYLES = "body{margin:0}\na{color:#0A6FB0}a:hover{color:#08568A}\n*,*::before,*::after{box-sizing:border-box}\n:focus-visible{outline:3px solid #F28A2E;outline-offset:3px}\n.hd-nav a{position:relative;text-decoration:none;color:#0B2236;padding:10px 4px;font-weight:600;font-size:15px;transition:color .2s;white-space:nowrap}\n.hd-nav a::after{content:\"\";position:absolute;left:4px;right:4px;bottom:3px;height:2px;border-radius:2px;background:#F28A2E;transform:scaleX(0);transform-origin:left;transition:transform .35s cubic-bezier(.2,.8,.2,1)}\n.hd-nav a:hover{color:#0A6FB0}.hd-nav a:hover::after,.hd-nav a.on::after{transform:scaleX(1)}\n.hd-burger{display:none !important}.hd-phone{display:none !important}\n@media (max-width:1200px){.hd-nav{display:none !important}.hd-burger{display:inline-flex !important}.hd-phone{display:inline-flex !important}}\n@media (max-width:760px){.hd-phone{display:none !important}.hd-word{font-size:22px !important}.hd-sub{font-size:7px !important;letter-spacing:.05em !important}.hd-mark{width:42px;height:42px}.hd-urgent{display:none !important}.hd-top-left{display:none !important}.hd-cta{display:none !important}.hd-phone-txt{display:none}.h1x{font-size:40px !important}.h2x{font-size:32px !important}}\n.ft-link{text-decoration:none;transition:color .2s}.ft-link:hover{color:#fff !important}\n.btn-o,.btn-w,.btn-b{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-weight:800;text-decoration:none;border:0;border-radius:999px;padding:17px 28px;font-size:16px;cursor:pointer;position:relative;overflow:hidden;font-family:inherit;transition:transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s}\n.btn-o{background:#F28A2E;color:#0B2236 !important}.btn-b{background:#0A6FB0;color:#fff !important}.btn-w{background:#fff;color:#0B2236 !important;box-shadow:inset 0 0 0 1.5px #D3E2EF}\n.btn-o:hover,.btn-b:hover,.btn-w:hover{transform:translateY(-3px)}.btn-o:hover{box-shadow:0 16px 32px -12px rgba(242,138,46,.8)}\n.lift{transition:transform .4s cubic-bezier(.2,.8,.2,1),box-shadow .4s}.lift:hover{transform:translateY(-6px);box-shadow:0 30px 60px -30px rgba(11,34,54,.4)}\n.chip{transition:background .2s,color .2s,border-color .2s,transform .2s}.chip:hover{transform:translateY(-2px)}\n.row{transition:background .2s}.row:hover{background:#F4F8FC}\n.spin{transform-box:fill-box;transform-origin:center;animation:spin 10s linear infinite}.spin-r{transform-box:fill-box;transform-origin:center;animation:spin 7s linear infinite reverse}\n@keyframes spin{to{transform:rotate(360deg)}}\n.pulse-dot{animation:pulse 1.8s ease-in-out infinite}@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(242,138,46,.7)}50%{box-shadow:0 0 0 7px rgba(242,138,46,0)}}\n.rise{animation:rise .9s cubic-bezier(.2,.8,.2,1) both}.d1{animation-delay:.1s}.d2{animation-delay:.22s}\n@keyframes rise{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}\n.bub{animation:rise .5s cubic-bezier(.2,.8,.2,1) both}\n.blob{animation:blob 18s ease-in-out infinite alternate}@keyframes blob{0%{transform:translate(0,0)}100%{transform:translate(-60px,40px) scale(1.1)}}\n@supports (animation-timeline:view()){.rv{animation:rv both cubic-bezier(.2,.8,.2,1);animation-timeline:view();animation-range:entry 0% entry 55%}}\n@keyframes rv{from{opacity:0;transform:translateY(48px)}to{opacity:1;transform:none}}\n.ann-shine{position:relative;overflow:hidden}.ann-shine::after{content:\"\";position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,rgba(255,255,255,.5) 50%,transparent 70%);transform:translateX(-100%);animation:annshine 5s ease-in-out infinite;pointer-events:none}@keyframes annshine{0%,55%{transform:translateX(-100%)}100%{transform:translateX(100%)}}.ann:hover{background:#F59A45 !important}\n.ann-gift{animation:annwig 2.6s ease-in-out infinite}@keyframes annwig{0%,60%,100%{transform:rotate(0) scale(1)}10%{transform:rotate(-14deg) scale(1.1)}20%{transform:rotate(12deg) scale(1.1)}30%{transform:rotate(-8deg)}40%{transform:rotate(4deg)}}\n.ann-short{display:none}@media (max-width:760px){.ann-long{display:none !important}.ann-short{display:inline !important}.ofc-pill{bottom:16px !important;left:12px !important}}\n.ofc,.ofc-pill{animation:ofcin .6s cubic-bezier(.2,.8,.2,1) both}@keyframes ofcin{from{opacity:0;transform:translateY(30px) scale(.95)}to{opacity:1;transform:none}}\n.ofc-ping{animation:ofping 2s cubic-bezier(0,0,.2,1) infinite}@keyframes ofping{75%,100%{transform:scale(1.7);opacity:0}}\n.xo2{position:relative;display:inline-block}.xo2::after{content:\"\";position:absolute;left:-5px;right:-5px;top:52%;height:3px;border-radius:3px;background:#D9480F;transform:rotate(-10deg) scaleX(0);transform-origin:left center;animation:xo2 4s ease-in-out infinite}@keyframes xo2{0%,12%{transform:rotate(-10deg) scaleX(0)}32%,100%{transform:rotate(-10deg) scaleX(1)}}\n@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation:none !important;transition:none !important}}\n.btn-w.btn-ghost{background:transparent !important;color:#fff !important;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.5) !important}.btn-w.btn-ghost:hover{background:rgba(255,255,255,.12) !important}\n.fb input:focus,.fb textarea:focus{border-color:#0A6FB0 !important;box-shadow:0 0 0 4px rgba(10,111,176,.15);outline:none}\n.fb-in{animation:fbin .45s cubic-bezier(.2,.8,.2,1) both}@keyframes fbin{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}\n.fb-check{stroke-dasharray:60;stroke-dashoffset:60;animation:fbck .8s .2s ease forwards}@keyframes fbck{to{stroke-dashoffset:0}}\n.fb-chip{transition:background .2s,color .2s,transform .2s}.fb-chip:hover{transform:translateY(-2px)}\n.fb-star{transition:transform .2s}.fb-star:hover{transform:scale(1.15)}\n.fb-btn{transition:transform .3s,box-shadow .3s}.fb-btn:hover{transform:translateY(-2px);box-shadow:0 14px 28px -12px rgba(10,111,176,.7)}\n.fbm{animation:fbfade .3s ease both}@keyframes fbfade{from{opacity:0}to{opacity:1}}\n.fbm-card{animation:fbpop .45s cubic-bezier(.2,.8,.2,1) both}@keyframes fbpop{from{opacity:0;transform:translateY(30px) scale(.96)}to{opacity:1;transform:none}}\n.ft-btn{background:none;border:0;padding:6px 0;cursor:pointer;font-family:inherit;text-align:left;transition:color .2s}.ft-btn:hover{color:#fff !important}\n.vcard{transition:transform .45s cubic-bezier(.2,.8,.2,1),box-shadow .45s}.vcard:hover{transform:translateY(-8px);box-shadow:0 34px 60px -30px rgba(11,34,54,.6)}\n.vcard .vplay{transition:transform .35s cubic-bezier(.2,.8,.2,1)}.vcard:hover .vplay{transform:scale(1.12)}\n.vcard .vbg{transition:transform 1.2s cubic-bezier(.2,.8,.2,1)}.vcard:hover .vbg{transform:scale(1.15) rotate(-6deg)}\n.vping{animation:vping 2.2s cubic-bezier(0,0,.2,1) infinite}@keyframes vping{75%,100%{transform:scale(1.8);opacity:0}}\n.vflow{stroke-dasharray:22 12;animation:vflow 1.6s linear infinite}@keyframes vflow{to{stroke-dashoffset:-68}}\n.prog{animation:prog 6s linear infinite}@keyframes prog{0%{width:0}100%{width:100%}}\n.vmodal{animation:fbfade .3s ease both}.vmodal-card{animation:fbpop .45s cubic-bezier(.2,.8,.2,1) both}\n@media (max-width:760px){.vmodal{align-items:flex-start !important;overflow-y:auto !important;-webkit-overflow-scrolling:touch;padding:68px 16px 32px !important;backdrop-filter:none !important;-webkit-backdrop-filter:none !important;background:#0B2236 !important}.vmodal-card{gap:20px !important;animation:none !important}.vmodal-media{height:min(62vh,640px) !important;border-radius:20px !important}.vmodal-info{max-width:100% !important;flex-basis:100% !important}.vmodal-info>div:first-of-type{font-size:22px !important}.vmodal-x{position:fixed !important;top:12px !important;right:12px !important;z-index:210;box-shadow:0 8px 24px -8px rgba(0,0,0,.5)}}";

export default class Works extends DCLogic {
  renderVals() {
    const L = tr(this.props.lang, RU);
    const P = (p: string) => path(this.props.lang, p);
    const s = this.state || {};
    const cat = s.cat || 'all';
    const I = {
      install: 'M3 4h18v8H3z M12 21v-6 M9 18l3-3 3 3', clean: 'M12 3c3 4 5 6.5 5 9a5 5 0 0 1-10 0c0-2.5 2-5 5-9z M19 2v4 M17 4h4',
      repair: 'M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z', biz: 'M4 21V5l8-2v18 M12 9h8v12 M2 21h20', ba: 'M12 3v18 M5 8l-3 4 3 4 M19 8l3 4-3 4'
    };
    const C = { install: [L("Տեղադրում"), '#0A6FB0'], clean: [L("Լվացում"), '#13314A'], repair: [L("Վերանորոգում"), '#0B2236'], biz: [L("Բիզնես"), '#9A4A12'], ba: [L("Առաջ և հետո"), '#1F5F8A'] };
    const all = [
      ['install', L("Մոնտաժել ենք 50 մ խողովակաշար"), '0:19', L("Օդորակիչի խողովակների նախնական մոնտաժը վերանորոգման ընթացքում ապահովում է մաքուր, գեղեցիկ ինտերիեր՝ առանց ավելորդ լարերի ու տգեղ խողովակների։"), '/assets/work1.mp4', '/assets/work1-poster.jpg'],
      ['clean', L("Լվացում 15 000 ֏ + նվերներ"), '0:21', L("Պրոֆեսիոնալ լվացում ընդամենը 15 000 դրամով, իսկ ֆրեոնի լիցքավորումն ու ախտորոշումը՝ նվեր։ Տեսեք արդյունքը՝ առաջ և հետո։"), '/assets/work2.mp4', '/assets/work2-poster.jpg'],
      ['clean', L("Կեղտոտ օդորակիչը վտանգում է առողջությունը"), '0:21', L("Ներքին բլոկի խորը լվացում և ախտահանում՝ մաքուր և առողջ օդի համար։"), '/assets/work3.mp4', '/assets/work3-poster.jpg'],
      ['install', L("Վերանորոգում եք տունը՝ մտածեք օդորակիչի մասին"), '0:24', L("Խողովակաշարը նախապես թաքցնում ենք պատի մեջ, որ վերանորոգումից հետո ոչինչ չփչացնենք։"), '/assets/work4.mp4', '/assets/work4-poster.jpg'],
      ['install', L("Օդորակիչի բարդ տեղադրում"), '0:12', L("Ցանկացած բարդության տեղադրում՝ տանիքներին, բարձրահարկ ճակատներին և դժվարամատչելի տեղերում։"), '/assets/work5.mp4', '/assets/work5-poster.jpg'],
      ['install', L("Տեղադրում առանց փոշու"), '0:11', L("Պատը փորում ենք փոշեկուլով, որ ձեր տան մաքրությունը պահպանվի։"), '/assets/work6.mp4', '/assets/work6-poster.jpg']
    ];
    // Lock page scroll while the video is open (so only the video window scrolls on phones)
    const open = (o) => () => { document.body.style.overflow = 'hidden'; this.setState({ modal: o }); };
    const videos = all.filter(v => cat === 'all' || v[0] === cat).map(v => { const o = { t: v[1], d: v[2], s: v[3], ic: I[v[0]], cl: C[v[0]][0], bg: C[v[0]][1], ratio: '9 / 16', src: v[4] || '', poster: v[5] || '', hasSrc: !!v[4], noSrc: !v[4] }; return Object.assign({}, o, { open: open(o) }); });
    const featuredO = { t: L("Լվացում՝ սկզբից մինչև վերջ"), d: '2:30', s: L("Տեսեք ամբողջ գործընթացը. ախտորոշում, տան պաշտպանություն, խորը լվացում, ֆրեոնի ստուգում և արդյունք։"), ic: I.clean, cl: L("Լվացում"), bg: '#0B2236', ratio: '16 / 9', src: '', poster: '', hasSrc: false, noSrc: true };
    const catDefs = [['all', L("Բոլորը")], ['install', L("Տեղադրում")], ['clean', L("Լվացում")], ['repair', L("Վերանորոգում")], ['biz', L("Բիզնես")], ['ba', L("Առաջ և հետո")]];
    const cats = catDefs.filter(c => c[0] === 'all' || all.some(v => v[0] === c[0])).map(c => { const on = c[0] === cat; return { label: c[1], count: c[0] === 'all' ? all.length : all.filter(v => v[0] === c[0]).length, on, pick: () => this.setState({ cat: c[0] }), style: 'min-height: 46px; padding: 0 18px; border-radius: 999px; font-family: inherit; font-size: 15px; font-weight: 800; cursor: pointer; ' + (on ? 'background: #0B2236; color: #fff; border: 1.5px solid #0B2236' : 'background: #fff; color: #0B2236; border: 1.5px solid #D5E2EE') }; });
    const cur = s.modal || featuredO;
    return { videos, cats, featured: Object.assign({}, featuredO, { open: open(featuredO) }), modal: !!s.modal, cur, close: () => { document.body.style.overflow = ''; this.setState({ modal: null }); } };
  }

  componentWillUnmount() { document.body.style.overflow = ''; }

  render() {
    const L = tr(this.props.lang, RU);
    const P = (p: string) => path(this.props.lang, p);
    const V: any = this.renderVals() || {};
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div style={{ fontFamily : "'Manrope', 'Noto Sans Armenian', system-ui, sans-serif", color : "#0B2236", background : "#F4F8FC", overflowX : "clip" }}>
        <div style={{ position : "sticky", top : "0", zIndex : "60" }}>
          <Header active="works" lang={this.props.lang ?? 'hy'} />
        </div>
        <section style={{ position : "relative", overflow : "hidden", padding : "64px 24px 32px" }}>
          <div aria-hidden="true" className="blob" style={{ position : "absolute", right : "-200px", top : "-260px", width : "700px", height : "700px", borderRadius : "50%", background : "radial-gradient(circle, rgba(169,211,239,.7), rgba(169,211,239,0) 68%)" }} />
          <div style={{ maxWidth : "1280px", margin : "0 auto", position : "relative", display : "flex", flexWrap : "wrap", gap : "24px", alignItems : "flex-end", justifyContent : "space-between" }}>
            <div style={{ maxWidth : "760px" }}>
              <nav aria-label={L("Ճանապարհ")} className="rise" style={{ fontSize : "14px", color : "#4A5F73", display : "flex", gap : "8px" }}>
                <a href={P("/")} style={{ textDecoration : "none" }}>
                  {L("Գլխավոր")}
                </a>
                <span aria-hidden="true">
                  {"/"}
                </span>
                <span>
                  {L("Տեսանյութեր")}
                </span>
              </nav>
              <h1 className="rise d1 h1x" style={{ margin : "20px 0 16px", fontSize : "62px", lineHeight : "1.05", letterSpacing : "-0.035em", fontWeight : "800" }}>
                {L("Մեր աշխատանքային ")}
                <span style={{ color : "#0A6FB0" }}>
                  {L("ընթացքը")}
                </span>
              </h1>
              <p className="rise d2" style={{ margin : "0", fontSize : "19px", lineHeight : "1.6", color : "#3F566B" }}>
                {L("Կարճ տեսանյութեր մեր առօրյա աշխատանքից՝ տեղադրում, լվացում և վերանորոգում։")}
              </p>
            </div>
            <div className="rise d2" style={{ display : "flex", gap : "10px", flexWrap : "wrap" }}>
              <a href="https://www.facebook.com/share/19jo4Xdg5S/" target="_blank" rel="noopener noreferrer" className="btn-w" style={{ padding : "13px 20px", fontSize : "15px" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H6.5v3.5H9V21h3.5v-8.5H15l.5-3.5h-3V7a1 1 0 0 1 1-1H15z" />
                </svg>
                {"Facebook"}
              </a>
              <a href="https://www.instagram.com/air_control_ac_service_/" target="_blank" rel="noopener noreferrer" className="btn-w" style={{ padding : "13px 20px", fontSize : "15px" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M17.5 6.5h.01" />
                </svg>
                {"Instagram"}
              </a>
              <a href="https://www.tiktok.com/@air.control4" target="_blank" rel="noopener noreferrer" className="btn-w" style={{ padding : "13px 20px", fontSize : "15px" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 3v11a4 4 0 1 1-4-4 M14 3c0 3 2.5 5 6 5" />
                </svg>
                {"TikTok"}
              </a>
            </div>
          </div>
        </section>
        <section style={{ padding : "16px 24px 40px" }}>
          <div style={{ maxWidth : "1280px", margin : "0 auto" }}>
            <div className="rv" style={{ background : "#0B2236", color : "#fff", borderRadius : "36px", padding : "44px", display : "flex", flexWrap : "wrap", gap : "44px", alignItems : "center", position : "relative", overflow : "hidden" }}>
              <div aria-hidden="true" className="blob" style={{ position : "absolute", left : "-160px", bottom : "-220px", width : "560px", height : "560px", borderRadius : "50%", background : "radial-gradient(circle, rgba(11,124,196,.5), rgba(11,124,196,0) 70%)" }} />
              <div style={{ flex : "1 1 380px", minWidth : "0", position : "relative" }}>
                <span style={{ display : "inline-flex", alignItems : "center", gap : "8px", background : "#F28A2E", color : "#0B2236", borderRadius : "999px", padding : "6px 14px", fontSize : "13px", fontWeight : "800" }}>
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  {L("Գլխավոր տեսանյութ")}
                </span>
                <div className="h2x" style={{ fontSize : "40px", fontWeight : "800", letterSpacing : "-0.02em", lineHeight : "1.15", margin : "18px 0 14px" }}>
                  {L("Լվացում 15 000 ֏ + նվերներ")}
                </div>
                <p style={{ margin : "0 0 28px", color : "#C2D3E2", fontSize : "17px", lineHeight : "1.6", maxWidth : "520px" }}>
                  {L("Տեսեք, թե ինչպես ենք լվանում օդորակիչը. ներքին և արտաքին բլոկ, իսկ ֆրեոնի լիցքավորումն ու ախտորոշումը՝ նվեր։ Արդյունքը՝ առաջ և հետո։")}
                </p>
                <div style={{ display : "flex", flexWrap : "wrap", gap : "12px" }}>
                  <a href={P("/contacts/#offer")} className="btn-o">
                    {L("Պատվիրել լվացում")}
                  </a>
                </div>
              </div>
              <div style={{ flex : "0 1 340px", minWidth : "0", margin : "0 auto", position : "relative" }}>
                <svg aria-hidden="true" viewBox="0 0 200 200" className="spin" style={{ position : "absolute", left : "50%", top : "50%", width : "520px", height : "520px", margin : "-260px 0 0 -260px", opacity : ".1", animationDuration : "50s" }}>
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#F28A2E" strokeWidth="24" strokeDasharray="20 16" />
                </svg>
                <div style={{ position : "relative", width : "100%", maxWidth : "330px", aspectRatio : "9 / 16", margin : "0 auto", borderRadius : "32px", overflow : "hidden", background : "#000", border : "6px solid #13314A", boxShadow : "0 40px 80px -30px rgba(0,0,0,.7)" }}>
                  <video src="/assets/work2.mp4" poster="/assets/work2-poster.jpg" autoPlay muted loop playsInline controls style={{ width : "100%", height : "100%", objectFit : "cover", display : "block" }} ref={muteVideo} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ padding : "24px 24px 72px" }}>
          <div style={{ maxWidth : "1280px", margin : "0 auto" }}>
            <div style={{ display : "grid", gridTemplateColumns : "repeat(auto-fill, minmax(185px, 1fr))", gap : "16px" }}>
              {(V.videos ?? []).map((v: any, $i7: number) => (
                <React.Fragment key={$i7}>
                  <button type="button" className="vcard" onClick={v?.open} aria-label={L("Դիտել՝") + " " + (v?.t ?? "")} style={css(`position: relative; display: block; width: 100%; aspect-ratio: 9 / 16; border: 0; padding: 0; border-radius: 26px; overflow: hidden; cursor: pointer; background: ${v?.bg ?? ""}; text-align: left; font-family: inherit; color: #fff`)}>
                    <div className="vbg" aria-hidden="true" style={{ position : "absolute", inset : "-10%", display : "flex", alignItems : "center", justifyContent : "center", opacity : ".16" }}>
                      <svg width="70%" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d={v?.ic} />
                      </svg>
                    </div>
                    <svg aria-hidden="true" viewBox="0 0 100 60" preserveAspectRatio="none" style={{ position : "absolute", left : "0", right : "0", top : "18%", width : "100%", height : "30%", opacity : ".25" }}>
                      <g fill="none" stroke="#A9D3EF" strokeWidth="1.6" strokeLinecap="round">
                        <path className="vflow" d="M10 10 C 30 0, 70 20, 90 10" />
                        <path className="vflow" style={{ animationDelay : "-.5s" }} d="M10 30 C 30 20, 70 40, 90 30" />
                        <path className="vflow" style={{ animationDelay : "-1s" }} d="M10 50 C 30 40, 70 60, 90 50" />
                      </g>
                    </svg>
                    {v?.poster ? (
                      <>
                        <img src={v?.poster} alt="" style={{ position : "absolute", inset : "0", width : "100%", height : "100%", objectFit : "cover" }} />
                      </>
                    ) : null}
                    <span style={{ position : "absolute", right : "14px", top : "14px", background : "rgba(11,34,54,.55)", borderRadius : "999px", padding : "5px 10px", fontSize : "12px", fontWeight : "800" }}>
                      {v?.d}
                    </span>
                    <span className="vplay" style={{ position : "absolute", left : "50%", top : "46%", width : "66px", height : "66px", margin : "-33px 0 0 -33px", display : "flex", alignItems : "center", justifyContent : "center" }}>
                      <span className="vping" aria-hidden="true" style={{ position : "absolute", inset : "0", borderRadius : "50%", background : "#fff", opacity : ".3" }} />
                      <span style={{ position : "relative", width : "66px", height : "66px", borderRadius : "50%", background : "#fff", display : "flex", alignItems : "center", justifyContent : "center" }}>
                        <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="#F28A2E">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </span>
                    <span style={{ position : "absolute", left : "0", right : "0", bottom : "0", padding : "60px 18px 18px", background : "linear-gradient(transparent, rgba(11,34,54,.92))" }}>
                      <span style={{ display : "block", fontSize : "15px", fontWeight : "800", lineHeight : "1.3" }}>
                        {v?.t}
                      </span>
                    </span>
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
        <BeforeAfter lang={this.props.lang ?? 'hy'} />
        <section style={{ padding : "72px 24px 96px" }}>
          <div className="rv" style={{ maxWidth : "1280px", margin : "0 auto", background : "#0A6FB0", color : "#fff", borderRadius : "36px", padding : "48px 56px", display : "flex", flexWrap : "wrap", gap : "24px", alignItems : "center", justifyContent : "space-between" }}>
            <div style={{ maxWidth : "640px" }}>
              <div style={{ fontSize : "36px", fontWeight : "800", letterSpacing : "-0.02em", lineHeight : "1.15" }}>
                {L("Ուզու՞մ եք նույն արդյունքը ձեր տանը")}
              </div>
              <div style={{ color : "#D9EAF7", marginTop : "10px", fontSize : "17px" }}>
                {L("Թողեք հայտ, և կզանգահարենք՝ համաձայնեցնելու այցը։")}
              </div>
            </div>
            <a href={P("/contacts/")} className="btn-o">
              {L("Թողնել հայտ")}
            </a>
          </div>
        </section>
        <Footer lang={this.props.lang ?? 'hy'} />
        {V.modal ? (
          <>
            <div className="vmodal" role="dialog" aria-modal="true" aria-label={V.cur?.t} style={{ position : "fixed", inset : "0", zIndex : "200", background : "rgba(11,34,54,.82)", backdropFilter : "blur(8px)", WebkitBackdropFilter : "blur(8px)", display : "flex", alignItems : "center", justifyContent : "center", padding : "20px" }}>
              <button type="button" tabIndex="-1" aria-hidden="true" onClick={V.close} style={{ position : "absolute", inset : "0", width : "100%", height : "100%", background : "transparent", border : "0", cursor : "default" }} />
              <div className="vmodal-card" style={{ position : "relative", display : "flex", flexWrap : "wrap", gap : "28px", alignItems : "center", justifyContent : "center", maxWidth : "980px", width : "100%" }}>
                <div className="vmodal-media" style={css(`position: relative; height: min(78vh, 720px); aspect-ratio: ${V.cur?.ratio ?? ""}; max-width: 100%; border-radius: 28px; overflow: hidden; background: ${V.cur?.bg ?? ""}; box-shadow: 0 40px 80px -30px rgba(0,0,0,.7)`)}>
                  {V.cur?.hasSrc ? (
                    <>
                      <video src={V.cur?.src} poster={V.cur?.poster} controls autoPlay playsInline style={{ position : "absolute", inset : "0", width : "100%", height : "100%", objectFit : "cover", background : "#000" }} />
                    </>
                  ) : null}
                  {V.cur?.noSrc ? (
                    <>
                      <div aria-hidden="true" style={{ position : "absolute", inset : "0", display : "flex", alignItems : "center", justifyContent : "center", opacity : ".14" }}>
                        <svg width="60%" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d={V.cur?.ic} />
                        </svg>
                      </div>
                      <div style={{ position : "absolute", inset : "0", display : "flex", flexDirection : "column", alignItems : "center", justifyContent : "center", gap : "16px", color : "#fff", textAlign : "center", padding : "24px" }}>
                        <span style={{ width : "84px", height : "84px", borderRadius : "50%", background : "#fff", display : "flex", alignItems : "center", justifyContent : "center" }}>
                          <svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="#F28A2E">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                        <span style={{ fontWeight : "700", color : "#D9EAF7", fontSize : "15px" }}>
                          {L("Այստեղ կլինի ձեր տեսանյութը")}
                        </span>
                      </div>
                      <div style={{ position : "absolute", left : "0", right : "0", bottom : "0", height : "5px", background : "rgba(255,255,255,.2)" }}>
                        <div className="prog" style={{ height : "100%", width : "35%", background : "#F28A2E" }} />
                      </div>
                    </>
                  ) : null}
                </div>
                <div className="vmodal-info" style={{ flex : "1 1 280px", maxWidth : "360px", color : "#fff", position : "relative" }}>
                  <span style={{ display : "inline-flex", background : "#F28A2E", color : "#0B2236", borderRadius : "999px", padding : "5px 12px", fontSize : "13px", fontWeight : "800" }}>
                    {V.cur?.d}
                  </span>
                  <div style={{ fontSize : "28px", fontWeight : "800", letterSpacing : "-0.02em", lineHeight : "1.2", margin : "14px 0 10px" }}>
                    {V.cur?.t}
                  </div>
                  <div style={{ color : "#C2D3E2", lineHeight : "1.6", marginBottom : "22px", whiteSpace : "pre-line" }}>
                    {V.cur?.s}
                  </div>
                  <a href={P("/contacts/")} className="btn-o" style={{ padding : "14px 22px", fontSize : "15px" }}>
                    {L("Պատվիրել նույնը")}
                  </a>
                </div>
                <button type="button" className="vmodal-x" onClick={V.close} aria-label={L("Փակել")} style={{ position : "absolute", right : "-6px", top : "-6px", width : "48px", height : "48px", borderRadius : "50%", border : "0", background : "#fff", color : "#0B2236", cursor : "pointer", display : "inline-flex", alignItems : "center", justifyContent : "center", boxShadow : "0 10px 24px -8px rgba(0,0,0,.5)" }}>
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
            </div>
          </>
        ) : null}
      </div>
      </>
    );
  }
}
