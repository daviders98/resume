import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ExtraSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const extraSkills = [
    "Rest APIs",
    "Microservices",
    "Agile/Scrum",
    "TDD",
    "CI/CD",
    "Responsive Design",
    "Performance Optimization",
    "ORMs",
    "Load Testing",
    "E2E Testing",
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-12 text-center"
    >
      <h3 className="text-xl font-semibold mb-6">I have also worked with:</h3>
      <div className="pl-4 pr-4 flex flex-wrap justify-center gap-3 justify-self-center">
        {extraSkills.map((tech, index) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.1, y: -2 }}
            className="px-4 py-2 bg-secondary/90 text-on-primary rounded-lg text-sm font-medium border-1 hover:border-foreground hover:text-foreground transition-colors cursor-default"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default ExtraSkills;
