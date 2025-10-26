"use client";
import { motion } from "framer-motion";
import {
  faChevronDown,
  faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import scrollToSection from "@/utils/scroller";
import { heroData } from "@/data/hero";
import { useLanguage } from "@/context/LanguageContext";
import ScrambleText from "../components/ScrambleText";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);
  const [rowWidth, setRowWidth] = useState(1);
  const { language } = useLanguage();

  useEffect(() => {
    const updateWidth = () => {
      if (rowRef.current) {
        setRowWidth(Math.ceil(rowRef.current.scrollWidth / 2));
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleNextWord = () => {
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % heroData.words[language].length);
    }, 1000);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative"
    >
      {/* Added padding-top to account for navbar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 lg:pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-2 lg:mb-4"
          >
            <span className="inline-block px-4 py-2 bg-[var(--color-highlight)]/30 text-[var(--color-foreground)] rounded-full text-2xl font-medium">
              <motion.span
                className="inline-block"
                animate={{ rotate: [0, 20, -10, 20, 0] }}
                transition={{ duration: 1.5 }}
              >
                👋
              </motion.span>{" "}
              {heroData.greeting[language]}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-[var(--color-foreground)] via-[var(--color-foreground)] to-[var(--color-foreground)]/60 bg-clip-text text-transparent"
          >
            David
            <br />
            García
          </motion.h1>

          <motion.p
            className="md:text-4xl text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ScrambleText
              text={heroData.words[language][index]}
              speed={80}
              onComplete={handleNextWord}
            />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl mb-4 lg:mb-8 max-w-2xl mx-auto mt-12 lg:mt-14"
          >
            <b>{heroData.slogan[language]}</b>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <button
              onClick={() => scrollToSection({ href: "#portfolio" })}
              className="group min-w-[200px] border-1 border-[var(--color-foreground)] rounded-lg p-2 cursor-pointer hover:bg-[var(--color-highlight)] hover:text-[var(--color-on-primary)]"
            >
              {heroData.portfolioCTAText[language]}
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </button>
            <button
              onClick={() => scrollToSection({ href: "#contact" })}
              className="min-w-[200px] bg-[var(--color-foreground)] text-[var(--color-on-primary)] rounded-lg p-2 cursor-pointer hover:bg-[var(--color-secondary)] hover:border-1 hover:border-[var(--color-foreground)]"
            >
              {heroData.contactCTAText[language]}
              <FontAwesomeIcon icon={faSquareEnvelope} className="ml-2" />
            </button>
          </motion.div>

          {rowWidth > 0 && (
            <motion.div
              className="overflow-x-clip relative overflow-y-visible"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                ref={rowRef}
                className="flex gap-3"
                animate={{ x: [0, -rowWidth] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                    duration: 30,
                  },
                }}
              >
                {heroData.techs.concat(heroData.techs).map((tech, index) => (
                  <div key={index} className="inline-block">
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="px-4 py-2 bg-[var(--color-primary)] rounded-lg text-sm 
    font-medium border border-[var(--color-foreground)] hover:border-[var(--color-foreground)] hover:border-1 
    hover:rounded-lg hover:bg-[var(--color-secondary)] cursor-pointer whitespace-nowrap 
    hover:relative hover:bottom-1 hover:text-[var(--color-on-primary)]"
                    >
                      {tech}
                    </motion.span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-col items-center mt-20 lg:mt-20 mb-4"
          >
            <motion.a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection({ href: "#about" });
              }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="hover:text-[var(--color-highlight)] text-[var(--color-muted)]"
            >
              {heroData.discoverMoreText[language]}
              <p className="text-lg mb-2"></p>
              <FontAwesomeIcon icon={faChevronDown} size={"xl"} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
