import React from 'react';
import { Link } from 'react-router-dom';

const CustomButton = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  className = '', 
  to, 
  href, 
  onClick, 
  ...props 
}) => {
  // Define classes based on variant and size
  const baseClasses = "font-medium transition-all duration-300 inline-flex items-center justify-center rounded-md";
  
  const variantClasses = {
    primary: "bg-primary hover:bg-primary/80 text-white",
    secondary: "bg-secondary hover:bg-secondary/80 text-white",
    outline: "bg-transparent border border-primary hover:bg-primary/10 text-primary",
    ghost: "bg-transparent hover:bg-foreground/10 text-foreground",
  };
  
  const sizeClasses = {
    small: "text-sm px-3 py-1",
    medium: "text-base px-4 py-2",
    large: "text-lg px-6 py-3",
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  // Render as link if "to" (internal) or "href" (external) is provided
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }
  
  // Otherwise render as button
  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
