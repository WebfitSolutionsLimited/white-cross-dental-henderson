export default function FacebookIcon({ className = '' }) {
  return (
    <span className={`facebook-icon ${className}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" role="img">
        <path d="M13.8 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.7-1.6H17V4.1c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.3H8.2v3.2h2.6V22h3z" />
      </svg>
    </span>
  );
}
