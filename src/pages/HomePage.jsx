import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import Carousel from "../components/Carousel";
import "./HomePage.css";

const Hero = () => (
  <section className="hero-video">
    <video autoPlay muted loop playsInline className="video-bg">
      <source src="/videos/hero-seafood.mp4" type="video/mp4" />
    </video>
    <div className="hero-overlay" />
    <div className="hero-content">
      <h1 className="hero-title">
        <span className="brand-blue">Blue Anchor</span><br />
        <span className="brand-yellow">Seafood</span>
      </h1>
      <p className="hero-subtitle">
        Fresh Ocean to Table Excellence Since 1991
      </p>
      <div className="hero-buttons">
        <Link to="/menu">
          <Button size="lg" className="arc-button arc-button-blue">
            View Menu
          </Button>
        </Link>
        <Link to="/reservations">
          <Button size="lg" className="arc-button arc-button-orange">
            Make Reservation
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

const HomePage = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [cateringStep, setCateringStep] = useState(1); // 1: Package Selection, 2: Date Selection, 3: Checkout
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [guestCount, setGuestCount] = useState(25);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

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

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
    setCateringStep(1);
    setSelectedPackage(null);
    setGuestCount(25);
    setSelectedDate('');
    setSelectedTime('');
  };

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    setCateringStep(2);
  };

  const handleDateContinue = () => {
    if (selectedDate && selectedTime) {
      setCateringStep(3);
    }
  };

  const calculatePrice = (basePrice, guestCount, packageServes) => {
    const basePeople = parseInt(packageServes.split('-')[0]);
    const multiplier = Math.ceil(guestCount / basePeople);
    return parseInt(basePrice.replace('$', '').replace(',', '')) * multiplier;
  };

  // Live music schedule data
  const liveSchedule = [
    { date: '2026-02-07', day: 'Friday', time: '7:00 PM - 10:00 PM', artist: 'Jazz Trio featuring Mike Johnson', genre: 'Traditional Jazz' },
    { date: '2026-02-08', day: 'Saturday', time: '8:00 PM - 11:00 PM', artist: 'Blue Note Blues Band', genre: 'Blues & Soul' },
    { date: '2026-02-14', day: 'Friday', time: '7:00 PM - 10:00 PM', artist: 'New Orleans Collective', genre: 'Cajun Folk' },
    { date: '2026-02-15', day: 'Saturday', time: '8:00 PM - 11:00 PM', artist: 'Sarah Williams Quartet', genre: 'Contemporary Jazz' },
    { date: '2026-02-21', day: 'Friday', time: '7:00 PM - 10:00 PM', artist: 'Gulf Coast Rhythm', genre: 'R&B & Blues' },
    { date: '2026-02-22', day: 'Saturday', time: '8:00 PM - 11:00 PM', artist: 'Mardi Gras All-Stars', genre: 'Traditional New Orleans' }
  ];

  // Catering packages data
  const cateringPackages = [
    {
      id: 1,
      name: 'Seafood Platter Special',
      serves: '25-30',
      basePrice: '$450',
      pricePerPerson: 18,
      items: ['Coconut Shrimp (50 pieces)', 'Crab Cakes (25 pieces)', 'Calamari Rings (3 lbs)', 'Cocktail Sauce & Aioli']
    },
    {
      id: 2,
      name: 'Gulf Coast Feast',
      serves: '50-60',
      basePrice: '$850',
      pricePerPerson: 17,
      items: ['Grilled Salmon (12 fillets)', 'Blackened Mahi Mahi (10 fillets)', 'Shrimp Scampi (5 lbs)', 'Garlic Mashed Potatoes', 'Grilled Asparagus']
    },
    {
      id: 3,
      name: 'Corporate Lunch Package',
      serves: '15-20',
      basePrice: '$275',
      pricePerPerson: 18,
      items: ['Fish & Chips (20 servings)', 'Clam Chowder (2 gallons)', 'Coleslaw (large)', 'Sweet Potato Fries']
    },
    {
      id: 4,
      name: 'Wedding Reception Package',
      serves: '100-120',
      basePrice: '$1650',
      pricePerPerson: 16,
      items: ['Lobster Tail Dinner (60 portions)', 'Seafood Paella (large)', 'Mixed Appetizer Platter', 'Dessert Selection']
    }
  ];

  return (
    <div className="homepage-wrapper">
      <Hero />

      <section className="featured-section">
        <div className="page-container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              Discover what sets Blue Anchor Seafood apart from the rest
            </p>
          </div>
          <Carousel images={carouselImages} autoPlay={true} interval={5000} />
        </div>
      </section>

      <section className="about-preview">
        <div className="page-container page-container-centered">
          <h2 className="section-title">Our Story</h2>
          <div className="story-content">
            <p className="section-paragraph">
              For over three decades, Blue Anchor Seafood has been serving the finest fresh seafood 
              in the heart of New Orleans. Our commitment to quality and authentic Creole flavors 
              has made us a beloved destination for locals and visitors alike.
            </p>
            <p className="section-paragraph">
              From our signature crab cakes to our daily fresh catches, every dish is prepared with 
              passion and the highest quality ingredients sourced directly from Gulf Coast waters.
            </p>
            <Link to="/about">
              <Button size="lg" className="btn-primary">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="services-container">
          <div className="services-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Beyond exceptional seafood, we offer experiences that make every visit memorable
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎵</div>
              <h3 className="service-title">Live Music</h3>
              <p className="service-text">
                Join us for live performances every weekend featuring local jazz and blues artists.
              </p>
              <Button variant="outline" className="service-button" onClick={() => openModal('liveMusic')}>View Schedule</Button>
            </div>
            <div className="service-card">
              <div className="service-icon">🎉</div>
              <h3 className="service-title">Private Events</h3>
              <p className="service-text">
                Host your special occasion with us. We'll take care of everything while you enjoy your guests.
              </p>
              <Button variant="outline" className="service-button" onClick={() => openModal('privateEvents')}>Book Event</Button>
            </div>
            <div className="service-card">
              <div className="service-icon">🍽️</div>
              <h3 className="service-title">Catering</h3>
              <p className="service-text">
                Bring the taste of New Orleans to your event with our full-service catering options.
              </p>
              <Button variant="outline" className="service-button" onClick={() => openModal('catering')}>Order Catering</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <h2 className="section-title">What Our Guests Say</h2>
            <p className="section-subtitle">
              Don't just take our word for it - hear from our satisfied guests
            </p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <blockquote className="testimonial-quote">
                "The crab cakes were absolutely amazing! The grilled salmon was perfection. 
                Best seafood restaurant in New Orleans - we can't wait to come back!"
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">SM</div>
                <cite className="author-name">Sarah M.</cite>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <blockquote className="testimonial-quote">
                "Incredible lobster bisque and the freshest seafood I've had. 
                The staff treats you like family. Blue Anchor is our new favorite spot!"
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">MT</div>
                <cite className="author-name">Mike T.</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Components */}
      {activeModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            
            {activeModal === 'liveMusic' && (
              <div className="live-music-modal">
                <h2 className="modal-title">🎵 Live Music Schedule</h2>
                <p className="modal-subtitle">Join us for amazing live performances every weekend!</p>
                <div className="schedule-grid">
                  {liveSchedule.map((show, index) => (
                    <div key={index} className="schedule-item">
                      <div className="schedule-date">
                        <div className="date-day">{show.day}</div>
                        <div className="date-number">{new Date(show.date).getDate()}</div>
                      </div>
                      <div className="schedule-details">
                        <h4>{show.artist}</h4>
                        <p className="genre">{show.genre}</p>
                        <p className="time">{show.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="modal-footer">
                  <p>Reserve your table to guarantee seating!</p>
                  <Link to="/reservations">
                    <Button className="btn-primary">Make Reservation</Button>
                  </Link>
                </div>
              </div>
            )}

            {activeModal === 'privateEvents' && (
              <div className="private-events-modal">
                <h2 className="modal-title">🎉 Book Private Event</h2>
                <p className="modal-subtitle">Let us make your special occasion unforgettable</p>
                <form className="event-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Event Date</label>
                      <input type="date" className="form-input" required />
                    </div>
                    <div className="form-group">
                      <label>Event Time</label>
                      <input type="time" className="form-input" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Number of Guests</label>
                      <select className="form-input">
                        <option>10-20 people</option>
                        <option>20-50 people</option>
                        <option>50-100 people</option>
                        <option>100+ people</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Event Type</label>
                      <select className="form-input">
                        <option>Birthday Party</option>
                        <option>Wedding Reception</option>
                        <option>Corporate Event</option>
                        <option>Anniversary</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <label>Contact Information</label>
                    <input type="email" className="form-input" placeholder="Email or Phone Number" required />
                  </div>
                  <div className="form-group">
                    <label>Special Requests</label>
                    <textarea className="form-textarea" placeholder="Any special menu requests, decorations, or accommodations?"></textarea>
                  </div>
                  <Button type="submit" className="btn-primary form-submit">Submit Event Request</Button>
                </form>
              </div>
            )}

            {activeModal === 'catering' && (
              <div className="catering-modal">
                {/* Step 1: Package Selection */}
                {cateringStep === 1 && (
                  <>
                    <h2 className="modal-title">🍽️ Catering Packages</h2>
                    <p className="modal-subtitle">Select your package and customize for your event size</p>
                    
                    <div className="guest-selector">
                      <label htmlFor="guestCount">Number of Guests:</label>
                      <select 
                        id="guestCount" 
                        value={guestCount} 
                        onChange={(e) => setGuestCount(parseInt(e.target.value))}
                        className="guest-dropdown"
                      >
                        {Array.from({length: 20}, (_, i) => (i + 1) * 5 + 10).map(num => (
                          <option key={num} value={num}>{num} people</option>
                        ))}
                        <option value={125}>125 people</option>
                        <option value={150}>150 people</option>
                        <option value={200}>200+ people</option>
                      </select>
                    </div>

                    <div className="catering-packages">
                      {cateringPackages.map((pkg) => {
                        const calculatedPrice = guestCount * pkg.pricePerPerson;
                        return (
                          <div key={pkg.id} className="package-card">
                            <h3 className="package-name">{pkg.name}</h3>
                            <div className="package-header">
                              <span className="package-serves">Originally serves {pkg.serves} people</span>
                              <span className="package-price">${calculatedPrice}</span>
                            </div>
                            <div className="adjusted-serving">
                              <small>Adjusted for {guestCount} guests</small>
                            </div>
                            <ul className="package-items">
                              {pkg.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                              ))}
                            </ul>
                            <Button 
                              className="btn-primary package-button" 
                              onClick={() => handlePackageSelect(pkg)}
                            >
                              Select This Package
                            </Button>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}

                {/* Step 2: Date Selection */}
                {cateringStep === 2 && selectedPackage && (
                  <>
                    <h2 className="modal-title">📅 Select Event Date & Time</h2>
                    <div className="selected-package-summary">
                      <h3>{selectedPackage.name}</h3>
                      <p>{guestCount} guests - ${guestCount * selectedPackage.pricePerPerson}</p>
                    </div>
                    
                    <div className="date-selection">
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="eventDate">Event Date:</label>
                          <input 
                            type="date" 
                            id="eventDate"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            className="form-input"
                            required 
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="eventTime">Event Time:</label>
                          <select 
                            id="eventTime"
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className="form-input"
                            required
                          >
                            <option value="">Select Time</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="13:00">1:00 PM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="17:00">5:00 PM</option>
                            <option value="18:00">6:00 PM</option>
                            <option value="19:00">7:00 PM</option>
                            <option value="20:00">8:00 PM</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="date-buttons">
                        <Button 
                          variant="outline" 
                          onClick={() => setCateringStep(1)}
                        >
                          ← Back to Packages
                        </Button>
                        <Button 
                          className="btn-primary" 
                          onClick={handleDateContinue}
                          disabled={!selectedDate || !selectedTime}
                        >
                          Continue to Checkout →
                        </Button>
                      </div>
                    </div>
                  </>
                )}

                {/* Step 3: Checkout Summary */}
                {cateringStep === 3 && selectedPackage && (
                  <>
                    <h2 className="modal-title">🛒 Order Summary</h2>
                    <div className="checkout-summary">
                      <div className="order-details">
                        <h3>Order Details</h3>
                        <div className="detail-row">
                          <span>Package:</span>
                          <span>{selectedPackage.name}</span>
                        </div>
                        <div className="detail-row">
                          <span>Guests:</span>
                          <span>{guestCount} people</span>
                        </div>
                        <div className="detail-row">
                          <span>Date:</span>
                          <span>{new Date(selectedDate).toLocaleDateString()}</span>
                        </div>
                        <div className="detail-row">
                          <span>Time:</span>
                          <span>{selectedTime.padStart(2, '0')}:00</span>
                        </div>
                        <div className="detail-row total-row">
                          <span><strong>Total:</strong></span>
                          <span><strong>${guestCount * selectedPackage.pricePerPerson}</strong></span>
                        </div>
                      </div>
                      
                      <div className="contact-info">
                        <h3>Contact Information</h3>
                        <div className="form-group">
                          <input type="text" className="form-input" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                          <input type="email" className="form-input" placeholder="Email Address" required />
                        </div>
                        <div className="form-group">
                          <input type="tel" className="form-input" placeholder="Phone Number" required />
                        </div>
                        <div className="form-group">
                          <textarea className="form-textarea" placeholder="Special requests or dietary restrictions"></textarea>
                        </div>
                      </div>
                      
                      <div className="checkout-buttons">
                        <Button 
                          variant="outline" 
                          onClick={() => setCateringStep(2)}
                        >
                          ← Back to Date
                        </Button>
                        <Button className="btn-primary checkout-btn">
                          Complete Order
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
