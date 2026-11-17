import type { Metadata } from 'next';
import Booking from '../../components/Booking';

export const metadata: Metadata = { title: 'Հայտ և կոնտակտներ', alternates: { canonical: '/contacts/' }, openGraph: { title: 'Հայտ և կոնտակտներ — Air Control', url: '/contacts/' } };

export default function Page() {
  return <Booking />;
}
