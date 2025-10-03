import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
import PublicationsSection from "../components/PublicationsSection";
import PatentsSection from "../components/PatentsSection";
import FeaturedSection from "../components/FeaturedSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import DarkModeToggle from "../components/DarkModeToggle";
import ScrollToTop from "../components/ScrollToTop";
import DNABackground from "../components/DNABackground";
import "../App.css";

const Index = () => {
  return (
    <div>
      {/* DNA Vector Background */}
      <DNABackground />

      {/* Dark Mode Toggle */}
      <DarkModeToggle />

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
