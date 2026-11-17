import type { Metadata, Viewport } from 'next';
import { SITE_URL, DESCRIPTION, PHONE_MAIN } from '../lib/site';
import { OG_IMAGES } from '../lib/og';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Air Control — Օդորակիչների սպասարկման կենտրոն', template: '%s — Air Control' },
  description: DESCRIPTION,
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    locale: 'hy_AM',
    siteName: 'Air Control',
    title: 'Air Control — Հատուկ առաջարկ՝ լվացում 15 000 ֏ + նվերներ',
    description: 'Օդորակիչի պրոֆեսիոնալ լվացում ընդամենը 15 000 ֏ + ֆրեոնի լիցքավորում և ախտորոշում՝ ՆՎԵՐ։ Երևան և մարզեր, ամեն օր 09:00–24:00։ Զանգ՝ +374 41 55 99 10, +374 91 10 58 87',
    images: OG_IMAGES
  },
  twitter: { card: 'summary_large_image', images: ['/og.jpg'] },
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
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '09:00', closes: '23:59' }],
  priceRange: '֏֏'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hy">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Noto+Sans+Armenian:wght@400;500;600;700;800&family=Playfair+Display:wght@800;900&display=swap" />
        {/* Small phones: keep long Armenian headings inside the screen (overrides page styles) */}
        <style>{'@media (max-width:440px){html .h1x{font-size:clamp(26px,7.8vw,34px) !important;overflow-wrap:break-word}html .h2x{font-size:clamp(22px,7.2vw,30px) !important;overflow-wrap:break-word}}'}</style>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
