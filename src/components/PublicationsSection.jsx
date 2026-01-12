import { useState } from "react";
import { BookOpen, FileText, ExternalLink, BadgeInfo, ChevronDown, ChevronUp } from "lucide-react";

const publications = [
  {
    id: "pub-1",
    title: "Preclinical Evaluation of a Pilocarpine-(R)-Lipoic Acid Eye Drop for Presbyopia",
    authors: "Translational Vision Science & Technology November 2025, Vol.14, 17.",
    link: "https://tvst.arvojournals.org/article.aspx?articleid=2811085",
    ariaLabel: "View publication on CLX-155A preclinical evaluation",
    paragraphs: [
      "Presbyopia is a progressive, age-related loss of near vision. Although current therapies offer symptomatic relief, they fail to target the underlying pathology. These studies investigated a novel dual-mechanism eye drop, CLX-162 (pilocarpine lipoate salt), focusing on three key characteristics: (1) tolerability, (2) pharmacokinetics and ocular tissue penetration, and (3) chemical stability within a dual-chamber delivery system.",
      "CLX-162 demonstrated superior ocular tolerability compared to LACE, with no corneal, iridial, or conjunctival effects observed. It induced transient pupillary constriction, whereas LACE caused mild redness and discharge. Pharmacokinetic analysis showed that CLX-162 achieved significantly higher and longer lasting (R)-lipoic acid levels in the aqueous humor and lens than LACE. Pilocarpine remained detectable for up to 8 hours. Stability studies confirmed that CLX-162 retained potency for 6 months in the dual-chamber container, with pilocarpine and (R)-lipoic acid levels within 95% to 100%. After reconstitution, it remained stable for 21 days.",
    ],
  },
  {
    id: "pub-2",
    title: "Enhanced drug loading of in situ forming gels for oral mucositis pain control",
    authors: "International Journal of Pharmaceutics Volume 595, 15 February 2021, 120225",
    link: "https://pubmed.ncbi.nlm.nih.gov/33486019/",
    ariaLabel: "View publication on CLX-155A preclinical evaluation",
    paragraphs: [
      "Bupivacaine γ-Linoleate, Carbopolr 974P, Pluronicr (F127 and F68) and dimethyl sulfoxide were kindly gifted by Cellix Bio.",
      "Localized delivery to oral mucositis ulcerations requires specialized dosage forms, (e.g. in situ forming gels) delivered to the site in relatively low volumes. However, this is challenging for drugs with low solubility such as Bupivacaine γ-Linoleate (Bup-γL). The objective of this study is to develop an in situ forming gel with enhanced loading of Bup-γL for oral mucositis pain control. Two co-solvents (PEG400 and ethanol) and eight solubilizers (Tween 80, sodium lauryl sulfate, Cremophorr RH40, Cremophorr EL, Kolliphorr HS 15, Soluplusr, PEG 3350 and PEG8000) were screened for their capability to solubilize Bup-γL. Among all tested solubilizers, sodium lauryl sulfate (SLS) showed the highest solubilizing capacity (8.83 ñ 0.94 mg/mL). This was considered to be a consequence of the similarity between the structure of SLS and Bup-γL. On the addition of SLS to the in situ forming gels, the drug loading was enhanced from ~6.5 to ~10.5 mg/ml. The formulations were characterized for their gelation temperature, rheological properties, in vitro drug release and short-term storage stability. The gelation temperatures of the in situ forming gel formulations were significantly reduced with enhanced drug loading. The in vitro drug release profiles showed good fit to both the first order and the Higuchi models. Formulations with SLS demonstrated sustained drug release (time to plateau ~7 h) compared with formulations without SLS (time to plateau ~3.5 h). This study offers an effective strategy to enhance drug loading of in situ forming gels. The enhanced drug loading will reduce the dosing volume and as such is expected to reduce any unwanted numbing of the healthy mucosa.",
    ],
  },
  {
    id: "pub-3",
    title: "Discovery and preclinical development of a novel prodrug conjugate of mesalamine with eicosapentaenoic acid and caprylic acid for the treatment of inflammatory bowel diseases",
    authors: "International Immunopharmacology, Volume 40, November 2016, Pages 443-451",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1567576916303873",
    ariaLabel: "View publication on CLX-155A preclinical evaluation",
    paragraphs: [
      "Mesalamine (5-ASA) is one of the drugs indicated as first line therapy in ulcerative colitis for induction and maintenance of remission. Sulfasalazine and formulations of 5-ASA (pH-dependent and controlled release formulations) were developed to minimize the systemic absorption and maximize the delivery of the mesalamine to colon. Although, its efficacy and safety is well documented there are approximately 30% nonresponders to 5-ASA therapy. This necessitates the need for novel therapeutic options to improve the efficacy and safety of the currently available 5-ASA therapy. CLX-103 is a novel, patented prodrug molecular conjugate of mesalamine, eicosapentaenoic acid and caprylic acid designed to offer incremental benefits over the currently approved 5-ASA formulations. Results of in vitro and in vivo studies showed that CLX-103, was stable in simulated gastric fluid, but undergoes enzymatic hydrolysis in the small/large intestines to release the active moiety. Our data also showed that the active moiety is retained in the targeted intestinal tissues (ileum and colon) over a longer period of time in relation to sulfasalazine. The in vitro data supports the observed in vivo plasma kinetics of 5-ASA characterized by longer Tmax, low Cmax after the oral administration of CLX-103. Efficacy study of CLX-103 in acute dextran sodium sulfate (DSS) mouse colitis model showed improved potency measured as Disease Activity Index (DAI) and histological scores in the colon as compared to sulfasalazine. These findings indicate that CLX-103 could offer a differentiated drug product which is more efficacious and safer than the currently approved 5-ASA formulations in the treatment of inflammatory bowel diseases.",
    ],
  },
  {
    id: "pub-4",
    title: "Preclinical Evaluation of CLX-155A: A Novel 5-FU and Valproic Acid Pro-drug in Nude Mouse Model for Activity in Colon Cancer",
    authors: "European Society of Medicine ú Apr 28, 2025",
    link: "https://esmed.org/MRA/mra/article/view/6224",
    ariaLabel: "View publication on CLX-155A preclinical evaluation",
    paragraphs: [
      "CLX-155A demonstrated a significant dose-dependent tumor growth (p less than 0.05) inhibition versus vehicle and was comparable to capecitabine. The evaluation of its single-dose pharmacokinetic profile reflected defined peaks for 5-FU and its precursors (5'-DFCR, 5'-DFCR), higher area under the curve (AUC) versus capecitabine, sustained release characteristics, and defined peaks and AUCs for valproic acid.",
      "Overall, CLX-155A exhibits promising preclinical efficacy in a nude xenograft mouse model of colorectal cancer. Its dual-action mechanism and improved pharmacokinetic profile suggest potential advantages over existing therapies. Further studies are warranted to explore its clinical potential and optimize dosing strategies.",
    ],
  },
  {
    id: "pub-5",
    title: "Pharmacokinetics of Single-dose CLX-155 and Metabolites in Female Balb/C Mice",
    authors: "European Society of Medicine ú Oct 24, 2024",
    link: "https://esmed.org/MRA/mra/article/view/5709",
    ariaLabel: "View publication on CLX-155A preclinical evaluation",
    paragraphs: [
      "CLX-155 and capecitabine experience rapid absorption following oral administration and conversion to 5'-DFCR, 5'-DFUR, and 5-FU. The results suggest the conversion of CLX-155 to its metabolites 5'-DFUR and 5-FU was more efficient than that of capecitabine. Such observations have suggested that administration of CLX-155 at a lower dose level is a possibility. CLX-155's infusion-like conversion to its metabolites 5'-DFUR and 5-FU provided a unique PK profile that may explain its antitumor activity in animals at half the dose of capecitabine reported in the previous study.",
    ],
  },
  {
    id: "pub-6",
    title: "CLX-155: A Novel, Oral 5-FU Prodrug Displaying Antitumor Activity in Human Colon Cancer Xenograft Model in Nude Mice",
    authors: "European Society of Medicine ú Jul 14, 2024",
    link: "https://esmed.org/MRA/mra/article/view/5219",
    ariaLabel: "View publication on CLX-155A preclinical evaluation",
    paragraphs: [
      "CLX-155 demonstrated statistically significant, dose-dependent tumor growth inhibition at all doses compared to vehicle control (p less than 0.0001). Tumor growth inhibition at Day 15 for CLX-155 treatment groups of 125, 250, and 500 mg/kg/day was 57.8%, 70.4%, and 90.6% respectively. Two animals in the CLX-155 500 mg/kg/day treatment group experienced complete tumor regression, and all animals in the CLX-155 treatment groups survived. Two animals in the CLX-155 250 and 500 mg/kg/day dosing groups experienced a decrease in body weight. In contrast, two mice in the capecitabine group exhibited clinical signs of hunchback and scaly skin, progressive weight loss, and eventual death.",
    ],
  },
  {
    id: "pub-7",
    title: "Preclinical evaluation of a novel prodrug of 5-FU for the treatment of cancer",
    authors: "American Society of Clinical Oncology (ASCO) ú Jun 22, 2020",
    link: "https://meetings.asco.org/abstracts-presentations/188964",
    ariaLabel: "View publication on CLX-155A preclinical evaluation",
    paragraphs: [
      "CLX-155 has an excellent safety and a differentiated ADME profile in relation to capecitabine. This translated into an improved in-vivo antitumor activity for CLX-155 in the HCT 116 xenograft model in relation to capecitabine. Overall data indicate that CLX-155 could offer significant improvements over the currently approved capecitabine in terms of dose size, frequency of administration, safety and interpatient variability in pharmacokinetics.",
    ],
  },
  {
    id: "pub-8",
    title: "Phosphatidylinositol 3-kinase (PI3KCA) Oncogene MutationAnalysis and Gene Expression Profiling in Primary Breast Cancer Patients",
    authors: "Asian Pacific Journal of Cancer Prevention, Vol 14, 2013 ú Oct 17, 2013",
    link: "https://journal.waocp.org/article_28078.html",
    ariaLabel: "View publication on CLX-155A preclinical evaluation",
    paragraphs: [
      "Phosphatidylinositol 3-kinase (PI3K) pathway plays a significant role in apoptosis, cellular proliferation and motility. Aim of the present study is to analyze mutations and gene expression profiles of PI3KCA gene to illustrate the role of PI3KCA gene in breast carcinoma. Materials and Methods: We have analyzed 38 breast cancers patients for mutations in the two PIK3CA hotspots in exons 9 and 20 by direct sequencing of DNA obtained from biopsy samples. We have also analyzed the gene expression of PI3KCA gene in 38 breast carcinoma tumor and corresponding control tissue gene expression analyses were performed at mRNA level by RT-PCR. The fisher's exact test (252 only) was performed by using MedCalc software for to examine the association of mRNA levels. Results: In the present study total 13 cases contained somatic mutations. 9/13 cases 1633 GA (E545K) were found in exon 9, whereas in exon 20, 4/13 cases found 3140AG mutation.",
      "Our combined analysis shows that PI3KCA mutations are present in 34% of human breast cancer patients. In our study, we have also clearly found significantly higher expression in breast cancer tissues in comparison with control tissues (p=0.001). Conclusions: PIK3CA mutation is an emerging tumor marker that, in the future, might be used in the process of choosing a treatment. However the detection of PI3KCA mutation has important clinical implications for diagnosis, progression and therapy.",
    ],
  },
  {
    id: "pub-9",
    title: "Sulfotransferase 1A1 (SULT1A1) Polymorphism and Breast Cancer Risk: a Case-control Study in South India",
    authors: "American Journals of Cancer Science ú Jun 20, 2013",
    link: "https://files01.core.ac.uk/download/286338134.pdf",
    ariaLabel: "View publication on CLX-155A preclinical evaluation",
    paragraphs: [
      "Breast cancer is the most common cancer among women worldwide. Sulfotransferase plays an important role in the formation of estrogen which is usually conferred as a risk factor for breast cancer. The SULT1A1*2 polymorphism is likely to play an important role in the susceptibility to breast cancer. This polymorphism (G638A) in the sulfotransferase 1A1 (SULT1A1) gene may causes Arg213His amino acid change and consequently results in significantly reduced enzyme activity and thermostability.",
    ],
  },
  {
    id: "pub-10",
    title: "Molecular Mechanism and Targeted Therapy Options of Triple-Negative (ER, PgR, HER-2/neu) Breast Cancer",
    authors: "World J Oncol 2013;4(3):137-141 ú Mar 8, 2013",
    link: "https://pubmed.ncbi.nlm.nih.gov/29147345/",
    ariaLabel: "View publication on CLX-155A preclinical evaluation",
    paragraphs: [
      "Triple negative breast cancer (TNBC) accounts for approximately 15% of breast cancers. It is defined by the absence of estrogen receptor (ER), progesterone receptor (PR), and HER-2 Over expression. Expression of ER, PR and HER-2 plays an important role in therapeutic assessment of patients with breast cancer. TNBC is not one disease, but a family of diseases, some of which are highly aggressive with limited treatment options. Triple-negative breast cancers Patients are not benefiting from currently available receptor-targeted systemic therapy. At present, there is no single agent that targets triple-negative breast cancer. However, researchers are presently investigating large number of potential therapies that may eventually improve outcomes in these patients. In this review article, we discussed about tripple negative breast cancer, also the role of BRCA gene mutations and targeted therapeutic options available to triple negative breast cancer patients.",
    ],
  },
  {
    id: "pub-11",
    title: "Use of Loop-Mediated Isothermal Amplification of DNA for the Rapid Detection of HIV/AIDS Related Opportunistic Infections (CMV &TB) in Clinical Specimens",
    authors: "J AIDS Clinic Res ú Nov 9, 2012J",
    link: "https://www.hilarispublisher.com/open-access/use-of-loop-mediated-isothermal-amplification-of-dna-for-the-rapid-detection-of-hiv-aids-related-opportunistic-infections-cmv-tb-in-clinical-specimens-2155-6113.1000154.pdf",
    ariaLabel: "View publication on CLX-155A preclinical evaluation",
    paragraphs: [
      "loop mediated isothermal amplification (LAMP) and its advantages in detection of opportunistic infections in HIV infected individuals. HIV infection is the strongest risk factor for development of tuberculosis (TB) and Cytomegalovirus (CMV) conversely both TB and CMV are the commonest HIV-associated opportunistic diseases worldwide. Loop-mediated isothermal amplification (LAMP) can amplify DNA with high specificity, efficiency and rapidity under isothermal condition. One of the great advantages of the LAMP assay is that amplification can be monitored with the naked eye using SYBR green dye. This sort of detection system is easy and helpful in discriminating infectious and non infectious samples. In view of the advantages of rapid amplification, and easy detection, LAMP has potential applications for clinical diagnosis in developing countries without requiring experienced persons and sophisticated equipment.",
    ],
  },
  {
    id: "pub-12",
    title: "Differences in Gene Expression Profiles between Human Breast Tissue and Peripheral Blood Samples for Breast Cancer Detection",
    authors: "Journal of Cancer Science and Therapy ú Oct 29, 2012",
    link: "https://www.hilarispublisher.com/open-access/differences-in-gene-expression-profiles-between-human-breast-tissue-and-peripheral-blood-samples-for-breast-cancer-detection-1948-5956.1000171.pdf",
    ariaLabel: "View publication on CLX-155A preclinical evaluation",
    paragraphs: [
      "The purpose of this study is to check the similarities of differential gene expression of 11 genes in breast cancer tissue and blood samples from the same individual for early detection of breast cancer. We had investigated differential gene expression by qRT-PCR in 20 breast cancer patients' tumoral tissues and corresponding blood sample. In our analysis BRCA2, HER-2, ER, PR, MET and BRAF mRNA levels were significantly over expressed in tumoral tissues. ER and PR mRNA levels were not detected in any of the peripheral blood samples, whereas KRAS and PTEN mRNA levels were not detected in any of the tumoral tissues. HER-2 (45%), EGFR (40%) and PI3KCA (30%). KRAS and PTEN mRNA levels were significantly over expressed in peripheral blood. In the correlation analysis expression of most of the genes were significantly altered in grade II and III in the tissues, where as in premenopausal women mRNA expression was significantly high in Grade II and III and ER/PR negative tumors. Our results suggests that BRCA2, ER, PR, PI3KCA, MET and BRAF differential gene expression at mRNA levels showed no diagnostic value as a marker of circulating tumour cells in breast cancer. qRT-PCR may be suitable alternative method for the determination of HER-2, EGFR, PI3KCA KRAS and PTEN mRNA status in the blood of breast cancer patients. Premenopausal women with high grade (Grade II and III) and ER/PR negative cases may be associated with proliferation/ metastasis, high recurrence rate, and poor prognosis.",
    ],
  },
  {
    id: "pub-13",
    title: "Preclinical Evaluation of CLX-155A: A Novel 5-FU and Valproic Acid Pro- drug in Nude Mouse Model for Activity in Colon Cancer",
    authors: "The European Society of Medicine",
    link: "https://esmed.org/MRA/mra/article/view/6224",
    ariaLabel: "View publication on CLX-155A preclinical evaluation",
    paragraphs: [
      "Traditional pyrimidine antimetabolic chemotherapy agents like 5-FU and capecitabine face challenges such as resistance, toxicity, and variability in patient response, highlighting the need for new therapeutic strategies to improve patient outcomes. CLX-155A is a novel oral prodrug that combines 5-fluorouracil (5-FU) and valproic acid (VPA), aiming to enhance chemotherapy efficacy through synergistic mechanisms. This preclinical study addressed research questions relative to CLX-155A's preclinical activity, single-dose pharmacokinetic (PK) profile, and relative effects compared with capecitabine in FoxN1 athymic nude mouse models of human colorectal cancer (CRC).",
      "This study assessed the anticancer efficacy of CLX-155A in a colorectal cancer xenograft mouse model utilizing seven groups (n=10/group) of FoxN1 athymic nude female mice. Investigators inoculated the FoxN1 athymic nude female mice with cancer cells and subsequently treated them with varying doses of CLX-155A, involving twice-daily (150 and 500 mg/kg twice daily) and once-daily (300 and 1000 mg/kg/day) schedules. The capecitabine group was a positive control, dosed at 1000 mg/kg/day (500 mg/kg/twice daily or 1000 mg/kg/day). They monitored tumor growth as the primary endpoint and evaluated the pharmacokinetic profile of 5-FU and its precursors (5'-DFCR, 5'-DFCR), along with that of VPA.",
      "CLX-155A demonstrated a significant dose-dependent tumor growth (p less than 0.05) inhibition versus vehicle and was comparable to capecitabine. The evaluation of its single-dose pharmacokinetic profile reflected defined peaks for 5-FU and its precursors (5'-DFCR, 5'-DFCR), higher area under the curve (AUC) versus capecitabine, sustained release characteristics, and defined peaks and AUCs for valproic acid.",
    ],
  },
];

const PublicationsSection = () => {
  const [expanded, setExpanded] = useState({});

  const handleToggle = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="publications" className="section" aria-labelledby="publications-heading">
      <div className="section-container">
        <h2 id="publications-heading" className="section-title">
          <BookOpen className="icon-lg" aria-hidden="true" />
          Key Publications
        </h2>
        <p className="section-subtitle">
          Peer-reviewed research contributions in drug discovery, cancer research, and biotechnology. Published in leading scientific journals including European Society of Medicine, American Society of Clinical Oncology, and Asian Pacific Journal of Cancer Prevention
        </p>
        <div className="publications-list">
          {publications.map((publication) => (
            <div key={publication.id} className="glass-card publication-item stagger-item">
              <h3 className="publication-title">
                <FileText className="icon-sm flex-shrink-0 text-primary" />
                {publication.title}
              </h3>
              <div className="publication-authors">{publication.authors}</div>
              <div className="publication-actions">
                <button
                  type="button"
                  className="publication-toggle"
                  onClick={() => handleToggle(publication.id)}
                >
                  <BadgeInfo className="icon-sm" />
                  View More
                  {expanded[publication.id] ? (
                    <ChevronUp className="icon-sm" />
                  ) : (
                    <ChevronDown className="icon-sm" />
                  )}
                </button>
                <a
                  className="publication-link"
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={publication.ariaLabel}
                >
                  <ExternalLink className="icon-sm" />
                  Publication Link
                </a>
              </div>
              {expanded[publication.id] ? (
                <div className="publication-details">
                  {publication.paragraphs.map((paragraph, index) => (
                    <p key={`${publication.id}-${index}`}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
