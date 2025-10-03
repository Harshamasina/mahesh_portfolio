const DNABackground = () => {
  return (
    <svg className="dna-vector" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" className="dna-gradient-start" />
          <stop offset="100%" className="dna-gradient-end" />
        </linearGradient>
      </defs>
      {/* DNA Helix Structure */}
      <path d="M 100 400 Q 200 300, 300 400 T 500 400 T 700 400 T 900 400 T 1100 400" 
            stroke="url(#dnaGradient)" strokeWidth="3" fill="none" opacity="0.6"/>
      <path d="M 100 400 Q 200 500, 300 400 T 500 400 T 700 400 T 900 400 T 1100 400" 
            stroke="url(#dnaGradient)" strokeWidth="3" fill="none" opacity="0.6"/>
      {/* DNA Base Pairs */}
      <line x1="150" y1="350" x2="150" y2="450" stroke="url(#dnaGradient)" strokeWidth="2" opacity="0.5"/>
      <line x1="250" y1="350" x2="250" y2="450" stroke="url(#dnaGradient)" strokeWidth="2" opacity="0.5"/>
      <line x1="350" y1="350" x2="350" y2="450" stroke="url(#dnaGradient)" strokeWidth="2" opacity="0.5"/>
      <line x1="450" y1="350" x2="450" y2="450" stroke="url(#dnaGradient)" strokeWidth="2" opacity="0.5"/>
      <line x1="550" y1="350" x2="550" y2="450" stroke="url(#dnaGradient)" strokeWidth="2" opacity="0.5"/>
      <line x1="650" y1="350" x2="650" y2="450" stroke="url(#dnaGradient)" strokeWidth="2" opacity="0.5"/>
      <line x1="750" y1="350" x2="750" y2="450" stroke="url(#dnaGradient)" strokeWidth="2" opacity="0.5"/>
      <line x1="850" y1="350" x2="850" y2="450" stroke="url(#dnaGradient)" strokeWidth="2" opacity="0.5"/>
      <line x1="950" y1="350" x2="950" y2="450" stroke="url(#dnaGradient)" strokeWidth="2" opacity="0.5"/>
      <line x1="1050" y1="350" x2="1050" y2="450" stroke="url(#dnaGradient)" strokeWidth="2" opacity="0.5"/>
      
      {/* Molecular Circles */}
      <circle cx="150" cy="350" r="8" fill="url(#dnaGradient)" opacity="0.7"/>
      <circle cx="150" cy="450" r="8" fill="url(#dnaGradient)" opacity="0.7"/>
      <circle cx="350" cy="350" r="8" fill="url(#dnaGradient)" opacity="0.7"/>
      <circle cx="350" cy="450" r="8" fill="url(#dnaGradient)" opacity="0.7"/>
      <circle cx="550" cy="350" r="8" fill="url(#dnaGradient)" opacity="0.7"/>
      <circle cx="550" cy="450" r="8" fill="url(#dnaGradient)" opacity="0.7"/>
      <circle cx="750" cy="350" r="8" fill="url(#dnaGradient)" opacity="0.7"/>
      <circle cx="750" cy="450" r="8" fill="url(#dnaGradient)" opacity="0.7"/>
      <circle cx="950" cy="350" r="8" fill="url(#dnaGradient)" opacity="0.7"/>
      <circle cx="950" cy="450" r="8" fill="url(#dnaGradient)" opacity="0.7"/>
    </svg>
  );
};

export default DNABackground;
