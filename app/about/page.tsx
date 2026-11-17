import type { Metadata } from 'next';
import { OG_IMAGES } from '../../lib/og';
import About from '../../components/About';

export const metadata: Metadata = { title: 'Մեր մասին', alternates: { canonical: '/about/' }, openGraph: { title: 'Մեր մասին — Air Control', url: '/about/', images: OG_IMAGES } };

export default function Page() {
  return <About />;
}
