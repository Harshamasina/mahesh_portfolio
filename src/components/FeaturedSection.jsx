import { Sparkles, Award, Users, TrendingUp } from "lucide-react";

const FeaturedSection = () => {
  return (
    <section id="featured" className="section">
      <div className="section-container">
        <h2 className="section-title">
          <Sparkles className="icon-lg" />
          Featured Achievements
        </h2>
        <p className="section-subtitle">
          Recognition and notable contributions to the field
        </p>
        <div className="featured-grid">
          <div className="glass-card featured-card stagger-item">
            <div className="icon-container animate-float">
              <Award className="icon-lg text-primary" />
            </div>
            <h3 className="featured-title">
              [Award Name]
            </h3>
            <p className="featured-description">
              Recognized for groundbreaking research in [specific area] by
              [Organization Name], 2023
            </p>
          </div>

          <div className="glass-card featured-card stagger-item">
            <div className="icon-container animate-float">
              <Users className="icon-lg text-primary" />
            </div>
            <h3 className="featured-title">
              Industry Leadership
            </h3>
            <p className="featured-description">
              Serving on the advisory board of [Organization] and contributing
              to shaping the future of biotech innovation
            </p>
          </div>

          <div className="glass-card featured-card stagger-item">
            <div className="icon-container animate-float">
              <TrendingUp className="icon-lg text-primary" />
            </div>
            <h3 className="featured-title">
              Funding Success
            </h3>
            <p className="featured-description">
              Secured over $[X]M in research grants and venture funding to
              advance breakthrough therapies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
