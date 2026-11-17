import Works from '../../../components/Works';
import { pageMeta } from '../../../lib/meta';

export const metadata = pageMeta('works', 'ru');

export default function Page() {
  return <Works lang="ru" />;
}
