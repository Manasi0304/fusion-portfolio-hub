
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import Section from '../components/ui/Section';
import CTA from '../components/CTA';
import { Code, Database, PaintBucket, Workflow } from 'lucide-react';

const SkillsPage = () => {
  const skillSets = [
    {
      category: "Development",
      icon: <Code size={30} className="text-primary" />,
      skills: [
        { name: "HTML/CSS", level: "Expert" },
        { name: "JavaScript", level: "Expert" },
        { name: "TypeScript", level: "Advanced" },
        { name: "React", level: "Expert" },
        { name: "Vue.js", level: "Advanced" },
        { name: "Angular", level: "Intermediate" },
        { name: "Node.js", level: "Advanced" },
        { name: "Express", level: "Advanced" },
        { name: "React Native", level: "Intermediate" },
      ]
    },
    {
      category: "Design",
      icon: <PaintBucket size={30} className="text-primary" />,
      skills: [
        { name: "UI/UX Design", level: "Advanced" },
        { name: "Figma", level: "Advanced" },
        { name: "Adobe XD", level: "Intermediate" },
        { name: "Photoshop", level: "Intermediate" },
        { name: "Illustrator", level: "Basic" },
        { name: "Responsive Design", level: "Expert" },
        { name: "Animation", level: "Intermediate" },
      ]
    },
    {
      category: "Database & Backend",
      icon: <Database size={30} className="text-primary" />,
      skills: [
        { name: "MongoDB", level: "Advanced" },
        { name: "MySQL", level: "Intermediate" },
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "Firebase", level: "Advanced" },
        { name: "REST API", level: "Expert" },
        { name: "GraphQL", level: "Intermediate" },
        { name: "AWS", level: "Intermediate" },
      ]
    },
    {
      category: "Tools & Workflow",
      icon: <Workflow size={30} className="text-primary" />,
      skills: [
        { name: "Git & GitHub", level: "Expert" },
        { name: "Docker", level: "Intermediate" },
        { name: "CI/CD", level: "Intermediate" },
        { name: "Jest", level: "Advanced" },
        { name: "Webpack", level: "Advanced" },
        { name: "Agile/Scrum", level: "Advanced" },
        { name: "JIRA", level: "Intermediate" },
      ]
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Expert":
        return "bg-green-500";
      case "Advanced":
        return "bg-blue-500";
      case "Intermediate":
        return "bg-yellow-500";
      case "Basic":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div>
      <Navbar />
      
      <div className="pt-24 pb-12 bg-card">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h1>
          <p className="text-foreground/70 max-w-3xl">
            An overview of my technical skills, expertise, and proficiency levels.
          </p>
        </div>
      </div>
      
      <Skills />
      
      <Section 
        className="bg-card"
        title="Skill Breakdown"
        subtitle="A detailed look at my skills across different categories."
        centerTitle
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {skillSets.map((skillSet, index) => (
            <div key={index} className="bg-secondary/20 p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                {skillSet.icon}
                <h3 className="text-xl font-semibold">{skillSet.category}</h3>
              </div>
              
              <div className="space-y-4">
                {skillSet.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full text-white ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      <Section 
        title="My Development Process"
        subtitle="How I approach projects from concept to completion."
      >
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-1/2 -ml-0.5 w-0.5 bg-primary/30"></div>
          
          <div className="space-y-16">
            <div className="relative">
              <div className="absolute left-1/2 -ml-4 mt-1">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">1</div>
              </div>
              
              <div className="ml-[calc(50%+2rem)] pl-6 pb-4">
                <h3 className="text-xl font-semibold mb-2">Research & Planning</h3>
                <p className="text-foreground/70">
                  I start by understanding the project requirements, target audience, and objectives. 
                  This phase includes competitive analysis, user research, and creating a project plan.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 -ml-4 mt-1">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">2</div>
              </div>
              
              <div className="mr-[calc(50%+2rem)] pr-6 text-right pb-4">
                <h3 className="text-xl font-semibold mb-2">Design & Prototyping</h3>
                <p className="text-foreground/70">
                  Next, I create wireframes and interactive prototypes to visualize the solution. 
                  This helps in getting early feedback and making necessary adjustments.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 -ml-4 mt-1">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">3</div>
              </div>
              
              <div className="ml-[calc(50%+2rem)] pl-6 pb-4">
                <h3 className="text-xl font-semibold mb-2">Development</h3>
                <p className="text-foreground/70">
                  With a solid plan and design in place, I start building the solution using appropriate technologies.
                  I follow best practices for clean, maintainable, and efficient code.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 -ml-4 mt-1">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">4</div>
              </div>
              
              <div className="mr-[calc(50%+2rem)] pr-6 text-right pb-4">
                <h3 className="text-xl font-semibold mb-2">Testing & Quality Assurance</h3>
                <p className="text-foreground/70">
                  Rigorous testing ensures the solution works perfectly across all devices and browsers.
                  This includes performance testing, accessibility checks, and user testing.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 -ml-4 mt-1">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">5</div>
              </div>
              
              <div className="ml-[calc(50%+2rem)] pl-6">
                <h3 className="text-xl font-semibold mb-2">Deployment & Maintenance</h3>
                <p className="text-foreground/70">
                  Finally, I deploy the solution and provide ongoing maintenance and support.
                  I'm committed to ensuring the long-term success of every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <CTA />
      <Footer />
    </div>
  );
};

export default SkillsPage;
