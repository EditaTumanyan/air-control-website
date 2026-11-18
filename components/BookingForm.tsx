// @ts-nocheck
'use client';
// BookingForm — generated from the Air Control design. Edit the texts and layout here.
import React from 'react';
import { DCLogic, css, muteVideo } from '../lib/dc';
import { sendForm, sendErrorText } from '../lib/lead';


const STYLES = "body{margin:0}";

export default class BookingForm extends DCLogic {
  componentDidMount() {
    if (/offer/.test(location.hash + location.search)) this.setState({ offerUrl: true });
  }

  renderVals() {
    const s = this.state || {};
    const lang = this.props.lang ?? 'hy';
    const T = {
      hy: { title: 'Հայտի ձև', sub: 'Լրացրեք 1 րոպեում․ * դաշտերը պարտադիր են', typeLabel: 'Հաճախորդի տեսակ', priv: 'Անհատ', biz: 'Բիզնես',
        name: 'Անուն', namePh: 'Ձեր անունը', phone: 'Հեռախոս', company: 'Ընկերության անվանում', units: 'Օդորակիչների քանակ',
        service: 'Ծառայություն', svcPh: 'Ընտրեք ծառայությունը', addr: 'Հասցե կամ թաղամաս', addrPh: 'Օր․՝ Արաբկիր, Կոմիտաս 10', urg: 'Որքան շտապ է', urgOpts: ['Շտապ՝ նույն օրը, եթե հնարավոր է','1–2 օրվա ընթացքում','Պլանային, ժամկետը կհամաձայնեցնենք'], day: 'Օր', time: 'Ժամ',
        msg: 'Նկարագրեք խնդիրը', msgPh: 'Օր․՝ չի սառեցնում, էկրանին E1 է', photo: 'Կցել լուսանկար կամ տեսանյութ', photoHint: 'Կօգնի վարպետին նախապես գնահատել աշխատանքը',
        consent: 'Համաձայն եմ անձնական տվյալների մշակմանը՝ համաձայն ', consentLink: 'գաղտնիության քաղաքականության', submit: 'Ուղարկել հայտը',
        okTitle: 'Շնորհակալություն, հայտն ընդունված է', okText: 'Մեր մասնագետը կզանգի ձեզ՝ ճշտելու խնդիրը և համաձայնեցնելու վարպետի այցը։', when: 'Ժամանակ', again: 'Նոր հայտ',
        today: 'Այսօր', tomorrow: 'Վաղը', wd: ['Կիր','Երկ','Երք','Չրք','Հնգ','Ուրբ','Շբթ'], mo: ['հունվ','փետր','մարտ','ապր','մայիս','հունիս','հուլիս','օգոս','սեպտ','հոկտ','նոյ','դեկտ'],
        offerTitle: 'Հատուկ առաջարկ՝ լվացում 15 000 ֏', offerGifts: 'Նվեր՝ ֆրեոնի լիցքավորում (մինչև 300 գ) և ախտորոշում', svcs: ['Հատուկ առաջարկ՝ լվացում 15 000 ֏ + նվերներ','Տեղադրում','Ապամոնտաժում','Վերանորոգում','Լվացում և ախտահանում','Ֆրեոնի լիցքավորում','Ֆրեոնի արտահոսքի հայտնաբերում և վերացում','Խողովակաշարի մոնտաժ','VRF համակարգերի սպասարկում'] },
      ru: { title: 'Форма заявки', sub: 'Заполните за 1 минуту · поля * обязательны', typeLabel: 'Тип клиента', priv: 'Частное лицо', biz: 'Бизнес',
        name: 'Имя', namePh: 'Ваше имя', phone: 'Телефон', company: 'Название компании', units: 'Количество кондиционеров',
        service: 'Услуга', svcPh: 'Выберите услугу', addr: 'Адрес или район', addrPh: 'Напр.: Арабкир, Комитаса 10', urg: 'Насколько срочно', urgOpts: ['Срочно — в тот же день, если возможно','В течение 1–2 дней','Планово, срок согласуем'], day: 'День', time: 'Время',
        msg: 'Опишите проблему', msgPh: 'Напр.: не охлаждает, на экране E1', photo: 'Прикрепить фото или видео', photoHint: 'Поможет мастеру заранее оценить работу',
        consent: 'Согласен на обработку персональных данных в соответствии с ', consentLink: 'политикой конфиденциальности', submit: 'Отправить заявку',
        okTitle: 'Спасибо, заявка принята', okText: 'Наш специалист перезвонит вам, чтобы уточнить проблему и согласовать визит мастера.', when: 'Время', again: 'Новая заявка',
        today: 'Сегодня', tomorrow: 'Завтра', wd: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'], mo: ['янв','фев','мар','апр','мая','июн','июл','авг','сен','окт','ноя','дек'],
        offerTitle: 'Спецпредложение: чистка 15 000 ֏', offerGifts: 'В подарок: заправка фреоном (до 300 г) и диагностика', svcs: ['Спецпредложение: чистка 15 000 ֏ + подарки','Установка','Демонтаж','Ремонт','Чистка и дезинфекция','Заправка фреоном','Поиск и устранение утечки фреона','Монтаж трассы','Обслуживание VRF-систем'] }
    };
    const t = T[lang] || T.hy;
    const type = s.type || (this.props.defaultType ?? 'private');
    const seg = (on) => 'min-height: 48px; border: 0; border-radius: 14px; font-family: inherit; font-size: 15px; font-weight: 800; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 8px; transition: background .25s, color .25s, box-shadow .25s; ' + (on ? 'background: #fff; color: #0A6FB0; box-shadow: 0 6px 16px -8px rgba(11,34,54,.35)' : 'background: transparent; color: #4A5F73');
    const offerInit = !!this.props.offer || !!s.offerUrl;
    const svcVal = s.svc != null ? String(s.svc) : (offerInit ? '0' : '');
    return {
      t,
      sent: !!s.sent, notSent: !s.sent,
      isPriv: type === 'private', isBiz: type === 'business',
      privStyle: seg(type === 'private'), bizStyle: seg(type === 'business'),
      setPriv: () => this.setState({ type: 'private' }), setBiz: () => this.setState({ type: 'business' }),
      services: t.svcs.map((l, i) => ({ v: String(i), l })),
      svcVal, isOffer: svcVal === '0',
      onSvc: (e) => this.setState({ svc: e.target.value === '' ? null : +e.target.value }),
      fileLabel: s.file || t.photo,
      onFile: (e) => { const f = e.target.files && e.target.files[0]; this.setState({ file: f ? f.name : '' }); },
      submit: (e) => { e.preventDefault(); if (s.sending) return; const form = e.currentTarget; this.setState({ sending: true }); sendForm('booking', form, { type, service: svcVal === '' ? '' : t.svcs[+svcVal] }).then(() => this.setState({ sent: true, sending: false })).catch(() => { this.setState({ sending: false }); alert(sendErrorText(this.props.lang)); }); },
      reset: () => this.setState({ sent: false }),
      summaryService: svcVal === '' ? '' : t.svcs[+svcVal]
    };
  }

  render() {
    const V: any = this.renderVals() || {};
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="bf" style={{ width : "100%", fontFamily : "'Manrope', 'Noto Sans Armenian', system-ui, sans-serif", color : "#0B2236", background : "#fff", borderRadius : "32px", border : "1px solid #E1ECF5", padding : "36px", boxShadow : "0 40px 80px -48px rgba(11,34,54,.45)" }}>
        {V.sent ? (
          <>
            <div className="bub" style={{ textAlign : "center", padding : "48px 12px" }}>
              <svg aria-hidden="true" width="96" height="96" viewBox="0 0 96 96" style={{ margin : "0 auto", display : "block" }}>
                <circle cx="48" cy="48" r="44" fill="#E8F5EE" />
                <circle cx="48" cy="48" r="32" fill="#1F7A4D" />
                <path className="check-draw" d="M34 49l9 9 19-20" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div style={{ fontSize : "30px", fontWeight : "800", letterSpacing : "-0.02em", margin : "24px 0 10px" }}>
                {V.t?.okTitle}
              </div>
              <p style={{ margin : "0 auto 24px", maxWidth : "420px", color : "#4A5F73", lineHeight : "1.6", fontSize : "17px" }}>
                {V.t?.okText}
              </p>
              <div style={{ display : "inline-flex", flexDirection : "column", gap : "6px", background : "#F4F8FC", borderRadius : "18px", padding : "16px 22px", textAlign : "left", fontSize : "15px" }}>
                <span>
                  <b>
                    {V.t?.service}{":"}
                  </b>
                  {" "}{V.summaryService}
                </span>
              </div>
              <div style={{ marginTop : "26px" }}>
                <button type="button" onClick={V.reset} className="btn-w" style={{ padding : "14px 22px" }}>
                  {V.t?.again}
                </button>
              </div>
            </div>
          </>
        ) : null}
        {V.notSent ? (
          <>
            <form onSubmit={V.submit} style={{ display : "flex", flexDirection : "column", gap : "22px" }}>
              <div>
                <div style={{ fontSize : "26px", fontWeight : "800", letterSpacing : "-0.02em" }}>
                  {V.t?.title}
                </div>
                <div style={{ color : "#4A5F73", marginTop : "6px" }}>
                  {V.t?.sub}
                </div>
              </div>
              <div role="group" aria-label={V.t?.typeLabel} style={{ display : "grid", gridTemplateColumns : "repeat(2, minmax(0, 1fr))", gap : "6px", background : "#F2F7FB", borderRadius : "18px", padding : "6px" }}>
                <button type="button" onClick={V.setPriv} aria-pressed={V.isPriv} style={css(V.privStyle)}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 11l9-7 9 7" />
                    <path d="M5 10v10h14V10" />
                  </svg>
                  {V.t?.priv}
                </button>
                <button type="button" onClick={V.setBiz} aria-pressed={V.isBiz} style={css(V.bizStyle)}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 21V5l8-2v18" />
                    <path d="M12 9h8v12" />
                  </svg>
                  {V.t?.biz}
                </button>
              </div>
              <div style={{ display : "grid", gridTemplateColumns : "repeat(auto-fit, minmax(220px, 1fr))", gap : "16px" }}>
                <div>
                  <label htmlFor="bf-name" style={{ display : "block", fontWeight : "700", fontSize : "14px", marginBottom : "8px" }}>
                    {V.t?.name}{" *"}
                  </label>
                  <input id="bf-name" required autoComplete="name" placeholder={V.t?.namePh} style={{ width : "100%", height : "54px", border : "1.5px solid #D5E2EE", borderRadius : "14px", padding : "0 16px", fontFamily : "inherit", fontSize : "16px", background : "#F7FAFD", color : "#0B2236" }} />
                </div>
                <div>
                  <label htmlFor="bf-phone" style={{ display : "block", fontWeight : "700", fontSize : "14px", marginBottom : "8px" }}>
                    {V.t?.phone}{" *"}
                  </label>
                  <input id="bf-phone" type="tel" required autoComplete="tel" placeholder="+374 __ ___ ___" style={{ width : "100%", height : "54px", border : "1.5px solid #D5E2EE", borderRadius : "14px", padding : "0 16px", fontFamily : "inherit", fontSize : "16px", background : "#F7FAFD", color : "#0B2236" }} />
                </div>
              </div>
              {V.isBiz ? (
                <>
                  <div className="bub" style={{ display : "grid", gridTemplateColumns : "repeat(auto-fit, minmax(220px, 1fr))", gap : "16px" }}>
                    <div>
                      <label htmlFor="bf-co" style={{ display : "block", fontWeight : "700", fontSize : "14px", marginBottom : "8px" }}>
                        {V.t?.company}
                      </label>
                      <input id="bf-co" autoComplete="organization" style={{ width : "100%", height : "54px", border : "1.5px solid #D5E2EE", borderRadius : "14px", padding : "0 16px", fontFamily : "inherit", fontSize : "16px", background : "#F7FAFD", color : "#0B2236" }} />
                    </div>
                    <div>
                      <label htmlFor="bf-units" style={{ display : "block", fontWeight : "700", fontSize : "14px", marginBottom : "8px" }}>
                        {V.t?.units}
                      </label>
                      <input id="bf-units" type="number" min="1" placeholder="5" style={{ width : "100%", height : "54px", border : "1.5px solid #D5E2EE", borderRadius : "14px", padding : "0 16px", fontFamily : "inherit", fontSize : "16px", background : "#F7FAFD", color : "#0B2236" }} />
                    </div>
                  </div>
                </>
              ) : null}
              <div style={{ display : "grid", gridTemplateColumns : "repeat(auto-fit, minmax(220px, 1fr))", gap : "16px" }}>
                <div>
                  <label htmlFor="bf-svc" style={{ display : "block", fontWeight : "700", fontSize : "14px", marginBottom : "8px" }}>
                    {V.t?.service}{" *"}
                  </label>
                  <select id="bf-svc" required value={V.svcVal} onChange={V.onSvc} style={{ width : "100%", height : "54px", border : "1.5px solid #D5E2EE", borderRadius : "14px", padding : "0 14px", fontFamily : "inherit", fontSize : "16px", background : "#F7FAFD", color : "#0B2236" }}>
                    <option value="">
                      {V.t?.svcPh}
                    </option>
                    {(V.services ?? []).map((o: any, $i10: number) => (
                      <React.Fragment key={$i10}>
                        <option value={o?.v}>
                          {o?.l}
                        </option>
                      </React.Fragment>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="bf-addr" style={{ display : "block", fontWeight : "700", fontSize : "14px", marginBottom : "8px" }}>
                    {V.t?.addr}{" *"}
                  </label>
                  <input id="bf-addr" required autoComplete="street-address" placeholder={V.t?.addrPh} style={{ width : "100%", height : "54px", border : "1.5px solid #D5E2EE", borderRadius : "14px", padding : "0 16px", fontFamily : "inherit", fontSize : "16px", background : "#F7FAFD", color : "#0B2236" }} />
                </div>
              </div>
              <div>
                <label htmlFor="bf-msg" style={{ display : "block", fontWeight : "700", fontSize : "14px", marginBottom : "8px" }}>
                  {V.t?.msg}
                </label>
                <textarea id="bf-msg" rows="3" placeholder={V.t?.msgPh} style={{ width : "100%", border : "1.5px solid #D5E2EE", borderRadius : "14px", padding : "14px 16px", fontFamily : "inherit", fontSize : "16px", background : "#F7FAFD", color : "#0B2236", resize : "vertical" }} />
              </div>
              <label style={{ display : "flex", alignItems : "center", gap : "14px", border : "1.5px dashed #9FC3E0", borderRadius : "16px", padding : "14px 16px", cursor : "pointer", background : "#F7FAFD" }}>
                <span style={{ width : "44px", height : "44px", borderRadius : "12px", background : "#EAF4FB", display : "inline-flex", alignItems : "center", justifyContent : "center", flex : "none" }}>
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A6FB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
                    <circle cx="12" cy="13" r="3.5" />
                  </svg>
                </span>
                <span style={{ flex : "1" }}>
                  <span style={{ display : "block", fontWeight : "700" }}>
                    {V.fileLabel}
                  </span>
                  <span style={{ display : "block", fontSize : "13px", color : "#4A5F73" }}>
                    {V.t?.photoHint}
                  </span>
                </span>
                <input type="file" name="file" accept="image/*,video/*" onChange={V.onFile} style={{ position : "absolute", width : "1px", height : "1px", opacity : "0" }} />
              </label>
              {V.isOffer ? (
                <>
                  <div className="bub" style={{ display : "flex", alignItems : "center", gap : "14px", background : "#FFF1E4", border : "1.5px solid #F6C9A0", borderRadius : "16px", padding : "14px 16px" }}>
                    <span className="ann-gift" style={{ width : "44px", height : "44px", borderRadius : "12px", background : "#F28A2E", color : "#0B2236", display : "inline-flex", alignItems : "center", justifyContent : "center", flex : "none" }}>
                      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8h18v4H3z M5 12v9h14v-9 M12 8v13 M12 8c-2-4-6-4-6-1.5S10 8 12 8z M12 8c2-4 6-4 6-1.5S14 8 12 8z" />
                      </svg>
                    </span>
                    <span style={{ flex : "1" }}>
                      <span style={{ display : "block", fontWeight : "800" }}>
                        {V.t?.offerTitle}
                      </span>
                      <span style={{ display : "block", fontSize : "14px", color : "#3F566B" }}>
                        {V.t?.offerGifts}
                      </span>
                    </span>
                  </div>
                </>
              ) : null}
              <label style={{ display : "flex", gap : "12px", alignItems : "flex-start", fontSize : "14px", color : "#4A5F73", lineHeight : "1.5", cursor : "pointer" }}>
                <input type="checkbox" required style={{ width : "20px", height : "20px", margin : "1px 0 0", accentColor : "#0A6FB0", flex : "none" }} />
                <span>{V.t?.consent}<a href={this.props.lang === "ru" ? "/ru/privacy/" : "/privacy/"} target="_blank" rel="noopener" style={{ color : "#0A6FB0", textDecoration : "underline" }}>{V.t?.consentLink}</a></span>
              </label>
              <button type="submit" className="btn-o" style={{ width : "100%", padding : "19px 28px", fontSize : "17px" }}>
                {V.t?.submit}{" "}
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
