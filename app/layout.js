import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ScrollTop from '@/components/ScrollTop';

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
  openGraph: {
    title: 'White Cross Dental Henderson',
    description: 'Seven-day dental care in Henderson, Auckland.',
    url: 'https://dentisthenderson.co.nz',
    siteName: 'White Cross Dental Henderson',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'White Cross Dental Henderson',
    url: 'https://dentisthenderson.co.nz',
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
