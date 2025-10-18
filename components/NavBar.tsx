import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import scrollToSection from "@/utils/scroller";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutAtTop, setIsAboutAtTop] = useState(false);
  const aboutRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    aboutRef.current = document.querySelector("#about");

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (aboutRef.current) {
        const top = aboutRef.current.getBoundingClientRect().top;
        setIsAboutAtTop(top - 45 <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Portfolio", href: "#projects" },
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
                className={`px-3 lg:px-4 py-2 text-sm lg:text-xl relative font-medium hover:border-b-2 hover:font-semibold transition-colors duration-300 ${
                  isAboutAtTop ? "text-white hover:text-foreground" : "text-foreground hover:text-idk" }`}
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
                    ? "https://linkedin.com/"
                    : "mailto:email@example.com"
                }
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 ${
                  isAboutAtTop ? "text-white hover:text-foreground" : "text-foreground hover:text-idk"
                }  transition-colors`}
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
