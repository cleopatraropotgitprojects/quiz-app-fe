import React from "react";

type Props = {
  name: string;
  topTrait: string;
  quizId: number;
  time: string;
};

const PsychologicalResult: React.FC<Props> = ({
  name,
  topTrait,
  quizId,
  time,
}) => {
  const messages: Record<
    number,
    { icon: string; title: string; color: string; message: string }
  > = {
    12: {
      icon: "🧩",
      title: "You’re more",
      color: "text-blue-600",
      message: "Logical or creative? You’ve found your dominant side!",
    },
    13: {
      icon: "🎂",
      title: "Your mental age is",
      color: "text-rose-600",
      message: "Age is just a number, but insight is timeless.",
    },
    14: {
      icon: "💞",
      title: "You are deeply",
      color: "text-pink-600",
      message: "Empathy is your superpower 💖",
    },
    15: {
      icon: "🧍‍♀️👯",
      title: "You’re more",
      color: "text-indigo-600",
      message: "Knowing yourself is a key to connection.",
    },
    16: {
      icon: "👑",
      title: "Your leadership style is",
      color: "text-yellow-600",
      message: "Great leaders know their strengths.",
    },
    17: {
      icon: "🗣️",
      title: "Your communication style is",
      color: "text-green-600",
      message: "The way you speak shapes the world around you.",
    },
    18: {
      icon: "😰",
      title: "Under stress, you tend to be",
      color: "text-red-600",
      message: "Understanding your reaction is your first step to mastery.",
    },
    19: {
      icon: "💌",
      title: "Your love language is",
      color: "text-purple-600",
      message: "Love is spoken in many forms. Yours is unique.",
    },
  };

  const result = messages[quizId];

  return (
    <div className="text-center space-y-3">
      <div className="text-4xl">{result?.icon}</div>
      <h2 className={`text-2xl font-extrabold ${result?.color}`}>
        {result?.title} <span className="font-bold">{topTrait}</span>
      </h2>
      <p className="text-sm text-gray-500">{result?.message}</p>
      <p className="text-sm text-gray-600">⏱ Time taken: {time}</p>

      <p className="text-xs text-gray-400">Nice job, {name}! 🎯</p>
    </div>
  );
};

export default PsychologicalResult;
