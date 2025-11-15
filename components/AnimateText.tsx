"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface ScrollWordsTextProps {
  text: string;
  className?: string;
}

const ScrollWordsText: React.FC<ScrollWordsTextProps> = ({
  text,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [progress, setProgress] = useState(0);

  const words = text.split(" ");
  const lettersOnlyCount = text.replace(/\s/g, "").length;

  useEffect(() => {
    if (!ref.current) return;

    const handleScroll = () => {
      if (!isInView) return;

      const rect = ref.current!.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = rect.height / 3;
      const end = rect.bottom;
      const scrollRange = end - start;

      let p = (windowHeight - rect.top) / scrollRange;
      p = Math.min(Math.max(p, 0), 1);

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInView]);

  return (
    <div
      ref={ref}
      className={`flex flex-wrap items-start gap-2 px-4 ${className}`}
    >
      <span
        aria-hidden="true"
        className="inline-block w-8 md:w-20 flex-shrink-0 h-0"
      />

      {words.map((word, wIndex) => {
        const letters = word.split("");
        return (
          <div key={wIndex} className="inline-block leading-relaxed">
            {letters.map((letter, lIndex) => {
              const letterIndex =
                words.slice(0, wIndex).reduce((sum, w) => sum + w.length, 0) +
                lIndex;
              const letterProgress = progress * lettersOnlyCount;
              const visibleOpacity = Math.min(
                Math.max(letterProgress - letterIndex, 0),
                1,
              );
              const finalOpacity = Math.max(visibleOpacity, 0.2);

              return (
                <span
                  key={lIndex}
                  className="font-[Playfair_Display] font-bold text-4xl md:text-5xl lg:text-6xl transition-opacity duration-200 text-[var(--color-on-primary)]"
                  style={{ opacity: finalOpacity }}
                >
                  {letter}
                </span>
              );
            })}
            <span>&nbsp;</span>
          </div>
        );
      })}
    </div>
  );
};

export default ScrollWordsText;
