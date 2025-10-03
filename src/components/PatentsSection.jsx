import { Award, Dna, FlaskConical, Microscope, Target, CheckCircle2, TrendingUp } from "lucide-react";

const PatentsSection = () => {
  return (
    <section id="patents" className="section">
      <div className="section-container">
        <h2 className="section-title">
          <Award className="icon-lg" />
          Patents
        </h2>
        <p className="section-subtitle">
          Intellectual property contributions to biotechnology innovation
        </p>
        <div className="patents-grid">
          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Dna className="icon-sm flex-shrink-0 text-primary" />
              Novel Compound for Treatment of [Disease]
            </h3>
            <div className="patent-number">US Patent No. XX,XXX,XXX</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" />
              Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <FlaskConical className="icon-sm flex-shrink-0 text-primary" />
              Method and System for [Specific Application]
            </h3>
            <div className="patent-number">US Patent No. XX,XXX,XXX</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" />
              Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Microscope className="icon-sm flex-shrink-0 text-primary" />
              Therapeutic Composition for [Medical Use]
            </h3>
            <div className="patent-number">
              Patent Application No. XX/XXX,XXX
            </div>
            <span className="patent-status">
              <TrendingUp className="icon-sm" />
              Pending
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Target className="icon-sm flex-shrink-0 text-primary" />
              Drug Delivery System for Enhanced Bioavailability
            </h3>
            <div className="patent-number">EP Patent No. XX,XXX,XXX</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" />
              Granted
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatentsSection;
