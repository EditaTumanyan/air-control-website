import type { Metadata } from 'next';
import { OG_IMAGES } from '../../lib/og';
import Works from '../../components/Works';

export const metadata: Metadata = { title: 'Մեր աշխատանքները', alternates: { canonical: '/works/' }, openGraph: { title: 'Մեր աշխատանքները — Air Control', url: '/works/', images: OG_IMAGES } };

export default function Page() {
  return <Works />;
}
