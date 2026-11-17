import type { MetadataRoute } from 'next';
import { SITE_URL } from '../lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', 'services/', 'works/', 'business/', 'problems/', 'about/', 'contacts/'];
  return pages.map((p, i) => ({ url: `${SITE_URL}/${p}`, changeFrequency: 'monthly', priority: i === 0 ? 1 : 0.8 }));
}
