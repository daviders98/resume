interface ScrollToSectionProps {
  href: string;
}

export default function scrollToSection ({href}:ScrollToSectionProps){
    if (typeof document === "undefined") return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
};