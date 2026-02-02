import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import Carousel from "../components/Carousel";
import "./HomePage.css";

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

export default HomePage;