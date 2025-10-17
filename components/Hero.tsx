import { motion } from "framer-motion";
import {
  faChevronDown,
  faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrambleText from "../components/ScrambleText";
import { useEffect, useRef, useState } from "react";
import scrollToSection from "@/utils/scroller";

const Hero = () => {
  const words = [
    "FULL STACK DEVELOPER",
    "MENTOR",
    "INNOVATOR",
    "TEAM LEADER",
    "PROBLEM SOLVER",
    "RESULT DRIVEN",
    "UX/UI Connoisseur",
    "API CRAFTSMAN",
    "TECHNICAL CONSULTANT",
    "AUTOMATION ADVOCATE"
  ];
  const [index, setIndex] = useState(0);
  const techs = [
    "React",
    "NodeJS",
    "TypeScript",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Heroku",
    "Azure",
    "MySQL",
    "Firebase",
    "React Native",
    "Android",
    "iOS",
    "NextJS",
    "Flexbox",
    "MongoDB",
    "Python",
    "Git",
    "GitHub",
    "GraphQL",
  ];
  const rowRef = useRef<HTMLDivElement>(null);
  const [rowWidth, setRowWidth] = useState(1);

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
      setIndex((prev) => (prev + 1) % words.length);
    }, 1000);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background via-background to-accent/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 bg-primary text-foreground rounded-full text-2xl  font-medium">
              👋 Hi I am
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent"
          >
            {"David"}
            <br />
            {"García"}
          </motion.h1>

          <motion.p
            className="text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ScrambleText
              text={words[index]}
              speed={80}
              onComplete={handleNextWord}
            />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto mt-14"
          >
            <b>{"Crafting the Best Digital Experiences."}</b>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <button onClick={()=>scrollToSection({href:'#portfolio'})} className="group min-w-[200px] border-1 border-foreground rounded-lg p-2 cursor-pointer hover:bg-idk">
              Go to Portfolio
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </button>
            <button onClick={()=>scrollToSection({href:'#contact'})} className="min-w-[200px] bg-foreground text-primary rounded-lg p-2 cursor-pointer hover:bg-muted hover:border-1 hover:border-foreground">
              Contact Now
              <FontAwesomeIcon icon={faSquareEnvelope} className="ml-2" />
            </button>
          </motion.div>

          {rowWidth > 0 && (
            <motion.div className="overflow-x-clip relative overflow-y-visible"
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
                {techs.concat(techs).map((tech, index) => (
                  <div key={index} className="inline-block">
  <motion.span
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm 
    font-medium border border-foreground hover:border-foreground hover:border-1 
    hover:rounded-lg hover:bg-hover cursor-pointer whitespace-nowrap 
    hover:relative hover:bottom-1 hover:text-primary"
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
            className="flex flex-col items-center mt-20"
          >
            <p className="text-lg text-foreground mb-2">
              Discover more
            </p>
            <motion.a
                href="#about"
                onClick={(e)=>{
                    e.preventDefault()
                }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FontAwesomeIcon icon={faChevronDown} size={"xl"} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
