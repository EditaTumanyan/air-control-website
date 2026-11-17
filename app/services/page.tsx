import Services from '../../components/Services';
import { pageMeta } from '../../lib/meta';

export const metadata = pageMeta('services', 'hy');

export default function Page() {
  return <Services />;
}
