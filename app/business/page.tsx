import type { Metadata } from 'next';
import Business from '../../components/Business';

export const metadata: Metadata = { title: 'Բիզնեսի համար', alternates: { canonical: '/business/' }, openGraph: { title: 'Բիզնեսի համար — Air Control', url: '/business/' } };

export default function Page() {
  return <Business />;
}
