import { Language } from "@/context/LanguageContext";

const greeting = {
  en: "Hi, I am",
  es: "Hola, soy",
  zh: "你好，我叫",
};
const words: Record<Language, string[]> = {
  en: [
    "MENTOR",
    "INNOVATOR",
    "PROBLEM SOLVER",
    "RESULT DRIVEN",
    "UX/UI Connoisseur",
    "API CRAFTSMAN",
    "TECHNICAL CONSULTANT",
    "AUTOMATION ADVOCATE",
    "FULL STACK DEVELOPER",
    "TEAM LEADER",
  ],
  es: [
    "MENTOR",
    "INNOVADOR",
    "RESUELVO PROBLEMAS",
    "ORIENTADO A RESULTADOS",
    "CONOCEDOR DE UX/UI",
    "ARTESANO DE API",
    "CONSULTOR TÉCNICO",
    "A FAVOR DE AUTOMATIZAR",
    "PROGRAMADOR FULL STACK",
    "LÍDER DE EQUIPO",
  ],
  zh: [
    "导师",
    "创新者",
    "解决问题者",
    "结果导向",
    "UX/UI 专家",
    "API 工匠",
    "技术顾问",
    "自动化倡导者",
    "全栈开发者",
    "团队领导",
  ],
};
const techs: string[] = [
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
  "CI/CD",
];

const slogan = {
  en: "Crafting the Best Digital Experiences.",
  es: "Creando las Mejores Experiencias Digitales.",
  zh: "打造最佳数字体验。",
};

const portfolioCTAText = {
  en: "Go to Portfolio",
  es: "Ir al Portafolio",
  zh: "前往作品集",
};

const contactCTAText = {
  en: "Contact Now",
  es: "Contactar Ahora",
  zh: "立即联系",
};

const discoverMoreText = {
  en: "Discover more",
  es: "Descubre más",
  zh: "发现更多",
};

export const heroData = {
  words,
  techs,
  greeting,
  slogan,
  portfolioCTAText,
  contactCTAText,
  discoverMoreText,
};

export const languageText = {
  en: "Language",
  es: "Idioma",
  zh: "语言",
}

export const themeText = {
  en: "Theme",
  es: "Tema",
  zh: "主题",
}