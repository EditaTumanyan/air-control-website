import type { Metadata } from 'next';
import { OG_IMAGES } from '../../lib/og';
import Booking from '../../components/Booking';

export const metadata: Metadata = { title: 'Հայտ և կոնտակտներ', alternates: { canonical: '/contacts/' }, openGraph: { title: 'Հայտ և կոնտակտներ — Air Control', url: '/contacts/', images: OG_IMAGES } };

export default function Page() {
  return <Booking />;
}
