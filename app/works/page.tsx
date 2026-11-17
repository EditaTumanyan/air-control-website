import Works from '../../components/Works';
import { pageMeta } from '../../lib/meta';

export const metadata = pageMeta('works', 'hy');

export default function Page() {
  return <Works />;
}
