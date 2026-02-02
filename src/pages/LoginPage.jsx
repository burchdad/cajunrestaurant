import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import "./LoginPage.css";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: ""
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
    if (isLogin) {
      alert('Login successful! Welcome back to Blue Anchor Seafood!');
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      alert('Account created successfully! Welcome to Blue Anchor Seafood!');
    }
    // Reset form
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phone: ""
    });
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phone: ""
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto p-6 pt-24">
        <div className="max-w-md mx-auto">
          <Card className="p-8">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold mb-2">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h1>
              <p className="text-gray-600">
                {isLogin 
                  ? "Sign in to your Blue Anchor Seafood account" 
                  : "Join the Blue Anchor Seafood family"
                }
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required={!isLogin}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required={!isLogin}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
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
                </>
              )}
              
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
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  minLength={8}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {!isLogin && (
                  <p className="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
                )}
              </div>
              
              {!isLogin && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required={!isLogin}
                    minLength={8}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              )}
              
              <Button type="submit" size="lg" className="w-full">
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
            </form>
            
            {isLogin && (
              <div className="text-center mt-4">
                <a href="#" className="text-sm text-red-600 hover:underline">
                  Forgot your password?
                </a>
              </div>
            )}
            
            <div className="text-center mt-6 pt-6 border-t">
              <p className="text-sm text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  type="button"
                  onClick={toggleMode}
                  className="text-red-600 hover:underline ml-1 font-medium"
                >
                  {isLogin ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </div>
          </Card>
          
          {/* Benefits Card */}
          <Card className="p-6 mt-6">
            <h3 className="text-lg font-bold mb-4">Member Benefits</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="text-red-600 mr-2">✓</span>
                Exclusive access to online ordering
              </li>
              <li className="flex items-center">
                <span className="text-red-600 mr-2">✓</span>
                Priority reservations
              </li>
              <li className="flex items-center">
                <span className="text-red-600 mr-2">✓</span>
                Special member pricing and promotions
              </li>
              <li className="flex items-center">
                <span className="text-red-600 mr-2">✓</span>
                Birthday and anniversary rewards
              </li>
              <li className="flex items-center">
                <span className="text-red-600 mr-2">✓</span>
                Newsletter with seasonal menu updates
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;