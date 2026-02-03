import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import "./NavbarBase.css";
import "./NavbarDesktop.css";
import "./NavbarMobile.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="navbar-glass">
        <div className="navbar-container">
          <div className="navbar-content">
            {/* Left Navigation */}
            <div className="navbar-section navbar-left">
              <Link to="/" className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
              <Link to="/menu" className={`navbar-link ${location.pathname === '/menu' ? 'active' : ''}`}>Menu</Link>
              <Link to="/about" className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
            </div>

            {/* Logo Center */}
            <div className="navbar-section navbar-center">
              <Link to="/" className="logo-home-button" title="Return to Home">
                <img 
                  src="/photos/logo/main_logo.png" 
                  alt="Blue Anchor Seafood - Home" 
                  className="navbar-logo"
                />
              </Link>
            </div>

            {/* Right Navigation */}
            <div className="navbar-section navbar-right">
              <Link to="/order" className={`navbar-link ${location.pathname === '/order' ? 'active' : ''}`}>Order</Link>
              <Link to="/reservations" className={`navbar-link ${location.pathname === '/reservations' ? 'active' : ''}`}>Events</Link>
              <Link to="/contact" className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
              <Link to="/order">
                <Button size="sm" className="order-button navbar-order-btn">Order Now</Button>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button 
              className="mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className={`hamburger-line ${isOpen ? 'line-rotate-45' : ''}`}></div>
              <div className={`hamburger-line ${isOpen ? 'line-hidden' : ''}`}></div>
              <div className={`hamburger-line ${isOpen ? 'line-rotate-neg45' : ''}`}></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <div className={`mobile-overlay-menu ${isOpen ? 'overlay-visible' : 'overlay-hidden'}`}>
        <div className="mobile-overlay-content">
          <div className="mobile-nav-container">
            {[ "/", "/menu", "/order", "/reservations", "/about", "/contact" ].map((path, i) => {
              const labels = ["Home", "Menu", "Order", "Reserve", "About", "Contact"];
              const icons = ["🏠", "🍽️", "🛒", "📅", "👥", "📞"];
              const desc = ["Welcome Page", "Our Dishes", "Order Online", "Book Table", "Our Story", "Get in Touch"];
              return (
                <Link 
                  to={path} 
                  key={path}
                  className="mobile-nav-item"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="nav-item-content">
                    <div className="nav-item-icon">{icons[i]}</div>
                    <div className="nav-item-title">{labels[i]}</div>
                    <div className="nav-item-description">{desc[i]}</div>
                  </div>
                </Link>
              );
            })}

            <div className="mobile-nav-divider">
              <div className="mobile-nav-buttons">
                <Link to="/order" onClick={() => setIsOpen(false)}>
                  <Button variant="gold" size="lg" className="mobile-nav-button mobile-order-btn">
                    Order Now
                  </Button>
                </Link>
                <Link to="/reservations" onClick={() => setIsOpen(false)}>
                  <Button variant="glass" size="lg" className="mobile-nav-button mobile-event-btn">
                    Book Event
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mobile-nav-footer">
              <p className="footer-address">123 Harbor Drive, Seaside, FL</p>
              <p className="footer-hours">Open: Tue-Sun 11AM-9PM | No Reservations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="mobile-backdrop"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;