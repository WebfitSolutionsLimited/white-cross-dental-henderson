import Link from 'next/link';
import Image from 'next/image';
import FacebookIcon from '@/components/FacebookIcon';

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Image src="/images/logo.png" alt="White Cross Dental Henderson" width={2048} height={682} className="footer-logo" />
          <p className="footer-copy">Seven-day dental care in Henderson, Auckland.</p>
        </div>

        <div>
          <h3>Useful links</h3>
          <a href="https://www.nzda.org.nz/" target="_blank" rel="noopener noreferrer">NZDA</a>
          <a href="https://www.dcnz.org.nz/" target="_blank" rel="noopener noreferrer">NZ Dental Council</a>
        </div>

        <div>
          <h3>Menu</h3>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/dental-services">Dental Services</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>

        <div>
          <h3>Contact</h3>
          <a href="mailto:reception@dentisthenderson.co.nz">reception@dentisthenderson.co.nz</a>
          <a href="tel:+6498372915">(09) 837-2915</a>
          <a href="https://www.facebook.com/p/White-Cross-Dental-Henderson-100064025121894/" target="_blank" rel="noopener noreferrer" className="facebook-link" aria-label="White Cross Dental Henderson on Facebook">
            <FacebookIcon className="footer-facebook-icon" />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        © {new Date().getFullYear()} White Cross Dental Henderson. All Rights Reserved.
      </div>
    </footer>
  );
}
