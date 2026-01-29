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
              <Link to="/" className="text-3xl font-bold hover:text-yellow-200 transition-all duration-300 transform hover:scale-105 font-['Playfair_Display'] drop-shadow-lg text-white">
                🌶️ <span className="text-gradient-gold">Cajun Cuisine</span>
              </Link>
              
              {/* Mobile Menu Button */}
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

        {/* Centered Arch Navigation */}
        <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-4">
          <div className="relative h-40 flex items-center justify-center">
            {[
              { label: "HOME", to: "/", position: "left-0 top-12" },
              { label: "MENU", to: "/menu", position: "left-1/4 top-4" },
              { label: "ABOUT", to: "/about", position: "left-1/2 top-0 transform -translate-x-1/2" },
              { label: "RESERVE", to: "/reservations", position: "right-1/4 top-4" },
              { label: "CONTACT", to: "/contact", position: "right-0 top-12" },
            ].map(({ label, to, position }) => (
              <Link
                key={to}
                to={to}
                className={`absolute ${position} px-4 py-2 md:px-6 md:py-3 rounded-full bg-black/60 backdrop-blur-md border-2 border-white/30 text-white font-black text-sm md:text-lg uppercase tracking-widest hover:bg-yellow-600/80 hover:text-white hover:border-yellow-300 hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50 whitespace-nowrap z-10`}
              >
                {label}
              </Link>
            ))}
            
            {/* Order Now Button - Center Bottom */}
            <Link 
              to="/order" 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-red-600 text-white font-black px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-110 shadow-2xl border-3 border-red-500 hover:border-red-400 uppercase tracking-widest text-lg md:text-xl hover:shadow-red-500/50 z-10"
            >
              ORDER NOW
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`sm:hidden fixed inset-x-0 top-20 z-40 transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="bg-gradient-to-b from-red-900 via-red-800 to-red-900 backdrop-blur-xl border-b border-red-600/50 shadow-2xl">
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
                  <div className="text-lg font-semibold text-white group-hover:text-yellow-200">Home</div>
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
                  <div className="text-lg font-semibold text-white group-hover:text-yellow-200">Menu</div>
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
                  <div className="text-lg font-semibold text-white group-hover:text-yellow-200">Order</div>
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
                  <div className="text-lg font-semibold text-white group-hover:text-yellow-200">Reserve</div>
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
                  <div className="text-lg font-semibold text-white group-hover:text-yellow-200">About</div>
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
                  <div className="text-lg font-semibold text-white group-hover:text-yellow-200">Contact</div>
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
                    📞 Call (504) 555-CAJUN
                  </Button>
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="border-t border-white/20 pt-6 mt-6">
              <div className="text-center text-sm text-gray-300">
                <p className="mb-2">📍 123 Bourbon Street, New Orleans, LA</p>
                <p>🕒 Open Daily: Mon-Thu 11AM-9PM | Fri-Sat 11AM-10PM | Sun 12PM-8PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="sm:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30 top-20"
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
      backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600')"
    }}
  >
    <div className="absolute inset-0 hero-overlay"></div>
    <div className="absolute inset-0 pattern-dots opacity-30"></div>
    <div className="text-center z-10 animate-fadeScale">
      <h1 className="text-6xl md:text-7xl font-bold mb-6 font-['Playfair_Display'] animate-fadeUp">
        <span className="text-gradient-gold">Authentic</span><br />
        <span className="text-white">Cajun Cuisine</span>
      </h1>
      <p className="text-2xl md:text-3xl mb-8 text-yellow-100 font-light animate-fadeUp tracking-wide">
        Bold Flavors from the Heart of Louisiana
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
    <div className="absolute top-10 left-10 text-6xl animate-float opacity-20">🌶️</div>
    <div className="absolute bottom-10 right-10 text-4xl animate-float opacity-20" style={{animationDelay: '1s'}}>🦞</div>
    <div className="absolute top-1/2 left-5 text-5xl animate-float opacity-20" style={{animationDelay: '2s'}}>🎷</div>
  </div>
);

const HomePage = () => {
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600",
      title: "Authentic Cajun Cuisine",
      description: "Bold Flavors from the Heart of Louisiana"
    },
    {
      url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600",
      title: "Fresh Ingredients",
      description: "Made with Love Daily"
    },
    {
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600",
      title: "Dine with Family & Friends",
      description: "Creating Memories Since 1995"
    }
  ];

  const features = [
    { 
      title: "Bold Flavors", 
      icon: "🌶️", 
      description: "Authentic spices and seasonings that transport you to Louisiana" 
    },
    { 
      title: "Southern Comfort", 
      icon: "🏡", 
      description: "Warm hospitality and recipes passed down through generations" 
    },
    { 
      title: "Family Vibes", 
      icon: "❤️", 
      description: "A welcoming atmosphere where everyone feels at home" 
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      
      {/* Carousel Section */}
      <section className="bg-gradient-to-r from-red-50 via-white to-yellow-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-5xl font-bold text-gray-800 mb-4 font-['Playfair_Display']">Experience Our Kitchen</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">From our kitchen to your table, every dish tells a story of tradition and passion</p>
          </div>
          <div className="animate-fadeInScale">
            <Carousel images={carouselImages} autoPlay={true} interval={4000} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 relative">
        <div className="absolute inset-0 pattern-lines opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-5xl font-bold text-white mb-4 font-['Playfair_Display']">What Makes Us Special</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Three pillars that define our commitment to authentic Cajun cuisine</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <Card key={i} variant="glass" className="text-center p-8 group animate-fadeInScale" style={{animationDelay: `${i * 0.2}s`}}>
                <div className="text-6xl mb-6 animate-float group-hover:scale-110 transition-transform duration-300" style={{animationDelay: `${i * 0.5}s`}}>
                  {feature.icon}
                </div>
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-white mb-4 font-['Playfair_Display']">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-red-50">
        <div className="container mx-auto px-6 text-center animate-fadeInScale">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 font-['Playfair_Display']">Ready for an Authentic Experience?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Join us for a culinary journey through Louisiana's finest flavors</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/order">
              <Button size="xl" className="text-lg px-10">
                🛒 Order Online
              </Button>
            </Link>
            <Link to="/reservations">
              <Button variant="outline" size="xl" className="text-lg px-10">
                📅 Make Reservation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const MenuPage = () => {
  const menu = {
    "🥗 Appetizers": [
      { name: "Cajun Fried Pickles", price: "$8.99", description: "Crispy dill pickles with tangy remoulade" },
      { name: "Boudin Balls", price: "$9.99", description: "Traditional rice & pork sausage, deep fried" },
      { name: "Crawfish Dip", price: "$11.99", description: "Creamy crawfish dip with crispy pita chips" },
      { name: "Fried Okra", price: "$7.99", description: "Golden fried okra with Cajun seasoning" }
    ],
    "🍽️ Main Dishes": [
      { name: "Jambalaya", price: "$16.99", description: "Traditional rice with chicken, sausage & Creole spices" },
      { name: "Seafood Gumbo", price: "$18.99", description: "Rich roux-based stew with shrimp, crab & okra" },
      { name: "Chicken & Sausage Gumbo", price: "$16.99", description: "Hearty gumbo with andouille sausage" },
      { name: "Blackened Catfish", price: "$19.99", description: "Fresh catfish with Cajun spices & dirty rice" },
      { name: "Shrimp Étouffée", price: "$21.99", description: "Succulent shrimp in spicy gravy over rice" },
      { name: "Red Beans & Rice", price: "$14.99", description: "Monday special with andouille sausage" },
      { name: "Po' Boy Sandwich", price: "$13.99", description: "Choice of fried shrimp or oysters" }
    ],
    "🥘 Sides": [
      { name: "Dirty Rice", price: "$5.99", description: "Cajun rice with ground meat & vegetables" },
      { name: "Collard Greens", price: "$5.99", description: "Slow-cooked with smoked ham hock" },
      { name: "Cornbread", price: "$4.99", description: "Sweet & savory homemade cornbread" },
      { name: "Mac & Cheese", price: "$6.99", description: "Creamy three-cheese blend" },
      { name: "Roasted Red Potatoes", price: "$5.99", description: "Herb-seasoned baby potatoes" }
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">Authentic Louisiana cuisine made with love and tradition</p>
          <Button onClick={printMenu} variant="outline" size="lg" className="animate-pulse">
            📄 Download / Print Menu
          </Button>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {Object.entries(menu).map(([section, items], sectionIndex) => (
            <div key={section} className="mb-16">
              <Card variant="gradient" className="animate-fadeInScale" style={{animationDelay: `${sectionIndex * 0.2}s`}}>
                <div className="bg-gradient-cajun text-white p-6 rounded-t-2xl">
                  <h2 className="text-4xl font-bold text-center font-['Playfair_Display']">{section}</h2>
                </div>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {items.map((item, idx) => (
                      <div key={idx} className="group hover:bg-red-50/50 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-red-200">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-700 transition-colors font-['Playfair_Display']">
                            {typeof item === 'string' ? item : item.name}
                          </h3>
                          {item.price && (
                            <span className="text-xl font-bold text-red-700 bg-yellow-100 px-3 py-1 rounded-full">
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
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 font-['Playfair_Display']">🌟 Chef's Note</h3>
              <p className="text-gray-300 leading-relaxed">
                All our dishes are prepared fresh daily using traditional Louisiana recipes. 
                Spice levels can be adjusted upon request. Ask your server about our daily specials!
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
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-red-700">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Bringing the authentic taste of Louisiana to your table since 1995
        </p>
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded by Chef Marie Boudreaux in 1995, our restaurant brings the rich culinary traditions 
            of Louisiana to life. Growing up in the bayous of Lafayette, Chef Marie learned the art of 
            Cajun cooking from her grandmother, who taught her that food is more than sustenance—it's 
            love, community, and heritage.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Every dish we serve honors these traditions, using time-tested recipes passed down through 
            generations. From our perfectly seasoned gumbo to our melt-in-your-mouth étouffée, we stay 
            true to the authentic flavors that make Cajun cuisine unforgettable.
          </p>
        </div>
        <div 
          className="h-80 rounded-lg bg-cover bg-center shadow-lg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800')" }}
        />
      </div>

      {/* Values Section */}
      <div className="bg-red-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 space-y-2">
              <div className="text-4xl text-center">🌶️</div>
              <h3 className="text-xl font-semibold text-center">Authenticity</h3>
              <p className="text-gray-600 text-center">
                Traditional recipes and techniques that honor Cajun heritage
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 space-y-2">
              <div className="text-4xl text-center">❤️</div>
              <h3 className="text-xl font-semibold text-center">Community</h3>
              <p className="text-gray-600 text-center">
                Creating a warm, welcoming space where everyone feels at home
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
              <h3 className="text-xl font-semibold">Chef Marie Boudreaux</h3>
              <p className="text-gray-600">Head Chef & Owner</p>
              <p className="text-sm text-gray-500">30+ years of authentic Cajun cooking</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <div 
              className="h-64 bg-cover bg-center rounded-t-lg"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400')" }}
            />
            <CardContent className="p-6 text-center space-y-2">
              <h3 className="text-xl font-semibold">Chef Antoine Thibodaux</h3>
              <p className="text-gray-600">Sous Chef</p>
              <p className="text-sm text-gray-500">Specializes in seafood and gumbo</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <div 
              className="h-64 bg-cover bg-center rounded-t-lg"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400')" }}
            />
            <CardContent className="p-6 text-center space-y-2">
              <h3 className="text-xl font-semibold">Sarah Landry</h3>
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
    { id: 1, name: "Jambalaya", price: 16.99, category: "Mains", description: "Traditional rice with chicken, sausage & Creole spices" },
    { id: 2, name: "Seafood Gumbo", price: 18.99, category: "Mains", description: "Rich roux-based stew with shrimp, crab & okra" },
    { id: 3, name: "Shrimp Étouffée", price: 21.99, category: "Mains", description: "Succulent shrimp in spicy gravy over rice" },
    { id: 4, name: "Boudin Balls", price: 9.99, category: "Appetizers", description: "Traditional rice & pork sausage, deep fried" },
    { id: 5, name: "Cajun Fried Pickles", price: 8.99, category: "Appetizers", description: "Crispy dill pickles with tangy remoulade" },
    { id: 6, name: "Dirty Rice", price: 5.99, category: "Sides", description: "Cajun rice with ground meat & vegetables" },
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
    alert('Order placed! Thank you for choosing Cajun Cuisine!');
    setCart([]);
    setTotal(0);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
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
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Make a Reservation</h1>
        <p className="text-xl text-gray-600">Book your table for an authentic Cajun dining experience</p>
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
                <span>(504) 555-CAJUN</span>
              </div>
              <div className="flex items-center gap-3">
                <span>📍</span>
                <span>123 Bourbon Street<br />New Orleans, LA 70116</span>
              </div>
              <div className="flex items-center gap-3">
                <span>✉️</span>
                <span>info@cajuncuisine.com</span>
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
    <div className="max-w-6xl mx-auto p-6 space-y-12">
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
                  <p className="text-gray-600">123 Bourbon Street<br />New Orleans, LA 70116</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">(504) 555-CAJUN</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">info@cajuncuisine.com</p>
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
    <div className="max-w-md mx-auto p-6 mt-16">
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