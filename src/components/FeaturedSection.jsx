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
              CII IPR AWARDS
            </h3>
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
            <p className="featured-description">
              India Emerging Player Winners - Cellix Bio Private Limited, Issued by Clarivate Plc (NYSE: CLVT)
            </p>
            <a href="https://www.linkedin.com/in/mahesh-kandula1/details/honors/1758471599123/single-media-viewer?type=LINK&profileId=ACoAAAsT13UBliMhAtH66sXHvJu44kjWdXkW9O4&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_honors_details%3BDzMamOHoRm6A7bRClm435Q%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="View Clarivate South Asia Innovation Awards 2024 details">Click to view more</a>
          </div>

          <div className="glass-card featured-card stagger-item">
            <div className="icon-container animate-float">
              <Award className="icon-lg text-primary" />
            </div>
            <h3 className="featured-title">
              Best Patents Portfolio in the startup, life science/pharma sector
            </h3>
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
