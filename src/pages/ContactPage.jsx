import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
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
    alert('Message sent successfully! We will get back to you within 24 hours.');
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto p-6 pt-24">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
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
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select Subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Reservation">Reservation</option>
                  <option value="Private Events">Private Events</option>
                  <option value="Catering">Catering</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Employment">Employment</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Restaurant Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700">Address</h4>
                  <p>123 Bourbon Street<br />New Orleans, LA 70116</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700">Phone</h4>
                  <p>(504) 555-0123</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700">Email</h4>
                  <p>info@blueanchorseafood.com</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700">Hours</h4>
                  <div className="text-sm">
                    <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                    <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                    <p>Sunday: 4:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="space-y-2">
                <a href="#" className="block text-blue-600 hover:underline">Facebook</a>
                <a href="#" className="block text-blue-600 hover:underline">Instagram</a>
                <a href="#" className="block text-blue-600 hover:underline">Twitter</a>
                <a href="#" className="block text-blue-600 hover:underline">Yelp</a>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Directions</h3>
              <div className="space-y-2 text-sm">
                <p>Located in the heart of the French Quarter, we're just a short walk from Jackson Square.</p>
                <p><strong>Parking:</strong> Street parking available on surrounding streets. Several parking garages within 2 blocks.</p>
                <p><strong>Public Transit:</strong> Streetcar stops at Canal & Bourbon, 2 blocks away.</p>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Find Us</h2>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Interactive Map - 123 Bourbon Street, New Orleans, LA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;