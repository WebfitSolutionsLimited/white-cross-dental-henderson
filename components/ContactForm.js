'use client';

import { useState } from 'react';

// Web3Forms public access key (safe in client code). Submissions are emailed
// to the address set on the Web3Forms form (dashboard: app.web3forms.com).
const WEB3FORMS_KEY = 'b95767ed-04ce-422f-bb7e-ab38813a6bb6';
const EMPTY = { first: '', last: '', email: '', phone: '', subject: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function submit(e) {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    const name = `${form.first} ${form.last}`.trim();
    const payload = {
      access_key: WEB3FORMS_KEY,
      subject: `Website enquiry: ${form.subject || 'General'} (${name})`,
      from_name: 'White Cross Dental Henderson website',
      replyto: form.email,
      name,
      email: form.email,
      phone: form.phone,
      enquiry_subject: form.subject,
      message: form.message,
      page: typeof window !== 'undefined' ? window.location.href : '',
      botcheck: e.target.botcheck?.checked || false
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || 'Send failed');
      setStatus('sent');
      setForm(EMPTY);
    } catch (err) {
      setStatus('error');
    }
  }

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form className="contact-form" onSubmit={submit}>
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} aria-hidden="true" />
      <div className="form-row">
        <label><span className="field-label">First Name <span className="required">*</span></span><input required name="first" value={form.first} onChange={change} /></label>
        <label><span className="field-label">Last Name</span><input name="last" value={form.last} onChange={change} /></label>
      </div>
      <label><span className="field-label">Email <span className="required">*</span></span><input required type="email" name="email" value={form.email} onChange={change} /></label>
      <label><span className="field-label">Phone</span><input name="phone" value={form.phone} onChange={change} /></label>
      <label><span className="field-label">Subject</span><input name="subject" value={form.subject} onChange={change} /></label>
      <label><span className="field-label">Your Message <span className="required">*</span></span><textarea required rows="7" name="message" value={form.message} onChange={change} /></label>
      <button className="button" type="submit" disabled={status === 'sending'}>Send Enquiry</button>
      {status === 'sent' && (
        <p className="form-note" role="status">Thanks, we&rsquo;ve received your enquiry and will be in touch.</p>
      )}
      {status === 'error' && (
        <p className="form-note" role="alert">Sorry, your enquiry couldn&rsquo;t be sent. Please call us on (09) 837-2915 or email reception@dentisthenderson.co.nz.</p>
      )}
      <p className="form-note">Please do not include sensitive medical information in this form.</p>
    </form>
  );
}
