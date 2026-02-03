import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import "./StaffLoginPage.css";

const StaffLoginPage = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Simple authentication (in production, use proper authentication)
  const STAFF_CREDENTIALS = {
    username: "staff",
    password: "blue2026"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (
        credentials.username === STAFF_CREDENTIALS.username &&
        credentials.password === STAFF_CREDENTIALS.password
      ) {
        // Store auth token in localStorage
        localStorage.setItem("staff_authenticated", "true");
        localStorage.setItem("staff_login_time", Date.now().toString());
        navigate("/staff/dashboard");
      } else {
        setError("Invalid username or password");
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="staff-login-page">
      <div className="login-container">
        <Card className="login-card">
          <CardContent className="login-content">
            <div className="login-header">
              <img 
                src="/photos/logo/main_logo.png" 
                alt="Blue Anchor Seafood" 
                className="login-logo"
              />
              <h1 className="login-title">Staff Dashboard</h1>
              <p className="login-subtitle">Menu Management System</p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  className="form-input"
                  required
                  autoComplete="username"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  className="form-input"
                  required
                  autoComplete="current-password"
                />
              </div>

              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}

              <Button 
                type="submit" 
                className="login-button" 
                disabled={isLoading}
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>

            <div className="login-info">
              <p className="info-text">
                💡 <strong>Demo Credentials:</strong><br/>
                Username: <code>staff</code><br/>
                Password: <code>blue2026</code>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StaffLoginPage;