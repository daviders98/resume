import { Language } from "@/context/LanguageContext";

export interface SkillData {
  name: string;
  pathToLogo: string;
}
export type CategoryTitle = "Front-end" | "Back-end" | "Database" | "Tools";
export interface CategoryData {
  title: CategoryTitle;
  skills: SkillData[];
  icon: string;
}

export interface SkillCategoryProps {
  title: string;
  skills: SkillData[];
  icon: string;
}

export const categories: CategoryData[] = [
  {
    title: "Front-end",
    skills: [
      { name: "HTML5", pathToLogo: "/images/technologies/html5.png" },
      { name: "CSS3", pathToLogo: "/images/technologies/css3.png" },
      { name: "TailwindCSS", pathToLogo: "/images/technologies/tailwind.png" },
      { name: "Ant Design", pathToLogo: "/images/technologies/antd.jpg" },
      {
        name: "Material UI",
        pathToLogo: "/images/technologies/material-ui.jpg",
      },
      { name: "ReactJS", pathToLogo: "/images/technologies/react.png" },
      { name: "NextJS", pathToLogo: "/images/technologies/nextjs.png" },
      {
        name: "React Native",
        pathToLogo: "/images/technologies/react-native.png",
      },
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

export const skillsTitles: Record<
  Language,
  Record<CategoryTitle, string>
> = {
  en: {
    'Front-end': "Front-end",
    'Back-end': "Back-end",
    'Database': "Database",
    'Tools': "Tools",
  },
  es: {
    'Front-end': "Front-end",
    'Back-end': "Back-end",
    'Database': "Base de Datos",
    'Tools': "Herramientas",
  },
  zh: {
    'Front-end': "前端",
    'Back-end': "后端",
    'Database': "数据库",
    'Tools': "工具",
  },
}

export const skillsExtra = {
  en: "Building web and mobile apps, developing AI solutions, and designing seamless UX/UI experiences",
  es: "Construyendo aplicaciones web y móviles, desarrollando soluciones de IA y diseñando experiencias UX/UI fluidas.",
  zh: "我构建网络和移动应用程序，开发人工智能解决方案，并设计无缝的用户体验/用户界面。",
};

export const technicalSkillsStart = {
  en: "Technical",
  es: "Habilidades",
  zh: "技术",
}
export const technicalSkillsEnd = {
  en: "Skills",
  es: "Técnicas",
  zh: "技能",
}

export const extraSkillsText = {
  en: "I have also worked with:",
  es: "También he trabajado con:",
  zh: "我还曾与以下合作过：",
}

export const extraSkills = [
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