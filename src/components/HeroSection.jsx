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
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Content */}
          <article className="animate-fade-in space-y-6 order-2 md:order-1">
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground font-medium">Hello</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                I'm Mahesh Kandula
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold flex items-center gap-2">
                <FlaskConical className="w-6 h-6" aria-hidden="true" />
                Inventor and Entrepreneur
              </p>
            </div>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I'm an entrepreneur and scientist with a proven record of creating transformative life sciences ventures. As the sole inventor of 100+ novel drug molecules across major therapeutic areas, I've advanced innovations from discovery to clinical trials.
            </p>
            
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl group" 
              aria-label="Contact Mahesh Kandula"
            >
              Discover More
              <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </article>

          {/* Right side - Profile Image with Decorative Elements */}
          <div className="flex justify-center md:justify-end order-1 md:order-2 animate-scale-in">
            <div className="relative w-full max-w-md aspect-square">
              {/* Main circular background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 rounded-full blur-3xl"></div>
              
              {/* Decorative floating badges */}
              <div className="absolute top-8 right-4 bg-card border-2 border-border rounded-lg px-4 py-2 shadow-lg animate-fade-in z-10">
                <p className="text-xs text-muted-foreground">Patents</p>
                <p className="text-lg font-bold text-foreground">20+</p>
              </div>
              
              <div className="absolute top-1/3 left-0 bg-card border-2 border-border rounded-lg px-4 py-2 shadow-lg animate-fade-in z-10" style={{ animationDelay: '0.2s' }}>
                <p className="text-xs text-muted-foreground">Drug Molecules</p>
                <p className="text-lg font-bold text-foreground">100+</p>
              </div>
              
              <div className="absolute bottom-12 right-8 bg-card border-2 border-border rounded-lg px-4 py-2 shadow-lg animate-fade-in z-10" style={{ animationDelay: '0.4s' }}>
                <p className="text-xs text-muted-foreground">Experience</p>
                <p className="text-lg font-bold text-foreground">25+ Years</p>
              </div>
              
              {/* Profile Image Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-full opacity-75 group-hover:opacity-100 blur-xl transition duration-500 animate-pulse"></div>
                  <img 
                    src="/mahesh_pic.png" 
                    alt="Mahesh Kandula - Biotech Entrepreneur and Scientist" 
                    className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-8 border-background shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  />
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
