import { Language } from "@/context/LanguageContext";

const github = "https://github.com/daviders98";
const linkedin = "https://www.linkedin.com/in/davidagarciahdez/";
const logo = "/images/logo.png";
const nextjsLogo = "/images/technologies/nextjs.png";
const profile = "/images/profile.jpg";
const darkLogo = "/images/logo_dark.png";

export const Links: {
  github: string;
  linkedin: string;
  logo: string;
  nextjsLogo: string;
  profile: string;
  darkLogo: string;
} = {
  github,
  linkedin,
  logo,
  nextjsLogo,
  profile,
  darkLogo
};

export interface NavItem {
  name: string;
  href: string;
}

export const navItems: Record<Language, NavItem[]> = {
  en: [
    { name: "Home", href: "#hero" },
    { name: "About me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ],
  es: [
    { name: "Inicio", href: "#hero" },
    { name: "Bio", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Experiencia", href: "#experience" },
    { name: "Portafolio", href: "#portfolio" },
    { name: "Contacto", href: "#contact" },
  ],
  zh: [
    { name: "首页", href: "#hero" },
    { name: "关于我", href: "#about" },
    { name: "技能", href: "#skills" },
    { name: "经历", href: "#experience" },
    { name: "作品集", href: "#portfolio" },
    { name: "联系", href: "#contact" },
  ],
};
