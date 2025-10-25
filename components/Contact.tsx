import { useState, useRef, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import MailModal from './MailModal';
import { contactExtra, contactPhrase, ModalStatus } from '@/data/contact';
import sanitizeHtml from "sanitize-html";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const sanitizedValue = sanitizeHtml(e.target.value, {
    allowedTags: [],
    allowedAttributes: {},
  });

  setFormData({
    ...formData,
    [e.target.name]: sanitizedValue
  });
  };
  
  const [modalStatus, setModalStatus] = useState<ModalStatus>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  try {
  const tokenRes = await fetch("/api/token", { method: "POST" });
  const { token } = await tokenRes.json();

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });
    if (res.ok) {
      setModalStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setModalStatus('error');
    }
  } catch (e) {
    console.log(e)
    setModalStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section id="contact" ref={ref} className="py-20 md:pt-20 bg-highlight">
      <MailModal status={modalStatus} onClose={() => setModalStatus(null)} />
      <div className="px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {"Let's "}<span className="text-on-primary">Talk</span>
          </h2>
          <div className="w-20 h-1 bg-background mx-auto rounded-full mb-6" />
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            {contactExtra}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className='flex items-center flex-col'>
                <Image src={'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1364'} alt='lightbulb in hand' width={360} height={520} />
            </div>
            <div className="space-y-4 flex items-center justify-center">
              <p className='font-semibold text-2xl max-w-[80%] text-center'>{contactPhrase}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-hightlight/80 p-8 rounded-xl border border-border shadow-sm">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-background/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-background/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-background/50 transition-all"
                  placeholder="How can I help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-background/50 transition-all resize-none"
                  placeholder="Tell me more..."
                />
              </div>

              <button
                type="submit"
                className="group bg-background/50 py-4 max-w-3xl rounded-full w-[50%] flex  justify-self-center align-center justify-center hover:cursor-pointer"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-foreground border-t-transparent rounded-full mr-2"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

