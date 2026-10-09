# White Cross Dental Henderson

Fresh Vercel-ready rebuild using Next.js 16.3 Active LTS, React 19.2 and the App Router.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production

```bash
npm run build
npm start
```

## Vercel

Import the project into Vercel, deploy, then add:

- dentisthenderson.co.nz
- www.dentisthenderson.co.nz

Only change the web A/CNAME records after Vercel gives the required DNS values. Leave MX/SPF/DKIM/email records unchanged.

## Online booking

The global `Book Online 24/7` CTA points to the Henry Schein / DentalHub URL supplied by the clinic.

## Contact form

The current form opens a pre-addressed email in the visitor's mail client. For production lead capture, replace this with a server-side transactional-email/API integration after the clinic confirms the preferred mailbox/service.

## Runtime

Use Node.js 20.9 or newer.

## Tracking & Search Console (Vercel environment variables)

Nothing loads until these are set in Vercel → Project → Settings → Environment Variables (Production), then redeploy:

- `NEXT_PUBLIC_GTM_ID` – Google Tag Manager container ID, e.g. `GTM-XXXXXXX`. GA4, Google Ads and Meta tags are managed inside GTM.
- `NEXT_PUBLIC_GSC_VERIFICATION` – optional Google Search Console HTML-tag verification code (content value only).

dataLayer events pushed by `components/Analytics.js` (use as Custom Event triggers in GTM):

| Event | Fires when | Extra fields |
|---|---|---|
| `booking_click` | Any "Book Online" (DentalHub) link is clicked | `link_url`, `link_text`, `link_location`, `page_path` |
| `phone_click` | Any `tel:` link is clicked | same |
| `email_click` | Any `mailto:` link is clicked | same |
| `social_click` | Facebook link is clicked | same |
| `contact_form_submit` | Contact form passes validation and is submitted (opens the visitor's mail app) | `form_id`, `page_path` |
