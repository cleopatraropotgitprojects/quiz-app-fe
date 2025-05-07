import { useLocation, useNavigate } from "react-router-dom";

const SelectQuiz = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const name = location.state?.name || "";

  const handleCategorySelect = (category: string) => {
    navigate(`/quiz-list/${category}`, { state: { name } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 px-6 py-10">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-4 drop-shadow-md text-center animate-pulse">
        Choose Your Adventure, {name}!
      </h1>

      <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl">
        What kind of quiz are you in the mood for today? Pick a category and let
        the magic begin ✨
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-5xl">
        <div
          onClick={() => handleCategorySelect("knowledge")}
          className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-pink-300 hover:-translate-y-2 transform transition-all cursor-pointer flex flex-col items-center text-center border-4 border-indigo-200 hover:border-indigo-400"
        >
          <div className="text-5xl mb-3">📚</div>
          <h3 className="text-xl font-bold text-indigo-600 mb-2">Knowledge</h3>
          <p className="text-sm text-gray-500">
            Challenge your brain with smart questions!
          </p>
        </div>

        <div
          onClick={() => handleCategorySelect("entertainment")}
          className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-yellow-300 hover:-rotate-1 hover:scale-105 transform transition-all cursor-pointer flex flex-col items-center text-center border-4 border-pink-200 hover:border-pink-400"
        >
          <div className="text-5xl mb-3">🎭</div>
          <h3 className="text-xl font-bold text-pink-600 mb-2">
            Entertainment
          </h3>
          <p className="text-sm text-gray-500">
            Get quirky and discover your character!
          </p>
        </div>

        <div
          onClick={() => handleCategorySelect("psychological")}
          className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-green-300 hover:rotate-1 hover:scale-105 transform transition-all cursor-pointer flex flex-col items-center text-center border-4 border-green-200 hover:border-green-400"
        >
          <div className="text-5xl mb-3">🧠</div>
          <h3 className="text-xl font-bold text-green-600 mb-2">
            Psychological
          </h3>
          <p className="text-sm text-gray-500">
            Learn something new about yourself.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectQuiz;
