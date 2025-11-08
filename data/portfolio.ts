import { Language } from "@/context/LanguageContext";

export const portfolioExtra = {
  en: "The following projects show what I am capable of.",
  es: "Los siguientes proyectos muestran de lo que soy capaz.",
  zh: "以下项目展示了我的能力。",
};

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: GitHubURL[];
  highlights?: string[];
}

export interface GitHubURL {
  title?: string;
  link: string;
}

export interface ProjectCardProps {
  project: Project;
  index?: number;
}

export const portfolioData: Record<Language, { projects: Project[] }> = {
  en: {
    projects: [
      {
        id: 1,
        title: "Better Wordle",
        description: "Full-stack daily word puzzle game inspired by Wordle.",
        longDescription:
          "Better Wordle is a modern, full-stack reimagining of the classic Wordle game. It features a React frontend deployed on Vercel, a Django backend hosted on Render, and a Supabase-powered word validation API. The app supports daily challenges, persistent player statistics with streak tracking, and smooth animations — all wrapped in a responsive, mobile-first design.",
        image: "/images/better_wordle.png",
        technologies: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Django",
          "Supabase",
          "Vercel",
          "Render",
          "PostgreSQL",
          "Serverless",
          "Cron Job",
          "Styled components"
        ],
        demoUrl: "https://better-wordle.vercel.app",
        githubUrl: [{
          title: 'Front end',
          link: "https://github.com/daviders98/wordle-front"
        },
          {
            title:'Back end',
            link: "https://github.com/daviders98/wordle-back"
          }],
        highlights: [
          "Frontend built with React + TypeScript and hosted on Vercel.",
          "Backend built with Django + Supabase and hosted on Render.",
          "Persistent player stats and streak tracking using `localStorage`.",
          "Automated changelog generation using Husky and GitHub Actions.",
          "Secured API endpoints with CORS, CSRF, and JWT authentication.",
          "Daily rotating word logic powered by serverless functions and a Cron job.",
        ],
      },
      {
        id: 2,
        title: "Personal Portfolio & Resume App",
        description: "A modern, responsive portfolio and resume website built with Next.js, TypeScript, and Tailwind CSS.",
        longDescription: "A sleek and high-performance personal portfolio and resume website built using Next.js 15.5.5, TypeScript, and Tailwind CSS. It includes support for multiple languages and dark/light themes using React Context API, a contact form with a secure serverless endpoint, and a dynamic portfolio section powered by reusable and animated components. Deployed seamlessly on Vercel with automated GitHub Actions for code formatting and CI/CD integration.",
        image: "/images/portfolio_app.png",
        technologies: [
          "Next.js 15.5.5",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Context API",
          "Vercel",
          "GitHub Actions",
          "Serverless Functions",
          "Font Awesome",
          "Prettier"
        ],
        demoUrl: "https://devgarcia.vercel.app",
        githubUrl: [
          {
            "link": "https://github.com/daviders98/resume"
          }
        ],
        highlights: [
          "Built with Next.js 15.5.5, TypeScript, and Tailwind CSS for performance and maintainability.",
          "Responsive and accessible design with built-in dark/light mode toggle.",
          "LanguageContext and ThemeContext for multilingual and theme support.",
          "Serverless contact and token API endpoints for secure form handling.",
          "Dynamic and easily editable portfolio via `/data/portfolio.ts`.",
          "Custom text and scroll animations for engaging user experience.",
          "Deployed on Vercel with automated formatting and linting via GitHub Actions."
        ]
      },
      {
        id: 3,
        title: "Personal Portfolio Website",
        description: "Showcase your work and skills online",
        longDescription:
          "A sleek and responsive personal portfolio website to present projects, skills, and achievements. Includes interactive sections, contact forms, and a blog for content updates.",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&h=900&fit=crop",
        technologies: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
        demoUrl: "https://demo-portfolio.com",
        githubUrl: [{link:"https://github.com/daviders98"}],
        highlights: [
          "Responsive design for all devices",
          "Animated transitions with Framer Motion",
          "Blog section with markdown support",
          "Contact form with email integration",
        ],
      },
      {
        id: 4,
        title: "Fitness Tracking App",
        description: "Track workouts, nutrition, and progress",
        longDescription:
          "A mobile-friendly fitness app that helps users log workouts, monitor nutrition, and track progress over time. Includes charts, reminders, and goal-setting features.",
        image:
          "https://images.unsplash.com/photo-1483721310020-03333e577078?w=1600&h=900&fit=crop",
        technologies: ["React Native", "Node.js", "MongoDB", "Redux"],
        demoUrl: "https://demo-fitnessapp.com",
        githubUrl: [{link:"https://github.com/daviders98"}],
        highlights: [
          "Track workouts and calories burned",
          "Set fitness goals and reminders",
          "Progress charts and analytics",
          "Social sharing and friend challenges",
        ],
      },
      {
        id: 5,
        title: "Recipe Sharing Platform",
        description: "Share and discover recipes from around the world",
        longDescription:
          "A web platform that allows users to upload, share, and explore recipes. Features include search filters, ratings, and community interactions.",
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&h=900&fit=crop",
        technologies: ["Angular", "Firebase", "Bootstrap"],
        demoUrl: "https://demo-recipes.com",
        githubUrl: [{link:"https://github.com/daviders98"}],
        highlights: [
          "Upload and manage personal recipes",
          "Search and filter by ingredients",
          "Community ratings and comments",
          "Responsive and mobile-friendly design",
        ],
      },
      {
        id: 6,
        title: "Travel Booking System",
        description: "Book flights, hotels, and activities seamlessly",
        longDescription:
          "An end-to-end travel booking platform enabling users to plan trips, book flights, hotels, and local activities. Integrated with payment gateways and maps.",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&fit=crop",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
        demoUrl: "https://demo-travel.com",
        githubUrl: [{link:"https://github.com/daviders98"}],
        highlights: [
          "Flight, hotel, and activity booking",
          "Integrated secure payment system",
          "Dynamic search and filtering options",
          "Interactive maps and travel recommendations",
        ],
      },
    ],
  },

  es: {
    projects: [
      {
        id: 1,
        title: "Better Wordle",
        description: "Juego de palabras diario full-stack inspirado en Wordle.",
        longDescription:
          "Better Wordle es una versión moderna y completa del clásico juego Wordle. Cuenta con un frontend en React desplegado en Vercel, un backend en Django alojado en Render y una API de validación de palabras potenciada por Supabase. La aplicación admite desafíos diarios, estadísticas persistentes del jugador con seguimiento de rachas y animaciones fluidas — todo dentro de un diseño adaptable y optimizado para móviles.",
        image: "/images/better_wordle.png",
        technologies: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Django",
          "Supabase",
          "Vercel",
          "Render",
          "PostgreSQL",
          "Serverless",
          "Cron Job",
          "Styled components"
        ],
        demoUrl: "https://better-wordle.vercel.app",
        githubUrl: [
          {
            title: "Front end",
            link: "https://github.com/daviders98/wordle-front"
          },
          {
            title: "Back end",
            link: "https://github.com/daviders98/wordle-back"
          }
        ],
        highlights: [
          "Frontend construido con React + TypeScript y alojado en Vercel.",
          "Backend desarrollado con Django + Supabase y alojado en Render.",
          "Estadísticas de jugador persistentes y seguimiento de rachas mediante `localStorage`.",
          "Generación automática de changelogs con Husky y GitHub Actions.",
          "Endpoints de API seguros con CORS, CSRF y autenticación JWT.",
          "Lógica diaria de rotación de palabras impulsada por funciones serverless y un trabajo Cron."
        ]
      },
      {
        id: 2,
        title: "Portafolio Personal y Aplicación de Currículum",
        description: "Un sitio web moderno y adaptable de portafolio y currículum construido con Next.js, TypeScript y Tailwind CSS.",
        longDescription: "Un sitio web de portafolio y currículum personal elegante y de alto rendimiento desarrollado con Next.js 15.5.5, TypeScript y Tailwind CSS. Incluye soporte para múltiples idiomas y modos claro/oscuro mediante React Context API, un formulario de contacto con endpoint sin servidor seguro, y una sección de portafolio dinámica impulsada por componentes reutilizables y animados. Desplegado fácilmente en Vercel con acciones automatizadas de GitHub para formateo de código e integración CI/CD.",
        image: "/images/portfolio_app.png",
        technologies: [
          "Next.js 15.5.5",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Context API",
          "Vercel",
          "GitHub Actions",
          "Funciones Serverless",
          "Font Awesome",
          "Prettier"
        ],
        demoUrl: "https://devgarcia.vercel.app",
        githubUrl: [
          {
            "link": "https://github.com/daviders98/resume"
          }
        ],
        highlights: [
          "Construido con Next.js 15.5.5, TypeScript y Tailwind CSS para máximo rendimiento y mantenibilidad.",
          "Diseño adaptable y accesible con alternancia entre modo claro/oscuro integrada.",
          "LanguageContext y ThemeContext para soporte multilingüe y de temas.",
          "Endpoints sin servidor para contacto y tokens, garantizando un manejo seguro de formularios.",
          "Portafolio dinámico y fácilmente editable a través de `/data/portfolio.ts`.",
          "Animaciones personalizadas de texto y desplazamiento para una experiencia de usuario atractiva.",
          "Desplegado en Vercel con formateo y linting automatizados mediante GitHub Actions."
        ]
      },
      {
        id: 3,
        title: "Sitio Web de Portafolio Personal",
        description: "Muestra tu trabajo y habilidades en línea",
        longDescription:
          "Un sitio web personal elegante y responsivo para presentar proyectos, habilidades y logros. Incluye secciones interactivas, formularios de contacto y un blog para actualizaciones de contenido.",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&h=900&fit=crop",
        technologies: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
        demoUrl: "https://demo-portfolio.com",
        githubUrl: [{link:"https://github.com/daviders98"}],
        highlights: [
          "Diseño responsivo para todos los dispositivos",
          "Transiciones animadas con Framer Motion",
          "Sección de blog con soporte Markdown",
          "Formulario de contacto con integración de correo electrónico",
        ],
      },
      {
        id: 4,
        title: "App de Seguimiento de Fitness",
        description: "Registra entrenamientos, nutrición y progreso",
        longDescription:
          "Una aplicación de fitness amigable para móviles que ayuda a los usuarios a registrar entrenamientos, monitorear la nutrición y hacer seguimiento del progreso. Incluye gráficos, recordatorios y funciones de establecimiento de objetivos.",
        image:
          "https://images.unsplash.com/photo-1483721310020-03333e577078?w=1600&h=900&fit=crop",
        technologies: ["React Native", "Node.js", "MongoDB", "Redux"],
        demoUrl: "https://demo-fitnessapp.com",
        githubUrl: [{link:"https://github.com/daviders98"}],
        highlights: [
          "Registrar entrenamientos y calorías quemadas",
          "Establecer metas de fitness y recordatorios",
          "Gráficos de progreso y análisis",
          "Compartir socialmente y retos con amigos",
        ],
      },
      {
        id: 5,
        title: "Plataforma de Compartir Recetas",
        description: "Comparte y descubre recetas de todo el mundo",
        longDescription:
          "Una plataforma web que permite a los usuarios subir, compartir y explorar recetas. Incluye filtros de búsqueda, valoraciones e interacciones comunitarias.",
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&h=900&fit=crop",
        technologies: ["Angular", "Firebase", "Bootstrap"],
        demoUrl: "https://demo-recipes.com",
        githubUrl: [{link:"https://github.com/daviders98"}],
        highlights: [
          "Subir y gestionar recetas personales",
          "Buscar y filtrar por ingredientes",
          "Valoraciones y comentarios de la comunidad",
          "Diseño responsivo y adaptable a móviles",
        ],
      },
      {
        id: 6,
        title: "Sistema de Reservas de Viajes",
        description: "Reserva vuelos, hoteles y actividades fácilmente",
        longDescription:
          "Una plataforma de reservas de viajes de extremo a extremo que permite a los usuarios planificar viajes, reservar vuelos, hoteles y actividades locales. Integrada con pasarelas de pago y mapas.",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&fit=crop",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
        demoUrl: "https://demo-travel.com",
        githubUrl: [{link:"https://github.com/daviders98"}],
        highlights: [
          "Reserva de vuelos, hoteles y actividades",
          "Sistema de pago seguro integrado",
          "Opciones dinámicas de búsqueda y filtrado",
          "Mapas interactivos y recomendaciones de viaje",
        ],
      },
    ],
  },

  zh: {
    projects: [
      {
        id: 1,
        title: "Better Wordle",
        description: "受 Wordle 启发的全栈每日猜词游戏。",
        longDescription:
          "Better Wordle 是经典 Wordle 游戏的现代全栈重制版。它包含使用 React 构建并部署在 Vercel 上的前端、基于 Django 并托管于 Render 的后端，以及由 Supabase 驱动的单词验证 API。该应用支持每日挑战、带连胜统计的持久化玩家数据，以及流畅的动画效果 —— 所有内容均采用响应式、移动优先的设计。",
        image: "/images/better_wordle.png",
        technologies: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Django",
          "Supabase",
          "Vercel",
          "Render",
          "PostgreSQL",
          "Serverless",
          "Cron Job",
          "Styled components"
        ],
        demoUrl: "https://better-wordle.vercel.app",
        githubUrl: [
          {
            title: "前端",
            link: "https://github.com/daviders98/wordle-front"
          },
          {
            title: "后端",
            link: "https://github.com/daviders98/wordle-back"
          }
        ],
        highlights: [
          "前端使用 React + TypeScript 构建并部署在 Vercel。",
          "后端基于 Django + Supabase 构建并托管在 Render。",
          "通过 `localStorage` 持久化玩家统计数据和连胜记录。",
          "使用 Husky 和 GitHub Actions 自动生成更新日志。",
          "通过 CORS、CSRF 和 JWT 实现安全的 API 端点。",
          "使用无服务器函数和 Cron 任务实现每日单词轮换逻辑。"
        ]
      },
      {
        id: 2,
        title: "个人作品集与简历应用",
        description: "一个使用 Next.js、TypeScript 和 Tailwind CSS 构建的现代响应式作品集与简历网站。",
        longDescription: "一个外观精美、高性能的个人作品集与简历网站，使用 Next.js 15.5.5、TypeScript 和 Tailwind CSS 构建。通过 React Context API 实现多语言和明暗主题支持，包含一个安全的无服务器联系表单端点，以及一个由可重用和动画组件驱动的动态作品集部分。部署在 Vercel 上，并通过 GitHub Actions 实现自动代码格式化与 CI/CD 集成。",
        image: "/images/portfolio_app.png",
        technologies: [
          "Next.js 15.5.5",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Context API",
          "Vercel",
          "GitHub Actions",
          "无服务器函数",
          "Font Awesome",
          "Prettier"
        ],
        demoUrl: "https://devgarcia.vercel.app",
        githubUrl: [
          {
            "link": "https://github.com/daviders98/resume"
          }
        ],
        highlights: [
          "使用 Next.js 15.5.5、TypeScript 和 Tailwind CSS 构建，兼具性能与可维护性。",
          "响应式且无障碍的设计，内置明暗模式切换功能。",
          "使用 LanguageContext 和 ThemeContext 实现多语言与主题支持。",
          "安全的无服务器联系与令牌 API 端点，用于表单处理。",
          "可通过 `/data/portfolio.ts` 动态编辑的作品集部分。",
          "自定义文本与滚动动画，带来流畅的用户体验。",
          "部署于 Vercel，并通过 GitHub Actions 实现自动格式化与代码检查。"
        ]
      },
      {
        id: 3,
        title: "个人作品集网站",
        description: "在线展示你的作品和技能",
        longDescription:
          "一个简洁且响应式的个人作品集网站，用于展示项目、技能和成就。包含交互式版块、联系表单和博客以更新内容。",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&h=900&fit=crop",
        technologies: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
        demoUrl: "https://demo-portfolio.com",
        githubUrl: [{link:"https://github.com/daviders98"}],
        highlights: [
          "适用于所有设备的响应式设计",
          "使用 Framer Motion 实现动画过渡",
          "支持 Markdown 的博客版块",
          "带邮箱集成的联系表单",
        ],
      },
      {
        id: 4,
        title: "健身追踪应用",
        description: "记录锻炼、营养和进展",
        longDescription:
          "一个移动友好的健身应用，帮助用户记录锻炼、监控营养并跟踪进展。包含图表、提醒和目标设定功能。",
        image:
          "https://images.unsplash.com/photo-1483721310020-03333e577078?w=1600&h=900&fit=crop",
        technologies: ["React Native", "Node.js", "MongoDB", "Redux"],
        demoUrl: "https://demo-fitnessapp.com",
        githubUrl: [{link:"https://github.com/daviders98"}],
        highlights: [
          "记录锻炼和消耗的卡路里",
          "设置健身目标和提醒",
          "进度图表和分析",
          "社交分享和好友挑战",
        ],
      },
      {
        id: 5,
        title: "食谱分享平台",
        description: "分享和发现来自世界各地的食谱",
        longDescription:
          "一个网站平台，允许用户上传、分享和探索食谱。功能包括搜索过滤、评分和社区互动。",
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&h=900&fit=crop",
        technologies: ["Angular", "Firebase", "Bootstrap"],
        demoUrl: "https://demo-recipes.com",
        githubUrl: [{link:"https://github.com/daviders98"}],
        highlights: [
          "上传和管理个人食谱",
          "按食材搜索和筛选",
          "社区评分和评论",
          "响应式和移动友好的设计",
        ],
      },
      {
        id: 6,
        title: "旅游预订系统",
        description: "轻松预订航班、酒店和活动",
        longDescription:
          "一个端到端的旅游预订平台，使用户能够规划行程、预订航班、酒店和本地活动。集成支付网关和地图。",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&fit=crop",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
        demoUrl: "https://demo-travel.com",
        githubUrl: [{link:"https://github.com/daviders98"}],
        highlights: [
          "航班、酒店和活动预订",
          "集成的安全支付系统",
          "动态搜索和筛选选项",
          "互动地图和旅游推荐",
        ],
      },
    ],
  },
};

export const portfolioTitleStart = {
  en: "My",
  es: "Mi",
  zh: "我的",
};
export const portfolioTitleEnd = {
  en: "Portfolio",
  es: "Portafolio",
  zh: "作品集",
};

export const demoText = {
  en: "Demo",
  es: "Demo",
  zh: "演示",
};

export const codeText = {
  en: "Code",
  es: "Código",
  zh: "代码",
};

export const seeMoreText = {
  en: "See more",
  es: "Ver más",
  zh: "查看更多",
};
