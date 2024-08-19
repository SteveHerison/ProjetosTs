import { useState } from "react";
import { questions } from "../../data/questions";
import QuestionItem from "./QuestionItem";
import Results from "./Results";

const Quiz = () => {
  const [answers, setAnswerd] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const title = "Quiz de Culinária";

  const loadNextQuestion = () => {
    if (questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleAnswered = (answer: number) => {
    setAnswerd([...answers, answer]);
    loadNextQuestion();
  };

  const handleRestartButton = () => {
    setAnswerd([]);
    setCurrentQuestion(0);
    setShowResult(false);
  };

  return (
    <div className="flex justify-center items-center bg-black w-full h-full p-2">
      <div className="w-full max-w-xl rounded-xl bg-orange-500 text-black shadow shadow-black">
        <h2 className="p-5 font-bold text-2xl shadow shadow-black/25">
          {title}
        </h2>
        <div className="p-5">
          {!showResult && (
            <QuestionItem
              question={questions[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswered}
            />
          )}
          {showResult && <Results questions={questions} answers={answers} />}
        </div>
        <div className="p-5 text-center border-t border-black/40">
          {!showResult &&
            `${currentQuestion + 1} de ${questions.length} pergunta
          ${questions.length === 1 ? "" : "s"}`}
          {showResult && (
            <button
              onClick={handleRestartButton}
              className="p-2 bg-black text-orange-500 rounded-full"
            >
              Reniciar Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
