import Business from '../../../components/Business';
import { pageMeta } from '../../../lib/meta';

export const metadata = pageMeta('business', 'ru');

export default function Page() {
  return <Business lang="ru" />;
}
