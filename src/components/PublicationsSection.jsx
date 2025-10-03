import { BookOpen, FileText, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

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
              Preclinical Evaluation of CLX-155A: A Novel 5-FU and Valproic Acid Pro-drug in Nude Mouse Model for Activity in Colon Cancer
            </h3>
            <div className="publication-authors">
              European Society of Medicine · Apr 28, 2025
            </div>
            <a href="https://esmed.org/MRA/mra/article/view/6224" target="_blank" rel="noopener noreferrer">
              <Button variant="biotech" size="sm" className="mt-2">
                <ExternalLink className="icon-sm" />
                View Publication
              </Button>
            </a>
            <p>CLX-155A demonstrated a significant dose-dependent tumor growth (p less than 0.05) inhibition versus vehicle and was comparable to capecitabine. The evaluation of its single-dose pharmacokinetic profile reflected defined peaks for 5-FU and its precursors (5’-DFCR, 5’-DFCR), higher area under the curve (AUC) versus capecitabine, sustained release characteristics, and defined peaks and AUCs for valproic acid.</p>
            <p>Overall, CLX-155A exhibits promising preclinical efficacy in a nude xenograft mouse model of colorectal cancer. Its dual-action mechanism and improved pharmacokinetic profile suggest potential advantages over existing therapies. Further studies are warranted to explore its clinical potential and optimize dosing strategies.</p>
          </div>

          <div className="glass-card publication-item stagger-item">
            <h3 className="publication-title">
              <FileText className="icon-sm flex-shrink-0 text-primary" />
              Pharmacokinetics of Single-dose CLX-155 and Metabolites in Female Balb/C Mice
            </h3>
            <div className="publication-authors">
              European Society of Medicine · Oct 24, 2024
            </div>
            <a href="https://esmed.org/MRA/mra/article/view/5709" target="_blank" rel="noopener noreferrer">
              <Button variant="biotech" size="sm" className="mt-2">
                <ExternalLink className="icon-sm" />
                View Publication
              </Button>
            </a>
            <p>CLX-155 and capecitabine experience rapid absorption following oral administration and conversion to 5’-DFCR, 5’-DFUR, and 5-FU. The results suggest the conversion of CLX-155 to its metabolites 5’-DFUR and 5-FU was more efficient than that of capecitabine. Such observations have suggested that administration of CLX-155 at a lower dose level is a possibility. CLX-155’s infusion-like conversion to its metabolites 5’-DFUR and 5-FU provided a unique PK profile that may explain its antitumor activity in animals at half the dose of capecitabine reported in the previous study.</p>
          </div>

          <div className="glass-card publication-item stagger-item">
            <h3 className="publication-title">
              <FileText className="icon-sm flex-shrink-0 text-primary" />
              CLX-155: A Novel, Oral 5-FU Prodrug Displaying Antitumor Activity in Human Colon Cancer Xenograft Model in Nude Mice
            </h3>
            <div className="publication-authors">
              European Society of Medicine · Jul 14, 2024
            </div>
            <a href="https://esmed.org/MRA/mra/article/view/5219" target="_blank" rel="noopener noreferrer">
              <Button variant="biotech" size="sm" className="mt-2">
                <ExternalLink className="icon-sm" />
                View Publication
              </Button>
            </a>
            <p>CLX-155 demonstrated statistically significant, dose-dependent tumor growth inhibition at all doses compared to vehicle control (p less than 0.0001). Tumor growth inhibition at Day 15 for CLX-155 treatment groups of 125, 250, and 500 mg/kg/day was 57.8%, 70.4%, and 90.6% respectively. Two animals in the CLX-155 500 mg/kg/day treatment group experienced complete tumor regression, and all animals in the CLX-155 treatment groups survived. Two animals in the CLX-155 250 and 500 mg/kg/day dosing groups experienced a decrease in body weight. In contrast, two mice in the capecitabine group exhibited clinical signs of hunchback and scaly skin, progressive weight loss, and eventual death.</p>
          </div>

          <div className="glass-card publication-item stagger-item">
            <h3 className="publication-title">
              <FileText className="icon-sm flex-shrink-0 text-primary" />
              Preclinical evaluation of a novel prodrug of 5-FU for the treatment of cancer
            </h3>
            <div className="publication-authors">
              American Society of Clinical Oncology (ASCO) · Jun 22, 2020
            </div>
            <a href="https://meetings.asco.org/abstracts-presentations/188964" target="_blank" rel="noopener noreferrer">
              <Button variant="biotech" size="sm" className="mt-2">
                <ExternalLink className="icon-sm" />
                View Publication
              </Button>
            </a>
            <p>CLX-155 has an excellent safety and a differentiated ADME profile in relation to capecitabine. This translated into an improved in-vivo antitumor activity for CLX-155 in the HCT 116 xenograft model in relation to capecitabine. Overall data indicate that CLX-155 could offer significant improvements over the currently approved capecitabine in terms of dose size, frequency of administration, safety and interpatient variability in pharmacokinetics.</p>
          </div>

          <div className="glass-card publication-item stagger-item">
            <h3 className="publication-title">
              <FileText className="icon-sm flex-shrink-0 text-primary" />
              Phosphatidylinositol 3-kinase (PI3KCA) Oncogene MutationAnalysis and Gene Expression Profiling in Primary Breast Cancer Patients
            </h3>
            <div className="publication-authors">
              Asian Pacific Journal of Cancer Prevention, Vol 14, 2013 · Oct 17, 2013
            </div>
            <a href="https://journal.waocp.org/article_28078.html" target="_blank" rel="noopener noreferrer">
              <Button variant="biotech" size="sm" className="mt-2">
                <ExternalLink className="icon-sm" />
                View Publication
              </Button>
            </a>
            <p>Phosphatidylinositol 3-kinase (PI3K) pathway plays a significant role in apoptosis, cellular proliferation and motility. Aim of the present study is to analyze mutations and gene expression profiles of PI3KCA gene to illustrate the role of PI3KCA gene in breast carcinoma. Materials and Methods: We have analyzed 38 breast cancers patients for mutations in the two PIK3CA hotspots in exons 9 and 20 by direct sequencing of DNA obtained from biopsy samples. We have also analyzed the gene expression of PI3KCA gene in 38 breast carcinoma tumor and corresponding control tissue gene expression analyses were performed at mRNA level by RT-PCR. The fisher’s exact test (252 only) was performed by using MedCalc software for to examine the association of mRNA levels. Results: In the present study total 13 cases contained somatic mutations. 9/13 cases 1633 GA (E545K) were found in exon 9, whereas in exon 20, 4/13 cases found 3140AG mutation.</p>
            <p>Our combined analysis shows that PI3KCA mutations are present in 34% of human breast cancer patients. In our study, we have also clearly found significantly higher expression in breast cancer tissues in comparison with control tissues (p=0.001). Conclusions: PIK3CA mutation is an emerging tumor marker that, in the future, might be used in the process of choosing a treatment. However the detection of PI3KCA mutation has important clinical implications for diagnosis, progression and therapy.</p>
          </div>

          <div className="glass-card publication-item stagger-item">
            <h3 className="publication-title">
              <FileText className="icon-sm flex-shrink-0 text-primary" />
                Sulfotransferase 1A1 (SULT1A1) Polymorphism and Breast Cancer Risk: a Case-control Study in South India
            </h3>
            <div className="publication-authors">
              American Journals of Cancer Science · Jun 20, 2013
            </div>
            <a href="https://pubmed.ncbi.nlm.nih.gov/15093672/" target="_blank" rel="noopener noreferrer">
              <Button variant="biotech" size="sm" className="mt-2">
                <ExternalLink className="icon-sm" />
                View Publication
              </Button>
            </a>
            <p>Breast cancer is the most common cancer among women worldwide. Sulfotransferase plays an important role in the formation of estrogen which is usually conferred as a risk factor for breast cancer. The SULT1A1*2 polymorphism is likely to play an important role in the susceptibility to breast cancer. This polymorphism (G638A) in the sulfotransferase 1A1 (SULT1A1) gene may causes Arg213His amino acid change and consequently results in significantly reduced enzyme activity and thermostability.</p>
          </div>

          <div className="glass-card publication-item stagger-item">
            <h3 className="publication-title">
              <FileText className="icon-sm flex-shrink-0 text-primary" />
                Molecular Mechanism and Targeted Therapy Options of Triple-Negative (ER, PgR, HER-2/neu) Breast Cancer
            </h3>
            <div className="publication-authors">
              World J Oncol • 2013;4(3):137-141 · Mar 8, 2013
            </div>
            <a href="https://pubmed.ncbi.nlm.nih.gov/29147345/" target="_blank" rel="noopener noreferrer">
              <Button variant="biotech" size="sm" className="mt-2">
                <ExternalLink className="icon-sm" />
                View Publication
              </Button>
            </a>
            <p>Triple negative breast cancer (TNBC) accounts for approximately 15% of breast cancers. It is defined by the absence of estrogen receptor (ER), progesterone receptor (PR), and HER-2 Over expression. Expression of ER, PR and HER-2 plays an important role in therapeutic assessment of patients with breast cancer. TNBC is not one disease, but a family of diseases, some of which are highly aggressive with limited treatment options. Triple-negative breast cancers Patients are not benefiting from currently available receptor-targeted systemic therapy. At present, there is no single agent that targets triple-negative breast cancer. However, researchers are presently investigating large number of potential therapies that may eventually improve outcomes in these patients. In this review article, we discussed about tripple negative breast cancer, also the role of BRCA gene mutations and targeted therapeutic options available to triple negative breast cancer patients.</p>
          </div>

          <div className="glass-card publication-item stagger-item">
            <h3 className="publication-title">
              <FileText className="icon-sm flex-shrink-0 text-primary" />
                Use of Loop-Mediated Isothermal Amplification of DNA for the Rapid Detection of HIV/AIDS Related Opportunistic Infections (CMV &TB) in Clinical Specimens
            </h3>
            <div className="publication-authors">
              J AIDS Clinic Res · Nov 9, 2012J
            </div>
            <a href="https://www.hilarispublisher.com/open-access/use-of-loop-mediated-isothermal-amplification-of-dna-for-the-rapid-detection-of-hiv-aids-related-opportunistic-infections-cmv-tb-in-clinical-specimens-2155-6113.1000154.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="biotech" size="sm" className="mt-2">
                <ExternalLink className="icon-sm" />
                View Publication
              </Button>
            </a>
            <p>loop mediated isothermal amplification (LAMP) and its advantages in detection
                of opportunistic infections in HIV infected individuals. HIV infection is the strongest risk factor for development of
                tuberculosis (TB) and Cytomegalovirus (CMV) conversely both TB and CMV are the commonest HIV-associated
                opportunistic diseases worldwide. Loop-mediated isothermal amplification (LAMP) can amplify DNA with high
                specificity, efficiency and rapidity under isothermal condition. One of the great advantages of the LAMP assay is
                that amplification can be monitored with the naked eye using SYBR green dye. This sort of detection system is easy
                and helpful in discriminating infectious and non infectious samples. In view of the advantages of rapid amplification,
                and easy detection, LAMP has potential applications for clinical diagnosis in developing countries without requiring
                experienced persons and sophisticated equipment.</p>
          </div>

          <div className="glass-card publication-item stagger-item">
            <h3 className="publication-title">
              <FileText className="icon-sm flex-shrink-0 text-primary" />
                Differences in Gene Expression Profiles between Human Breast Tissue and Peripheral Blood Samples for Breast Cancer Detection
            </h3>
            <div className="publication-authors">
              Journal of Cancer Science and Therapy · Oct 29, 2012
            </div>
            <a href="http://www.omicsonline.org/1948.../pdfdownload.php?" target="_blank" rel="noopener noreferrer">
              <Button variant="biotech" size="sm" className="mt-2">
                <ExternalLink className="icon-sm" />
                View Publication
              </Button>
            </a>
            <p>The purpose of this study is to check the similarities of differential gene expression of 11 genes in breast cancer tissue and blood samples from the same individual for early detection of breast cancer. We had investigated differential gene expression by qRT-PCR in 20 breast cancer patients’ tumoral tissues and corresponding blood sample. In our analysis BRCA2, HER-2, ER, PR, MET and BRAF mRNA levels were significantly over expressed in tumoral tissues. ER and PR mRNA levels were not detected in any of the peripheral blood samples, whereas KRAS
                and PTEN mRNA levels were not detected in any of the tumoral tissues. HER-2 (45%), EGFR (40%) and PI3KCA (30%). KRAS and PTEN mRNA levels were significantly over expressed in peripheral blood. In the correlation analysis expression of most of the genes were significantly altered in grade II and III in the tissues, where as in premenopausal women mRNA expression was significantly high in Grade II and III and ER/PR negative tumors. Our results suggests that BRCA2, ER, PR, PI3KCA, MET and BRAF differential gene expression at mRNA levels
                showed no diagnostic value as a marker of circulating tumour cells in breast cancer. qRT-PCR may be suitable alternative method for the determination of HER-2, EGFR, PI3KCA KRAS and PTEN mRNA status in the blood of breast cancer patients. Premenopausal women with high grade (Grade II and III) and ER/PR negative cases may be associated with proliferation/ metastasis, high recurrence rate, and poor prognosis.</p>
          </div>

          <div className="glass-card publication-item stagger-item">
            <h3 className="publication-title">
              <FileText className="icon-sm flex-shrink-0 text-primary" />
                Preclinical Evaluation of CLX-155A: A Novel 5-FU and Valproic Acid Pro- drug in Nude Mouse Model for Activity in Colon Cancer
            </h3>
            <div className="publication-authors">
              The European Society of Medicine
            </div>
            <a href="https://esmed.org/MRA/mra/article/view/6224" target="_blank" rel="noopener noreferrer">
              <Button variant="biotech" size="sm" className="mt-2">
                <ExternalLink className="icon-sm" />
                View Publication
              </Button>
            </a>
            <p>Traditional pyrimidine antimetabolic chemotherapy agents like 5-FU and capecitabine face challenges such as resistance, toxicity, and variability in patient response, highlighting the need for new therapeutic strategies to improve patient outcomes. CLX-155A is a novel oral prodrug that combines 5-fluorouracil (5-FU) and valproic acid (VPA), aiming to enhance chemotherapy efficacy through synergistic mechanisms. This preclinical study addressed research questions relative to CLX-155A's preclinical activity, single-dose pharmacokinetic (PK) profile, and relative effects compared with capecitabine in FoxN1 athymic nude mouse models of human colorectal cancer (CRC). </p>
            <p>This study assessed the anticancer efficacy of CLX-155A in a colorectal cancer xenograft mouse model utilizing seven groups (n=10/group) of FoxN1 athymic nude female mice. Investigators inoculated the FoxN1 athymic nude female mice with cancer cells and subsequently treated them with varying doses of CLX-155A, involving twice-daily (150 and 500 mg/kg twice daily) and once-daily (300 and 1000 mg/kg/day) schedules. The capecitabine group was a positive control, dosed at 1000 mg/kg/day (500 mg/kg/twice daily or 1000 mg/kg/day). They monitored tumor growth as the primary endpoint and evaluated the pharmacokinetic profile of 5-FU and its precursors (5’-DFCR, 5’-DFCR), along with that of VPA.</p>
            <p>CLX-155A demonstrated a significant dose-dependent tumor growth (p less than 0.05) inhibition versus vehicle and was comparable to capecitabine. The evaluation of its single-dose pharmacokinetic profile reflected defined peaks for 5-FU and its precursors (5’-DFCR, 5’-DFCR), higher area under the curve (AUC) versus capecitabine, sustained release characteristics, and defined peaks and AUCs for valproic acid.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
