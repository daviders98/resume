"use client";
import { ReactNode } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import NavBar from "@/components/NavBar";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { backToHome } from "@/data/pages";

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});
const SettingsPanel = dynamic(() => import("@/components/SettingsPanel"));

const BackToHome = () => {
  const { language } = useLanguage();

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-6">
      <motion.div whileHover={{ x: -4 }} className="w-fit">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-foreground)] hover:text-[var(--color-highlight)]"
        >
          <FontAwesomeIcon icon={faArrowLeftLong} />
          {backToHome[language]}
        </Link>
      </motion.div>
    </div>
  );
};

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] min-w-full">
        <NavBar />
        <main className="pt-16">
          <BackToHome />
          {children}
        </main>
        <Footer />
        <SettingsPanel />
      </div>
    </LanguageProvider>
  );
}
