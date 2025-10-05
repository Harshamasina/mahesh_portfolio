import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
import PublicationsSection from "../components/PublicationsSection";
import PatentsSection from "../components/PatentsSection";
import FeaturedSection from "../components/FeaturedSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import DNABackground from "../components/DNABackground";
import "../App.css";

const Index = () => {
  // Force light theme on mount
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }, []);

  return (
    <div>
      <Helmet>
        <title>Mahesh Kandula - Inventor and Entrepreneur | Biotechnology Innovation</title>
        <meta name="description" content="Professional profile of Mahesh Kandula, an inventor with 100+ novel drug molecules, entrepreneur, and biotechnology expert. Specializing in pharmaceutical innovation, patents, and life sciences ventures." />
        <meta name="keywords" content="Mahesh Kandula, biotechnology inventor, pharmaceutical entrepreneur, drug discovery, novel drug molecules, life sciences innovation, biotech patents, Cellix Bio, medical research, therapeutic development" />
        <link rel="canonical" href="https://www.maheshkandula.com" />
        <meta property="og:title" content="Mahesh Kandula - Inventor and Entrepreneur | Biotechnology Innovation" />
        <meta property="og:description" content="Explore the professional journey of Mahesh Kandula, inventor of 100+ novel drug molecules and leader in biotechnology innovation." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.maheshkandula.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mahesh Kandula",
            "jobTitle": "Inventor and Entrepreneur",
            "description": "Entrepreneur and scientist with a proven record of creating transformative life sciences ventures. Inventor of 100+ novel drug molecules.",
            "url": "https://www.maheshkandula.com",
            "sameAs": [
              "https://www.linkedin.com/in/mahesh-kandula1/"
            ],
            "knowsAbout": ["Biotechnology", "Drug Discovery", "Pharmaceutical Innovation", "Patents", "Entrepreneurship"],
            "alumniOf": [
              {
                "@type": "CollegeOrUniversity",
                "name": "Indian Institute of Technology, Kharagpur"
              },
              {
                "@type": "CollegeOrUniversity",
                "name": "Babson College"
              },
              {
                "@type": "CollegeOrUniversity",
                "name": "The University of Edinburgh"
              }
            ]
          })}
        </script>
      </Helmet>
      {/* DNA Vector Background */}
      <DNABackground />

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Navigation */}
      <Navigation />

      {/* Hero/About Section */}
      <HeroSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Education Section */}
      <EducationSection />

      {/* Publications Section */}
      <PublicationsSection />

      {/* Patents Section */}
      <PatentsSection />

      {/* Featured Section */}
      <FeaturedSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
