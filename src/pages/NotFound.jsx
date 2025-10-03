import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import errorImage from "../assets/404-error.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-2xl w-full text-center">
        <img 
          src={errorImage} 
          alt="404 Error" 
          className="w-full max-w-md mx-auto mb-8 animate-fade-in"
        />
        <h1 className="text-7xl font-bold text-primary mb-4 animate-slide-up">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-foreground mb-3 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Page Not Found
        </h2>
        <p className="text-lg text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
