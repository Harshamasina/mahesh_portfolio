import { 
  Linkedin, 
  Twitter, 
  Mail, 
  Github,
  Microscope,
  GraduationCap,
  BookOpen,
  Users
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <Microscope className="icon-lg" />
              <h3>Dr. [Your Name]</h3>
            </div>
            <p className="footer-tagline">
              Advancing biotechnology through innovation, research, and leadership
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">
              <GraduationCap className="icon-sm" />
              Quick Links
            </h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#publications">Publications</a></li>
              <li><a href="#patents">Patents</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">
              <BookOpen className="icon-sm" />
              Resources
            </h4>
            <ul className="footer-links">
              <li><a href="#publications">Research Papers</a></li>
              <li><a href="#patents">Patent Portfolio</a></li>
              <li><a href="#featured">Achievements</a></li>
              <li><a href="#contact">Collaboration</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">
              <Users className="icon-sm" />
              Connect
            </h4>
            <div className="footer-social">
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin className="icon-md" />
              </a>
              <a 
                href="https://twitter.com/yourhandle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter"
              >
                <Twitter className="icon-md" />
              </a>
              <a 
                href="https://github.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <Github className="icon-md" />
              </a>
              <a 
                href="https://researchgate.net/profile/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="ResearchGate"
              >
                <BookOpen className="icon-md" />
              </a>
              <a 
                href="https://orcid.org/your-orcid-id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="ORCID"
              >
                <GraduationCap className="icon-md" />
              </a>
              <a 
                href="mailto:your.email@example.com"
                className="social-link"
                aria-label="Email"
              >
                <Mail className="icon-md" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Dr. [Your Name]. All rights reserved.
          </p>
          <p className="footer-note">
            Dedicated to advancing human health through scientific excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
