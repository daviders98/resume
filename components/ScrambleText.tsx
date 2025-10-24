import { useState, useEffect } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

interface ScrambleTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

export default function ScrambleText({
  text,
  speed = 50,
  onComplete,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let iteration = 0;
    const original = text.split("");

    const interval = setInterval(() => {
      setDisplayText(
        original
          .map((char, idx) => {
            if (idx < iteration) return char;
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      iteration += 1 / 2;
      if (iteration >= original.length) {
        clearInterval(interval);
        setDisplayText(text);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <span style={{ fontFamily: "monospace", letterSpacing: "0.05em" }}>
      {displayText}
    </span>
  );
}
