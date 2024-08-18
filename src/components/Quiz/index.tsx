import { useState } from "react";
import { questions } from "../../data/questions";
import QuestionItem from "./QuestionItem";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const title = "Quiz de Culinária";

  const handleAnswered = (answer: number) => {};

  return (
    <div className="flex justify-center items-center bg-black w-full h-full p-2">
      <div className="w-full max-w-xl rounded-xl bg-orange-500 text-black shadow shadow-black">
        <h2 className="p-5 font-bold text-2xl shadow shadow-black/25">
          {title}
        </h2>
        <div className="p-5">
          <QuestionItem
            question={questions[currentQuestion]}
            count={currentQuestion + 1}
            onAnswer={handleAnswered}
          />
        </div>
        <div className="p-5 text-center border-t border-black/40">
          {currentQuestion + 1} de {questions.length} pergunta
          {questions.length === 1 ? "" : "s"}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
