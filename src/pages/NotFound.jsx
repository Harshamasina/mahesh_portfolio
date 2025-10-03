import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import errorImage from "../assets/404-error.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/20 mb-6">
            <span className="text-5xl font-bold text-primary">!</span>
          </div>
          <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4 tracking-tight">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Oops! It seems like you've ventured into uncharted territory. The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Large Error Image */}
        <div className="mb-12 animate-scale-in">
          <img 
            src={errorImage} 
            alt="404 Error Illustration" 
            className="w-full max-w-3xl mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Link 
            to="/" 
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-card text-card-foreground border-2 border-border rounded-xl font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center animate-fade-in">
          <p className="text-sm text-muted-foreground">
            Error Code: <span className="font-mono text-primary">404</span> | Path: <span className="font-mono text-muted-foreground">{location.pathname}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
