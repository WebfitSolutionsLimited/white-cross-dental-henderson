import { pageMeta } from '@/lib/seo';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import BookingBar from '@/components/BookingBar';

const BOOKING_URL = 'https://apac.dentalhub.online/soe/new/%20?pid=NZWCH01';
const ACC_GUIDE = 'https://www.acc.co.nz/assets/im-injured/32690e7220/acc7672-dental-injury-guide.pdf';

export const metadata = pageMeta({
  title: 'ACC Dentist in Henderson',
  description: 'ACC registered dental clinic on Lincoln Road, Henderson. Treatment for accident-related dental injuries, open 7 days. Under 18s free; $75 surcharge for adults.',
  path: '/acc-dental-injuries'
});

const faqs = [
  {
    q: 'Is White Cross Dental Henderson ACC registered?',
    a: 'Yes. We are an ACC registered clinic and provide on-site services for all accident-related dental treatment.'
  },
  {
    q: 'How much does ACC dental treatment cost?',
    a: 'An ACC surcharge of $75 (GST inclusive) applies to patients over 18 years old. Patients aged 18 and under are free. ACC pays a set amount towards treatment, so some treatment may cost more; we will explain any cost before we start.'
  },
  {
    q: 'Do I need an appointment for ACC treatment?',
    a: 'In most cases an appointment is necessary for ACC treatment unless it is a genuine emergency. You can book online 24/7 or call (09) 837-2915.'
  },
  {
    q: 'What dental injuries does ACC cover?',
    a: 'ACC can cover dental injuries caused by an accident or a sporting injury. It does not cover damage from normal wear and tear, decay or gum disease.'
  },
  {
    q: 'Who lodges the ACC claim?',
    a: 'Your dentist helps you complete the ACC forms when your injury meets the cover criteria. ACC then writes to you to confirm whether the claim is accepted.'
  },
  {
    q: 'Can I also see a doctor for my injury?',
    a: 'Yes. We are located next to the Westcare Whitecross Accident and Medical if you require medical treatment alongside your dental care.'
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a }
  }))
};

export default function AccDentalInjuriesPage() {
  return (
    <>
      <PageHero title="ACC Dental Injuries" eyebrow="ACC registered dentist in Henderson" />

      <section className="section">
        <div className="container about-grid">
          <div>
            <span className="eyebrow">Accident-related dental treatment</span>
            <h2>Hurt your teeth in an accident?</h2>
            <p>White Cross Dental Henderson is an ACC registered clinic on Lincoln Road, open seven days. We provide on-site services for all accident-related dental treatment, from a knocked or chipped tooth to injuries from sport, falls or other accidents.</p>
            <p>ACC treatment can include anything from consultations, fillings or treatment for trauma. We are also located next to the Westcare Whitecross Accident and Medical if you require medical treatment alongside your dental care.</p>
            <div className="inline-actions">
              <a className="button" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book Online 24/7</a>
              <a className="text-link" href="tel:+6498372915">Call (09) 837-2915</a>
            </div>
          </div>
          <div className="about-image">
            <Image src="/images/acc-user.png" alt="ACC dental injury treatment at White Cross Dental Henderson" fill sizes="(max-width:900px) 100vw, 48vw" className="cover" />
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Costs</span>
            <h2>What ACC dental treatment costs</h2>
          </div>
          <ul>
            <li><strong>Patients over 18:</strong> an ACC surcharge of $75 (GST inclusive) applies.</li>
            <li><strong>Patients 18 and under:</strong> free.</li>
            <li>ACC pays a set amount towards treatment. Some treatments, such as root canals, crowns and bridges, need ACC&apos;s approval before they start. We will talk you through this and any extra cost before treatment.</li>
          </ul>
          <p>In most cases an appointment is necessary for ACC treatment unless it is a genuine emergency.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">How it works</span>
            <h2>Making an ACC dental claim</h2>
          </div>
          <ol>
            <li>Book online or call us, and tell us your visit is for an accident or injury.</li>
            <li>Our dentist examines the injury and explains your treatment options.</li>
            <li>If your injury meets ACC&apos;s cover criteria, we help you complete the ACC claim forms.</li>
            <li>ACC writes to you to confirm whether your claim is accepted.</li>
          </ol>
          <p>ACC covers dental injuries caused by an accident or a sporting injury. It does not cover damage from normal wear and tear, decay or gum disease. For full details, read <a href={ACC_GUIDE} target="_blank" rel="noopener noreferrer">ACC&apos;s dental injury guide</a>.</p>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Questions</span>
            <h2>ACC dental FAQs</h2>
          </div>
          {faqs.map((f) => (
            <div key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <BookingBar title="Book your ACC dental appointment." />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
