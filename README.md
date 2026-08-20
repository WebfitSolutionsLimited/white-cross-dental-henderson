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
