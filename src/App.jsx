import { useEffect, useState } from "react";
import About from "./components/About.jsx";
import CharacterGrid from "./components/CharacterGrid.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import Facts from "./components/Facts.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import LoadingMessage from "./components/LoadingMessage.jsx";
import Quiz from "./components/Quiz.jsx";
import QuoteGenerator from "./components/QuoteGenerator.jsx";

const DATA_FILES = {
  characters: "/data/characters.json",
  quotes: "/data/quotes.json",
  quiz: "/data/quiz.json",
};

async function fetchJson(path) {
  const response = await fetch(path);

  if (!response.ok) {
    throw new Error(`Could not load ${path}`);
  }

  return response.json();
}

function App() {
  const [data, setData] = useState({ characters: [], quotes: [], quiz: [] });
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let isActive = true;

    async function loadData() {
      setStatus("loading");
      setError("");

      try {
        const [characters, quotes, quiz] = await Promise.all([
          fetchJson(DATA_FILES.characters),
          fetchJson(DATA_FILES.quotes),
          fetchJson(DATA_FILES.quiz),
        ]);

        if (!isActive) return;

        setData({ characters, quotes, quiz });
        setStatus(
          characters.length === 0 && quotes.length === 0 && quiz.length === 0
            ? "empty"
            : "ready",
        );
      } catch (loadError) {
        if (!isActive) return;

        setError(loadError.message);
        setStatus("error");
      }
    }

    loadData();

    return () => {
      isActive = false;
    };
  }, [reloadKey]);

  const retryLoading = () => {
    setReloadKey((currentKey) => currentKey + 1);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />

        {status === "loading" && <LoadingMessage />}
        {status === "error" && (
          <ErrorMessage message={error} onRetry={retryLoading} />
        )}
        {status === "empty" && (
          <ErrorMessage
            message="The cafe menu is empty. Add data to public/data and try again."
            onRetry={retryLoading}
          />
        )}
        {status === "ready" && (
          <>
            <CharacterGrid characters={data.characters} />
            <QuoteGenerator quotes={data.quotes} />
            <Quiz questions={data.quiz} />
          </>
        )}

        <Facts />
      </main>
      <Footer />
    </>
  );
}

export default App;
