import { BookOpen, FileText } from "lucide-react";

const PublicationsSection = () => {
  return (
    <section id="publications" className="section">
      <div className="section-container">
        <h2 className="section-title">
          <BookOpen className="icon-lg" />
          Key Publications
        </h2>
        <p className="section-subtitle">
          Peer-reviewed research contributions to scientific literature
        </p>
        <div className="publications-list">
          <div className="glass-card publication-item stagger-item">
            <h3 className="publication-title">
              <FileText className="icon-sm flex-shrink-0 text-primary" />
              Novel Therapeutic Approach for [Disease]: Targeting [Specific
              Pathway]
            </h3>
            <div className="publication-authors">
              [Your Name], [Co-authors], et al.
            </div>
            <div className="publication-journal">
              <BookOpen className="icon-sm" />
              Nature Biotechnology, 2023 | DOI: XX.XXXX/XXXXXX
            </div>
          </div>

          <div className="glass-card publication-item stagger-item">
            <h3 className="publication-title">
              <FileText className="icon-sm flex-shrink-0 text-primary" />
              Advances in [Specific Technology]: A Comprehensive Review
            </h3>
            <div className="publication-authors">
              [Your Name], [Co-authors], et al.
            </div>
            <div className="publication-journal">
              <BookOpen className="icon-sm" />
              Cell, 2022 | DOI: XX.XXXX/XXXXXX
            </div>
          </div>

          <div className="glass-card publication-item stagger-item">
            <h3 className="publication-title">
              <FileText className="icon-sm flex-shrink-0 text-primary" />
              Mechanism of Action Study: [Drug/Compound Name] in [Disease
              Model]
            </h3>
            <div className="publication-authors">
              [Your Name], [Co-authors], et al.
            </div>
            <div className="publication-journal">
              <BookOpen className="icon-sm" />
              Science, 2021 | DOI: XX.XXXX/XXXXXX
            </div>
          </div>

          <div className="glass-card publication-item stagger-item">
            <h3 className="publication-title">
              <FileText className="icon-sm flex-shrink-0 text-primary" />
              High-Throughput Screening Platform for [Application]
            </h3>
            <div className="publication-authors">
              [Your Name], [Co-authors], et al.
            </div>
            <div className="publication-journal">
              <BookOpen className="icon-sm" />
              Journal of Medicinal Chemistry, 2020 | DOI: XX.XXXX/XXXXXX
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
