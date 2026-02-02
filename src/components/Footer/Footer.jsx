import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="global-footer bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="footer-section">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/blue-anchor-logo.svg" 
                alt="Blue Anchor Seafood" 
                className="h-12 w-auto hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Serving the finest fresh seafood in the heart of New Orleans since 1991. 
              Experience authentic Creole flavors and Gulf Coast hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/menu" className="footer-link">Menu</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/reservations" className="footer-link">Reservations</Link></li>
              <li><Link to="/order" className="footer-link">Order Online</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <div className="footer-contact">
              <p className="contact-item">
                <span className="contact-label">Address:</span>
                123 Bourbon Street<br />
                New Orleans, LA 70116
              </p>
              <p className="contact-item">
                <span className="contact-label">Phone:</span>
                (504) 555-0123
              </p>
              <p className="contact-item">
                <span className="contact-label">Email:</span>
                info@blueanchorseafood.com
              </p>
            </div>
          </div>

          {/* Hours & Social */}
          <div className="footer-section">
            <h3 className="footer-title">Hours</h3>
            <div className="footer-hours">
              <p className="hours-item">Mon-Thu: 5:00 PM - 10:00 PM</p>
              <p className="hours-item">Fri-Sat: 5:00 PM - 11:00 PM</p>
              <p className="hours-item">Sunday: 4:00 PM - 9:00 PM</p>
            </div>
            
            <div className="social-links mt-4">
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="social-link" aria-label="Facebook">
                  <span className="social-icon">📘</span>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <span className="social-icon">📷</span>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <span className="social-icon">🐦</span>
                </a>
                <a href="#" className="social-link" aria-label="Yelp">
                  <span className="social-icon">⭐</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="flex flex-col md:flex-row justify-between items-center">
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