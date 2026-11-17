import Problems from '../../../components/Problems';
import { pageMeta } from '../../../lib/meta';

export const metadata = pageMeta('problems', 'ru');

export default function Page() {
  return <Problems lang="ru" />;
}
