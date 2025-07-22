import React from "react";
function Home() {
  return (
    <div className="page-content active">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Track Every Rupee You Donate</h1>
            <p>
              Revolutionary blockchain-powered transparency for your donations
            </p>
            <div className="cta-buttons">
              <a href="#" className="btn btn-primary">
                Donate Now
              </a>
              <a href="#" className="btn btn-secondary">
                View Reports
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">₹2,45,67,890</div>
              <div className="stat-label">Total Donations</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">147</div>
              <div className="stat-label">Verified NGOs</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">523</div>
              <div className="stat-label">Transparency Reports</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">12,456</div>
              <div className="stat-label">Active Donors</div>
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <h2>Why Choose DonateChain?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🔗</span>
              <h3>Blockchain Security</h3>
              <p>
                Every donation is recorded on the blockchain, ensuring immutable
                transparency and trust.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📊</span>
              <h3>Real-time Tracking</h3>
              <p>
                Monitor exactly how your donations are being used with detailed
                spending reports.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🏅</span>
              <h3>Soulbound NFTs</h3>
              <p>
                Earn unique digital badges and certificates for your charitable
                contributions.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🌐</span>
              <h3>IPFS Storage</h3>
              <p>
                All reports are stored on IPFS for decentralized, permanent
                accessibility.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">✅</span>
              <h3>Verified NGOs</h3>
              <p>
                Only thoroughly vetted and verified NGOs can receive donations
                through our platform.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📱</span>
              <h3>Easy to Use</h3>
              <p>
                Simple, intuitive interface that makes donating and tracking
                effortless.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;