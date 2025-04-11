
import React from 'react';
import Section from './ui/Section';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React.js", level: 92 },
        { name: "Vue.js", level: 85 },
        { name: "Angular", level: 80 },
        { name: "Tailwind CSS", level: 90 },
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "SQL", level: 80 },
        { name: "Firebase", level: 85 },
        { name: "GraphQL", level: 78 },
      ]
    },
    {
      category: "Other Skills",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "UI/UX Design", level: 85 },
        { name: "Responsive Design", level: 95 },
        { name: "Testing", level: 80 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 78 },
      ]
    }
  ];

  return (
    <Section 
      id="skills" 
      className="bg-card"
      title="My Skills"
      subtitle="Technologies and tools I work with on a regular basis."
      centerTitle
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {skillCategories.map((category, index) => (
          <div key={index} className="glass-effect p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 text-center gradient-text">
              {category.category}
            </h3>
            
            <div className="space-y-6">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary/30 rounded-full h-2.5">
                    <div 
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16">
        <h3 className="text-xl font-semibold mb-8 text-center">Technologies I Work With</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
          {[
            "JavaScript", "React", "Node.js", "MongoDB", 
            "Express.js", "Git", "HTML5", "CSS3", 
            "Tailwind CSS", "Firebase", "Redux", "Jest"
          ].map((tech, index) => (
            <div 
              key={index}
              className="bg-secondary/20 rounded-lg p-4 hover:bg-secondary/40 transition-colors"
            >
              <div className="font-medium">{tech}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
