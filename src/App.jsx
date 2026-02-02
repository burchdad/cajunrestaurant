import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import Carousel from "./components/Carousel";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50">
        <div className="glass">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <div className="text-2xl font-bold text-white hover:text-blue-200 transition-colors duration-300">
                  <span className="text-3xl mr-2">🦈</span>
                  <span className="font-['Playfair_Display']">Blue Anchor</span>
                </div>
              </Link>

              {/* Desktop Navigation - Hidden on mobile */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-white hover:text-blue-200 transition-colors duration-300 font-medium">
                  Home
                </Link>
                <Link to="/menu" className="text-white hover:text-blue-200 transition-colors duration-300 font-medium">
                  Menu
                </Link>
                <Link to="/about" className="text-white hover:text-blue-200 transition-colors duration-300 font-medium">
                  About
                </Link>
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

const Hero = () => (
  <div 
    className="relative min-h-[85vh] bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
    style={{ 
      backgroundImage: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600')"
    }}
  >
    <div className="absolute inset-0 hero-overlay"></div>
    <div className="absolute inset-0 pattern-dots opacity-30"></div>
    <div className="text-center z-10 animate-fadeScale">
      <h1 className="text-6xl md:text-7xl font-bold mb-6 font-['Playfair_Display'] animate-fadeUp">
        <span className="relative inline-block font-black text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] tracking-tight">
          Blue Anchor
          {/* ARC BUTTONS */}
          <div className="absolute left-1/2 bottom-full mb-16 md:mb-20 -translate-x-1/2 w-[600px] md:w-[800px] h-[120px] pointer-events-none">
            <Link to="/" className="arc-btn arc-a bg-black/80 backdrop-blur-md text-white font-black hover:bg-gray-600 hover:text-white transition-all duration-300 shadow-xl hover:shadow-gray-500/50">HOME</Link>
            <Link to="/menu" className="arc-btn arc-b bg-black/80 backdrop-blur-md text-white font-black hover:bg-gray-600 hover:text-white transition-all duration-300 shadow-xl hover:shadow-gray-500/50">MENU</Link>
            <Link to="/order" className="arc-btn arc-c bg-blue-600 text-white font-black hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-xl hover:shadow-blue-500/50">ORDER NOW</Link>
            <Link to="/about" className="arc-btn arc-d bg-black/80 backdrop-blur-md text-white font-black hover:bg-gray-600 hover:text-white transition-all duration-300 shadow-xl hover:shadow-gray-500/50">ABOUT</Link>
            <Link to="/contact" className="arc-btn arc-e bg-black/80 backdrop-blur-md text-white font-black hover:bg-gray-600 hover:text-white transition-all duration-300 shadow-xl hover:shadow-gray-500/50">CONTACT</Link>
          </div>
        </span><br />
        <span className="text-white">Seafood</span>
      </h1>
      <p className="text-2xl md:text-3xl mb-8 text-white font-light animate-fadeUp tracking-wide">
        Fresh Ocean to Table Excellence
      </p>
      <div className="animate-float">
        <Link to="/menu">
          <Button size="xl" className="text-xl px-12 py-6 shadow-2xl">
            🍽️ Explore Our Menu
          </Button>
        </Link>
      </div>
    </div>
    {/* Decorative elements */}
    <div className="absolute top-10 left-10 text-6xl animate-float opacity-20">🦈</div>
    <div className="absolute bottom-10 right-10 text-4xl animate-float opacity-20" style={{animationDelay: '1s'}}>🦞</div>
    <div className="absolute top-1/2 left-5 text-5xl animate-float opacity-20" style={{animationDelay: '2s'}}>⚓</div>
  </div>
);

const HomePage = () => {
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600",
      title: "Fresh Ocean Seafood",
      description: "Sourced Daily from Local Waters"
    },
    {
      url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1600",
      title: "Expert Preparation",
      description: "Crafted by Experienced Chefs"
    },
    {
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600",
      title: "Dine with Family & Friends",
      description: "Creating Memories Since 1995"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      
      {/* Carousel Section */}
      <section className="bg-gradient-to-r from-red-50 via-white to-yellow-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-5xl font-bold text-gray-800 mb-4 font-['Playfair_Display']">Experience Our Catch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">From our galley to your table, every dish celebrates the bounty of the sea</p>
          </div>
          <div className="animate-fadeInScale">
            <Carousel images={carouselImages} autoPlay={true} interval={4000} />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-5xl font-bold text-gray-800 mb-8 font-['Playfair_Display']">About Us</h2>
            <h3 className="text-2xl font-semibold text-blue-700 mb-6">WE'RE PROUD OF ALL OF OUR SEAFOOD</h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Blue Anchor Seafood Restaurant & Oyster Bar is your premier destination for fresh, 
                locally-sourced seafood. Located in the heart of the coastal district, our restaurant 
                is family-owned and operated, and we proudly serve only the finest ocean-to-table cuisine.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                From our signature crab cakes to our daily fresh catches, every dish is prepared with 
                passion and the highest quality ingredients. Our commitment to excellence has made us 
                a beloved destination for seafood lovers and families alike.
              </p>
              <Button size="lg" className="text-lg px-8">
                READ MORE ABOUT US
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Live Music Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-5xl font-bold text-gray-800 mb-6 font-['Playfair_Display']">Live Music</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Your destination for the best music! Join us for live performances every weekend.
            </p>
            <Button size="lg" className="text-lg px-10">
              🎵 VIEW MUSIC SCHEDULE
            </Button>
          </div>
        </div>
      </section>

      {/* Parties Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInScale">
              <h2 className="text-5xl font-bold text-gray-800 mb-6 font-['Playfair_Display']">Parties</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                You worry about your guests and we will take care of the rest! Let us host your party.
              </p>
              <Button size="lg" className="text-lg px-10">
                🎉 BOOK A PARTY
              </Button>
            </div>
            <div 
              className="h-80 rounded-lg bg-cover bg-center shadow-lg animate-fadeInScale"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800')" }}
            />
          </div>
        </div>
      </section>

      {/* Catering Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              className="h-80 rounded-lg bg-cover bg-center shadow-lg animate-fadeInScale order-2 md:order-1"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555244162-803834f70033?w=800')" }}
            />
            <div className="animate-fadeInScale order-1 md:order-2">
              <h2 className="text-5xl font-bold text-gray-800 mb-6 font-['Playfair_Display']">Catering</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Fine food is very important at any event - book catering with us and make sure 
                people talk about your event for a long time!
              </p>
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">
                We master the art of outdoor Catering.
              </h3>
              <Button size="lg" className="text-lg px-10">
                🍽️ ORDER CATERING
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-5xl font-bold text-gray-800 mb-6 font-['Playfair_Display']">Reviews</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 mb-8">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">REVIEW BY - CUSTOMER</h3>
                <h4 className="text-lg font-medium mb-4">Sarah M:</h4>
                <blockquote className="text-lg text-gray-600 italic leading-relaxed">
                  "The crab cakes were absolutely amazing! I had the grilled salmon which was perfection. 
                  We had the best server ever and can't wait to come back. The waterfront views are spectacular!!"
                </blockquote>
              </Card>
              <Card className="p-8">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">REVIEW BY - CUSTOMER</h3>
                <h4 className="text-lg font-medium mb-4">Mike T:</h4>
                <blockquote className="text-lg text-gray-600 italic leading-relaxed">
                  "Best seafood restaurant in the area! Fresh catch daily, incredible lobster bisque, 
                  and the staff treats you like family. The Blue Anchor is our new favorite spot!"
                </blockquote>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto animate-fadeIn">
            <h2 className="text-4xl font-bold mb-6 font-['Playfair_Display']">Newsletter</h2>
            <h3 className="text-xl mb-8">Sign up for our newsletter & get exclusive offers and invites!</h3>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Email (required)" 
                className="flex-1 p-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500"
                required 
              />
              <Button variant="secondary" size="lg" type="submit">
                SUBMIT
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Location */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 font-['Playfair_Display']">Location</h3>
              <p className="text-lg">123 Harbor Drive</p>
              <p className="text-lg">Seaside, FL 32459</p>
            </div>
            
            {/* Hours */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 font-['Playfair_Display']">Hours</h3>
              <p className="text-lg">Tuesday - Sunday</p>
              <p className="text-lg">11:00 AM - 9:00 PM</p>
              <p className="text-sm text-gray-400 mt-2">No Reservations</p>
            </div>
            
            {/* Contact */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 font-['Playfair_Display']">Contact Us</h3>
              <p className="text-lg mb-2">
                <a href="tel:+15045555347" className="hover:text-blue-400 transition-colors">
                  (504) 555-FISH
                </a>
              </p>
              <p className="text-lg">
                <a href="mailto:info@blueanchorseafood.com" className="hover:text-blue-400 transition-colors">
                  info@blueanchorseafood.com
                </a>
              </p>
            </div>
          </div>
          
          {/* Social Media & Additional Info */}
          <div className="border-t border-gray-700 pt-8 text-center">
            <div className="flex justify-center gap-6 mb-6">
              <h4 className="text-lg font-semibold">Find Us On...</h4>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Facebook</a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Instagram</a>
            </div>
            <p className="text-gray-400">
              Blue Anchor Seafood Restaurant & Oyster Bar - Fresh Ocean to Table Excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const MenuPage = () => {
  const menu = {
    "� Appetizers": [
      { name: "Coconut Shrimp", price: "$12.99", description: "Jumbo shrimp in crispy coconut coating with mango dipping sauce" },
      { name: "Crab Cakes", price: "$14.99", description: "Maryland-style crab cakes with chipotle aioli" },
      { name: "Calamari Rings", price: "$10.99", description: "Golden fried squid with marinara and lemon" },
      { name: "Oysters Rockefeller", price: "$13.99", description: "Fresh oysters with spinach, herbs, and parmesan" }
    ],
    "🍽️ Main Dishes": [
      { name: "Grilled Salmon", price: "$22.99", description: "Atlantic salmon with lemon herb butter and seasonal vegetables" },
      { name: "Lobster Tail Dinner", price: "$34.99", description: "Two lobster tails with drawn butter and garlic mashed potatoes" },
      { name: "Fish & Chips", price: "$18.99", description: "Beer-battered cod with hand-cut fries and coleslaw" },
      { name: "Seafood Paella", price: "$26.99", description: "Saffron rice with shrimp, mussels, clams, and calamari" },
      { name: "Blackened Mahi Mahi", price: "$21.99", description: "Spice-crusted mahi mahi with coconut rice and mango salsa" },
      { name: "New England Clam Chowder", price: "$16.99", description: "Creamy chowder served in a sourdough bread bowl" },
      { name: "Shrimp Scampi", price: "$19.99", description: "Garlic butter shrimp over linguine pasta" }
    ],
    "🥗 Sides": [
      { name: "Garlic Mashed Potatoes", price: "$6.99", description: "Creamy potatoes with roasted garlic" },
      { name: "Grilled Asparagus", price: "$7.99", description: "Fresh asparagus with lemon and parmesan" },
      { name: "Coconut Rice", price: "$5.99", description: "Jasmine rice cooked in coconut milk" },
      { name: "Coleslaw", price: "$4.99", description: "Fresh cabbage slaw with tangy dressing" },
      { name: "Sweet Potato Fries", price: "$6.99", description: "Hand-cut fries with sea salt" }
    ]
  };

  const printMenu = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-red-50 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-6xl font-bold text-gray-800 mb-4 font-['Playfair_Display']">Our Menu</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">Fresh seafood prepared with coastal culinary traditions</p>
          <Button onClick={printMenu} variant="outline" size="lg" className="animate-pulse">
            📄 Download / Print Menu
          </Button>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {Object.entries(menu).map(([section, items], sectionIndex) => (
            <div key={section} className="mb-16">
              <Card variant="gradient" className="animate-fadeInScale" style={{animationDelay: `${sectionIndex * 0.2}s`}}>
                <div className="bg-gradient-ocean text-white p-6 rounded-t-2xl">
                  <h2 className="text-4xl font-bold text-center font-['Playfair_Display']">{section}</h2>
                </div>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {items.map((item, idx) => (
                      <div key={idx} className="group hover:bg-blue-50/50 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-200">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors font-['Playfair_Display']">
                            {typeof item === 'string' ? item : item.name}
                          </h3>
                          {item.price && (
                            <span className="text-xl font-bold text-blue-700 bg-gray-100 px-3 py-1 rounded-full">
                              {item.price}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-gray-600 italic">{item.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Chef's Note */}
        <div className="text-center mt-12 animate-fadeIn">
          <Card variant="dark" className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-400 mb-4 font-['Playfair_Display']">🦈 Captain's Note</h3>
              <p className="text-gray-300 leading-relaxed">
                All our seafood is sourced fresh daily from local fishing fleets and sustainable suppliers. 
                Preparation styles can be customized upon request. Ask your server about our daily catches!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6 space-y-12 pt-24">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Bringing the freshest catch from sea to table since 1995
        </p>
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded by Captain Mike Anderson in 1995, our restaurant brings the finest ocean bounty 
            directly to your table. Growing up in a fishing family along the coast, Captain Mike learned 
            the art of selecting the freshest catch and preparing it with respect for the sea's gifts.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Every dish we serve honors the maritime traditions passed down through generations of fishermen. 
            From our perfectly grilled salmon to our signature seafood paella, we stay true to the flavors 
            that celebrate the ocean's abundance.
          </p>
        </div>
        <div 
          className="h-80 rounded-lg bg-cover bg-center shadow-lg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800')" }}
        />
      </div>

      {/* Values Section */}
      <div className="bg-blue-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 space-y-2">
              <div className="text-4xl text-center">�</div>
              <h3 className="text-xl font-semibold text-center">Freshness</h3>
              <p className="text-gray-600 text-center">
                Daily sourced seafood from trusted local fishermen and sustainable suppliers
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 space-y-2">
              <div className="text-4xl text-center">⚓</div>
              <h3 className="text-xl font-semibold text-center">Community</h3>
              <p className="text-gray-600 text-center">
                Creating a welcoming harbor where everyone feels at home
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 space-y-2">
              <div className="text-4xl text-center">✨</div>
              <h3 className="text-xl font-semibold text-center">Quality</h3>
              <p className="text-gray-600 text-center">
                Fresh, locally-sourced ingredients prepared with care daily
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <div 
              className="h-64 bg-cover bg-center rounded-t-lg"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400')" }}
            />
            <CardContent className="p-6 text-center space-y-2">
              <h3 className="text-xl font-semibold">Captain Mike Anderson</h3>
              <p className="text-gray-600">Head Chef & Owner</p>
              <p className="text-sm text-gray-500">30+ years of seafood expertise</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <div 
              className="h-64 bg-cover bg-center rounded-t-lg"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400')" }}
            />
            <CardContent className="p-6 text-center space-y-2">
              <h3 className="text-xl font-semibold">Chef Elena Rodriguez</h3>
              <p className="text-gray-600">Sous Chef</p>
              <p className="text-sm text-gray-500">Specializes in fresh fish and shellfish</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <div 
              className="h-64 bg-cover bg-center rounded-t-lg"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400')" }}
            />
            <CardContent className="p-6 text-center space-y-2">
              <h3 className="text-xl font-semibold">Marina Bay</h3>
              <p className="text-gray-600">Restaurant Manager</p>
              <p className="text-sm text-gray-500">Ensuring every guest feels like family</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const OrderOnlinePage = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const menuItems = [
    { id: 1, name: "Grilled Salmon", price: 22.99, category: "Mains", description: "Atlantic salmon with lemon herb butter and seasonal vegetables" },
    { id: 2, name: "Seafood Paella", price: 26.99, category: "Mains", description: "Saffron rice with shrimp, mussels, clams, and calamari" },
    { id: 3, name: "Lobster Tail Dinner", price: 34.99, category: "Mains", description: "Two lobster tails with drawn butter and garlic mashed potatoes" },
    { id: 4, name: "Coconut Shrimp", price: 12.99, category: "Appetizers", description: "Jumbo shrimp in crispy coconut coating with mango dipping sauce" },
    { id: 5, name: "Crab Cakes", price: 14.99, category: "Appetizers", description: "Maryland-style crab cakes with chipotle aioli" },
    { id: 6, name: "Coconut Rice", price: 5.99, category: "Sides", description: "Jasmine rice cooked in coconut milk" },
  ];

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    setTotal(total + item.price);
  };

  const removeFromCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem && existingItem.quantity > 1) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
    } else {
      setCart(cart.filter(cartItem => cartItem.id !== item.id));
    }
    setTotal(total - item.price);
  };

  const handleCheckout = () => {
    alert('Order placed! Thank you for choosing Blue Anchor Seafood!');
    setCart([]);
    setTotal(0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6 pt-24">
      <h1 className="text-4xl font-bold text-center mb-8">Order Online</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Menu Items */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Menu</h2>
          <div className="space-y-4">
            {menuItems.map(item => (
              <Card key={item.id} className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                    <span className="text-lg font-bold text-red-700">${item.price}</span>
                  </div>
                  <Button onClick={() => addToCart(item)} size="sm">
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Cart */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Order</h2>
          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                    <Button size="sm" variant="outline" onClick={() => removeFromCart(item)}>
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total: ${total.toFixed(2)}</span>
                </div>
                <Button onClick={handleCheckout} size="lg" className="w-full mt-4">
                  Place Order
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ReservationsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Reservation request submitted! We will contact you to confirm.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      specialRequests: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 pt-24">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Make a Reservation</h1>
        <p className="text-xl text-gray-600">Book your table for fresh seafood dining experience</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Reservation Form */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6">Reservation Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium mb-1">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="time" className="block text-sm font-medium mb-1">Time</label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                >
                  <option value="">Select Time</option>
                  <option value="5:00 PM">5:00 PM</option>
                  <option value="5:30 PM">5:30 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                  <option value="6:30 PM">6:30 PM</option>
                  <option value="7:00 PM">7:00 PM</option>
                  <option value="7:30 PM">7:30 PM</option>
                  <option value="8:00 PM">8:00 PM</option>
                  <option value="8:30 PM">8:30 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="guests" className="block text-sm font-medium mb-1">Number of Guests</label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                required
              >
                <option value="">Select Party Size</option>
                {[1,2,3,4,5,6,7,8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="specialRequests" className="block text-sm font-medium mb-1">Special Requests</label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows="3"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="Any allergies, special occasions, seating preferences..."
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Submit Reservation
            </Button>
          </form>
        </Card>

        {/* Restaurant Info */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Restaurant Hours</h3>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Monday - Thursday:</span>
                <span>11:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday - Saturday:</span>
                <span>11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>12:00 PM - 8:00 PM</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center gap-3">
                <span>📞</span>
                <span>(504) 555-FISH</span>
              </div>
              <div className="flex items-center gap-3">
                <span>📍</span>
                <span>123 Harbor Drive<br />Seaside, FL 32459</span>
              </div>
              <div className="flex items-center gap-3">
                <span>✉️</span>
                <span>info@blueanchorseafood.com</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Reservation Policy</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• Reservations recommended, especially on weekends</p>
              <p>• Parties of 8+ require advance notice</p>
              <p>• Please arrive within 15 minutes of your reservation</p>
              <p>• Cancellations appreciated 2 hours in advance</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6 space-y-12 pt-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">Get in touch with us - we'd love to hear from you!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Visit Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-600">123 Harbor Drive<br />Seaside, FL 32459</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">(504) 555-FISH</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">info@blueanchorseafood.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">🕒</span>
                <div>
                  <h4 className="font-semibold">Hours</h4>
                  <div className="text-gray-600">
                    <p>Mon-Thu: 11AM-9PM</p>
                    <p>Fri-Sat: 11AM-10PM</p>
                    <p>Sunday: 12PM-8PM</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Map */}
          <Card className="p-0 overflow-hidden">
            <iframe
              className="w-full h-64"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d144.9537353153174!3d-37.816279279751834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e5d3c49f3c0!2sVictoria!5e0!3m2!1sen!2sau!4v1600000000000!5m2!1sen!2sau"
              allowFullScreen=""
              loading="lazy"
              title="Restaurant Location Map"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('This is a demo login form - no authentication implemented');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-md mx-auto p-6 pt-32">
      <Card className="p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Sign In
          </Button>
        </form>
        
        <div className="text-center mt-6 text-gray-600">
          <p className="text-sm">This is a demo login form</p>
        </div>
      </Card>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/order" element={<OrderOnlinePage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;