import Booking from '../../components/Booking';
import { pageMeta } from '../../lib/meta';

export const metadata = pageMeta('contacts', 'hy');

export default function Page() {
  return <Booking />;
}
