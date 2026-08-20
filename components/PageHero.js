export default function PageHero({ title, eyebrow }) {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow && <div className="eyebrow light">{eyebrow}</div>}
        <h1>{title}</h1>
      </div>
    </section>
  );
}
