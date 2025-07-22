import React from "react";
function Admin() {
  return (
    <div className="page-content active">
      <div className="container">
        <div className="page-header">
          <h1>NGO Admin Panel</h1>
          <p>Manage your projects and upload transparency reports.</p>
        </div>
        <div
          className="admin-panel-content"
          style={{ maxWidth: 800, margin: "0 auto" }}
        >
          <div className="form-group">
            <label htmlFor="reportTitle">Report Title</label>
            <input
              type="text"
              id="reportTitle"
              placeholder="e.g., Q4 2024 Education Spending"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="reportDescription">Description</label>
            <textarea
              id="reportDescription"
              placeholder="Detailed breakdown of how funds were used..."
              rows={6}
            />
          </div>
          <div className="form-group">
            <label htmlFor="reportAmountSpent">Amount Spent (INR)</label>
            <input
              type="number"
              id="reportAmountSpent"
              placeholder="e.g., 500000"
              min="0"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="reportFile">
              Upload Report File (PDF, CSV, Image)
            </label>
            <input
              type="file"
              id="reportFile"
              accept=".pdf,.csv,.jpg,.png"
              required
            />
          </div>
          <button className="btn btn-primary">Upload Report</button>
          <h3
            style={{
              marginTop: 40,
              marginBottom: 20,
              fontSize: "1.5rem",
            }}
          >
            Previously Uploaded Reports
          </h3>
          <div id="uploadedReportsList">
            <p style={{ opacity: 0.8 }}>No reports uploaded yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Admin;