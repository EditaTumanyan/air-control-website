import About from '../../components/About';
import { pageMeta } from '../../lib/meta';

export const metadata = pageMeta('about', 'hy');

export default function Page() {
  return <About />;
}
