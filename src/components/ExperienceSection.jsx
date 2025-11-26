import { Briefcase, Calendar, Building2, Target, TrendingUp, Microscope, Scale } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <div className="section-container">
        <h2 id="experience-heading" className="section-title">
          <Briefcase className="icon-lg" aria-hidden="true" />
          Professional Experience
        </h2>
        <p className="section-subtitle">
          Leadership roles driving biotechnology innovation and pharmaceutical development. Over 20 years of experience in drug discovery, patent portfolio management, and building successful life sciences ventures
        </p>
        <div className="glass-card stagger-item">
          <div className="experience-timeline">
            <div className="experience-item">
              <div className="experience-period">
                <Calendar className="icon-sm" />
                Nov 2025 - Present
              </div>
              <h3 className="experience-title">
                <Scale className="icon-sm" />
                Healthcare Law Research
              </h3>
              <div className="experience-company">
                <a href="https://www.modernathemisjuris.com/" aria-label="Moderna Themis Juris Web App" target="_blank"><img src="/moderna_logo.png" alt="Cellix Bio" className="experience-logo" /></a>
              </div>
              <p className="experience-description">
                Legal research and advisory for preventive care, food, biotech and pharmaceutical businesses. 
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-period">
                <Calendar className="icon-sm" />
                Sep 2022 - Apr 2025
              </div>
              <h3 className="experience-title">
                <Target className="icon-sm" />
                Board Member
              </h3>
              <div className="experience-company">
                <a href="https://cellixbioscience.com/" aria-label="Moderna Themis Juris Web App" target="_blank"><img src="/cellix_logo.png" alt="Cellix Bio" className="experience-logo" /></a>
              </div>
              <p className="experience-description">
                Cellix Bio is an innovative drug design and development bio-pharmaceutical company focused to develop best-in-class therapies for the treatment of Neurological, Inflammatory and Metabolic Diseases.
              </p>
              <p className="experience-description">
                Using our proprietary technologies and strong scientific platform “Synergix”; new and effective medicines are being developed that modulate more than one target in the disease pathway while minimizing as much risk as possible from the discovery and development process.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-period">
                <Calendar className="icon-sm" />
                Sep 2014 - Sep 2022
              </div>
              <h3 className="experience-title">
                <TrendingUp className="icon-sm" />
                Managing Director & CEO
              </h3>
              <div className="experience-company">
                <a href="https://cellixbioscience.com/" aria-label="Moderna Themis Juris Web App" target="_blank"><img src="/cellix_logo.png" alt="Cellix Bio" className="experience-logo" /></a>
              </div>
              <p className="experience-description">
                Leading a team of scientists and researchers in developing
                novel therapeutic approaches for Thrombosis, Lipid Disorders, Diabetes, CNS Diseases, Asthma and Cancer.
              </p>
              <p className="experience-description">
                We select drugs known for their demonstrated efficacy and clinical safety along the targeted biological pathway, and use our proprietary synergix technology platform to produce new medicines that modulate the disease pathway with enhanced safety and efficacy profile.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-period">
                <Calendar className="icon-sm" />
                Jan 2011 - Jan 2014
              </div>
              <h3 className="experience-title">
                <Microscope className="icon-sm" />
                CEO & CSO
              </h3>
              <div className="experience-company">
                <Building2 className="inline-block icon-sm mr-1" />
                Biosciences
              </div>
              <p className="experience-description">
                Inventor of new molecular entities for the treatment of Wilson's disease, Hypertriglyceridemia, Cystinosis, Fatty Liver, Cancer, Neuropathic Pain and Huntington's Disease.  
              </p>
              <p className="experience-description">
                Inventor of molecular diagnostic assays for the early and late stage detection of multiple types of cancer from a blood sample. A collaboration alliance had been established with a globally renowned cancer hospital, Indo-American Oncology Hospital and NIMS in Hyderabad, India for the further clinical validation and submission to US-FDA, 510 (k) clearance. 
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-period">
                <Calendar className="icon-sm" />
                Oct 2006 - Feb 2010
              </div>
              <h3 className="experience-title">
                <Microscope className="icon-sm" />
                Associate Director
              </h3>
              <div className="experience-company">
                <Building2 className="inline-block icon-sm mr-1" />
                Indigene Pharmaceuticals
              </div>
              <p className="experience-description">
                Served as an Associate Director of Global Research & Development and was responsible for global drug design and development as well as intellectual property portfolio management while I was working for Indigene Pharma located in Westborough, USA. Co-inventor of aminoguanidine derivatives for the treatment of diabetic complications and Other chronic diseases and a Bio-technology based process technology for the production of Lipoic acid using G. Oxydans 621H.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
