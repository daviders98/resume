"use client";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import About from "@/components/About";
import { useEffect } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import SettingsPanel from "@/components/SettingsPanel";

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
