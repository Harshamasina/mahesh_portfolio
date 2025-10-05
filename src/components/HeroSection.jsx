import { Dna, FlaskConical, Mail, Sparkles, Microscope, Beaker } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const rotatingTexts = [
    "Innovator",
    "Entrepreneur",
    "Corporate Law",
    "Intellectual Property Law",
    "Civil and Criminal Law",
    "Litigations"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);
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
        <div className="hero-grid">
          {/* Left side - Content */}
          <article className="hero-article">
            <h1 className="hero-title">
              <Dna className="hero-title-icon" aria-hidden="true" />
              Mahesh Kandula
            </h1>
            <div className="hero-subtitle">
              <FlaskConical className="icon-md" aria-hidden="true" />
              <div className="rotating-text-container">
                <span key={currentTextIndex} className="rotating-text">
                  {rotatingTexts[currentTextIndex]}
                </span>
              </div>
              <Sparkles className="icon-md" aria-hidden="true" />
            </div>
            <p className="hero-description">
              I'm an entrepreneur and scientist with a proven record of creating transformative life sciences ventures. As the sole inventor of 100+ novel drug molecules across major therapeutic areas, I've advanced innovations from discovery to clinical trials. With multiple patents and global pharma collaborations, I bring expertise in IP, strategy, and team leadership to drive bold ideas into real-world therapies.
            </p>
            <a href="#contact" className="hero-cta" aria-label="Contact Mahesh Kandula">
              <Mail className="icon-sm" aria-hidden="true" />
              Get in Touch
            </a>
          </article>

          {/* Right side - Profile Image */}
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              {/* Outer glow ring - pulsing */}
              <div className="hero-glow-outer"></div>
              
              {/* Middle glow ring - rotating gradient */}
              <div className="hero-glow-middle"></div>
              
              {/* Image container with border */}
              <div className="hero-image-inner">
                <img 
                  src="/mahesh_pic.png" 
                  alt="Mahesh Kandula - Biotech Entrepreneur and Scientist" 
                  className="hero-profile-image"
                />
                
                {/* Decorative DNA icon */}
                <div className="hero-dna-badge">
                  <Dna className="hero-dna-icon" />
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
