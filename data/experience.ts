export const experienceExtra =
  "Let me share with you my journey in the software world [:";

export const certificationsEnd = "For more certifications visit";
export interface ExperienceInfo {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  pathToLogo: string;
}
export const experienceHistory: ExperienceInfo[] = [
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
    position: "Senior Technical Consultant/Senior Full Stack Developer",
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
];
export interface ExperienceCardProps {
  experience: ExperienceInfo;
  index: number;
  startDelay: number;
  isInView: boolean;
}

export interface EducationInfo {
  id: number;
  institution: string;
  degree: string;
  period: string;
  description: string[];
  pathToLogo: string;
}
export const educationHistory: EducationInfo[] = [
  {
    id: 1,
    institution: "Hybridge Education",
    degree: "Bachelor of Science - BS, Artificial Intelligence Engineering",
    period: "2025-2028",
    description: ["Innovation and AI Workshop"],
    pathToLogo: "/images/experience/hybridge.png",
  },
  {
    id: 2,
    institution: "Hybridge Education",
    degree: "Bachelor of Science - BS, Software Engineering",
    period: "2025-2028",
    description: ["Web Development Workshop", "Digital Marketing Workshop"],
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
    institution: "Monterrey Institute of Technology and Higher Education",
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
];

export interface CertificationInfo {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  pathToLogo: string;
}

export const certificationHistory: CertificationInfo[] = [
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
];
