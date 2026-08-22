import { Language } from "@/context/LanguageContext";

export interface PageLink {
  key: string;
  href: string;
  section: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
}

export const pageLinks: PageLink[] = [
  {
    key: "experience",
    href: "/experience",
    section: "#experience",
    name: {
      en: "Experience",
      es: "Experiencia",
      zh: "经历",
    },
    description: {
      en: "Work history, education and certifications in one place.",
      es: "Trayectoria laboral, educación y certificaciones en un solo lugar.",
      zh: "工作经历、教育背景与认证，一览无余。",
    },
  },
  {
    key: "portfolio",
    href: "/portfolio",
    section: "#portfolio",
    name: {
      en: "Portfolio",
      es: "Portafolio",
      zh: "作品集",
    },
    description: {
      en: "Selected projects, the stack behind them and where to try them.",
      es: "Proyectos seleccionados, su stack y dónde probarlos.",
      zh: "精选项目、技术栈以及体验入口。",
    },
  },
  {
    key: "contact",
    href: "/contact",
    section: "#contact",
    name: {
      en: "Contact",
      es: "Contacto",
      zh: "联系",
    },
    description: {
      en: "Send me a message and let's turn your idea into a product.",
      es: "Envíame un mensaje y convirtamos tu idea en un producto.",
      zh: "给我留言，让我们把你的想法变成产品。",
    },
  },
];

export const pagesLabel = {
  en: "Pages",
  es: "Páginas",
  zh: "页面",
};

export const viewFullPage = {
  en: "View full page",
  es: "Ver página completa",
  zh: "查看完整页面",
};

export const backToHome = {
  en: "Back to home",
  es: "Volver al inicio",
  zh: "返回首页",
};
