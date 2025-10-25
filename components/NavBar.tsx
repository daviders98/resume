import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faEnvelope, faX } from "@fortawesome/free-solid-svg-icons";
import scrollToSection from "@/utils/scroller";
import { Links, navItems } from "@/data/links";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAtTop,setIsAtTop] = useState(true)
  const getNavItemClasses = () => {
    return "text-foreground hover:text-highlight";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 duration-300 bg-background/80 backdrop-blur-lg ${isAtTop ? "" : "shadow-lg"}`}
    >
      <div className="mx-auto sm:px-2 lg:px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection({ href: "#hero" });
            }}
            className="flex items-center gap-x-1 text-xl lg:text-2xl font-bold text-primary cursor-pointer bg-background/80 rounded-2xl p-2 md:mx-0 ml-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={Links.logo}
              alt={"logo"}
              style={{ maxHeight: 48, width: 48 }}
            />
            <span>DevGarcía</span>
          </motion.a>
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <FontAwesomeIcon icon={faX} size="2x"/> : <FontAwesomeIcon icon={faBars} size="2xl"/>}
          </motion.button>
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  if(isMobileMenuOpen){
                    setIsMobileMenuOpen(false)
                  }
                  scrollToSection({ href: item.href });
                }}
                className={`px-2 lg:px-4 py-2 text-sm lg:text-xl relative font-medium hover:border-b-2 hover:font-semibold ${getNavItemClasses()}`}
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
                    ? Links.github
                    : icon === faLinkedin
                    ? Links.linkedin
                    : navItems.find(item=>item.name==="Contact")?.href
                }
                target={`${icon == faEnvelope ? '': '__blank'}`}
                rel="noopener noreferrer"
                className={`p-1 ${getNavItemClasses()}`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon icon={icon} className="lg:text-4xl sm:text-3xl"/>
              </motion.a>
            ))}
          </div>
          
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <nav className="mx-auto px-4 py-4 flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
              e.preventDefault();

              setIsMobileMenuOpen(false);

              setTimeout(() => {
                scrollToSection({ href: item.href });
              }, 200);
            }}
                  className="px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-primary/50 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-border">
  {[faGithub, faLinkedin, faEnvelope].map((icon, i) => {
    const isContact = icon === faEnvelope;
    const href =
      icon === faGithub
        ? Links.github
        : icon === faLinkedin
        ? Links.linkedin
        : navItems.find(item=>item.name==="Contact")?.href

    return (
      href && <motion.a
        key={i}
        href={href}
        target={isContact ? "_self" : "_blank"}
        rel="noopener noreferrer"
        onClick={(e) => {
          if (isContact) {
            e.preventDefault();
            setIsMobileMenuOpen(false);
            setTimeout(() => scrollToSection({ href }), 200);
          } else {
            setIsMobileMenuOpen(false);
          }
        }}
        className={`p-1 ${getNavItemClasses()}`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon icon={icon} className="lg:text-4xl text-3xl" />
      </motion.a>
    );
  })}
</div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
