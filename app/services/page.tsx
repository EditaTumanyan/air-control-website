import type { Metadata } from 'next';
import Services from '../../components/Services';

export const metadata: Metadata = { title: 'Ծառայություններ և գներ', alternates: { canonical: '/services/' }, openGraph: { title: 'Ծառայություններ և գներ — Air Control', url: '/services/' } };

export default function Page() {
  return <Services />;
}
