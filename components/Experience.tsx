import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import {
  certificationHistory,
  certificationsEnd,
  educationAndEndingTitle,
  educationAndStartingTitle,
  educationHistory,
  educationTile,
  ExperienceCardProps,
  experienceExtra,
  experienceHistory,
  ExperienceInfo,
  experienceTitleEnd,
  experienceTitleStart,
} from "@/data/experience";
import { Links } from "@/data/links";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const TypingIndicator = () => (
  <div className="flex items-center justify-center gap-1 bg-[var(--color-secondary)]/30 rounded-full px-2 py-2 w-fit shadow-sm mt-3">
    {[0, 0.2, 0.4].map((delay, i) => (
      <motion.span
        key={i}
        className="w-1 h-1 bg-[var(--color-secondary)] rounded-full md:w-2 md:h-2"
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", delay }}
      />
    ))}
  </div>
);

const ExperienceCard = ({
  experience,
  index,
  startDelay,
  isInView,
}: ExperienceCardProps) => {
  const isRight = index % 2 === 0;
  const [showTyping, setShowTyping] = useState(true);
  const { isDark } = useTheme();

  useEffect(() => {
    if (!isInView) return;
    const typingDuration = 1200;
    const timer = setTimeout(
      () => setShowTyping(false),
      startDelay * 1000 + typingDuration,
    );
    return () => clearTimeout(timer);
  }, [isInView, startDelay]);

  return (
    <div
      className={`flex w-full mb-6 ${
        isRight
          ? "justify-self-end flex-row-reverse lg:mr-12 sm:mr-4"
          : "justify-self-start lg:ml-12 sm:ml-4"
      }`}
      style={{ minHeight: 120 }}
    >
      {showTyping && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className={`flex items-start gap-1 ${
            isRight ? "justify-start" : "justify-end"
          } z-10`}
        >
          {isRight ? (
            <>
              <TypingIndicator />
              <div className="w-12 h-12 relative md:h-16 md:w-16">
                <Image
                  src={Links.profile}
                  alt="Me typing"
                  fill
                  className="rounded-full object-cover border border-border"
                  sizes="(max-width: 768px) 64px, 128px"
                />
              </div>
            </>
          ) : (
            <>
              <div className="w-12 h-12 relative md:h-16 md:w-16">
                <Image
                  src={Links.profile}
                  alt="Me typing"
                  fill
                  className="rounded-full object-cover border border-border"
                  sizes="(max-width: 768px) 64px, 128px"
                />
              </div>
              <TypingIndicator />
            </>
          )}
        </motion.div>
      )}
      {
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: isInView && !showTyping ? 1 : 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className={`hover:scale-102 relative max-w-[80%] rounded-2xl p-4 md:p-6 shadow-md border border-border ${
            isRight
              ? "bg-[var(--color-primary)] text-[var(--color-on-primary)]"
              : "bg-[var(--color-background)] text-[var(--color-foreground)]"
          }`}
        >
          <div className="mb-3">
            <div className="w-16 h-16 relative rounded-full border border-border flex items-center justify-center bg-[var(--color-background)]">
              {" "}
              <Image
                src={
                  experience.pathToLogo == "/images/logo.png" && isDark
                    ? Links.darkLogo
                    : experience.pathToLogo
                }
                alt={`Company logo ${index + 1}`}
                fill
                sizes="(max-width: 768px) 64px, 128px"
                className="object-contain rounded-full"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold">
              {experience.position}
            </h3>
            <h4
              className={`text-sm ${
                isRight
                  ? "text-[var(--color-on-primary)]"
                  : "text-[var(--color-secondary)]"
              } font-semibold`}
            >
              {experience.company}
            </h4>
            <div className="flex flex-wrap gap-3 text-base mt-2">
              <span>📆 {experience.period}</span>
              <span>📍 {experience.location}</span>
            </div>
          </div>

          <div className="text-base leading-relaxed space-y-2">
            <ul className="list-disc list-inside">
              {experience.description.map((line: string, i: number) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {experience.technologies.map((tech: string) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 bg-[var(--color-foreground)] text-[var(--color-on-primary)] rounded-full text-xs font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      }
    </div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 bg-[var(--color-background)] w-full min-h-screen"
    >
      <div className="sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 px-2"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {experienceTitleStart[language]}
            <span className="text-[var(--color-highlight)]">
              {experienceTitleEnd[language]}
            </span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-highlight)] mx-auto rounded-full mb-6" />
          <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto p-4">
            {experienceExtra[language]}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto items-center">
          {experienceHistory[language].map(
            (exp: ExperienceInfo, index: number) => (
              <div
                key={index}
                className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 items-center"
              >
                <ExperienceCard
                  key={exp.id}
                  experience={exp}
                  index={index}
                  startDelay={isInView ? index * 1.5 : 0}
                  isInView={isInView}
                />
              </div>
            ),
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-4 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            {educationAndStartingTitle[language]}
            <span className="text-[var(--color-highlight)]">
              {educationAndEndingTitle[language]}
            </span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6 px-2 mb-4">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="text-3xl">🎓</span>
                {educationTile[language]}
              </h4>
              {educationHistory[language].map((edu) => (
                <motion.div
                  key={edu.id}
                  whileHover={{ y: -2 }}
                  className="p-4 rounded-lg border border-border hover:border-[var(--color-foreground)]/20"
                  style={{ minHeight: 100 }}
                >
                  <div className="w-16 h-16 relative rounded-full border border-border mb-1">
                    <Image
                      src={edu.pathToLogo}
                      alt="Me typing"
                      fill
                      className="rounded-full object-cover border border-border"
                      sizes="(max-width: 768px) 64px, 128px"
                    />
                  </div>
                  <h5 className="font-semibold mb-1">{edu.degree}</h5>
                  <p className="text-sm text-[var(--color-primary)] mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-[var(--color-secondary)] mb-2">
                    {edu.period}
                  </p>
                  <ul className="list-disc list-inside">
                    {edu.description.map((desc, index) => (
                      <li
                        key={index}
                        className="text-sm text-[var(--color-muted)]"
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="text-3xl">📜</span>
                {educationAndEndingTitle[language]}
              </h4>
              {certificationHistory[language].map((cert) => (
                <motion.div
                  key={cert.id}
                  whileHover={{ y: -2 }}
                  className="p-4 rounded-lg border border-border hover:border-[var(--color-foreground)]/20"
                >
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    className="hover:text-[var(--color-highlight)]"
                    rel="noopener noreferrer"
                  >
                    <div className="w-16 h-16 relative rounded-full border border-border flex items-center justify-center bg-[var(--color-background)]">
                      <Image
                        src={cert.pathToLogo}
                        alt={`Issuer Company logo ${cert.id}`}
                        fill
                        className="object-contain rounded-full"
                        sizes="(max-width: 768px) 64px, 128px"
                      />
                    </div>
                    <h5 className="font-semibold mb-1">{cert.name}</h5>
                    <p className="text-sm text-[var(--color-primary)] mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-[var(--color-secondary)]">
                      {cert.date}
                    </p>
                  </a>
                </motion.div>
              ))}
              <a
                href={
                  "https://www.linkedin.com/in/davidagarciahdez/details/certifications/"
                }
                className={"hover:text-[var(--color-highlight)]"}
                target="_blank"
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  className="p-4 rounded-lg border border-border hover:border-[var(--color-foreground)]/20"
                >
                  <h5 className="font-semibold mb-1">
                    {certificationsEnd[language]}
                  </h5>
                  <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                </motion.div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
