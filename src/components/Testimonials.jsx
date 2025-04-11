
import React from 'react';
import Section from './ui/Section';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      content: "Working with John was an absolute pleasure. He understood our vision perfectly and delivered a website that exceeded our expectations. His attention to detail and technical expertise are truly impressive.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director",
      content: "John's ability to translate complex ideas into intuitive designs is remarkable. He not only built us a beautiful website but also ensured it performed excellently. We saw a 40% increase in user engagement after launch.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Startup Founder",
      content: "As a startup with a tight budget, we needed someone who could deliver quality work efficiently. John was precisely that person. He was professional, responsive, and delivered our project on time and within budget.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <Section 
      id="testimonials" 
      className="bg-secondary"
      title="Client Testimonials"
      subtitle="Here's what some of my clients have to say about working with me."
      centerTitle
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map(testimonial => (
          <div 
            key={testimonial.id} 
            className="bg-card p-6 rounded-lg shadow-lg glass-effect card-hover-effect"
          >
            <div className="flex justify-start mb-6">
              <Quote size={30} className="text-primary" />
            </div>
            
            <p className="text-foreground/80 mb-6 italic">
              "{testimonial.content}"
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-foreground/60 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
