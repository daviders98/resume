import { Language } from "@/context/LanguageContext";

export interface TraitData {
  icon: string;
  title: string;
  description: string;
}

export const traitsInfo: Record<Language, TraitData[]> = {
  en: [
    {
      icon: "🧼",
      title: "Clean Code",
      description:
        "I write maintainable, scalable, and well-documented code following best practices.",
    },
    {
      icon: "🚀",
      title: "Innovation",
      description:
        "Creativity to come up with products and features that your users will love.",
    },
    {
      icon: "✅",
      title: "Result driven",
      description:
        "I care about creating work that actually delivers and makes a difference.",
    },
    {
      icon: "🫱🏽‍🫲🏼",
      title: "Collaboration",
      description:
        "Big goals cannot be achieved without diverse and amazing teams.",
    },
  ],
  es: [
    {
      icon: "🧼",
      title: "Código Limpio",
      description:
        "Escribo código mantenible, escalable y bien documentado siguiendo las mejores prácticas.",
    },
    {
      icon: "🚀",
      title: "Innovación",
      description:
        "Creatividad para desarrollar productos y funciones que tus usuarios adorarán.",
    },
    {
      icon: "✅",
      title: "Orientado a Resultados",
      description:
        "Me importa crear trabajo que realmente entregue valor y marque la diferencia.",
    },
    {
      icon: "🫱🏽‍🫲🏼",
      title: "Colaboración",
      description:
        "Los grandes objetivos no se pueden alcanzar sin equipos diversos y extraordinarios.",
    },
  ],
  zh: [
    {
      icon: "🧼",
      title: "干净的代码",
      description: "我编写可维护、可扩展且文档完善的代码，遵循最佳实践。",
    },
    {
      icon: "🚀",
      title: "创新",
      description: "有创造力，能设计出用户喜爱的产品和功能。",
    },
    {
      icon: "✅",
      title: "结果导向",
      description: "我重视创作真正有价值并产生影响的工作。",
    },
    {
      icon: "🫱🏽‍🫲🏼",
      title: "协作",
      description: "没有多样且优秀的团队，就无法实现伟大的目标。",
    },
  ],
};

export const myData = {
  en: {
    title: "Full Stack Developer",
    bio: `Hi, I’m {years} years old. I started my software journey in 2018. I’ve contributed to the development of real-world applications used by millions of people. I see scalability not as a challenge, but as an opportunity. A digital product can’t truly be beautiful unless it’s functional and built to compete with the rest of the world.`,
    bioExtra:
      "My experience spans multiple areas of the software landscape, helping me stay adaptable in both my technical skills and problem-solving approach.",
    quote:
      "“Anyone can build a website with AI, but not everyone can create one that truly connects with your audience.”",
    location: "🌎 México GMT-7",
  },
  es: {
    title: "Desarrollador Full Stack",
    bio: `Hola, tengo {years} años. Comencé mi viaje en el mundo del software en 2018. He contribuido al desarrollo de aplicaciones del mundo real utilizadas por millones de personas. No veo la escalabilidad como un desafío, sino como una oportunidad. Un producto digital solo puede ser verdaderamente hermoso si es funcional y está diseñado para competir a nivel mundial.`,
    bioExtra:
      "Mi experiencia abarca diversas áreas del ámbito del software, lo que me permite ser adaptable tanto en mis habilidades técnicas como en mi enfoque para resolver problemas.",
    quote:
      "“Cualquiera puede crear un sitio web con IA, pero no todos pueden crear uno que realmente conecte con su audiencia.”",
    location: "🌎 México GMT-7",
  },
  zh: {
    title: "全栈开发者",
    bio: `你好，我今年 {years} 岁。我在2018年开始了我的软件之旅。我为数百万用户使用的真实应用程序的发展做出了贡献。我我不把可扩展性视为挑战，而是看作机会。除非数字产品既功能完善又能与世界一流产品竞争，否则它无法真正美观。`,
    bioExtra:
      "我的经验涵盖软件领域的多个方面，使我在技术能力和解决问题的方法上都能保持灵活性。",
    quote:
      "“任何人都可以用AI构建一个网站，但并不是每个人都能创建一个真正与您的受众产生联系的网站。”",
    location: "🌎 墨西哥 GMT-7",
  },
};

export const aboutMeStartText = {
  en: "About",
  es: "Sobre",
  zh: "关于",
};

export const aboutMeEndText = {
  en: "me",
  es: "mí",
  zh: "我",
};

export const codingFromText = {
  en: "Coding from",
  es: "Programando desde",
  zh: "编程地点",
};
