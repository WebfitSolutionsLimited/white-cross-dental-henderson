'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ first: '', last: '', email: '', phone: '', subject: '', message: '' });

  function submit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || 'Website enquiry');
    const body = encodeURIComponent(
      `Name: ${form.first} ${form.last}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:reception@dentisthenderson.co.nz?subject=${subject}&body=${body}`;
  }

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label><span className="field-label">First Name <span className="required">*</span></span><input required name="first" value={form.first} onChange={change} /></label>
        <label><span className="field-label">Last Name</span><input name="last" value={form.last} onChange={change} /></label>
      </div>
      <label><span className="field-label">Email <span className="required">*</span></span><input required type="email" name="email" value={form.email} onChange={change} /></label>
      <label><span className="field-label">Phone</span><input name="phone" value={form.phone} onChange={change} /></label>
      <label><span className="field-label">Subject</span><input name="subject" value={form.subject} onChange={change} /></label>
      <label><span className="field-label">Your Message <span className="required">*</span></span><textarea required rows="7" name="message" value={form.message} onChange={change} /></label>
      <button className="button" type="submit">Send Enquiry</button>
      <p className="form-note">Please do not include sensitive medical information in this form.</p>
    </form>
  );
}
