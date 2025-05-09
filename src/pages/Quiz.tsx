import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { mockQuestions } from "../data/mockQuestions";
import KnowledgeResult from "../components/results/knowledge/KnowledgeResult";
import PsychologicalResult from "../components/results/psychological/PsychologicalResult";
import EntertainmentResult from "../components/results/entertainment/EntertainmentResult";
import { useLanguage } from "../contexts/LanguageContext";

const Quiz = () => {
  const { id } = useParams();
  const quizId = Number(id);
  const location = useLocation();
  const { t } = useLanguage();
  const name =
    location.state?.name || localStorage.getItem("quizPlayerName") || "Player";

  const questions = mockQuestions[quizId] || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [scoreMap, setScoreMap] = useState<Record<string, number>>({});
  const [finished, setFinished] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);

  // Reset state when quiz ID changes
  useEffect(() => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setSelectedOptions([]);
    setSelectedAnswers([]);
    setScore(0);
    setScoreMap({});
    setFinished(false);
    setSecondsElapsed(0);
  }, [quizId]);

  useEffect(() => {
    if (finished) return;

    const timer = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [finished]);

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
    )[quizId] || "";

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
    10: "What's your ideal vacation?",
    11: "Which Netflix character would you be?",
    12: "Are you more logical or creative?",
    13: "What's your mental age?",
    14: "How empathetic are you?",
    15: "Are you more introverted or extroverted?",
    16: "What kind of leader are you?",
    17: "What's your communication style?",
    18: "How do you react under stress?",
    19: "What's your love language?",
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
    if (quizType === "knowledge") {
      if (selectedOption !== null) {
        setSelectedAnswers((prev) => [...prev, selectedOption]);

        const knowledgeQuestion = currentQuestion as { correct: number };
        if (selectedOption === knowledgeQuestion.correct) {
          setScore((prev) => prev + 1);
        }
      } else {
        setSelectedAnswers((prev) => [...prev, -1]);
      }
    }

    if (quizType === "personality") {
      if (selectedOption !== null) {
        const option = currentQuestion.options[selectedOption] as {
          text: string;
          scores: Record<string, number>;
        };
        const selectedScores = option.scores;
        for (const character in selectedScores) {
          setScoreMap((prev) => ({
            ...prev,
            [character]: (prev[character] || 0) + selectedScores[character],
          }));
        }
      }
    }

    if (quizType === "psychological") {
      selectedOptions.forEach((index) => {
        const option = currentQuestion.options[index] as {
          text: string;
          traits: Record<string, number>;
        };
        const traits = option.traits;
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

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const finalTime = formatTime(secondsElapsed);

  const quizTitleKey = `quiz_title_${quizId}` as
    | "quiz_title_1"
    | "quiz_title_2"
    | "quiz_title_3"
    | "quiz_title_4"
    | "quiz_title_5"
    | "quiz_title_6"
    | "quiz_title_7"
    | "quiz_title_8"
    | "quiz_title_9"
    | "quiz_title_10"
    | "quiz_title_11"
    | "quiz_title_12"
    | "quiz_title_13"
    | "quiz_title_14"
    | "quiz_title_15"
    | "quiz_title_16"
    | "quiz_title_17"
    | "quiz_title_18"
    | "quiz_title_19";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100 px-6 py-10 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-500 to-yellow-500 mb-6 text-center drop-shadow">
        {t("quiz_header", { name })}
      </h1>

      <h2 className="text-xl font-semibold text-indigo-700 mb-4 text-center">
        {t(quizTitleKey)}
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
            <div className="text-sm text-gray-600 font-semibold mb-2 flex justify-end gap-1">
              {t("quiz_timeElapsed")}
              <span className="font-mono">{formatTime(secondsElapsed)}</span>
            </div>

            <p className="text-gray-700 mb-4 font-semibold">
              {t("quiz_questionProgress", {
                current: currentIndex + 1,
                total: questions.length,
              })}
            </p>

            <h2 className="text-xl font-bold mb-6">
              <h2 className="text-xl font-bold mb-6">
                {t(currentQuestion.questionKey)}
              </h2>
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
                    {typeof option === "string"
                      ? option
                      : option.key
                        ? t(option.key)
                        : option.text}
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
              {t("quiz_next")}
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center gap-4">
            {quizType === "knowledge" ? (
              <KnowledgeResult
                score={score}
                total={questions.length}
                name={name}
                time={finalTime}
                questions={
                  questions as {
                    question: string;
                    options: string[];
                    correct: number;
                  }[]
                }
                selectedAnswers={selectedAnswers}
              />
            ) : (
              <></>
            )}
            {quizType === "psychological" ? (
              <PsychologicalResult
                quizId={quizId}
                name={name}
                topTrait={topCharacter || "?"}
                time={finalTime}
              />
            ) : (
              <></>
            )}
            {quizType === "personality" ? (
              <EntertainmentResult
                quizId={quizId}
                topCharacter={topCharacter || "Unknown"}
                name={name}
                time={finalTime}
              />
            ) : (
              <></>
            )}

            <button
              onClick={() => (window.location.href = "/select-quiz")}
              className="mt-4 bg-gradient-to-r from-pink-500 to-indigo-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:brightness-110 transition flex items-center gap-2"
            >
              {t("quiz_back")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
