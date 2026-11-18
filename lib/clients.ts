/**
 * Client logos shown in "Մեզ վստահում են / Нам доверяют" on the Business page.
 * To add a client: put the logo in public/clients/ and add a line here.
 * `name` is the caption under the logo; optional `full` is the full name used as the image alt text.
 * Empty slots (up to SLOTS) are shown as placeholders until real logos are added.
 */
export const CLIENTS: { name: string; nameRu: string; logo: string; full?: string; fullRu?: string }[] = [
  { name: 'Հայկական ծրագրեր', nameRu: 'Армянские программы', logo: '/clients/haykakan-tsragrer.png' },
  { name: 'Զովք սուպերմարկետ', nameRu: 'Супермаркет «Зовк»', logo: '/clients/zovq.png' },
  // Short caption under the logo; full name goes to the image alt text
  { name: 'ՀՊՄՀ', nameRu: 'АГПУ', logo: '/clients/hpmh.png',
    full: 'Հայաստանի պետական մանկավարժական համալսարան', fullRu: 'Армянский государственный педагогический университет' }
];

export const SLOTS = 8;
