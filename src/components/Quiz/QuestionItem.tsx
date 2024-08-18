import { useState } from "react";
import { Question } from "../../types/Questions";

type Props = {
  question: Question;
  count: number;
  onAnswer: (answer: number) => void;
};

const QuestionItem = ({ question, count, onAnswer }: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const checkQuestion = (key: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(key);
      onAnswer(key);
    }
  };

  return (
    <div>
      <div className="text-2xl font-bold">
        {count}. {question.question}
      </div>
      <div className="pt-5">
        {question.options.map((item, key) => (
          <div
            key={key}
            onClick={() => checkQuestion(key)}
            className={`text-lg rounded-md border px-3 py-2 mb-4 bg-black text-white  border-orange-300/80 
                ${
                  selectedAnswer !== null
                    ? "cursor-auto hover:opacity-100"
                    : "hover:bg-black/40 hover:text-black cursor-pointer"
                }
                    ${
                      selectedAnswer !== null &&
                      selectedAnswer === question.answer &&
                      selectedAnswer === key &&
                      "bg-green-500 border-green-400 text-white"
                    }
                    ${
                      selectedAnswer !== null &&
                      selectedAnswer !== question.answer &&
                      selectedAnswer === key &&
                      "bg-red-500 border-red-400 text-white"
                    }
                `}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionItem;
