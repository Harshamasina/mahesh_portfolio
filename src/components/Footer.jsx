import { 
  Linkedin, 
  Twitter, 
  Mail, 
  Github,
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
              <img src="/logo_transparent.png" alt="Mahesh Kandula Logo" className="footer-logo" />
            </div>
            <p className="footer-tagline">
              Advancing biotechnology through innovation, research, and leadership
            </p>
            <ol>
              <li className="footer-tagline">20+ Years of Experience</li>
              <li className="footer-tagline">700+ International Patents</li>
              <li className="footer-tagline">Sole Inventor</li>
              <li className="footer-tagline">Multple Threapeutic Areas</li>
            </ol>
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
                href="https://www.linkedin.com/in/mahesh-kandula1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin className="icon-md" />
              </a>
              <a 
                href="mailto:intellect@maheshkandula.com"
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
            © {new Date().getFullYear()} Mahesh Kandula. All rights reserved.
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
