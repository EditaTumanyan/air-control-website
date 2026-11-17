import type { Metadata } from 'next';
import { OG_IMAGES } from '../../lib/og';
import Business from '../../components/Business';

export const metadata: Metadata = { title: 'Բիզնեսի համար', alternates: { canonical: '/business/' }, openGraph: { title: 'Բիզնեսի համար — Air Control', url: '/business/', images: OG_IMAGES } };

export default function Page() {
  return <Business />;
}
