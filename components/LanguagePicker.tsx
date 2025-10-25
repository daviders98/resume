"use client";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Language, languages, useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function LanguagePicker() {
  const [opened, setOpened] = useState(false);
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50 rounded-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {!opened && (
        <button
          onClick={() => setOpened(true)}
          className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shadow-md hover:bg-highlight/70"
          aria-label="Select Language"
        >
          <FontAwesomeIcon icon={faLanguage} className="text-background" />
        </button>
      )}

      {opened && (
        <div className="mt-2 p-2 bg-white shadow-lg rounded-md flex flex-col">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`px-2 py-1 hover:bg-muted/80 rounded ${language === lang.code ? "font-bold" : ""}`}
              onClick={() => {
                setLanguage(lang.code as Language);
                setOpened(false);
              }}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}
