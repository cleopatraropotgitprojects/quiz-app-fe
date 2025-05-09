import React from "react";

type Props = {
  score: number;
  total: number;
  name: string;
};

const KnowledgeResult: React.FC<Props> = ({ score, total, name }) => {
  return (
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

      <div className="text-xl font-bold bg-green-100 text-green-800 px-8 py-2 rounded-full shadow-inner">
        Score: {score} / {total}
      </div>
    </>
  );
};

export default KnowledgeResult;
