import {
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const TypingIndicator = () => (
  <div className="flex items-center justify-center gap-1 bg-muted/30 rounded-full px-3 py-2 w-fit shadow-sm">
    {[0, 0.2, 0.4].map((delay, i) => (
      <motion.span
        key={i}
        className="w-2 h-2 bg-muted rounded-full"
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", delay }}
      />
    ))}
  </div>
);

const ExperienceCard = ({ experience, index, startDelay }) => {
  const isRight = index % 2 === 0;
  const [showTyping, setShowTyping] = useState(true);

  useEffect(() => {
    const typingDuration = 1200; // duration of typing indicator in ms
    const timer = setTimeout(
      () => setShowTyping(false),
      startDelay * 1000 + typingDuration
    );
    return () => clearTimeout(timer);
  }, [startDelay]);

  return (
    <div className={`flex w-full mb-6 ${isRight ? "justify-end":"justify-start"}`} style={{ minHeight: 120 }}>
      {showTyping && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`flex items-center gap-2 ${
            isRight ? "justify-start" : "justify-end"
          } z-10`}
        >
          {isRight ? (
            <>
              <TypingIndicator />
              <div className="w-16 h-16 relative">
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
              <div className="w-16 h-16 relative">
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
      {!showTyping && 
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`hover:scale-102 relative max-w-[80%] rounded-2xl p-4 md:p-6 shadow-md border border-border ${
          isRight
            ? "bg-accent text-primary rounded-tr-none"
            : "bg-primary text-foreground rounded-tl-none"
        }`}
      >
        <div className="mb-3">
            <div className="w-16 h-16 relative rounded-full border border-border flex items-center justify-center bg-primary">
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
              isRight ? "text-primary" : "text-muted"
            } font-semibold`}
          >
            {experience.company}
          </h4>
          <div className="flex flex-wrap gap-3 text-base text-muted-foreground mt-2">
            <span>📆 {experience.period}</span>
            <span>📍 {experience.location}</span>
          </div>
        </div>

        <div className="text-base leading-relaxed text-muted-foreground space-y-2">
          {experience.description.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {experience.technologies.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 bg-foreground text-primary rounded-full text-xs font-medium"
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
    <section id="experience" ref={ref} className="pt-12 md:py-20 bg-primary min-h-800 w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-idk">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-idk mx-auto rounded-full mb-6" />
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Let me share with you my journey in the software world [:
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto items-center">
          {[
            {
              id: 1,
              company: "Mayan Technologies Inc.",
              position: "Principal Technical Consultant",
              period: "2023 - Present",
              location: "Remote",
              description: [
                "Worked on architectural design, security improvements, and development of new features to deliver robust solutions.",
                "Mentored and guided team members, conducted technical interviews, and fostered effective collaboration.",
                "Provided technical input for client solution planning, ensuring proposals were both feasible and understandable.",
                "Oversaw production deployments, ensuring smooth and reliable releases.",
                "Recognized as Mentor of the Year.",
              ],
              technologies: [
                "React",
                "NextJS",
                "Flutter",
                "NodeJS",
                "MySQL",
                "AWS",
                "Heroku",
                "Python",
                "Ant design",
                "Express",
                "Redis",
                "SQLite",
                "Datadog",
                "Git",
                "Github",
                "Github Actions",
                "Docker",
                "Jira",
              ],
              pathToLogo: "/images/experience/company.png",
            },
            {
              id: 2,
              company: "Mayan Technologies Inc.",
              position:
                "Senior Technical Consultant/Senior Full Stack Developer",
              period: "2022 - 2023",
              location: "Remote",
              description: [
                "Improved average page load speeds by over 90% and integrated a variety of third-party APIs, notably Microsoft Graph, NHS, Google Maps, and Stripe.",
                "Contributed to design and planning stages for a mobile app",
                "Proposed and implemented improvements to enhance user experience.",
              ],
              technologies: [
                "React",
                "NextJS",
                "NodeJS",
                "MySQL",
                "AWS",
                "Heroku",
                "Ant design",
                "Express",
                "Redis",
                "SQLite",
                "Datadog",
                "Sentry",
                "Git",
                "Github",
                "Github Actions",
                "Docker",
                "Jira",
              ],
              pathToLogo: "/images/experience/company.png",
            },
            {
              id: 3,
              company: "Mayan Technologies Inc.",
              position: "Full Stack Developer NextJS",
              period: "2022",
              location: "Remote",
              description: [
                "Participated in the migration of API v1 to v2.",
                ,
                "Identified and solved complex issues such as memory leaks, cybersecurity concerns, database overloads, and slow queries.",
                "Designed, documented, and optimized backend APIs for better performance, security, and maintainability.",
                "Recognized as Handyman of the Year",
              ],
              technologies: [
                "NextJS",
                "NodeJS",
                "MySQL",
                "AWS",
                "Heroku",
                "Python",
                "Ant design",
                "Express",
                "Git",
                "Github",
                "Github Actions",
                "Jira",
                "PugJS",
              ],
              pathToLogo: "/images/experience/company.png",
            },
            {
              id: 4,
              company: "Freelance",
              position: "Freelancer",
              period: "2020-2022",
              location: "Remote",
              description: [
                "Designed intuitive and visually appealing user interfaces, creating wireframes, prototypes, and style guides to enhance usability and improve the overall user experience.",
                ,
                "Created high-quality 3D models, textures, and photorealistic renders in Blender, producing detailed visual assets for presentations, marketing, and product visualization.",
                "Developed tailored software solutions, implementing custom features and integrations to meet client-specific requirements while ensuring scalability, maintainability, and optimal performance.",
              ],
              technologies: [
                "Blender",
                "ReactJS",
                "MySQL",
                "HTML",
                "CSS",
                "NodeJS",
                "Python",
                "Material UI",
                "Express",
                "Git",
                "Github",
                "Figma",
                "Trello",
              ],
              pathToLogo: "/images/logo.png",
            },
            {
              id: 5,
              company: "Tisbot",
              position: "Robotics Teacher",
              period: "2019-2020",
              location: "Sinaloa, México",
              description: [
                "Conducted lessons for children aged 6-12 in physics, mechanics, electronics, and programming (C++ and block-based).",
              ],
              technologies: ["C++", "Block programming", "Arduino"],
              pathToLogo: "/images/experience/tisbot.png",
            },
            {
              id: 6,
              company:
                'Monterrey Institute of Technology and Higher Education - Novus 2019 Project: "Citizen Workshop: Peace, citizen construction"',
              position: "Collaborator",
              period: "2019-2020",
              location: "Sinaloa, México",
              description: [
                "Logistics coordinator, ads designer & website developer of static webpages using vanilla HTML and CSS.",
              ],
              technologies: ["HTML", "CSS", "Canva", "Excel"],
              pathToLogo: "/images/experience/itesm.png",
            },
          ].map((exp, index) => (
            <div key={index}>
              {isInView && (
                <ExperienceCard
                  key={exp.id}
                  experience={exp}
                  index={index}
                  startDelay={isInView ? index * 1.5 : 0} // stagger animation
                />
              )}
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
            Education & <span className="text-idk">Certifications</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="text-3xl">🎓</span>
                Education
              </h4>
              {[
                {
                  id: 1,
                  institution: "Hybridge Education",
                  degree:
                    "Bachelor of Science - BS, Artificial Intelligence Engineering",
                  period: "2025-2028",
                  description: ["Innovation and AI Workshop"],
                  pathToLogo: "/images/experience/hybridge.png",
                },
                {
                  id: 2,
                  institution: "Hybridge Education",
                  degree: "Bachelor of Science - BS, Software Engineering",
                  period: "2025-2028",
                  description: [
                    "Web Development Workshop",
                    "Digital Marketing Workshop",
                  ],
                  pathToLogo: "/images/experience/hybridge.png",
                },
                {
                  id: 3,
                  institution: "Bedu",
                  degree: "Android Developer",
                  period: "May 2021 - Nov 2021",
                  description: [
                    "Awarded full scholarship to enroll, issued by Santander Scholarships.",
                    "Development of an urban mobility app and an e-commerce app.",
                  ],
                  pathToLogo: "/images/experience/bedu.png",
                },
                {
                  id: 4,
                  institution: "Digital House",
                  degree: "Full Stack Web Developer",
                  period: "May 2021 - Nov 2021",
                  description: [
                    "Awarded full scholarship to enroll, issued by Santander Scholarships.",
                    "Design and Development of an e-learning app.",
                  ],
                  pathToLogo: "/images/experience/digitalhouse.png",
                },
                {
                  id: 5,
                  institution: "Bedu",
                  degree: "UX/UI Designer",
                  period: "2020-2021",
                  description: [
                    "Awarded full scholarship to enroll, issued by Santander Scholarships.",
                    "Design of a videogames App which involved market research, user-centered design, usability tests, interviews, animations, and a design system for a mobile App, as well as a prototype (happy path).",
                  ],
                  pathToLogo: "/images/experience/bedu.png",
                },
                {
                  id: 6,
                  institution:
                    "Monterrey Institute of Technology and Higher Education",
                  degree:
                    "Bachelor of Science - BS, Industrial Engineering with a minor in systems, with honors",
                  period: "2021",
                  description: [
                    "Part of Crossfit team and Boxing.",
                    "Among the best GPAs for 6 semesters",
                    "Graduated with honors and with best GPA of the generation.",
                  ],
                  pathToLogo: "/images/experience/itesm.png",
                },
              ].map((edu) => (
                <motion.div
                  key={edu.id}
                  whileHover={{ y: -2 }}
                  className="p-4 bg-background rounded-lg border border-border hover:border-foreground/20"
                  style={{ minHeight: 100 }} // reserve space while content animates
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
                  <p className="text-sm text-accent mb-1">{edu.institution}</p>
                  <p className="text-xs text-muted mb-2">{edu.period}</p>
                  {edu.description.map((desc, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
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
              {[
                {
                  id: 1,
                  name: "The Ultimate Guide to Game Development with Unity 2019",
                  issuer: "StackSkills",
                  date: "Aug 2020",
                  credentialUrl:
                    "https://drive.google.com/file/d/1U4kUzeLlJN_Cqys-DHSQMnwi0Ia06hNp/view?usp=sharing",
                  pathToLogo: "/images/experience/stackskills.png",
                },
                {
                  id: 2,
                  name: "The Complete C# Programming Course",
                  issuer: "StackSkills",
                  date: "Oct 2020",
                  credentialUrl:
                    "https://drive.google.com/file/d/13hplFPV6IdcAuN41-5BRI54UlF6enMiy/view?usp=sharing",
                  pathToLogo: "/images/experience/stackskills.png",
                },
                {
                  id: 3,
                  name: "Blender 2.8 Expert in 3D Modeling from 0 to Advanced",
                  issuer: "Master Devs",
                  date: "Jan 2021",
                  credentialUrl:
                    "https://drive.google.com/file/d/15EQVIxE_B2VUnPGpSTWW5Lj9pGKuLiJp/view?usp=sharing",
                  pathToLogo: "/images/experience/master-devs.png",
                },
                {
                  id: 4,
                  name: "CSS Grid Layout Professional Course",
                  issuer: "Platzi",
                  date: "Jan 2023",
                  credentialUrl:
                    "https://platzi.com/p/davidalexysg/curso/2222-course/diploma/detalle/",
                  pathToLogo: "/images/experience/platzi.png",
                },
                {
                  id: 5,
                  name: "FrontEnd Developer Course",
                  issuer: "Platzi",
                  date: "Jan 2023",
                  credentialUrl:
                    "https://platzi.com/p/davidalexysg/curso/2467-course/diploma/detalle/",
                  pathToLogo: "/images/experience/platzi.png",
                },
                {
                  id: 6,
                  name: "Mobile App Development with Android",
                  issuer: "Bedu",
                  date: "Nov 2021",
                  credentialUrl:
                    "https://www.credly.com/badges/73a13462-0876-4de9-bf23-9bb08630157a?source=linked_in_profile",
                  pathToLogo: "/images/experience/bedu.png",
                },
                {
                  id: 7,
                  name: "UX/UI Designer",
                  issuer: "Bedu",
                  date: "Apr 2021",
                  credentialUrl:
                    "https://www.credly.com/badges/4f4585dd-2214-42c5-94c8-a76f1d96a0db?source=linked_in_profile",
                  pathToLogo: "/images/experience/bedu.png",
                },
              ].map((cert) => (
                <motion.div
                  key={cert.id}
                  whileHover={{ y: -2 }}
                  className="p-4 bg-background rounded-lg border border-border hover:border-foreground/20"
                >
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    className="hover:text-idk"
                  >
                      <div className="w-16 h-16 relative rounded-full border border-border flex items-center justify-center bg-primary">
                        <Image
                          src={cert.pathToLogo}
                          alt={`Issuer Company logo ${cert.id}`}
                          fill
                          className="object-contain rounded-full"
                          sizes="(max-width: 768px) 64px, 128px"
                        />
                    </div>
                    <h5 className="font-semibold mb-1">{cert.name}</h5>
                    <p className="text-sm text-accent mb-1">{cert.issuer}</p>
                    <p className="text-xs text-muted">{cert.date}</p>
                  </a>
                </motion.div>
              ))}
              <a
                href={
                  "https://www.linkedin.com/in/davidagarciahdez/details/certifications/"
                }
                className={"hover:text-idk"}
                target="_blank"
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  className="p-4 bg-background rounded-lg border border-border hover:border-foreground/20"
                >
                  <h5 className="font-semibold mb-1">
                    For more certifications visit
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
