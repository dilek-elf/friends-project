function LoadingMessage() {
  return (
    <section className="status-section" aria-live="polite" aria-busy="true">
      <p className="eyebrow">Brewing</p>
      <h2>Loading the cafe menu...</h2>
      <p>Character, quote, and quiz data are being fetched from public/data.</p>
    </section>
  );
}

export default LoadingMessage;
