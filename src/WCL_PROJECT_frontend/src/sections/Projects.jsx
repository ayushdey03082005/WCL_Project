import React from "react";
function Projects() {
  return (
    <div className="page-content active">
      <div className="container">
        <div className="page-header">
          <h1>Featured Projects</h1>
          <p>Discover impactful initiatives by verified NGOs.</p>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">🎒</div>
            <div className="project-info">
              <h3>Rural School Renovation</h3>
              <p>
                Renovating and equipping schools in underprivileged rural
                regions to provide quality education.
              </p>
              <div className="project-stats">
                <span>₹12,50,000 Raised</span>
                <span className="transparency-score">Transparency 95%</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">💧</div>
            <div className="project-info">
              <h3>Clean Water for Villages</h3>
              <p>
                Providing access to clean drinking water in drought-prone
                villages across India.
              </p>
              <div className="project-stats">
                <span>₹8,30,000 Raised</span>
                <span className="transparency-score">Transparency 92%</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">🩺</div>
            <div className="project-info">
              <h3>Mobile Health Clinics</h3>
              <p>
                Bringing essential healthcare services to remote communities
                with mobile clinics and volunteers.
              </p>
              <div className="project-stats">
                <span>₹6,75,000 Raised</span>
                <span className="transparency-score">Transparency 90%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;