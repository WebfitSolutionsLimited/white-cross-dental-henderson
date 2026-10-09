'use client';

import { useEffect } from 'react';

// Google Tag Manager container (not secret). Can be overridden in Vercel with NEXT_PUBLIC_GTM_ID.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-54T4P24V';
const LIVE_HOSTS = ['dentisthenderson.co.nz', 'www.dentisthenderson.co.nz'];

function push(event, data) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, page_path: window.location.pathname, ...data });
}

function classify(href) {
  if (!href) return null;
  if (href.startsWith('tel:')) return 'phone_click';
  if (href.startsWith('mailto:')) return 'email_click';
  if (href.includes('dentalhub.online')) return 'booking_click';
  if (href.includes('facebook.com')) return 'social_click';
  return null;
}

// Invisible. Loads GTM only on the live domain (or any URL opened by GTM
// Preview / Tag Assistant, which adds ?gtm_debug=), so preview and local
// builds never pollute real data. Sends dataLayer events for leads.
export default function Analytics() {
  useEffect(() => {
    const host = window.location.hostname;
    const debug = /[?&]gtm_debug=/.test(window.location.search);
    if (!GTM_ID || (!LIVE_HOSTS.includes(host) && !debug)) return;

    if (!window.__gtmLoaded) {
      window.__gtmLoaded = true;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
      const s = document.createElement('script');
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.appendChild(s);
    }

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

  return null;
}
