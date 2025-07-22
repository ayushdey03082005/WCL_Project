import React from "react";
function Leaderboard() {
  return (
    <div className="page-content active">
      <div className="container">
        <div className="page-header">
          <h1>Donor Leaderboard</h1>
          <p>Top donors making a difference</p>
        </div>
        <div className="leaderboard-list">
          {[
            {
              rank: 1,
              name: "Amit Sharma",
              donations: 12,
              amount: "₹2,00,000",
            },
            { rank: 2, name: "Priya Agarwal", donations: 10, amount: "₹1,50,000" },
            { rank: 3, name: "Rahul Singh", donations: 9, amount: "₹1,10,000" },
          ].map((item) => (
            <div className="leaderboard-item" key={item.rank}>
              <div className="leaderboard-rank">#{item.rank}</div>
              <div className="leaderboard-info">
                <div className="leaderboard-name">{item.name}</div>
                <div className="leaderboard-donations">
                  {item.donations} Donations
                </div>
              </div>
              <div className="leaderboard-amount">{item.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Leaderboard;