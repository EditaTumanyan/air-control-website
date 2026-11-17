// @ts-nocheck
'use client';
// Main — generated from the Air Control design. Edit the texts and layout here.
import React from 'react';
import { DCLogic, css, muteVideo } from '../lib/dc';
import Header from './Header';
import PhonesCard from './PhonesCard';
import BookingForm from './BookingForm';
import Footer from './Footer';
import { path } from '../lib/i18n';

const STYLES = "body{margin:0}\na{color:#0A6FB0}a:hover{color:#08568A}\n*,*::before,*::after{box-sizing:border-box}\nhtml{scroll-behavior:smooth}\n::selection{background:#F28A2E;color:#0B2236}\n:focus-visible{outline:3px solid #F28A2E;outline-offset:3px}\n.hd-nav a{position:relative;text-decoration:none;color:#0B2236;padding:10px 4px;font-weight:600;font-size:15px;transition:color .2s;white-space:nowrap}\n.hd-nav a::after{content:\"\";position:absolute;left:4px;right:4px;bottom:3px;height:2px;border-radius:2px;background:#F28A2E;transform:scaleX(0);transform-origin:left;transition:transform .35s cubic-bezier(.2,.8,.2,1)}\n.hd-nav a:hover{color:#0A6FB0}.hd-nav a:hover::after,.hd-nav a.on::after{transform:scaleX(1)}\n.hd-burger{display:none !important}.hd-phone{display:none !important}\n@media (max-width:1200px){.hd-nav{display:none !important}.hd-burger{display:inline-flex !important}.hd-phone{display:inline-flex !important}}\n@media (max-width:760px){.hd-phone{display:none !important}.hd-word{font-size:22px !important}.hd-sub{font-size:7px !important;letter-spacing:.05em !important}.hd-mark{width:42px;height:42px}.hd-urgent{display:none !important}.hd-top-left{display:none !important}.hd-cta{display:none !important}.hd-phone-txt{display:none}}\n.ft-link{text-decoration:none;transition:color .2s}.ft-link:hover{color:#fff !important}\n.btn-o,.btn-w,.btn-b,.btn-wa{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-weight:800;text-decoration:none;border:0;border-radius:999px;padding:17px 28px;font-size:16px;cursor:pointer;position:relative;overflow:hidden;font-family:inherit;transition:transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s,background .3s}\n.btn-o{background:#F28A2E;color:#0B2236 !important}\n.btn-b{background:#0A6FB0;color:#fff !important}\n.btn-w{background:#fff;color:#0B2236 !important;box-shadow:inset 0 0 0 1.5px #D3E2EF}\n.btn-wa{background:#25D366;color:#0B2236 !important}\n.btn-o::before,.btn-b::before,.btn-wa::before{content:\"\";position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,rgba(255,255,255,.5) 50%,transparent 70%);transform:translateX(-120%);transition:transform .8s}\n.btn-o:hover,.btn-b:hover,.btn-w:hover,.btn-wa:hover{transform:translateY(-3px)}\n.btn-o:hover{box-shadow:0 16px 32px -12px rgba(242,138,46,.8)}\n.btn-b:hover{box-shadow:0 16px 32px -12px rgba(10,111,176,.7)}\n.btn-wa:hover{box-shadow:0 16px 32px -12px rgba(37,211,102,.8)}\n.btn-o:hover::before,.btn-b:hover::before,.btn-wa:hover::before{transform:translateX(120%)}\n.lift{transition:transform .4s cubic-bezier(.2,.8,.2,1),box-shadow .4s,border-color .4s}\n.lift:hover{transform:translateY(-8px);box-shadow:0 30px 60px -30px rgba(11,34,54,.4)}\n.svc .svc-ic{transition:background .35s,color .35s,transform .5s cubic-bezier(.2,.8,.2,1)}\n.svc:hover .svc-ic{background:#0A6FB0 !important;color:#fff !important;transform:rotate(-8deg) scale(1.06)}\n.svc .svc-go{transition:background .3s,color .3s,transform .3s}\n.svc:hover .svc-go{background:#F28A2E !important;color:#0B2236 !important;transform:rotate(-45deg)}\n.spin{transform-box:fill-box;transform-origin:center;animation:spin 10s linear infinite}\n.spin-r{transform-box:fill-box;transform-origin:center;animation:spin 7s linear infinite reverse}\n@keyframes spin{to{transform:rotate(360deg)}}\n.pulse-dot{animation:pulse 1.8s ease-in-out infinite}\n@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(242,138,46,.7)}50%{box-shadow:0 0 0 7px rgba(242,138,46,0)}}\n.flow{stroke-dasharray:34 16;animation:flow 1.4s linear infinite}\n@keyframes flow{to{stroke-dashoffset:-100}}\n.sunr{transform-box:view-box;transform-origin:76px 205px;animation:sunr 4s ease-in-out infinite}\n@keyframes sunr{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.08);opacity:.75}}\n.breathe{transform-box:fill-box;transform-origin:center;animation:breathe 3.5s ease-in-out infinite}\n@keyframes breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}\n.blink{animation:blink 2.4s ease-in-out infinite}\n@keyframes blink{0%,100%{opacity:1}50%{opacity:.25}}\n.floaty{animation:floaty 6s ease-in-out infinite}\n.floaty2{animation:floaty 7s ease-in-out -2s infinite}\n@keyframes floaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}\n.blob{animation:blob 18s ease-in-out infinite alternate}\n@keyframes blob{0%{transform:translate(0,0) scale(1)}100%{transform:translate(-60px,40px) scale(1.12)}}\n.rise{animation:rise .9s cubic-bezier(.2,.8,.2,1) both}\n.d1{animation-delay:.08s}.d2{animation-delay:.18s}.d3{animation-delay:.3s}.d4{animation-delay:.44s}\n@keyframes rise{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}\n.draw{stroke-dasharray:420;stroke-dashoffset:420;animation:draw 1.4s .7s cubic-bezier(.6,0,.2,1) forwards}\n@keyframes draw{to{stroke-dashoffset:0}}\n.marq{animation:marq 38s linear infinite}\n@keyframes marq{to{transform:translateX(-50%)}}\n.prog{animation:prog 3.5s ease-in-out infinite}\n@keyframes prog{0%{width:18%}100%{width:86%}}\n.twinkle{transform-box:fill-box;transform-origin:center;animation:twinkle 2.2s ease-in-out infinite}\n@keyframes twinkle{0%,100%{opacity:0;transform:scale(.4)}50%{opacity:1;transform:scale(1)}}\n.bub{animation:bub .6s cubic-bezier(.2,.8,.2,1) both}\n.b1{animation-delay:.4s}.b2{animation-delay:1.2s}.b3{animation-delay:2.1s}.b4{animation-delay:3s}\n@keyframes bub{from{opacity:0;transform:translateY(14px) scale(.96)}to{opacity:1;transform:none}}\n.typing span{display:inline-block;width:7px;height:7px;border-radius:50%;background:#7A8C9C;margin:0 2px;animation:typ 1.2s infinite}\n.typing span:nth-child(2){animation-delay:.15s}.typing span:nth-child(3){animation-delay:.3s}\n@keyframes typ{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-5px);opacity:1}}\n.dash{stroke-dasharray:8 10;animation:flow 2.4s linear infinite}\n.ping{animation:ping 2s cubic-bezier(0,0,.2,1) infinite}\n@keyframes ping{75%,100%{transform:scale(1.7);opacity:0}}\n.chev{transition:transform .35s cubic-bezier(.2,.8,.2,1)}\n.faq-q{transition:background .25s}\n.faq-q:hover{background:#F2F8FD !important}\n.rng{-webkit-appearance:none;appearance:none;height:10px;border-radius:999px;outline:none;cursor:pointer}\n.rng::-webkit-slider-thumb{-webkit-appearance:none;width:30px;height:30px;border-radius:50%;background:#fff;border:7px solid #F28A2E;box-shadow:0 6px 16px -4px rgba(11,34,54,.45);cursor:grab}\n.rng::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:#fff;border:7px solid #F28A2E;cursor:grab}\n.bf input:not([type=checkbox]):not([type=file]),.bf select,.bf textarea{transition:border-color .2s,box-shadow .2s,background .2s}\n.bf input:focus,.bf select:focus,.bf textarea:focus{border-color:#0A6FB0 !important;box-shadow:0 0 0 4px rgba(10,111,176,.15);background:#fff !important;outline:none}\n.chip{transition:background .2s,color .2s,border-color .2s,transform .2s}\n.chip:hover{transform:translateY(-2px)}\n.check-draw{stroke-dasharray:60;stroke-dashoffset:60;animation:draw .8s .2s ease forwards}\n.mbar{display:none !important}\n.fab{display:flex}\n@media (max-width:760px){.mbar{display:flex !important}.fab{display:none !important}.hero-art{transform:scale(.82);transform-origin:top center;margin-bottom:-90px}.h1x{font-size:40px !important}.sec{padding-top:64px !important;padding-bottom:64px !important}.h2x{font-size:32px !important}.promo-pct{font-size:64px !important}.padm{padding:32px 22px !important;border-radius:28px !important}}\n@supports (animation-timeline:view()){.rv{animation:rv both cubic-bezier(.2,.8,.2,1);animation-timeline:view();animation-range:entry 0% entry 55%}}\n@keyframes rv{from{opacity:0;transform:translateY(48px)}to{opacity:1;transform:none}}\n.gift-ic{animation:wig 2.6s ease-in-out infinite}@keyframes wig{0%,60%,100%{transform:rotate(0) scale(1)}10%{transform:rotate(-14deg) scale(1.08)}20%{transform:rotate(12deg) scale(1.08)}30%{transform:rotate(-8deg)}40%{transform:rotate(4deg)}}\n.gift-badge{animation:gpulse 1.8s ease-in-out infinite}@keyframes gpulse{0%,100%{box-shadow:0 0 0 0 rgba(184,90,14,.5)}50%{box-shadow:0 0 0 7px rgba(184,90,14,0)}}\n.gift-card::after{content:\"\";position:absolute;inset:0;background:linear-gradient(110deg,transparent 35%,rgba(242,138,46,.14) 50%,transparent 65%);transform:translateX(-120%);animation:gshine 4.5s ease-in-out infinite;pointer-events:none}@keyframes gshine{0%,55%{transform:translateX(-120%)}100%{transform:translateX(120%)}}\n.xout{position:relative;display:inline-block}.xout::after{content:\"\";position:absolute;left:-6px;right:-6px;top:52%;height:3px;border-radius:3px;background:#D9480F;transform:rotate(-10deg) scaleX(0);transform-origin:left center;animation:xdraw 4s ease-in-out infinite}@keyframes xdraw{0%,12%{transform:rotate(-10deg) scaleX(0)}32%,100%{transform:rotate(-10deg) scaleX(1)}}\n.ann-shine{position:relative;overflow:hidden}.ann-shine::after{content:\"\";position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,rgba(255,255,255,.5) 50%,transparent 70%);transform:translateX(-100%);animation:annshine 5s ease-in-out infinite;pointer-events:none}@keyframes annshine{0%,55%{transform:translateX(-100%)}100%{transform:translateX(100%)}}.ann:hover{background:#F59A45 !important}\n.ann-gift{animation:annwig 2.6s ease-in-out infinite}@keyframes annwig{0%,60%,100%{transform:rotate(0) scale(1)}10%{transform:rotate(-14deg) scale(1.1)}20%{transform:rotate(12deg) scale(1.1)}30%{transform:rotate(-8deg)}40%{transform:rotate(4deg)}}\n.ann-short{display:none}@media (max-width:760px){.ann-long{display:none !important}.ann-short{display:inline !important}.ofc-pill{bottom:96px !important;left:12px !important}}\n.ofc,.ofc-pill{animation:ofcin .6s cubic-bezier(.2,.8,.2,1) both}@keyframes ofcin{from{opacity:0;transform:translateY(30px) scale(.95)}to{opacity:1;transform:none}}\n.ofc-ping{animation:ofping 2s cubic-bezier(0,0,.2,1) infinite}@keyframes ofping{75%,100%{transform:scale(1.7);opacity:0}}\n.xo2{position:relative;display:inline-block}.xo2::after{content:\"\";position:absolute;left:-5px;right:-5px;top:52%;height:3px;border-radius:3px;background:#D9480F;transform:rotate(-10deg) scaleX(0);transform-origin:left center;animation:xo2 4s ease-in-out infinite}@keyframes xo2{0%,12%{transform:rotate(-10deg) scaleX(0)}32%,100%{transform:rotate(-10deg) scaleX(1)}}\n.nomo *,.nomo *::before,.nomo *::after{animation:none !important}\n.revmarq{animation:marq 40s linear infinite}.revwrap:hover .revmarq{animation-play-state:paused}\n.revcard{transition:transform .4s cubic-bezier(.2,.8,.2,1),box-shadow .4s}.revcard:hover{transform:translateY(-6px);box-shadow:0 30px 60px -30px rgba(11,34,54,.4)}\n@media (max-width:760px){.revcard{flex-basis:300px !important;width:300px !important}.stats4{grid-template-columns:repeat(2,minmax(0,1fr)) !important;row-gap:22px !important}.stats4 .st-n{font-size:22px !important}}\n@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation:none !important;transition:none !important;scroll-behavior:auto !important}}\n.btn-w.btn-ghost{background:transparent !important;color:#fff !important;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.5) !important}.btn-w.btn-ghost:hover{background:rgba(255,255,255,.12) !important}\n.fb input:focus,.fb textarea:focus{border-color:#0A6FB0 !important;box-shadow:0 0 0 4px rgba(10,111,176,.15);outline:none}\n.fb-in{animation:fbin .45s cubic-bezier(.2,.8,.2,1) both}@keyframes fbin{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}\n.fb-check{stroke-dasharray:60;stroke-dashoffset:60;animation:fbck .8s .2s ease forwards}@keyframes fbck{to{stroke-dashoffset:0}}\n.fb-chip{transition:background .2s,color .2s,transform .2s}.fb-chip:hover{transform:translateY(-2px)}\n.fb-star{transition:transform .2s}.fb-star:hover{transform:scale(1.15)}\n.fb-btn{transition:transform .3s,box-shadow .3s}.fb-btn:hover{transform:translateY(-2px);box-shadow:0 14px 28px -12px rgba(10,111,176,.7)}\n.fbm{animation:fbfade .3s ease both}@keyframes fbfade{from{opacity:0}to{opacity:1}}\n.fbm-card{animation:fbpop .45s cubic-bezier(.2,.8,.2,1) both}@keyframes fbpop{from{opacity:0;transform:translateY(30px) scale(.96)}to{opacity:1;transform:none}}\n.ft-btn{background:none;border:0;padding:6px 0;cursor:pointer;font-family:inherit;text-align:left;transition:color .2s}.ft-btn:hover{color:#fff !important}\n.vcard{transition:transform .45s cubic-bezier(.2,.8,.2,1),box-shadow .45s}.vcard:hover{transform:translateY(-8px);box-shadow:0 34px 60px -30px rgba(11,34,54,.6)}\n.vcard .vplay{transition:transform .35s cubic-bezier(.2,.8,.2,1)}.vcard:hover .vplay{transform:scale(1.12)}\n.vcard .vbg{transition:transform 1.2s cubic-bezier(.2,.8,.2,1)}.vcard:hover .vbg{transform:scale(1.15) rotate(-6deg)}\n.vping{animation:vping 2.2s cubic-bezier(0,0,.2,1) infinite}@keyframes vping{75%,100%{transform:scale(1.8);opacity:0}}\n.vflow{stroke-dasharray:22 12;animation:vflow 1.6s linear infinite}@keyframes vflow{to{stroke-dashoffset:-68}}";

export default class Main extends DCLogic {
  dict() {
    const I = {
      install: 'M3 4h18v8H3z M12 21v-6 M9 18l3-3 3 3',
      dismantle: 'M3 4h18v8H3z M12 15v6 M9 18l3 3 3-3',
      repair: 'M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z',
      clean: 'M12 3c3 4 5 6.5 5 9a5 5 0 0 1-10 0c0-2.5 2-5 5-9z M19 2v4 M17 4h4',
      freon: 'M4 15a8 8 0 1 1 16 0 M12 15l4-4 M7 19h10',
      weld: 'M12 3c1 3 4 4.5 4 8a4 4 0 0 1-8 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 0-7z M5 21h14',
      pipes: 'M3 7h8a3 3 0 0 1 3 3v4a3 3 0 0 0 3 3h4 M3 11h6 M17 13h4',
      chase: 'M3 4h18v16H3z M3 10h6 M15 10h6 M3 15h18 M12 4v6 M8 15v5 M16 15v5',
      vrf: 'M4 3h16v18H4z M8 7h3 M13 7h3 M8 11h3 M13 11h3 M8 15h3 M13 15h3 M10 21v-3h4v3'
    };
    const prices = [['install','20 000'],['dismantle','10 000'],['repair','10 000'],['clean','15 000'],['freon','10 000'],['weld','3 000'],['pipes','7 000'],['vrf','20 000']];
    const F = {
      cool: 'M12 2v20M4.9 7l14.2 10M4.9 17L19.1 7M9 4l3 2 3-2M9 20l3-2 3 2',
      heat: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M12 2v2 M12 20v2 M4.9 4.9l1.4 1.4 M17.7 17.7l1.4 1.4 M2 12h2 M20 12h2 M4.9 19.1l1.4-1.4 M17.7 6.3l1.4-1.4',
      drop: 'M12 3c3.5 4.5 6 7.8 6 11a6 6 0 0 1-12 0c0-3.2 2.5-6.5 6-11z',
      smell: 'M3 8h11a3 3 0 1 0-3-3 M3 12h16a3 3 0 1 1-3 3 M3 16h8',
      noise: 'M4 9v6h4l5 4V5L8 9H4z M17 9a4 4 0 0 1 0 6 M19.5 6.5a8 8 0 0 1 0 11',
      power: 'M12 3v9 M6.3 6.3a8 8 0 1 0 11.4 0',
      code: 'M12 9v4 M12 17h.01 M10.3 3.9L2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z',
      ice: 'M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0z'
    };
    const faqIc = ['cool','heat','drop','smell','noise','power','code','ice'];
    const S = {
      special: { icon: 'M3 8h18v4H3z M5 12v9h14v-9 M12 8v13 M12 8c-2-4-6-4-6-1.5S10 8 12 8z M12 8c2-4 6-4 6-1.5S14 8 12 8z', pct: '15 000', size: '96px', bg: '#FFF1E4', accent: '#B85A0E' },
      spring: { icon: 'M12 21V11 M12 11c0-4 3-7 7-7 0 4-3 7-7 7z M12 14c0-3-2-5-6-5 0 3 2 5 6 5z', pct: '−25%', bg: '#E8F5EE', accent: '#1F7A4D' },
      summer: { icon: F.heat, pct: '0 ֏', bg: '#FFF0E2', accent: '#B85A0E' },
      autumn: { icon: 'M5 19C5 11 10 5 20 4c-1 10-7 15-15 15z M5 19l8-8', pct: '−15%', bg: '#FBEFE3', accent: '#9A4A12' }
    };
    return {
      I, prices, F, faqIc, S,
      hy: {
        h1a: 'Մաքուր օդ և կատարյալ ջերմաստիճան՝', h1b: 'ամբողջ տարին',
        sub: 'Օդորակիչների տեղադրումից մինչև լիարժեք սպասարկում՝ մեկ տեղում։ Մեր փորձառու մասնագետները կօգնեն ապահովել ցանկալի ջերմաստիճան և հարմարավետություն ամբողջ տարվա ընթացքում։',
        cta1: 'Թողնել հայտ', cta2: 'Զանգահարել',
        stats: [['10','տարի ոլորտում'],['8 500+','սպասարկված օդորակիչ'],['Երաշխիք','մեր կատարած աշխատանքին'],['Արագ սպասարկում','1–2 օրում']],
        chipCool: 'Սառեցում · Eco ռեժիմ', chipPayTitle: 'Վճարում՝ աշխատանքից հետո', chipPaySub: 'Գինը հայտնի է նախքան աշխատանքը', chipWarranty: 'Որակի երաշխիք',
        brandsLabel: 'Սպասարկում ենք բոլոր բրենդները',
        audEyebrow: 'Երկու ուղղություն', audTitle: 'Ում ենք սպասարկում',
        privTitle: 'Անհատ հաճախորդներ', privText: 'Օդորակիչների տեղադրում, լվացում և սպասարկում բնակարաններում, առանձնատներում ու ամառանոցներում։',
        privList: ['Մաքուր և որակյալ աշխատանք','Հասանելի և թափանցիկ գներ','Վճարում աշխատանքի ավարտից հետո'], privLink: 'Ծառայություններ անհատների համար',
        bizTitle: 'Բիզնես և կորպորատիվ', bizText: 'Գրասենյակներ, ռեստորաններ, խանութներ, հյուրանոցներ, արտադրամասեր։',
        bizList: ['Ծավալային զեղչ','Աշխատանք ձեզ հարմար օրերին','Անկանխիկ փոխանցում, հաշիվ-ապրանքագիր','Առաջնահերթություն շտապ դեպքերում'], bizLink: 'Բիզնես լուծումներ',
        svcEyebrow: 'Ինչ ենք անում', svcTitle: 'Ծառայություններ', svcSub: 'Օդորակիչների համալիր սպասարկում՝ տեղադրումից մինչև տեխնիկական վերանորոգում։ Աշխատում ենք բոլոր մոդելների հետ՝ պահպանելով մաքրությունն ու տեխնիկական բոլոր նորմերը։', svcAll: 'Բոլոր ծառայություններն ու գները', svcPromo: 'Ակցիա + նվերներ', worksEyebrow: 'Մեր աշխատանքները', worksTitle: 'Մեր աշխատանքային ընթացքը', worksSub: 'Կարճ տեսանյութեր մեր առօրյա աշխատանքից՝ տեղադրում, լվացում և վերանորոգում։', worksAll: 'Բոլոր տեսանյութերը', featTag: 'Գլխավոր տեսանյութ', featT: 'Լվացում 15 000 ֏ + նվերներ', featS: 'Օդորակիչի ներքին և արտաքին բլոկների լվացման ընթացքն ու արդյունքը՝ առաջ և հետո։ Ֆրեոնի լիցքավորումն ու ախտորոշումը ներառված են որպես նվեր։', featCta: 'Դիտել բոլոր աշխատանքները', works: [['Մոնտաժել ենք 50 մ խողովակաշար','0:19','Տեղադրում','#0A6FB0','install','/assets/work1-poster.jpg'],['Լվացում 15 000 ֏ + նվերներ','0:21','Լվացում','#13314A','clean','/assets/work2-poster.jpg'],['Կեղտոտ օդորակիչը վտանգում է առողջությունը','0:21','Լվացում','#13314A','clean','/assets/work3-poster.jpg'],['Վերանորոգում եք տունը՝ մտածեք օդորակիչի մասին','0:24','Տեղադրում','#0A6FB0','install','/assets/work4-poster.jpg']], from: 'սկսած',
        svc: [['Տեղադրում','Ցանկացած ծավալի և բարդության'],['Ապամոնտաժում','Օդորակիչների ապամոնտաժում վակուումացումով'],['Վերանորոգում','Ախտորոշում, էլեկտրոնիկայի, պլատաների, կոմպրեսորի և պահեստամասերի նորոգում'],['Լվացում և ախտահանում','Ներքին և արտաքին բլոկների խորքային մաքրում, հակաբակտերիալ մշակում'],['Ֆրեոնի լիցքավորում','R410A, R32 և R22 գազով լիցքավորում ըստ ճնշման'],['Խողովակների զոդում','Պղնձե խողովակների զոդում և արտահոսքի վերացում'],['Խողովակաշարի մոնտաժ','Խողովակաշարի մոնտաժ և անցքերի փորում'],['VRF համակարգերի սպասարկում','Օդորակման համակարգերի պրոֆեսիոնալ ախտորոշում, լվացում և նորոգում']],
        unit: '֏', unitM: '֏ / մ',
        promo: {
          special: ['Հատուկ առաջարկ','Լվացում 15 000 ֏ + նվերներ','Պատվիրեք օդորակիչի լվացում ընդամենը 15 000 դրամով և ստացեք','Եթե օդորակիչը թույլ է փչում, վատ է տաքացնում կամ տհաճ հոտ է գալիս, ներսում կուտակվել է կեղտ ու փոշի կամ առկա է ֆրեոնի պակաս։ Դրա պատճառով սարքը աշխատում է ավելի թույլ և ծախսում է ավելի շատ էլեկտրաէներգիա։','Սահմանափակ առաջարկ','',['x'],{ main: 'Պրոֆեսիոնալ լվացում (ներսի և դրսի բլոկ)', price: '15 000 ֏', free: 'ՆՎԵՐ', payLabel: 'Վճարում եք ընդամենը', save: 'Խնայում եք 15 000 ֏', oldTotal: '30 000 ֏', gifts: [{ n: 'Ֆրեոնի լիցքավորում (մինչև 300 գ)', old: '10 000 ֏' }, { n: 'Օդորակիչի ախտորոշում', old: '5 000 ֏' }] },'նվերներ'],
          winter: ['Ձմեռային առաջարկ','Լվացում 15 000 ֏ + նվերներ','Ամենաձեռնտու առաջարկը՝ պրոֆեսիոնալ լվացում (ներսի և դրսի բլոկ) ընդամենը 15 000 ֏','Եթե օդորակիչը թույլ է փչում, վատ է տաքացնում կամ տհաճ հոտ է գալիս, ներսում կուտակվել է կեղտ ու փոշի կամ առկա է ֆրեոնի պակաս։ Դրա պատճառով սարքը աշխատում է ավելի թույլ և ծախսում է ավելի շատ էլեկտրաէներգիա։','Սահմանափակ առաջարկ','դրամ՝ լվացում + նվերներ',['Նվեր՝ ֆրեոնի լիցքավորում (մինչև 300 գ)','Նվեր՝ օդորակիչի ախտորոշում']],
          spring: ['Գարնանային ակցիա','Սեզոնի բացում −25%','Սեզոնի բացում՝ լվացում և ֆրեոնի ստուգում −25%','Սպասարկեք օդորակիչը մինչև շոգերը և առանց հերթի։','Մինչև մայիսի 31'],
          summer: ['Ամառային առաջարկ','Անվճար ախտորոշում','Տեղադրում + անվճար ախտորոշում','Շոգին մի սպասեք․ գրանցվեք նախօրոք՝ առանց հերթի։','Մինչև օգոստոսի 31'],
          autumn: ['Աշնանային ակցիա','Կոնսերվացիա −15%','Ապամոնտաժում և կոնսերվացիա՝ −15%','Կոնսերվացնում ենք արտաքին բլոկը և պատրաստում այն ձմռանը։','Մինչև նոյեմբերի 30']
        },
        promoCta: 'Օգտվել առաջարկից', promoNote: 'սահմանափակ առաջարկ',
        calcEyebrow: 'Հզորության ընտրիչ', calcTitle: 'Ինչ հզորության օդորակիչ է ձեզ պետք', calcSub: 'Նշեք սենյակի պարամետրերը, և մենք անմիջապես կհաշվարկենք։',
        calcArea: 'Սենյակի մակերես', m2: 'մ²', calcCeil: 'Առաստաղի բարձրություն', m: 'մ', calcSun: 'Արևոտ կողմ', yes: 'Այո, արևոտ է', no: 'Ոչ', calcPeople: 'Մարդկանց քանակ',
        calcRes: 'Առաջարկվող հզորություն', kw: 'կՎտ', calcModel: 'Մոդել', fit: (m) => 'Հարմար է մինչև ' + m + ' մ² սենյակի համար', fitBig: 'Մեծ տարածք՝ առաջարկում ենք անվճար խորհրդատվություն',
        calcNote: 'Հաշվարկը մոտավոր է։ Վարպետը անվճար կճշտի տեղում՝ հաշվի առնելով պատուհանները, տեխնիկան և հարկը։', calcCta: 'Պատվիրել տեղադրում',
        baEyebrow: 'Առաջ և հետո', baTitle: 'Ի՞նչ է տալիս օդորակիչի լվացումը', baSub: 'Ներքին բլոկի ռադիատորը մինչև և լվացումից հետո։ Քաշեք սահիչը։', before: 'Առաջ', after: 'Հետո', baAria: 'Համեմատել առաջ և հետո',
        baList: [['−30%','էլեկտրաէներգիայի ծախս'],['100%','բորբոսի և հոտի վերացում'],['2×','ավելի ուժեղ օդահոսք']],
        faqEyebrow: 'Խնդիրներ և լուծումներ', faqTitle: 'Ինչ է պատահել օդորակիչին', faqSub: 'Ընտրեք ձեր խնդիրը՝ կտեսնեք հնարավոր պատճառները և ինչ կարող եք անել հենց հիմա։',
        faqHelpTitle: 'Չգտա՞ք ձեր խնդիրը', faqHelpText: 'Գրեք կամ զանգահարեք մեզ, և վարպետը կօգնի պարզել խնդիրը և կասի գինը։', faqAll: 'Բոլոր խնդիրները և սխալի կոդերը',
        causes: 'Հնարավոր պատճառներ', diy: 'Ինչ անել հիմա', callMaster: 'Կանչել վարպետին',
        faq: [
          ['Օդորակիչը չի սառեցնում','Ֆրեոնի արտահոսք, կեղտոտ ֆիլտրեր կամ ռադիատոր, կոմպրեսորի կամ կոնդենսատորի անսարքություն։','Ստուգեք, որ միացված է սառեցման ռեժիմը, և լվացեք ֆիլտրերը։ Եթե 15 րոպեից չի օգնում՝ կանչեք վարպետին։'],
          ['Չի տաքացնում','Արտաքին բլոկի սառցակալում, 4-ուղի փականի անսարքություն, ֆրեոնի պակաս։ −15°C-ից ցածր ջերմաստիճանում սովորական մոդելները կորցնում են արդյունավետությունը։','Համոզվեք, որ միացված է ջեռուցման ռեժիմը, և սպասեք 5–10 րոպե․ համակարգը նախ տաքանում է։'],
          ['Ջուր է կաթում ներքին բլոկից','Խցանված դրենաժ, մոնտաժի ժամանակ սխալ թեքություն, սառցակալած ռադիատոր։','Անջատեք օդորակիչը և տեղադրեք տարա։ Դրենաժի մաքրումը տևում է 30–40 րոպե։'],
          ['Տհաճ հոտ է գալիս','Բորբոս և բակտերիաներ ռադիատորի ու օդափոխիչի վրա, կեղտոտ դրենաժ։','Լվացեք ֆիլտրերը։ Խորը ախտահանում անհրաժեշտ է տարին 1–2 անգամ։'],
          ['Աղմկում կամ թրթռում է','Թուլացած ամրակներ, օդափոխիչի անհավասարակշռություն, կոմպրեսորի մաշվածություն։','Ստուգեք, արդյոք ինչ-որ բան չի դիպչում արտաքին բլոկին։ Մետաղական ձայնի դեպքում անմիջապես անջատեք։'],
          ['Ինքն իրեն անջատվում է','Գերտաքացում, սենսորի կամ էլեկտրոնիկայի անսարքություն, լարման տատանումներ։','Մաքրեք ֆիլտրերը և ստուգեք վահանակի թայմերը։'],
          ['Էկրանին սխալի կոդ է (E1, F0, H6…)','Կոդը ցույց է տալիս կոնկրետ անսարքություն՝ սենսոր, բլոկների միջև կապ, ֆրեոնի պակաս։','Լուսանկարեք կոդը և ուղարկեք WhatsApp-ով․ կասենք պատճառը և գինը։'],
          ['Սառույց է գոյանում խողովակներին','Ֆրեոնի պակաս, կեղտոտ ֆիլտրեր, օդափոխիչի թույլ աշխատանք։','Անջատեք 1–2 ժամով, որ սառույցը հալվի, և մաքրեք ֆիլտրերը։']
        ],
        waTitle: 'Ուղարկեք լուսանկար՝ ստացեք գինը 10 րոպեում', waCta: 'Գրել WhatsApp-ով',
        waSteps: [['1','Լուսանկարեք օդորակիչը, պիտակը կամ սխալի կոդը'],['2','Ուղարկեք WhatsApp-ով մեր համարին'],['3','Ստացեք նախնական գինը և վարպետի ազատ ժամերը']],
        chat1: 'Բարև Ձեզ, օդորակիչը չի սառեցնում, էկրանին E1 է գրված', chat2: 'Բարև Ձեզ։ E1-ը սենսորի սխալ է։ Վերանորոգումը՝ 8–12 հազ. ֏։ Վարպետը կարող է գալ այսօր կամ վաղը։ Հարմա՞ր է։',
        procEyebrow: 'Պարզ և թափանցիկ', procTitle: 'Ինչպես ենք աշխատում',
        steps: [['01','Հայտ','Կայքով կամ զանգով՝ 1 րոպեում'],['02','Ախտորոշում','Վարպետը ստուգում է և ասում ճշգրիտ գինը նախքան աշխատանքը'],['03','Աշխատանք','Մաքուր և ճշգրիտ՝ պրոֆեսիոնալ գործիքներով'],['04','Որակի երաշխիք','Վճարում եք արդյունքից հետո։']],
        revEyebrow: 'Կարծիքներ', revTitle: 'Ինչ են ասում հաճախորդները', revBoxTitle: 'Արդեն մեր հաճախորդն եք', revBoxSub: 'Կիսվեք ձեր կարծիքով, մեզ համար դա կարևոր է', revCta: 'Թողնել կարծիք',
        reviews: [['Զանգեցի առավոտյան, ժամը 12-ին արդեն ամեն ինչ աշխատում էր։ Մաքուր, արագ և ազնիվ գնով։','Աննա Մ.','Արաբկիր, Երևան','Վերանորոգում','Ա','#0A6FB0'],['Գրասենյակի 14 օդորակիչները պլանային սպասարկում են արդեն երկրորդ տարին։ Երբեք չեն ուշացել։','Արմեն Հ.','IT ընկերություն','Բիզնես','Ա','#0B2236'],['Տեղադրեցին և խողովակները թաքցրին պատի մեջ, փոշի գրեթե չկար։ Խորհուրդ եմ տալիս։','Լիլիթ Ս.','Էջմիածին','Տեղադրում','Լ','#B85A0E'],['Օդորակիչից տհաճ հոտ էր գալիս։ Լվացումից հետո օդը իսկապես մաքուր է, իսկ վարպետը բացատրեց, թե ինչպես խնամել ֆիլտրերը։','Գոհար Վ.','Նոր Նորք, Երևան','Լվացում','Գ','#1F7A4D'],['Ռեստորանի 6 օդորակիչները լվացին մեկ օրում՝ փակվելուց հետո, որպեսզի չխանգարեն հյուրերին։','Դավիթ Կ.','Ռեստորան, Կենտրոն','Բիզնես','Դ','#13314A'],['Ֆրեոնի արտահոսք էր։ Գտան, զոդեցին և լիցքավորեցին, գինը ասացին նախօրոք, և այն չփոխվեց։','Սամվել Պ.','Աբովյան','Ֆրեոն','Ս','#0A6FB0']],
        bookEyebrow: 'Հայտ', bookTitle: 'Թողեք հայտ՝ մենք կկապվենք ձեզ հետ', bookSub: 'Կզանգահարենք՝ ճշտելու խնդիրը և համաձայնեցնելու վարպետի այցը։',
        perks: [], phone: 'Հեռախոս',
        quick: 'Արագ կապ', mCall: 'Զանգել', mReq: 'Թողնել հայտ'
      },
      ru: {
        h1a: 'Чистый воздух и идеальная температура —', h1b: 'круглый год',
        sub: 'От установки кондиционеров до полного обслуживания — в одном месте. Наши опытные специалисты помогут поддерживать нужную температуру и комфорт круглый год.',
        cta1: 'Оставить заявку', cta2: 'Позвонить',
        stats: [['10','лет в сфере'],['8 500+','обслуженных кондиционеров'],['Гарантия','на выполненную работу'],['Быстрое обслуживание','за 1–2 дня']],
        chipCool: 'Охлаждение · Eco режим', chipPayTitle: 'Оплата после работы', chipPaySub: 'Цена известна до начала работ', chipWarranty: 'Гарантия качества',
        brandsLabel: 'Обслуживаем все бренды',
        audEyebrow: 'Два направления', audTitle: 'Кого мы обслуживаем',
        privTitle: 'Частным клиентам', privText: 'Установка, чистка и обслуживание кондиционеров в квартирах, частных домах и на дачах.',
        privList: ['Чистая и качественная работа','Доступные и прозрачные цены','Оплата после завершения работы'], privLink: 'Услуги для частных клиентов',
        bizTitle: 'Бизнесу и корпоративным клиентам', bizText: 'Офисы, рестораны, магазины, отели, производства.',
        bizList: ['Скидка за объём','Работа в удобные для вас дни','Безналичный перевод, счёт-фактура','Приоритет в срочных случаях'], bizLink: 'Решения для бизнеса',
        svcEyebrow: 'Что мы делаем', svcTitle: 'Услуги', svcSub: 'Комплексное обслуживание кондиционеров: от установки до технического ремонта. Работаем со всеми моделями, соблюдая чистоту и все технические нормы.', svcAll: 'Все услуги и цены', svcPromo: 'Акция + подарки', worksEyebrow: 'Наши работы', worksTitle: 'Наш рабочий процесс', worksSub: 'Короткие видео из нашей повседневной работы: установка, чистка и ремонт.', worksAll: 'Все видео', featTag: 'Главное видео', featT: 'Чистка 15 000 ֏ + подарки', featS: 'Процесс и результат чистки внутреннего и наружного блоков кондиционера: до и после. Заправка фреоном и диагностика включены в подарок.', featCta: 'Смотреть все работы', works: [['Смонтировали 50 м трассы','0:19','Установка','#0A6FB0','install','/assets/work1-poster.jpg'],['Чистка 15 000 ֏ + подарки','0:21','Чистка','#13314A','clean','/assets/work2-poster.jpg'],['Грязный кондиционер опасен для здоровья','0:21','Чистка','#13314A','clean','/assets/work3-poster.jpg'],['Делаете ремонт? Подумайте о кондиционере','0:24','Установка','#0A6FB0','install','/assets/work4-poster.jpg']], from: 'от',
        svc: [['Установка','Любого объёма и сложности'],['Демонтаж','Демонтаж кондиционеров с вакуумированием'],['Ремонт','Диагностика, ремонт электроники, плат, компрессора и запчастей'],['Чистка и дезинфекция','Глубокая чистка внутреннего и наружного блоков, антибактериальная обработка'],['Заправка фреоном','Заправка газом R410A, R32 и R22 по давлению'],['Пайка труб','Пайка медных труб и устранение утечек'],['Монтаж трассы','Монтаж трассы и сверление отверстий'],['Обслуживание VRF-систем','Профессиональная диагностика, чистка и ремонт систем кондиционирования']],
        unit: '֏', unitM: '֏ / м',
        promo: {
          special: ['Специальное предложение','Чистка 15 000 ֏ + подарки','Закажите чистку кондиционера всего за 15 000 драмов и получите','Если кондиционер слабо дует, плохо греет или появился неприятный запах — внутри скопились грязь и пыль или не хватает фреона. Из-за этого он работает слабее и потребляет больше электроэнергии.','Ограниченное предложение','',['x'],{ main: 'Профессиональная чистка (внутренний и наружный блок)', price: '15 000 ֏', free: 'ПОДАРОК', payLabel: 'Вы платите всего', save: 'Экономия 15 000 ֏', oldTotal: '30 000 ֏', gifts: [{ n: 'Заправка фреоном (до 300 г)', old: '10 000 ֏' }, { n: 'Диагностика кондиционера', old: '5 000 ֏' }] },'подарки'],
          winter: ['Зимнее предложение','Чистка 15 000 ֏ + подарки','Самое выгодное предложение: профессиональная чистка (внутренний и наружный блок) всего за 15 000 ֏','Если кондиционер слабо дует, плохо греет или появился неприятный запах — внутри скопились грязь и пыль или не хватает фреона. Из-за этого он работает слабее и потребляет больше электроэнергии.','Ограниченное предложение','драмов — чистка + подарки',['Подарок: заправка фреоном (до 300 г)','Подарок: диагностика кондиционера']],
          spring: ['Весенняя акция','Открытие сезона −25%','Открытие сезона: чистка и проверка фреона −25%','Обслужите кондиционер до жары и без очереди.','До 31 мая'],
          summer: ['Летнее предложение','Бесплатная диагностика','Установка + бесплатная диагностика','Не ждите жары: запишитесь заранее и без очереди.','До 31 августа'],
          autumn: ['Осенняя акция','Консервация −15%','Демонтаж и консервация — −15%','Законсервируем наружный блок и подготовим его к зиме.','До 30 ноября']
        },
        promoCta: 'Воспользоваться', promoNote: 'ограниченное предложение',
        calcEyebrow: 'Подбор мощности', calcTitle: 'Какой мощности кондиционер вам нужен', calcSub: 'Укажите параметры комнаты — рассчитаем мгновенно.',
        calcArea: 'Площадь комнаты', m2: 'м²', calcCeil: 'Высота потолка', m: 'м', calcSun: 'Солнечная сторона', yes: 'Да, солнечная', no: 'Нет', calcPeople: 'Количество людей',
        calcRes: 'Рекомендуемая мощность', kw: 'кВт', calcModel: 'Модель', fit: (m) => 'Подходит для комнат до ' + m + ' м²', fitBig: 'Большое помещение — предложим бесплатную консультацию',
        calcNote: 'Расчёт приблизительный. Мастер бесплатно уточнит на месте с учётом окон, техники и этажа.', calcCta: 'Заказать установку',
        baEyebrow: 'До и после', baTitle: 'Что даёт чистка кондиционера', baSub: 'Радиатор внутреннего блока до и после чистки. Потяните ползунок.', before: 'До', after: 'После', baAria: 'Сравнить до и после',
        baList: [['−30%','расход электроэнергии'],['100%','удаление плесени и запаха'],['2×','более сильный поток воздуха']],
        faqEyebrow: 'Проблемы и решения', faqTitle: 'Что случилось с кондиционером', faqSub: 'Выберите проблему — увидите возможные причины и что можно сделать прямо сейчас.',
        faqHelpTitle: 'Не нашли свою проблему?', faqHelpText: 'Напишите или позвоните нам — мастер поможет разобраться в проблеме и назовёт цену.', faqAll: 'Все проблемы и коды ошибок',
        causes: 'Возможные причины', diy: 'Что сделать сейчас', callMaster: 'Вызвать мастера',
        faq: [
          ['Кондиционер не охлаждает','Утечка фреона, грязные фильтры или радиатор, неисправность компрессора или конденсатора.','Проверьте, что включён режим охлаждения, и промойте фильтры. Если через 15 минут не помогло — вызовите мастера.'],
          ['Не греет','Обмерзание наружного блока, неисправность 4-ходового клапана, недостаток фреона. Ниже −15°C обычные модели теряют эффективность.','Убедитесь, что включён режим обогрева, и подождите 5–10 минут: система сначала прогревается.'],
          ['Течёт вода из внутреннего блока','Засор дренажа, неправильный уклон при монтаже, обмерзание радиатора.','Выключите кондиционер и подставьте ёмкость. Чистка дренажа занимает 30–40 минут.'],
          ['Неприятный запах','Плесень и бактерии на радиаторе и вентиляторе, грязный дренаж.','Промойте фильтры. Глубокая дезинфекция нужна 1–2 раза в год.'],
          ['Шумит или вибрирует','Ослабленные крепления, дисбаланс вентилятора, износ компрессора.','Проверьте, не касается ли что-то наружного блока. При металлическом звуке сразу выключите.'],
          ['Сам отключается','Перегрев, неисправность датчика или электроники, скачки напряжения.','Почистите фильтры и проверьте таймер на пульте.'],
          ['На дисплее код ошибки (E1, F0, H6…)','Код указывает на конкретную неисправность: датчик, связь между блоками, нехватка фреона.','Сфотографируйте код и отправьте в WhatsApp — назовём причину и цену.'],
          ['Наледь на трубках','Недостаток фреона, грязные фильтры, слабая работа вентилятора.','Выключите на 1–2 часа, чтобы лёд растаял, и почистите фильтры.']
        ],
        waTitle: 'Пришлите фото — получите цену за 10 минут', waCta: 'Написать в WhatsApp',
        waSteps: [['1','Сфотографируйте кондиционер, шильдик или код ошибки'],['2','Отправьте в WhatsApp на наш номер'],['3','Получите предварительную цену и свободное время мастера']],
        chat1: 'Здравствуйте, кондиционер не охлаждает, на экране E1', chat2: 'Здравствуйте! E1 — ошибка датчика. Ремонт 8–12 тыс. ֏. Мастер может приехать сегодня или завтра. Удобно?',
        procEyebrow: 'Просто и прозрачно', procTitle: 'Как мы работаем',
        steps: [['01','Заявка','Через сайт или по телефону — за 1 минуту'],['02','Диагностика','Мастер проверяет и называет точную цену до начала работ'],['03','Работа','Аккуратно и точно — профессиональным инструментом'],['04','Гарантия качества','Оплата после результата.']],
        revEyebrow: 'Отзывы', revTitle: 'Что говорят клиенты', revBoxTitle: 'Уже наш клиент?', revBoxSub: 'Поделитесь отзывом — для нас это важно', revCta: 'Оставить отзыв',
        reviews: [['Позвонила утром, к 12 часам всё уже работало. Чисто, быстро и по честной цене.','Анна М.','Арабкир, Ереван','Ремонт','А','#0A6FB0'],['Уже второй год планово обслуживают 14 кондиционеров в нашем офисе. Ни разу не опоздали.','Армен А.','IT-компания','Бизнес','А','#0B2236'],['Установили и спрятали трассу в стену, пыли почти не было. Рекомендую.','Лилит С.','Эчмиадзин','Установка','Л','#B85A0E'],['От кондиционера шёл неприятный запах. После чистки воздух действительно свежий, а мастер объяснил, как ухаживать за фильтрами.','Гоар В.','Нор Норк, Ереван','Чистка','Г','#1F7A4D'],['Почистили 6 кондиционеров в ресторане за один день — после закрытия, чтобы не мешать гостям.','Давид К.','Ресторан, Центр','Бизнес','Д','#13314A'],['Была утечка фреона. Нашли, запаяли и заправили, цену назвали заранее — и она не изменилась.','Самвел П.','Абовян','Фреон','С','#0A6FB0']],
        bookEyebrow: 'Заявка', bookTitle: 'Оставьте заявку — мы свяжемся с вами', bookSub: 'Перезвоним, уточним проблему и согласуем визит мастера.',
        perks: [], phone: 'Телефон',
        quick: 'Быстрая связь', mCall: 'Позвонить', mReq: 'Оставить заявку'
      }
    };
  }
  componentDidMount() {
    // Old links like /?lang=ru now live at /ru/
    if (this.props.lang !== 'ru' && new URLSearchParams(window.location.search).get('lang') === 'ru') window.location.replace('/ru/' + window.location.hash);
  }

  renderVals() {
    const s = this.state || {};
    const D = this.dict();
    const lang = this.props.lang || 'hy';
    const L = D[lang];
    const season = this.props.season ?? 'special';
    const motion = this.props.motion ?? true;
    const P = L.promo[season] || L.promo.special;
    const SV = D.S[season] || D.S.special;
    const promo = { tag: P[0], short: P[1], title: P[2], text: P[3], until: P[4], note: P[5] || L.promoNote, rc: P[7] || null, hasGifts: !!P[7], noGifts: !P[7], titleHl: P[8] || '', icon: SV.icon, pct: SV.pct, size: SV.size || '168px', bg: SV.bg, accent: SV.accent };

    const area = s.area ?? 25, ceil = s.ceil ?? 2.7, sunny = !!s.sunny, people = s.people ?? 2;
    const kwNum = area * ceil * (sunny ? 40 : 33) / 1000 + Math.max(0, people - 1) * 0.1;
    const classes = [['7 000', 2.1, 20, '7k'], ['9 000', 2.6, 26, '9k'], ['12 000', 3.5, 35, '12k'], ['18 000', 5.3, 52, '18k'], ['24 000', 7.0, 70, '24k'], ['30 000', 8.8, 90, '30k'], ['36 000+', 99, 0, '36k+']];
    let idx = classes.findIndex(c => kwNum <= c[1]); if (idx < 0) idx = classes.length - 1;
    const C = classes[idx];
    const kw = (Math.round(kwNum * 10) / 10).toFixed(1).replace('.', ',');
    const scale = classes.map((c, i) => ({ k: c[3], bar: 'height: ' + (14 + i * 9) + 'px; border-radius: 6px; background: ' + (i === idx ? '#F28A2E' : (i < idx ? '#3A86C2' : 'rgba(255,255,255,.14)')) + '; transition: background .3s; margin-top: ' + (54 - i * 9) + 'px' }));
    const ceilVals = [2.5, 2.7, 3.0, 3.5];
    const ceils = ceilVals.map(v => ({ label: v.toFixed(1).replace('.', ',') + ' ' + L.m, on: v === ceil, pick: () => this.setState({ ceil: v }), style: 'min-height: 44px; padding: 0 20px; border-radius: 999px; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer; ' + (v === ceil ? 'background: #0A6FB0; color: #fff; border: 1.5px solid #0A6FB0' : 'background: #fff; color: #0B2236; border: 1.5px solid #D5E2EE') }));
    const pct = (area - 10) / 110 * 100;

    const pos = s.pos ?? 50;
    const openFaq = s.openFaq ?? 0;
    const faq = L.faq.map((f, i) => ({ q: f[0], c: f[1], d: f[2], ic: D.F[D.faqIc[i]], open: i === openFaq, rot: i === openFaq ? 'rotate(180deg)' : 'rotate(0deg)', border: i === openFaq ? '#9FC3E0' : '#E1ECF5', icBg: i === openFaq ? '#0A6FB0' : '#EAF4FB', icFg: i === openFaq ? '#fff' : '#0A6FB0', toggle: () => this.setState({ openFaq: openFaq === i ? -1 : i }) }));

    const svcs = D.prices.map((p, i) => ({ from: p[0] === 'clean' ? '\u00a0' : L.from, icon: D.I[p[0]], title: L.svc[i][0], desc: L.svc[i][1], price: p[1], unit: (p[0] === 'pipes' || p[0] === 'chase') ? L.unitM : L.unit, promo: p[0] === 'clean' }));
    const b = ['Daikin', 'Mitsubishi Electric', 'LG', 'Samsung', 'Gree', 'Midea', 'Haier', 'Toshiba', 'Panasonic', 'Hisense', 'AUX', 'Ballu'];

    const t = Object.assign({}, L, {
      waSteps: L.waSteps.map(w => ({ n: w[0], t: w[1] })),
      steps: L.steps.map(p => ({ n: p[0], t: p[1], d: p[2] })),
      reviews: L.reviews.map(r => ({ q: r[0], n: r[1], w: r[2], tag: r[3], i: r[4], c: r[5] })),
      baList: L.baList.map(x => ({ n: x[0], l: x[1] }))
    });

    const nRev = t.reviews.length;
    const revMarquee = nRev > 3;
    return {
      revMarquee, revStatic: !revMarquee, revLoop: t.reviews.concat(t.reviews), revDur: (nRev * 8) + 's',
      works: L.works.map(w => ({ poster: w[5] || '', t: w[0], d: w[1], cl: w[2], bg: w[3], ic: {"install": "M3 4h18v8H3z M12 21v-6 M9 18l3-3 3 3", "clean": "M12 3c3 4 5 6.5 5 9a5 5 0 0 1-10 0c0-2.5 2-5 5-9z M19 2v4 M17 4h4", "repair": "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z", "ba": "M12 3v18 M5 8l-3 4 3 4 M19 8l3 4-3 4"}[w[4]] })),
      openReview: (e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('ac:feedback', { detail: 'thanks' })); },
      offerPicked: !!s.offerPicked, pickOffer: () => this.setState({ offerPicked: true }),
      t, lang, promo, svcs, faq, ceils, scale,
      rootCls: motion ? 'site' : 'site nomo',
      stats: L.stats.map(x => ({ n: x[0], l: x[1] })),
      brands: b.concat(b),
      setLang: (l) => this.setState({ lang: l }),
      area, people, sunny, kw, btu: C[0], fit: C[2] ? L.fit(C[2]) : L.fitBig,
      rngBg: 'linear-gradient(90deg, #0A6FB0 0%, #0B7CC4 ' + pct + '%, #DCE8F2 ' + pct + '%)',
      onArea: (e) => this.setState({ area: +e.target.value }),
      toggleSun: () => this.setState({ sunny: !sunny }),
      sunLabel: sunny ? L.yes : L.no,
      sunTrack: 'position: relative; width: 60px; height: 34px; border-radius: 999px; transition: background .25s; background: ' + (sunny ? '#F28A2E' : '#D5E2EE'),
      sunKnob: 'position: absolute; top: 4px; left: ' + (sunny ? '30px' : '4px') + '; width: 26px; height: 26px; border-radius: 50%; background: #fff; box-shadow: 0 2px 6px rgba(11,34,54,.3); transition: left .25s cubic-bezier(.2,.8,.2,1)',
      peopleUp: () => this.setState({ people: Math.min(10, people + 1) }),
      peopleDown: () => this.setState({ people: Math.max(1, people - 1) }),
      pos, clipR: 100 - pos,
      onPos: (e) => this.setState({ pos: +e.target.value })
    };
  }

  render() {
    const V: any = this.renderVals() || {};
    const P = (p: string) => path(this.props.lang ?? 'hy', p);
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className={V.rootCls} style={{ fontFamily : "'Manrope', 'Noto Sans Armenian', system-ui, sans-serif", color : "#0B2236", background : "#F4F8FC", overflowX : "clip", minHeight : "100vh" }}>
        <div style={{ position : "sticky", top : "0", zIndex : "60" }}>
          <Header active="home" lang={V.lang} />
        </div>
        <section style={{ position : "relative", overflow : "hidden", padding : "64px 24px 88px" }}>
          <div aria-hidden="true" className="blob" style={{ position : "absolute", width : "720px", height : "720px", right : "-160px", top : "-220px", borderRadius : "50%", background : "radial-gradient(circle, rgba(169,211,239,.75) 0%, rgba(169,211,239,0) 68%)" }} />
          <div aria-hidden="true" className="blob" style={{ position : "absolute", width : "420px", height : "420px", left : "-140px", bottom : "-160px", borderRadius : "50%", background : "radial-gradient(circle, rgba(242,138,46,.22) 0%, rgba(242,138,46,0) 68%)", animationDuration : "22s" }} />
          <div aria-hidden="true" style={{ position : "absolute", inset : "0", backgroundImage : "radial-gradient(rgba(11,34,54,.09) 1.2px, transparent 1.2px)", backgroundSize : "26px 26px", maskImage : "linear-gradient(180deg, #000 0%, transparent 85%)", WebkitMaskImage : "linear-gradient(180deg, #000 0%, transparent 85%)" }} />
          <div style={{ maxWidth : "1280px", margin : "0 auto", display : "flex", flexWrap : "wrap", gap : "48px", alignItems : "center", position : "relative" }}>
            <div style={{ flex : "1 1 540px", minWidth : "0" }}>
              <a href="#promo" className="rise" style={{ display : "inline-flex", alignItems : "center", gap : "10px", padding : "6px 16px 6px 6px", borderRadius : "999px", background : "#fff", border : "1px solid #DCE8F2", textDecoration : "none", color : "#0B2236", fontWeight : "600", fontSize : "14px", boxShadow : "0 8px 24px -16px rgba(11,34,54,.4)" }}>
                <span style={css(`background: ${V.promo?.accent ?? ""}; color: #fff; border-radius: 999px; padding: 5px 12px; font-size: 12px; font-weight: 800`)}>
                  {V.promo?.tag}
                </span>
                <span>
                  {V.promo?.short}
                </span>
                <span aria-hidden="true">
                  {"→"}
                </span>
              </a>
              <h1 className="rise d1 h1x" style={{ margin : "26px 0 22px", fontSize : "68px", lineHeight : "1.05", letterSpacing : "-0.035em", fontWeight : "800" }}>
                {V.t?.h1a}{" "}
                <span style={{ position : "relative", display : "inline-block", color : "#0A6FB0" }}>
                  {V.t?.h1b}
                  <svg aria-hidden="true" viewBox="0 0 300 20" preserveAspectRatio="none" style={{ position : "absolute", left : "0", bottom : "-10px", width : "100%", height : "18px" }}>
                    <path className="draw" d="M4 14 C 70 4, 150 4, 296 12" fill="none" stroke="#F28A2E" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="rise d2" style={{ margin : "0 0 34px", fontSize : "19px", lineHeight : "1.65", color : "#3F566B", maxWidth : "580px" }}>
                {V.t?.sub}
              </p>
              <div className="rise d3" style={{ display : "flex", flexWrap : "wrap", gap : "14px" }}>
                <a href="#booking" className="btn-o">
                  {V.t?.cta1}{" "}
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a href="tel:+37441559910" className="btn-w">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A6FB0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
                  </svg>
                  {V.t?.cta2}
                </a>
              </div>
              <div className="rise d4 stats4" style={{ display : "grid", gridTemplateColumns : "repeat(4, minmax(0, 1fr))", gap : "12px", marginTop : "44px", maxWidth : "640px" }}>
                {(V.stats ?? []).map((st: any, $i8: number) => (
                  <React.Fragment key={$i8}>
                    <div style={{ borderLeft : "2px solid #D3E2EF", padding : "2px 0 2px 14px" }}>
                      <div className="st-n" style={{ fontSize : (st?.n?.length > 10 ? "20px" : "28px"), fontWeight : "800", letterSpacing : "-0.02em", color : "#0B2236" }}>
                        {st?.n}
                      </div>
                      <div style={{ fontSize : "13px", lineHeight : "1.35", color : "#4A5F73", marginTop : "4px" }}>
                        {st?.l}
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="hero-art rise d2" style={{ flex : "1 1 500px", minWidth : "0", position : "relative", height : "540px" }}>
              <div aria-hidden="true" style={{ position : "absolute", left : "50%", top : "50%", width : "470px", height : "470px", margin : "-235px 0 0 -235px", borderRadius : "50%", background : "#E3F0FA", boxShadow : "inset 0 0 0 1px #D2E5F4" }} />
              <div aria-hidden="true" className="spin" style={{ position : "absolute", left : "50%", top : "50%", width : "540px", height : "540px", margin : "-270px 0 0 -270px", borderRadius : "50%", border : "1.5px dashed #B9D5EA", animationDuration : "60s" }} />
              <svg role="img" aria-label={V.lang === "ru" ? "Кондиционер с солнцем и снежинкой" : "Օդորակիչ՝ արևով և ձյան փաթիլով"} viewBox="0 0 560 460" style={{ position : "absolute", left : "50%", top : "50%", width : "520px", maxWidth : "100%", transform : "translate(-50%, -50%)" }}>
                <g className="spin">
                  <circle cx="262" cy="70" r="30" fill="none" stroke="#0B7CC4" strokeWidth="14" strokeDasharray="10.5 8.35" />
                  <circle cx="262" cy="70" r="24" fill="#0B7CC4" />
                  <circle cx="262" cy="70" r="10" fill="#E3F0FA" />
                </g>
                <g className="spin-r">
                  <circle cx="314" cy="96" r="19" fill="none" stroke="#F28A2E" strokeWidth="9" strokeDasharray="7 5.9" />
                  <circle cx="314" cy="96" r="15" fill="#E3F0FA" stroke="#F28A2E" strokeWidth="3" />
                  <circle cx="314" cy="96" r="6" fill="none" stroke="#F28A2E" strokeWidth="3" />
                </g>
                <g className="sunr">
                  <path d="M76 165 A40 40 0 0 0 76 245 Z" fill="#F28A2E" />
                  <g stroke="#F28A2E" strokeWidth="9" strokeLinecap="round">
                    <path d="M24 205 H6" />
                    <path d="M31 179 L15 170" />
                    <path d="M31 231 L15 240" />
                    <path d="M50 160 L41 144" />
                    <path d="M50 250 L41 266" />
                    <path d="M76 153 V134" />
                    <path d="M76 257 V276" />
                  </g>
                </g>
                <rect x="112" y="244" width="336" height="52" rx="18" fill="#7FB3D5" />
                <rect x="132" y="280" width="296" height="5" rx="2.5" fill="#5E97BF" opacity=".6" />
                <rect x="90" y="132" width="380" height="140" rx="28" fill="#A9D3EF" />
                <rect x="108" y="146" width="344" height="10" rx="5" fill="#fff" opacity=".4" />
                <rect x="356" y="214" width="88" height="30" rx="8" fill="#fff" />
                <text x="400" y="235" textAnchor="middle" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="17" fill="#0B2236">
                  {"22°C"}
                </text>
                <circle className="blink" cx="122" cy="230" r="5" fill="#1F9D5B" />
                <g className="breathe" stroke="#0B7CC4" strokeWidth="7" strokeLinecap="round" fill="none">
                  <path d="M496 128 V284" />
                  <path d="M496 206 H540" />
                  <path d="M496 166 L528 140" />
                  <path d="M496 246 L528 272" />
                  <path d="M518 194 L528 206 L518 218" />
                  <path d="M509 148 L514 160 L524 158" />
                  <path d="M509 264 L514 252 L524 254" />
                  <path d="M496 150 L512 136" />
                  <path d="M496 262 L512 276" />
                </g>
                <g stroke="#A9D3EF" strokeWidth="9" strokeLinecap="round" fill="none">
                  <path className="flow" d="M196 318 c-16 18 -16 30 0 48 c16 18 16 30 0 48" />
                  <path className="flow" style={{ animationDelay : "-.35s" }} d="M252 318 c-16 18 -16 30 0 48 c16 18 16 30 0 48" />
                  <path className="flow" style={{ animationDelay : "-.7s" }} d="M308 318 c-16 18 -16 30 0 48 c16 18 16 30 0 48" />
                  <path className="flow" style={{ animationDelay : "-1.05s" }} d="M364 318 c-16 18 -16 30 0 48 c16 18 16 30 0 48" />
                </g>
              </svg>
              <div className="floaty" style={{ position : "absolute", left : "0", top : "60px", background : "#fff", borderRadius : "18px", padding : "12px 16px", display : "flex", alignItems : "center", gap : "12px", boxShadow : "0 20px 40px -20px rgba(11,34,54,.45)" }}>
                <span style={{ width : "40px", height : "40px", borderRadius : "12px", background : "#EAF4FB", display : "inline-flex", alignItems : "center", justifyContent : "center" }}>
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A6FB0" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 2v20M4.9 7l14.2 10M4.9 17L19.1 7M9 4l3 2 3-2M9 20l3-2 3 2" />
                  </svg>
                </span>
                <span>
                  <span style={{ display : "block", fontWeight : "800", fontSize : "17px" }}>
                    {"22°C"}
                  </span>
                  <span style={{ display : "block", fontSize : "13px", color : "#4A5F73" }}>
                    {V.t?.chipCool}
                  </span>
                </span>
              </div>
              <div className="floaty2" style={{ position : "absolute", right : "0", bottom : "70px", width : "250px", background : "#fff", borderRadius : "20px", padding : "16px", boxShadow : "0 24px 48px -22px rgba(11,34,54,.5)" }}>
                <div style={{ display : "flex", alignItems : "center", gap : "12px" }}>
                  <span style={{ width : "40px", height : "40px", borderRadius : "12px", background : "#FFF1E4", display : "inline-flex", alignItems : "center", justifyContent : "center", flex : "none" }}>
                    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B85A0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h18v12H3z M3 10h18 M7 15h3" />
                    </svg>
                  </span>
                  <span style={{ flex : "1" }}>
                    <span style={{ display : "block", fontWeight : "800", fontSize : "15px" }}>
                      {V.t?.chipPayTitle}
                    </span>
                    <span style={{ display : "block", fontSize : "13px", color : "#4A5F73" }}>
                      {V.t?.chipPaySub}
                    </span>
                  </span>
                </div>
              </div>
              <div className="floaty" style={{ position : "absolute", left : "30px", bottom : "30px", background : "#0B2236", color : "#fff", borderRadius : "999px", padding : "10px 18px", display : "flex", alignItems : "center", gap : "8px", fontWeight : "700", fontSize : "14px", animationDelay : "-3s", boxShadow : "0 20px 40px -20px rgba(11,34,54,.7)" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F28A2E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M9 12l2 2 4-4" />
                </svg>
                {V.t?.chipWarranty}{"\n"}
              </div>
            </div>
          </div>
        </section>
        <section aria-label={V.t?.brandsLabel} style={{ padding : "8px 0 40px" }}>
          <p style={{ textAlign : "center", margin : "0 0 18px", fontSize : "13px", fontWeight : "700", letterSpacing : ".12em", textTransform : "uppercase", color : "#4A5F73" }}>
            {V.t?.brandsLabel}
          </p>
          <div style={{ overflow : "hidden", maskImage : "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)", WebkitMaskImage : "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)" }}>
            <div className="marq" style={{ display : "flex", gap : "64px", width : "max-content", padding : "6px 0" }}>
              {(V.brands ?? []).map((b: any, $i7: number) => (
                <React.Fragment key={$i7}>
                  <span style={{ fontSize : "24px", fontWeight : "800", letterSpacing : "-0.02em", color : "#5E768C", whiteSpace : "nowrap" }}>
                    {b}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
        <section id="promo" className="sec" style={{ padding : "48px 24px" }}>
          <div className="rv padm" style={css(`max-width: 1280px; margin: 0 auto; background: ${V.promo?.bg ?? ""}; border-radius: 40px; padding: 56px; display: flex; flex-wrap: wrap; gap: 40px; align-items: center; position: relative; overflow: hidden`)}>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="spin" style={{ position : "absolute", right : "-60px", bottom : "-80px", width : "360px", height : "360px", opacity : ".1", animationDuration : "50s" }} fill="none" stroke={V.promo?.accent} strokeWidth="1.2" strokeLinecap="round">
              <path d={V.promo?.icon} />
            </svg>
            <div style={{ flex : "1 1 520px", minWidth : "0", position : "relative" }}>
              <span style={css(`display: inline-flex; align-items: center; gap: 8px; background: ${V.promo?.accent ?? ""}; color: #fff; border-radius: 999px; padding: 7px 16px; font-size: 13px; font-weight: 800; letter-spacing: .04em`)}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d={V.promo?.icon} />
                </svg>
                {V.promo?.tag}
              </span>
              <h2 className="h2x" style={{ margin : "22px 0 14px", fontSize : "44px", lineHeight : "1.1", letterSpacing : "-0.03em", fontWeight : "800" }}>
                {V.promo?.title}{" "}
                <span style={{ color : "#B85A0E", whiteSpace : "nowrap", background : "linear-gradient(transparent 62%, rgba(242,138,46,.3) 62%)" }}>
                  {V.promo?.titleHl}
                </span>
              </h2>
              <p style={{ margin : "0 0 28px", fontSize : "17px", lineHeight : "1.6", color : "#3F566B", maxWidth : "600px" }}>
                {V.promo?.text}
              </p>
              <div style={{ display : "flex", flexWrap : "wrap", gap : "14px", alignItems : "center" }}>
                <a href="#booking" className="btn-o" onClick={V.pickOffer}>
                  {V.t?.promoCta}
                </a>
                <span style={{ display : "inline-flex", alignItems : "center", gap : "8px", fontWeight : "700", color : "#0B2236", background : "rgba(255,255,255,.7)", borderRadius : "999px", padding : "12px 18px" }}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <rect x="3" y="5" width="18" height="16" rx="3" />
                    <path d="M3 10h18M8 3v4M16 3v4" />
                  </svg>
                  {V.promo?.until}
                </span>
              </div>
            </div>
            {V.promo?.hasGifts ? (
              <>
                <div className="gift-card" style={{ flex : "1 1 400px", minWidth : "0", maxWidth : "470px", background : "#fff", borderRadius : "30px", padding : "28px", position : "relative", overflow : "hidden", boxShadow : "0 30px 60px -30px rgba(11,34,54,.45)" }}>
                  <div style={{ display : "flex", alignItems : "center", gap : "14px", paddingBottom : "18px", borderBottom : "1.5px dashed #E3ECF4" }}>
                    <span style={{ width : "48px", height : "48px", borderRadius : "14px", background : "#EAF4FB", color : "#0A6FB0", display : "inline-flex", alignItems : "center", justifyContent : "center", flex : "none" }}>
                      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3c3 4 5 6.5 5 9a5 5 0 0 1-10 0c0-2.5 2-5 5-9z M19 2v4 M17 4h4" />
                      </svg>
                    </span>
                    <span style={{ flex : "1", fontWeight : "800", fontSize : "16px", lineHeight : "1.35" }}>
                      {V.promo?.rc?.main}
                    </span>
                    <span style={{ fontWeight : "800", fontSize : "20px", whiteSpace : "nowrap" }}>
                      {V.promo?.rc?.price}
                    </span>
                  </div>
                  {(V.promo?.rc?.gifts ?? []).map((gf: any, $i9: number) => (
                    <React.Fragment key={$i9}>
                      <div style={{ display : "flex", alignItems : "center", gap : "14px", padding : "16px 0", borderBottom : "1.5px dashed #E3ECF4" }}>
                        <span className="gift-ic" style={{ width : "48px", height : "48px", borderRadius : "14px", background : "#F28A2E", color : "#0B2236", display : "inline-flex", alignItems : "center", justifyContent : "center", flex : "none" }}>
                          <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 8h18v4H3z M5 12v9h14v-9 M12 8v13 M12 8c-2-4-6-4-6-1.5S10 8 12 8z M12 8c2-4 6-4 6-1.5S14 8 12 8z" />
                          </svg>
                        </span>
                        <span style={{ flex : "1", fontWeight : "700", fontSize : "15px", lineHeight : "1.35" }}>
                          {gf?.n}
                        </span>
                        <span style={{ display : "flex", flexDirection : "column", alignItems : "flex-end", gap : "6px", flex : "none" }}>
                          <span className="xout" style={{ color : "#6B7F92", fontSize : "15px", fontWeight : "700", whiteSpace : "nowrap" }}>
                            {gf?.old}
                          </span>
                          <span className="gift-badge" style={{ background : "#B85A0E", color : "#fff", borderRadius : "999px", padding : "4px 12px", fontSize : "13px", fontWeight : "800", letterSpacing : ".06em" }}>
                            {V.promo?.rc?.free}
                          </span>
                        </span>
                      </div>
                    </React.Fragment>
                  ))}
                  <div style={{ display : "flex", alignItems : "flex-end", justifyContent : "space-between", gap : "12px", paddingTop : "18px", flexWrap : "wrap" }}>
                    <span>
                      <span style={{ display : "block", fontSize : "14px", fontWeight : "700", color : "#4A5F73" }}>
                        {V.promo?.rc?.payLabel}
                      </span>
                      <span style={{ display : "flex", alignItems : "baseline", gap : "14px", flexWrap : "wrap" }}>
                        <span className="xout" style={{ fontSize : "26px", fontWeight : "800", color : "#6B7F92", whiteSpace : "nowrap" }}>
                          {V.promo?.rc?.oldTotal}
                        </span>
                        <span style={{ fontSize : "44px", fontWeight : "800", letterSpacing : "-0.03em", lineHeight : "1.1", color : "#0B2236", whiteSpace : "nowrap" }}>
                          {V.promo?.rc?.price}
                        </span>
                      </span>
                    </span>
                    <span style={{ background : "#E8F5EE", color : "#1F7A4D", borderRadius : "14px", padding : "10px 14px", fontWeight : "800", fontSize : "14px" }}>
                      {V.promo?.rc?.save}
                    </span>
                  </div>
                </div>
              </>
            ) : null}
            {V.promo?.noGifts ? (
              <>
                <div style={{ flex : "0 1 360px", textAlign : "center", position : "relative" }}>
                  <div className="breathe promo-pct" style={css(`font-family: 'Playfair Display', serif; font-weight: 900; font-size: ${V.promo?.size ?? ""}; line-height: 1; letter-spacing: -0.04em; color: ${V.promo?.accent ?? ""}`)}>
                    {V.promo?.pct}
                  </div>
                  <div style={{ fontWeight : "700", color : "#3F566B", marginTop : "6px" }}>
                    {V.promo?.note}
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </section>
        <section id="works" className="sec" style={{ padding : "72px 24px" }}>
          <div style={{ maxWidth : "1280px", margin : "0 auto" }}>
            <div className="rv" style={{ display : "flex", flexWrap : "wrap", gap : "24px", alignItems : "flex-end", justifyContent : "space-between", marginBottom : "36px" }}>
              <div style={{ maxWidth : "720px" }}>
                <div style={{ fontSize : "14px", fontWeight : "800", letterSpacing : ".12em", textTransform : "uppercase", color : "#B85A0E", marginBottom : "12px" }}>
                  {V.t?.worksEyebrow}
                </div>
                <h2 className="h2x" style={{ margin : "0 0 14px", fontSize : "48px", lineHeight : "1.1", letterSpacing : "-0.03em", fontWeight : "800" }}>
                  {V.t?.worksTitle}
                </h2>
                <p style={{ margin : "0", fontSize : "17px", lineHeight : "1.6", color : "#4A5F73" }}>
                  {V.t?.worksSub}
                </p>
              </div>
              <a href={P("/works/")} className="btn-w">
                {V.t?.worksAll}{" "}
                <span aria-hidden="true">
                  {"→"}
                </span>
              </a>
            </div>
            <div className="rv" style={{ background : "#0B2236", color : "#fff", borderRadius : "36px", padding : "44px", display : "flex", flexWrap : "wrap", gap : "44px", alignItems : "center", position : "relative", overflow : "hidden" }}>
              <div aria-hidden="true" className="blob" style={{ position : "absolute", left : "-160px", bottom : "-220px", width : "560px", height : "560px", borderRadius : "50%", background : "radial-gradient(circle, rgba(11,124,196,.5), rgba(11,124,196,0) 70%)" }} />
              <div style={{ flex : "1 1 380px", minWidth : "0", position : "relative" }}>
                <span style={{ display : "inline-flex", alignItems : "center", gap : "8px", background : "#F28A2E", color : "#0B2236", borderRadius : "999px", padding : "6px 14px", fontSize : "13px", fontWeight : "800" }}>
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  {V.t?.featTag}
                </span>
                <div className="h2x" style={{ fontSize : "40px", fontWeight : "800", letterSpacing : "-0.02em", lineHeight : "1.15", margin : "18px 0 14px" }}>
                  {V.t?.featT}
                </div>
                <p style={{ margin : "0 0 28px", color : "#C2D3E2", fontSize : "17px", lineHeight : "1.6", maxWidth : "520px" }}>
                  {V.t?.featS}
                </p>
                <div style={{ display : "flex", flexWrap : "wrap", gap : "12px" }}>
                  <a href={P("/works/")} className="btn-o">
                    {V.t?.featCta}{" "}
                    <span aria-hidden="true">
                      {"→"}
                    </span>
                  </a>
                  <a href="#booking" onClick={V.pickOffer} className="btn-w btn-ghost">
                    {V.t?.promoCta}
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
        <section className="sec" style={{ padding : "72px 24px" }}>
          <div style={{ maxWidth : "1280px", margin : "0 auto" }}>
            <div className="rv" style={{ maxWidth : "720px", marginBottom : "40px" }}>
              <div style={{ fontSize : "14px", fontWeight : "800", letterSpacing : ".12em", textTransform : "uppercase", color : "#B85A0E", marginBottom : "12px" }}>
                {V.t?.audEyebrow}
              </div>
              <h2 className="h2x" style={{ margin : "0", fontSize : "48px", lineHeight : "1.1", letterSpacing : "-0.03em", fontWeight : "800" }}>
                {V.t?.audTitle}
              </h2>
            </div>
            <div style={{ display : "grid", gridTemplateColumns : "repeat(auto-fit, minmax(320px, 1fr))", gap : "24px" }}>
              <a href={P("/services/")} className="lift rv" style={{ display : "block", textDecoration : "none", color : "#0B2236", background : "#fff", border : "1px solid #E1ECF5", borderRadius : "32px", padding : "40px", position : "relative", overflow : "hidden" }}>
                <div aria-hidden="true" style={{ position : "absolute", right : "-40px", top : "-40px", width : "220px", height : "220px", borderRadius : "50%", background : "#EAF4FB" }} />
                <div style={{ position : "relative" }}>
                  <span style={{ width : "64px", height : "64px", borderRadius : "20px", background : "#0A6FB0", display : "inline-flex", alignItems : "center", justifyContent : "center" }}>
                    <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 11l9-7 9 7" />
                      <path d="M5 10v10h14V10" />
                      <path d="M10 20v-6h4v6" />
                    </svg>
                  </span>
                  <h3 style={{ margin : "28px 0 12px", fontSize : "30px", letterSpacing : "-0.02em", fontWeight : "800" }}>
                    {V.t?.privTitle}
                  </h3>
                  <p style={{ margin : "0 0 24px", fontSize : "17px", lineHeight : "1.6", color : "#4A5F73" }}>
                    {V.t?.privText}
                  </p>
                  {(V.t?.privList ?? []).map((li: any, $i9: number) => (
                    <React.Fragment key={$i9}>
                      <div style={{ display : "flex", gap : "12px", alignItems : "center", padding : "8px 0", fontWeight : "600" }}>
                        <span style={{ width : "24px", height : "24px", borderRadius : "50%", background : "#EAF4FB", display : "inline-flex", alignItems : "center", justifyContent : "center", flex : "none" }}>
                          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0A6FB0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5 9-10" />
                          </svg>
                        </span>
                        {li}
                      </div>
                    </React.Fragment>
                  ))}
                  <div style={{ marginTop : "28px", display : "inline-flex", alignItems : "center", gap : "10px", fontWeight : "800", color : "#0A6FB0" }}>
                    {V.t?.privLink}{" "}
                    <span aria-hidden="true">
                      {"→"}
                    </span>
                  </div>
                </div>
              </a>
              <a href={P("/business/")} className="lift rv" style={{ display : "block", textDecoration : "none", color : "#fff", background : "#0B2236", borderRadius : "32px", padding : "40px", position : "relative", overflow : "hidden" }}>
                <svg aria-hidden="true" viewBox="0 0 200 200" className="spin" style={{ position : "absolute", right : "-50px", top : "-50px", width : "240px", height : "240px", opacity : ".14", animationDuration : "40s" }}>
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#F28A2E" strokeWidth="30" strokeDasharray="24 19" />
                </svg>
                <div style={{ position : "relative" }}>
                  <span style={{ width : "64px", height : "64px", borderRadius : "20px", background : "#F28A2E", display : "inline-flex", alignItems : "center", justifyContent : "center" }}>
                    <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0B2236" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 21V5l8-2v18" />
                      <path d="M12 9h8v12" />
                      <path d="M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2" />
                      <path d="M2 21h20" />
                    </svg>
                  </span>
                  <h3 style={{ margin : "28px 0 12px", fontSize : "30px", letterSpacing : "-0.02em", fontWeight : "800" }}>
                    {V.t?.bizTitle}
                  </h3>
                  <p style={{ margin : "0 0 24px", fontSize : "17px", lineHeight : "1.6", color : "#C2D3E2" }}>
                    {V.t?.bizText}
                  </p>
                  {(V.t?.bizList ?? []).map((li: any, $i9: number) => (
                    <React.Fragment key={$i9}>
                      <div style={{ display : "flex", gap : "12px", alignItems : "center", padding : "8px 0", fontWeight : "600" }}>
                        <span style={{ width : "24px", height : "24px", borderRadius : "50%", background : "rgba(242,138,46,.18)", display : "inline-flex", alignItems : "center", justifyContent : "center", flex : "none" }}>
                          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F28A2E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5 9-10" />
                          </svg>
                        </span>
                        {li}
                      </div>
                    </React.Fragment>
                  ))}
                  <div style={{ marginTop : "28px", display : "inline-flex", alignItems : "center", gap : "10px", fontWeight : "800", color : "#F6A75F" }}>
                    {V.t?.bizLink}{" "}
                    <span aria-hidden="true">
                      {"→"}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section id="services" className="sec" style={{ padding : "72px 24px" }}>
          <div style={{ maxWidth : "1280px", margin : "0 auto" }}>
            <div className="rv" style={{ display : "flex", flexWrap : "wrap", gap : "24px", alignItems : "flex-end", justifyContent : "space-between", marginBottom : "40px" }}>
              <div style={{ maxWidth : "720px" }}>
                <div style={{ fontSize : "14px", fontWeight : "800", letterSpacing : ".12em", textTransform : "uppercase", color : "#B85A0E", marginBottom : "12px" }}>
                  {V.t?.svcEyebrow}
                </div>
                <h2 className="h2x" style={{ margin : "0 0 14px", fontSize : "48px", lineHeight : "1.1", letterSpacing : "-0.03em", fontWeight : "800" }}>
                  {V.t?.svcTitle}
                </h2>
                <p style={{ margin : "0", fontSize : "17px", lineHeight : "1.6", color : "#4A5F73" }}>
                  {V.t?.svcSub}
                </p>
              </div>
              <a href={P("/services/")} className="btn-w">
                {V.t?.svcAll}{" "}
                <span aria-hidden="true">
                  {"→"}
                </span>
              </a>
            </div>
            <div style={{ display : "grid", gridTemplateColumns : "repeat(auto-fit, minmax(270px, 1fr))", gap : "20px" }}>
              {(V.svcs ?? []).map((s: any, $i7: number) => (
                <React.Fragment key={$i7}>
                  <a href={P("/contacts/")} className="svc lift rv" style={{ display : "flex", flexDirection : "column", textDecoration : "none", color : "#0B2236", background : "#fff", border : "1px solid #E1ECF5", borderRadius : "26px", padding : "28px" }}>
                    <span className="svc-ic" style={{ width : "58px", height : "58px", borderRadius : "18px", background : "#EAF4FB", color : "#0A6FB0", display : "inline-flex", alignItems : "center", justifyContent : "center" }}>
                      <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d={s?.icon} />
                      </svg>
                    </span>
                    <span style={{ display : "flex", alignItems : "center", gap : "8px", flexWrap : "wrap", margin : "22px 0 8px" }}>
                      <span style={{ fontSize : "20px", fontWeight : "800", letterSpacing : "-0.01em" }}>
                        {s?.title}
                      </span>
                      {s?.promo ? (
                        <>
                          <span className="gift-badge" style={{ background : "#F28A2E", color : "#0B2236", borderRadius : "999px", padding : "4px 10px", fontSize : "12px", fontWeight : "800" }}>
                            {V.t?.svcPromo}
                          </span>
                        </>
                      ) : null}
                    </span>
                    <span style={{ fontSize : "15px", lineHeight : "1.55", color : "#4A5F73", flex : "1" }}>
                      {s?.desc}
                    </span>
                    <span style={{ display : "flex", alignItems : "center", justifyContent : "space-between", borderTop : "1px dashed #D5E2EE", marginTop : "22px", paddingTop : "18px" }}>
                      <span>
                        <span style={{ display : "block", fontSize : "12px", color : "#4A5F73", fontWeight : "600" }}>
                          {s?.from}
                        </span>
                        <span style={{ fontSize : "22px", fontWeight : "800" }}>
                          {s?.price}
                        </span>
                        {" "}
                        <span style={{ fontSize : "15px", fontWeight : "700", color : "#4A5F73" }}>
                          {s?.unit}
                        </span>
                      </span>
                      <span className="svc-go" aria-hidden="true" style={{ width : "44px", height : "44px", borderRadius : "50%", background : "#F2F7FB", color : "#0B2236", display : "inline-flex", alignItems : "center", justifyContent : "center" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </span>
                    </span>
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
        <section id="ba" className="sec" style={{ padding : "72px 24px", background : "#fff" }}>
          <div style={{ maxWidth : "1280px", margin : "0 auto", display : "flex", flexWrap : "wrap", gap : "56px", alignItems : "center" }}>
            <div className="rv" style={{ flex : "1 1 400px", minWidth : "0" }}>
              <div style={{ fontSize : "14px", fontWeight : "800", letterSpacing : ".12em", textTransform : "uppercase", color : "#B85A0E", marginBottom : "12px" }}>
                {V.t?.baEyebrow}
              </div>
              <h2 className="h2x" style={{ margin : "0 0 14px", fontSize : "48px", lineHeight : "1.1", letterSpacing : "-0.03em", fontWeight : "800" }}>
                {V.t?.baTitle}
              </h2>
              <p style={{ margin : "0 0 30px", fontSize : "17px", lineHeight : "1.6", color : "#4A5F73" }}>
                {V.t?.baSub}
              </p>
              {(V.t?.baList ?? []).map((bl: any, $i7: number) => (
                <React.Fragment key={$i7}>
                  <div style={{ display : "flex", gap : "16px", alignItems : "center", padding : "14px 0", borderTop : "1px solid #E8F0F6" }}>
                    <span style={{ fontSize : "26px", fontWeight : "800", color : "#0A6FB0", minWidth : "92px" }}>
                      {bl?.n}
                    </span>
                    <span style={{ fontSize : "16px", fontWeight : "600", color : "#3F566B" }}>
                      {bl?.l}
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
              <div aria-hidden="true" style={css(`position: absolute; inset: 0; clip-path: inset(0 ${V.clipR ?? ""}% 0 0)`)}>
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
              <div aria-hidden="true" style={css(`position: absolute; top: 0; bottom: 0; left: ${V.pos ?? ""}%; width: 3px; margin-left: -1.5px; background: #fff; box-shadow: 0 0 0 1px rgba(11,34,54,.1)`)}>
                <span style={{ position : "absolute", top : "50%", left : "50%", width : "56px", height : "56px", margin : "-28px 0 0 -28px", borderRadius : "50%", background : "#fff", display : "flex", alignItems : "center", justifyContent : "center", boxShadow : "0 10px 30px -8px rgba(11,34,54,.6)" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0B2236" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
              <span aria-hidden="true" style={{ position : "absolute", left : "20px", top : "20px", background : "rgba(11,34,54,.78)", color : "#fff", borderRadius : "999px", padding : "8px 16px", fontWeight : "800", fontSize : "14px" }}>
                {V.t?.before}
              </span>
              <span aria-hidden="true" style={{ position : "absolute", right : "20px", top : "20px", background : "#fff", color : "#0A6FB0", borderRadius : "999px", padding : "8px 16px", fontWeight : "800", fontSize : "14px" }}>
                {V.t?.after}
              </span>
              <input type="range" min="0" max="100" value={V.pos} onChange={V.onPos} aria-label={V.t?.baAria} style={{ position : "absolute", inset : "0", width : "100%", height : "100%", margin : "0", opacity : "0", cursor : "ew-resize" }} />
            </div>
          </div>
        </section>
        <section id="calc" className="sec" style={{ padding : "88px 24px" }}>
          <div style={{ maxWidth : "1280px", margin : "0 auto" }}>
            <div className="rv" style={{ maxWidth : "760px", marginBottom : "40px" }}>
              <div style={{ fontSize : "14px", fontWeight : "800", letterSpacing : ".12em", textTransform : "uppercase", color : "#B85A0E", marginBottom : "12px" }}>
                {V.t?.calcEyebrow}
              </div>
              <h2 className="h2x" style={{ margin : "0 0 14px", fontSize : "48px", lineHeight : "1.1", letterSpacing : "-0.03em", fontWeight : "800" }}>
                {V.t?.calcTitle}
              </h2>
              <p style={{ margin : "0", fontSize : "17px", lineHeight : "1.6", color : "#4A5F73" }}>
                {V.t?.calcSub}
              </p>
            </div>
            <div style={{ display : "flex", flexWrap : "wrap", gap : "24px" }}>
              <div className="rv" style={{ flex : "1 1 560px", minWidth : "0", background : "#fff", border : "1px solid #E1ECF5", borderRadius : "32px", padding : "40px", display : "flex", flexDirection : "column", gap : "34px" }}>
                <div>
                  <div style={{ display : "flex", justifyContent : "space-between", alignItems : "baseline", marginBottom : "18px" }}>
                    <label htmlFor="area" style={{ fontWeight : "800", fontSize : "17px" }}>
                      {V.t?.calcArea}
                    </label>
                    <span style={{ fontSize : "34px", fontWeight : "800", letterSpacing : "-0.02em", color : "#0A6FB0" }}>
                      {V.area}{" "}
                      <span style={{ fontSize : "18px" }}>
                        {V.t?.m2}
                      </span>
                    </span>
                  </div>
                  <input id="area" className="rng" type="range" min="10" max="120" step="1" value={V.area} onChange={V.onArea} style={css(`width: 100%; background: ${V.rngBg ?? ""}`)} />
                  <div style={{ display : "flex", justifyContent : "space-between", fontSize : "13px", color : "#4A5F73", marginTop : "10px" }}>
                    <span>
                      {"10 "}{V.t?.m2}
                    </span>
                    <span>
                      {"60 "}{V.t?.m2}
                    </span>
                    <span>
                      {"120 "}{V.t?.m2}
                    </span>
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight : "800", fontSize : "17px", marginBottom : "14px" }}>
                    {V.t?.calcCeil}
                  </div>
                  <div style={{ display : "flex", flexWrap : "wrap", gap : "10px" }} role="group" aria-label={V.t?.calcCeil}>
                    {(V.ceils ?? []).map((c: any, $i10: number) => (
                      <React.Fragment key={$i10}>
                        <button type="button" className="chip" onClick={c?.pick} aria-pressed={c?.on} style={css(c?.style)}>
                          {c?.label}
                        </button>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div style={{ display : "flex", flexWrap : "wrap", gap : "28px" }}>
                  <div style={{ flex : "1 1 220px" }}>
                    <div style={{ fontWeight : "800", fontSize : "17px", marginBottom : "14px" }}>
                      {V.t?.calcSun}
                    </div>
                    <button type="button" onClick={V.toggleSun} aria-pressed={V.sunny} style={{ display : "inline-flex", alignItems : "center", gap : "14px", background : "transparent", border : "0", padding : "0", cursor : "pointer", fontFamily : "inherit", fontSize : "16px", fontWeight : "700", color : "#0B2236" }}>
                      <span style={css(V.sunTrack)}>
                        <span style={css(V.sunKnob)} />
                      </span>
                      {V.sunLabel}{"\n"}
                    </button>
                  </div>
                  <div style={{ flex : "1 1 220px" }}>
                    <div style={{ fontWeight : "800", fontSize : "17px", marginBottom : "14px" }}>
                      {V.t?.calcPeople}
                    </div>
                    <div style={{ display : "inline-flex", alignItems : "center", gap : "6px", background : "#F2F7FB", borderRadius : "999px", padding : "5px" }}>
                      <button type="button" aria-label="−1" onClick={V.peopleDown} style={{ width : "44px", height : "44px", borderRadius : "50%", border : "0", background : "#fff", fontSize : "22px", fontWeight : "700", cursor : "pointer", color : "#0B2236" }}>
                        {"−"}
                      </button>
                      <span style={{ minWidth : "44px", textAlign : "center", fontSize : "20px", fontWeight : "800" }}>
                        {V.people}
                      </span>
                      <button type="button" aria-label="+1" onClick={V.peopleUp} style={{ width : "44px", height : "44px", borderRadius : "50%", border : "0", background : "#fff", fontSize : "22px", fontWeight : "700", cursor : "pointer", color : "#0B2236" }}>
                        {"+"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rv" style={{ flex : "1 1 420px", minWidth : "0", background : "#0B2236", color : "#fff", borderRadius : "32px", padding : "40px", position : "relative", overflow : "hidden", display : "flex", flexDirection : "column" }}>
                <div aria-hidden="true" className="blob" style={{ position : "absolute", right : "-120px", top : "-120px", width : "360px", height : "360px", borderRadius : "50%", background : "radial-gradient(circle, rgba(11,124,196,.55), rgba(11,124,196,0) 70%)" }} />
                <div style={{ position : "relative", fontSize : "14px", fontWeight : "700", letterSpacing : ".1em", textTransform : "uppercase", color : "#9FC3E0" }}>
                  {V.t?.calcRes}
                </div>
                <div style={{ position : "relative", display : "flex", alignItems : "baseline", gap : "12px", marginTop : "12px" }}>
                  <span style={{ fontSize : "96px", fontWeight : "800", letterSpacing : "-0.05em", lineHeight : "1" }}>
                    {V.kw}
                  </span>
                  <span style={{ fontSize : "26px", fontWeight : "700", color : "#9FC3E0" }}>
                    {V.t?.kw}
                  </span>
                </div>
                <div style={{ position : "relative", display : "inline-flex", alignSelf : "flex-start", alignItems : "center", gap : "10px", background : "#F28A2E", color : "#0B2236", borderRadius : "999px", padding : "10px 18px", fontWeight : "800", fontSize : "18px", marginTop : "18px" }}>
                  {V.t?.calcModel}{": "}{V.btu}{" BTU"}
                </div>
                <div style={{ position : "relative", color : "#C2D3E2", marginTop : "14px", fontSize : "16px" }}>
                  {V.fit}
                </div>
                <div style={{ position : "relative", display : "grid", gridTemplateColumns : "repeat(7, minmax(0, 1fr))", gap : "6px", marginTop : "30px" }} aria-hidden="true">
                  {(V.scale ?? []).map((sg: any, $i9: number) => (
                    <React.Fragment key={$i9}>
                      <div>
                        <div style={css(sg?.bar)} />
                        <div style={{ fontSize : "11px", color : "#9FC3E0", marginTop : "8px", textAlign : "center" }}>
                          {sg?.k}
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
                <p style={{ position : "relative", fontSize : "14px", lineHeight : "1.55", color : "#9FC3E0", margin : "26px 0 26px" }}>
                  {V.t?.calcNote}
                </p>
                <a href="#booking" className="btn-o" style={{ position : "relative", marginTop : "auto", alignSelf : "flex-start" }}>
                  {V.t?.calcCta}
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="problems" className="sec" style={{ padding : "88px 24px" }}>
          <div style={{ maxWidth : "1280px", margin : "0 auto", display : "flex", flexWrap : "wrap", gap : "48px", alignItems : "flex-start" }}>
            <div className="rv" style={{ flex : "1 1 360px", minWidth : "0" }}>
              <div style={{ fontSize : "14px", fontWeight : "800", letterSpacing : ".12em", textTransform : "uppercase", color : "#B85A0E", marginBottom : "12px" }}>
                {V.t?.faqEyebrow}
              </div>
              <h2 className="h2x" style={{ margin : "0 0 14px", fontSize : "44px", lineHeight : "1.1", letterSpacing : "-0.03em", fontWeight : "800" }}>
                {V.t?.faqTitle}
              </h2>
              <p style={{ margin : "0 0 28px", fontSize : "17px", lineHeight : "1.6", color : "#4A5F73" }}>
                {V.t?.faqSub}
              </p>
              <div style={{ background : "#fff", border : "1px solid #E1ECF5", borderRadius : "26px", padding : "26px" }}>
                <div style={{ fontWeight : "800", fontSize : "18px", marginBottom : "8px" }}>
                  {V.t?.faqHelpTitle}
                </div>
                <p style={{ margin : "0 0 18px", color : "#4A5F73", lineHeight : "1.55" }}>
                  {V.t?.faqHelpText}
                </p>
                <div style={{ display : "flex", flexWrap : "wrap", gap : "10px" }}>
                  <a href="#booking" className="btn-o" style={{ padding : "14px 22px" }}>
                    {V.t?.cta1}
                  </a>
                  <a href="tel:+37441559910" className="btn-w" style={{ padding : "14px 22px" }}>
                    {V.t?.cta2}
                  </a>
                </div>
              </div>
              <a href={P("/problems/")} style={{ display : "inline-block", marginTop : "22px", fontWeight : "800", textDecoration : "none" }}>
                {V.t?.faqAll}{" →"}
              </a>
            </div>
            <div style={{ flex : "2 1 600px", minWidth : "0", display : "flex", flexDirection : "column", gap : "12px" }}>
              {(V.faq ?? []).map((f: any, $i7: number) => (
                <React.Fragment key={$i7}>
                  <div className="rv" style={css(`background: #fff; border: 1px solid ${f?.border ?? ""}; border-radius: 22px; overflow: hidden; transition: border-color .3s`)}>
                    <button type="button" className="faq-q" onClick={f?.toggle} aria-expanded={f?.open} style={{ width : "100%", display : "flex", alignItems : "center", gap : "16px", padding : "20px 22px", background : "#fff", border : "0", cursor : "pointer", textAlign : "left", fontFamily : "inherit", color : "#0B2236" }}>
                      <span style={css(`width: 46px; height: 46px; border-radius: 14px; background: ${f?.icBg ?? ""}; color: ${f?.icFg ?? ""}; display: inline-flex; align-items: center; justify-content: center; flex: none; transition: background .3s`)}>
                        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d={f?.ic} />
                        </svg>
                      </span>
                      <span style={{ flex : "1", fontSize : "18px", fontWeight : "800" }}>
                        {f?.q}
                      </span>
                      <svg className="chev" aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A6FB0" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={css(`transform: ${f?.rot ?? ""}`)}>
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    {f?.open ? (
                      <>
                        <div className="bub" style={{ padding : "0 22px 22px 84px", display : "grid", gridTemplateColumns : "repeat(auto-fit, minmax(220px, 1fr))", gap : "14px" }}>
                          <div style={{ background : "#F4F8FC", borderRadius : "16px", padding : "16px 18px" }}>
                            <div style={{ fontSize : "12px", fontWeight : "800", letterSpacing : ".08em", textTransform : "uppercase", color : "#0A6FB0", marginBottom : "8px" }}>
                              {V.t?.causes}
                            </div>
                            <div style={{ lineHeight : "1.55", color : "#3F566B" }}>
                              {f?.c}
                            </div>
                          </div>
                          <div style={{ background : "#FFF4EA", borderRadius : "16px", padding : "16px 18px" }}>
                            <div style={{ fontSize : "12px", fontWeight : "800", letterSpacing : ".08em", textTransform : "uppercase", color : "#B85A0E", marginBottom : "8px" }}>
                              {V.t?.diy}
                            </div>
                            <div style={{ lineHeight : "1.55", color : "#3F566B" }}>
                              {f?.d}
                            </div>
                          </div>
                          <a href="#booking" style={{ gridColumn : "1 / -1", fontWeight : "800", textDecoration : "none" }}>
                            {V.t?.callMaster}{" →"}
                          </a>
                        </div>
                      </>
                    ) : null}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
        <section className="sec" style={{ padding : "88px 24px" }}>
          <div style={{ maxWidth : "1280px", margin : "0 auto" }}>
            <div className="rv" style={{ textAlign : "center", maxWidth : "720px", margin : "0 auto 56px" }}>
              <div style={{ fontSize : "14px", fontWeight : "800", letterSpacing : ".12em", textTransform : "uppercase", color : "#B85A0E", marginBottom : "12px" }}>
                {V.t?.procEyebrow}
              </div>
              <h2 className="h2x" style={{ margin : "0", fontSize : "48px", lineHeight : "1.1", letterSpacing : "-0.03em", fontWeight : "800" }}>
                {V.t?.procTitle}
              </h2>
            </div>
            <div style={{ position : "relative" }}>
              <svg aria-hidden="true" viewBox="0 0 1000 10" preserveAspectRatio="none" style={{ position : "absolute", left : "12%", right : "12%", top : "36px", width : "76%", height : "10px" }}>
                <path className="dash" d="M0 5 H1000" stroke="#9FC3E0" strokeWidth="3" fill="none" />
              </svg>
              <div style={{ display : "grid", gridTemplateColumns : "repeat(auto-fit, minmax(230px, 1fr))", gap : "24px", position : "relative" }}>
                {(V.t?.steps ?? []).map((p: any, $i8: number) => (
                  <React.Fragment key={$i8}>
                    <div className="rv" style={{ textAlign : "center", padding : "0 12px" }}>
                      <div style={{ width : "76px", height : "76px", margin : "0 auto 22px", borderRadius : "50%", background : "#fff", border : "2px solid #0A6FB0", display : "flex", alignItems : "center", justifyContent : "center", fontSize : "26px", fontWeight : "800", color : "#0A6FB0", boxShadow : "0 0 0 10px #F4F8FC" }}>
                        {p?.n}
                      </div>
                      <div style={{ fontSize : "21px", fontWeight : "800", marginBottom : "8px" }}>
                        {p?.t}
                      </div>
                      <div style={{ fontSize : "15px", lineHeight : "1.55", color : "#4A5F73" }}>
                        {p?.d}
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="sec" style={{ padding : "72px 24px", background : "#fff" }}>
          <div style={{ maxWidth : "1280px", margin : "0 auto" }}>
            <div className="rv" style={{ display : "flex", flexWrap : "wrap", gap : "24px", alignItems : "flex-end", justifyContent : "space-between", marginBottom : "40px" }}>
              <div style={{ maxWidth : "640px" }}>
                <div style={{ fontSize : "14px", fontWeight : "800", letterSpacing : ".12em", textTransform : "uppercase", color : "#B85A0E", marginBottom : "12px" }}>
                  {V.t?.revEyebrow}
                </div>
                <h2 className="h2x" style={{ margin : "0", fontSize : "48px", lineHeight : "1.1", letterSpacing : "-0.03em", fontWeight : "800" }}>
                  {V.t?.revTitle}
                </h2>
              </div>
              <div style={{ display : "flex", alignItems : "center", gap : "16px", background : "#F4F8FC", borderRadius : "22px", padding : "16px 22px", flexWrap : "wrap" }}>
                <span style={{ display : "flex", flexDirection : "column" }}>
                  <span style={{ fontWeight : "800", fontSize : "17px" }}>
                    {V.t?.revBoxTitle}
                  </span>
                  <span style={{ fontSize : "14px", color : "#4A5F73", marginTop : "4px" }}>
                    {V.t?.revBoxSub}
                  </span>
                </span>
                <a href="#feedback" onClick={V.openReview} className="btn-w" style={{ padding : "12px 18px", fontSize : "14px" }}>
                  {V.t?.revCta}
                </a>
              </div>
            </div>
            {V.revMarquee ? (
              <>
                <div className="revwrap" style={{ overflow : "hidden", margin : "0 -24px", padding : "12px 0", maskImage : "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)", WebkitMaskImage : "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)" }}>
                  <div className="revmarq" style={css(`display: flex; gap: 20px; width: max-content; animation-duration: ${V.revDur ?? ""}`)}>
                    {(V.revLoop ?? []).map((r: any, $i10: number) => (
                      <React.Fragment key={$i10}>
                        <figure className="revcard" style={{ flex : "0 0 380px", width : "380px", margin : "0", background : "#F4F8FC", borderRadius : "24px", padding : "22px 24px", display : "flex", flexDirection : "column", border : "1px solid #E1ECF5" }}>
                          <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="#A9D3EF">
                            <path d="M4 18v-5c0-4 2-7 6-8l1 2c-2 1-3 3-3 5h3v6H4zm9 0v-5c0-4 2-7 6-8l1 2c-2 1-3 3-3 5h3v6h-7z" />
                          </svg>
                          <blockquote style={{ margin : "10px 0 16px", fontSize : "16px", lineHeight : "1.5", flex : "1" }}>
                            {r?.q}
                          </blockquote>
                          <figcaption style={{ display : "flex", alignItems : "center", gap : "12px" }}>
                            <span style={css(`width: 46px; height: 46px; border-radius: 50%; background: ${r?.c ?? ""}; color: #fff; display: inline-flex; align-items: center; justify-content: center; font-weight: 800; flex: none`)}>
                              {r?.i}
                            </span>
                            <span style={{ flex : "1", minWidth : "0" }}>
                              <span style={{ display : "block", fontWeight : "800" }}>
                                {r?.n}
                              </span>
                              <span style={{ display : "block", fontSize : "14px", color : "#4A5F73" }}>
                                {r?.w}
                              </span>
                            </span>
                            <span style={{ fontSize : "12px", fontWeight : "800", color : "#0A6FB0", background : "#fff", borderRadius : "999px", padding : "6px 12px" }}>
                              {r?.tag}
                            </span>
                          </figcaption>
                        </figure>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </>
            ) : null}
            {V.revStatic ? (
              <>
                <div style={{ display : "grid", gridTemplateColumns : "repeat(auto-fit, minmax(300px, 1fr))", gap : "20px" }}>
                  {(V.t?.reviews ?? []).map((r: any, $i9: number) => (
                    <React.Fragment key={$i9}>
                      <figure className="revcard" style={{ margin : "0", background : "#F4F8FC", borderRadius : "24px", padding : "22px 24px", display : "flex", flexDirection : "column", border : "1px solid #E1ECF5" }}>
                        <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="#A9D3EF">
                          <path d="M4 18v-5c0-4 2-7 6-8l1 2c-2 1-3 3-3 5h3v6H4zm9 0v-5c0-4 2-7 6-8l1 2c-2 1-3 3-3 5h3v6h-7z" />
                        </svg>
                        <blockquote style={{ margin : "10px 0 16px", fontSize : "16px", lineHeight : "1.5", flex : "1" }}>
                          {r?.q}
                        </blockquote>
                        <figcaption style={{ display : "flex", alignItems : "center", gap : "12px" }}>
                          <span style={css(`width: 46px; height: 46px; border-radius: 50%; background: ${r?.c ?? ""}; color: #fff; display: inline-flex; align-items: center; justify-content: center; font-weight: 800; flex: none`)}>
                            {r?.i}
                          </span>
                          <span style={{ flex : "1", minWidth : "0" }}>
                            <span style={{ display : "block", fontWeight : "800" }}>
                              {r?.n}
                            </span>
                            <span style={{ display : "block", fontSize : "14px", color : "#4A5F73" }}>
                              {r?.w}
                            </span>
                          </span>
                          <span style={{ fontSize : "12px", fontWeight : "800", color : "#0A6FB0", background : "#fff", borderRadius : "999px", padding : "6px 12px" }}>
                            {r?.tag}
                          </span>
                        </figcaption>
                      </figure>
                    </React.Fragment>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </section>
        <section id="booking" className="sec" style={{ padding : "88px 24px" }}>
          <div style={{ maxWidth : "1280px", margin : "0 auto", display : "flex", flexWrap : "wrap", gap : "48px", alignItems : "flex-start" }}>
            <div className="rv" style={{ flex : "1 1 380px", minWidth : "0" }}>
              <div style={{ fontSize : "14px", fontWeight : "800", letterSpacing : ".12em", textTransform : "uppercase", color : "#B85A0E", marginBottom : "12px" }}>
                {V.t?.bookEyebrow}
              </div>
              <h2 className="h2x" style={{ margin : "0 0 14px", fontSize : "48px", lineHeight : "1.1", letterSpacing : "-0.03em", fontWeight : "800" }}>
                {V.t?.bookTitle}
              </h2>
              <p style={{ margin : "0 0 30px", fontSize : "17px", lineHeight : "1.6", color : "#4A5F73" }}>
                {V.t?.bookSub}
              </p>
              {(V.t?.perks ?? []).map((pk: any, $i7: number) => (
                <React.Fragment key={$i7}>
                  <div style={{ display : "flex", gap : "14px", alignItems : "center", padding : "12px 0" }}>
                    <span style={{ width : "40px", height : "40px", borderRadius : "12px", background : "#FFF1E4", display : "inline-flex", alignItems : "center", justifyContent : "center", flex : "none" }}>
                      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B85A0E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5 9-10" />
                      </svg>
                    </span>
                    <span style={{ fontWeight : "700", fontSize : "17px" }}>
                      {pk}
                    </span>
                  </div>
                </React.Fragment>
              ))}
              <div style={{ marginTop : "26px" }}><PhonesCard lang={V.lang} /></div>
            </div>
            <div className="rv" style={{ flex : "1.3 1 560px", minWidth : "0" }}>
              <BookingForm lang={V.lang} offer={V.offerPicked} />
            </div>
          </div>
        </section>
        <Footer lang={V.lang} />
        <a href="tel:+37441559910" className="fab" aria-label={V.t?.mCall} style={{ position : "fixed", right : "28px", bottom : "28px", zIndex : "70", width : "64px", height : "64px", borderRadius : "50%", background : "#F28A2E", alignItems : "center", justifyContent : "center", boxShadow : "0 18px 36px -12px rgba(242,138,46,.8)" }}>
          <span className="ping" aria-hidden="true" style={{ position : "absolute", inset : "0", borderRadius : "50%", background : "#F28A2E", opacity : ".5" }} />
          <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0B2236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position : "relative" }}>
            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
          </svg>
        </a>
        <nav className="mbar" aria-label={V.t?.quick} style={{ position : "fixed", left : "12px", right : "12px", bottom : "12px", zIndex : "70", background : "rgba(11,34,54,.94)", backdropFilter : "blur(14px)", WebkitBackdropFilter : "blur(14px)", borderRadius : "22px", padding : "8px", gap : "8px", boxShadow : "0 20px 40px -16px rgba(11,34,54,.7)" }}>
          <a href="tel:+37441559910" style={{ flex : "1", display : "flex", flexDirection : "column", alignItems : "center", gap : "4px", padding : "8px", borderRadius : "16px", color : "#fff", textDecoration : "none", fontSize : "12px", fontWeight : "700" }}>
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
            </svg>
            {V.t?.mCall}
          </a>
          <a href="https://wa.me/37491105887" style={{ flex : "1", display : "flex", flexDirection : "column", alignItems : "center", gap : "4px", padding : "8px", borderRadius : "16px", color : "#6EE7A0", textDecoration : "none", fontSize : "12px", fontWeight : "700" }}>
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21l1.7-5A8.5 8.5 0 1 1 8 19.6L3 21z" />
            </svg>
            {"WhatsApp"}
          </a>
          <a href="#booking" style={{ flex : "1.4", display : "flex", alignItems : "center", justifyContent : "center", borderRadius : "16px", background : "#F28A2E", color : "#0B2236", textDecoration : "none", fontSize : "15px", fontWeight : "800" }}>
            {V.t?.mReq}
          </a>
        </nav>
      </div>
      </>
    );
  }
}
