import type { Metadata } from 'next';
import Problems from '../../components/Problems';

export const metadata: Metadata = { title: 'Խնդիրներ և լուծումներ', alternates: { canonical: '/problems/' }, openGraph: { title: 'Խնդիրներ և լուծումներ — Air Control', url: '/problems/' } };

export default function Page() {
  return <Problems />;
}
