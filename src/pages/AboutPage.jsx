import React from "react";
import { Card, CardContent } from "../components/ui/card";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section with Background */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Our Story</h1>
          <p className="hero-subtitle">
            Bringing the freshest catch from sea to table since 1995
          </p>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>

      <div className="content-container">
        {/* Story Section */}
        <div className="story-section">
          <div className="section-container">
            <div className="story-content">
              <div className="story-text-content">
                <h2 className="section-title">
                  <span className="title-icon">🐟</span>
                  Our Legacy
                </h2>
                <div className="story-paragraphs">
                  <p className="story-paragraph">
                    Founded by Captain Mike Anderson in 1995, our restaurant brings the finest ocean bounty 
                    directly to your table. Growing up in a fishing family along the coast, Captain Mike learned 
                    the art of selecting the freshest catch and preparing it with respect for the sea's gifts.
                  </p>
                  <p className="story-paragraph">
                    Every dish we serve honors the maritime traditions passed down through generations of fishermen. 
                    From our perfectly grilled salmon to our signature seafood paella, we stay true to the flavors 
                    that celebrate the ocean's abundance.
                  </p>
                </div>
                <div className="story-stats">
                  <div className="stat-item">
                    <span className="stat-number">30+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">500K+</span>
                    <span className="stat-label">Happy Customers</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Fresh Daily</span>
                  </div>
                </div>
              </div>
              <div className="story-image-container">
                <div className="story-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800" 
                    alt="Captain Mike Anderson"
                    className="story-image"
                  />
                  <div className="image-overlay">
                    <p className="image-caption">Captain Mike Anderson - Founder & Head Chef</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <div className="section-container">
            <h2 className="section-title centered">
              <span className="title-icon">⚓</span>
              Our Values
            </h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon freshness-icon">🐟</div>
                <h3 className="value-title">Freshness</h3>
                <p className="value-description">
                  Daily sourced seafood from trusted local fishermen and sustainable suppliers
                </p>
                <div className="value-accent"></div>
              </div>
              <div className="value-card">
                <div className="value-icon community-icon">🤝</div>
                <h3 className="value-title">Community</h3>
                <p className="value-description">
                  Creating a welcoming harbor where everyone feels at home
                </p>
                <div className="value-accent"></div>
              </div>
              <div className="value-card">
                <div className="value-icon quality-icon">✨</div>
                <h3 className="value-title">Quality</h3>
                <p className="value-description">
                  Fresh, locally-sourced ingredients prepared with care daily
                </p>
                <div className="value-accent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <div className="section-container">
            <h2 className="section-title centered">
              <span className="title-icon">👥</span>
              Meet Our Crew
            </h2>
            <div className="team-grid">
              <div className="team-card">
                <div className="team-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400" 
                    alt="Captain Mike Anderson"
                    className="team-image"
                  />
                  <div className="team-overlay">
                    <div className="team-social">
                      <span>🏆</span>
                      <span>⚓</span>
                      <span>🐟</span>
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <h3 className="team-name">Captain Mike Anderson</h3>
                  <p className="team-role">Head Chef & Owner</p>
                  <p className="team-experience">30+ years of seafood expertise</p>
                  <div className="team-skills">
                    <span className="skill-tag">Master Chef</span>
                    <span className="skill-tag">Fishing Expert</span>
                  </div>
                </div>
              </div>
              
              <div className="team-card">
                <div className="team-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400" 
                    alt="Chef Elena Rodriguez"
                    className="team-image"
                  />
                  <div className="team-overlay">
                    <div className="team-social">
                      <span>👩‍🍳</span>
                      <span>🦐</span>
                      <span>🌟</span>
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <h3 className="team-name">Chef Elena Rodriguez</h3>
                  <p className="team-role">Sous Chef</p>
                  <p className="team-experience">Specializes in fresh fish and shellfish</p>
                  <div className="team-skills">
                    <span className="skill-tag">Seafood Specialist</span>
                    <span className="skill-tag">Culinary Artist</span>
                  </div>
                </div>
              </div>
              
              <div className="team-card">
                <div className="team-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400" 
                    alt="Marina Bay"
                    className="team-image"
                  />
                  <div className="team-overlay">
                    <div className="team-social">
                      <span>💼</span>
                      <span>🤝</span>
                      <span>💙</span>
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <h3 className="team-name">Marina Bay</h3>
                  <p className="team-role">Restaurant Manager</p>
                  <p className="team-experience">Ensuring every guest feels like family</p>
                  <div className="team-skills">
                    <span className="skill-tag">Guest Relations</span>
                    <span className="skill-tag">Operations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Experience Our Story?</h2>
            <p className="cta-description">
              Join us for an unforgettable dining experience where every dish tells the story of the sea
            </p>
            <div className="cta-buttons">
              <a href="/reservations" className="cta-btn primary">
                Make a Reservation
              </a>
              <a href="/menu" className="cta-btn secondary">
                View Our Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;