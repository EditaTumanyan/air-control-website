import type { Metadata } from 'next';
import { OG_IMAGES } from '../../lib/og';
import Privacy from '../../components/Privacy';

export const metadata: Metadata = { title: 'Գաղտնիության քաղաքականություն', alternates: { canonical: '/privacy/' }, openGraph: { title: 'Գաղտնիության քաղաքականություն — Air Control', url: '/privacy/', images: OG_IMAGES } };

export default function Page() {
  return <Privacy />;
}
