import { useLocation, useParams, useNavigate } from "react-router-dom";

const quizzesByCategory: Record<
  string,
  { id: number; title: string; icon: string }[]
> = {
  knowledge: [
    { id: 1, title: "How well do you know European geography?", icon: "🌍" }, // europe-geo
    { id: 2, title: "Which country is this capital from?", icon: "🏙️" }, // capital-quiz
    { id: 3, title: "General knowledge: quick edition", icon: "🧠" }, // general-quick
    {
      id: 4,
      title: "History test: key events of the 20th century",
      icon: "📜",
    }, // 20th-century-history
    { id: 5, title: "What do you know about space and planets?", icon: "🪐" }, // space-planets
    { id: 6, title: "English grammar test", icon: "📘" }, // romanian-grammar
  ],
  entertainment: [
    { id: 7, title: "Which Harry Potter character are you?", icon: "🧙‍♂️" }, // hp-character
    {
      id: 8,
      title: "Which Disney character matches your personality?",
      icon: "🐭",
    }, // disney-character
    { id: 9, title: "Which Marvel superhero are you?", icon: "🦸‍♀️" }, // marvel-hero
    { id: 10, title: "What’s your ideal vacation?", icon: "🏖️" }, // ideal-vacation
    { id: 11, title: "Which Netflix character would you be?", icon: "🎬" }, // netflix-character
  ],
  psychological: [
    { id: 12, title: "Are you more logical or creative?", icon: "🧩" }, // logic-or-creative
    { id: 13, title: "What’s your mental age?", icon: "🎂" }, // mental-age
    { id: 14, title: "How empathetic are you?", icon: "💞" }, // empathy-level
    { id: 15, title: "Are you more introverted or extroverted?", icon: "🧍‍♀️👯" }, // introvert-extrovert
    { id: 16, title: "What kind of leader are you?", icon: "👑" }, // leader-type
    { id: 17, title: "What’s your communication style?", icon: "🗣️" }, // communication-style
    { id: 18, title: "How do you react under stress?", icon: "😰" }, // stress-response
    { id: 19, title: "What’s your love language?", icon: "💌" }, // love-language
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
            className="relative group bg-white rounded-3xl border border-transparent shadow-xl hover:shadow-2xl hover:border-pink-300 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03] cursor-pointer p-8 flex flex-col items-center text-center"
          >
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
