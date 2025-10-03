import { useState } from "react";
import { Microscope } from "lucide-react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
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
  );
};

export default Navigation;
