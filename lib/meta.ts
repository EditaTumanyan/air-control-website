import type { Metadata } from 'next';
import { OG_IMAGES, OG_IMAGES_RU } from './og';
import { DESCRIPTION, DESCRIPTION_RU } from './site';

/** Page titles per language. Key = URL slug ('' = home). */
export const PAGES: Record<string, { hy: string; ru: string }> = {
  '': { hy: 'Air Control — Օդորակիչների սպասարկման կենտրոն', ru: 'Air Control — Центр обслуживания кондиционеров' },
  services: { hy: 'Ծառայություններ և գներ', ru: 'Услуги и цены' },
  works: { hy: 'Մեր աշխատանքները', ru: 'Наши работы' },
  business: { hy: 'Բիզնեսի համար', ru: 'Для бизнеса' },
  problems: { hy: 'Խնդիրներ և լուծումներ', ru: 'Проблемы и решения' },
  about: { hy: 'Մեր մասին', ru: 'О нас' },
  contacts: { hy: 'Հայտ և կոնտակտներ', ru: 'Заявка и контакты' },
  privacy: { hy: 'Գաղտնիության քաղաքականություն', ru: 'Политика конфиденциальности' }
};

const HOME_OG = {
  hy: {
    title: 'Air Control — Հատուկ առաջարկ՝ լվացում 15 000 ֏ + նվերներ',
    description: 'Օդորակիչի պրոֆեսիոնալ լվացում ընդամենը 15 000 ֏ + ֆրեոնի լիցքավորում և ախտորոշում՝ ՆՎԵՐ։ Երևան և մարզեր, ամեն օր 09:00–24:00։ Զանգ՝ +374 41 55 99 10, +374 91 10 58 87'
  },
  ru: {
    title: 'Air Control — Спецпредложение: чистка 15 000 ֏ + подарки',
    description: 'Профессиональная чистка кондиционера всего за 15 000 ֏ + заправка фреоном и диагностика в ПОДАРОК. Ереван и области, ежедневно 09:00–24:00. Звоните: +374 41 55 99 10, +374 91 10 58 87'
  }
};

export function pageMeta(slug: string, lang: 'hy' | 'ru'): Metadata {
  const t = PAGES[slug][lang];
  const hyUrl = slug ? `/${slug}/` : '/';
  const ruUrl = slug ? `/ru/${slug}/` : '/ru/';
  const url = lang === 'ru' ? ruUrl : hyUrl;
  const home = slug === '';
  const description = lang === 'ru' ? DESCRIPTION_RU : DESCRIPTION;
  return {
    title: home ? { absolute: t } : t,
    description,
    alternates: { canonical: url, languages: { hy: hyUrl, ru: ruUrl, 'x-default': hyUrl } },
    openGraph: {
      type: 'website',
      siteName: 'Air Control',
      locale: lang === 'ru' ? 'ru_RU' : 'hy_AM',
      url,
      title: home ? HOME_OG[lang].title : `${t} — Air Control`,
      description: home ? HOME_OG[lang].description : description,
      images: lang === 'ru' ? OG_IMAGES_RU : OG_IMAGES
    },
    twitter: { card: 'summary_large_image', images: [lang === 'ru' ? '/og-ru.jpg' : '/og.jpg'] }
  };
}
