"use client";
import { faCog, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Language, languages, useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

export default function SettingsPanel() {
  const [opened, setOpened] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { isDark, toggleDark } = useTheme();

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {!opened && (
        <button
          onClick={() => setOpened(true)}
          className="w-12 h-12 rounded-full bg-[var(--color-muted)] flex items-center justify-center shadow-md hover:bg-[var(--color-highlight)]/70"
          aria-label="Open Settings"
        >
          <FontAwesomeIcon icon={faCog} className="text-[var(--color-background)]" />
        </button>
      )}

      {opened && (
        <motion.div
          className="mt-2 p-3 bg-[var(--color-background)] shadow-lg rounded-md flex flex-col gap-2 w-36"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <button
            onClick={() => setOpened(false)}
            className="self-end text-[var(--color-muted)] hover:text-[var(--color-primary)]"
            aria-label="Close Settings"
          >
            ✕
          </button>

          <div className="flex flex-col gap-1">
            <span className="font-medium text-sm text-[var(--color-foreground)]">Language</span>
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`px-2 py-1 rounded text-left text-sm hover:bg-[var(--color-muted)]/50 ${
                  language === lang.code ? "font-bold bg-[var(--color-muted)]/30" : ""
                }`}
                onClick={() => setLanguage(lang.code as Language)}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-1 mt-2">
            <span className="font-medium text-sm text-[var(--color-foreground)]">Theme</span>
            <button
              className="px-2 py-1 rounded flex items-center gap-2 text-sm hover:bg-[var(--color-muted)]/50"
              onClick={toggleDark}
            >
              <FontAwesomeIcon icon={isDark ? faMoon : faSun} />
              {isDark ? "Dark" : "Light"}
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
