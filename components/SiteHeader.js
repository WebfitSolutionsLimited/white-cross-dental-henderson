'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const BOOKING_URL = 'https://apac.dentalhub.online/soe/new/%20?pid=NZWCH01';

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    ['/', 'Home'],
    ['/about-us', 'About Us'],
    ['/dental-services', 'Dental Services'],
    ['/acc-dental-injuries', 'ACC Injuries'],
    ['/contact-us', 'Contact Us'],
  ];

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <a href="tel:+6498372915">☎ (09) 837-2915</a>
          <a href="mailto:reception@dentisthenderson.co.nz">✉ reception@dentisthenderson.co.nz</a>
          <span>⌖ 131 Lincoln Rd, Henderson</span>
        </div>
      </div>

      <header className="header">
        <div className="container nav-shell">
          <Link href="/" className="brand" aria-label="White Cross Dental Henderson home">
            <Image src="/images/logo.png" alt="White Cross Dental Henderson" width={2048} height={682} priority className="brand-logo" />
          </Link>

          <button
            className={`menu-toggle ${open ? 'open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="primary-navigation"
          >
            <span />
            <span />
            <span />
          </button>

          <nav id="primary-navigation" className={`nav ${open ? 'open' : ''}`}>
            {links.map(([href, label]) => (
              <Link key={href} href={href} className={pathname === href ? 'active' : ''} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <a className="button button-small" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book Online 24/7
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
