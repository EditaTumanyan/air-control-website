import type { Metadata } from 'next';
import Main from '../components/Main';

export const metadata: Metadata = { alternates: { canonical: '/' } };

export default function Page() {
  return <Main />;
}
