
import React from 'react';
import Section from './ui/Section';
import CustomButton from './ui/CustomButton';
import { Calendar, MapPin, User, FileText } from 'lucide-react';

const About = () => {
  return (
    <Section 
      id="about" 
      className="bg-card"
      title="About Me"
      subtitle="Get to know more about me and my background."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-square w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" 
              alt="Professional portrait" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute -bottom-6 -right-6 bg-card glass-effect p-4 rounded-lg shadow-lg hidden lg:block">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Available for work</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Hi, I'm John Doe</h3>
          
          <p className="text-foreground/80 leading-relaxed">
            I'm a passionate full-stack developer with a focus on creating beautiful, functional, and user-centered digital experiences. With 5+ years of experience in web development, I am always looking for new and innovative ways to bring my clients' visions to life.
          </p>
          
          <p className="text-foreground/80 leading-relaxed">
            I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            <div className="flex items-center gap-3">
              <User size={20} className="text-primary" />
              <div>
                <p className="text-sm text-foreground/60">Name</p>
                <p className="font-medium">John Doe</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-primary" />
              <div>
                <p className="text-sm text-foreground/60">Location</p>
                <p className="font-medium">New York, USA</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Calendar size={20} className="text-primary" />
              <div>
                <p className="text-sm text-foreground/60">Experience</p>
                <p className="font-medium">5+ Years</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <FileText size={20} className="text-primary" />
              <div>
                <p className="text-sm text-foreground/60">Education</p>
                <p className="font-medium">B.Sc. Computer Science</p>
              </div>
            </div>
          </div>
          
          <div className="pt-4 flex gap-4">
            <CustomButton href="/resume.pdf" variant="primary">
              Download CV
            </CustomButton>
            <CustomButton to="/contact" variant="outline">
              Contact Me
            </CustomButton>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
