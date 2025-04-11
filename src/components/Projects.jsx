
import React, { useState } from 'react';
import Section from './ui/Section';
import CustomButton from './ui/CustomButton';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const categories = ["All", "Web Development", "Mobile Apps", "UI/UX Design"];
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
      category: "Web Development"
    },
    {
      id: 2,
      title: "Fitness Tracking App",
      description: "Mobile application that allows users to track workouts, set fitness goals, and monitor progress over time.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000",
      technologies: ["React Native", "Firebase", "Redux"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      category: "Mobile Apps"
    },
    {
      id: 3,
      title: "Finance Management Portal",
      description: "Web application for personal finance tracking with budget planning, expense categorization and visualization.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
      technologies: ["Vue.js", "Express", "MongoDB", "Chart.js"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      category: "Web Development"
    },
    {
      id: 4,
      title: "Travel Blog UI Design",
      description: "Complete UI/UX redesign for a travel blog platform focusing on content discovery and user engagement.",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=1000",
      technologies: ["Figma", "Adobe XD", "Illustrator"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      category: "UI/UX Design"
    },
    {
      id: 5,
      title: "Real Estate Finder",
      description: "Property searching and listing platform with advanced filtering, virtual tours, and agent connection.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
      technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      category: "Web Development"
    },
    {
      id: 6,
      title: "Restaurant Ordering App",
      description: "Mobile application for placing food orders, making reservations, and earning loyalty rewards.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000",
      technologies: ["React Native", "Firebase", "Stripe API"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      category: "Mobile Apps"
    }
  ];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <Section 
      id="projects" 
      title="My Projects"
      subtitle="Explore some of my recent work and side projects."
      centerTitle
    >
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
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-foreground/70 mb-4">{project.description}</p>
              
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
                
                <CustomButton variant="ghost" href={project.liveLink}>
                  <span className="mr-2">View Project</span>
                  <ArrowRight size={16} />
                </CustomButton>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <CustomButton to="/projects" variant="primary">
          View All Projects
        </CustomButton>
      </div>
    </Section>
  );
};

export default Projects;
