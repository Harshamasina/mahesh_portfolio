import { Briefcase, Calendar, Building2, Target, TrendingUp, Microscope } from "lucide-react";

const ExperienceSection = () => {
  return (
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
  );
};

export default ExperienceSection;
