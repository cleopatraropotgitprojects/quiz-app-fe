import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const quizzesByCategory: Record<
  string,
  {
    id: number;
    title: string;
    icon: string;
    questions: number;
    minutes: number;
  }[]
> = {
  knowledge: [
    { id: 1, title: "quiz_title_1", icon: "🌍", questions: 20, minutes: 8 },
    { id: 2, title: "quiz_title_2", icon: "🏙️", questions: 20, minutes: 8 },
    { id: 3, title: "quiz_title_3", icon: "🧠", questions: 20, minutes: 8 },
    { id: 4, title: "quiz_title_4", icon: "📜", questions: 20, minutes: 10 },
    { id: 5, title: "quiz_title_5", icon: "🪐", questions: 20, minutes: 10 },
    { id: 6, title: "quiz_title_6", icon: "📘", questions: 17, minutes: 6 },
  ],
  personality: [
    { id: 7, title: "quiz_title_7", icon: "🧙‍♂️", questions: 20, minutes: 8 },
    { id: 8, title: "quiz_title_8", icon: "🐭", questions: 19, minutes: 8 },
    { id: 9, title: "quiz_title_9", icon: "🦸‍♀️", questions: 20, minutes: 9 },
    { id: 10, title: "quiz_title_10", icon: "🏖️", questions: 20, minutes: 8 },
    { id: 11, title: "quiz_title_11", icon: "🎬", questions: 19, minutes: 8 },
  ],
  psychological: [
    { id: 12, title: "quiz_title_12", icon: "🧩", questions: 15, minutes: 10 },
    { id: 13, title: "quiz_title_13", icon: "🎂", questions: 21, minutes: 10 },
    { id: 14, title: "quiz_title_14", icon: "💞", questions: 20, minutes: 10 },
    {
      id: 15,
      title: "quiz_title_15",
      icon: "🧍‍♀️👯",
      questions: 20,
      minutes: 10,
    },
    { id: 16, title: "quiz_title_16", icon: "👑", questions: 20, minutes: 10 },
    { id: 17, title: "quiz_title_17", icon: "🗣️", questions: 20, minutes: 10 },
    { id: 18, title: "quiz_title_18", icon: "😰", questions: 20, minutes: 10 },
    { id: 19, title: "quiz_title_19", icon: "💌", questions: 19, minutes: 10 },
  ],
};

const QuizList = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const name = location.state?.name || "";
  const { t } = useLanguage();

  // ✅ If psychological is selected, show "coming soon" screen
  if (category === "psychological") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100 px-6 py-10 text-center">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">
          {t("quizlist_psych_disabled_title")}
        </h1>
        <p className="text-md text-gray-600 max-w-xl mb-6">
          {t("quizlist_psych_disabled_message")}
        </p>
        <button
          onClick={() => navigate("/select-quiz")}
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:brightness-110 transition"
        >
          {t("quiz_back")}
        </button>
      </div>
    );
  }

  const quizzes = quizzesByCategory[category || ""] || [];

  const handleQuizSelect = (quizId: number) => {
    navigate(`/quiz/${quizId}`, { state: { name } });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100 px-6 py-10">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-500 to-yellow-500 mb-6 text-center drop-shadow">
        {t("quizlist_title", { name })}
      </h1>

      <p className="text-md text-gray-700 mb-8 text-center max-w-2xl">
        {t("quizlist_subtitle")}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl select-none">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            onClick={() => handleQuizSelect(quiz.id)}
            className="relative group bg-white rounded-3xl border border-transparent shadow-xl hover:shadow-2xl hover:border-pink-300 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03] cursor-pointer p-8 pt-12 flex flex-col items-center text-center"
          >
            <div className="absolute top-4 right-4 flex flex-col items-end gap-2 group">
              <div className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-white/70 to-white/50 backdrop-blur-md border border-white/40 shadow-md text-[11px] font-semibold text-gray-700 tracking-wide transform transition-transform duration-300 group-hover:-translate-y-1">
                {t("quizlist_questionCount", { count: quiz.questions })}
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-white/70 to-white/50 backdrop-blur-md border border-white/40 shadow-md text-[11px] font-semibold text-gray-700 tracking-wide transform transition-transform duration-300 group-hover:-translate-y-1">
                {t("quizlist_minutes", { count: quiz.minutes })}
              </div>
            </div>

            <div className="text-6xl mb-6 transition-transform group-hover:scale-110">
              {quiz.icon}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 transition-colors duration-300 group-hover:brightness-110">
              {t(quiz.title as any)}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizList;
