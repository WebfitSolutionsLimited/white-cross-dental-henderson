export const SITE_URL = 'https://dentisthenderson.co.nz';
export const SITE_NAME = 'White Cross Dental Henderson';
export const OG_IMAGE = '/images/hero.jpg';

// Builds per-page metadata so every page gets its own canonical URL and
// social-share tags. Titles/descriptions are passed in unchanged.
export function pageMeta({ title, description, path }) {
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      title: title ? `${title} | ${SITE_NAME}` : SITE_NAME,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: 'en_NZ',
      type: 'website',
      images: [{ url: OG_IMAGE, alt: SITE_NAME }]
    },
    twitter: {
      card: 'summary_large_image',
      title: title ? `${title} | ${SITE_NAME}` : SITE_NAME,
      description,
      images: [OG_IMAGE]
    }
  };
}
