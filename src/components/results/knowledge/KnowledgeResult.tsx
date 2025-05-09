import React, { useState } from "react";

type Props = {
  score: number;
  total: number;
  name: string;
  time: string;
  questions: { question: string; options: string[]; correct: number }[];
  selectedAnswers: number[];
};

const KnowledgeResult: React.FC<Props> = ({
  score,
  total,
  name,
  time,
  questions,
  selectedAnswers,
}) => {
  const [showAll, setShowAll] = useState(false);
  const visibleQuestions = showAll ? questions : questions.slice(0, 2);

  return (
    <>
      {score === 0 && (
        <>
          <div className="text-4xl">😅📚</div>
          <h2 className="text-2xl font-extrabold text-red-500">
            You did not score this time, {name}!
          </h2>
          <p className="text-sm text-gray-500">
            Try again and keep learning 🚀
          </p>
        </>
      )}

      {score > 0 && score < total && (
        <>
          <div className="text-4xl">🎉👏</div>
          <h2 className="text-2xl font-extrabold text-green-600">
            You’ve completed the quiz, {name}!
          </h2>
          <p className="text-sm text-gray-500">
            Great job! You’re one step smarter today 🧠✨
          </p>
        </>
      )}

      {score === total && (
        <>
          <div className="text-4xl">👑🏆</div>
          <h2 className="text-2xl font-extrabold text-yellow-600">
            Outstanding, {name}!
          </h2>
          <p className="text-sm text-gray-500">
            Perfect score! You nailed it 💯🔥
          </p>
        </>
      )}

      <div className="text-xl font-bold bg-green-100 text-green-800 px-8 py-2 rounded-full shadow-inner mt-4">
        Score: {score} / {total}
      </div>
      <p className="text-sm text-gray-600">⏱ Time taken: {time}</p>

      <div className="mt-6 w-full text-left">
        <h3 className="text-lg font-semibold mb-2">Review your answers:</h3>
        <div className="space-y-4">
          {visibleQuestions.map((q, index) => {
            const actualIndex = showAll ? index : index;
            const userAnswer = selectedAnswers[actualIndex];
            const isCorrect = userAnswer === q.correct;

            return (
              <div
                key={actualIndex}
                className={`p-4 rounded-xl border ${
                  isCorrect
                    ? "border-green-300 bg-green-50"
                    : "border-red-300 bg-red-50"
                }`}
              >
                <p className="font-semibold mb-2">
                  Q{actualIndex + 1}: {q.question}
                </p>
                <p>
                  Your answer:{" "}
                  <span
                    className={isCorrect ? "text-green-700" : "text-red-700"}
                  >
                    {q.options[userAnswer] ?? "No answer"}
                  </span>
                </p>
                {!isCorrect && (
                  <p className="text-green-700">
                    Correct answer: {q.options[q.correct]}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {questions.length > 2 && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="text-sm font-semibold text-indigo-600 hover:underline"
            >
              {showAll ? "Show less ▲" : "Show all answers ▼"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default KnowledgeResult;
