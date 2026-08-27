export default function MinorBookingNotice({ light = false }) {
  return (
    <p className={`minor-booking-notice${light ? ' light' : ''}`}>
      <strong>Booking for a child or young person?</strong>{' '}
      If you are booking an appointment for a minor, please ensure the booking is made by, or with the consent of, their parent or legal guardian. Parent/guardian contact details may be requested where appropriate.
    </p>
  );
}
