import React, { useState } from "react";

const CRYPTO_OPTIONS = [
  { value: "ETH", name: "Ethereum (ETH)" },
  { value: "BTC", name: "Bitcoin (BTC)" },
  { value: "ICP", name: "Internet Computer (ICP)" },
  { value: "USDT", name: "Tether (USDT)" },
  { value: "BNB", name: "Binance Coin (BNB)" },
  { value: "SOL", name: "Solana (SOL)" },
  { value: "MATIC", name: "Polygon (MATIC)" },
  { value: "DOGE", name: "Dogecoin (DOGE)" },
];

function Donate() {
  const [crypto, setCrypto] = useState("ETH");
  const selectedCrypto = CRYPTO_OPTIONS.find(c => c.value === crypto);

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
                onChange={e => setCrypto(e.target.value)}
                required
              >
                {CRYPTO_OPTIONS.map(c => (
                  <option value={c.value} key={c.value}>{c.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="amount">
                Donation Amount ({selectedCrypto ? selectedCrypto.value : ""})
              </label>
              <input
                type="number"
                id="amount"
                placeholder={
                  selectedCrypto
                    ? `Enter amount in ${selectedCrypto.value}`
                    : "Enter the amount"
                }
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