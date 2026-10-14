import { useEffect, useRef, useState } from "react";

function Quiz({ questions }) {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const questionHeadingRef = useRef(null);
  const nextButtonRef = useRef(null);
  const resultHeadingRef = useRef(null);

  const currentQuestion = questions[currentIndex];
  const isAnswered = selectedAnswer !== "";
  const isCorrect = selectedAnswer === currentQuestion?.answer;
  const progressText = `Question ${currentIndex + 1} of ${questions.length}`;

  useEffect(() => {
    if (isAnswered) {
      nextButtonRef.current?.focus();
    }
  }, [isAnswered]);

  useEffect(() => {
    if (isComplete) {
      resultHeadingRef.current?.focus();
    }
  }, [isComplete]);

  useEffect(() => {
    if (hasStarted && !isComplete && !isAnswered) {
      questionHeadingRef.current?.focus();
    }
  }, [currentIndex, hasStarted, isAnswered, isComplete]);

  const startQuiz = () => {
    setHasStarted(true);
    setCurrentIndex(0);
    setSelectedAnswer("");
    setScore(0);
    setIsComplete(false);
  };

  const selectAnswer = (choice) => {
    if (isAnswered) return;

    setSelectedAnswer(choice);

    if (choice === currentQuestion.answer) {
      setScore((currentScore) => currentScore + 1);
    }
  };

  const showNextQuestion = () => {
    if (currentIndex === questions.length - 1) {
      setIsComplete(true);
      return;
    }

    setCurrentIndex((index) => index + 1);
    setSelectedAnswer("");
  };

  const restartQuiz = () => {
    setHasStarted(true);
    setCurrentIndex(0);
    setSelectedAnswer("");
    setScore(0);
    setIsComplete(false);
  };

  return (
    <section className="quiz-section" id="quiz" aria-labelledby="quiz-heading">
      <div className="quiz-copy">
        <p className="eyebrow">Central Perk Trivia</p>
        <h2 id="quiz-heading">Who said it?</h2>
        <p>You know the faces. But do you know their lines?</p>
      </div>

      <div className="quiz-panel" aria-live="polite">
        {!hasStarted && (
          <div className="quiz-start">
            <p className="quiz-count">{questions.length} questions ready</p>
            <p className="quiz-sample">
              "{questions[0]?.quote ?? "The first question is brewing."}"
            </p>
            <button
              className="button-primary"
              type="button"
              onClick={startQuiz}
            >
              Let's find out
            </button>
          </div>
        )}

        {hasStarted && !isComplete && currentQuestion && (
          <div className="quiz-card">
            <p className="quiz-progress">{progressText}</p>
            <h3 ref={questionHeadingRef} tabIndex="-1">
              "{currentQuestion.quote}"
            </h3>
            <div
              className="answer-list"
              aria-label={`Answers for ${progressText}`}
            >
              {currentQuestion.choices.map((choice) => {
                const isSelected = selectedAnswer === choice;
                const isRightAnswer = currentQuestion.answer === choice;
                const answerClass =
                  isAnswered && isRightAnswer
                    ? "answer-button is-correct"
                    : isAnswered && isSelected
                      ? "answer-button is-incorrect"
                      : "answer-button";

                return (
                  <button
                    className={answerClass}
                    type="button"
                    key={choice}
                    onClick={() => selectAnswer(choice)}
                    disabled={isAnswered}
                  >
                    {choice}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div
                className={`quiz-feedback ${isCorrect ? "is-correct" : "is-incorrect"}`}
                role="status"
                aria-live="polite"
                aria-atomic="true"
              >
                <p>
                  {isCorrect
                    ? "Correct. That line belongs at your table."
                    : `Not quite. The answer is ${currentQuestion.answer}.`}
                </p>
              </div>
            )}

            <button
              className="button-secondary quiz-next"
              type="button"
              onClick={showNextQuestion}
              disabled={!isAnswered}
              ref={nextButtonRef}
            >
              {currentIndex === questions.length - 1 ? "Show score" : "Next"}
            </button>
          </div>
        )}

        {isComplete && (
          <div className="quiz-result">
            <p className="quiz-count">Final score</p>
            <h3 ref={resultHeadingRef} tabIndex="-1">
              {score} / {questions.length}
            </h3>
            <p>
              {score === questions.length
                ? "Could you be any more ready?"
                : "Grab another coffee and try again."}
            </p>
            <button
              className="button-primary"
              type="button"
              onClick={restartQuiz}
            >
              Restart
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Quiz;
