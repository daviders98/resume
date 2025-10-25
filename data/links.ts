const github = 'https://github.com/daviders98'
const linkedin = 'https://www.linkedin.com/in/davidagarciahdez/'
const logo = "/images/logo.png"

export const Links : { github: string; linkedin: string, logo: string } = {
    github,
    linkedin,
    logo
}

export interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: "Home", href: "#hero" },
  { name: "About me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];