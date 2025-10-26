import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import scrollToSection from "@/utils/scroller";
import Image from "next/image";
import { Links } from "@/data/links";
import { useLanguage } from "@/context/LanguageContext";
import { heroData } from "@/data/hero";
import {
  poweredByEnd,
  poweredByStart,
  quickLinks,
  quickLinksItems,
} from "@/data/footer";
import { useTheme } from "@/context/ThemeContext";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const { language } = useLanguage();
  const { isDark } = useTheme();

  return (
    <footer className="bg-[var(--color-primary)] border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[var(--color-on-primary)] to-[var(--color-on-primary)]/60 bg-clip-text text-transparent flex items-center justify-between h-16 md:h-20">
              <motion.a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection({ href: "#hero" });
                }}
                className="flex items-center gap-x-1 text-xl md:text-2xl font-bold text-[var(--color-primary)]  transition-opacity cursor-pointer hover:text-[var(--color-highlight)] bg-[var(--color-background)] rounded-2xl p-2 mr-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src={isDark ? Links.darkLogo : Links.logo}
                  alt={"logo"}
                  style={{ maxHeight: 48, width: 48 }}
                />
                <span>DevGarcía</span>
              </motion.a>
            </h3>
            <p className="text-sm mb-4 font-semibold">
              {heroData.slogan[language]}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{quickLinks[language]}</h4>
            <ul className="space-y-2">
              {quickLinksItems[language].map((item, index) => (
                <li key={item}>
                  <a
                    href={`#${quickLinksItems["en"][index].toLowerCase()}`}
                    className="text-sm text-[var(--color-foreground)] hover:text-[var(--color-on-primary)]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm flex items-center gap-1 text-[var(--color-muted)]">
            © {new Date().getFullYear()} {"DevGarcía"}.{" "}
            {poweredByStart[language]}{" "}
            <Image
              src={Links.nextjsLogo}
              alt={"NextJS Logo"}
              width={24}
              height={24}
              style={{ width: "auto", height: "auto" }}
            />
            {poweredByEnd[language]}
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-10 h-10 bg-[var(--color-background)] text-[var(--color-foreground)] rounded-full flex items-center justify-center hover:bg-[var(--color-background)] cursor-pointer"
          >
            <FontAwesomeIcon icon={faChevronUp} size="xl" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
