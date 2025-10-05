import { Dna, FlaskConical, Mail, Sparkles, Microscope, Beaker } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="about" className="section hero-section" aria-label="About Mahesh Kandula">
      {/* Animated Biotech Vector Graphics */}
      <div className="hero-vectors">
        <svg className="hero-vector hero-vector-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="moleculeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(59, 130, 246, 0.6)' }} />
              <stop offset="100%" style={{ stopColor: 'rgba(59, 130, 246, 0.2)' }} />
            </linearGradient>
          </defs>
          <circle cx="100" cy="50" r="15" fill="url(#moleculeGrad1)" />
          <circle cx="70" cy="100" r="12" fill="url(#moleculeGrad1)" />
          <circle cx="130" cy="100" r="12" fill="url(#moleculeGrad1)" />
          <circle cx="100" cy="150" r="15" fill="url(#moleculeGrad1)" />
          <line x1="100" y1="65" x2="70" y2="88" stroke="url(#moleculeGrad1)" strokeWidth="3" />
          <line x1="100" y1="65" x2="130" y2="88" stroke="url(#moleculeGrad1)" strokeWidth="3" />
          <line x1="70" y1="112" x2="100" y2="135" stroke="url(#moleculeGrad1)" strokeWidth="3" />
          <line x1="130" y1="112" x2="100" y2="135" stroke="url(#moleculeGrad1)" strokeWidth="3" />
        </svg>

        <svg className="hero-vector hero-vector-2" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="dnaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(59, 130, 246, 0.5)' }} />
              <stop offset="100%" style={{ stopColor: 'rgba(59, 130, 246, 0.1)' }} />
            </linearGradient>
          </defs>
          <path d="M 30 75 Q 50 50, 70 75 T 110 75" stroke="url(#dnaGrad)" strokeWidth="3" fill="none" />
          <path d="M 30 75 Q 50 100, 70 75 T 110 75" stroke="url(#dnaGrad)" strokeWidth="3" fill="none" />
          <circle cx="40" cy="60" r="4" fill="url(#dnaGrad)" />
          <circle cx="40" cy="90" r="4" fill="url(#dnaGrad)" />
          <circle cx="70" cy="75" r="4" fill="url(#dnaGrad)" />
          <circle cx="100" cy="60" r="4" fill="url(#dnaGrad)" />
          <circle cx="100" cy="90" r="4" fill="url(#dnaGrad)" />
        </svg>

        <svg className="hero-vector hero-vector-3" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(59, 130, 246, 0.4)' }} />
              <stop offset="100%" style={{ stopColor: 'rgba(59, 130, 246, 0.15)' }} />
            </linearGradient>
          </defs>
          <circle cx="90" cy="90" r="60" stroke="url(#cellGrad)" strokeWidth="2" fill="none" opacity="0.6" />
          <circle cx="90" cy="90" r="45" stroke="url(#cellGrad)" strokeWidth="2" fill="none" opacity="0.5" />
          <circle cx="90" cy="90" r="20" fill="url(#cellGrad)" opacity="0.7" />
          <circle cx="70" cy="70" r="8" fill="url(#cellGrad)" opacity="0.6" />
          <circle cx="110" cy="70" r="8" fill="url(#cellGrad)" opacity="0.6" />
          <circle cx="70" cy="110" r="8" fill="url(#cellGrad)" opacity="0.6" />
          <circle cx="110" cy="110" r="8" fill="url(#cellGrad)" opacity="0.6" />
        </svg>
      </div>

      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Content */}
          <article className="animate-fade-in space-y-6">
            <h1 className="hero-title">
              <Dna className="inline-block icon-lg animate-pulse-glow" aria-hidden="true" />
              Mahesh Kandula
            </h1>
            <p className="hero-subtitle">
              <FlaskConical className="icon-md" aria-hidden="true" />
              Inventor and Entrepreneur
              <Sparkles className="icon-md" aria-hidden="true" />
            </p>
            <p className="hero-description">
              I'm an entrepreneur and scientist with a proven record of creating transformative life sciences ventures. As the sole inventor of 100+ novel drug molecules across major therapeutic areas, I've advanced innovations from discovery to clinical trials. With multiple patents and global pharma collaborations, I bring expertise in IP, strategy, and team leadership to drive bold ideas into real-world therapies.
            </p>
            <a href="#contact" className="hero-cta" aria-label="Contact Mahesh Kandula">
              <Mail className="icon-sm" aria-hidden="true" />
              Get in Touch
            </a>
          </article>

          {/* Right side - Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group animate-scale-in">
              {/* Outer glow ring - pulsing */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-50 blur-2xl animate-pulse"></div>
              
              {/* Middle glow ring - rotating gradient */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-full opacity-75 group-hover:opacity-100 blur-xl transition-all duration-700 group-hover:blur-2xl"></div>
              
              {/* Image container with border */}
              <div className="relative">
                <img 
                  src="/mahesh_pic.png" 
                  alt="Mahesh Kandula - Biotech Entrepreneur and Scientist" 
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-background shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] animate-fade-in"
                />
                
                {/* Decorative DNA icon */}
                <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg animate-fade-in opacity-90 group-hover:opacity-100 transition-opacity">
                  <Dna className="w-6 h-6 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
