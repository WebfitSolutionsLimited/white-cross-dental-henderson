import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import FacebookIcon from '@/components/FacebookIcon';
import MinorBookingNotice from '@/components/MinorBookingNotice';

export const metadata = {
  title: 'Contact Us',
  description: 'Contact White Cross Dental Henderson at 131 Lincoln Road, phone (09) 837-2915. Open seven days.'
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" eyebrow="We are here seven days a week" />
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="eyebrow">Contact us</span>
            <h2>Visit or contact our Henderson clinic</h2>
            <h3>Opening Hours</h3>
            <div className="hours-list compact">
              <div><span>Monday to Friday</span><strong>8 am – 7 pm</strong></div>
              <div><span>Saturday</span><strong>8 am – 5 pm</strong></div>
              <div><span>Sunday</span><strong>8 am – 4 pm</strong></div>
              <div><span>Public Holidays</span><strong>Open, times may vary</strong></div>
            </div>

            <div className="contact-stack">
              <a href="tel:+6498372915"><span>Phone</span><strong>09 837 2915</strong></a>
              <a href="mailto:reception@dentisthenderson.co.nz"><span>Email</span><strong>reception@dentisthenderson.co.nz</strong></a>
              <a href="https://www.facebook.com/p/White-Cross-Dental-Henderson-100064025121894/" target="_blank" rel="noopener noreferrer" className="contact-facebook" aria-label="White Cross Dental Henderson on Facebook"><span>Social</span><FacebookIcon className="contact-facebook-icon" /></a>
            </div>

            <iframe
              className="map contact-map"
              title="White Cross Dental Henderson map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=131%20Lincoln%20Road%2C%20Henderson%2C%20Auckland%2C%200610&t=m&z=15&output=embed&iwloc=near"
            />
          </div>

          <div>
            <div className="form-heading">
              <span className="eyebrow">Send an enquiry</span>
              <h2>How can we help?</h2>
              <p>For appointments, the fastest option is our 24/7 online booking service.</p>
              <a className="button" href="https://apac.dentalhub.online/soe/new/%20?pid=NZWCH01" target="_blank" rel="noopener noreferrer">Book Online 24/7</a>
              <MinorBookingNotice />
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
