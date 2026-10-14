function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="eyebrow">Open since 1994</p>
        <h1 id="hero-heading">Your seat at Central Perk.</h1>
        <p className="hero-text">
          Meet the six regulars, discover their memorable lines, and test your
          Friends knowledge.
        </p>
        <div className="hero-actions" aria-label="Primary page sections">
          <a className="button-primary" href="#characters">
            Meet the regulars
          </a>
          <a className="button-secondary" href="#quotes">
            Read the chalkboard
          </a>
        </div>
      </div>

      <div
        className="hero-cafe"
        aria-label="Central Perk inspired cafe counter illustration"
      >
        <div className="cafe-sign">Central Perk</div>
        <div className="orange-couch" aria-hidden="true">
          <span className="couch-back"></span>
          <span className="couch-cushion couch-cushion-left"></span>
          <span className="couch-cushion couch-cushion-middle"></span>
          <span className="couch-cushion couch-cushion-right"></span>
          <span className="couch-seat"></span>
          <span className="couch-arm couch-arm-left"></span>
          <span className="couch-arm couch-arm-right"></span>
          <span className="couch-button couch-button-left"></span>
          <span className="couch-button couch-button-right"></span>
          <span className="couch-leg couch-leg-left"></span>
          <span className="couch-leg couch-leg-right"></span>
        </div>
        <p>The couch is ready. The coffee is warm. The quiz is brewing.</p>
      </div>
    </section>
  );
}

export default Hero;
