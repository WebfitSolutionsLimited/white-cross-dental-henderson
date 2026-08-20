export default function FacebookIcon({ className = '' }) {
  return (
    <span className={`facebook-icon ${className}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M13.6 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.2v2.2H7.4V13h2.8v8h3.4z" />
      </svg>
    </span>
  );
}
