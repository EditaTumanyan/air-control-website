import Privacy from '../../../components/Privacy';
import { pageMeta } from '../../../lib/meta';

export const metadata = pageMeta('privacy', 'ru');

export default function Page() {
  return <Privacy lang="ru" />;
}
