import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";

// Mock questions for quiz ID 1 (europe-geo)
const mockQuestions: Record<
  number,
  { question: string; options: string[]; correct: number }[]
> = {
  1: [
    {
      question: "Which country does the city of Prague belong to?",
      options: ["Poland", "Austria", "Czech Republic", "Slovakia"],
      correct: 2,
    },

    {
      question: "Which sea borders Greece to the west?",
      options: ["Black Sea", "Adriatic Sea", "Ionian Sea", "Baltic Sea"],
      correct: 2,
    },
    {
      question: "Which of the following is NOT part of Scandinavia?",
      options: ["Sweden", "Norway", "Denmark", "Germany"],
      correct: 3,
    },
  ],
};

const Quiz = () => {
  const { id } = useParams();
  const quizId = Number(id);
  const location = useLocation();
  const name = location.state?.name || "Player";

  const questions = mockQuestions[quizId] || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleNext = () => {
    if (selectedOption === currentQuestion.correct) {
      setScore((prev) => prev + 1);
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setFinished(true);
    }
  };

  const progress = ((currentIndex + Number(finished)) / questions.length) * 100;

  const quizTitles: Record<number, string> = {
    1: "How well do you know European geography?", // europe-geo
    2: "Which country is this capital from?", // capital-quiz
    3: "General knowledge: quick edition", // general-quick
    4: "History test: key events of the 20th century", // 20th-century-history
    5: "What do you know about space and planets?", // space-planets
    6: "Romanian grammar test", // romanian-grammar
  };

  const quizTitle = quizTitles[quizId] || "Quiz";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100 px-6 py-10 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-500 to-yellow-500 mb-6 text-center drop-shadow">
        Quiz Time, {name}!
      </h1>

      <h2 className="text-xl font-semibold text-indigo-700 mb-4 text-center">
        {quizTitle}
      </h2>

      <div className="w-full max-w-2xl bg-white p-6 rounded-3xl shadow-lg text-center">
        {!finished ? (
          <>
            <div className="w-full h-3 bg-gray-200 rounded-full mb-6 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <p className="text-gray-700 mb-4 font-semibold">
              Question {currentIndex + 1} of {questions.length}
            </p>

            <h2 className="text-xl font-bold mb-6">
              {currentQuestion.question}
            </h2>

            <div className="grid gap-4 mb-6">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOption(index)}
                  className={`w-full py-3 px-6 rounded-full border-2 transition-all font-medium ${
                    selectedOption === index
                      ? "bg-indigo-500 text-white border-indigo-500 scale-105"
                      : "bg-white border-gray-300 hover:border-indigo-400"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={selectedOption === null}
              className={`px-6 py-3 rounded-full text-white font-semibold transition-all ${
                selectedOption === null
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-pink-500 to-indigo-500 hover:brightness-110"
              }`}
            >
              Next
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center gap-4">
            {score === 0 && (
              <>
                <div className="text-4xl">😅📚</div>
                <h2 className="text-2xl font-extrabold text-red-500">
                  You didn’t score this time, {name}!
                </h2>
                <p className="text-sm text-gray-500">
                  Try again and keep learning 🚀
                </p>
              </>
            )}

            {score > 0 && score < questions.length && (
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

            {score === questions.length && (
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

            <div className="text-xl font-bold bg-green-100 text-green-800 px-8 py-2 rounded-full shadow-inner">
              Score: {score} / {questions.length}
            </div>

            <button
              onClick={() => (window.location.href = "/select-quiz")}
              className="mt-4 bg-gradient-to-r from-pink-500 to-indigo-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:brightness-110 transition flex items-center gap-2"
            >
              🔁 Back to Quiz Categories
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
