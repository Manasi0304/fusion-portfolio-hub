
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/About';
import Section from '../components/ui/Section';
import CTA from '../components/CTA';
import { BookOpen, Award, Calendar, Briefcase } from 'lucide-react';

const AboutPage = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Massachusetts Institute of Technology",
      period: "2014 - 2018",
      description: "Graduated with honors, focusing on Web Development and User Interface Design."
    },
    {
      degree: "Master of Science in Software Engineering",
      institution: "Stanford University",
      period: "2018 - 2020",
      description: "Specialized in advanced web technologies and frontend development patterns."
    }
  ];
  
  const experience = [
    {
      position: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2020 - Present",
      description: "Leading frontend development for enterprise applications, managing a team of 5 developers, and implementing modern React-based architecture."
    },
    {
      position: "Web Developer",
      company: "Digital Solutions LLC",
      period: "2018 - 2020",
      description: "Developed responsive websites and web applications for various clients using React, Node.js, and MongoDB."
    },
    {
      position: "Junior Developer Intern",
      company: "StartUp Innovations",
      period: "2017 - 2018",
      description: "Assisted in building MVP web applications and gained practical experience in agile development methodologies."
    }
  ];

  const services = [
    {
      title: "Web Development",
      description: "Creating responsive websites with modern technologies like React, Vue, and Node.js.",
      icon: <BookOpen className="text-primary" size={30} />
    },
    {
      title: "Mobile App Development",
      description: "Building cross-platform mobile applications using React Native and Firebase.",
      icon: <BookOpen className="text-primary" size={30} />
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user interfaces with a focus on user experience.",
      icon: <BookOpen className="text-primary" size={30} />
    },
    {
      title: "E-Commerce Solutions",
      description: "Creating complete e-commerce platforms with secure payment processing.",
      icon: <BookOpen className="text-primary" size={30} />
    }
  ];

  return (
    <div>
      <Navbar />
      
      <div className="pt-24 pb-12 bg-card">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-foreground/70 max-w-3xl">
            Learn more about my background, experience, and what drives me as a developer.
          </p>
        </div>
      </div>
      
      <About />
      
      <Section 
        title="My Services"
        subtitle="Here are the key services I offer to clients."
        centerTitle
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-lg card-hover-effect">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>
      
      <Section 
        className="bg-card"
        title="Experience & Education"
        subtitle="My professional journey and academic background."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase size={24} className="text-primary" />
              <h3 className="text-2xl font-semibold">Professional Experience</h3>
            </div>
            
            <div className="space-y-8">
              {experience.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary"></div>
                  <div className="mb-1">
                    <span className="bg-primary/20 text-primary text-sm px-2 py-1 rounded-full">
                      {item.period}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold">{item.position}</h4>
                  <p className="text-foreground/60 mb-2">{item.company}</p>
                  <p className="text-foreground/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award size={24} className="text-primary" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary"></div>
                  <div className="mb-1">
                    <span className="bg-primary/20 text-primary text-sm px-2 py-1 rounded-full">
                      {item.period}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold">{item.degree}</h4>
                  <p className="text-foreground/60 mb-2">{item.institution}</p>
                  <p className="text-foreground/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      
      <CTA />
      <Footer />
    </div>
  );
};

export default AboutPage;
