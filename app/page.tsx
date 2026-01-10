"use client";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import { useEffect } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));
const Experience = dynamic(() => import("@/components/Experience"));
const Portfolio = dynamic(() => import("@/components/Portfolio"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const SettingsPanel = dynamic(() => import("@/components/SettingsPanel"));

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <LanguageProvider>
      {" "}
      <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] min-w-full">
        <NavBar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
        <SettingsPanel />
      </div>
    </LanguageProvider>
  );
}

export default App;
