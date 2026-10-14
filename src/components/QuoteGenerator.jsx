import { useState } from "react";

function QuoteGenerator({ quotes }) {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const currentQuote = quotes[quoteIndex];

  const showAnotherQuote = () => {
    if (quotes.length <= 1) return;

    let nextIndex = quoteIndex;

    while (nextIndex === quoteIndex) {
      nextIndex = Math.floor(Math.random() * quotes.length);
    }

    setQuoteIndex(nextIndex);
  };

  return (
    <section
      className="quote-section"
      id="quotes"
      aria-labelledby="quotes-heading"
    >
      <div className="chalkboard">
        <p className="eyebrow">Chalkboard special</p>
        <h2 id="quotes-heading">Quote of the coffee break</h2>
        {currentQuote ? (
          <figure aria-live="polite" aria-atomic="true">
            <blockquote>"{currentQuote.quote}"</blockquote>
            <figcaption>{currentQuote.speaker}</figcaption>
          </figure>
        ) : (
          <p>No quote is on the board yet.</p>
        )}
        <button
          className="button-muted"
          type="button"
          onClick={showAnotherQuote}
          disabled={quotes.length <= 1}
        >
          Another round?
        </button>
      </div>
    </section>
  );
}

export default QuoteGenerator;
