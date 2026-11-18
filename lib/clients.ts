/**
 * Client logos shown in "Մեզ վստահում են / Нам доверяют" (components/ClientLogos.tsx):
 * Business page and the home page "Ում ենք սպասարկում" section.
 * To add a client: put the logo in public/clients/ and add a line here.
 * `name` is the caption under the logo; optional `full` is the full name used as the image alt text.
 * Empty slots (up to SLOTS) are shown as placeholders until real logos are added.
 */
export const CLIENTS: { name: string; nameRu: string; logo: string; full?: string; fullRu?: string; framed?: boolean }[] = [
  { name: 'Հայկական ծրագրեր', nameRu: 'Армянские программы', logo: '/clients/haykakan-tsragrer.png' },
  { name: 'Զովք սուպերմարկետ', nameRu: 'Супермаркет «Зовк»', logo: '/clients/zovq.png' },
  // Short caption under the logo; full name goes to the image alt text
  { name: 'ՀՊՄՀ', nameRu: 'АГПУ', logo: '/clients/hpmh.png',
    full: 'Հայաստանի պետական մանկավարժական համալսարան', fullRu: 'Армянский государственный педагогический университет' },
  { name: 'Աջափնյակ բժշկական կենտրոն', nameRu: 'Медцентр «Аджапняк»', logo: '/clients/ajapnyak-medical.png',
    fullRu: 'Медицинский центр «Аджапняк»' },
  { name: 'Գազպրոմ Արմենիա', nameRu: 'Газпром Армения', logo: '/clients/gazprom-armenia.png' },
  { name: 'Սոչի Փալաս հյուրանոց', nameRu: 'Отель «Сочи Палас»', logo: '/clients/sochi-palace.png' },
  { name: 'Վեոլիա Ջուր', nameRu: 'Веолия Джур', logo: '/clients/veolia.png' },
  // Photo-style logo (grey background): shown with rounded corners
  { name: 'Պետրոսյան բժշկական կենտրոն', nameRu: 'Медцентр «Петросян»', logo: '/clients/petrosyan.png', framed: true,
    fullRu: 'Медицинский центр «Петросян»' },
  { name: 'Փինկ Բերրի', nameRu: 'Pink Berry', logo: '/clients/pink-berry.png' }
];

export const SLOTS = 8;
