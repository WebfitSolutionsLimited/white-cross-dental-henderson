import Image from 'next/image';
import Link from 'next/link';
import BookingBar from '@/components/BookingBar';
import MinorBookingNotice from '@/components/MinorBookingNotice';

const BOOKING_URL = 'https://apac.dentalhub.online/soe/new/%20?pid=NZWCH01';

const quickServices = [
  { icon: '◉', title: '7 Day Family Dentist', hover: 'Convenient dental care across the week for Henderson families.' },
  { icon: '✚', title: 'Dental Emergencies', hover: 'Urgent dental problem? Call us or book online to find the next available appointment.' },
  { icon: '✚', title: 'Accidents & ACC', hover: 'ACC registered clinic providing treatment for eligible dental injuries and accidents.' },
];

const serviceCards = [
  ['Examinations', 'Routine full check-ups and examinations at affordable prices.'],
  ['General Treatment', 'Services covering all aspects of general dentistry.'],
  ['Special Treatment', 'Special services and clinical interests available at the practice.'],
  ['Accident Emergency', 'ACC registered clinic with on-site dental accident services.'],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Quality dental services</span>
            <h1>We Provide Top Notch <span>Dental Services</span></h1>
            <p>For Reliable + Cost Dental Treatment</p>
            <div className="hero-actions">
              <a className="button" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book Online 24/7</a>
              <a className="text-link" href="tel:+6498372915">Call (09) 837-2915</a>
            </div>
            <MinorBookingNotice />
            <div className="hero-trust">
              <span>7 day clinic</span><span>ACC registered</span><span>Lincoln Road, Henderson</span>
            </div>
          </div>
          <div className="hero-image-wrap">
            <Image src="/images/hero-user.png" alt="Dental treatment at White Cross Dental Henderson" fill priority sizes="(max-width: 900px) 100vw, 45vw" className="cover" />
            <div className="hero-badge"><strong>Open 7 days</strong><span>Public holiday hours may vary</span></div>
          </div>
        </div>
      </section>

      <section className="quick-services section">
        <div className="container">
          <div className="quick-grid">
            {quickServices.map((item) => (
              <article className="quick-card" key={item.title}>
                <div className="quick-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <div className="quick-hover">
                  <div className="quick-hover-icon">+</div>
                  <p>{item.hover}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section compact-top">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">Care you can rely on</span>
            <h2>Guarantee Quality Services</h2>
            <p>Practical dental care with clear treatment options and access to a wide range of services.</p>
          </div>
          <div className="cards-grid">
            {serviceCards.map(([title, text], index) => (
              <article className="service-card" key={title}>
                <span className="card-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link href="/dental-services" className="arrow-link">Learn more →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container two-column">
          <div className="finance-panel">
            <span className="eyebrow">Payment options</span>
            <h2>Long Term Finance</h2>
            <p>Finance options may be available. Call our reception team to find out more and discuss the current options.</p>
            <a href="tel:+6498372915" className="button button-outline">Call us</a>
            <Image src="/images/finance-user.png" alt="Long term finance" width={420} height={239} className="finance-image" />
          </div>
          <div className="hours-panel">
            <span className="eyebrow">Opening hours</span>
            <h2>Here when you need us</h2>
            <div className="hours-list">
              <div><span>Monday to Friday</span><strong>8 am – 7 pm</strong></div>
              <div><span>Saturday</span><strong>8 am – 5 pm</strong></div>
              <div><span>Sunday</span><strong>8 am – 4 pm</strong></div>
              <div><span>Public Holidays</span><strong>Open, times may vary</strong></div>
            </div>
            <a className="button" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book Online 24/7</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container visit-grid">
          <div>
            <span className="eyebrow">Visit us</span>
            <h2>131 Lincoln Road, Henderson</h2>
            <p>We are at 131 Lincoln Road, Henderson, Auckland 0610, right behind McDonald&apos;s.</p>
            <div className="contact-links">
              <a href="tel:+6498372915">(09) 837-2915</a>
              <a href="mailto:reception@dentisthenderson.co.nz">reception@dentisthenderson.co.nz</a>
              <a href="https://www.facebook.com/p/White-Cross-Dental-Henderson-100064025121894/" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
          <iframe
            className="map"
            title="White Cross Dental Henderson map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=131%20Lincoln%20Road%2C%20Henderson%2C%20Auckland%2C%200610&t=m&z=15&output=embed&iwloc=near"
          />
        </div>
      </section>

      <BookingBar title="Book your appointment online, any time." />
    </>
  );
}
