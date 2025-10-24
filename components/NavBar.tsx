import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import scrollToSection from "@/utils/scroller";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutAtTop, setIsAboutAtTop] = useState(false);
  const [isExperienceAtTop, setIsExperienceAtTop] = useState(false)
  const [isPortfolioAtTop, setIsPortfolioAtTop] = useState(false)
  const aboutRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const portfolioRef = useRef<HTMLElement | null>(null);

  const getNavItemClasses = () => {
    if (isPortfolioAtTop) return "text-white hover:text-foreground";
    if (isExperienceAtTop) return "text-foreground hover:text-idk";
    if (isAboutAtTop) return "text-white hover:text-foreground";
    return "text-foreground hover:text-idk";
  };

  useEffect(() => {
    aboutRef.current = document.querySelector("#about");
    experienceRef.current = document.querySelector('#experience');
    portfolioRef.current = document.querySelector('#portfolio')

    const sections = [
  { ref: portfolioRef, setter: setIsPortfolioAtTop },
  { ref: experienceRef, setter: setIsExperienceAtTop },
  { ref: aboutRef, setter: setIsAboutAtTop },
];

const handleScroll = () => {
  setIsScrolled(window.scrollY > 50);

  sections.forEach(({ ref, setter }) => {
    if (ref.current) {
      const top = ref.current.getBoundingClientRect().top;
      setter(top - 45 <= 0);
    }
  });
};

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection({ href: "#hero" });
            }}
            className="flex items-center gap-x-1 text-xl md:text-2xl font-bold text-accent  transition-opacity cursor-pointer hover:text-idk bg-primary rounded-2xl p-2 mr-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={"/images/logo.png"}
              alt={"logo"}
              style={{ maxHeight: 48, width: 48 }}
            />
            <span>DevGarcía</span>
          </motion.a>

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection({ href: item.href });
                }}
                className={`px-3 lg:px-4 py-2 text-sm lg:text-xl relative font-medium hover:border-b-2 hover:font-semibold transition-colors duration-300 ${getNavItemClasses()}`}
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            {[faGithub, faLinkedin, faEnvelope].map((icon, i) => (
              <motion.a
                key={i}
                href={
                  icon === faGithub
                    ? "https://github.com/daviders98"
                    : icon === faLinkedin
                    ? "https://www.linkedin.com/in/davidagarciahdez/"
                    : "#contact"
                }
                target={`${icon == faEnvelope ? '': '__blank'}`}
                rel="noopener noreferrer"
                className={`p-2 ${getNavItemClasses()}  transition-colors`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon icon={icon} size="2xl" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
