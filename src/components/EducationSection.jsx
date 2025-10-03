import { GraduationCap, Scale, Briefcase, Target, Dna, FlaskConical } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="section">
      <div className="section-container">
        <h2 className="section-title">
          <GraduationCap className="icon-lg" />
          Education
        </h2>
        <p className="section-subtitle">
          Academic foundations in Biotechnology, Laws - LLB, LLM and MBA 
        </p>
        <div className="education-grid">
          <div className="glass-card education-card stagger-item">
            <div className="icon-container mx-auto">
              <Scale className="icon-md text-primary" />
            </div>
            <h3 className="education-degree">
              Bachelor of Laws (LLB)
            </h3>
            <div className="education-institution">Osmania University, Hyderabad</div>
            <div className="education-year">2022 - 2025</div>
          </div>

          <div className="glass-card education-card stagger-item">
            <div className="icon-container mx-auto">
              <Scale className="icon-md text-primary" />
            </div>
            <h3 className="education-degree">Master of Laws (LLM), Innovation, Technology and the Law</h3>
            <div className="education-institution">The University of Edinburgh</div>
            <div className="education-year">2012 - 2014</div>
          </div>

          <div className="glass-card education-card stagger-item">
            <div className="icon-container mx-auto">
              <Briefcase className="icon-md text-primary" />
            </div>
            <h3 className="education-degree">Master of Business Adminsitration (M.B.A), Entreprenuership Studies</h3>
            <div className="education-institution">Babson College</div>
            <div className="education-year">2011 - 2013</div>
          </div>

          <div className="glass-card education-card stagger-item">
            <div className="icon-container mx-auto">
              <Target className="icon-md text-primary" />
            </div>
            <h3 className="education-degree">SCPM - Project Management</h3>
            <div className="education-institution">Stanford University</div>
            <div className="education-year">2009 - 2011</div>
          </div>

          <div className="glass-card education-card stagger-item">
            <div className="icon-container mx-auto">
              <FlaskConical className="icon-md text-primary" />
            </div>
            <h3 className="education-degree">Master's Degree, Biotechnology and Biochemical Engineering</h3>
            <div className="education-institution">Indian Institute of Technology, Kharagpur</div>
            <div className="education-year">2005</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
