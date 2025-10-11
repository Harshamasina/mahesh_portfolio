import { Sparkles, Award, Users, TrendingUp } from "lucide-react";

const FeaturedSection = () => {
  return (
    <section id="featured" className="section" aria-labelledby="featured-heading">
      <div className="section-container">
        <h2 id="featured-heading" className="section-title">
          <Sparkles className="icon-lg" aria-hidden="true" />
          Featured Achievements
        </h2>
        <p className="section-subtitle">
          Award-winning recognition from leading industry organizations. Cellix Bio received prestigious awards including CII IPR Awards for Best Patent Portfolio and Clarivate South Asia Innovation Awards for emerging innovation leadership
        </p>
        <div className="featured-grid">
          <div className="glass-card featured-card stagger-item">
            <div className="icon-container animate-float">
              <Award className="icon-lg text-primary" />
            </div>
            <h3 className="featured-title">
              Cellix Bio Company Profile
            </h3>
            <img src="/cellix_logo.png" alt="CII IPR Awards Logo" className="education-logo" />
            <p className="featured-description">
              Mahesh Kandula, Cellix Bio Private Limited
            </p>
            <p className="featured-description">Cellix is a series A company based in Hyderabad (India), founded in 2014 by Mahesh Kandula. It operates as an AI-powered platform for drug discovery and development for various diseases.</p>
            <a href="https://tracxn.com/d/companies/cellix/__U22GnmEPDlxie2UNAMkFGnt16IHi9Pv9WbM7wIkhOpk" target="_blank" rel="noopener noreferrer" aria-label="View CII IPR Awards 2020 details">Click to view more</a>
          </div>

          <div className="glass-card featured-card stagger-item">
            <div className="icon-container animate-float">
              <Award className="icon-lg text-primary" />
            </div>
            <h3 className="featured-title">
              Who Are the All-Time Top India-based Inventors?
            </h3>
            <img src="/idiyas.png" alt="CII IPR Awards Logo" className="education-logo" />
            <p className="featured-description">
              31. Mahesh Kandula, Cellix Bio Private Limited
            </p>
            <p className="featured-description">Mr. Kandula is an inventor of several potential novel molecular entities in various therapeutic areas including Thrombosis, Lipid Disorders, Diabetes, CNS, Asthma, Cancer, Neurodegenerative Diseases, Hypertension and Liver Cirrhosis.</p>
            {/* <p>He is the sole inventor of more than 100 novel drug molecules which are currently at various stages of non-clinical and clinical development.</p> */}
            <a href="https://idiyas.com/blog/who-is-the-all-time-top-india-based-inventors/" target="_blank" rel="noopener noreferrer" aria-label="View CII IPR Awards 2020 details">Click to view more</a>
          </div>

          <div className="glass-card featured-card stagger-item">
            <div className="icon-container animate-float">
              <Award className="icon-lg text-primary" />
            </div>
            <h3 className="featured-title">
              Mahesh Kandula Patents – Insights & Stats
            </h3>
            <img src="/InsightsGate.png" alt="CII IPR Awards Logo" className="education-logo" />
            <p className="featured-description">
              Mahesh Kandula has filed 819 patents, out of which 227 have been granted. Of these 819 patents, more than 57% patents are active. Out of these 819 patents, 63 patents were filed only in India, out of which 15 patents has been granted.
            </p>
            <a href="https://insights.greyb.com/mahesh-kandula-patents/" target="_blank" rel="noopener noreferrer" aria-label="View CII IPR Awards 2020 details">Click to view more</a>
          </div>

          <div className="glass-card featured-card stagger-item">
            <div className="icon-container animate-float">
              <Award className="icon-lg text-primary" />
            </div>
            <h3 className="featured-title">
              CII IPR AWARDS
            </h3>
            <img src="/CII.png" alt="CII IPR Awards Logo" className="education-logo" />
            <p className="featured-description">
              Cellix Bio Private Limited won the award in the Category of Best Patent Portfolio, Startup-Life Sc/Pharma, Sep 2020
            </p>
            <a href="https://ip-awards.ciiipr.in/gallery-2021" target="_blank" rel="noopener noreferrer" aria-label="View CII IPR Awards 2020 details">Click to view more</a>
          </div>

          <div className="glass-card featured-card stagger-item">
            <div className="icon-container animate-float">
              <Award className="icon-lg text-primary" />
            </div>
            <h3 className="featured-title">
              Clarivate Announces Winners of the South Asia Innovation Awards 2024
            </h3>
            <img src="/clarivate.png" alt="Clarivate Awards Logo" className="education-logo" />
            <p className="featured-description">
              India Emerging Player Winners - Cellix Bio Private Limited, Issued by Clarivate Plc (NYSE: CLVT)
            </p>
            <a href="https://clarivate.com/news/clarivate-announces-winners-of-the-south-asia-innovation-awards-2024/" target="_blank" rel="noopener noreferrer" aria-label="View Clarivate South Asia Innovation Awards 2024 details">Click to view more</a>
          </div>

          <div className="glass-card featured-card stagger-item">
            <div className="icon-container animate-float">
              <Award className="icon-lg text-primary" />
            </div>
            <h3 className="featured-title">
              Best Patents Portfolio in the startup, life science/pharma sector
            </h3>
            <img src="/CII.png" alt="CII Awards Logo" className="education-logo" />
            <p className="featured-description">
              Presented by the Confederation of Indian Industry (CII)
            </p>
            <a href="https://www.cii.in/ResourceDetails.aspx?enc=eeluWXRJlM2vmIyxaBXYKTP9ZQ8Rd1mnjG86D/VDnSOLUmx+ZN9CdfdpD05r3yz5onLbEZ/r/Qy6HkixN/4s3nSy+weJ/tsuIa/NNCUrczFUVehlxhW60xv6I+jy0/5hOc8aQATp20eYSQanbLRdxD0674DoSaVLxfVpXsY3BCyeXfOMvQElf2neWzW2/VCg" target="_blank" rel="noopener noreferrer" aria-label="View CII Best Patent Portfolio award details">Click to view more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
