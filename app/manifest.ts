import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Air Control — Օդորակիչների սպասարկման կենտրոն',
    short_name: 'Air Control',
    start_url: '/',
    display: 'browser',
    background_color: '#0B2236',
    theme_color: '#0B2236',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }
    ]
  };
}
