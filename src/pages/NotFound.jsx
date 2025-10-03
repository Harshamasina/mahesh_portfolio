import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import errorImage from "../assets/404-error.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="order-2 md:order-1 animate-fade-in">
            <img 
              src={errorImage} 
              alt="404 Error" 
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

          {/* Right side - Content */}
          <div className="order-1 md:order-2 space-y-6 animate-scale-in">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-semibold text-primary">Error 404</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight">
                Oops!
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Page Not Found
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                The page you're looking for doesn't exist. It might have been moved or deleted. 
                Let's get you back on track.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
              
              <button 
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-all duration-200"
              >
                Go Back
              </button>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Path:</span> {location.pathname}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
