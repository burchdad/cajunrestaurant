import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully! We will get back to you within 24 hours.');
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        
        <div className="contact-grid">
          {/* Contact Form */}
          <Card className="contact-form-card">
            <h2 className="form-title">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                >
                  <option value="">Select Subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Reservation">Reservation</option>
                  <option value="Private Events">Private Events</option>
                  <option value="Catering">Catering</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Employment">Employment</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  className="form-input"
                />
              </div>
              
              <Button type="submit" size="lg" className="submit-btn">
                Send Message
              </Button>
            </form>
          </Card>
          
          {/* Contact Information */}
          <div className="contact-info-section">
            <Card className="info-card">
              <h3 className="info-card-title">Restaurant Information</h3>
              <div className="info-content">
                <div className="info-item">
                  <h4 className="info-label">Address</h4>
                  <p className="info-text">123 Bourbon Street<br />New Orleans, LA 70116</p>
                </div>
                
                <div className="info-item">
                  <h4 className="info-label">Phone</h4>
                  <p className="info-text">(504) 555-0123</p>
                </div>
                
                <div className="info-item">
                  <h4 className="info-label">Email</h4>
                  <p className="info-text">info@blueanchorseafood.com</p>
                </div>
                
                <div className="info-item">
                  <h4 className="info-label">Hours</h4>
                  <div className="hours-text">
                    <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                    <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                    <p>Sunday: 4:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="info-card">
              <h3 className="info-card-title">Follow Us</h3>
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Yelp</a>
              </div>
            </Card>
            
            <Card className="info-card">
              <h3 className="info-card-title">Directions</h3>
              <div className="directions-content">
                <p>Located in the heart of the French Quarter, we're just a short walk from Jackson Square.</p>
                <p><strong>Parking:</strong> Street parking available on surrounding streets. Several parking garages within 2 blocks.</p>
                <p><strong>Public Transit:</strong> Streetcar stops at Canal & Bourbon, 2 blocks away.</p>
              </div>
            </Card>
          </div>
        </div>      
      </div>
    </div>
  );
};

export default ContactPage;