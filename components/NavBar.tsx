"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faChevronDown,
  faEnvelope,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import scrollToSection from "@/utils/scroller";
import { Links, navItems } from "@/data/links";
import { pageLinks, pagesLabel } from "@/data/pages";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

const MotionLink = motion.create(Link);

interface SectionLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
  scrollDelay?: number;
  ariaLabel?: string;
  target?: string;
}

/**
 * Renders an in-page smooth scroll when we are on the home page and a
 * client-side navigation to the matching anchor (`/#contact`) when we are not.
 */
const SectionLink = ({
  href,
  className,
  children,
  onNavigate,
  scrollDelay = 0,
  ariaLabel,
}: SectionLinkProps) => {
  const pathname = usePathname();

  if (pathname !== "/") {
    return (
      <MotionLink
        href={`/${href}`}
        className={className}
        aria-label={ariaLabel}
        onClick={onNavigate}
        whileHover={{ scale: 1.1 }}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.a
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={(e) => {
        e.preventDefault();
        onNavigate?.();
        if (scrollDelay > 0) {
          setTimeout(() => scrollToSection({ href }), scrollDelay);
        } else {
          scrollToSection({ href });
        }
      }}
      whileHover={{ scale: 1.1 }}
    >
      {children}
    </motion.a>
  );
};

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const pagesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const getNavItemClasses = () => {
    return "text-[var(--color-foreground)] hover:text-[var(--color-highlight)]";
  };
  const { language } = useLanguage();
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsPagesOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isPagesOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pagesRef.current &&
        !pagesRef.current.contains(event.target as Node)
      ) {
        setIsPagesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isPagesOpen]);

  const socialIcons = [faGithub, faLinkedin, faEnvelope];
  const socialLabel = (icon: (typeof socialIcons)[number]) =>
    icon === faGithub ? "GitHub" : icon === faLinkedin ? "LinkedIn" : "Contact";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 duration-300 bg-[var(--color-background)]/80 backdrop-blur-lg ${isAtTop ? "" : "shadow-lg"}`}
    >
      <div className="mx-auto sm:px-2 lg:px-2">
        <div className="flex items-center justify-between h-16">
          {isHome ? (
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection({ href: "#hero" });
              }}
              className="flex items-center gap-x-1 text-xl xl:text-2xl font-bold text-[var(--color-primary)] cursor-pointer bg-[var(--color-background)]/80 rounded-2xl p-2 md:mx-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Home"
            >
              <div className="relative w-12 h-12">
                <Image
                  src={isDark ? Links.darkLogo : Links.logo}
                  alt="logo"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div className="block md:hidden lg:block">DevGarcía</div>
            </motion.a>
          ) : (
            <MotionLink
              href="/"
              className="flex items-center gap-x-1 text-xl xl:text-2xl font-bold text-[var(--color-primary)] cursor-pointer bg-[var(--color-background)]/80 rounded-2xl p-2 md:mx-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Home"
            >
              <div className="relative w-12 h-12">
                <Image
                  src={isDark ? Links.darkLogo : Links.logo}
                  alt="logo"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div className="block md:hidden lg:block">DevGarcía</div>
            </MotionLink>
          )}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[var(--color-foreground)]"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <FontAwesomeIcon icon={faX} size="2x" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="2xl" />
            )}
          </motion.button>
          <nav className="hidden md:flex items-center space-x-1 xl:space-x-2">
            {navItems[language].map((item) => (
              <SectionLink
                key={item.name}
                href={item.href}
                className={`px-1.5 xl:px-2 py-2 text-sm xl:text-xl whitespace-nowrap relative font-medium hover:border-b-2 hover:font-semibold ${getNavItemClasses()}`}
              >
                {item.name}
              </SectionLink>
            ))}

            <div className="relative" ref={pagesRef}>
              <motion.button
                onClick={() => setIsPagesOpen(!isPagesOpen)}
                className={`px-1.5 xl:px-2 py-2 text-sm xl:text-xl whitespace-nowrap font-medium flex items-center gap-1.5 xl:gap-2 hover:font-semibold ${getNavItemClasses()}`}
                whileHover={{ scale: 1.1 }}
                aria-haspopup="menu"
                aria-expanded={isPagesOpen}
                aria-label="Open pages menu"
              >
                {pagesLabel[language]}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`text-xs duration-200 ${isPagesOpen ? "rotate-180" : ""}`}
                />
              </motion.button>
              <AnimatePresence>
                {isPagesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-72 rounded-xl border border-border bg-[var(--color-background)] shadow-lg p-2"
                    role="menu"
                  >
                    {pageLinks.map((page) => (
                      <Link
                        key={page.key}
                        href={page.href}
                        role="menuitem"
                        onClick={() => setIsPagesOpen(false)}
                        className={`block rounded-lg px-3 py-2 hover:bg-[var(--color-highlight)]/20 ${
                          pathname === page.href
                            ? "bg-[var(--color-highlight)]/20"
                            : ""
                        }`}
                      >
                        <span className="block font-semibold text-[var(--color-foreground)]">
                          {page.name[language]}
                        </span>
                        <span className="block text-xs text-[var(--color-muted)]">
                          {page.description[language]}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-2 shrink-0">
            {socialIcons.map((icon, i) =>
              icon === faEnvelope ? (
                <SectionLink
                  key={i}
                  href="#contact"
                  className={`${getNavItemClasses()}`}
                  ariaLabel="Link to Contact"
                >
                  <FontAwesomeIcon
                    icon={icon}
                    className="text-2xl xl:text-4xl"
                  />
                </SectionLink>
              ) : (
                <motion.a
                  key={i}
                  href={icon === faGithub ? Links.github : Links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${getNavItemClasses()}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Link to ${socialLabel(icon)}`}
                >
                  <FontAwesomeIcon
                    icon={icon}
                    className="text-2xl xl:text-4xl"
                  />
                </motion.a>
              ),
            )}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <nav className="mx-auto px-2 py-4 flex flex-col space-y-2">
              {navItems[language].map((item) => (
                <SectionLink
                  key={item.name}
                  href={item.href}
                  scrollDelay={200}
                  onNavigate={() => setIsMobileMenuOpen(false)}
                  className="px-2 py-3 text-[var(--color-foreground)]/80 hover:text-[var(--color-foreground)] hover:bg-[var(--color-primary)]/50 rounded-lg"
                >
                  {item.name}
                </SectionLink>
              ))}

              <div className="pt-4 border-t border-border">
                <p className="px-2 pb-2 text-xs uppercase tracking-wide text-[var(--color-muted)]">
                  {pagesLabel[language]}
                </p>
                {pageLinks.map((page) => (
                  <Link
                    key={page.key}
                    href={page.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-2 py-3 rounded-lg text-[var(--color-foreground)]/80 hover:text-[var(--color-foreground)] hover:bg-[var(--color-primary)]/50 ${
                      pathname === page.href
                        ? "bg-[var(--color-primary)]/40 text-[var(--color-foreground)]"
                        : ""
                    }`}
                  >
                    {page.name[language]}
                  </Link>
                ))}
              </div>

              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-border">
                {socialIcons.map((icon, i) =>
                  icon === faEnvelope ? (
                    <SectionLink
                      key={i}
                      href="#contact"
                      scrollDelay={200}
                      onNavigate={() => setIsMobileMenuOpen(false)}
                      className={`${getNavItemClasses()}`}
                      ariaLabel="Link to Contact"
                    >
                      <FontAwesomeIcon
                        icon={icon}
                        className="lg:text-4xl text-3xl"
                      />
                    </SectionLink>
                  ) : (
                    <motion.a
                      key={i}
                      href={icon === faGithub ? Links.github : Links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`${getNavItemClasses()}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Link to ${socialLabel(icon)}`}
                    >
                      <FontAwesomeIcon
                        icon={icon}
                        className="lg:text-4xl text-3xl"
                      />
                    </motion.a>
                  ),
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
