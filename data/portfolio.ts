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
          "Styled components",
        ],
        demoUrl: "https://better-wordle.vercel.app",
        githubUrl: [
          {
            title: "Front end",
            link: "https://github.com/daviders98/wordle-front",
          },
          {
            title: "Back end",
            link: "https://github.com/daviders98/wordle-back",
          },
        ],
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
        description:
          "A modern, responsive portfolio and resume website built with Next.js, TypeScript, and Tailwind CSS.",
        longDescription:
          "A sleek and high-performance personal portfolio and resume website built using Next.js 15.5.5, TypeScript, and Tailwind CSS. It includes support for multiple languages and dark/light themes using React Context API, a contact form with a secure serverless endpoint, and a dynamic portfolio section powered by reusable and animated components. Deployed seamlessly on Vercel with automated GitHub Actions for code formatting and CI/CD integration.",
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
          "Prettier",
        ],
        demoUrl: "https://devgarcia.vercel.app",
        githubUrl: [
          {
            link: "https://github.com/daviders98/resume",
          },
        ],
        highlights: [
          "Built with Next.js 15.5.5, TypeScript, and Tailwind CSS for performance and maintainability.",
          "Responsive and accessible design with built-in dark/light mode toggle.",
          "LanguageContext and ThemeContext for multilingual and theme support.",
          "Serverless contact and token API endpoints for secure form handling.",
          "Dynamic and easily editable portfolio via `/data/portfolio.ts`.",
          "Custom text and scroll animations for engaging user experience.",
          "Deployed on Vercel with automated formatting and linting via GitHub Actions.",
        ],
      },
      {
        id: 3,
        title: "Better WhatsApp Web",
        description: "AI-Powered Real-Time Messaging App.",
        longDescription:
          "A modern, AI-enhanced real-time messaging platform inspired by WhatsApp Web. Built to demonstrate a seamless AI integration. Features live chat, semantic search, conversation insights, tone analysis, auto-translation, and more.",
        image: "/images/better_whatsapp_ai.png",
        technologies: [
          "React",
          "Next.js",
          "Framer Motion",
          "Tailwind CSS",
          "Server Actions",
          "AI APIs",
        ],
        demoUrl: "https://better-whatsapp-web.vercel.app/",
        githubUrl: [{ link: "https://github.com/daviders98" }],
        highlights: [
          "Real-time messaging with a fully custom UI",
          "AI Conversation Summaries for instant context",
          "Smart Search powered by semantic understanding",
          "Contextual Sidebar with topics, key points, and action items",
          "AI Tone Checker, Smart Replies, and Message Rewrite",
          "Voice note transcription & instant auto-translation",
        ],
      },
      {
        id: 4,
        title: "Random Users Table",
        description:
          "Interactive table displaying users from the Random User API",
        longDescription:
          "Built as part of a technical assessment to demonstrate React, TypeScript, and state management skills. This web application fetches and displays 100 users from the Random User API in a dynamic table. Users can color rows, sort by country, delete rows, restore the initial state, and filter by country. The app demonstrates strong use of React Context for global state, useEffect for data fetching and error handling, useState for component-level state, and memoization to optimize re-renders. Provides a responsive UI and clear separation of concerns using multiple providers and memoized components.",
        image: "/images/random-users.png",
        technologies: [
          "Vite",
          "TypeScript",
          "React",
          "Context API",
          "useMemo",
          "useEffect",
          "useState",
        ],
        demoUrl: "https://technical-test1-react.vercel.app/",
        githubUrl: [{ link: "https://github.com/daviders98/TechnicalTest1" }],
        highlights: [
          "Fetched 100 users from the Random User API with proper error handling",
          "Dynamic table with sorting, filtering, row coloring, deletion, and restoration",
          "Global state management via React Context and multiple providers",
          "Optimized component rendering using useMemo and memoized table rows",
          "Responsive UI with clean, maintainable TypeScript code",
          "Clear project documentation with a README explaining setup and usage",
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
        githubUrl: [{ link: "https://github.com/daviders98" }],
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
        githubUrl: [{ link: "https://github.com/daviders98" }],
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
          "Styled components",
        ],
        demoUrl: "https://better-wordle.vercel.app",
        githubUrl: [
          {
            title: "Front end",
            link: "https://github.com/daviders98/wordle-front",
          },
          {
            title: "Back end",
            link: "https://github.com/daviders98/wordle-back",
          },
        ],
        highlights: [
          "Frontend construido con React + TypeScript y alojado en Vercel.",
          "Backend desarrollado con Django + Supabase y alojado en Render.",
          "Estadísticas de jugador persistentes y seguimiento de rachas mediante `localStorage`.",
          "Generación automática de changelogs con Husky y GitHub Actions.",
          "Endpoints de API seguros con CORS, CSRF y autenticación JWT.",
          "Lógica diaria de rotación de palabras impulsada por funciones serverless y un trabajo Cron.",
        ],
      },
      {
        id: 2,
        title: "Portafolio Personal y Aplicación de Currículum",
        description:
          "Un sitio web moderno y adaptable de portafolio y currículum construido con Next.js, TypeScript y Tailwind CSS.",
        longDescription:
          "Un sitio web de portafolio y currículum personal elegante y de alto rendimiento desarrollado con Next.js 15.5.5, TypeScript y Tailwind CSS. Incluye soporte para múltiples idiomas y modos claro/oscuro mediante React Context API, un formulario de contacto con endpoint sin servidor seguro, y una sección de portafolio dinámica impulsada por componentes reutilizables y animados. Desplegado fácilmente en Vercel con acciones automatizadas de GitHub para formateo de código e integración CI/CD.",
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
          "Prettier",
        ],
        demoUrl: "https://devgarcia.vercel.app",
        githubUrl: [
          {
            link: "https://github.com/daviders98/resume",
          },
        ],
        highlights: [
          "Construido con Next.js 15.5.5, TypeScript y Tailwind CSS para máximo rendimiento y mantenibilidad.",
          "Diseño adaptable y accesible con alternancia entre modo claro/oscuro integrada.",
          "LanguageContext y ThemeContext para soporte multilingüe y de temas.",
          "Endpoints sin servidor para contacto y tokens, garantizando un manejo seguro de formularios.",
          "Portafolio dinámico y fácilmente editable a través de `/data/portfolio.ts`.",
          "Animaciones personalizadas de texto y desplazamiento para una experiencia de usuario atractiva.",
          "Desplegado en Vercel con formateo y linting automatizados mediante GitHub Actions.",
        ],
      },
      {
        id: 3,
        title: "Mejor WhatsApp Web",
        description:
          "Aplicación de mensajería en tiempo real impulsada por IA.",
        longDescription:
          "Una plataforma moderna de mensajería en tiempo real mejorada con inteligencia artificial, inspirada en WhatsApp Web. Creada para demostrar una integración fluida de IA. Incluye chat en vivo, búsqueda semántica, análisis de conversaciones, análisis de tono, traducción automática y mucho más.",
        image: "/images/better_whatsapp_ai.png",
        technologies: [
          "React",
          "Next.js",
          "Framer Motion",
          "Tailwind CSS",
          "Server Actions",
          "APIs de IA",
        ],
        demoUrl: "https://better-whatsapp-web.vercel.app/",
        githubUrl: [{ link: "https://github.com/daviders98" }],
        highlights: [
          "Mensajería en tiempo real con una interfaz completamente personalizada",
          "Resúmenes de conversaciones con IA para obtener contexto inmediato",
          "Búsqueda inteligente impulsada por comprensión semántica",
          "Barra lateral contextual con temas, puntos clave y acciones",
          "Análisis de tono con IA, respuestas inteligentes y reescritura de mensajes",
          "Transcripción de notas de voz y traducción automática instantánea",
        ],
      },
      {
        id: 4,
        title: "Tabla de Usuarios Aleatorios",
        description:
          "Tabla interactiva que muestra usuarios desde la API Random User",
        longDescription:
          "Construido como parte de una evaluación técnica para demostrar habilidades en React, TypeScript y gestión de estado. Esta aplicación web obtiene y muestra 100 usuarios desde la API Random User en una tabla dinámica. Los usuarios pueden colorear filas, ordenar por país, eliminar filas, restaurar el estado inicial y filtrar por país. La aplicación demuestra un uso sólido de React Context para el estado global, useEffect para la obtención de datos y manejo de errores, useState para el estado a nivel de componente y memoización para optimizar los re-renderizados. Proporciona una interfaz responsiva y una separación clara de responsabilidades usando múltiples providers y componentes memoizados.",
        image: "/images/random-users.png",
        technologies: [
          "Vite",
          "TypeScript",
          "React",
          "Context API",
          "useMemo",
          "useEffect",
          "useState",
        ],
        demoUrl: "https://technical-test1-react.vercel.app/",
        githubUrl: [{ link: "https://github.com/daviders98/TechnicalTest1" }],
        highlights: [
          "Obtuvo 100 usuarios desde la API Random User con manejo adecuado de errores",
          "Tabla dinámica con ordenamiento, filtrado, coloreado de filas, eliminación y restauración",
          "Gestión del estado global usando React Context y múltiples providers",
          "Optimización de renderizados usando useMemo y filas memoizadas",
          "Interfaz responsiva con código TypeScript limpio y mantenible",
          "Documentación clara del proyecto con README explicando instalación y uso",
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
        githubUrl: [{ link: "https://github.com/daviders98" }],
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
        githubUrl: [{ link: "https://github.com/daviders98" }],
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
          "Styled components",
        ],
        demoUrl: "https://better-wordle.vercel.app",
        githubUrl: [
          {
            title: "前端",
            link: "https://github.com/daviders98/wordle-front",
          },
          {
            title: "后端",
            link: "https://github.com/daviders98/wordle-back",
          },
        ],
        highlights: [
          "前端使用 React + TypeScript 构建并部署在 Vercel。",
          "后端基于 Django + Supabase 构建并托管在 Render。",
          "通过 `localStorage` 持久化玩家统计数据和连胜记录。",
          "使用 Husky 和 GitHub Actions 自动生成更新日志。",
          "通过 CORS、CSRF 和 JWT 实现安全的 API 端点。",
          "使用无服务器函数和 Cron 任务实现每日单词轮换逻辑。",
        ],
      },
      {
        id: 2,
        title: "个人作品集与简历应用",
        description:
          "一个使用 Next.js、TypeScript 和 Tailwind CSS 构建的现代响应式作品集与简历网站。",
        longDescription:
          "一个外观精美、高性能的个人作品集与简历网站，使用 Next.js 15.5.5、TypeScript 和 Tailwind CSS 构建。通过 React Context API 实现多语言和明暗主题支持，包含一个安全的无服务器联系表单端点，以及一个由可重用和动画组件驱动的动态作品集部分。部署在 Vercel 上，并通过 GitHub Actions 实现自动代码格式化与 CI/CD 集成。",
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
          "Prettier",
        ],
        demoUrl: "https://devgarcia.vercel.app",
        githubUrl: [
          {
            link: "https://github.com/daviders98/resume",
          },
        ],
        highlights: [
          "使用 Next.js 15.5.5、TypeScript 和 Tailwind CSS 构建，兼具性能与可维护性。",
          "响应式且无障碍的设计，内置明暗模式切换功能。",
          "使用 LanguageContext 和 ThemeContext 实现多语言与主题支持。",
          "安全的无服务器联系与令牌 API 端点，用于表单处理。",
          "可通过 `/data/portfolio.ts` 动态编辑的作品集部分。",
          "自定义文本与滚动动画，带来流畅的用户体验。",
          "部署于 Vercel，并通过 GitHub Actions 实现自动格式化与代码检查。",
        ],
      },
      {
        id: 3,
        title: "更好的 WhatsApp Web",
        description: "由人工智能驱动的实时消息应用。",
        longDescription:
          "一个现代化的实时消息平台，融合了人工智能功能，灵感来自 WhatsApp Web。该项目旨在展示无缝的 AI 集成体验。功能包括实时聊天、语义搜索、对话分析、语气分析、自动翻译等。",
        image: "/images/better_whatsapp_ai.png",
        technologies: [
          "React",
          "Next.js",
          "Framer Motion",
          "Tailwind CSS",
          "Server Actions",
          "AI 接口",
        ],
        demoUrl: "https://better-whatsapp-web.vercel.app/",
        githubUrl: [{ link: "https://github.com/daviders98" }],
        highlights: [
          "具有完全自定义界面的实时消息功能",
          "AI 对话摘要，快速获取上下文信息",
          "基于语义理解的智能搜索",
          "上下文侧边栏，包含主题、关键点和待办事项",
          "AI 语气检测、智能回复和消息重写",
          "语音消息转写与即时自动翻译",
        ],
      },
      {
        id: 4,
        title: "随机用户表格",
        description: "显示来自 Random User API 的用户的交互式表格",
        longDescription:
          "作为技术考核的一部分构建，用于展示 React、TypeScript 和状态管理技能。该 Web 应用从 Random User API 获取并显示 100 个用户的动态表格。用户可以为行着色、按国家排序、删除行、恢复初始状态以及按国家筛选数据。该应用展示了对 React Context 的全局状态管理、useEffect 用于数据获取和错误处理、useState 管理组件级状态以及使用 memoization 优化重渲染的能力。提供响应式 UI，并通过多个 provider 和 memoized 组件实现清晰的关注点分离。",
        image: "/images/random-users.png",
        technologies: [
          "Vite",
          "TypeScript",
          "React",
          "Context API",
          "useMemo",
          "useEffect",
          "useState",
        ],
        demoUrl: "https://technical-test1-react.vercel.app/",
        githubUrl: [{ link: "https://github.com/daviders98/TechnicalTest1" }],
        highlights: [
          "从 Random User API 获取 100 个用户，并进行错误处理",
          "动态表格，支持排序、筛选、行着色、删除和恢复",
          "通过 React Context 和多个 provider 管理全局状态",
          "使用 useMemo 和 memoized 行优化组件渲染",
          "响应式 UI，TypeScript 代码清晰且易维护",
          "提供清晰的项目文档及 README 指南",
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
        githubUrl: [{ link: "https://github.com/daviders98" }],
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
        githubUrl: [{ link: "https://github.com/daviders98" }],
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
