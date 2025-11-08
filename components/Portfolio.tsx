"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleInfo,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import {
  codeText,
  demoText,
  GitHubURL,
  portfolioData,
  portfolioExtra,
  portfolioTitleEnd,
  portfolioTitleStart,
  ProjectCardProps,
  seeMoreText,
} from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setHovered(true);
    }
  }, []);

  return (
    <div className="w-full min-h-120 sm:min-h-120">
      <motion.div
        className="relative w-full h-full rounded-xl shadow-sm border border-border cursor-pointer overflow-hidden"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => setFlipped(!flipped)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* ---------- FRONT OF CARD ---------- */}
        {!flipped && (
          <motion.div
            className={`inset-0 rounded-xl ${!flipped ? "pointer-events-auto" : "pointer-events-none"}`}
          >
            <div className="absolute inset-0">
              <motion.div
                className="absolute inset-0 overflow-hidden rounded-xl"
                animate={{ scale: hovered ? 1.05 : 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <motion.div
                className="absolute inset-0"
                animate={{
                  backdropFilter: hovered ? "blur(6px)" : "blur(0px)",
                  backgroundColor: hovered
                    ? "rgba(0,0,0,0.36)"
                    : "rgba(0,0,0,0)",
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </div>

            <motion.div
              className="absolute inset-0 flex items-center justify-center text-center p-6"
              initial={{ opacity: 0, y: 6 }}
              animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="bg-[var(--color-background)]/40 rounded-2xl p-4">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-[var(--color-foreground)] drop-shadow-lg">
                  {project.title}
                </h3>
                <p className="text-[var(--color-foreground)]/40 max-w-lg mx-auto text-sm sm:text-base">
                  {project.description}
                </p>
                <div className="flex gap-2 mt-auto pt-4">
                  {project.demoUrl && (
                    <button
                      className="flex flex-col items-center flex-1 hover:text-[var(--color-highlight)] cursor-pointer justify-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demoUrl, "_blank");
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faSquareArrowUpRight}
                        size={"xl"}
                      />
                      {demoText[language]}
                    </button>
                  )}
                  {project.githubUrl && (
                    <div className="flex flex-col">
                      {project.githubUrl.map((url: GitHubURL, index) => {
                        return (
                          <button
                            key={index}
                            className={`flex-1 flex flex-col items-center hover:text-[var(--color-highlight)] cursor-pointer ${project.githubUrl && project.githubUrl.length > 1 ? "mb-4" : ""}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(url.link, "_blank");
                            }}
                          >
                            <FontAwesomeIcon icon={faGithub} size={"xl"} />{" "}
                            {url.title ? url.title : codeText[language]}
                          </button>
                        );
                      })}
                    </div>
                  )}
                  <button
                    className="flex-1 flex flex-col items-center hover:text-[var(--color-highlight)] cursor-pointer justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFlipped(true);
                    }}
                  >
                    <FontAwesomeIcon icon={faCircleInfo} size={"xl"} />
                    {seeMoreText[language]}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* ---------- BACK OF CARD---------- */}
        {
          <div
            className={`${flipped ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} inset-0 rounded-xl p-6 flex flex-col text-[var(--color-foreground)] h-full bg-[var(--color-background)]/90`}
            style={{
              transform: "rotateY(180deg)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
            }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 drop-shadow-md">
              {project.title}
            </h3>
            <p className="text-[var(--color-foreground)] mb-4 text-sm sm:text-base">
              {project.longDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies?.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[var(--color-highlight)]/50 text-[var(--color-foreground)] rounded-full text-xs font-medium backdrop-blur-sm shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.highlights && project.highlights.length > 0 && (
              <ul className="space-y-2 mb-4">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-[var(--color-muted)]"
                  >
                    <FontAwesomeIcon
                      icon={faCircleChevronRight}
                      className="mt-1 text-[var(--color-highlight)]"
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex gap-2 mt-auto">
              {project.demoUrl && (
                <button
                  className="flex-1 hover:bg-[var(--color-highlight)] rounded py-2 transition cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.demoUrl, "_blank");
                  }}
                >
                  <FontAwesomeIcon icon={faSquareArrowUpRight} />{" "}
                  {demoText[language]}
                </button>
              )}
              {project.githubUrl && (
                <div className="flex-1 flex flex-col items-center">
                  {project.githubUrl.map((url, index) => {
                    return (
                      <button
                        key={index}
                        className="w-full hover:bg-[var(--color-highlight)] rounded py-2 transition cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(url.link, "_blank");
                        }}
                      >
                        <FontAwesomeIcon icon={faGithub} />{" "}
                        {url.title || codeText[language]}
                      </button>
                    );
                  })}
                </div>
              )}
              <button
                className="flex-1 hover:bg-[var(--color-highlight)] rounded py-2 transition cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setFlipped(false);
                }}
              >
                Go back
              </button>
            </div>
          </div>
        }
      </motion.div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const { language } = useLanguage();
  return (
    <section id="portfolio" className="py-20 bg-[var(--color-secondary)]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {portfolioTitleStart[language]}{" "}
            <span className="text-[var(--color-on-primary)]">
              {portfolioTitleEnd[language]}
            </span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-background)] mx-auto rounded-full mb-6" />
          <p className="text-lg text-[var(--color-foreground)] max-w-2xl mx-auto">
            {portfolioExtra[language]}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioData[language].projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
