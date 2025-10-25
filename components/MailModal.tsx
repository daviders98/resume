import { useLanguage } from "@/context/LanguageContext";
import {
  closeText,
  MailModalProps,
  messageErrorExtraText,
  messageErrorText,
  messageSentExtraText,
  messageSentText,
} from "@/data/contact";
import { motion } from "framer-motion";

export default function MailModal({ status, onClose }: MailModalProps) {
  const { language } = useLanguage();
  if (!status) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-foreground/40 z-50">
      <motion.div
        className="bg-primary p-8 rounded-2xl shadow-xl flex flex-col items-center gap-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <motion.div
          className="w-16 h-16 text-3xl"
          initial="hidden"
          animate="visible"
        >
          ✉️
        </motion.div>

        <h3 className="text-xl font-bold">
          {status === "success"
            ? messageSentText[language]
            : messageErrorText[language]}
        </h3>
        <p className="text-center max-w-xs">
          {status === "success"
            ? messageSentExtraText[language]
            : messageErrorExtraText[language]}
        </p>

        <button
          className="mt-4 px-6 py-2 bg-background text-foreground rounded-full hover:scale-105 transition cursor-pointer"
          onClick={onClose}
        >
          {closeText[language]}
        </button>
      </motion.div>
    </div>
  );
}
