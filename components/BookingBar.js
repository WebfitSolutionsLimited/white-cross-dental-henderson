import MinorBookingNotice from './MinorBookingNotice';

const BOOKING_URL = 'https://apac.dentalhub.online/soe/new/%20?pid=NZWCH01';

export default function BookingBar({ title = 'Need a dental appointment?' }) {
  return (
    <section className="booking-bar">
      <div className="container booking-bar-inner">
        <div>
          <span className="eyebrow light">Online booking available anytime</span>
          <h2>{title}</h2>
        </div>
        <div className="booking-action-wrap">
          <div className="booking-actions">
            <a className="button button-white" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book Online 24/7</a>
            <a className="phone-cta" href="tel:+6498372915">(09) 837-2915</a>
          </div>
          <MinorBookingNotice light />
        </div>
      </div>
    </section>
  );
}
