
import React from 'react';

const Section = ({ 
  children, 
  id, 
  className = '', 
  title,
  subtitle,
  centerTitle = false,
  ...props 
}) => {
  return (
    <section id={id} className={`section-padding ${className}`} {...props}>
      <div className="container mx-auto">
        {(title || subtitle) && (
          <div className={`mb-12 ${centerTitle ? 'text-center' : ''}`}>
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-foreground/70 text-lg max-w-3xl">
                {subtitle}
              </p>
            )}
            {centerTitle && <div className="section-divider mt-6"></div>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
