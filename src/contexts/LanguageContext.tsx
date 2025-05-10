import React, { createContext, useContext, useState } from "react";
import { en } from "../i18n/en";
import { ro } from "../i18n/ro";
import { fr } from "../i18n/fr";
import { ru } from "../i18n/ru";
import { it } from "../i18n/it";

const languages = { en, ro, it, fr, ru };

type Lang = "en" | "ro" | "it" | "fr" | "ru";
type Dictionary = typeof en;

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: keyof Dictionary | string, vars?: Record<string, string | number>) => string;
}>({
  lang: "en",
  setLang: () => {},
  t: () => "",
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLang] = useState<Lang>("en");

  const t = (
    key: keyof Dictionary | string,
    vars: Record<string, string | number> = {},
  ) => {
    const currentLang = languages[lang];
    let template = (currentLang as Record<string, string>)[key] || "";
    for (const varKey in vars) {
      template = template.replace(`{{${varKey}}}`, String(vars[varKey]));
    }
    return template;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
