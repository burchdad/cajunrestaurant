import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import "./CareersPage.css";

const CareersPage = () => {
  const [selectedPosition, setSelectedPosition] = useState("");
  const [applicationData, setApplicationData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    position: "",
    experience: "",
    availability: {
      monday: { available: false, start: "", end: "" },
      tuesday: { available: false, start: "", end: "" },
      wednesday: { available: false, start: "", end: "" },
      thursday: { available: false, start: "", end: "" },
      friday: { available: false, start: "", end: "" },
      saturday: { available: false, start: "", end: "" },
      sunday: { available: false, start: "", end: "" }
    },
    resumeFile: null,
    coverLetter: "",
    references: [
      { name: "", phone: "", relationship: "" },
      { name: "", phone: "", relationship: "" },
      { name: "", phone: "", relationship: "" }
    ]
  });
  const [currentStep, setCurrentStep] = useState("positions"); // positions, application, review, submitted
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availablePositions = [
    {
      id: "server",
      title: "Server",
      department: "Front of House",
      type: "Part-time / Full-time",
      description: "Provide exceptional dining experiences to our guests. Take orders, serve food, and ensure customer satisfaction.",
      requirements: [
        "Previous restaurant experience preferred",
        "Excellent communication skills",
        "Ability to work in fast-paced environment",
        "Must be 18+ years old",
        "Weekend availability required"
      ],
      hourlyWage: "$15-18/hour plus tips"
    },
    {
      id: "bartender",
      title: "Bartender",
      department: "Bar",
      type: "Part-time / Full-time",
      description: "Craft cocktails and provide friendly service at our full-service bar. Knowledge of wine, beer, and spirits required.",
      requirements: [
        "2+ years bartending experience",
        "Knowledge of classic cocktails",
        "TIPS certification required",
        "Must be 21+ years old",
        "Evening and weekend availability"
      ],
      hourlyWage: "$16-20/hour plus tips"
    },
    {
      id: "cook",
      title: "Line Cook",
      department: "Kitchen",
      type: "Full-time",
      description: "Prepare high-quality seafood dishes in our fast-paced kitchen. Experience with seafood preparation preferred.",
      requirements: [
        "2+ years cooking experience",
        "Knowledge of food safety protocols",
        "Ability to work under pressure",
        "Seafood preparation experience preferred",
        "Morning and evening shifts available"
      ],
      hourlyWage: "$17-22/hour"
    },
    {
      id: "host",
      title: "Host/Hostess",
      department: "Front of House",
      type: "Part-time",
      description: "Welcome guests and manage seating arrangements. First impression of our restaurant experience.",
      requirements: [
        "Customer service experience preferred",
        "Professional appearance",
        "Strong communication skills",
        "Must be 16+ years old",
        "Flexible schedule"
      ],
      hourlyWage: "$14-16/hour"
    },
    {
      id: "dishwasher",
      title: "Dishwasher",
      department: "Kitchen",
      type: "Part-time",
      description: "Maintain clean dishes, utensils, and kitchen equipment. Support kitchen operations.",
      requirements: [
        "No experience necessary",
        "Ability to stand for long periods",
        "Team player attitude",
        "Must be 16+ years old",
        "Evening shifts available"
      ],
      hourlyWage: "$13-15/hour"
    },
    {
      id: "manager",
      title: "Assistant Manager",
      department: "Management",
      type: "Full-time",
      description: "Support daily operations, manage staff, and ensure excellent customer service standards.",
      requirements: [
        "3+ years restaurant management experience",
        "Leadership and communication skills",
        "Food safety certification",
        "Degree preferred but not required",
        "Full-time availability including weekends"
      ],
      hourlyWage: "$45,000-55,000/year"
    }
  ];

  const handlePositionSelect = (position) => {
    setSelectedPosition(position.id);
    setApplicationData({...applicationData, position: position.title});
    setCurrentStep("application");
  };

  const handleInputChange = (field, value) => {
    setApplicationData({...applicationData, [field]: value});
  };

  const handleAvailabilityChange = (day, field, value) => {
    setApplicationData({
      ...applicationData,
      availability: {
        ...applicationData.availability,
        [day]: {
          ...applicationData.availability[day],
          [field]: value
        }
      }
    });
  };

  const handleReferenceChange = (index, field, value) => {
    const newReferences = [...applicationData.references];
    newReferences[index] = {...newReferences[index], [field]: value};
    setApplicationData({...applicationData, references: newReferences});
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setApplicationData({...applicationData, resumeFile: file});
  };

  const handleSubmitApplication = async () => {
    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setCurrentStep("submitted");
      setIsSubmitting(false);
    }, 2000);
  };

  const resetApplication = () => {
    setSelectedPosition("");
    setApplicationData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      position: "",
      experience: "",
      availability: {
        monday: { available: false, start: "", end: "" },
        tuesday: { available: false, start: "", end: "" },
        wednesday: { available: false, start: "", end: "" },
        thursday: { available: false, start: "", end: "" },
        friday: { available: false, start: "", end: "" },
        saturday: { available: false, start: "", end: "" },
        sunday: { available: false, start: "", end: "" }
      },
      resumeFile: null,
      coverLetter: "",
      references: [
        { name: "", phone: "", relationship: "" },
        { name: "", phone: "", relationship: "" },
        { name: "", phone: "", relationship: "" }
      ]
    });
    setCurrentStep("positions");
  };

  // Positions Step
  if (currentStep === "positions") {
    return (
      <div className="careers-page">
        <div className="careers-container">
          <div className="careers-header">
            <h1>Join Our Team</h1>
            <p>Build your career with Blue Anchor Seafood - where fresh opportunities meet coastal hospitality</p>
          </div>

          <div className="why-work-section">
            <Card className="why-work-card">
              <h2>Why Work With Us?</h2>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <div className="benefit-icon">💰</div>
                  <h3>Competitive Pay</h3>
                  <p>Above-market wages plus tips for eligible positions</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">⚖️</div>
                  <h3>Work-Life Balance</h3>
                  <p>Flexible scheduling to fit your lifestyle</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🎓</div>
                  <h3>Growth Opportunities</h3>
                  <p>Career advancement and skill development programs</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🏥</div>
                  <h3>Benefits Package</h3>
                  <p>Health insurance and paid time off for full-time staff</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🍽️</div>
                  <h3>Employee Meals</h3>
                  <p>Free meals during shifts and employee discounts</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">👥</div>
                  <h3>Great Team</h3>
                  <p>Work with passionate people who love hospitality</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="positions-section">
            <h2>Current Openings</h2>
            <div className="positions-grid">
              {availablePositions.map((position) => (
                <Card key={position.id} className="position-card">
                  <div className="position-header">
                    <h3>{position.title}</h3>
                    <div className="position-meta">
                      <span className="department">{position.department}</span>
                      <span className="type">{position.type}</span>
                    </div>
                  </div>
                  
                  <div className="position-content">
                    <p className="description">{position.description}</p>
                    
                    <div className="requirements">
                      <h4>Requirements:</h4>
                      <ul>
                        {position.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="wage-info">
                      <strong>{position.hourlyWage}</strong>
                    </div>
                  </div>
                  
                  <div className="position-actions">
                    <Button 
                      onClick={() => handlePositionSelect(position)}
                      className="apply-btn"
                    >
                      Apply Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="general-application">
            <Card className="general-app-card">
              <h2>Don't See Your Perfect Role?</h2>
              <p>We're always looking for talented individuals to join our team. Submit a general application and we'll keep you in mind for future opportunities!</p>
              <Button 
                onClick={() => {
                  setSelectedPosition("general");
                  setApplicationData({...applicationData, position: "General Application"});
                  setCurrentStep("application");
                }}
                className="general-apply-btn"
              >
                Submit General Application
              </Button>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Application Step
  if (currentStep === "application") {
    const selectedPos = availablePositions.find(p => p.id === selectedPosition);
    
    return (
      <div className="careers-page">
        <div className="careers-container">
          <div className="careers-header">
            <h1>Application Form</h1>
            <p>
              Applying for: <strong>{applicationData.position}</strong>
              {selectedPos && <span className="department-badge">{selectedPos.department}</span>}
            </p>
            <Button onClick={() => setCurrentStep("positions")} className="back-btn">
              ← Back to Positions
            </Button>
          </div>

          <div className="application-layout">
            <div className="application-form">
              {/* Personal Information */}
              <Card className="form-section">
                <h2>Personal Information</h2>
                <div className="form-row">
                  <input
                    type="text"
                    placeholder="First Name *"
                    value={applicationData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    value={applicationData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={applicationData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    value={applicationData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Street Address *"
                  value={applicationData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  required
                />
                <div className="form-row">
                  <input
                    type="text"
                    placeholder="City *"
                    value={applicationData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="State *"
                    value={applicationData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="ZIP Code *"
                    value={applicationData.zipCode}
                    onChange={(e) => handleInputChange("zipCode", e.target.value)}
                    required
                  />
                </div>
              </Card>

              {/* Experience */}
              <Card className="form-section">
                <h2>Experience & Background</h2>
                <textarea
                  placeholder="Tell us about your relevant work experience, skills, and why you want to work at Blue Anchor Seafood... *"
                  value={applicationData.experience}
                  onChange={(e) => handleInputChange("experience", e.target.value)}
                  rows="6"
                  required
                ></textarea>
                
                <div className="file-upload-section">
                  <label htmlFor="resume-upload" className="file-upload-label">
                    📎 Upload Resume (PDF or Word)
                  </label>
                  <input
                    id="resume-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="file-input"
                  />
                  {applicationData.resumeFile && (
                    <div className="file-selected">
                      ✅ {applicationData.resumeFile.name}
                    </div>
                  )}
                </div>
              </Card>

              {/* Availability */}
              <Card className="form-section">
                <h2>Availability</h2>
                <p className="availability-note">Please indicate your availability for each day of the week:</p>
                <div className="availability-grid">
                  {Object.keys(applicationData.availability).map((day) => (
                    <div key={day} className="day-availability">
                      <div className="day-header">
                        <label className="day-checkbox">
                          <input
                            type="checkbox"
                            checked={applicationData.availability[day].available}
                            onChange={(e) => handleAvailabilityChange(day, "available", e.target.checked)}
                          />
                          <span className="day-name">{day.charAt(0).toUpperCase() + day.slice(1)}</span>
                        </label>
                      </div>
                      {applicationData.availability[day].available && (
                        <div className="time-inputs">
                          <input
                            type="time"
                            value={applicationData.availability[day].start}
                            onChange={(e) => handleAvailabilityChange(day, "start", e.target.value)}
                            className="time-input"
                          />
                          <span>to</span>
                          <input
                            type="time"
                            value={applicationData.availability[day].end}
                            onChange={(e) => handleAvailabilityChange(day, "end", e.target.value)}
                            className="time-input"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>

              {/* References */}
              <Card className="form-section">
                <h2>References</h2>
                <p className="references-note">Please provide 3 professional references:</p>
                {applicationData.references.map((ref, index) => (
                  <div key={index} className="reference-group">
                    <h4>Reference {index + 1}</h4>
                    <div className="form-row">
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={ref.name}
                        onChange={(e) => handleReferenceChange(index, "name", e.target.value)}
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={ref.phone}
                        onChange={(e) => handleReferenceChange(index, "phone", e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Relationship (Manager, Colleague, etc.)"
                        value={ref.relationship}
                        onChange={(e) => handleReferenceChange(index, "relationship", e.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </Card>

              {/* Cover Letter */}
              <Card className="form-section">
                <h2>Additional Information</h2>
                <textarea
                  placeholder="Is there anything else you'd like us to know? (Cover letter, special accommodations, questions, etc.)"
                  value={applicationData.coverLetter}
                  onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                  rows="4"
                ></textarea>
              </Card>

              <div className="form-actions">
                <Button onClick={() => setCurrentStep("positions")} className="back-btn">
                  Back to Positions
                </Button>
                <Button 
                  onClick={() => setCurrentStep("review")}
                  className="continue-btn"
                  disabled={!applicationData.firstName || !applicationData.lastName || !applicationData.email || !applicationData.phone || !applicationData.experience}
                >
                  Review Application
                </Button>
              </div>
            </div>

            {/* Application Summary Sidebar */}
            <div className="application-sidebar">
              <Card className="application-summary">
                <h3>Application Summary</h3>
                <div className="summary-item">
                  <strong>Position:</strong>
                  <span>{applicationData.position}</span>
                </div>
                {selectedPos && (
                  <>
                    <div className="summary-item">
                      <strong>Department:</strong>
                      <span>{selectedPos.department}</span>
                    </div>
                    <div className="summary-item">
                      <strong>Type:</strong>
                      <span>{selectedPos.type}</span>
                    </div>
                    <div className="summary-item">
                      <strong>Compensation:</strong>
                      <span>{selectedPos.hourlyWage}</span>
                    </div>
                  </>
                )}
                <div className="completion-status">
                  <h4>Completion Status:</h4>
                  <div className={`status-item ${applicationData.firstName && applicationData.lastName && applicationData.email && applicationData.phone ? 'completed' : 'pending'}`}>
                    Personal Info {applicationData.firstName && applicationData.lastName && applicationData.email && applicationData.phone ? '✅' : '⏳'}
                  </div>
                  <div className={`status-item ${applicationData.experience ? 'completed' : 'pending'}`}>
                    Experience {applicationData.experience ? '✅' : '⏳'}
                  </div>
                  <div className={`status-item ${Object.values(applicationData.availability).some(day => day.available) ? 'completed' : 'pending'}`}>
                    Availability {Object.values(applicationData.availability).some(day => day.available) ? '✅' : '⏳'}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Review Step
  if (currentStep === "review") {
    return (
      <div className="careers-page">
        <div className="careers-container">
          <div className="careers-header">
            <h1>Review Your Application</h1>
            <p>Please review all information before submitting</p>
          </div>

          <div className="review-layout">
            <Card className="review-card">
              <div className="review-section">
                <h2>Personal Information</h2>
                <div className="review-grid">
                  <div><strong>Name:</strong> {applicationData.firstName} {applicationData.lastName}</div>
                  <div><strong>Email:</strong> {applicationData.email}</div>
                  <div><strong>Phone:</strong> {applicationData.phone}</div>
                  <div><strong>Address:</strong> {applicationData.address}, {applicationData.city}, {applicationData.state} {applicationData.zipCode}</div>
                </div>
              </div>

              <div className="review-section">
                <h2>Position & Experience</h2>
                <div><strong>Position:</strong> {applicationData.position}</div>
                <div><strong>Experience:</strong></div>
                <div className="experience-text">{applicationData.experience}</div>
                {applicationData.resumeFile && (
                  <div><strong>Resume:</strong> {applicationData.resumeFile.name}</div>
                )}
              </div>

              <div className="review-section">
                <h2>Availability</h2>
                <div className="availability-review">
                  {Object.entries(applicationData.availability).map(([day, schedule]) => (
                    schedule.available && (
                      <div key={day} className="day-schedule">
                        <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong> 
                        {schedule.start} - {schedule.end}
                      </div>
                    )
                  ))}
                </div>
              </div>

              {applicationData.references.some(ref => ref.name) && (
                <div className="review-section">
                  <h2>References</h2>
                  {applicationData.references.map((ref, index) => (
                    ref.name && (
                      <div key={index} className="reference-review">
                        <strong>{ref.name}</strong> - {ref.phone} ({ref.relationship})
                      </div>
                    )
                  ))}
                </div>
              )}

              {applicationData.coverLetter && (
                <div className="review-section">
                  <h2>Additional Information</h2>
                  <div className="cover-letter-text">{applicationData.coverLetter}</div>
                </div>
              )}

              <div className="review-actions">
                <Button onClick={() => setCurrentStep("application")} className="back-btn">
                  Edit Application
                </Button>
                <Button 
                  onClick={handleSubmitApplication}
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Submitted Step
  if (currentStep === "submitted") {
    return (
      <div className="careers-page">
        <div className="careers-container">
          <div className="success-content">
            <div className="success-icon">🎉</div>
            <h1>Application Submitted Successfully!</h1>
            <div className="success-details">
              <p><strong>Position Applied For:</strong> {applicationData.position}</p>
              <p><strong>Name:</strong> {applicationData.firstName} {applicationData.lastName}</p>
              <p><strong>Email:</strong> {applicationData.email}</p>
            </div>
            <div className="next-steps">
              <h2>What happens next?</h2>
              <div className="steps-timeline">
                <div className="timeline-item">
                  <div className="timeline-icon">📧</div>
                  <div className="timeline-content">
                    <h3>Confirmation Email</h3>
                    <p>You'll receive a confirmation email within 24 hours</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-icon">👀</div>
                  <div className="timeline-content">
                    <h3>Application Review</h3>
                    <p>Our hiring team will review your application within 3-5 business days</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-icon">📞</div>
                  <div className="timeline-content">
                    <h3>Interview Scheduling</h3>
                    <p>If selected, we'll contact you to schedule an interview</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="success-actions">
              <Button onClick={resetApplication} className="new-application-btn">
                Submit Another Application
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default CareersPage;