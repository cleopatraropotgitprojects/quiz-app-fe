import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { mockQuestions } from "../data/mockQuestions";

const Quiz = () => {
  const { id } = useParams();
  const quizId = Number(id);
  const location = useLocation();
  const name = location.state?.name || "Player";

  const questions = mockQuestions[quizId] || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [scoreMap, setScoreMap] = useState<Record<string, number>>({});
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const quizType =
    (
      {
        1: "knowledge",
        2: "knowledge",
        3: "knowledge",
        4: "knowledge",
        5: "knowledge",
        6: "knowledge",
        7: "personality",
        8: "personality",
        9: "personality",
        10: "personality",
        11: "personality",
        12: "psychological",
        13: "psychological",
        14: "psychological",
        15: "psychological",
        16: "psychological",
        17: "psychological",
        18: "psychological",
        19: "psychological",
      } as Record<number, "knowledge" | "personality" | "psychological">
    )[quizId] || "knowledge";

  const quizTitles: Record<number, string> = {
    1: "How well do you know European geography?",
    2: "Which country is this capital from?",
    3: "General knowledge: quick edition",
    4: "History test: key events of the 20th century",
    5: "What do you know about space and planets?",
    6: "English grammar test",
    7: "Which Harry Potter character are you?",
    8: "Which Disney character matches your personality?",
    9: "Which Marvel superhero are you?",
    10: "What’s your ideal vacation?",
    11: "Which Netflix character would you be?",
    12: "Are you more logical or creative?",
    13: "What’s your mental age?",
    14: "How empathetic are you?",
    15: "Are you more introverted or extroverted?",
    16: "What kind of leader are you?",
    17: "What’s your communication style?",
    18: "How do you react under stress?",
    19: "What’s your love language?",
  };

  const quizTitle = quizTitles[quizId] || "Quiz";

  const topCharacter =
    quizType === "personality" || quizType === "psychological"
      ? Object.entries(scoreMap).reduce(
          (top, [key, val]) => (val > top[1] ? [key, val] : top),
          ["None", -Infinity],
        )[0]
      : null;

  const handleNext = () => {
    if (currentQuestion.type === "knowledge") {
      if (selectedOption === currentQuestion.correct) {
        setScore((prev) => prev + 1);
      }
    } else if (currentQuestion.type === "personality") {
      const option = currentQuestion.options[selectedOption!];
      const selectedScores = option.scores;
      for (const character in selectedScores) {
        setScoreMap((prev) => ({
          ...prev,
          [character]: (prev[character] || 0) + selectedScores[character],
        }));
      }
    } else if (currentQuestion.type === "psychological") {
      selectedOptions.forEach((index) => {
        const traits = currentQuestion.options[index].traits;
        for (const key in traits) {
          setScoreMap((prev) => ({
            ...prev,
            [key]: (prev[key] || 0) + traits[key],
          }));
        }
      });
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setSelectedOptions([]);
    } else {
      setFinished(true);
    }
  };

  const progress = ((currentIndex + Number(finished)) / questions.length) * 100;

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
              {currentQuestion.options.map((option, index) => {
                const isSelected =
                  quizType === "psychological"
                    ? selectedOptions.includes(index)
                    : selectedOption === index;

                return (
                  <button
                    key={index}
                    onClick={() => {
                      if (quizType === "psychological") {
                        setSelectedOptions((prev) =>
                          prev.includes(index)
                            ? prev.filter((i) => i !== index)
                            : [...prev, index],
                        );
                      } else {
                        setSelectedOption(index);
                      }
                    }}
                    className={`w-full py-3 px-6 rounded-full border-2 transition-all font-medium ${
                      isSelected
                        ? "bg-indigo-500 text-white border-indigo-500 scale-105"
                        : "bg-white border-gray-300 hover:border-indigo-400"
                    }`}
                  >
                    {typeof option === "string" ? option : option.text}
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleNext}
              disabled={
                quizType === "psychological"
                  ? selectedOptions.length === 0
                  : selectedOption === null
              }
              className={`px-6 py-3 rounded-full text-white font-semibold transition-all ${
                (
                  quizType === "psychological"
                    ? selectedOptions.length === 0
                    : selectedOption === null
                )
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-pink-500 to-indigo-500 hover:brightness-110"
              }`}
            >
              Next
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center gap-4">
            {quizType === "knowledge" ? (
              <>
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
              </>
            ) : (
              <>
                {quizType === "psychological" ? (
                  <>
                    <div className="text-4xl">🧠💫</div>
                    <h2 className="text-2xl font-extrabold text-indigo-600 text-center">
                      Your strongest trait is{" "}
                      <span className="text-pink-600">{topCharacter}</span>!
                    </h2>
                    <p className="text-sm text-gray-500 text-center">
                      Self-awareness is power. Well done, {name}!
                    </p>
                  </>
                ) : (
                  <>
                    <div className="text-4xl">🦸‍♀️✨</div>
                    {quizId === 7 && (
                      <h2 className="text-2xl font-extrabold text-purple-600 text-center">
                        You’re most like{" "}
                        <span className="text-indigo-600">{topCharacter}</span>{" "}
                        from Harry Potter!
                      </h2>
                    )}
                    {quizId === 8 && (
                      <h2 className="text-2xl font-extrabold text-purple-600 text-center">
                        <span className="text-pink-600">{topCharacter}</span> is
                        your Disney twin!
                      </h2>
                    )}
                    {quizId === 9 && (
                      <h2 className="text-2xl font-extrabold text-purple-600 text-center">
                        Your inner hero is{" "}
                        <span className="text-red-600">{topCharacter}</span>!
                      </h2>
                    )}
                    {quizId === 10 && (
                      <h2 className="text-2xl font-extrabold text-purple-600 text-center">
                        Your dream vacation vibe is:{" "}
                        <span className="text-orange-500">{topCharacter}</span>!
                      </h2>
                    )}
                    {quizId === 11 && (
                      <h2 className="text-2xl font-extrabold text-purple-600 text-center">
                        If you lived on Netflix, you’d be{" "}
                        <span className="text-rose-500">{topCharacter}</span>!
                      </h2>
                    )}
                    <p className="text-sm text-gray-500 text-center">
                      Thanks for playing, {name}!
                    </p>
                  </>
                )}
              </>
            )}

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
