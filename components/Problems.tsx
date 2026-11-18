// @ts-nocheck
'use client';
// Problems — generated from the Air Control design. Edit the texts and layout here.
import React from 'react';
import { DCLogic, css, muteVideo } from '../lib/dc';
import { tr, path } from '../lib/i18n';
import { RU } from '../lib/ru/Problems';
import Header from './Header';
import Footer from './Footer';

const STYLES = "body{margin:0}\na{color:#0A6FB0}a:hover{color:#08568A}\n*,*::before,*::after{box-sizing:border-box}\n:focus-visible{outline:3px solid #F28A2E;outline-offset:3px}\n.hd-nav a{position:relative;text-decoration:none;color:#0B2236;padding:10px 4px;font-weight:600;font-size:15px;transition:color .2s;white-space:nowrap}\n.hd-nav a::after{content:\"\";position:absolute;left:4px;right:4px;bottom:3px;height:2px;border-radius:2px;background:#F28A2E;transform:scaleX(0);transform-origin:left;transition:transform .35s cubic-bezier(.2,.8,.2,1)}\n.hd-nav a:hover{color:#0A6FB0}.hd-nav a:hover::after,.hd-nav a.on::after{transform:scaleX(1)}\n.hd-burger{display:none !important}.hd-phone{display:none !important}\n@media (max-width:1200px){.hd-nav{display:none !important}.hd-burger{display:inline-flex !important}.hd-phone{display:inline-flex !important}}\n@media (max-width:760px){.hd-phone{display:none !important}.hd-word{font-size:22px !important}.hd-sub{font-size:7px !important;letter-spacing:.05em !important}.hd-mark{width:42px;height:42px}.hd-urgent{display:none !important}.hd-top-left{display:none !important}.hd-cta{display:none !important}.hd-phone-txt{display:none}.h1x{font-size:40px !important}.h2x{font-size:32px !important}.ans{padding-left:22px !important}}\n.ft-link{text-decoration:none;transition:color .2s}.ft-link:hover{color:#fff !important}\n.btn-o,.btn-w,.btn-wa{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-weight:800;text-decoration:none;border:0;border-radius:999px;padding:17px 28px;font-size:16px;cursor:pointer;font-family:inherit;transition:transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s}\n.btn-o{background:#F28A2E;color:#0B2236 !important}.btn-w{background:#fff;color:#0B2236 !important;box-shadow:inset 0 0 0 1.5px #D3E2EF}.btn-wa{background:#25D366;color:#0B2236 !important}\n.btn-o:hover,.btn-w:hover,.btn-wa:hover{transform:translateY(-3px)}\n.chip{transition:background .2s,color .2s,border-color .2s,transform .2s}.chip:hover{transform:translateY(-2px)}\n.faq-q{transition:background .25s}.faq-q:hover{background:#F2F8FD !important}\n.chev{transition:transform .35s cubic-bezier(.2,.8,.2,1)}\n.pulse-dot{animation:pulse 1.8s ease-in-out infinite}@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(242,138,46,.7)}50%{box-shadow:0 0 0 7px rgba(242,138,46,0)}}\n.spin{transform-box:fill-box;transform-origin:center;animation:spin 10s linear infinite}.spin-r{transform-box:fill-box;transform-origin:center;animation:spin 7s linear infinite reverse}@keyframes spin{to{transform:rotate(360deg)}}\n.rise{animation:rise .9s cubic-bezier(.2,.8,.2,1) both}.d1{animation-delay:.1s}.d2{animation-delay:.22s}.d3{animation-delay:.34s}\n@keyframes rise{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}\n.bub{animation:rise .45s cubic-bezier(.2,.8,.2,1) both}\n.scan{animation:scan 2.6s ease-in-out infinite}@keyframes scan{0%,100%{transform:translateY(0)}50%{transform:translateY(46px)}}\n.blink{animation:blink 1.2s steps(2) infinite}@keyframes blink{50%{opacity:0}}\n.search:focus-within{box-shadow:0 0 0 4px rgba(10,111,176,.18),0 24px 48px -28px rgba(11,34,54,.45) !important;border-color:#0A6FB0 !important}\n@supports (animation-timeline:view()){.rv{animation:rv both cubic-bezier(.2,.8,.2,1);animation-timeline:view();animation-range:entry 0% entry 55%}}\n@keyframes rv{from{opacity:0;transform:translateY(48px)}to{opacity:1;transform:none}}\n@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation:none !important;transition:none !important}}\n.ann-shine{position:relative;overflow:hidden}.ann-shine::after{content:\"\";position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,rgba(255,255,255,.5) 50%,transparent 70%);transform:translateX(-100%);animation:annshine 5s ease-in-out infinite;pointer-events:none}@keyframes annshine{0%,55%{transform:translateX(-100%)}100%{transform:translateX(100%)}}.ann:hover{background:#F59A45 !important}\n.ann-gift{animation:annwig 2.6s ease-in-out infinite}@keyframes annwig{0%,60%,100%{transform:rotate(0) scale(1)}10%{transform:rotate(-14deg) scale(1.1)}20%{transform:rotate(12deg) scale(1.1)}30%{transform:rotate(-8deg)}40%{transform:rotate(4deg)}}\n.ann-short{display:none}@media (max-width:760px){.ann-long{display:none !important}.ann-short{display:inline !important}.ofc-pill{bottom:16px !important;left:12px !important}}\n.ofc,.ofc-pill{animation:ofcin .6s cubic-bezier(.2,.8,.2,1) both}@keyframes ofcin{from{opacity:0;transform:translateY(30px) scale(.95)}to{opacity:1;transform:none}}\n.ofc-ping{animation:ofping 2s cubic-bezier(0,0,.2,1) infinite}@keyframes ofping{75%,100%{transform:scale(1.7);opacity:0}}\n.xo2{position:relative;display:inline-block}.xo2::after{content:\"\";position:absolute;left:-5px;right:-5px;top:52%;height:3px;border-radius:3px;background:#D9480F;transform:rotate(-10deg) scaleX(0);transform-origin:left center;animation:xo2 4s ease-in-out infinite}@keyframes xo2{0%,12%{transform:rotate(-10deg) scaleX(0)}32%,100%{transform:rotate(-10deg) scaleX(1)}}\n.btn-w.btn-ghost{background:transparent !important;color:#fff !important;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.5) !important}.btn-w.btn-ghost:hover{background:rgba(255,255,255,.12) !important}\n.fb input:focus,.fb textarea:focus{border-color:#0A6FB0 !important;box-shadow:0 0 0 4px rgba(10,111,176,.15);outline:none}\n.fb-in{animation:fbin .45s cubic-bezier(.2,.8,.2,1) both}@keyframes fbin{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}\n.fb-check{stroke-dasharray:60;stroke-dashoffset:60;animation:fbck .8s .2s ease forwards}@keyframes fbck{to{stroke-dashoffset:0}}\n.fb-chip{transition:background .2s,color .2s,transform .2s}.fb-chip:hover{transform:translateY(-2px)}\n.fb-star{transition:transform .2s}.fb-star:hover{transform:scale(1.15)}\n.fb-btn{transition:transform .3s,box-shadow .3s}.fb-btn:hover{transform:translateY(-2px);box-shadow:0 14px 28px -12px rgba(10,111,176,.7)}\n.fbm{animation:fbfade .3s ease both}@keyframes fbfade{from{opacity:0}to{opacity:1}}\n.fbm-card{animation:fbpop .45s cubic-bezier(.2,.8,.2,1) both}@keyframes fbpop{from{opacity:0;transform:translateY(30px) scale(.96)}to{opacity:1;transform:none}}\n.ft-btn{background:none;border:0;padding:6px 0;cursor:pointer;font-family:inherit;text-align:left;transition:color .2s}.ft-btn:hover{color:#fff !important}";

export default class Problems extends DCLogic {
  renderVals() {
    const L = tr(this.props.lang, RU);
    const P = (p: string) => path(this.props.lang, p);
    const s = this.state || {};
    const q = s.q || '';
    const cat = s.cat || 'all';
    const open = s.open ?? 0;
    const F = {
      cool: 'M12 2v20M4.9 7l14.2 10M4.9 17L19.1 7M9 4l3 2 3-2M9 20l3-2 3 2',
      heat: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M12 2v2 M12 20v2 M4.9 4.9l1.4 1.4 M17.7 17.7l1.4 1.4 M2 12h2 M20 12h2 M4.9 19.1l1.4-1.4 M17.7 6.3l1.4-1.4',
      water: 'M12 3c3.5 4.5 6 7.8 6 11a6 6 0 0 1-12 0c0-3.2 2.5-6.5 6-11z',
      air: 'M3 8h11a3 3 0 1 0-3-3 M3 12h16a3 3 0 1 1-3 3 M3 16h8',
      noise: 'M4 9v6h4l5 4V5L8 9H4z M17 9a4 4 0 0 1 0 6 M19.5 6.5a8 8 0 0 1 0 11',
      elec: 'M13 2L4 14h7l-1 8 9-12h-7z'
    };
    const catNames = { cool: L("Սառեցում"), heat: L("Ջեռուցում"), water: L("Ջուր և սառույց"), air: L("Հոտ և օդ"), noise: L("Աղմուկ"), elec: L("Էլեկտրոնիկա") };
    const lv = [L("Կարող եք ստուգել ինքներդ"), L("Պետք է վարպետ")];
    // Per-question icons — same set and order as the home page FAQ (Main.tsx)
    const IC = {
          cool: 'M12 2v20M4.9 7l14.2 10M4.9 17L19.1 7M9 4l3 2 3-2M9 20l3-2 3 2',
          heat: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M12 2v2 M12 20v2 M4.9 4.9l1.4 1.4 M17.7 17.7l1.4 1.4 M2 12h2 M20 12h2 M4.9 19.1l1.4-1.4 M17.7 6.3l1.4-1.4',
          drop: 'M12 3c3.5 4.5 6 7.8 6 11a6 6 0 0 1-12 0c0-3.2 2.5-6.5 6-11z',
          smell: 'M3 8h11a3 3 0 1 0-3-3 M3 12h16a3 3 0 1 1-3 3 M3 16h8',
          noise: 'M4 9v6h4l5 4V5L8 9H4z M17 9a4 4 0 0 1 0 6 M19.5 6.5a8 8 0 0 1 0 11',
          power: 'M12 3v9 M6.3 6.3a8 8 0 1 0 11.4 0',
          code: 'M12 9v4 M12 17h.01 M10.3 3.9L2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z',
          ice: 'M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0z'
        };
    const all = [
      ["cool",L("Օդորակիչը չի սառեցնում"),L("Ֆրեոնի արտահոսք կամ պակաս, ֆիլտրերի կամ ռադիատորի աղտոտվածություն, կոմպրեսորի անսարքություն, պլատայի խափանում։"),L("Ստուգեք՝ արդյոք հեռակառավարման վահանակի վրա միացված է սառեցման ռեժիմը (Cool), և մաքրեք ներքին բլոկի ֆիլտրերը։ Եթե օդորակիչը շարունակում է տաք օդ փչել, դիմեք մեր մասնագետին՝ ֆրեոնի ճնշումն ու էլեկտրոնիկան ախտորոշելու համար։"),'',1,'cool'],
      ["cool",L("Թույլ է սառեցնում"),L("Ֆրեոնի մասնակի արտահոսք, ֆիլտրերի կամ ռադիատորի աղտոտվածություն, սենյակի համար ոչ ճիշտ ընտրված հզորություն, ջերմաստիճանային տվիչի (սենսորի) անսարքություն։"),L("Ստուգեք՝ արդյոք սահմանված է բավարար ցածր ջերմաստիճան (օրինակ՝ 18-20°C), և լվացեք ներքին բլոկի ֆիլտրերը։ Եթե օդորակիչը շարունակում է թույլ զովացնել, դիմեք մեր մասնագետին՝ ֆրեոնի ճնշումը լիցքավորելու և համակարգը ախտորոշելու համար։"),'',1,'cool'],
      ["cool",L("Աշխատում է առանց անջատվելու (անդադար)"),L("Ֆրեոնի արտահոսք կամ պակաս, ջերմաստիճանային տվիչի (սենսորի) անսարքություն, ֆիլտրերի կամ ռադիատորի խիստ աղտոտվածություն, սենյակի չափսերի համեմատ անբավարար հզորություն, սենյակում ջերմության մեծ ներհոսք (բաց պատուհաններ կամ դռներ)։"),L("Ստուգեք՝ արդյոք դռներն ու պատուհանները փակ են, և ստուգեք ներքին բլոկի ֆիլտրերի մաքրությունը։ Եթե սարքը շարունակում է աշխատել առանց ընդմիջման և չի հասնում սահմանված ջերմաստիճանին, անջատեք այն և դիմեք մեր մասնագետին՝ ֆրեոնի մակարդակը և սենսորները ախտորոշելու համար։"),'',1,'cool'],
      ["heat",L("Չի տաքացնում կամ թույլ է տաքացնում"),L("Ֆրեոնի պակաս, արտաքին միջավայրի չափազանց ցածր ջերմաստիճան, 4-տեղանոց փականի (կլապանի) խափանում, ֆիլտրերի աղտոտվածություն, սենսորի անսարքություն։"),L("Ստուգեք՝ արդյոք հեռակառավարման վահանակի վրա միացված է տաքացման ռեժիմը (Heat), և լվացեք ներքին բլոկի ֆիլտրերը։ Հիշեցում․ տաքացման ռեժիմը միացնելուց հետո օդորակիչին անհրաժեշտ է 5–10 րոպե՝ տաք օդ փչել սկսելու համար։ Եթե այն շարունակում է փչել սառը օդ կամ ընդհանրապես չի տաքացնում, դիմեք մեր մասնագետին՝ համակարգը ախտորոշելու համար։"),'',1,'heat'],
      ["heat",L("Արտաքին բլոկը սառցակալում է"),L("Ֆրեոնի պակաս կամ արտահոսք, հալեցման (defrost) համակարգի խափանում, ռադիատորի աղտոտվածություն, արտաքին ցածր ջերմաստիճան։"),L("Եթե սարքն աշխատում է տաքացման ռեժիմով, սպասեք, որ այն ինքնուրույն անցնի հալեցման (defrost) ռեժիմի։ Մի փորձեք սառույցը մաքրել սուր առարկաներով։ Եթե սառցակալումը չի անցնում, դիմեք մեր մասնագետին՝ ֆրեոնի ճնշումը և համակարգը ախտորոշելու համար։"),'',1,'ice'],
      ["water",L("Ջուր է կաթում ներքին բլոկից"),L("Դրենաժային խողովակի խցանում, ֆիլտրերի խիստ աղտոտվածություն, սխալ թեքությամբ տեղադրում։"),L("Անջատեք օդորակիչը էլեկտրասնուցումից և ստուգեք՝ արդյոք ֆիլտրերը մաքուր են։ Եթե կաթոցը չի դադարում, դիմեք մեր մասնագետին՝ դրենաժային համակարգը մաքրելու և ախտորոշելու համար։"),'',1,'drop'],
      ["water",L("Սառույց է կապում (սառչում է ներքին բլոկը կամ խողովակը)"),L("Ֆրեոնի արտահոսք, ֆիլտրերի կամ ռադիատորի խիստ աղտոտվածություն, ներքին բլոկի հովհարիչի դանդաղ աշխատանք։"),L("Անջատեք օդորակիչը էլեկտրասնուցումից և ստուգեք՝ արդյոք ֆիլտրերը մաքուր են։ Եթե սառույցը չի հալվում կամ կրկին գոյանում է միացնելուց հետո, դիմեք մեր մասնագետին՝ ֆրեոնի ճնշումը և համակարգը հիմնովին ախտորոշելու համար։"),'',1,'ice'],
      ["air",L("Տհաճ / բորբոսնած հոտ է գալիս"),L("Ներքին բլոկում և ռադիատորի վրա բակտերիաների կամ բորբոսի առաջացում, դրենաժային համակարգի աղտոտվածություն, ֆիլտրերի երկարատև չմաքրում։"),L("Անջատեք օդորակիչը, հանեք և լվացեք ներքին բլոկի ֆիլտրերը տաք ջրով ու չորացրեք նախքան հետ տեղադրելը։ Հոտը վերացնելու համար անհրաժեշտ է դիմել մեր մասնագետին՝ ներքին բլոկի մանրակրկիտ ախտահանման և խորը մաքրման (մանրէազերծման) համար։"),'',1,'smell'],
      ["air",L("Օդի հոսքի ուղղորդիչները (ժալյուզները) չեն շարժվում"),L("Ուղղորդիչների մեխանիկական արգելափակում կամ խցանում, շարժիչի (մոտորիկի) խափանում, հեռակառավարման վահանակի վրա Swing ֆունկցիայի անջատված վիճակ, ղեկավարման վահանակի (պլատայի) կամ ռելեի խնդիր։"),L("Ստուգեք՝ արդյոք հեռակառավարման վահանակի վրա միացված է ուղղորդիչների շարժման ռեժիմը (Swing)։ Զգուշորեն համոզվեք, որ ուղղորդիչների վրա մեխանիկական խոչընդոտ կամ սառույց չկա։ Եթե սարքը չի արձագանքում, դիմեք մեր մասնագետին՝ շարժիչը կամ էլեկտրոնային համակարգը ախտորոշելու համար։"),'',1,'smell'],
      ["noise",L("Աղմկում կամ թրթռում է"),L("Հովհարիչի (վենտիլյատորի) մաշվածություն կամ վնասում, կոմպրեսորի անսարքություն, թույլ ամրացված պատյան, արտաքին բլոկում օտար մարմնի հայտնվելը։"),L("Ստուգեք՝ արդյոք արտաքին կամ ներքին բլոկի կորպուսի պտուտակները ամուր են ձգված, և համոզվեք, որ հովհարիչի պտույտին որևէ բան չի խոչընդոտում։ Եթե աղմուկն ու թրթռոցը շարունակվում են, դիմեք մեր մասնագետին՝ բլոկի ամրությունն ու ներքին մեխանիզմները ստուգելու համար։"),'',1,'noise'],
      ["elec",L("Ընդհանրապես չի միանում"),L("Էլեկտրական պլատայի խափանում, հեռակառավարման վահանակի կամ ընդունիչ սենսորի անսարքություն, էլեկտրասնուցման կամ ապահովիչի (պրեդոխրանիտելի) խնդիր։"),L("Ստուգեք՝ արդյոք վարդակում հոսանք կա, և արդյոք հեռակառավարման վահանակի մարտկոցները լիցքավորված են։ Եթե սարքն անջատված է և որևէ ազդանշան կամ լույս չի տալիս, դիմեք մեր մասնագետին՝ էլեկտրասնուցումն ու պլատան ախտորոշելու համար։"),'',1,'power'],
      ["elec",L("Չի արձագանքում հեռակառավարման վահանակին (պուլտին)"),L("Մարտկոցների լիցքաթափում, պուլտի վնասում, ներքին բլոկի ազդանշանի ընդունիչի (սենսորի) անսարքություն, ղեկավարման վահանակի (պլատայի) խափանում։"),L("Փոխարինեք պուլտի մարտկոցները նորերով և համոզվեք, որ ազդանշանի ճանապարհին խոչընդոտներ չկան։ Եթե օդորակիչը դարձյալ չի արձագանքում, դիմեք մեր մասնագետին՝ սենսորը և էլեկտրոնիկան ախտորոշելու համար։"),'',1,'code'],
      ["elec",L("Միանում է և կարճ ժամանակ անց ինքնուրույն անջատվում"),L("Կոմպրեսորի գերտաքացում, ֆրեոնի ավելցուկ կամ պակաս, ղեկավարման պլատայի անսարքություն, օդի թույլ շրջանառություն (աղտոտված ֆիլտրերի պատճառով), ջերմաստիճանային տվիչի (սենսորի) կամ գործարկման կոնդենսատորի խափանում։"),L("Անջատեք օդորակիչը էլեկտրասնուցումից, մաքրեք ներքին բլոկի ֆիլտրերը և ստուգեք՝ արդյոք արտաքին բլոկը ծածկված չէ օտար իրերով։ Եթե միացնելուց հետո խնդիրը կրկնվում է, դիմեք մեր մասնագետին՝ էլեկտրոնիկան և համակարգի ճնշումը ախտորոշելու համար։"),'',1,'power'],
      ["elec",L("Անջատում է տան էլեկտրական ավտոմատը (խփում է ավտոմատը)"),L("Կոմպրեսորի կամ էլեկտրական շարժիչի կարճ միացում, հոսանքի մալուխի կամ ներքին լարերի վնասում, գերբեռնվածություն ցանցում, գործարկման կոնդենսատորի խափանում, հզորությանը չհամապատասխանող ավտոմատի կիրառություն։"),L("Անմիջապես անջատեք օդորակիչի սնուցումը վարդակից և մի փորձեք կրկին միացնել ավտոմատը՝ կրկնակի կարճ միացումից խուսափելու համար։ Անհապաղ դիմեք մեր մասնագետին՝ էլեկտրական շղթան, կոմպրեսորն ու մալուխները հիմնովին ախտորոշելու համար։"),'',1,'power'],
      ["elec",L("Ցուցադրում է սխալի կոդ (Error Code)"),L("Էլեկտրոնային պլատայի խափանում, սենսորների (ջերմաստիճանի կամ ճնշման) անսարքություն, ֆրեոնի արտահոսք կամ ճնշման անկում, կոմպրեսորի կամ հովհարիչի պաշտպանության աշխատանք, կապի խնդիր ներքին և արտաքին բլոկների միջև։"),L("Անջատեք օդորակիչը էլեկտրասնուցումից 5–10 րոպեով և նորից միացրեք՝ համակարգը վերագործարկելու համար։ Ուշադրություն դարձրեք էկրանին ցուցադրվող կոդին կամ լույսերի թարթման հաճախությանը։ Եթե սխալը կրկնվում է, դիմեք մեր մասնագետին՝ կոդը վերծանելու և համակարգը վերանորոգելու համար։"),'',1,'code']
    ];
    const ql = q.trim().toLowerCase();
    const filtered = all.map((r, i) => ({ r, i })).filter(x => (cat === 'all' || x.r[0] === cat) && (!ql || (x.r[1] + ' ' + x.r[2]).toLowerCase().includes(ql)));
    const items = filtered.map(({ r, i }) => {
      const o = i === open;
      return { q: r[1], c: r[2], d: r[3], price: r[4], ic: IC[r[6]] || F[r[0]], catLabel: catNames[r[0]], level: lv[r[5]], open: o, rot: o ? 'rotate(180deg)' : 'rotate(0deg)', border: o ? '#9FC3E0' : '#E1ECF5', icBg: o ? '#0A6FB0' : '#EAF4FB', icFg: o ? '#fff' : '#0A6FB0', toggle: () => this.setState({ open: o ? -1 : i }) };
    });
    const catDefs = [['all', L("Բոլորը")]].concat(Object.keys(catNames).map(k => [k, catNames[k]]));
    const cats = catDefs.map(c => { const on = c[0] === cat; return { label: c[1], on, pick: () => this.setState({ cat: c[0] }), style: 'min-height: 44px; padding: 0 18px; border-radius: 999px; font-family: inherit; font-size: 15px; font-weight: 800; cursor: pointer; ' + (on ? 'background: #0B2236; color: #fff; border: 1.5px solid #0B2236' : 'background: #fff; color: #0B2236; border: 1.5px solid #D5E2EE') }; });

    const DB = {
      gree: { name: 'Gree', codes: {
        E6: [L("Կապի խափանում բլոկների միջև"), L("Ներքին և արտաքին բլոկները չեն «տեսնում» միմյանց․ ստուգվում է միացման մալուխը և կառավարման սալիկները։")],
        H6: [L("Ներքին օդափոխիչի շարժիչ"), L("Օդափոխիչի շարժիչը չի տալիս ազդանշան․ հնարավոր է շարժիչի կամ սալիկի անսարքություն։")],
        F0: [L("Ֆրեոնի պակաս կամ արտահոսք"), L("Անհրաժեշտ է արտահոսքի որոնում, զոդում և լիցքավորում ըստ նորմայի։")],
        E5: [L("Գերհոսանքից պաշտպանություն"), L("Կոմպրեսորը ծանրաբեռնված է կամ լարումը անկայուն է։")],
        E1: [L("Բարձր ճնշման պաշտպանություն"), L("Հաճախ պատճառը կեղտոտ արտաքին ռադիատորն է, չաշխատող արտաքին օդափոխիչը կամ ֆրեոնի ավելցուկը։")]
      } },
      midea: { name: 'Midea', codes: {
        E1: [L("Կապի խափանում բլոկների միջև"), L("Ստուգվում է միացման մալուխը, հոսանքի սնուցումը և կառավարման սալիկները։")],
        E3: [L("Ներքին օդափոխիչի արագության խափանում"), L("Օդափոխիչի շարժիչը չի պտտվում ճիշտ արագությամբ․ ստուգվում են շարժիչը, կոնդենսատորը և սալիկը։")],
        E4: [L("Սենյակի ջերմաստիճանի սենսոր"), L("Ներքին բլոկի ջերմաստիճանի սենսորը կտրված է կամ կարճ միացում ունի․ սովորաբար փոխարինվում է սենսորը։")],
        EC: [L("Ֆրեոնի արտահոսք"), L("Համակարգը հայտնաբերել է ֆրեոնի պակաս․ անհրաժեշտ է արտահոսքի որոնում և լիցքավորում։")],
        P1: [L("Բարձր կամ ցածր լարում"), L("Ցանցի լարումը նորմայից դուրս է․ խորհուրդ է տրվում լարման կայունացուցիչ։")]
      } },
      daikin: { name: 'Daikin', codes: {
        U4: [L("Կապի խափանում բլոկների միջև"), L("Ներքին և արտաքին բլոկների միջև ազդանշան չկա․ ստուգվում են մալուխը, սնուցումը և սալիկները։")],
        U0: [L("Ֆրեոնի պակաս"), L("Համակարգում ֆրեոնը քիչ է․ անհրաժեշտ է արտահոսքի որոնում և լիցքավորում։")],
        A6: [L("Ներքին օդափոխիչի շարժիչ"), L("Ներքին բլոկի օդափոխիչը կանգնած է կամ խցանված․ ստուգվում են շարժիչը և սալիկը։")],
        E6: [L("Կոմպրեսորի գործարկման խափանում"), L("Կոմպրեսորը չի գործարկվում կամ արգելափակված է․ պատճառը կարող է լինել լարումը, սալիկը կամ կոմպրեսորը։")],
        E7: [L("Արտաքին օդափոխիչի շարժիչ"), L("Արտաքին բլոկի օդափոխիչը չի պտտվում․ ստուգվում են շարժիչը և կառավարման սալիկը։")]
      } },
      lg: { name: 'LG', codes: {
        CH01: [L("Սենյակի ջերմաստիճանի սենսոր"), L("Ներքին բլոկի օդի սենսորը անսարք է կամ անջատված․ սովորաբար փոխարինվում է սենսորը։")],
        CH05: [L("Կապի խափանում բլոկների միջև"), L("Ներքին և արտաքին բլոկները չեն կապվում․ ստուգվում են մալուխը, միացումները և սալիկները։")],
        CH10: [L("Ներքին օդափոխիչի շարժիչ"), L("Ներքին BLDC օդափոխիչը արգելափակված է կամ անսարք․ ստուգվում են շարժիչը և սալիկը։")],
        CH21: [L("Ինվերտորի գերհոսանք (DC Peak)"), L("Կոմպրեսորի կամ ինվերտորային սալիկի գերհոսանք․ հաճախ կապված է լարման անկայունության հետ։")],
        CH38: [L("Ֆրեոնի պակաս"), L("Համակարգը հայտնաբերել է ֆրեոնի պակաս․ անհրաժեշտ է արտահոսքի որոնում և լիցքավորում։")]
      } },
      samsung: { name: 'Samsung', codes: {
        E101: [L("Կապի խափանում բլոկների միջև"), L("Ներքին և արտաքին բլոկները չեն կապվում․ ստուգվում են մալուխը և կառավարման սալիկները։")],
        E121: [L("Սենյակի ջերմաստիճանի սենսոր"), L("Ներքին բլոկի ջերմաստիճանի սենսորը անսարք է․ սովորաբար փոխարինվում է սենսորը։")],
        E154: [L("Ներքին օդափոխիչի շարժիչ"), L("Ներքին օդափոխիչը չի պտտվում կամ արագությունը սխալ է․ ստուգվում են շարժիչը և սալիկը։")],
        E458: [L("Արտաքին օդափոխիչի շարժիչ"), L("Արտաքին բլոկի օդափոխիչը անսարք է․ ստուգվում են շարժիչը և միացումները։")],
        E554: [L("Ֆրեոնի արտահոսք"), L("Համակարգում ֆրեոնը քիչ է․ անհրաժեշտ է արտահոսքի որոնում, զոդում և լիցքավորում։")]
      } },
      mitsubishi: { name: 'Mitsubishi', codes: {
        E6: [L("Կապի խափանում բլոկների միջև"), L("Ներքին և արտաքին բլոկների միջև ազդանշան չկա․ ստուգվում են մալուխը, սնուցումը և սալիկները։")],
        P1: [L("Օդի ջերմաստիճանի սենսոր"), L("Ներքին բլոկի օդի սենսորը անսարք է կամ անջատված․ սովորաբար փոխարինվում է սենսորը։")],
        P8: [L("Խողովակի ջերմաստիճանի շեղում"), L("Ներքին ռադիատորը չի հասնում պետք եղած ջերմաստիճանին․ հաճախ պատճառը ֆրեոնի պակասն է։")],
        U0: [L("Կոմպրեսորի գերտաքացում / ֆրեոնի պակաս"), L("Կոմպրեսորից դուրս եկող գազը չափից տաք է․ սովորաբար ֆրեոնը քիչ է։")],
        U1: [L("Բարձր ճնշման պաշտպանություն"), L("Կեղտոտ արտաքին ռադիատոր, չաշխատող օդափոխիչ կամ ֆրեոնի ավելցուկ։")]
      } },
      hisense: { name: 'Hisense', codes: {
        E1: [L("Սենյակի ջերմաստիճանի սենսոր"), L("Ներքին բլոկի օդի սենսորը անսարք է կամ անջատված․ սովորաբար փոխարինվում է սենսորը։")],
        E2: [L("Ռադիատորի ջերմաստիճանի սենսոր"), L("Ներքին ռադիատորի (խողովակի) սենսորը անսարք է․ ստուգվում և փոխարինվում է սենսորը։")],
        E4: [L("Ներքին օդափոխիչի շարժիչ"), L("Ներքին օդափոխիչը չի պտտվում կամ ազդանշան չի տալիս․ ստուգվում են շարժիչը և սալիկը։")],
        E5: [L("Կապի խափանում բլոկների միջև"), L("Ներքին և արտաքին բլոկները չեն կապվում․ ստուգվում են մալուխը, սնուցումը և սալիկները։")],
        E6: [L("Արտաքին բլոկի անսարքություն"), L("Արտաքին բլոկը հայտնում է սխալ (կոմպրեսոր, օդափոխիչ կամ սալիկ)․ անհրաժեշտ է վարպետի ախտորոշում։")]
      } }
    };
    const brand = s.brand || 'gree';
    const B = DB[brand];
    const code = (s.code ?? 'E6').toUpperCase();
    const hit = B.codes[code];
    const brands = Object.keys(DB).map(k => { const on = k === brand; return { name: DB[k].name, on, pick: () => this.setState({ brand: k, code: Object.keys(DB[k].codes)[0] || '' }), style: 'min-height: 42px; padding: 0 16px; border-radius: 12px; font-family: inherit; font-size: 15px; font-weight: 800; cursor: pointer; ' + (on ? 'background: #0A6FB0; color: #fff; border: 1.5px solid #0A6FB0' : 'background: #fff; color: #0B2236; border: 1.5px solid #D5E2EE') }; });
    const qk = Object.keys(B.codes).length ? Object.keys(B.codes) : ['E1', 'E6', 'F0', 'H6'];
    return {
      q, onQ: (e) => this.setState({ q: e.target.value, open: -1 }),
      found: this.props.lang === 'ru' ? (n => n + ' ' + (n % 10 === 1 && n % 100 !== 11 ? 'проблема' : [2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100) ? 'проблемы' : 'проблем'))(filtered.length) : filtered.length + L(" խնդիր"),
      cats, items, empty: items.length === 0,
      brands, code: s.code ?? 'E6', codeShown: code || '—', brandName: B.name,
      onCode: (e) => this.setState({ code: e.target.value }),
      quick: qk.map(c => ({ c, pick: () => this.setState({ code: c }) })),
      resTitle: hit ? hit[0] : L("Այս կոդը դեռ բազայում չէ"),
      resText: hit ? hit[1] : L("Ուղարկեք էկրանի լուսանկարը WhatsApp-ով, և վարպետը 10 րոպեում կասի պատճառը և մոտավոր գինը։")
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
          <Header active="problems" lang={this.props.lang ?? 'hy'} />
        </div>
        <section style={{ padding : "64px 24px 40px", position : "relative", overflow : "hidden" }}>
          <div aria-hidden="true" style={{ position : "absolute", inset : "0", backgroundImage : "radial-gradient(rgba(11,34,54,.09) 1.2px, transparent 1.2px)", backgroundSize : "26px 26px", maskImage : "linear-gradient(180deg, #000, transparent 90%)", WebkitMaskImage : "linear-gradient(180deg, #000, transparent 90%)" }} />
          <div style={{ maxWidth : "900px", margin : "0 auto", textAlign : "center", position : "relative" }}>
            <h1 className="rise d1 h1x" style={{ margin : "0 0 16px", fontSize : "62px", lineHeight : "1.05", letterSpacing : "-0.035em", fontWeight : "800" }}>
              {L("Անսարքությունների ")}
              <span style={{ color : "#0A6FB0" }}>
                {L("ախտորոշում")}
              </span>
            </h1>
            <p className="rise d2" style={{ margin : "0 auto 34px", fontSize : "19px", lineHeight : "1.6", color : "#3F566B", maxWidth : "640px" }}>
              {L("Գտեք Ձեր օդորակիչի անսարքության հնարավոր պատճառը, իմացեք առաջին քայլերը և վստահեք լուծումը մեր մասնագետին։")}
            </p>
            <label className="rise d3 search" style={{ display : "flex", alignItems : "center", gap : "14px", background : "#fff", border : "1.5px solid #D5E2EE", borderRadius : "22px", padding : "8px 8px 8px 22px", maxWidth : "680px", margin : "0 auto", boxShadow : "0 24px 48px -28px rgba(11,34,54,.45)", transition : "box-shadow .25s, border-color .25s" }}>
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A6FB0" strokeWidth="2.2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-4-4" />
              </svg>
              <span style={{ position : "absolute", width : "1px", height : "1px", overflow : "hidden", clip : "rect(0 0 0 0)" }}>
                {L("Որոնել խնդիրը")}
              </span>
              <input type="search" value={V.q} onChange={V.onQ} placeholder={L("Օր․՝ չի սառեցնում, ջուր է կաթում, հոտ…")} style={{ flex : "1", minWidth : "0", border : "0", outline : "none", fontFamily : "inherit", fontSize : "17px", height : "52px", background : "transparent", color : "#0B2236" }} />
              <span style={{ background : "#0B2236", color : "#fff", borderRadius : "16px", padding : "14px 18px", fontWeight : "800", fontSize : "14px", whiteSpace : "nowrap" }}>
                {V.found}
              </span>
            </label>
          </div>
        </section>
        <section style={{ padding : "8px 24px 72px" }}>
          <div style={{ maxWidth : "1100px", margin : "0 auto" }}>
            <div role="group" aria-label={L("Կատեգորիա")} style={{ display : "flex", flexWrap : "wrap", gap : "10px", justifyContent : "center", marginBottom : "28px" }}>
              {(V.cats ?? []).map((c: any, $i7: number) => (
                <React.Fragment key={$i7}>
                  <button type="button" className="chip" onClick={c?.pick} aria-pressed={c?.on} style={css(c?.style)}>
                    {c?.label}
                  </button>
                </React.Fragment>
              ))}
            </div>
            <a href={P("/contacts/#offer")} className="ann-shine lift" style={{ display : "flex", flexWrap : "wrap", alignItems : "center", gap : "16px", background : "#FFF1E4", border : "1.5px solid #F6C9A0", borderRadius : "22px", padding : "16px 20px", textDecoration : "none", color : "#0B2236", marginBottom : "22px" }}>
              <span className="ann-gift" style={{ width : "50px", height : "50px", borderRadius : "15px", background : "#F28A2E", color : "#0B2236", display : "inline-flex", alignItems : "center", justifyContent : "center", flex : "none" }}>
                <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h18v4H3z M5 12v9h14v-9 M12 8v13 M12 8c-2-4-6-4-6-1.5S10 8 12 8z M12 8c2-4 6-4 6-1.5S14 8 12 8z" />
                </svg>
              </span>
              <span style={{ flex : "1 1 320px", minWidth : "0" }}>
                <span style={{ display : "block", fontSize : "12px", fontWeight : "800", letterSpacing : ".08em", textTransform : "uppercase", color : "#B85A0E" }}>
                  {L("Շատ խնդիրներ լուծվում են լվացումով · Հատուկ առաջարկ")}
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
            <div style={{ display : "flex", flexDirection : "column", gap : "12px" }}>
              {(V.items ?? []).map((f: any, $i7: number) => (
                <React.Fragment key={$i7}>
                  <div className="rv" style={css(`background: #fff; border: 1px solid ${f?.border ?? ""}; border-radius: 22px; overflow: hidden; transition: border-color .3s`)}>
                    <button type="button" className="faq-q" onClick={f?.toggle} aria-expanded={f?.open} style={{ width : "100%", display : "flex", alignItems : "center", gap : "16px", padding : "20px 22px", background : "#fff", border : "0", cursor : "pointer", textAlign : "left", fontFamily : "inherit", color : "#0B2236" }}>
                      <span style={css(`width: 46px; height: 46px; border-radius: 14px; background: ${f?.icBg ?? ""}; color: ${f?.icFg ?? ""}; display: inline-flex; align-items: center; justify-content: center; flex: none; transition: background .3s`)}>
                        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d={f?.ic} />
                        </svg>
                      </span>
                      <span style={{ flex : "1" }}>
                        <span style={{ display : "block", fontSize : "18px", fontWeight : "800" }}>
                          {f?.q}
                        </span>
                        <span style={{ display : "block", fontSize : "13px", color : "#4A5F73", marginTop : "2px" }}>
                          {f?.catLabel}
                        </span>
                      </span>
                      <svg className="chev" aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A6FB0" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={css(`transform: ${f?.rot ?? ""}`)}>
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    {f?.open ? (
                      <>
                        <div className="bub ans" style={{ padding : "0 22px 22px 84px", display : "grid", gridTemplateColumns : "repeat(auto-fit, minmax(240px, 1fr))", gap : "14px" }}>
                          <div style={{ background : "#F4F8FC", borderRadius : "16px", padding : "16px 18px" }}>
                            <div style={{ fontSize : "12px", fontWeight : "800", letterSpacing : ".08em", textTransform : "uppercase", color : "#0A6FB0", marginBottom : "8px" }}>
                              {L("Հնարավոր պատճառներ")}
                            </div>
                            <div style={{ lineHeight : "1.55", color : "#3F566B" }}>
                              {f?.c}
                            </div>
                          </div>
                          <div style={{ background : "#FFF4EA", borderRadius : "16px", padding : "16px 18px" }}>
                            <div style={{ fontSize : "12px", fontWeight : "800", letterSpacing : ".08em", textTransform : "uppercase", color : "#B85A0E", marginBottom : "8px" }}>
                              {L("Ինչ անել հիմա")}
                            </div>
                            <div style={{ lineHeight : "1.55", color : "#3F566B" }}>
                              {f?.d}
                            </div>
                          </div>
                          <div style={{ gridColumn : "1 / -1" }}>
                            <a href={P("/contacts/")} className="btn-o" style={{ padding : "13px 22px", fontSize : "15px" }}>
                              {L("Կանչել վարպետին")}
                            </a>
                          </div>
                        </div>
                      </>
                    ) : null}
                  </div>
                </React.Fragment>
              ))}
              {V.empty ? (
                <>
                  <div style={{ textAlign : "center", background : "#fff", border : "1.5px dashed #C3D6E6", borderRadius : "22px", padding : "40px" }}>
                    <div style={{ fontWeight : "800", fontSize : "20px", marginBottom : "8px" }}>
                      {L("Չգտանք նման խնդիր")}
                    </div>
                    <div style={{ color : "#4A5F73", marginBottom : "18px" }}>
                      {L("Ուղարկեք լուսանկար կամ տեսանյութ, և վարպետը կպատասխանի 10 րոպեում։")}
                    </div>
                    <a href="https://wa.me/37491105887" className="btn-wa">
                      {L("Գրել WhatsApp-ով")}
                    </a>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </section>
        <section style={{ padding : "72px 24px", background : "#fff" }}>
          <div style={{ maxWidth : "1280px", margin : "0 auto", display : "flex", flexWrap : "wrap", gap : "48px", alignItems : "center" }}>
            <div className="rv" style={{ flex : "1 1 420px", minWidth : "0" }}>
              <div style={{ fontSize : "14px", fontWeight : "800", letterSpacing : ".12em", textTransform : "uppercase", color : "#B85A0E", marginBottom : "12px" }}>
                {L("Սխալի կոդեր")}
              </div>
              <h2 className="h2x" style={{ margin : "0 0 14px", fontSize : "46px", lineHeight : "1.1", letterSpacing : "-0.03em", fontWeight : "800" }}>
                {L("Ի՞նչ է նշանակում կոդը էկրանին")}
              </h2>
              <p style={{ margin : "0 0 26px", color : "#4A5F73", fontSize : "17px", lineHeight : "1.6" }}>
                {L("Ընտրեք բրենդը և մուտքագրեք կոդը։ Նույն կոդը տարբեր բրենդների մոտ կարող է տարբեր նշանակություն ունենալ։")}
              </p>
              <div role="group" aria-label={L("Բրենդ")} style={{ display : "flex", flexWrap : "wrap", gap : "8px", marginBottom : "18px" }}>
                {(V.brands ?? []).map((b: any, $i8: number) => (
                  <React.Fragment key={$i8}>
                    <button type="button" className="chip" onClick={b?.pick} aria-pressed={b?.on} style={css(b?.style)}>
                      {b?.name}
                    </button>
                  </React.Fragment>
                ))}
              </div>
              <label htmlFor="code" style={{ display : "block", fontWeight : "700", fontSize : "14px", marginBottom : "8px" }}>
                {L("Սխալի կոդ")}
              </label>
              <input id="code" value={V.code} onChange={V.onCode} placeholder={L("Օր․՝ E6")} maxLength="4" style={{ width : "100%", maxWidth : "280px", height : "60px", border : "1.5px solid #D5E2EE", borderRadius : "16px", padding : "0 18px", fontFamily : "inherit", fontSize : "24px", fontWeight : "800", letterSpacing : ".1em", textTransform : "uppercase", background : "#F7FAFD", color : "#0B2236" }} />
              <div style={{ display : "flex", flexWrap : "wrap", gap : "8px", marginTop : "14px" }}>
                {(V.quick ?? []).map((k: any, $i8: number) => (
                  <React.Fragment key={$i8}>
                    <button type="button" className="chip" onClick={k?.pick} style={{ minHeight : "40px", padding : "0 14px", borderRadius : "12px", border : "1px solid #D5E2EE", background : "#fff", fontFamily : "inherit", fontWeight : "700", cursor : "pointer", color : "#0B2236" }}>
                      {k?.c}
                    </button>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="rv" style={{ flex : "1 1 480px", minWidth : "0" }}>
              <div style={{ background : "#0B2236", borderRadius : "32px", padding : "32px", color : "#fff", position : "relative", overflow : "hidden" }}>
                <div style={{ background : "#A9D3EF", borderRadius : "22px", padding : "22px", position : "relative", overflow : "hidden" }}>
                  <div style={{ background : "#EAF4FB", borderRadius : "14px", height : "120px", position : "relative", overflow : "hidden", display : "flex", alignItems : "center", justifyContent : "flex-end", padding : "0 22px" }}>
                    <div aria-hidden="true" className="scan" style={{ position : "absolute", left : "0", right : "0", top : "10px", height : "2px", background : "rgba(10,111,176,.4)" }} />
                    <div style={{ background : "#0B2236", color : "#FF8A6B", fontFamily : "ui-monospace, Menlo, monospace", fontWeight : "800", fontSize : "40px", padding : "8px 18px", borderRadius : "10px", letterSpacing : ".08em" }}>
                      {V.codeShown}
                      <span className="blink">
                        {"_"}
                      </span>
                    </div>
                  </div>
                  <div style={{ height : "14px", background : "#7FB3D5", borderRadius : "0 0 12px 12px", margin : "0 18px" }} />
                </div>
                <div style={{ marginTop : "24px" }}>
                  <div style={{ fontSize : "13px", letterSpacing : ".1em", textTransform : "uppercase", color : "#9FC3E0", fontWeight : "800" }}>
                    {V.brandName}{" · "}{V.codeShown}
                  </div>
                  <div style={{ fontSize : "24px", fontWeight : "800", margin : "8px 0 10px" }}>
                    {V.resTitle}
                  </div>
                  <div style={{ color : "#C2D3E2", lineHeight : "1.6" }}>
                    {V.resText}
                  </div>
                  <div style={{ display : "flex", flexWrap : "wrap", gap : "10px", marginTop : "22px" }}>
                    <a href={P("/contacts/")} className="btn-o" style={{ padding : "13px 20px", fontSize : "15px" }}>
                      {L("Կանչել վարպետին")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ padding : "72px 24px 96px" }}>
          <div className="rv" style={{ maxWidth : "1280px", margin : "0 auto", background : "#FFF0E2", borderRadius : "36px", padding : "48px", display : "flex", flexWrap : "wrap", gap : "32px", alignItems : "center" }}>
            <span style={{ width : "84px", height : "84px", borderRadius : "26px", background : "#B85A0E", color : "#fff", display : "inline-flex", alignItems : "center", justifyContent : "center", flex : "none" }}>
              <svg aria-hidden="true" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 9v4 M12 17h.01 M10.3 3.9L2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
              </svg>
            </span>
            <div style={{ flex : "1 1 420px" }}>
              <div style={{ fontSize : "28px", fontWeight : "800", letterSpacing : "-0.02em", marginBottom : "10px" }}>
                {L("Անմիջապես անջատեք օդորակիչը հոսանքից, եթե՝")}
              </div>
              <div style={{ display : "grid", gridTemplateColumns : "repeat(auto-fit, minmax(240px, 1fr))", gap : "8px 24px", color : "#3F566B", fontWeight : "600" }}>
                <span>
                  {L("• զգում եք այրվածքի կամ պլաստմասսայի հոտ")}
                </span>
                <span>
                  {L("• նկատում եք ծուխ կամ կայծեր")}
                </span>
                <span>
                  {L("• լսվում են ուժեղ մետաղական ձայներ կամ թրթռոց")}
                </span>
                <span>
                  {L("• ջուրը կաթում է էլեկտրական հանգույցների կամ վարդակի վրա")}
                </span>
              </div>
            </div>
            <a href="tel:+37441559910" className="btn-o" style={{ flex : "none" }}>
              {L("Շտապ կանչ")}
            </a>
          </div>
        </section>
        <Footer lang={this.props.lang ?? 'hy'} />
      </div>
      </>
    );
  }
}
