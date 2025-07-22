import React from "react";
function Reports() {
  return (
    <div className="page-content active">
      <div className="container">
        <div className="page-header">
          <h1>Transparency Reports</h1>
          <p>View detailed spending reports from all NGOs on our platform</p>
        </div>
        <div className="reports-grid">
          <div className="report-card">
            <h3>Q4 2024 Education Programs</h3>
            <div className="report-meta">
              <span>Education for All Foundation</span>
              <span>Dec 15, 2024</span>
            </div>
            <p>
              Detailed breakdown of fund utilization for rural education
              initiatives including teacher training, infrastructure
              development, and learning materials.
            </p>
            <div className="report-actions">
              <a href="#" className="btn-small btn-primary">
                View on IPFS
              </a>
              <a href="#" className="btn-small btn-secondary">
                Blockchain Tx
              </a>
            </div>
          </div>
          <div className="report-card">
            <h3>Medical Equipment Purchase</h3>
            <div className="report-meta">
              <span>Healthcare Heroes</span>
              <span>Dec 10, 2024</span>
            </div>
            <p>
              Procurement of essential medical equipment for rural healthcare
              centers including diagnostic tools and emergency supplies.
            </p>
            <div className="report-actions">
              <a href="#" className="btn-small btn-primary">
                View on IPFS
              </a>
              <a href="#" className="btn-small btn-secondary">
                Blockchain Tx
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Reports;