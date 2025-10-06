import React, { useState, useEffect, useRef } from "react";
import { Mail, User, Send, FlaskConical, Sparkles, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "@/hooks/use-toast";
import ReCAPTCHA from "react-google-recaptcha";

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
  const [captchaValue, setCaptchaValue] = useState(null);
  const recaptchaRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleCaptchaExpired = () => {
    setCaptchaValue(null);
  };

  const handleCaptchaError = () => {
    setCaptchaValue(null);
    toast({
      title: "CAPTCHA error",
      description: "There was an error loading the CAPTCHA. Please refresh the page.",
      variant: "destructive",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      toast({
        title: "CAPTCHA verification required",
        description: "Please complete the CAPTCHA to verify you're human.",
        variant: "destructive",
      });
      return;
    }

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
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      setFormData({ name: "", email: "", number: "", message: "" });
      
      // Reset CAPTCHA
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setCaptchaValue(null);
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
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
                <Phone className="icon-sm" />
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

            <div className="form-group" style={{ display: 'flex', justifyContent: 'center' }}>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Lfl0t8rAAAAAHZmUI91KpQOzEgkGHOxRkQiK7T2"
                onChange={handleCaptchaChange}
                onExpired={handleCaptchaExpired}
                onErrored={handleCaptchaError}
                theme="light"
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
