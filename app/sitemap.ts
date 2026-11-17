import type { MetadataRoute } from 'next';
import { SITE_URL } from '../lib/site';

export const dynamic = 'force-static';

const PAGES = ['', 'services/', 'works/', 'business/', 'problems/', 'about/', 'contacts/', 'privacy/'];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap((p, i) => {
    const hy = `${SITE_URL}/${p}`;
    const ru = `${SITE_URL}/ru/${p}`;
    const alternates = { languages: { hy, ru } };
    const priority = i === 0 ? 1 : 0.8;
    return [
      { url: hy, changeFrequency: 'monthly' as const, priority, alternates },
      { url: ru, changeFrequency: 'monthly' as const, priority: priority - 0.1, alternates }
    ];
  });
}
