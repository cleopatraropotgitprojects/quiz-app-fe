import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (name.trim()) {
      navigate("/select-quiz", { state: { name } });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100 px-4">
      <h1 className="text-5xl font-extrabold mb-4 text-pink-600 text-center drop-shadow-sm">
        Ready to Play?
      </h1>

      <p className="text-lg text-gray-700 mb-6 text-center max-w-md">
        Enter your name to begin your colorful quiz journey!
      </p>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="What's your name?"
        className="p-4 rounded-full border-2 border-pink-300 w-full max-w-sm mb-5 text-center text-lg shadow-md focus:outline-none focus:ring-4 focus:ring-pink-400 transition"
      />
      <button
        onClick={handleStart}
        className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-8 py-3 rounded-full font-bold text-lg hover:scale-105 hover:brightness-110 transition-all duration-200 shadow-lg"
      >
        🎉 Start the Quiz!
      </button>
    </div>
  );
};

export default Home;
