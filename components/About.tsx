import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import moment from "moment";
import ScrollLettersText from "./AnimateText";
import { aboutMeEndText, aboutMeStartText, codingFromText, myData, traitsInfo } from "@/data/about";
import { Links } from "@/data/links";
import { useLanguage } from "@/context/LanguageContext";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const today = moment();
  const birthday = moment("1998-01-01");
  const years = today.diff(birthday, "years");
  const {language} = useLanguage();

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-primary w-full overflow-x-hidden"
    >
      <div className="px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {aboutMeStartText[language]} <span className="text-on-primary">{aboutMeEndText[language]}</span>
          </h2>
          <div className="w-20 h-1 bg-background mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className=" w-full max-w-md mx-auto">
              <motion.div
                className=" -inset-4 bg-gradient-to-r from-background to-primary rounded-2xl blur-2xl opacity-20"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-background/20 to-primary/20 p-1">
                <div className="w-full h-full rounded-2xl bg-primary/30 flex items-center justify-center">
                  <motion.img
                    src={Links.profile}
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
                {myData[language].title}
              </h3>
              <p className="text-lg text-foreground leading-relaxed">
                {myData[language].bio.replace("{years}", `${years}`)}
              </p>
              <br />
              <p className="text-lg text-foreground leading-relaxed">
                {myData[language].bioExtra}
              </p>
              <br />
            </div>

            <div className="flex gap-2">
              <div className="space-y-2">
                <p className="text-lg text-foreground font-medium">
                  {codingFromText[language]}
                </p>
                <p className="font-medium">{myData[language].location}</p>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.2 }}
          className="mt-12 flex items-center px-8 md:px-16"
        >
          <ScrollLettersText text={myData[language].quote} className="my-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {traitsInfo[language].map((value, index) => {
            return (
              <motion.div
                key={`${index}${value.title}`}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 bg-highlight/30 rounded-xl border border-border hover:border-background/50 shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 bg-background/20 rounded-lg flex items-center justify-center mb-4">
                  <p className="text-4xl">{value.icon}</p>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-on-primary">
                  {value.title}
                </h4>
                <p className="text-sm text-foreground">{value.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
