
import React, { useEffect } from 'react';
import { ArrowDown, Code, Briefcase, Star } from 'lucide-react';
import CustomButton from './ui/CustomButton';

const Hero = () => {
  // Function to handle smooth scroll to about section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center hero-gradient">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Creative <span className="gradient-text glow">Developer</span> Crafting Digital Experiences
              </h1>
              
              <p className="text-lg text-foreground/80">
                I design and develop exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <CustomButton to="/projects" size="large">
                  View My Work
                </CustomButton>
                
                <CustomButton variant="outline" to="/contact" size="large">
                  Get In Touch
                </CustomButton>
              </div>
              
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Code size={20} className="text-primary" />
                  <span>Frontend Developer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={20} className="text-primary" />
                  <span>5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={20} className="text-primary" />
                  <span>Quality Focused</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full bg-primary/30 animate-bounce"></div>
              <div className="absolute inset-8 rounded-full bg-secondary animate-spin-slow"></div>
              <div className="absolute inset-12 rounded-full bg-background flex items-center justify-center text-6xl font-bold text-primary">
                D
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
          <button 
            onClick={scrollToAbout}
            className="text-foreground/60 hover:text-primary transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} className="animate-float" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
