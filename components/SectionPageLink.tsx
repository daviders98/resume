"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "@/context/LanguageContext";
import { viewFullPage } from "@/data/pages";

interface SectionPageLinkProps {
  href: string;
  className?: string;
}

export default function SectionPageLink({
  href,
  className = "",
}: SectionPageLinkProps) {
  const { language } = useLanguage();

  return (
    <div className={`flex justify-center mt-10 ${className}`}>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          href={href}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-[var(--color-background)]/70 text-[var(--color-foreground)] font-semibold shadow-sm hover:bg-[var(--color-background)]"
        >
          {viewFullPage[language]}
          <FontAwesomeIcon icon={faArrowRightLong} />
        </Link>
      </motion.div>
    </div>
  );
}
