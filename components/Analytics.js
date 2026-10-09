'use client';

import Script from 'next/script';
import { useEffect } from 'react';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

function push(event, data) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, page_path: window.location.pathname, ...data });
}

// Classifies a clicked link into a lead/engagement event.
function classify(href) {
  if (!href) return null;
  if (href.startsWith('tel:')) return 'phone_click';
  if (href.startsWith('mailto:')) return 'email_click';
  if (href.includes('dentalhub.online')) return 'booking_click';
  if (href.includes('facebook.com')) return 'social_click';
  return null;
}

// Invisible: adds Google Tag Manager only when NEXT_PUBLIC_GTM_ID is set,
// and sends dataLayer events for calls, emails, bookings and form sends.
export default function Analytics() {
  useEffect(() => {
    if (!GTM_ID) return;

    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href]');
      if (!a) return;
      const href = a.getAttribute('href');
      const event = classify(href);
      if (!event) return;
      const area = a.closest('header, footer, .topbar, .booking-bar, .hero, form');
      push(event, {
        link_url: href,
        link_text: (a.textContent || a.getAttribute('aria-label') || '').trim().slice(0, 100),
        link_location: area ? (area.className || area.tagName).toString().split(' ')[0].toLowerCase() : 'content'
      });
    };

    const onSubmit = (e) => {
      const form = e.target;
      if (form && form.classList && form.classList.contains('contact-form')) {
        push('contact_form_submit', { form_id: 'contact_form' });
      }
    };

    document.addEventListener('click', onClick, true);
    document.addEventListener('submit', onSubmit, true);
    return () => {
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('submit', onSubmit, true);
    };
  }, []);

  if (!GTM_ID) return null;

  return (
    <>
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="Google Tag Manager"
        />
      </noscript>
    </>
  );
}
