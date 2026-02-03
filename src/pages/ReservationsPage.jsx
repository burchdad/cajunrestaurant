import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import "./ReservationsPage.css";

const ReservationsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    specialRequests: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Reservation request submitted! We will call you to confirm within 24 hours.');
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      specialRequests: ""
    });
  };

  return (
    <div className="reservations-page">
      <div className="reservations-container">
        <h1 className="reservations-title">Make a Reservation</h1>
        
        <div className="reservations-grid">
          {/* Reservation Form */}
          <Card className="reservation-form-card">
            <h2 className="form-title">Book Your Table</h2>
            <form onSubmit={handleSubmit} className="reservation-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-grid form-grid-cols-2">
                <div className="form-group">
                  <label htmlFor="date" className="form-label">
                    Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="time" className="form-label">
                    Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="form-input"
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
                    <option value="9:00 PM">9:00 PM</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="guests" className="form-label">
                  Number of Guests *
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                >
                  <option value="">Select Number of Guests</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7">7 Guests</option>
                  <option value="8">8 Guests</option>
                  <option value="8+">8+ Guests</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="specialRequests" className="form-label">
                  Special Requests
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Special occasions, dietary restrictions, seating preferences..."
                  className="form-input"
                />
              </div>
              
              <Button type="submit" size="lg" className="submit-btn">
                Submit Reservation Request
              </Button>
            </form>
          </Card>
          
          {/* Restaurant Information */}
          <div className="info-section">
            <Card className="info-card">
              <h3 className="info-card-title">Restaurant Hours</h3>
              <div className="hours-list">
                <div className="hours-item">
                  <span>Monday - Thursday:</span>
                  <span>5:00 PM - 10:00 PM</span>
                </div>
                <div className="hours-item">
                  <span>Friday - Saturday:</span>
                  <span>5:00 PM - 11:00 PM</span>
                </div>
                <div className="hours-item">
                  <span>Sunday:</span>
                  <span>4:00 PM - 9:00 PM</span>
                </div>
              </div>
            </Card>
            
            <Card className="info-card">
              <h3 className="info-card-title">Reservation Policy</h3>
              <ul className="policy-list">
                <li>• Reservations are recommended for parties of 2 or more</li>
                <li>• We hold reservations for 15 minutes past the reserved time</li>
                <li>• For parties of 8 or more, please call us directly</li>
                <li>• Cancellations should be made at least 2 hours in advance</li>
                <li>• Special dietary requirements can be accommodated with advance notice</li>
              </ul>
            </Card>
            
            <Card className="info-card">
              <h3 className="info-card-title">Contact Information</h3>
              <div className="contact-info">
                <p className="contact-item"><strong>Phone:</strong> (504) 555-0123</p>
                <p className="contact-item"><strong>Email:</strong> reservations@blueanchorseafood.com</p>
                <p className="contact-item"><strong>Address:</strong> 123 Bourbon Street, New Orleans, LA 70116</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationsPage;