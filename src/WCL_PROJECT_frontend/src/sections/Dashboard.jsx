import React from "react";
function Dashboard() {
  return (
    <div className="page-content active">
      <div className="container">
        <div className="page-header">
          <h1>Your Dashboard</h1>
          <p>Track your donations and earned badges</p>
        </div>
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>💰 Total Donated</h3>
            <p
              style={{
                fontSize: "2rem",
                color: "#ff6b6b",
                fontWeight: "bold",
              }}
            >
              ₹45,670
            </p>
            <p>Across 8 donations</p>
          </div>
          <div className="dashboard-card">
            <h3>🏅 Earned Badges</h3>
            <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
              <span
                style={{
                  background: "#ff6b6b",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                }}
              >
                Gold Donor
              </span>
              <span
                style={{
                  background: "#4caf50",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                }}
              >
                Frequent Giver
              </span>
            </div>
          </div>
          <div className="dashboard-card">
            <h3>📊 Recent Donations</h3>
            <div style={{ marginTop: "15px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                  padding: "10px",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                }}
              >
                <span>Education for All</span>
                <span>₹5,000</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                  padding: "10px",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                }}
              >
                <span>Healthcare Heroes</span>
                <span>₹3,500</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                }}
              >
                <span>Clean Water Initiative</span>
                <span>₹7,200</span>
              </div>
            </div>
          </div>
          <div className="dashboard-card">
            <h3>🔗 Wallet Info</h3>
            <p
              style={{
                wordBreak: "break-all",
                fontFamily: "monospace",
                background: "rgba(255,255,255,0.1)",
                padding: "10px",
                borderRadius: "8px",
                marginTop: "10px",
              }}
            >
              Not Connected
            </p>
            <p style={{ marginTop: "10px", fontSize: "0.9rem", opacity: 0.8 }}>
              Connected via MetaMask
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;