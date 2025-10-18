import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import moment from 'moment';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const today = moment()
  const birthday = moment('1998-01-01')
  const years = today.diff(birthday, 'years');

  const values = [
    {
      icon: '🧼',
      title: "Clean Code",
      description: "I write maintainable, scalable, and well-documented code following best practices."
    },
    {
      icon:'🚀',
      title: "Innovation",
      description: "Creativity to come up with products and features that your users will love."
    },
    {
      icon: '✅',
      title: "Result driven",
      description: "I care about creating work that actually delivers and makes a difference."
    },
    {
      icon: '🫱🏽‍🫲🏼',
      title: "Colaboration",
      description: "Big goals cannot be achieved without diverse and amazing teams."
    }
  ];

  return (
    <section id="about" ref={ref} className="py-20 md:py-20 bg-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-2xl bg-accent/30 flex items-center justify-center">
                  <motion.img
              src={"/images/profile.jpg"}
              alt={"logo"}
              className="w-full h-full object-cover rounded-2xl"
            />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                {'Full Stack Developer'}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {`Hi, I’m ${years} years old. I started my software journey on 2018. I’ve contributed to the development of real-world applications used by millions of people. I see scalability not as a challenge, but as an opportunity. A digital product can’t truly be beautiful unless it’s functional and built to compete with the rest of the world.`}
              </p><br/>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {`My experience spans multiple areas of the software landscape, helping me stay adaptable in both my technical skills and problem-solving approach.`}
              </p><br/>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {`Anyone can build a website with AI, but not everyone can create one that truly connects with your audience.`}
              </p>
            </div>

            <div className="flex gap-2">
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground font-medium">{'Coding from'}</p>
                <p className="font-medium">{'🌎 México GMT-7'}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.2}}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {values.map((value, index) => {
            return (
              <motion.div
                key={`${index}${value.title}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5}}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <p className='text-4xl'>{value.icon}</p>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-primary">{value.title}</h4>
                <p className="text-sm text-muted-foreground text-foreground">{value.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

