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
  if (typeof window === "undefined") return "id";

  // Cek localStorage dulu (override manual user)
  const stored = localStorage.getItem("aksara-lang") as Language | null;
  if (stored && (stored === "en" || stored === "id")) return stored;

  // Cek cookie dari middleware (deteksi IP / negara)
  const countryCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("aksara-country="));
  if (countryCookie) {
    const country = countryCookie.split("=")[1];
    // Jika negara bukan Indonesia, gunakan bahasa Inggris
    if (country && country !== "ID") {
      return "en";
    }
  }

  // Default: Bahasa Indonesia
  return "id";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("id");
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
    // Render dengan default Indonesian saat SSR untuk menghindari hydration mismatch
    return (
      <LanguageContext.Provider
        value={{ lang: "id", setLang, t: translations["id"] }}
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
