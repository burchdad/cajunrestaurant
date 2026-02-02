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
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto p-6 pt-24">
        <h1 className="text-4xl font-bold text-center mb-8">Make a Reservation</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Reservation Form */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">Book Your Table</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                    Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
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
              
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Guests *
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
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
              
              <div>
                <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                  Special Requests
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Special occasions, dietary restrictions, seating preferences..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                Submit Reservation Request
              </Button>
            </form>
          </Card>
          
          {/* Restaurant Information */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Restaurant Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Thursday:</span>
                  <span>5:00 PM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday - Saturday:</span>
                  <span>5:00 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>4:00 PM - 9:00 PM</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Reservation Policy</h3>
              <ul className="space-y-2 text-sm">
                <li>• Reservations are recommended for parties of 2 or more</li>
                <li>• We hold reservations for 15 minutes past the reserved time</li>
                <li>• For parties of 8 or more, please call us directly</li>
                <li>• Cancellations should be made at least 2 hours in advance</li>
                <li>• Special dietary requirements can be accommodated with advance notice</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-2">
                <p><strong>Phone:</strong> (504) 555-0123</p>
                <p><strong>Email:</strong> reservations@blueanchorseafood.com</p>
                <p><strong>Address:</strong> 123 Bourbon Street, New Orleans, LA 70116</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationsPage;