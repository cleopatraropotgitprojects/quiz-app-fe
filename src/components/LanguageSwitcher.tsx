import { useLanguage } from "../contexts/LanguageContext";
import { ChevronDown } from "lucide-react";

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="absolute top-4 right-4 z-50">
      <div className="relative inline-block">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value as any)}
          className="appearance-none pl-3 pr-8 py-2 text-sm font-medium bg-white text-gray-800 border border-gray-200 rounded-full shadow-md focus:outline-none focus:ring-0 transition duration-200"
        >
          <option value="en">🇬🇧 EN</option>
          <option value="ro">🇷🇴 RO</option>
          <option value="it">🇮🇹 IT</option>
          <option value="fr">🇫🇷 FR</option>
          <option value="ru">🇷🇺 RU</option>
        </select>
        <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
