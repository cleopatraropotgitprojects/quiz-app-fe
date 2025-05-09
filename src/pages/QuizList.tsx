import { useLocation, useParams, useNavigate } from "react-router-dom";

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
    {
      id: 1,
      title: "How well do you know European geography?",
      icon: "🌍",
      questions: 20,
      minutes: 8,
    }, // europe-geo
    {
      id: 2,
      title: "Which country is this capital from?",
      icon: "🏙️",
      questions: 20,
      minutes: 8,
    }, // capital-quiz
    {
      id: 3,
      title: "General knowledge: quick edition",
      icon: "🧠",
      questions: 20,
      minutes: 8,
    }, // general-quick
    {
      id: 4,
      title: "History test: key events of the 20th century",
      icon: "📜",
      questions: 20,
      minutes: 10,
    }, // 20th-century-history
    {
      id: 5,
      title: "What do you know about space and planets?",
      icon: "🪐",
      questions: 20,
      minutes: 10,
    }, // space-planets
    {
      id: 6,
      title: "English grammar test",
      icon: "📘",
      questions: 20,
      minutes: 9,
    }, // romanian-grammar
  ],
  personality: [
    {
      id: 7,
      title: "Which Harry Potter character are you?",
      icon: "🧙‍♂️",
      questions: 20,
      minutes: 8,
    }, // hp-character
    {
      id: 8,
      title: "Which Disney character matches your personality?",
      icon: "🐭",
      questions: 19,
      minutes: 8,
    }, // disney-character
    {
      id: 9,
      title: "Which Marvel superhero are you?",
      icon: "🦸‍♀️",
      questions: 20,
      minutes: 9,
    }, // marvel-hero
    {
      id: 10,
      title: "What’s your ideal vacation?",
      icon: "🏖️",
      questions: 20,
      minutes: 8,
    }, // ideal-vacation
    {
      id: 11,
      title: "Which Netflix character would you be?",
      icon: "🎬",
      questions: 19,
      minutes: 8,
    }, // netflix-character
  ],
  psychological: [
    {
      id: 12,
      title: "Are you more logical or creative?",
      icon: "🧩",
      questions: 15,
      minutes: 10,
    }, // logic-or-creative
    {
      id: 13,
      title: "What’s your mental age?",
      icon: "🎂",
      questions: 21,
      minutes: 10,
    }, // mental-age
    {
      id: 14,
      title: "How empathetic are you?",
      icon: "💞",
      questions: 20,
      minutes: 10,
    }, // empathy-level
    {
      id: 15,
      title: "Are you more introverted or extroverted?",
      icon: "🧍‍♀️👯",
      questions: 20,
      minutes: 10,
    }, // introvert-extrovert
    {
      id: 16,
      title: "What kind of leader are you?",
      icon: "👑",
      questions: 20,
      minutes: 10,
    }, // leader-type
    {
      id: 17,
      title: "What’s your communication style?",
      icon: "🗣️",
      questions: 20,
      minutes: 10,
    }, // communication-style
    {
      id: 18,
      title: "How do you react under stress?",
      icon: "😰",
      questions: 20,
      minutes: 10,
    }, // stress-response
    {
      id: 19,
      title: "What’s your love language?",
      icon: "💌",
      questions: 19,
      minutes: 10,
    }, // love-language
  ],
};

const QuizList = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const name = location.state?.name || "";

  const quizzes = quizzesByCategory[category || ""] || [];

  const handleQuizSelect = (quizId: number) => {
    navigate(`/quiz/${quizId}`, { state: { name } });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100 px-6 py-10">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-500 to-yellow-500 mb-6 text-center drop-shadow">
        Choose a quiz, {name}!
      </h1>

      <p className="text-md text-gray-700 mb-8 text-center max-w-2xl">
        We've selected the best knowledge challenges for you. Pick one and let's
        dive in! ✨
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl select-none">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            onClick={() => handleQuizSelect(quiz.id)}
            className="relative group bg-white rounded-3xl border border-transparent shadow-xl hover:shadow-2xl hover:border-pink-300 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03] cursor-pointer p-8 pt-12 flex flex-col items-center text-center"
          >
            {/* Badge-ul din colțul dreapta sus */}
            <div className="absolute top-4 right-4 flex flex-col items-end gap-2 group">
              <div className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-white/70 to-white/50 backdrop-blur-md border border-white/40 shadow-md text-[11px] font-semibold text-gray-700 tracking-wide transform transition-transform duration-300 group-hover:-translate-y-1">
                {quiz.questions} questions
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-white/70 to-white/50 backdrop-blur-md border border-white/40 shadow-md text-[11px] font-semibold text-gray-700 tracking-wide transform transition-transform duration-300 group-hover:-translate-y-1">
                {quiz.minutes} minutes
              </div>
            </div>

            <div className="text-6xl mb-6 transition-transform group-hover:scale-110">
              {quiz.icon}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 transition-colors duration-300 group-hover:brightness-110">
              {quiz.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizList;
