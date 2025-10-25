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
  githubUrl?: string;
  highlights?: string[];
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
        title: "E-Commerce Platform",
        description: "Full-featured e-commerce platform with shopping cart",
        longDescription:
          "A comprehensive e-commerce solution that allows businesses to manage products, orders, and customers efficiently...",
        image:
          "https://images.unsplash.com/photo-1557821552-17105176677c?w=1600&h=900&fit=crop",
        technologies: [
          "React",
          "Node.js",
          "PostgreSQL",
          "Stripe",
          "Redux",
          "Tailwind CSS",
        ],
        demoUrl: "https://demo-ecommerce.com",
        githubUrl: "https://github.com/daviders98",
        highlights: [
          "Secure payment processing with Stripe",
          "Admin dashboard with real-time metrics",
          "Automated inventory management system",
          "SEO optimization for better visibility",
        ],
      },
      {
        id: 2,
        title: "Project Management App",
        description: "Manage projects, tasks, and teams efficiently",
        longDescription:
          "A robust project management tool designed to streamline workflow, track progress, and enhance collaboration across teams. Features include task assignment, notifications, and reporting dashboards.",
        image:
          "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=1600&h=900&fit=crop",
        technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Chart.js"],
        demoUrl: "https://demo-projects.com",
        githubUrl: "https://github.com/daviders98",
        highlights: [
          "Real-time task updates with Firebase",
          "Interactive dashboards with charts",
          "Team collaboration and messaging",
          "Customizable project templates",
        ],
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
        githubUrl: "https://github.com/daviders98",
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
        githubUrl: "https://github.com/daviders98",
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
        githubUrl: "https://github.com/daviders98",
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
        githubUrl: "https://github.com/daviders98",
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
        title: "Plataforma de Comercio Electrónico",
        description:
          "Plataforma completa de comercio electrónico con carrito de compras",
        longDescription:
          "Una solución integral de comercio electrónico que permite a las empresas gestionar productos, pedidos y clientes de manera eficiente...",
        image:
          "https://images.unsplash.com/photo-1557821552-17105176677c?w=1600&h=900&fit=crop",
        technologies: [
          "React",
          "Node.js",
          "PostgreSQL",
          "Stripe",
          "Redux",
          "Tailwind CSS",
        ],
        demoUrl: "https://demo-ecommerce.com",
        githubUrl: "https://github.com/daviders98",
        highlights: [
          "Procesamiento de pagos seguro con Stripe",
          "Panel de administración con métricas en tiempo real",
          "Sistema automatizado de gestión de inventario",
          "Optimización SEO para mayor visibilidad",
        ],
      },
      {
        id: 2,
        title: "App de Gestión de Proyectos",
        description: "Gestiona proyectos, tareas y equipos de manera eficiente",
        longDescription:
          "Una herramienta robusta de gestión de proyectos diseñada para optimizar el flujo de trabajo, realizar seguimiento del progreso y mejorar la colaboración entre equipos. Incluye asignación de tareas, notificaciones y paneles de informes.",
        image:
          "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=1600&h=900&fit=crop",
        technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Chart.js"],
        demoUrl: "https://demo-projects.com",
        githubUrl: "https://github.com/daviders98",
        highlights: [
          "Actualizaciones de tareas en tiempo real con Firebase",
          "Paneles interactivos con gráficos",
          "Colaboración y mensajería en equipo",
          "Plantillas de proyecto personalizables",
        ],
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
        githubUrl: "https://github.com/daviders98",
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
        githubUrl: "https://github.com/daviders98",
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
        githubUrl: "https://github.com/daviders98",
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
        githubUrl: "https://github.com/daviders98",
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
        title: "电子商务平台",
        description: "具有购物车功能的完整电子商务平台",
        longDescription:
          "一个综合性的电子商务解决方案，使企业能够高效管理产品、订单和客户...",
        image:
          "https://images.unsplash.com/photo-1557821552-17105176677c?w=1600&h=900&fit=crop",
        technologies: [
          "React",
          "Node.js",
          "PostgreSQL",
          "Stripe",
          "Redux",
          "Tailwind CSS",
        ],
        demoUrl: "https://demo-ecommerce.com",
        githubUrl: "https://github.com/daviders98",
        highlights: [
          "使用 Stripe 安全处理支付",
          "带实时指标的管理仪表盘",
          "自动化库存管理系统",
          "SEO 优化以提高可见性",
        ],
      },
      {
        id: 2,
        title: "项目管理应用",
        description: "高效管理项目、任务和团队",
        longDescription:
          "一个强大的项目管理工具，用于优化工作流程、跟踪进度并增强团队协作。功能包括任务分配、通知和报告仪表盘。",
        image:
          "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=1600&h=900&fit=crop",
        technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Chart.js"],
        demoUrl: "https://demo-projects.com",
        githubUrl: "https://github.com/daviders98",
        highlights: [
          "使用 Firebase 实时更新任务",
          "带图表的交互式仪表盘",
          "团队协作与消息传递",
          "可自定义的项目模板",
        ],
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
        githubUrl: "https://github.com/daviders98",
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
        githubUrl: "https://github.com/daviders98",
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
        githubUrl: "https://github.com/daviders98",
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
        githubUrl: "https://github.com/daviders98",
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
