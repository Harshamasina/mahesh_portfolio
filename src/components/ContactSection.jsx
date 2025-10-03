import { useState } from "react";
import { Mail, User, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message. I will get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
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
        <p className="section-subtitle">
          Interested in collaboration, consultation, or discussing biotechnology innovations? Connect with Mahesh Kandula for opportunities in drug discovery, pharmaceutical partnerships, and life sciences ventures.
        </p>
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
