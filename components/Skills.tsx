"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import ExtraSkills from "./ExtraSkills";
import {
  categories,
  CategoryData,
  SkillCategoryProps,
  SkillData,
  skillsExtra,
  skillsTitles,
  technicalSkillsEnd,
  technicalSkillsStart,
} from "@/data/skills";
import { useLanguage } from "@/context/LanguageContext";

const SkillBar = ({ name, pathToLogo }: SkillData) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-24"
      whileHover={{ scale: 1.2, cursor: "pointer" }}
    >
      <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center overflow-hidden border border-[var(--color-muted)]">
        <Image
          src={pathToLogo}
          alt={name}
          width={36}
          height={36}
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <span className="mt-2 text-center font-medium text-sm text-[var(--color-on-primary)]">
        {name}
      </span>
    </motion.div>
  );
};

const SkillCategory = ({ title, skills, icon }: SkillCategoryProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [angles, setAngles] = useState(
    skills.map((_, i) => (i / skills.length) * 2 * Math.PI),
  );
  const [mounted, setMounted] = useState(false);
  const [radiusX, setRadiusX] = useState(120);
  const [radiusY, setRadiusY] = useState(140);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadiusX(92);
        setRadiusY(132);
      } else {
        setRadiusX(120);
        setRadiusY(140);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let animationFrame = 0;
    const normalSpeed = window.innerWidth < 640 ? 0.002 : 0.003;
    const slowSpeed = normalSpeed / 5;

    const animate = () => {
      setAngles((prev) =>
        prev.map((angle) => angle + (isHovered ? slowSpeed : normalSpeed)),
      );
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 0 }}
      animate={isInView ? { opacity: 1, y: 30 } : { opacity: 0, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[var(--color-primary)]/20 p-6 sm:p-8 rounded-xl border border-border hover:border-[var(--color-background)] shadow-sm hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-3 mb-8 justify-center">
        <div className="w-10 h-10 bg-[var(--color-background)] rounded-lg flex items-center justify-center">
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-foreground)]">
          {title}
        </h3>
      </div>

      <div
        className="relative mx-auto"
        style={{
          width: radiusX * 2 + 48,
          height: radiusY * 2 + 48,
        }}
      >
        {mounted &&
          skills.map((skill: SkillData, index) => (
            <motion.div
              key={skill.name}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                x: radiusX * Math.cos(angles[index]),
                y: radiusY * Math.sin(angles[index]),
              }}
            >
              <SkillBar {...skill} />
            </motion.div>
          ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();

  return (
    <section id="skills" ref={ref} className="py-20 bg-[var(--color-highlight)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {technicalSkillsStart[language]}
            <span className="text-[var(--color-on-primary)]">
              {technicalSkillsEnd[language]}
            </span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-background)] mx-auto rounded-full mb-6" />
          <p className="text-lg max-w-2xl mx-auto">{skillsExtra[language]}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {categories.map((category: CategoryData, index: number) => (
            <SkillCategory
              key={index}
              title={skillsTitles[language][category.title]}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
      <ExtraSkills />
    </section>
  );
};

export default Skills;
