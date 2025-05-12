import React from "react";
import { useLanguage } from "../../../contexts/LanguageContext";

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
  const { t } = useLanguage();

  const messages: Record<number, { icon: string; color: string }> = {
    12: { icon: "🧩", color: "text-blue-600" },
    13: { icon: "🎂", color: "text-rose-600" },
    14: { icon: "💞", color: "text-pink-600" },
    15: { icon: "🧍‍♀️👯", color: "text-indigo-600" },
    16: { icon: "👑", color: "text-yellow-600" },
    17: { icon: "🗣️", color: "text-green-600" },
    18: { icon: "😰", color: "text-red-600" },
    19: { icon: "💌", color: "text-purple-600" },
  };

  const result = messages[quizId];

  const titleKey = `psych_title_${quizId}` as
    | "psych_title_12"
    | "psych_title_13"
    | "psych_title_14"
    | "psych_title_15"
    | "psych_title_16"
    | "psych_title_17"
    | "psych_title_18"
    | "psych_title_19";

  const messageKey = `psych_message_${quizId}` as
    | "psych_message_12"
    | "psych_message_13"
    | "psych_message_14"
    | "psych_message_15"
    | "psych_message_16"
    | "psych_message_17"
    | "psych_message_18"
    | "psych_message_19";

  return (
    <div className="text-center space-y-3">
      <div className="text-4xl">{result?.icon}</div>
      <h2 className={`text-2xl font-extrabold ${result?.color}`}>
        {t(titleKey)} <span className="font-bold">{topTrait}</span>
      </h2>
      <p className="text-sm text-gray-500">{t(messageKey)}</p>
      <p className="text-sm text-gray-600">
        ⏱ {t("timeTaken")}: {time}
      </p>
      <p className="text-xs text-gray-400">{t("psych_done", { name })}</p>
    </div>
  );
};

export default PsychologicalResult;
