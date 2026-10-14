const facts = [
  { value: "10", label: "Seasons" },
  { value: "236", label: "Episodes" },
  { value: "6", label: "Best friends" },
  { value: "1", label: "Orange couch" },
];

function Facts() {
  return (
    <section
      className="facts-section"
      id="facts"
      aria-labelledby="facts-heading"
    >
      <div className="section-heading">
        <p className="eyebrow">By the numbers</p>
        <h2 id="facts-heading">Small facts. Big memories.</h2>
      </div>
      <dl className="facts-grid">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default Facts;
