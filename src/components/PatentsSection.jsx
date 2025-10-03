import { Award, Dna, FlaskConical, Microscope, Target, CheckCircle2, TrendingUp, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const PatentsSection = () => {
  return (
    <section id="patents" className="section" aria-labelledby="patents-heading">
      <div className="section-container">
        <h2 id="patents-heading" className="section-title">
          <Award className="icon-lg" aria-hidden="true" />
          Patents
        </h2>
        <p className="section-subtitle">
          Extensive intellectual property portfolio covering novel drug molecules and therapeutic approaches. Multiple granted patents in cancer treatment, pain management, diabetes, neurodegenerative diseases, and metabolic disorders.
        </p>
        
        <div className="flex justify-center mb-8 patent_button">
          <a href="https://patents.justia.com/inventor/mahesh-kandula" target="_blank" rel="noopener noreferrer" aria-label="View all patents by Mahesh Kandula on Justia">
            View All Patents
          </a>
        </div>

        <div className="patents-grid">
          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Dna className="icon-sm flex-shrink-0 text-primary" />
              2,6 Xylidine Derivatives for the Treatment of Pain
            </h3>
            <div className="patent-number">US20120022147</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <FlaskConical className="icon-sm flex-shrink-0 text-primary" />
              4,6 -Dibenzoylamino-2-Methyl-Pyrimidine Derivatives for Cancer Treatment
            </h3>
            <div className="patent-number">US WO/2011/154846A3</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Target className="icon-sm flex-shrink-0 text-primary" />
              Compositions and Methods for the Treatment of Atherothrombosis
            </h3>
            <div className="patent-number">US PCT/IB2012/053673</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Dna className="icon-sm flex-shrink-0 text-primary" />
              Compositions and Methods for the Treatment of Cancer
            </h3>
            <div className="patent-number">US PCT/IB2012/053650</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <FlaskConical className="icon-sm flex-shrink-0 text-primary" />
              Compositions and Methods for Metabolic Conditions & Muscular Disorders
            </h3>
            <div className="patent-number">US PCT/IB2012/053509</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Target className="icon-sm flex-shrink-0 text-primary" />
              Compositions and Methods for Neuromuscular & Neurodegenerative Diseases
            </h3>
            <div className="patent-number">US PCT/IB2012/053555</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Dna className="icon-sm flex-shrink-0 text-primary" />
              Compositions and Methods for the Treatment of Parkinson's Disease
            </h3>
            <div className="patent-number">US PCT/IB2012/054101</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <FlaskConical className="icon-sm flex-shrink-0 text-primary" />
              Compositions and Methods for Treating Diabetes
            </h3>
            <div className="patent-number">US PCT/US2009/063997</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Target className="icon-sm flex-shrink-0 text-primary" />
              Compositions and Methods for Treating Diabetic Ulcers
            </h3>
            <div className="patent-number">US PCT/US2009/002831</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Dna className="icon-sm flex-shrink-0 text-primary" />
              Compositions and Methods for Treating NOS-Associated Diseases
            </h3>
            <div className="patent-number">US20110213021</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <FlaskConical className="icon-sm flex-shrink-0 text-primary" />
              Compound and Composition and Their Uses Thereof
            </h3>
            <div className="patent-number">US20110218235</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Target className="icon-sm flex-shrink-0 text-primary" />
              Compound and Method for the Treatment of Pain
            </h3>
            <div className="patent-number">US20110237658</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Dna className="icon-sm flex-shrink-0 text-primary" />
              Compound, Composition and Uses Thereof
            </h3>
            <div className="patent-number">US20110300190</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <FlaskConical className="icon-sm flex-shrink-0 text-primary" />
              Compounds & Compositions for Copper Retention Diseases
            </h3>
            <div className="patent-number">WO/2011/107870A3</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Target className="icon-sm flex-shrink-0 text-primary" />
              Cysteamine Derivatives in the Treatment of NASH
            </h3>
            <div className="patent-number">US PCT/IB2011/001550</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Dna className="icon-sm flex-shrink-0 text-primary" />
              Prognosis and Treatment Using Portfolio of Genes
            </h3>
            <div className="patent-number">US WO20212070056</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <FlaskConical className="icon-sm flex-shrink-0 text-primary" />
              Prodrugs of GABA Analogs
            </h3>
            <div className="patent-number">US PCT/IB2012/053529</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Target className="icon-sm flex-shrink-0 text-primary" />
              Production of R-α-Lipoic Acid by Fermentation
            </h3>
            <div className="patent-number">US20110262976</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatentsSection;
