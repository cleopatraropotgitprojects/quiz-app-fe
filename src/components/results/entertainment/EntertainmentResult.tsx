import React from "react";

type Props = {
  quizId: number;
  topCharacter: string;
  name: string;
  time: string;
};

const EntertainmentResult: React.FC<Props> = ({
  quizId,
  topCharacter,
  name,
  time,
}) => {
  const results: Record<
    number,
    { icon: string; color: string; label: string; suffix: string }
  > = {
    7: {
      icon: "🧙‍♂️",
      color: "text-indigo-600",
      label: "You’re most like",
      suffix: "from Harry Potter!",
    },
    8: {
      icon: "🐭",
      color: "text-pink-600",
      label: "",
      suffix: "is your Disney twin!",
    },
    9: {
      icon: "🦸‍♀️",
      color: "text-red-600",
      label: "Your inner hero is",
      suffix: "!",
    },
    10: {
      icon: "🏖️",
      color: "text-orange-500",
      label: "Your dream vacation vibe is:",
      suffix: "!",
    },
    11: {
      icon: "🎬",
      color: "text-rose-500",
      label: "If you lived on Netflix, you’d be",
      suffix: "!",
    },
  };

  const result = results[quizId];

  return (
    <div className="text-center space-y-3">
      <div className="text-4xl">🦸‍♀️✨</div>
      {result && (
        <h2 className="text-2xl font-extrabold text-purple-600">
          {result.label && <>{result.label} </>}
          <span className={`${result.color} font-bold`}>
            {topCharacter}
          </span>{" "}
          {result.suffix}
          <p className="text-sm text-gray-600">⏱ Time taken: {time}</p>
        </h2>
      )}
      <p className="text-sm text-gray-500">Thanks for playing, {name}!</p>
    </div>
  );
};

export default EntertainmentResult;
