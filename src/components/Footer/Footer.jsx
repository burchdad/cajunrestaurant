import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="global-footer">
      {/* Newsletter Section with Map */}
      <div className="newsletter-section relative">
        <div className="newsletter-container">
          <div className="newsletter-grid">
            {/* Newsletter Content */}
            <div className="newsletter-content">
              <h2 className="newsletter-title">Newsletter</h2>
              <p className="newsletter-subtitle">Sign up for our newsletter & get exclusive offers and invites!</p>
              <form className="newsletter-form">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email (required)</label>
                  <div className="form-input-group">
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="e.g. email@example.com"
                      className="newsletter-input"
                      required
                    />
                    <button type="submit" className="newsletter-submit">SUBMIT</button>
                  </div>
                </div>
              </form>
            </div>

            {/* Google Maps */}
            <div className="newsletter-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.2345678901234!2d-90.0644!3d29.9511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU3JzA0LjAiTiA5MMKwMDMnNTEuOCJX!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Blue Anchor Seafood Location"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="main-footer">
        <div className="main-footer-container">
          <div className="main-footer-grid">
            
            {/* Location */}
            <div className="footer-column">
              <h3 className="footer-column-title">Location</h3>
              <div className="footer-column-content">
                <p>7900 Lakeshore Drive</p>
                <p>New Orleans, LA</p>
                <p>70124</p>
              </div>
            </div>

            {/* Hours */}
            <div className="footer-column">
              <h3 className="footer-column-title">Hours</h3>
              <div className="footer-column-content">
                <p>Tuesday - Sunday</p>
                <p>11:00 AM - 9:00 PM</p>
                <p className="no-reservations-note">No Reservations</p>
              </div>
            </div>

            {/* Find Us On */}
            <div className="footer-column">
              <h3 className="footer-column-title">Find Us On...</h3>
              <div className="footer-social-icons">
                <a href="#" className="social-icon-link" aria-label="Facebook">
                  <span className="social-icon">f</span>
                </a>
                <a href="#" className="social-icon-link" aria-label="Instagram">
                  <span className="social-icon">📷</span>
                </a>
              </div>
            </div>

            {/* Contact Us */}
            <div className="footer-column">
              <h3 className="footer-column-title">Contact Us</h3>
              <div className="footer-column-content">
                <p>(504)-284-2899</p>
                <p>info@thebluecrabolna.com</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2026 Blue Anchor Seafood. All rights reserved.
            </p>
            <div className="footer-legal">
              <Link to="/privacy" className="legal-link">Privacy Policy</Link>
              <Link to="/terms" className="legal-link">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;