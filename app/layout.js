import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ScrollTop from '@/components/ScrollTop';
import Analytics from '@/components/Analytics';
import { pageMeta, SITE_URL } from '@/lib/seo';

const home = pageMeta({
  description: 'Seven-day dental care in Henderson, Auckland.',
  path: '/'
});

export const metadata = {
  metadataBase: new URL('https://dentisthenderson.co.nz'),
  title: {
    default: 'White Cross Dental Henderson | 7 Day Dentist',
    template: '%s | White Cross Dental Henderson'
  },
  description: 'Seven-day dental clinic on Lincoln Road, Henderson offering general dentistry, emergencies, ACC, cosmetic, surgical and endodontic treatment.',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }]
  },
  openGraph: home.openGraph,
  twitter: home.twitter,
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
    : {})
};

export default function RootLayout({ children }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': `${SITE_URL}/#dentist`,
    name: 'White Cross Dental Henderson',
    url: SITE_URL,
    image: `${SITE_URL}/images/hero.jpg`,
    logo: `${SITE_URL}/images/logo.png`,
    sameAs: ['https://www.facebook.com/p/White-Cross-Dental-Henderson-100064025121894/'],
    telephone: '+64-9-837-2915',
    email: 'reception@dentisthenderson.co.nz',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '131 Lincoln Road',
      addressLocality: 'Henderson',
      addressRegion: 'Auckland',
      postalCode: '0610',
      addressCountry: 'NZ'
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '19:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '17:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '08:00', closes: '16:00' }
    ]
  };

  return (
    <html lang="en-NZ">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <ScrollTop />
        <Analytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
