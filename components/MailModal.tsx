import { MailModalProps } from '@/data/contact';
import { motion } from 'framer-motion';

export default function MailModal({ status, onClose }:MailModalProps){
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
          {status === 'success' ? 'Message Sent!' : 'Oops, something went wrong!'}
        </h3>
        <p className="text-center max-w-xs">
          {status === 'success' 
            ? 'Thanks for reaching out. I will get back to you within 2 business days!' 
            : 'Please try again later.'}
        </p>

        <button 
          className="mt-4 px-6 py-2 bg-background text-foreground rounded-full hover:scale-105 transition cursor-pointer"
          onClick={onClose}
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};
