/**
 * Client logos shown in "Մեզ վստահում են / Нам доверяют" on the Business page.
 * To add a client: put the logo in public/clients/ and add a line here.
 * Empty slots (up to SLOTS) are shown as placeholders until real logos are added.
 */
export const CLIENTS: { name: string; nameRu: string; logo: string }[] = [
  { name: 'Հայկական ծրագրեր', nameRu: 'Армянские программы', logo: '/clients/haykakan-tsragrer.png' }
];

export const SLOTS = 8;
