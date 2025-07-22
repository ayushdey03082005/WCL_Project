import React, { useState } from "react";
function Donate() {
  const [crypto, setCrypto] = useState("ETH");
  return (
    <div className="page-content active">
      <div className="container">
        <div className="page-header">
          <h1>Make a Donation</h1>
          <p>
            Your contribution makes a difference. Every rupee is tracked
            transparently.
          </p>
        </div>
        <div className="donate-form">
          <form>
            <div className="form-group">
              <label htmlFor="crypto">Select Cryptocurrency</label>
              <select
                id="crypto"
                value={crypto}
                onChange={(e) => setCrypto(e.target.value)}
                required
              >
                <option value="ETH">Ethereum (ETH)</option>
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ICP">Internet Computer (ICP)</option>
                <option value="USDT">Tether (USDT)</option>
                <option value="BNB">Binance Coin (BNB)</option>
                <option value="SOL">Solana (SOL)</option>
                <option value="MATIC">Polygon (MATIC)</option>
                <option value="DOGE">Dogecoin (DOGE)</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="amount">
                Donation Amount ({crypto})
              </label>
              <input
                type="number"
                id="amount"
                placeholder={`Enter amount in ${crypto}`}
                min="0.001"
                step="0.001"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="ngo">Select NGO/Cause</label>
              <select id="ngo" required>
                <option value="">Choose an NGO</option>
                <option value="Education for All Foundation">
                  Education for All Foundation
                </option>
                <option value="Healthcare Heroes">
                  Healthcare Heroes
                </option>
                <option value="Clean Water Initiative">
                  Clean Water Initiative
                </option>
                <option value="Women Empowerment Trust">
                  Women Empowerment Trust
                </option>
                <option value="Child Welfare Society">
                  Child Welfare Society
                </option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="donorName">Your Name (Optional)</label>
              <input
                type="text"
                id="donorName"
                placeholder="Enter your name for recognition"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message (Optional)</label>
              <textarea
                id="message"
                placeholder="Leave a message for the NGO"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%" }}
            >
              Donate Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Donate;