import React from "react";
import { useLanguage } from "../../../contexts/LanguageContext";

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
  const { t } = useLanguage();

  const labelKey = `entertainment_label_${quizId}` as
    | "entertainment_label_7"
    | "entertainment_label_8"
    | "entertainment_label_9"
    | "entertainment_label_10"
    | "entertainment_label_11";

  const suffixKey = `entertainment_suffix_${quizId}` as
    | "entertainment_suffix_7"
    | "entertainment_suffix_8"
    | "entertainment_suffix_9"
    | "entertainment_suffix_10"
    | "entertainment_suffix_11";

  const resultColors: Record<number, string> = {
    7: "text-indigo-600",
    8: "text-pink-600",
    9: "text-red-600",
    10: "text-orange-500",
    11: "text-rose-500",
  };

  const resultIcons: Record<number, string> = {
    7: "🧙‍♂️",
    8: "🐭",
    9: "🦸‍♀️",
    10: "🏖️",
    11: "🎬",
  };

  return (
    <div className="text-center space-y-3">
      <div className="text-4xl">{resultIcons[quizId] || "✨"}</div>

      <h2 className="text-2xl font-extrabold text-purple-600">
        {t(labelKey)}{" "}
        <span className={`${resultColors[quizId]} font-bold`}>
          {topCharacter}
        </span>{" "}
        {t(suffixKey)}
      </h2>

      <p className="text-sm text-gray-600">
        ⏱ {t("timeTaken")}: {time}
      </p>
      <p className="text-sm text-gray-500">
        {t("thanks")}, {name}!
      </p>
    </div>
  );
};

export default EntertainmentResult;
