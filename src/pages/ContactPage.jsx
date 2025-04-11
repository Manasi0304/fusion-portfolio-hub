
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Section from '../components/ui/Section';
import { Clock, MapPin, Globe } from 'lucide-react';

const ContactPage = () => {
  const faqs = [
    {
      question: "What is your typical project process?",
      answer: "My process typically includes: initial consultation, requirements gathering, proposal and quotation, design, development, testing, client review and feedback, revisions, final approval, and launch. After launch, I also offer maintenance and support services."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary based on complexity and requirements. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months or more. I'll provide a detailed timeline during the proposal stage."
    },
    {
      question: "What are your payment terms?",
      answer: "I typically require a 50% deposit to begin work, with the remaining 50% due upon project completion. For larger projects, I may propose a milestone-based payment schedule. I accept payments via bank transfer, PayPal, or credit card."
    },
    {
      question: "Do you offer ongoing maintenance services?",
      answer: "Yes, I offer maintenance packages to keep your website or application updated, secure, and performing optimally. These can be customized based on your needs and can include regular updates, security checks, backups, and content updates."
    },
    {
      question: "Can you work with clients remotely?",
      answer: "Absolutely! I work with clients worldwide. We can communicate via email, video calls, phone, or your preferred project management tools to ensure smooth collaboration regardless of location."
    }
  ];

  return (
    <div>
      <Navbar />
      
      <div className="pt-24 pb-12 bg-card">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h1>
          <p className="text-foreground/70 max-w-3xl">
            Have a project in mind or want to discuss a potential collaboration? Get in touch with me.
          </p>
        </div>
      </div>
      
      <Section className="bg-background">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin size={24} className="text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-foreground/70">New York, NY, United States</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Clock size={24} className="text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
            <p className="text-foreground/70">Monday - Friday: 9 AM - 6 PM EST</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Globe size={24} className="text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Global Clients</h3>
            <p className="text-foreground/70">Working with clients worldwide</p>
          </div>
        </div>
        
        <Contact />
      </Section>
      
      <Section 
        className="bg-card"
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about working with me."
        centerTitle
      >
        <div className="max-w-3xl mx-auto divide-y divide-border">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-foreground/70">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
