export const portfolioExtra = 'The following projects show what I am capable of.'

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

export const portfolioData: { projects: Project[] } = {
    projects: [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-featured e-commerce platform with shopping cart',
    longDescription:
      'A comprehensive e-commerce solution that allows businesses to manage products, orders, and customers efficiently...',
    image:
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=1600&h=900&fit=crop',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redux', 'Tailwind CSS'],
    demoUrl: 'https://demo-ecommerce.com',
    githubUrl: 'https://github.com/tuusuario/ecommerce-platform',
    highlights: [
      'Secure payment processing with Stripe',
      'Admin dashboard with real-time metrics',
      'Automated inventory management system',
      'SEO optimization for better visibility',
    ],
  },
  {
    id: 2,
    title: 'Project Management App',
    description: 'Manage projects, tasks, and teams efficiently',
    longDescription:
      'A robust project management tool designed to streamline workflow, track progress, and enhance collaboration across teams. Features include task assignment, notifications, and reporting dashboards.',
    image:
      'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=1600&h=900&fit=crop',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Chart.js'],
    demoUrl: 'https://demo-projects.com',
    githubUrl: 'https://github.com/tuusuario/project-management-app',
    highlights: [
      'Real-time task updates with Firebase',
      'Interactive dashboards with charts',
      'Team collaboration and messaging',
      'Customizable project templates',
    ],
  },
  {
    id: 3,
    title: 'Personal Portfolio Website',
    description: 'Showcase your work and skills online',
    longDescription:
      'A sleek and responsive personal portfolio website to present projects, skills, and achievements. Includes interactive sections, contact forms, and a blog for content updates.',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&h=900&fit=crop',
    technologies: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS'],
    demoUrl: 'https://demo-portfolio.com',
    githubUrl: 'https://github.com/tuusuario/portfolio-website',
    highlights: [
      'Responsive design for all devices',
      'Animated transitions with Framer Motion',
      'Blog section with markdown support',
      'Contact form with email integration',
    ],
  },
  {
    id: 4,
    title: 'Fitness Tracking App',
    description: 'Track workouts, nutrition, and progress',
    longDescription:
      'A mobile-friendly fitness app that helps users log workouts, monitor nutrition, and track progress over time. Includes charts, reminders, and goal-setting features.',
    image:
      'https://images.unsplash.com/photo-1483721310020-03333e577078?w=1600&h=900&fit=crop',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Redux'],
    demoUrl: 'https://demo-fitnessapp.com',
    githubUrl: 'https://github.com/tuusuario/fitness-tracking-app',
    highlights: [
      'Track workouts and calories burned',
      'Set fitness goals and reminders',
      'Progress charts and analytics',
      'Social sharing and friend challenges',
    ],
  },
  {
    id: 5,
    title: 'Recipe Sharing Platform',
    description: 'Share and discover recipes from around the world',
    longDescription:
      'A web platform that allows users to upload, share, and explore recipes. Features include search filters, ratings, and community interactions.',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&h=900&fit=crop',
    technologies: ['Angular', 'Firebase', 'Bootstrap'],
    demoUrl: 'https://demo-recipes.com',
    githubUrl: 'https://github.com/tuusuario/recipe-sharing-platform',
    highlights: [
      'Upload and manage personal recipes',
      'Search and filter by ingredients',
      'Community ratings and comments',
      'Responsive and mobile-friendly design',
    ],
  },
  {
    id: 6,
    title: 'Travel Booking System',
    description: 'Book flights, hotels, and activities seamlessly',
    longDescription:
      'An end-to-end travel booking platform enabling users to plan trips, book flights, hotels, and local activities. Integrated with payment gateways and maps.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&fit=crop',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    demoUrl: 'https://demo-travel.com',
    githubUrl: 'https://github.com/tuusuario/travel-booking-system',
    highlights: [
      'Flight, hotel, and activity booking',
      'Integrated secure payment system',
      'Dynamic search and filtering options',
      'Interactive maps and travel recommendations',
    ],
  },
]

  };