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
                  src="/photos/logo/4497175769342042725.png" 
                  alt="Blue Anchor Seafood - Home" 
                  className="h-6 w-auto navbar-logo"
                />
              </Link>
            </div>

            {/* Right Navigation */}
            <div className="navbar-section navbar-right">
              <Link to="/order" className={`navbar-link ${location.pathname === '/order' ? 'active' : ''}`}>Order</Link>
              <Link to="/reservations" className={`navbar-link ${location.pathname === '/reservations' ? 'active' : ''}`}>Events</Link>
              <Link to="/contact" className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
              <Link to="/order">
                <Button size="sm" className="order-button ml-2">Order Now</Button>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button 
              className="mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className={`hamburger-line ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`hamburger-line ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`hamburger-line ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <div className={`mobile-overlay-menu ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
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
                  <div className="text-center">
                    <div className="text-3xl mb-2 group-hover:animate-bounce">{icons[i]}</div>
                    <div className="text-lg font-semibold text-white group-hover:text-cyan-200">{labels[i]}</div>
                    <div className="text-sm text-gray-300 mt-1">{desc[i]}</div>
                  </div>
                </Link>
              );
            })}

            <div className="border-t border-white/20 pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/order" onClick={() => setIsOpen(false)}>
                  <Button variant="gold" size="lg" className="w-full sm:w-auto text-lg font-semibold">
                    🍽️ Order Now
                  </Button>
                </Link>
                <Link to="/reservations" onClick={() => setIsOpen(false)}>
                  <Button variant="glass" size="lg" className="w-full sm:w-auto text-lg font-semibold">
                    🎉 Book Event
                  </Button>
                </Link>
              </div>
            </div>

            <div className="border-t border-white/20 pt-6 text-center text-sm text-gray-300">
              <p className="mb-2">📍 123 Harbor Drive, Seaside, FL</p>
              <p>🕒 Open: Tue-Sun 11AM-9PM | No Reservations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30 top-20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;