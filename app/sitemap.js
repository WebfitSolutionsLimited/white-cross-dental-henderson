export default function sitemap() {
  const base = 'https://dentisthenderson.co.nz';
  return [
    { url: base, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/about-us`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/dental-services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/contact-us`, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
