"use client";

import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 glass border-b border-cyan-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-neon-text"
          >
            Aksara Dev Studio
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{
                  color: "#00d9ff",
                  textShadow: "0 0 10px rgba(0, 217, 255, 0.5)",
                }}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </motion.a>
            ))}

            {/* Language Switcher */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setLang(lang === "en" ? "id" : "en")}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-all text-sm"
              title={t.nav.language}
            >
              <Globe size={14} />
              <span className="font-semibold">{lang.toUpperCase()}</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setLang(lang === "en" ? "id" : "en")}
              className="flex items-center gap-1 px-2 py-1 rounded-full border border-cyan-500/30 text-cyan-400 text-xs"
            >
              <Globe size={12} />
              <span className="font-semibold">{lang.toUpperCase()}</span>
            </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cyan-400"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4 space-y-3 border-t border-cyan-500/20 pt-4"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-300 hover:text-cyan-400 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
