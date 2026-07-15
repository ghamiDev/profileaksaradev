"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Language, translations } from "./translations";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (typeof translations)["en"];
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

// Deteksi bahasa dari preferensi browser / lokasi
function detectLanguage(): Language {
  if (typeof window === "undefined") return "en";

  // Cek localStorage dulu
  const stored = localStorage.getItem("aksara-lang") as Language | null;
  if (stored && (stored === "en" || stored === "id")) return stored;

  // Deteksi dari navigator.language
  const browserLang = navigator.language || "";
  if (browserLang.startsWith("id")) return "id";

  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const detected = detectLanguage();
    setLangState(detected);
    setMounted(true);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("aksara-lang", newLang);
  };

  if (!mounted) {
    // Render dengan default English saat SSR untuk menghindari hydration mismatch
    return (
      <LanguageContext.Provider
        value={{ lang: "en", setLang, t: translations["en"] }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
