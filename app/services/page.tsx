import type { Metadata } from 'next';
import { OG_IMAGES } from '../../lib/og';
import Services from '../../components/Services';

export const metadata: Metadata = { title: 'Ծառայություններ և գներ', alternates: { canonical: '/services/' }, openGraph: { title: 'Ծառայություններ և գներ — Air Control', url: '/services/', images: OG_IMAGES } };

export default function Page() {
  return <Services />;
}
