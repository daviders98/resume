import { certificationHistory, certificationsEnd, educationHistory, ExperienceCardProps, experienceExtra, experienceHistory, ExperienceInfo } from "@/data/experience";
import {
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const TypingIndicator = () => (
  <div className="flex items-center justify-center gap-1 bg-secondary/30 rounded-full px-2 py-2 w-fit shadow-sm mt-3">
    {[0, 0.2, 0.4].map((delay, i) => (
      <motion.span
        key={i}
        className="w-1 h-1 bg-secondary rounded-full md:w-2 md:h-2"
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", delay }}
      />
    ))}
  </div>
);

const ExperienceCard = ({ experience, index, startDelay,isInView }:ExperienceCardProps) => {
  const isRight = index % 2 === 0;
  const [showTyping, setShowTyping] = useState(true);

  useEffect(() => {
  if (!isInView) return;
  const typingDuration = 1200;
  const timer = setTimeout(
    () => setShowTyping(false),
    startDelay * 1000 + typingDuration
  );
  return () => clearTimeout(timer);
}, [isInView, startDelay]);

  return (
    <div className={`flex w-full mb-6 ${isRight ? "justify-self-end flex-row-reverse lg:mr-12 sm:mr-4":"justify-self-start lg:ml-12 sm:ml-4"}`} style={{ minHeight: 120 }}>
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
                  src="/images/profile.jpg"
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
                  src="/images/profile.jpg"
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
    isRight ? "bg-primary text-on-primary" : "bg-background text-foreground"
  }`}
>

        <div className="mb-3">
            <div className="w-16 h-16 relative rounded-full border border-border flex items-center justify-center bg-background">
              {" "}
              <Image
                src={experience.pathToLogo}
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
              isRight ? "text-on-primary" : "text-secondary"
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
          {experience.description.map((line:string, i:number) => (
            <li key={i}>{line}</li>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {experience.technologies.map((tech:string) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 bg-foreground text-on-primary rounded-full text-xs font-medium"
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

  return (
    <section id="experience" ref={ref} className="pt-12 md:py-20 bg-background w-full min-h-screen">
      <div className="sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-highlight">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-highlight mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted max-w-2xl mx-auto p-4">
            {experienceExtra}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto items-center">
          {experienceHistory.map((exp:ExperienceInfo, index:number) => (
            <div key={index} className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 items-center">
                <ExperienceCard
                  key={exp.id}
                  experience={exp}
                  index={index}
                  startDelay={isInView ? index * 1.5 : 0}
                  isInView={isInView}
                />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-4 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Education & <span className="text-highlight">Certifications</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6 px-2 mb-4">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="text-3xl">🎓</span>
                Education
              </h4>
              {educationHistory.map((edu) => (
                <motion.div
                  key={edu.id}
                  whileHover={{ y: -2 }}
                  className="p-4 rounded-lg border border-border hover:border-foreground/20"
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
                  <p className="text-sm text-primary mb-1">{edu.institution}</p>
                  <p className="text-xs text-secondary mb-2">{edu.period}</p>
                  {edu.description.map((desc, index) => (
                    <li key={index} className="text-sm text-muted">
                      {desc}
                    </li>
                  ))}
                </motion.div>
              ))}
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="text-3xl">📜</span>
                Certifications
              </h4>
              {certificationHistory.map((cert) => (
                <motion.div
                  key={cert.id}
                  whileHover={{ y: -2 }}
                  className="p-4 rounded-lg border border-border hover:border-foreground/20"
                >
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    className="hover:text-highlight"
                    rel="noopener noreferrer"
                  >
                      <div className="w-16 h-16 relative rounded-full border border-border flex items-center justify-center bg-background">
                        <Image
                          src={cert.pathToLogo}
                          alt={`Issuer Company logo ${cert.id}`}
                          fill
                          className="object-contain rounded-full"
                          sizes="(max-width: 768px) 64px, 128px"
                        />
                    </div>
                    <h5 className="font-semibold mb-1">{cert.name}</h5>
                    <p className="text-sm text-primary mb-1">{cert.issuer}</p>
                    <p className="text-xs text-secondary">{cert.date}</p>
                  </a>
                </motion.div>
              ))}
              <a
                href={
                  "https://www.linkedin.com/in/davidagarciahdez/details/certifications/"
                }
                className={"hover:text-highlight"}
                target="_blank"
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  className="p-4 rounded-lg border border-border hover:border-foreground/20"
                >
                  <h5 className="font-semibold mb-1">
                    {certificationsEnd}
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
