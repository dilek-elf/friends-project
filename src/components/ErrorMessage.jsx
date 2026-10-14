function ErrorMessage({ message, onRetry }) {
  return (
    <section className="status-section" role="alert">
      <p className="eyebrow">Cafe delay</p>
      <h2>Something did not load.</h2>
      <p>{message}</p>
      <button className="button-primary" type="button" onClick={onRetry}>
        Retry
      </button>
    </section>
  );
}

export default ErrorMessage;
