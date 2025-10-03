import { GraduationCap, Dna, FlaskConical } from "lucide-react";

const EducationSection = () => {
  return (
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
  );
};

export default EducationSection;
