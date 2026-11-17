import type { Metadata, Viewport } from 'next';
import { SITE_URL, DESCRIPTION, PHONE_MAIN } from '../lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Air Control — Օդորակիչների սպասարկման կենտրոն', template: '%s — Air Control' },
  description: DESCRIPTION,
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    locale: 'hy_AM',
    siteName: 'Air Control',
    title: 'Air Control — Օդորակիչների սպասարկման կենտրոն',
    description: DESCRIPTION,
    images: ['/assets/work2-poster.jpg']
  },
  alternates: { canonical: '/' }
};

export const viewport: Viewport = { themeColor: '#0B2236', width: 'device-width', initialScale: 1 };

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  name: 'Air Control',
  description: DESCRIPTION,
  url: SITE_URL,
  telephone: PHONE_MAIN.replace(/\s/g, ''),
  areaServed: ['Երևան', 'Կոտայք', 'Արարատ', 'Արմավիր', 'Արագածոտն'],
  address: { '@type': 'PostalAddress', addressLocality: 'Yerevan', addressCountry: 'AM' },
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '09:00', closes: '22:00' }],
  priceRange: '֏֏'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hy">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Noto+Sans+Armenian:wght@400;500;600;700;800&family=Playfair+Display:wght@800;900&display=swap" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
