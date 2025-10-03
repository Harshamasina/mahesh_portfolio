import { useState } from "react";
import {
  Microscope,
  Dna,
  GraduationCap,
  BookOpen,
  Award,
  Mail,
  Linkedin,
  Send,
  User,
  Calendar,
  Briefcase,
  Building2,
  FlaskConical,
  FileText,
  CheckCircle2,
  TrendingUp,
  Users,
  Sparkles,
  Target,
} from "lucide-react";
import DarkModeToggle from "../components/DarkModeToggle";
import ScrollToTop from "../components/ScrollToTop";
import "../App.css";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message. I will get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* DNA Vector Background */}
      <svg className="dna-vector" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgba(55, 135, 90, 0.4)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgba(55, 135, 90, 0.1)', stopOpacity: 1 }} />
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

      {/* Dark Mode Toggle */}
      <DarkModeToggle />

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#about" className="navbar-brand">
            <Microscope className="icon-md" />
            Dr. [Your Name]
          </a>
          <button
            className="navbar-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
          <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
            <li>
              <a
                href="#about"
                className="navbar-link"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="navbar-link"
                onClick={() => setMenuOpen(false)}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="navbar-link"
                onClick={() => setMenuOpen(false)}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#publications"
                className="navbar-link"
                onClick={() => setMenuOpen(false)}
              >
                Publications
              </a>
            </li>
            <li>
              <a
                href="#patents"
                className="navbar-link"
                onClick={() => setMenuOpen(false)}
              >
                Patents
              </a>
            </li>
            <li>
              <a
                href="#featured"
                className="navbar-link"
                onClick={() => setMenuOpen(false)}
              >
                Featured
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="navbar-link"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero/About Section */}
      <section id="about" className="section hero-section">
        <div className="section-container">
          <div className="fade-in-up">
            <h1 className="hero-title">
              <Dna className="inline-block icon-lg animate-pulse-glow" />
              Dr. [Your Name]
            </h1>
            <p className="hero-subtitle">
              <FlaskConical className="icon-md" />
              Biotechnology Founder & Innovation Leader
              <Sparkles className="icon-md" />
            </p>
            <p className="hero-description">
              Pioneering breakthrough solutions in molecular biology and
              pharmaceutical development. With over [X] years of experience
              leading cutting-edge research and founding innovative biotech
              ventures, I am committed to advancing human health through
              scientific excellence and entrepreneurial vision.
            </p>
            <a href="#contact" className="hero-cta">
              <Mail className="icon-sm" />
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="section-container">
          <h2 className="section-title">
            <Briefcase className="icon-lg" />
            Professional Experience
          </h2>
          <p className="section-subtitle">
            Leadership roles and contributions to biotechnology advancement
          </p>
          <div className="glass-card stagger-item">
            <div className="experience-timeline">
              <div className="experience-item">
                <div className="experience-period">
                  <Calendar className="icon-sm" />
                  2020 - Present
                </div>
                <h3 className="experience-title">
                  <Target className="icon-sm" />
                  Founder & Chief Executive Officer
                </h3>
                <div className="experience-company">
                  <Building2 className="inline-block icon-sm mr-1" />
                  [Your Biotech Company]
                </div>
                <p className="experience-description">
                  Leading a team of scientists and researchers in developing
                  novel therapeutic approaches for [disease area]. Secured $[X]M
                  in funding and established strategic partnerships with leading
                  pharmaceutical companies.
                </p>
              </div>

              <div className="experience-item">
                <div className="experience-period">
                  <Calendar className="icon-sm" />
                  2015 - 2020
                </div>
                <h3 className="experience-title">
                  <TrendingUp className="icon-sm" />
                  Vice President of Research & Development
                </h3>
                <div className="experience-company">
                  <Building2 className="inline-block icon-sm mr-1" />
                  [Previous Company]
                </div>
                <p className="experience-description">
                  Directed R&D operations for a portfolio of [X] pipeline assets.
                  Led cross-functional teams in advancing multiple drug
                  candidates from discovery through clinical trials. Achieved IND
                  approval for [X] compounds.
                </p>
              </div>

              <div className="experience-item">
                <div className="experience-period">
                  <Calendar className="icon-sm" />
                  2010 - 2015
                </div>
                <h3 className="experience-title">
                  <Microscope className="icon-sm" />
                  Senior Research Scientist
                </h3>
                <div className="experience-company">
                  <Building2 className="inline-block icon-sm mr-1" />
                  [Research Institution]
                </div>
                <p className="experience-description">
                  Conducted groundbreaking research in [specific area]. Published
                  [X] peer-reviewed articles and contributed to [X] patent
                  applications. Mentored junior researchers and graduate
                  students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="section-container">
          <h2 className="section-title">
            <GraduationCap className="icon-lg" />
            Education
          </h2>
          <p className="section-subtitle">
            Academic foundation in molecular biology and pharmaceutical sciences
          </p>
          <div className="education-grid">
            <div className="glass-card education-card stagger-item">
              <div className="icon-container mx-auto">
                <GraduationCap className="icon-md text-primary" />
              </div>
              <h3 className="education-degree">
                Ph.D. in Molecular Biology
              </h3>
              <div className="education-institution">[University Name]</div>
              <div className="education-year">20XX</div>
            </div>

            <div className="glass-card education-card stagger-item">
              <div className="icon-container mx-auto">
                <Dna className="icon-md text-primary" />
              </div>
              <h3 className="education-degree">M.S. in Biochemistry</h3>
              <div className="education-institution">[University Name]</div>
              <div className="education-year">20XX</div>
            </div>

            <div className="glass-card education-card stagger-item">
              <div className="icon-container mx-auto">
                <FlaskConical className="icon-md text-primary" />
              </div>
              <h3 className="education-degree">B.S. in Biology</h3>
              <div className="education-institution">[University Name]</div>
              <div className="education-year">20XX</div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="section">
        <div className="section-container">
          <h2 className="section-title">
            <BookOpen className="icon-lg" />
            Key Publications
          </h2>
          <p className="section-subtitle">
            Peer-reviewed research contributions to scientific literature
          </p>
          <div className="publications-list">
            <div className="glass-card publication-item stagger-item">
              <h3 className="publication-title">
                <FileText className="icon-sm flex-shrink-0 text-primary" />
                Novel Therapeutic Approach for [Disease]: Targeting [Specific
                Pathway]
              </h3>
              <div className="publication-authors">
                [Your Name], [Co-authors], et al.
              </div>
              <div className="publication-journal">
                <BookOpen className="icon-sm" />
                Nature Biotechnology, 2023 | DOI: XX.XXXX/XXXXXX
              </div>
            </div>

            <div className="glass-card publication-item stagger-item">
              <h3 className="publication-title">
                <FileText className="icon-sm flex-shrink-0 text-primary" />
                Advances in [Specific Technology]: A Comprehensive Review
              </h3>
              <div className="publication-authors">
                [Your Name], [Co-authors], et al.
              </div>
              <div className="publication-journal">
                <BookOpen className="icon-sm" />
                Cell, 2022 | DOI: XX.XXXX/XXXXXX
              </div>
            </div>

            <div className="glass-card publication-item stagger-item">
              <h3 className="publication-title">
                <FileText className="icon-sm flex-shrink-0 text-primary" />
                Mechanism of Action Study: [Drug/Compound Name] in [Disease
                Model]
              </h3>
              <div className="publication-authors">
                [Your Name], [Co-authors], et al.
              </div>
              <div className="publication-journal">
                <BookOpen className="icon-sm" />
                Science, 2021 | DOI: XX.XXXX/XXXXXX
              </div>
            </div>

            <div className="glass-card publication-item stagger-item">
              <h3 className="publication-title">
                <FileText className="icon-sm flex-shrink-0 text-primary" />
                High-Throughput Screening Platform for [Application]
              </h3>
              <div className="publication-authors">
                [Your Name], [Co-authors], et al.
              </div>
              <div className="publication-journal">
                <BookOpen className="icon-sm" />
                Journal of Medicinal Chemistry, 2020 | DOI: XX.XXXX/XXXXXX
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patents Section */}
      <section id="patents" className="section">
        <div className="section-container">
          <h2 className="section-title">
            <Award className="icon-lg" />
            Patents
          </h2>
          <p className="section-subtitle">
            Intellectual property contributions to biotechnology innovation
          </p>
          <div className="patents-grid">
            <div className="glass-card patent-card stagger-item">
              <h3 className="patent-title">
                <Dna className="icon-sm flex-shrink-0 text-primary" />
                Novel Compound for Treatment of [Disease]
              </h3>
              <div className="patent-number">US Patent No. XX,XXX,XXX</div>
              <span className="patent-status">
                <CheckCircle2 className="icon-sm" />
                Granted
              </span>
            </div>

            <div className="glass-card patent-card stagger-item">
              <h3 className="patent-title">
                <FlaskConical className="icon-sm flex-shrink-0 text-primary" />
                Method and System for [Specific Application]
              </h3>
              <div className="patent-number">US Patent No. XX,XXX,XXX</div>
              <span className="patent-status">
                <CheckCircle2 className="icon-sm" />
                Granted
              </span>
            </div>

            <div className="glass-card patent-card stagger-item">
              <h3 className="patent-title">
                <Microscope className="icon-sm flex-shrink-0 text-primary" />
                Therapeutic Composition for [Medical Use]
              </h3>
              <div className="patent-number">
                Patent Application No. XX/XXX,XXX
              </div>
              <span className="patent-status">
                <TrendingUp className="icon-sm" />
                Pending
              </span>
            </div>

            <div className="glass-card patent-card stagger-item">
              <h3 className="patent-title">
                <Target className="icon-sm flex-shrink-0 text-primary" />
                Diagnostic Platform for Early Detection of [Condition]
              </h3>
              <div className="patent-number">PCT/USXXXX/XXXXX</div>
              <span className="patent-status">
                <TrendingUp className="icon-sm" />
                Pending
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section id="featured" className="section">
        <div className="section-container">
          <h2 className="section-title">
            <Sparkles className="icon-lg" />
            Featured & Awards
          </h2>
          <p className="section-subtitle">
            Recognition and achievements in biotechnology leadership
          </p>
          <div className="featured-grid">
            <div className="glass-card featured-card stagger-item">
              <div className="featured-icon">
                <Award className="icon-xl text-primary mx-auto" />
              </div>
              <h3 className="featured-title">Innovator of the Year Award</h3>
              <p className="featured-description">
                Recognized by [Organization] for groundbreaking contributions to
                [field], 2023
              </p>
            </div>

            <div className="glass-card featured-card stagger-item">
              <div className="featured-icon">
                <FileText className="icon-xl text-primary mx-auto" />
              </div>
              <h3 className="featured-title">Featured in Forbes</h3>
              <p className="featured-description">
                "The Future of Biotech: [X] Leaders Changing Healthcare" - Forbes
                Magazine, 2022
              </p>
            </div>

            <div className="glass-card featured-card stagger-item">
              <div className="featured-icon">
                <Users className="icon-xl text-primary mx-auto" />
              </div>
              <h3 className="featured-title">Keynote Speaker</h3>
              <p className="featured-description">
                International Biotechnology Conference - "Innovations in
                [Field]", 2023
              </p>
            </div>

            <div className="glass-card featured-card stagger-item">
              <div className="featured-icon">
                <TrendingUp className="icon-xl text-primary mx-auto" />
              </div>
              <h3 className="featured-title">NIH Research Grant</h3>
              <p className="featured-description">
                Awarded $[X]M grant for research in [specific area], National
                Institutes of Health
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="section-container">
          <h2 className="section-title">
            <Mail className="icon-lg" />
            Contact
          </h2>
          <p className="section-subtitle">
            Let's discuss opportunities for collaboration and innovation
          </p>
          <div className="contact-container">
            <div className="glass-card stagger-item">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <User className="icon-sm" />
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <Mail className="icon-sm" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    <FileText className="icon-sm" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="form-button">
                  <Send className="icon-sm" />
                  Send Message
                </button>
              </form>

              <div className="contact-info">
                <h3 className="contact-info-title">Professional Contact</h3>
                <p className="contact-info-item">
                  <Mail className="icon-sm" />
                  Email:{" "}
                  <a
                    href="mailto:contact@example.com"
                    className="contact-info-link"
                  >
                    contact@example.com
                  </a>
                </p>
                <p className="contact-info-item">
                  <Linkedin className="icon-sm" />
                  LinkedIn:{" "}
                  <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info-link"
                  >
                    linkedin.com/in/yourprofile
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Dr. [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
