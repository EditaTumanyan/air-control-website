import About from '../../../components/About';
import { pageMeta } from '../../../lib/meta';

export const metadata = pageMeta('about', 'ru');

export default function Page() {
  return <About lang="ru" />;
}
