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
    <div className="login-page">
      <div className="login-container">
        <div className="login-form-wrapper">
          <Card className="login-card">
            <div className="login-header">
              <h1 className="login-title">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h1>
              <p className="login-subtitle">
                {isLogin 
                  ? "Sign in to your Blue Anchor Seafood account" 
                  : "Join the Blue Anchor Seafood family"
                }
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="login-form">
              {!isLogin && (
                <>
                  <div className="name-fields-grid">
                    <div className="form-group">
                      <label htmlFor="firstName" className="form-label">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required={!isLogin}
                        className="form-input"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="lastName" className="form-label">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required={!isLogin}
                        className="form-input"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </>
              )}
              
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
                <label htmlFor="password" className="form-label">
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
                  className="form-input"
                />
                {!isLogin && (
                  <p className="password-hint">Minimum 8 characters</p>
                )}
              </div>
              
              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="confirmPassword" className="form-label">
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
                    className="form-input"
                  />
                </div>
              )}
              
              <Button type="submit" size="lg" className="submit-btn">
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
            </form>
            
            {isLogin && (
              <div className="forgot-password-section">
                <a href="#" className="forgot-password-link">
                  Forgot your password?
                </a>
              </div>
            )}
            
            <div className="toggle-mode-section">
              <p className="toggle-text">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  type="button"
                  onClick={toggleMode}
                  className="toggle-button"
                >
                  {isLogin ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </div>
          </Card>
          
          {/* Benefits Card */}
          <Card className="benefits-card">
            <h3 className="benefits-title">Member Benefits</h3>
            <ul className="benefits-list">
              <li className="benefit-item">
                <span className="benefit-check">✓</span>
                Exclusive access to online ordering
              </li>
              <li className="benefit-item">
                <span className="benefit-check">✓</span>
                Priority reservations
              </li>
              <li className="benefit-item">
                <span className="benefit-check">✓</span>
                Special member pricing and promotions
              </li>
              <li className="benefit-item">
                <span className="benefit-check">✓</span>
                Birthday and anniversary rewards
              </li>
              <li className="benefit-item">
                <span className="benefit-check">✓</span>
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