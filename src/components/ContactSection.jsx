import { useState, useEffect } from "react";
import { Mail, User, Send, FlaskConical, Sparkles } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const rotatingTexts = [
    "Innovator",
    "Entrepreneur",
    "Corporate Law",
    "Intellectual Property Law",
    "Civil and Criminal Law",
    "Litigations",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        "service_wzhnz8z", // ✅ Your Service ID
        "template_93e7p14", // ✅ Your Template ID
        {
          name: formData.name,
          email: formData.email,
          number: formData.number,
          message: formData.message,
        },
        "6XzhfCt4XXJmTepAL" // ✅ Your Public Key
      );

      console.log("Email sent:", result.text);
      alert("✅ Thank you for your message. I will get back to you soon!");
      setFormData({ name: "", email: "", number: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("❌ Failed to send message. Please try again later.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="section-container">
        <h2 id="contact-heading" className="section-title">
          <Mail className="icon-lg" aria-hidden="true" />
          Get in Touch
        </h2>
        <div
          className="hero-subtitle"
          style={{ justifyContent: "center", marginBottom: "1.5rem" }}
        >
          <FlaskConical className="icon-md" aria-hidden="true" />
          <div className="rotating-text-container">
            <span key={currentTextIndex} className="rotating-text">
              {rotatingTexts[currentTextIndex]}
            </span>
          </div>
          <Sparkles className="icon-md" aria-hidden="true" />
        </div>
        <div className="glass-card contact-card stagger-item">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                <User className="icon-sm" />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <Mail className="icon-sm" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="number" className="form-label">
                <Mail className="icon-sm" />
                Phone Number
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                <Send className="icon-sm" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="form-input"
                placeholder="Your message..."
              />
            </div>

            <button type="submit" className="form-submit">
              <Send className="icon-sm" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
