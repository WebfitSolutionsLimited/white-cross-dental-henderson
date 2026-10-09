import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ScrollTop from '@/components/ScrollTop';
import Analytics from '@/components/Analytics';
import { pageMeta, SITE_URL } from '@/lib/seo';

const home = pageMeta({
  description: 'Henderson dentist open 7 days on Lincoln Road. Emergency and ACC dental care, check-ups, root canal, dentures and cosmetic treatment. Book online 24/7.',
  path: '/'
});

export const metadata = {
  metadataBase: new URL('https://www.dentisthenderson.co.nz'),
  title: {
    default: 'Dentist Henderson, Open 7 Days | White Cross Dental Henderson',
    template: '%s | White Cross Dental Henderson'
  },
  description: 'Henderson dentist open 7 days on Lincoln Road. Emergency and ACC dental care, check-ups, root canal, dentures and cosmetic treatment. Book online 24/7.',
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
    hasMap: 'https://maps.google.com/maps?q=131%20Lincoln%20Road%2C%20Henderson%2C%20Auckland%2C%200610',
    areaServed: [
      { '@type': 'Place', name: 'Henderson, Auckland' },
      { '@type': 'Place', name: 'West Auckland' }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dental services',
      itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Consultation & Examination' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Dental Care' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ACC Dental Injury Treatment' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Root Canal Treatment' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dentures' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Oral Surgery & Extractions' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cosmetic Dentistry' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Restorative Dentistry' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'General Dentistry' } }
      ]
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
