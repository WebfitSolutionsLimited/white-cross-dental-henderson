import { pageMeta } from '@/lib/seo';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import BookingBar from '@/components/BookingBar';

export const metadata = pageMeta({
  title: 'About Us',
  description: 'About White Cross Dental Henderson, a seven-day Accident & Emergency and general dental clinic on Lincoln Road.',
  path: '/about-us'
});

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" eyebrow="White Cross Dental Henderson" />
      <section className="section">
        <div className="container about-grid">
          <div>
            <span className="eyebrow">Know about why we are here</span>
            <h2>Seven-day dental care in Henderson</h2>
            <p>White Cross Dental is a seven day Accident &amp; Emergency clinic based on Lincoln Road in Henderson. We also provide a full range of general dental services including hygiene, cosmetic, surgical and endodontic treatments at very affordable prices.</p>
            <p>Please contact us on <strong>(09) 837-2915</strong> or send an email to <a href="mailto:reception@dentisthenderson.co.nz">reception@dentisthenderson.co.nz</a> for more info.</p>
            <div className="inline-actions">
              <a className="button" href="https://apac.dentalhub.online/soe/new/%20?pid=NZWCH01" target="_blank" rel="noopener noreferrer">Book Online 24/7</a>
              <a className="text-link" href="tel:+6498372915">Call reception</a>
            </div>
          </div>
          <div className="about-image">
            <Image src="/images/about-user.png" alt="Dental team and patient" fill sizes="(max-width:900px) 100vw, 48vw" className="cover" />
          </div>
        </div>
      </section>
      <BookingBar />
    </>
  );
}
