import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import Carousel from "../components/Carousel";
import "./HomePage.css";

const Hero = () => (
  <section 
    className="hero-section relative min-h-screen bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
  >
    <div className="absolute inset-0 bg-black/60"></div>
    <div className="absolute inset-0 pattern-dots opacity-20"></div>
    
    <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
      <h1 className="hero-title text-6xl md:text-8xl font-bold mb-6 tracking-tight">
        <span className="text-blue-300">Blue Anchor</span><br />
        <span className="text-yellow-400">Seafood</span>
      </h1>
      
      <p className="hero-subtitle text-xl md:text-3xl mb-8 text-blue-100 font-light leading-relaxed">
        Fresh Ocean to Table Excellence Since 1991
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link to="/menu">
          <Button 
            size="lg" 
            className="arc-button arc-button-blue text-white font-bold px-8 py-4 rounded-full w-48"
          >
            🍽️ View Menu
          </Button>
        </Link>
        <Link to="/reservations">
          <Button 
            size="lg" 
            className="arc-button arc-button-orange text-white font-bold px-8 py-4 rounded-full w-48"
          >
            📅 Make Reservation
          </Button>
        </Link>
      </div>
    </div>

    <div className="floating-element absolute top-20 left-10 text-6xl opacity-20">🦈</div>
    <div className="floating-element absolute bottom-20 right-10 text-5xl opacity-20" style={{animationDelay: '1s'}}>🦞</div>
    <div className="floating-element absolute top-1/2 left-8 text-4xl opacity-20" style={{animationDelay: '2s'}}>⚓</div>
  </section>
);

const HomePage = () => {
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600",
      title: "Fresh Ocean Seafood",
      description: "Sourced Daily from Gulf Waters"
    },
    {
      url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1600", 
      title: "Expert Cajun Preparation",
      description: "Crafted by Master Chefs"
    },
    {
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600",
      title: "New Orleans Atmosphere", 
      description: "Creating Memories Since 1991"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Hero />

      <section className="featured-section py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title text-4xl font-bold text-gray-800 mb-4">
              Featured Dishes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From our kitchen to your table, every dish celebrates the bounty of the Gulf Coast
            </p>
          </div>
          <Carousel images={carouselImages} autoPlay={true} interval={5000} />
        </div>
      </section>

      <section className="about-preview py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="section-title text-4xl font-bold mb-8 text-gray-800">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              For over three decades, Blue Anchor Seafood has been serving the finest fresh seafood 
              in the heart of New Orleans. Our commitment to quality and authentic Creole flavors 
              has made us a beloved destination for locals and visitors alike.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From our signature crab cakes to our daily fresh catches, every dish is prepared with 
              passion and the highest quality ingredients sourced directly from Gulf Coast waters.
            </p>
            <Link to="/about">
              <Button size="lg" className="bg-red-700 hover:bg-red-800 text-white px-8 py-3">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-4xl font-bold text-center mb-12 text-gray-800">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-bold mb-3">Live Music</h3>
              <p className="text-gray-600 mb-4">
                Join us for live performances every weekend featuring local jazz and blues artists.
              </p>
              <Button variant="outline">View Schedule</Button>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-bold mb-3">Private Events</h3>
              <p className="text-gray-600 mb-4">
                Host your special occasion with us. We'll take care of everything while you enjoy your guests.
              </p>
              <Link to="/reservations">
                <Button variant="outline">Book Event</Button>
              </Link>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-bold mb-3">Catering</h3>
              <p className="text-gray-600 mb-4">
                Bring the taste of New Orleans to your event with our full-service catering options.
              </p>
              <Link to="/contact">
                <Button variant="outline">Order Catering</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-4xl font-bold text-center mb-12 text-gray-800">Visit Us</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Location & Hours</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-700">Address</h4>
                  <p className="text-gray-600">123 Bourbon Street<br />New Orleans, LA 70116</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Phone</h4>
                  <p className="text-gray-600">(504) 555-0123</p>
                </div>
              </div>
              <div className="space-y-2 text-gray-600 mb-6">
                <p><strong>Monday - Thursday:</strong> 5:00 PM - 10:00 PM</p>
                <p><strong>Friday - Saturday:</strong> 5:00 PM - 11:00 PM</p>
                <p><strong>Sunday:</strong> 4:00 PM - 9:00 PM</p>
              </div>
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get Directions
                </Button>
              </Link>
            </div>
            <div className="location-map-placeholder h-80 rounded-lg flex items-center justify-center">
              <p className="text-gray-600 font-medium">Restaurant Location Map</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-4xl font-bold text-center mb-12 text-gray-800">
            What Our Guests Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-lg">★★★★★</div>
              </div>
              <blockquote className="text-gray-600 italic mb-4">
                "The crab cakes were absolutely amazing! The grilled salmon was perfection. 
                Best seafood restaurant in New Orleans - we can't wait to come back!"
              </blockquote>
              <cite className="text-gray-800 font-semibold">- Sarah M.</cite>
            </Card>
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-lg">★★★★★</div>
              </div>
              <blockquote className="text-gray-600 italic mb-4">
                "Incredible lobster bisque and the freshest seafood I've had. 
                The staff treats you like family. Blue Anchor is our new favorite spot!"
              </blockquote>
              <cite className="text-gray-800 font-semibold">- Mike T.</cite>
            </Card>
          </div>
        </div>
      </section>

      <section className="cta-section py-16 text-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">Ready to Dine With Us?</h2>
          <p className="text-xl mb-8">Experience the finest seafood New Orleans has to offer</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/reservations">
              <Button size="lg" className="bg-white text-red-700 hover:bg-gray-100 font-bold px-8 py-3">
                Make Reservation
              </Button>
            </Link>
            <Link to="/order">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3">
                Order Online
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
