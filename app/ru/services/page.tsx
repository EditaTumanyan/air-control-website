import Services from '../../../components/Services';
import { pageMeta } from '../../../lib/meta';

export const metadata = pageMeta('services', 'ru');

export default function Page() {
  return <Services lang="ru" />;
}
