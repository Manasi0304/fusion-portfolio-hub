
import React, { useState } from 'react';
import Section from './ui/Section';
import CustomButton from './ui/CustomButton';
import { Send, MapPin, Mail, Phone, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <Section 
      id="contact" 
      title="Contact Me"
      subtitle="Let's connect! Reach out to me for collaboration or any inquiries."
      centerTitle
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-foreground/70 mb-6">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-foreground/70">New York, NY, USA</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:contact@example.com" className="text-foreground/70 hover:text-primary transition-colors">
                    contact@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+1234567890" className="text-foreground/70 hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg shadow-lg">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center h-full py-8">
              <CheckCircle size={60} className="text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
              <p className="text-foreground/70 text-center">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-foreground/80 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-secondary/20 border ${
                    formErrors.name ? 'border-red-500' : 'border-secondary'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50`}
                  placeholder="Your Name"
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-foreground/80 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-secondary/20 border ${
                    formErrors.email ? 'border-red-500' : 'border-secondary'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50`}
                  placeholder="Your Email"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-foreground/80 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-secondary/20 border ${
                    formErrors.subject ? 'border-red-500' : 'border-secondary'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50`}
                  placeholder="Subject"
                />
                {formErrors.subject && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-foreground/80 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-2 bg-secondary/20 border ${
                    formErrors.message ? 'border-red-500' : 'border-secondary'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50`}
                  placeholder="Your Message"
                ></textarea>
                {formErrors.message && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                )}
              </div>
              
              <CustomButton 
                type="submit"
                className="w-full flex justify-center items-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </CustomButton>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
