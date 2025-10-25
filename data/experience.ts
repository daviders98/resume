import { Language } from "@/context/LanguageContext";

export const experienceExtra = {
  en: "Let me share with you my journey in the software world [:",
  es: "Permíteme compartir contigo mi trayectoria en el mundo del software [:",
  zh: "让我与你分享我在软件世界的旅程 [:",
};

export const certificationsEnd = {
  en: "For more certifications visit",
  es: "Para ver más certificaciones visita",
  zh: "欲了解更多认证信息，请访问",
};
export interface ExperienceInfo {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  pathToLogo: string;
}
export const experienceHistory: Record<Language, ExperienceInfo[]> = {
  en: [
    {
      id: 1,
      company: "Mayan Technologies Inc.",
      position: "Principal Technical Consultant",
      period: "2023 - Present",
      location: "Remote",
      description: [
        "Worked on architectural design, security improvements, and development of new features to deliver robust solutions.",
        "Mentored and guided team members, conducted technical interviews, and fostered effective collaboration.",
        "Provided technical input for client solution planning, ensuring proposals were both feasible and understandable.",
        "Oversaw production deployments, ensuring smooth and reliable releases.",
        "Recognized as Mentor of the Year.",
      ],
      technologies: [
        "React",
        "NextJS",
        "Flutter",
        "NodeJS",
        "MySQL",
        "AWS",
        "Heroku",
        "Python",
        "Ant design",
        "Express",
        "Redis",
        "SQLite",
        "Datadog",
        "Git",
        "Github",
        "Github Actions",
        "Docker",
        "Jira",
      ],
      pathToLogo: "/images/experience/company.png",
    },
    {
      id: 2,
      company: "Mayan Technologies Inc.",
      position: "Senior Technical Consultant/Senior Full Stack Developer",
      period: "2022 - 2023",
      location: "Remote",
      description: [
        "Improved average page load speeds by over 90% and integrated a variety of third-party APIs, notably Microsoft Graph, NHS, Google Maps, and Stripe.",
        "Contributed to design and planning stages for a mobile app",
        "Proposed and implemented improvements to enhance user experience.",
      ],
      technologies: [
        "React",
        "NextJS",
        "NodeJS",
        "MySQL",
        "AWS",
        "Heroku",
        "Ant design",
        "Express",
        "Redis",
        "SQLite",
        "Datadog",
        "Sentry",
        "Git",
        "Github",
        "Github Actions",
        "Docker",
        "Jira",
      ],
      pathToLogo: "/images/experience/company.png",
    },
    {
      id: 3,
      company: "Mayan Technologies Inc.",
      position: "Full Stack Developer NextJS",
      period: "2022",
      location: "Remote",
      description: [
        "Participated in the migration of API v1 to v2.",
        "Identified and solved complex issues such as memory leaks, cybersecurity concerns, database overloads, and slow queries.",
        "Designed, documented, and optimized backend APIs for better performance, security, and maintainability.",
        "Recognized as Handyman of the Year",
      ],
      technologies: [
        "NextJS",
        "NodeJS",
        "MySQL",
        "AWS",
        "Heroku",
        "Python",
        "Ant design",
        "Express",
        "Git",
        "Github",
        "Github Actions",
        "Jira",
        "PugJS",
      ],
      pathToLogo: "/images/experience/company.png",
    },
    {
      id: 4,
      company: "Freelance",
      position: "Freelancer",
      period: "2020 - 2022",
      location: "Remote",
      description: [
        "Designed intuitive and visually appealing user interfaces, creating wireframes, prototypes, and style guides to enhance usability and improve the overall user experience.",
        "Created high-quality 3D models, textures, and photorealistic renders in Blender, producing detailed visual assets for presentations, marketing, and product visualization.",
        "Developed tailored software solutions, implementing custom features and integrations to meet client-specific requirements while ensuring scalability, maintainability, and optimal performance.",
      ],
      technologies: [
        "Blender",
        "ReactJS",
        "MySQL",
        "HTML",
        "CSS",
        "NodeJS",
        "Python",
        "Material UI",
        "Express",
        "Git",
        "Github",
        "Figma",
        "Trello",
      ],
      pathToLogo: "/images/logo.png",
    },
    {
      id: 5,
      company: "Tisbot",
      position: "Robotics Teacher",
      period: "2019 - 2020",
      location: "Sinaloa, México",
      description: [
        "Conducted lessons for children aged 6-12 in physics, mechanics, electronics, and programming (C++ and block-based).",
      ],
      technologies: ["C++", "Block programming", "Arduino"],
      pathToLogo: "/images/experience/tisbot.png",
    },
    {
      id: 6,
      company:
        'Monterrey Institute of Technology and Higher Education - Novus 2019 Project: "Citizen Workshop: Peace, citizen construction"',
      position: "Collaborator",
      period: "2019 - 2020",
      location: "Sinaloa, México",
      description: [
        "Logistics coordinator, ads designer & website developer of static webpages using vanilla HTML and CSS.",
      ],
      technologies: ["HTML", "CSS", "Canva", "Excel"],
      pathToLogo: "/images/experience/itesm.png",
    },
  ],

  es: [
    {
      id: 1,
      company: "Mayan Technologies Inc.",
      position: "Consultor Técnico Principal",
      period: "2023 - Presente",
      location: "Remoto",
      description: [
        "Trabajé en diseño arquitectónico, mejoras de seguridad y desarrollo de nuevas funcionalidades para entregar soluciones robustas.",
        "Mentoricé y guié a los miembros del equipo, realicé entrevistas técnicas y fomenté la colaboración efectiva.",
        "Brindé aportes técnicos en la planificación de soluciones para clientes, asegurando que las propuestas fueran viables y comprensibles.",
        "Supervisé despliegues en producción, garantizando lanzamientos fluidos y confiables.",
        "Reconocido como Mentor del Año.",
      ],
      technologies: [
        "React",
        "NextJS",
        "Flutter",
        "NodeJS",
        "MySQL",
        "AWS",
        "Heroku",
        "Python",
        "Ant design",
        "Express",
        "Redis",
        "SQLite",
        "Datadog",
        "Git",
        "Github",
        "Github Actions",
        "Docker",
        "Jira",
      ],
      pathToLogo: "/images/experience/company.png",
    },
    {
      id: 2,
      company: "Mayan Technologies Inc.",
      position: "Consultor Técnico Senior / Desarrollador Full Stack Senior",
      period: "2022 - 2023",
      location: "Remoto",
      description: [
        "Mejoré la velocidad promedio de carga de páginas en más del 90% e integré diversas APIs de terceros, incluyendo Microsoft Graph, NHS, Google Maps y Stripe.",
        "Contribuí en las fases de diseño y planificación de una aplicación móvil.",
        "Propuese e implementé mejoras para optimizar la experiencia de usuario.",
      ],
      technologies: [
        "React",
        "NextJS",
        "NodeJS",
        "MySQL",
        "AWS",
        "Heroku",
        "Ant design",
        "Express",
        "Redis",
        "SQLite",
        "Datadog",
        "Sentry",
        "Git",
        "Github",
        "Github Actions",
        "Docker",
        "Jira",
      ],
      pathToLogo: "/images/experience/company.png",
    },
    {
      id: 3,
      company: "Mayan Technologies Inc.",
      position: "Desarrollador Full Stack NextJS",
      period: "2022",
      location: "Remoto",
      description: [
        "Participé en la migración de la API v1 a v2.",
        "Identifiqué y resolví problemas complejos como fugas de memoria, riesgos de ciberseguridad, sobrecarga de bases de datos y consultas lentas.",
        "Diseñé, documenté y optimicé APIs backend para mejor rendimiento, seguridad y mantenibilidad.",
        "Reconocido como Manitas del Año.",
      ],
      technologies: [
        "NextJS",
        "NodeJS",
        "MySQL",
        "AWS",
        "Heroku",
        "Python",
        "Ant design",
        "Express",
        "Git",
        "Github",
        "Github Actions",
        "Jira",
        "PugJS",
      ],
      pathToLogo: "/images/experience/company.png",
    },
    {
      id: 4,
      company: "Freelance",
      position: "Freelancer",
      period: "2020 - 2022",
      location: "Remoto",
      description: [
        "Diseñé interfaces de usuario intuitivas y atractivas, creando wireframes, prototipos y guías de estilo para mejorar la usabilidad y la experiencia de usuario.",
        "Creé modelos 3D de alta calidad, texturas y renders fotorrealistas en Blender, produciendo recursos visuales detallados para presentaciones, marketing y visualización de productos.",
        "Desarrollé soluciones de software a medida, implementando funcionalidades personalizadas e integraciones según los requerimientos de los clientes, asegurando escalabilidad, mantenibilidad y rendimiento óptimo.",
      ],
      technologies: [
        "Blender",
        "ReactJS",
        "MySQL",
        "HTML",
        "CSS",
        "NodeJS",
        "Python",
        "Material UI",
        "Express",
        "Git",
        "Github",
        "Figma",
        "Trello",
      ],
      pathToLogo: "/images/logo.png",
    },
    {
      id: 5,
      company: "Tisbot",
      position: "Profesor de Robótica",
      period: "2019 - 2020",
      location: "Sinaloa, México",
      description: [
        "Impartí clases a niños de 6 a 12 años en física, mecánica, electrónica y programación (C++ y basada en bloques).",
      ],
      technologies: ["C++", "Block programming", "Arduino"],
      pathToLogo: "/images/experience/tisbot.png",
    },
    {
      id: 6,
      company:
        'Instituto Tecnológico y de Estudios Superiores de Monterrey - Novus 2019 Proyecto: "Taller Ciudadano: Paz, construcción ciudadana"',
      position: "Colaborador",
      period: "2019 - 2020",
      location: "Sinaloa, México",
      description: [
        "Coordinador logístico, diseñador de anuncios y desarrollador de páginas web estáticas usando HTML y CSS puro.",
      ],
      technologies: ["HTML", "CSS", "Canva", "Excel"],
      pathToLogo: "/images/experience/itesm.png",
    },
  ],

  zh: [
    {
      id: 1,
      company: "Mayan Technologies Inc.",
      position: "首席技术顾问",
      period: "2023 - 至今",
      location: "远程",
      description: [
        "参与架构设计、安全改进和新功能开发，以提供稳健的解决方案。",
        "指导团队成员，进行技术面试，并促进有效协作。",
        "为客户解决方案规划提供技术意见，确保方案可行且易于理解。",
        "监督生产部署，确保发布平稳可靠。",
        "荣获年度导师称号。",
      ],
      technologies: [
        "React",
        "NextJS",
        "Flutter",
        "NodeJS",
        "MySQL",
        "AWS",
        "Heroku",
        "Python",
        "Ant design",
        "Express",
        "Redis",
        "SQLite",
        "Datadog",
        "Git",
        "Github",
        "Github Actions",
        "Docker",
        "Jira",
      ],
      pathToLogo: "/images/experience/company.png",
    },
    {
      id: 2,
      company: "Mayan Technologies Inc.",
      position: "高级技术顾问 / 高级全栈开发工程师",
      period: "2022 - 2023",
      location: "远程",
      description: [
        "将页面平均加载速度提升超过90%，并集成了多种第三方API，尤其是Microsoft Graph、NHS、Google Maps和Stripe。",
        "参与移动应用的设计与规划阶段。",
        "提出并实施改进以优化用户体验。",
      ],
      technologies: [
        "React",
        "NextJS",
        "NodeJS",
        "MySQL",
        "AWS",
        "Heroku",
        "Ant design",
        "Express",
        "Redis",
        "SQLite",
        "Datadog",
        "Sentry",
        "Git",
        "Github",
        "Github Actions",
        "Docker",
        "Jira",
      ],
      pathToLogo: "/images/experience/company.png",
    },
    {
      id: 3,
      company: "Mayan Technologies Inc.",
      position: "NextJS全栈开发工程师",
      period: "2022",
      location: "远程",
      description: [
        "参与API v1到v2的迁移。",
        "识别并解决复杂问题，如内存泄漏、网络安全风险、数据库超载和慢查询。",
        "设计、文档化并优化后端API以提高性能、安全性和可维护性。",
        "荣获年度多面手称号。",
      ],
      technologies: [
        "NextJS",
        "NodeJS",
        "MySQL",
        "AWS",
        "Heroku",
        "Python",
        "Ant design",
        "Express",
        "Git",
        "Github",
        "Github Actions",
        "Jira",
        "PugJS",
      ],
      pathToLogo: "/images/experience/company.png",
    },
    {
      id: 4,
      company: "Freelance",
      position: "自由职业者",
      period: "2020 - 2022",
      location: "远程",
      description: [
        "设计直观且美观的用户界面，创建线框图、原型和样式指南以提升可用性和整体用户体验。",
        "在Blender中创建高质量3D模型、纹理和逼真渲染，为演示、营销和产品可视化提供详细的视觉素材。",
        "开发定制软件解决方案，实现客户特定需求的功能和集成，同时确保可扩展性、可维护性和最佳性能。",
      ],
      technologies: [
        "Blender",
        "ReactJS",
        "MySQL",
        "HTML",
        "CSS",
        "NodeJS",
        "Python",
        "Material UI",
        "Express",
        "Git",
        "Github",
        "Figma",
        "Trello",
      ],
      pathToLogo: "/images/logo.png",
    },
    {
      id: 5,
      company: "Tisbot",
      position: "机器人教师",
      period: "2019 - 2020",
      location: "墨西哥锡那罗亚",
      description: ["为6至12岁儿童教授物理、力学、电子和编程（C++及块编程）。"],
      technologies: ["C++", "Block programming", "Arduino"],
      pathToLogo: "/images/experience/tisbot.png",
    },
    {
      id: 6,
      company:
        '蒙特雷科技与高等教育学院 - Novus 2019 项目："公民工作坊：和平、公民建设"',
      position: "协作者",
      period: "2019 - 2020",
      location: "墨西哥锡那罗亚",
      description: [
        "担任物流协调员、广告设计师以及使用原生HTML和CSS开发静态网页的网页开发者。",
      ],
      technologies: ["HTML", "CSS", "Canva", "Excel"],
      pathToLogo: "/images/experience/itesm.png",
    },
  ],
};

export interface ExperienceCardProps {
  experience: ExperienceInfo;
  index: number;
  startDelay: number;
  isInView: boolean;
}

export interface EducationInfo {
  id: number;
  institution: string;
  degree: string;
  period: string;
  description: string[];
  pathToLogo: string;
}
export const educationHistory: Record<Language, EducationInfo[]> = {
  en: [
    {
      id: 1,
      institution: "Hybridge Education",
      degree: "Bachelor of Science - BS, Artificial Intelligence Engineering",
      period: "2025-2028",
      description: ["Innovation and AI Workshop"],
      pathToLogo: "/images/experience/hybridge.png",
    },
    {
      id: 2,
      institution: "Hybridge Education",
      degree: "Bachelor of Science - BS, Software Engineering",
      period: "2025-2028",
      description: ["Web Development Workshop", "Digital Marketing Workshop"],
      pathToLogo: "/images/experience/hybridge.png",
    },
    {
      id: 3,
      institution: "Bedu",
      degree: "Android Developer",
      period: "May 2021 - Nov 2021",
      description: [
        "Awarded full scholarship to enroll, issued by Santander Scholarships.",
        "Development of an urban mobility app and an e-commerce app.",
      ],
      pathToLogo: "/images/experience/bedu.png",
    },
    {
      id: 4,
      institution: "Digital House",
      degree: "Full Stack Web Developer",
      period: "May 2021 - Nov 2021",
      description: [
        "Awarded full scholarship to enroll, issued by Santander Scholarships.",
        "Design and Development of an e-learning app.",
      ],
      pathToLogo: "/images/experience/digitalhouse.png",
    },
    {
      id: 5,
      institution: "Bedu",
      degree: "UX/UI Designer",
      period: "2020-2021",
      description: [
        "Awarded full scholarship to enroll, issued by Santander Scholarships.",
        "Design of a videogames App which involved market research, user-centered design, usability tests, interviews, animations, and a design system for a mobile App, as well as a prototype (happy path).",
      ],
      pathToLogo: "/images/experience/bedu.png",
    },
    {
      id: 6,
      institution: "Monterrey Institute of Technology and Higher Education",
      degree:
        "Bachelor of Science - BS, Industrial Engineering with a minor in systems, with honors",
      period: "2021",
      description: [
        "Part of Crossfit team and Boxing.",
        "Among the best GPAs for 6 semesters",
        "Graduated with honors and with best GPA of the generation.",
      ],
      pathToLogo: "/images/experience/itesm.png",
    },
  ],

  es: [
    {
      id: 1,
      institution: "Hybridge Education",
      degree: "Ingeniería en Inteligencia Artificial",
      period: "2025-2028",
      description: ["Taller de Innovación e IA"],
      pathToLogo: "/images/experience/hybridge.png",
    },
    {
      id: 2,
      institution: "Hybridge Education",
      degree: "Ingeniería de Software",
      period: "2025-2028",
      description: ["Taller de Desarrollo Web", "Taller de Marketing Digital"],
      pathToLogo: "/images/experience/hybridge.png",
    },
    {
      id: 3,
      institution: "Bedu",
      degree: "Desarrollador Android",
      period: "Mayo 2021 - Noviembre 2021",
      description: [
        "Beca completa otorgada por Santander Scholarships.",
        "Desarrollo de una aplicación de movilidad urbana y una aplicación de comercio electrónico.",
      ],
      pathToLogo: "/images/experience/bedu.png",
    },
    {
      id: 4,
      institution: "Digital House",
      degree: "Desarrollador Web Full Stack",
      period: "Mayo 2021 - Noviembre 2021",
      description: [
        "Beca completa otorgada por Santander Scholarships.",
        "Diseño y desarrollo de una aplicación de e-learning.",
      ],
      pathToLogo: "/images/experience/digitalhouse.png",
    },
    {
      id: 5,
      institution: "Bedu",
      degree: "Diseñador UX/UI",
      period: "2020-2021",
      description: [
        "Beca completa otorgada por Santander Scholarships.",
        "Diseño de una aplicación de videojuegos que incluyó investigación de mercado, diseño centrado en el usuario, pruebas de usabilidad, entrevistas, animaciones y un sistema de diseño para una app móvil, así como un prototipo (happy path).",
      ],
      pathToLogo: "/images/experience/bedu.png",
    },
    {
      id: 6,
      institution:
        "Instituto Tecnológico y de Estudios Superiores de Monterrey",
      degree:
        "Licenciatura en Ciencias - BS, Ingeniería Industrial con especialización en sistemas, con honores",
      period: "2021",
      description: [
        "Parte del equipo de Crossfit y Boxeo.",
        "Entre los mejores promedios académicos durante 6 semestres.",
        "Graduado con honores y con el mejor promedio de la generación.",
      ],
      pathToLogo: "/images/experience/itesm.png",
    },
  ],

  zh: [
    {
      id: 1,
      institution: "Hybridge Education",
      degree: "理学学士 - 人工智能工程",
      period: "2025-2028",
      description: ["创新与人工智能工作坊"],
      pathToLogo: "/images/experience/hybridge.png",
    },
    {
      id: 2,
      institution: "Hybridge Education",
      degree: "理学学士 - 软件工程",
      period: "2025-2028",
      description: ["网页开发工作坊", "数字营销工作坊"],
      pathToLogo: "/images/experience/hybridge.png",
    },
    {
      id: 3,
      institution: "Bedu",
      degree: "安卓开发者",
      period: "2021年5月 - 2021年11月",
      description: [
        "获得Santander Scholarships全额奖学金。",
        "开发城市出行应用和电商应用。",
      ],
      pathToLogo: "/images/experience/bedu.png",
    },
    {
      id: 4,
      institution: "Digital House",
      degree: "全栈网页开发工程师",
      period: "2021年5月 - 2021年11月",
      description: [
        "获得Santander Scholarships全额奖学金。",
        "设计并开发在线学习应用。",
      ],
      pathToLogo: "/images/experience/digitalhouse.png",
    },
    {
      id: 5,
      institution: "Bedu",
      degree: "UX/UI设计师",
      period: "2020-2021",
      description: [
        "获得Santander Scholarships全额奖学金。",
        "设计了一款电子游戏应用，包括市场调研、以用户为中心的设计、可用性测试、访谈、动画及移动应用的设计系统，并制作了原型（happy path）。",
      ],
      pathToLogo: "/images/experience/bedu.png",
    },
    {
      id: 6,
      institution: "蒙特雷科技与高等教育学院",
      degree: "理学学士 - 工业工程（辅修系统），荣誉毕业",
      period: "2021",
      description: [
        "参加Crossfit团队和拳击活动。",
        "六个学期中成绩名列前茅。",
        "以荣誉毕业并获得该届最佳成绩。",
      ],
      pathToLogo: "/images/experience/itesm.png",
    },
  ],
};

export interface CertificationInfo {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  pathToLogo: string;
}

export const certificationHistory: Record<Language, CertificationInfo[]> = {
  en: [
    {
      id: 1,
      name: "The Ultimate Guide to Game Development with Unity 2019",
      issuer: "StackSkills",
      date: "Aug 2020",
      credentialUrl:
        "https://drive.google.com/file/d/1U4kUzeLlJN_Cqys-DHSQMnwi0Ia06hNp/view?usp=sharing",
      pathToLogo: "/images/experience/stackskills.png",
    },
    {
      id: 2,
      name: "The Complete C# Programming Course",
      issuer: "StackSkills",
      date: "Oct 2020",
      credentialUrl:
        "https://drive.google.com/file/d/13hplFPV6IdcAuN41-5BRI54UlF6enMiy/view?usp=sharing",
      pathToLogo: "/images/experience/stackskills.png",
    },
    {
      id: 3,
      name: "Blender 2.8 Expert in 3D Modeling from 0 to Advanced",
      issuer: "Master Devs",
      date: "Jan 2021",
      credentialUrl:
        "https://drive.google.com/file/d/15EQVIxE_B2VUnPGpSTWW5Lj9pGKuLiJp/view?usp=sharing",
      pathToLogo: "/images/experience/master-devs.png",
    },
    {
      id: 4,
      name: "CSS Grid Layout Professional Course",
      issuer: "Platzi",
      date: "Jan 2023",
      credentialUrl:
        "https://platzi.com/p/davidalexysg/curso/2222-course/diploma/detalle/",
      pathToLogo: "/images/experience/platzi.png",
    },
    {
      id: 5,
      name: "FrontEnd Developer Course",
      issuer: "Platzi",
      date: "Jan 2023",
      credentialUrl:
        "https://platzi.com/p/davidalexysg/curso/2467-course/diploma/detalle/",
      pathToLogo: "/images/experience/platzi.png",
    },
    {
      id: 6,
      name: "Mobile App Development with Android",
      issuer: "Bedu",
      date: "Nov 2021",
      credentialUrl:
        "https://www.credly.com/badges/73a13462-0876-4de9-bf23-9bb08630157a?source=linked_in_profile",
      pathToLogo: "/images/experience/bedu.png",
    },
    {
      id: 7,
      name: "UX/UI Designer",
      issuer: "Bedu",
      date: "Apr 2021",
      credentialUrl:
        "https://www.credly.com/badges/4f4585dd-2214-42c5-94c8-a76f1d96a0db?source=linked_in_profile",
      pathToLogo: "/images/experience/bedu.png",
    },
  ],

  es: [
    {
      id: 1,
      name: "Guía definitiva para desarrollo de videojuegos con Unity 2019",
      issuer: "StackSkills",
      date: "Ago 2020",
      credentialUrl:
        "https://drive.google.com/file/d/1U4kUzeLlJN_Cqys-DHSQMnwi0Ia06hNp/view?usp=sharing",
      pathToLogo: "/images/experience/stackskills.png",
    },
    {
      id: 2,
      name: "Curso completo de programación en C#",
      issuer: "StackSkills",
      date: "Oct 2020",
      credentialUrl:
        "https://drive.google.com/file/d/13hplFPV6IdcAuN41-5BRI54UlF6enMiy/view?usp=sharing",
      pathToLogo: "/images/experience/stackskills.png",
    },
    {
      id: 3,
      name: "Blender 2.8 Experto en Modelado 3D de 0 a Avanzado",
      issuer: "Master Devs",
      date: "Ene 2021",
      credentialUrl:
        "https://drive.google.com/file/d/15EQVIxE_B2VUnPGpSTWW5Lj9pGKuLiJp/view?usp=sharing",
      pathToLogo: "/images/experience/master-devs.png",
    },
    {
      id: 4,
      name: "Curso Profesional de CSS Grid Layout",
      issuer: "Platzi",
      date: "Ene 2023",
      credentialUrl:
        "https://platzi.com/p/davidalexysg/curso/2222-course/diploma/detalle/",
      pathToLogo: "/images/experience/platzi.png",
    },
    {
      id: 5,
      name: "Curso de Desarrollador FrontEnd",
      issuer: "Platzi",
      date: "Ene 2023",
      credentialUrl:
        "https://platzi.com/p/davidalexysg/curso/2467-course/diploma/detalle/",
      pathToLogo: "/images/experience/platzi.png",
    },
    {
      id: 6,
      name: "Desarrollo de aplicaciones móviles con Android",
      issuer: "Bedu",
      date: "Nov 2021",
      credentialUrl:
        "https://www.credly.com/badges/73a13462-0876-4de9-bf23-9bb08630157a?source=linked_in_profile",
      pathToLogo: "/images/experience/bedu.png",
    },
    {
      id: 7,
      name: "Diseñador UX/UI",
      issuer: "Bedu",
      date: "Abr 2021",
      credentialUrl:
        "https://www.credly.com/badges/4f4585dd-2214-42c5-94c8-a76f1d96a0db?source=linked_in_profile",
      pathToLogo: "/images/experience/bedu.png",
    },
  ],

  zh: [
    {
      id: 1,
      name: "Unity 2019 游戏开发终极指南",
      issuer: "StackSkills",
      date: "2020年8月",
      credentialUrl:
        "https://drive.google.com/file/d/1U4kUzeLlJN_Cqys-DHSQMnwi0Ia06hNp/view?usp=sharing",
      pathToLogo: "/images/experience/stackskills.png",
    },
    {
      id: 2,
      name: "完整的 C# 编程课程",
      issuer: "StackSkills",
      date: "2020年10月",
      credentialUrl:
        "https://drive.google.com/file/d/13hplFPV6IdcAuN41-5BRI54UlF6enMiy/view?usp=sharing",
      pathToLogo: "/images/experience/stackskills.png",
    },
    {
      id: 3,
      name: "Blender 2.8 从零到高级的 3D 建模专家",
      issuer: "Master Devs",
      date: "2021年1月",
      credentialUrl:
        "https://drive.google.com/file/d/15EQVIxE_B2VUnPGpSTWW5Lj9pGKuLiJp/view?usp=sharing",
      pathToLogo: "/images/experience/master-devs.png",
    },
    {
      id: 4,
      name: "CSS Grid 布局专业课程",
      issuer: "Platzi",
      date: "2023年1月",
      credentialUrl:
        "https://platzi.com/p/davidalexysg/curso/2222-course/diploma/detalle/",
      pathToLogo: "/images/experience/platzi.png",
    },
    {
      id: 5,
      name: "前端开发课程",
      issuer: "Platzi",
      date: "2023年1月",
      credentialUrl:
        "https://platzi.com/p/davidalexysg/curso/2467-course/diploma/detalle/",
      pathToLogo: "/images/experience/platzi.png",
    },
    {
      id: 6,
      name: "安卓移动应用开发",
      issuer: "Bedu",
      date: "2021年11月",
      credentialUrl:
        "https://www.credly.com/badges/73a13462-0876-4de9-bf23-9bb08630157a?source=linked_in_profile",
      pathToLogo: "/images/experience/bedu.png",
    },
    {
      id: 7,
      name: "UX/UI设计师",
      issuer: "Bedu",
      date: "2021年4月",
      credentialUrl:
        "https://www.credly.com/badges/4f4585dd-2214-42c5-94c8-a76f1d96a0db?source=linked_in_profile",
      pathToLogo: "/images/experience/bedu.png",
    },
  ],
};

export const experienceTitleStart = {
  en: "Professional ",
  es: "Experiencia ",
  zh: "专业",
};

export const experienceTitleEnd = {
  en: "Experience",
  es: "Profesional",
  zh: "经历",
};

export const educationAndStartingTitle = {
  en: "Education & ",
  es: "Educación y ",
  zh: "教育与",
};

export const educationAndEndingTitle = {
  en: "Certifications",
  es: "Certificaciones",
  zh: "认证",
};

export const educationTile = {
  en: "Education",
  es: "Educación",
  zh: "教育",
};
