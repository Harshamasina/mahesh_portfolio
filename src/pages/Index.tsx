import { useState } from "react";
import "../App.css";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message. I will get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#about" className="navbar-brand">
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
              <a href="#about" className="navbar-link" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="navbar-link" onClick={() => setMenuOpen(false)}>
                Experience
              </a>
            </li>
            <li>
              <a href="#education" className="navbar-link" onClick={() => setMenuOpen(false)}>
                Education
              </a>
            </li>
            <li>
              <a href="#publications" className="navbar-link" onClick={() => setMenuOpen(false)}>
                Publications
              </a>
            </li>
            <li>
              <a href="#patents" className="navbar-link" onClick={() => setMenuOpen(false)}>
                Patents
              </a>
            </li>
            <li>
              <a href="#featured" className="navbar-link" onClick={() => setMenuOpen(false)}>
                Featured
              </a>
            </li>
            <li>
              <a href="#contact" className="navbar-link" onClick={() => setMenuOpen(false)}>
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
            <h1 className="hero-title">Dr. [Your Name]</h1>
            <p className="hero-subtitle">Biotechnology Founder & Innovation Leader</p>
            <p className="hero-description">
              Pioneering breakthrough solutions in molecular biology and pharmaceutical development.
              With over [X] years of experience leading cutting-edge research and founding innovative
              biotech ventures, I am committed to advancing human health through scientific excellence
              and entrepreneurial vision.
            </p>
            <a href="#contact" className="hero-cta">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="section-container">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Leadership roles and contributions to biotechnology advancement
          </p>
          <div className="glass-card">
            <div className="experience-timeline">
              <div className="experience-item">
                <div className="experience-period">2020 - Present</div>
                <h3 className="experience-title">Founder & Chief Executive Officer</h3>
                <div className="experience-company">[Your Biotech Company]</div>
                <p className="experience-description">
                  Leading a team of scientists and researchers in developing novel therapeutic
                  approaches for [disease area]. Secured $[X]M in funding and established strategic
                  partnerships with leading pharmaceutical companies.
                </p>
              </div>

              <div className="experience-item">
                <div className="experience-period">2015 - 2020</div>
                <h3 className="experience-title">Vice President of Research & Development</h3>
                <div className="experience-company">[Previous Company]</div>
                <p className="experience-description">
                  Directed R&D operations for a portfolio of [X] pipeline assets. Led cross-functional
                  teams in advancing multiple drug candidates from discovery through clinical trials.
                  Achieved IND approval for [X] compounds.
                </p>
              </div>

              <div className="experience-item">
                <div className="experience-period">2010 - 2015</div>
                <h3 className="experience-title">Senior Research Scientist</h3>
                <div className="experience-company">[Research Institution]</div>
                <p className="experience-description">
                  Conducted groundbreaking research in [specific area]. Published [X] peer-reviewed
                  articles and contributed to [X] patent applications. Mentored junior researchers
                  and graduate students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="section-container">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic foundation in molecular biology and pharmaceutical sciences
          </p>
          <div className="education-grid">
            <div className="glass-card education-card">
              <h3 className="education-degree">Ph.D. in Molecular Biology</h3>
              <div className="education-institution">[University Name]</div>
              <div className="education-year">20XX</div>
            </div>

            <div className="glass-card education-card">
              <h3 className="education-degree">M.S. in Biochemistry</h3>
              <div className="education-institution">[University Name]</div>
              <div className="education-year">20XX</div>
            </div>

            <div className="glass-card education-card">
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
          <h2 className="section-title">Key Publications</h2>
          <p className="section-subtitle">
            Peer-reviewed research contributions to scientific literature
          </p>
          <div className="publications-list">
            <div className="glass-card publication-item">
              <h3 className="publication-title">
                Novel Therapeutic Approach for [Disease]: Targeting [Specific Pathway]
              </h3>
              <div className="publication-authors">
                [Your Name], [Co-authors], et al.
              </div>
              <div className="publication-journal">
                Nature Biotechnology, 2023 | DOI: XX.XXXX/XXXXXX
              </div>
            </div>

            <div className="glass-card publication-item">
              <h3 className="publication-title">
                Advances in [Specific Technology]: A Comprehensive Review
              </h3>
              <div className="publication-authors">
                [Your Name], [Co-authors], et al.
              </div>
              <div className="publication-journal">
                Cell, 2022 | DOI: XX.XXXX/XXXXXX
              </div>
            </div>

            <div className="glass-card publication-item">
              <h3 className="publication-title">
                Mechanism of Action Study: [Drug/Compound Name] in [Disease Model]
              </h3>
              <div className="publication-authors">
                [Your Name], [Co-authors], et al.
              </div>
              <div className="publication-journal">
                Science, 2021 | DOI: XX.XXXX/XXXXXX
              </div>
            </div>

            <div className="glass-card publication-item">
              <h3 className="publication-title">
                High-Throughput Screening Platform for [Application]
              </h3>
              <div className="publication-authors">
                [Your Name], [Co-authors], et al.
              </div>
              <div className="publication-journal">
                Journal of Medicinal Chemistry, 2020 | DOI: XX.XXXX/XXXXXX
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patents Section */}
      <section id="patents" className="section">
        <div className="section-container">
          <h2 className="section-title">Patents</h2>
          <p className="section-subtitle">
            Intellectual property contributions to biotechnology innovation
          </p>
          <div className="patents-grid">
            <div className="glass-card patent-card">
              <h3 className="patent-title">
                Novel Compound for Treatment of [Disease]
              </h3>
              <div className="patent-number">US Patent No. XX,XXX,XXX</div>
              <span className="patent-status">Granted</span>
            </div>

            <div className="glass-card patent-card">
              <h3 className="patent-title">
                Method and System for [Specific Application]
              </h3>
              <div className="patent-number">US Patent No. XX,XXX,XXX</div>
              <span className="patent-status">Granted</span>
            </div>

            <div className="glass-card patent-card">
              <h3 className="patent-title">
                Therapeutic Composition for [Medical Use]
              </h3>
              <div className="patent-number">Patent Application No. XX/XXX,XXX</div>
              <span className="patent-status">Pending</span>
            </div>

            <div className="glass-card patent-card">
              <h3 className="patent-title">
                Diagnostic Platform for Early Detection of [Condition]
              </h3>
              <div className="patent-number">PCT/USXXXX/XXXXX</div>
              <span className="patent-status">Pending</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section id="featured" className="section">
        <div className="section-container">
          <h2 className="section-title">Featured & Awards</h2>
          <p className="section-subtitle">
            Recognition and achievements in biotechnology leadership
          </p>
          <div className="featured-grid">
            <div className="glass-card featured-card">
              <div className="featured-icon">🏆</div>
              <h3 className="featured-title">Innovator of the Year Award</h3>
              <p className="featured-description">
                Recognized by [Organization] for groundbreaking contributions to [field], 2023
              </p>
            </div>

            <div className="glass-card featured-card">
              <div className="featured-icon">📰</div>
              <h3 className="featured-title">Featured in Forbes</h3>
              <p className="featured-description">
                "The Future of Biotech: [X] Leaders Changing Healthcare" - Forbes Magazine, 2022
              </p>
            </div>

            <div className="glass-card featured-card">
              <div className="featured-icon">🎤</div>
              <h3 className="featured-title">Keynote Speaker</h3>
              <p className="featured-description">
                International Biotechnology Conference - "Innovations in [Field]", 2023
              </p>
            </div>

            <div className="glass-card featured-card">
              <div className="featured-icon">🔬</div>
              <h3 className="featured-title">NIH Research Grant</h3>
              <p className="featured-description">
                Awarded $[X]M grant for research in [specific area], National Institutes of Health
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="section-container">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Let's discuss opportunities for collaboration and innovation
          </p>
          <div className="contact-container">
            <div className="glass-card">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
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
                  Send Message
                </button>
              </form>

              <div className="contact-info">
                <h3 className="contact-info-title">Professional Contact</h3>
                <p className="contact-info-item">
                  Email:{" "}
                  <a href="mailto:contact@example.com" className="contact-info-link">
                    contact@example.com
                  </a>
                </p>
                <p className="contact-info-item">
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
