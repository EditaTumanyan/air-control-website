import Main from '../../components/Main';
import { pageMeta } from '../../lib/meta';

export const metadata = pageMeta('', 'ru');

export default function Page() {
  return <Main lang="ru" />;
}
