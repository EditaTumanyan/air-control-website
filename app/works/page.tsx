import type { Metadata } from 'next';
import Works from '../../components/Works';

export const metadata: Metadata = { title: 'Մեր աշխատանքները', alternates: { canonical: '/works/' }, openGraph: { title: 'Մեր աշխատանքները — Air Control', url: '/works/' } };

export default function Page() {
  return <Works />;
}
