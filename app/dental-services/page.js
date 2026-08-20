import Image from 'next/image';
import PageHero from '@/components/PageHero';
import BookingBar from '@/components/BookingBar';

export const metadata = {
  title: 'Dental Services',
  description: 'Dental services at White Cross Dental Henderson including examinations, cosmetic, surgical, root canal, restorative, ACC, dentures and general dentistry.'
};

const services = [
  {
    title: 'Consultation & Examination',
    image: '/images/consultation-user.png',
    content: <>
      <p>A consultation is a great place to start if you require information regarding a specific problem or interest. Our dentists will listen to any issues you may have and provide advice regarding any appropriate treatment required.</p>
      <p>An examination is a great way to provide a complete overview of your current state of oral health. Once you have had X-Rays taken a dentist will provide all necessary information regarding any treatment that may be required. A cost estimation can be given to take away, listing all the treatment you may need.</p>
      <ul>
        <li>Check-up and basic Clean including 2 x-rays starts from $150 upwards.</li>
        <li>Check-up, this includes 2 x-rays is $80.</li>
        <li>Cleans start from $120-$200.</li>
      </ul>
      <h4>Please note:</h4>
      <ul>
        <li>We only see patients 18 &amp; under for accidents only.</li>
        <li>Prices may vary depending on staining and tartar on the teeth.</li>
        <li>A full check-up every 6-12 months is the best preventative measure and ensures patients can keep on top of their oral hygiene.</li>
      </ul>
    </>
  },
  {
    title: 'Cosmetic',
    image: '/images/cosmetic-user.png',
    content: <>
      <p>We provide services for a full range of cosmetic dentistry from tooth whitening to veneers, dentures and crowns.</p>
      <p>It is best to have a consultation with one of our dentists regarding these treatment options as price can vary considerably depending on which treatment is appropriate for individual patients.</p>
    </>
  },
  {
    title: 'Surgical',
    image: '/images/surgical-user.png',
    content: <>
      <p>Often a tooth may need to be extracted if it is heavily decayed or broken and we have the ability to cater for any extraction safely and gently. We can cater for everything from loose teeth to impacted wisdom teeth and can organise sedation where required.</p>
      <p>Our experienced nurses will provide all the information you need for post-extraction care. After a tooth is extracted, patients may be interested in ‘filling the gap’. Our dentists can recommend an appropriate option which may be a plastic partial denture, metal denture, implant or bridge.</p>
    </>
  },
  {
    title: 'Endodontic Root Therapy',
    image: '/images/root-canal-user.png',
    content: <>
      <p>The term endodontic refers to the dental specialty concerned with the inside of the tooth, the treatment of the nerve or pulp of the tooth. If the decay within the tooth has reached the nerve, root canal treatment may be required to save the tooth and avoid extraction.</p>
      <p>Our dentists are highly experienced in this area and use techniques that minimize any pain and discomfort. Root canal treatment can vary in price depending on which tooth requires treatment.</p>
    </>
  },
  {
    title: 'Restorative',
    image: '/images/restorative-user.png',
    content: <>
      <p>Restorative dentistry involves the restoration of teeth with either fillings or crowns, to rebuild broken or worn down teeth or repair teeth affected by decay. Fillings detected at an early stage can significantly reduce cost and ultimately avoid the need for root canal treatment.</p>
      <p>We provide all types of fillings including both composite (white) and amalgam (silver) fillings. Fillings vary in price depending on which tooth is treated, the size of the filling and the type of fillings recommended to each patient. Crowning of the tooth may be required where the tooth has been previously heavily restored, is cracked or broken. Again, the cost of the crown depends on the tooth treated and the material recommended by the dentist. We provide a full range of ceramic, porcelain and gold crowns.</p>
    </>
  },
  {
    title: 'Emergencies & ACC',
    image: '/images/acc-user.png',
    content: <>
      <p>We are an ACC registered clinic and provide on-site services for all accident related dental treatment. We are also located next to the Westcare Whitecross Accident and Medical if you require medical treatment alongside your dental care.</p>
      <p>ACC treatment can include anything from consultations, fillings or treatment for trauma. ACC surcharge of <strong>$75 (GST inclusive)</strong> applies to patients over 18 years old.</p>
      <p>18 Years of age and under are Free “after ACC treatment can include anything from consultations, fillings or treatment for trauma”.</p>
      <p>In most cases an appointment is necessary for ACC treatment unless it is a genuine emergency.</p>
    </>
  },
  {
    title: 'Dentures',
    image: '/images/dentures-user.png',
    content: <>
      <p>Dentures are removable dental appliances designed to replace missing teeth and restore the functionality and aesthetics of a person’s smile.</p>
      <p>Modern dentures are more natural looking, enhancing your smile and facial structure, and offering a boost in confidence.</p>
      <p>If you have any specific questions about dentures or need more detailed information, feel free to ask!</p>
    </>
  },
  {
    title: 'General',
    image: '/images/general-user.png',
    content: <>
      <h4>We provide services for all aspects of general dentistry</h4>
      <ul>
        <li>Preventative, Maintenance and Hygiene</li>
        <li>Oral Surgical</li>
        <li>Cosmetic</li>
        <li>Endodontic</li>
        <li>Restorative</li>
        <li>Accident and Emergency</li>
        <li>Work and Income</li>
        <li>Beneficiary Quotes</li>
      </ul>
    </>
  },
  {
    title: 'Special Services & Interests',
    image: '/images/special-user.png',
    content: <>
      <p><strong>Intravenous Sedation:</strong> We offer intravenous (I.V) sedation for nervous patients. I.V sedation may also be required for difficult surgical wisdom teeth removal where necessary.</p>
      <p><strong>Implants:</strong> We can work together with a periodontist to organise the replacement of one or more extracted teeth. Although they are very expensive, this modern technology is a great long-term option.</p>
      <h4>Here is what more we can do for you:</h4>
      <ul>
        <li>We operate with Work &amp; Income New Zealand and can provide WINZ quotes to beneficiaries.</li>
        <li>We have a panoramic x-ray machine and can take these full-jaw x-rays for our own clinic or another if required.</li>
        <li>We can organise referrals to SDB (children’s dentists), orthodontists or oral surgeons where required.</li>
      </ul>
    </>
  }
];

export default function DentalServicesPage() {
  return (
    <>
      <PageHero title="Dental Services" eyebrow="Comprehensive dental care" />
      <section className="section services-intro">
        <div className="container narrow">
          <p className="lead">White Cross Dental Henderson offers a comprehensive range of dental services at affordable prices. We are committed to giving our patients reliable and high quality treatment without compromising quality and value for money. We endeavour to provide our patients with the best possible experience and while we can’t absolutely promise no pain we can guarantee solutions that will minimize any discomfort. Our highly experienced team of dentists, nurses and management helps to optimize your experience at our clinic.</p>
        </div>
      </section>
      <section className="section compact-top">
        <div className="container services-list">
          {services.map((service, index) => (
            <article className={`service-detail ${index % 2 ? 'reverse' : ''}`} key={service.title}>
              <div className="service-detail-content">
                <span className="service-index">{String(index + 1).padStart(2, '0')}</span>
                <h2>{service.title}</h2>
                {service.content}
              </div>
              <div className="service-detail-image">
                <Image src={service.image} alt={service.title} fill sizes="(max-width:900px) 100vw, 38vw" className="cover" />
              </div>
            </article>
          ))}
        </div>
      </section>
      <BookingBar title="Ready to book your visit?" />
    </>
  );
}
