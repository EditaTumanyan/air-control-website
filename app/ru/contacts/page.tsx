import Booking from '../../../components/Booking';
import { pageMeta } from '../../../lib/meta';

export const metadata = pageMeta('contacts', 'ru');

export default function Page() {
  return <Booking lang="ru" />;
}
