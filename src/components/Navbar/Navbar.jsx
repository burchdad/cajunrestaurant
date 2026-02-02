import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50">
        <div className="glass">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              
              {/* Left Navigation - Hidden on mobile */}
              <div className="hidden md:flex items-center space-x-6">
                <Link to="/" className="text-white hover:text-blue-200 transition-colors duration-300 font-medium">
                  Home
                </Link>
                <Link to="/menu" className="text-white hover:text-blue-200 transition-colors duration-300 font-medium">
                  Menu
                </Link>
                <Link to="/about" className="text-white hover:text-blue-200 transition-colors duration-300 font-medium">
                  About
                </Link>
              </div>

              {/* Center Logo - Home Button */}
              <Link to="/" className="flex items-center group" title="Return to Home">
                <img 
                  src="/blue-anchor-logo.svg" 
                  alt="Blue Anchor Seafood - Home" 
                  className="h-16 w-auto transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                />
              </Link>

              {/* Right Navigation - Hidden on mobile */}
              <div className="hidden md:flex items-center space-x-6">
                <Link to="/order" className="text-white hover:text-blue-200 transition-colors duration-300 font-medium">
                  Order
                </Link>
                <Link to="/reservations" className="text-white hover:text-blue-200 transition-colors duration-300 font-medium">
                  Events
                </Link>
                <Link to="/contact" className="text-white hover:text-blue-200 transition-colors duration-300 font-medium">
                  Contact
                </Link>
                <Link to="/order">
                  <Button size="sm" className="ml-4">
                    Order Now
                  </Button>
                </Link>
              </div>
              
              {/* Mobile Menu Button - Only visible on mobile */}
              <button 
                className="md:hidden flex flex-col items-center justify-center w-12 h-12 focus:outline-none hover:bg-white/10 rounded-lg transition-all duration-300 group"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Only visible on mobile */}
      <div className={`md:hidden fixed inset-x-0 top-20 z-40 transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 backdrop-blur-xl border-b border-blue-600/50 shadow-2xl">
          <div className="container mx-auto px-6 py-8">
            {/* Mobile Navigation Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Link 
                to="/" 
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:scale-105 border border-white/20"
                onClick={() => setIsOpen(false)}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2 group-hover:animate-bounce">🏠</div>
                  <div className="text-lg font-semibold text-white group-hover:text-gray-200">Home</div>
                  <div className="text-sm text-gray-300 mt-1">Welcome Page</div>
                </div>
              </Link>

              <Link 
                to="/menu" 
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:scale-105 border border-white/20"
                onClick={() => setIsOpen(false)}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2 group-hover:animate-bounce">🍽️</div>
                  <div className="text-lg font-semibold text-white group-hover:text-gray-200">Menu</div>
                  <div className="text-sm text-gray-300 mt-1">Our Dishes</div>
                </div>
              </Link>

              <Link 
                to="/order" 
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:scale-105 border border-white/20"
                onClick={() => setIsOpen(false)}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2 group-hover:animate-bounce">🛒</div>
                  <div className="text-lg font-semibold text-white group-hover:text-gray-200">Order</div>
                  <div className="text-sm text-gray-300 mt-1">Order Online</div>
                </div>
              </Link>

              <Link 
                to="/reservations" 
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:scale-105 border border-white/20"
                onClick={() => setIsOpen(false)}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2 group-hover:animate-bounce">📅</div>
                  <div className="text-lg font-semibold text-white group-hover:text-gray-200">Reserve</div>
                  <div className="text-sm text-gray-300 mt-1">Book Table</div>
                </div>
              </Link>

              <Link 
                to="/about" 
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:scale-105 border border-white/20"
                onClick={() => setIsOpen(false)}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2 group-hover:animate-bounce">👥</div>
                  <div className="text-lg font-semibold text-white group-hover:text-cyan-200">About</div>
                  <div className="text-sm text-gray-300 mt-1">Our Story</div>
                </div>
              </Link>

              <Link 
                to="/contact" 
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:scale-105 border border-white/20"
                onClick={() => setIsOpen(false)}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2 group-hover:animate-bounce">📞</div>
                  <div className="text-lg font-semibold text-white group-hover:text-cyan-200">Contact</div>
                  <div className="text-sm text-gray-300 mt-1">Get in Touch</div>
                </div>
              </Link>
            </div>

            {/* Action Buttons */}
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

            {/* Contact Info */}
            <div className="border-t border-white/20 pt-6 mt-6">
              <div className="text-center text-sm text-gray-300">
                <p className="mb-2">📍 123 Harbor Drive, Seaside, FL</p>
                <p>🕒 Open: Tue-Sun 11AM-9PM | No Reservations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop - Only on mobile */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30 top-20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;