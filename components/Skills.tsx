"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import ExtraSkills from "./ExtraSkills";

const SkillBar = ({ skill }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-24"
      whileHover={{ scale: 1.2, cursor: "pointer" }}
    >
      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden border border-gray-200">
        <Image
          src={skill.pathToLogo}
          alt={skill.name}
          width={36}
          height={36}
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <span className="mt-2 text-center font-medium text-sm text-primary">
        {skill.name}
      </span>
    </motion.div>
  );
};

const SkillCategory = ({ title, skills, icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [angles, setAngles] = useState(
    skills.map((_, i) => (i / skills.length) * 2 * Math.PI)
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
    let animationFrame;
    const normalSpeed = window.innerWidth < 640 ? 0.002 : 0.003;
    const slowSpeed = normalSpeed / 5;

    const animate = () => {
      setAngles((prev) =>
        prev.map((angle) => angle + (isHovered ? slowSpeed : normalSpeed))
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
      className="bg-background p-6 sm:p-8 rounded-xl border border-border hover:border-primary shadow-sm hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-3 mb-8 justify-center">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-foreground">{title}</h3>
      </div>

      <div
        className="relative mx-auto"
        style={{
          width: radiusX * 2 + 48,
          height: radiusY * 2 + 48,
        }}
      >
        {mounted &&
          skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                x: radiusX * Math.cos(angles[index]),
                y: radiusY * Math.sin(angles[index]),
              }}
            >
              <SkillBar skill={skill} />
            </motion.div>
          ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    {
      title: "Front-end",
      skills: [
        { name: "CSS3", pathToLogo: "/images/technologies/css3.png" },
        { name: "TailwindCSS", pathToLogo: "/images/technologies/tailwind.png" },
        { name: "Ant Design", pathToLogo: "/images/technologies/antd.jpg" },
        { name: "Material UI", pathToLogo: "/images/technologies/material-ui.jpg" },
        { name: "ReactJS", pathToLogo: "/images/technologies/react.png" },
        { name: "NextJS", pathToLogo: "/images/technologies/nextjs.png" },
        {name:"React Native", pathToLogo: "/images/technologies/react-native.png"}
      ],
      icon: "🎨",
    },
    {
      title: "Back-end",
      skills: [
        { name: "NodeJS", pathToLogo: "/images/technologies/nodejs.png" },
        { name: "NextJS", pathToLogo: "/images/technologies/nextjs.png" },
        { name: "Express", pathToLogo: "/images/technologies/express.png" },
        { name: "NestJS", pathToLogo: "/images/technologies/nestjs.png" },
        { name: "Python", pathToLogo: "/images/technologies/python.png" },
        { name: "Django", pathToLogo: "/images/technologies/django.png" },
        { name: "GraphQL", pathToLogo: "/images/technologies/graphql.png" },
      ],
      icon: "⚙️",
    },
    {
      title: "Database",
      skills: [
        { name: "PostgreSQL", pathToLogo: "/images/technologies/postgresql.png" },
        { name: "MongoDB", pathToLogo: "/images/technologies/mongodb.png" },
        { name: "Redis", pathToLogo: "/images/technologies/redis.png" },
        { name: "MySQL", pathToLogo: "/images/technologies/mysql.png" },
        { name: "Firebase", pathToLogo: "/images/technologies/firebase.png" },
      ],
      icon: "💾",
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", pathToLogo: "/images/technologies/git.png" },
        { name: "Docker", pathToLogo: "/images/technologies/docker.png" },
        { name: "AWS", pathToLogo: "/images/technologies/aws.png" },
        { name: "Postman", pathToLogo: "/images/technologies/postman.png" },
        { name: "Heroku", pathToLogo: "/images/technologies/heroku.png" },
        { name: "Datadog", pathToLogo: "/images/technologies/datadog.png" },
        { name: "Figma", pathToLogo: "/images/technologies/figma.png" },
        { name: "Render", pathToLogo: "/images/technologies/render.png" },
        { name: "Github", pathToLogo: "/images/technologies/github.png" },
      ],
      icon: "🛠️",
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-12 md:py-20 bg-idk">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building web and mobile apps, developing AI solutions, and designing seamless UX/UI experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {categories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
      <ExtraSkills/>
    </section>
  );
};

export default Skills;
