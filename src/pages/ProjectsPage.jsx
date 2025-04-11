
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section from '../components/ui/Section';
import CustomButton from '../components/ui/CustomButton';
import { ExternalLink, Github, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectsPage = () => {
  const categories = ["All", "Web Development", "Mobile Apps", "UI/UX Design", "Other"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A comprehensive dashboard for e-commerce stores with analytics, inventory management, and sales reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      category: "Web Development",
      featured: true
    },
    {
      id: 2,
      title: "Fitness Tracking App",
      description: "Mobile application that allows users to track workouts, set fitness goals, and monitor progress over time.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000",
      technologies: ["React Native", "Firebase", "Redux"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      category: "Mobile Apps",
      featured: true
    },
    {
      id: 3,
      title: "Finance Management Portal",
      description: "Web application for personal finance tracking with budget planning, expense categorization and visualization.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
      technologies: ["Vue.js", "Express", "MongoDB", "Chart.js"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      category: "Web Development",
      featured: true
    },
    {
      id: 4,
      title: "Travel Blog UI Design",
      description: "Complete UI/UX redesign for a travel blog platform focusing on content discovery and user engagement.",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=1000",
      technologies: ["Figma", "Adobe XD", "Illustrator"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      category: "UI/UX Design",
      featured: false
    },
    {
      id: 5,
      title: "Real Estate Finder",
      description: "Property searching and listing platform with advanced filtering, virtual tours, and agent connection.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
      technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      category: "Web Development",
      featured: false
    },
    {
      id: 6,
      title: "Restaurant Ordering App",
      description: "Mobile application for placing food orders, making reservations, and earning loyalty rewards.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000",
      technologies: ["React Native", "Firebase", "Stripe API"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      category: "Mobile Apps",
      featured: false
    },
    {
      id: 7,
      title: "Portfolio Website Template",
      description: "Clean and modern portfolio website template for creative professionals and developers.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      technologies: ["HTML/CSS", "JavaScript", "GSAP Animation"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      category: "Web Development",
      featured: false
    },
    {
      id: 8,
      title: "Task Management System",
      description: "Project management application with task tracking, deadline management, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      category: "Web Development",
      featured: false
    },
    {
      id: 9,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for monitoring and managing social media presence across multiple platforms.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1000",
      technologies: ["React", "Redux", "Chart.js", "Social Media APIs"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      category: "Other",
      featured: false
    }
  ];
  
  const [currentProject, setCurrentProject] = useState(null);
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  const openProjectDetails = (project) => {
    setCurrentProject(project);
    document.body.style.overflow = 'hidden';
  };
  
  const closeProjectDetails = () => {
    setCurrentProject(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <div>
      <Navbar />
      
      <div className="pt-24 pb-12 bg-card">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-foreground/70 max-w-3xl">
            A collection of my latest work showcasing my skills and expertise in various technologies.
          </p>
        </div>
      </div>
      
      <Section>
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category 
                    ? 'bg-primary text-white' 
                    : 'bg-secondary/30 text-foreground/80 hover:bg-secondary/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-card rounded-lg overflow-hidden shadow-lg card-hover-effect"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  {project.featured && (
                    <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-foreground/70 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="text-xs bg-secondary/50 text-foreground/90 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <a 
                      href={project.githubLink} 
                      className="text-foreground/60 hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View GitHub repository"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.liveLink} 
                      className="text-foreground/60 hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  
                  <CustomButton 
                    variant="ghost" 
                    onClick={() => openProjectDetails(project)}
                  >
                    <span className="mr-2">View Details</span>
                    <ArrowRight size={16} />
                  </CustomButton>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-foreground/70 mb-6">
              There are no projects in this category yet. Try selecting another category.
            </p>
            <CustomButton 
              onClick={() => setActiveCategory("All")} 
              variant="primary"
            >
              View All Projects
            </CustomButton>
          </div>
        )}
      </Section>
      
      {/* Project Details Modal */}
      {currentProject && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-background max-w-4xl w-full rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={currentProject.image} 
                  alt={currentProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <button 
                onClick={closeProjectDetails}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Close details"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h2 className="text-2xl font-bold">{currentProject.title}</h2>
                {currentProject.featured && (
                  <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
                <span className="bg-secondary/30 text-foreground/90 text-xs px-2 py-1 rounded-full">
                  {currentProject.category}
                </span>
              </div>
              
              <p className="text-foreground/80 mb-6">
                {currentProject.description}
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="text-sm bg-secondary/50 text-foreground/90 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <CustomButton 
                  href={currentProject.liveLink} 
                  variant="primary"
                >
                  <span className="mr-2">Live Demo</span>
                  <ExternalLink size={16} />
                </CustomButton>
                <CustomButton 
                  href={currentProject.githubLink} 
                  variant="outline"
                >
                  <span className="mr-2">Source Code</span>
                  <Github size={16} />
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

// Add the X icon since it's used in the modal
const X = ({ size, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export default ProjectsPage;
