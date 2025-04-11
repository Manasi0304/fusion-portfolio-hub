
import React from 'react';
import CustomButton from './ui/CustomButton';

const CTA = () => {
  return (
    <div className="bg-primary/20 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Ready to Work Together?</h2>
        <p className="text-foreground/80 max-w-2xl mx-auto mb-8">
          Let's collaborate to bring your ideas to life. Whether you need a website, a mobile app, or a complete digital solution, I'm here to help.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <CustomButton to="/contact" size="large">
            Get in Touch
          </CustomButton>
          <CustomButton variant="outline" href="/resume.pdf" size="large">
            View My Resume
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CTA;
