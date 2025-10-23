'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

interface Project {
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

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full min-h-120 sm:min-h-120">
      <motion.div
  className="relative w-full h-full rounded-xl shadow-sm border border-border cursor-pointer overflow-hidden"
  style={{ transformStyle: 'preserve-3d' }}
  animate={{ rotateY: flipped ? 180 : 0 }}
  transition={{ duration: 0.6 }}
  onClick={() => setFlipped(!flipped)}
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>
        {/* ---------- FRONT ---------- */}
    {!flipped && <motion.div
  className={`inset-0 rounded-xl bg-background ${!flipped ? "pointer-events-auto": 'pointer-events-none' }`}
>
  <div className="absolute inset-0">
    <Image
      src={project.image}
      alt={project.title}
      fill
      className="object-cover w-full h-full"
    />
    <motion.div
      className="absolute inset-0"
      animate={{
        backdropFilter: hovered ? 'blur(6px)' : 'blur(0px)',
        backgroundColor: hovered ? 'rgba(0,0,0,0.36)' : 'rgba(0,0,0,0)',
      }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    />
  </div>

  {/* Centered title + description on hover */}
  <motion.div
    className="absolute inset-0 flex items-center justify-center text-center p-6"
    initial={{ opacity: 0, y: 6 }}
    animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
    transition={{ duration: 0.35, ease: 'easeOut' }}
  >
    <div className='bg-primary/20 rounded-2xl p-8'>
      <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-primary drop-shadow-lg">
        {project.title}
      </h3>
      <p className="text-primary/90 max-w-lg mx-auto text-sm sm:text-base">
        {project.description}
      </p>
      <div className="flex gap-2 mt-auto pt-4">
    {project.demoUrl && (
      <button
        className="flex-1 hover:text-primary cursor-pointer "
        onClick={(e) => {
          e.stopPropagation();
          window.open(project.demoUrl, '_blank');
        }}
      >
        <FontAwesomeIcon icon={faSquareArrowUpRight} /> Demo
      </button>
    )}
    {project.githubUrl && (
      <button
        className="flex-1 hover:text-primary cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          window.open(project.githubUrl, '_blank');
        }}
      >
        <FontAwesomeIcon icon={faGithub} /> Code
      </button>
    )}
    <button
      className="flex-1 hover:text-primary cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        setFlipped(true);
      }}
    >
      See more
    </button>
  </div>
    </div>
    
  </motion.div>
</motion.div>
}

{/* ---------- BACK ---------- */}
{<div
  className={`${flipped?'opacity-100 pointer-events-auto':'opacity-0 pointer-events-none'} inset-0 rounded-xl p-6 flex flex-col text-foreground h-full bg-primary/90`}
  style={{
    transform: 'rotateY(180deg)',
    boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
  }}
>
  <h3 className="text-2xl sm:text-3xl font-bold mb-3 drop-shadow-md">{project.title}</h3>
  <p className="text-foreground mb-4 text-sm sm:text-base">{project.longDescription}</p>

  {/* Tech chips */}
  <div className="flex flex-wrap gap-2 mb-4">
    {project.technologies?.map((tech) => (
      <span
        key={tech}
        className="px-3 py-1 bg-idk/50 text-foreground rounded-full text-xs font-medium backdrop-blur-sm shadow-sm"
      >
        {tech}
      </span>
    ))}
  </div>

  {/* Highlights */}
  {project.highlights && project.highlights.length > 0 && (
    <ul className="space-y-2 mb-4">
      {project.highlights.map((h, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
          <FontAwesomeIcon icon={faCircleChevronRight} className="mt-1 text-idk" />
          <span>{h}</span>
        </li>
      ))}
    </ul>
  )}

  {/* Buttons */}
  <div className="flex gap-2 mt-auto">
    {project.demoUrl && (
      <button
        className="flex-1 hover:bg-idk rounded py-2 transition cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          window.open(project.demoUrl, '_blank');
        }}
      >
        <FontAwesomeIcon icon={faSquareArrowUpRight} /> Demo
      </button>
    )}
    {project.githubUrl && (
      <button
        className="flex-1 hover:bg-idk rounded py-2 transition cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          window.open(project.githubUrl, '_blank');
        }}
      >
        <FontAwesomeIcon icon={faGithub} /> Code
      </button>
    )}
    <button
      className="flex-1 hover:bg-idk rounded py-2 transition cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        setFlipped(false);
      }}
    >
      Go back
    </button>
  </div>
</div>
}

      </motion.div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const portfolioData: { projects: Project[] } = {
    projects: [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-featured e-commerce platform with shopping cart',
    longDescription:
      'A comprehensive e-commerce solution that allows businesses to manage products, orders, and customers efficiently... lorem ipsum long text that shouldn’t really affect',
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

  return (
    <section id="portfolio" className="py-20 md:py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The following projects show what I am capable of.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
