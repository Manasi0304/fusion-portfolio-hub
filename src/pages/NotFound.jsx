
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import CustomButton from "../components/ui/CustomButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="min-h-[70vh] flex items-center justify-center bg-background">
        <div className="text-center p-4">
          <div className="mb-6">
            <h1 className="text-9xl font-bold text-primary">404</h1>
            <div className="w-16 h-1 bg-primary mx-auto my-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <CustomButton to="/" size="large">
            Return to Home
          </CustomButton>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
