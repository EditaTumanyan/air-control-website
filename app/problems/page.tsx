import type { Metadata } from 'next';
import { OG_IMAGES } from '../../lib/og';
import Problems from '../../components/Problems';

export const metadata: Metadata = { title: 'Խնդիրներ և լուծումներ', alternates: { canonical: '/problems/' }, openGraph: { title: 'Խնդիրներ և լուծումներ — Air Control', url: '/problems/', images: OG_IMAGES } };

export default function Page() {
  return <Problems />;
}
