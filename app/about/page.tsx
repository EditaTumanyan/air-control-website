import type { Metadata } from 'next';
import About from '../../components/About';

export const metadata: Metadata = { title: 'Մեր մասին', alternates: { canonical: '/about/' }, openGraph: { title: 'Մեր մասին — Air Control', url: '/about/' } };

export default function Page() {
  return <About />;
}
