import React from "react";

const headerLinks = [
  { label: "Home", page: "home" },
  { label: "Donate", page: "donate" },
  { label: "Projects", page: "projects" },
  { label: "Reports", page: "reports" },
  { label: "Leaderboard", page: "leaderboard" },
  { label: "Dashboard", page: "dashboard" },
  { label: "Admin Panel", page: "admin" },
  { label: "About", page: "about" },
  { label: "Team", page: "team" },
  { label: "FAQ", page: "faq" },
];

export default function Header({ currentPage, setPage }) {
  return (
    <header className="header-bar">
      <div className="header-grid">
        <div className="header-logo" onClick={() => setPage("home")}>
          ⛓️ <span>DonateChain</span>
        </div>
        <nav className="header-nav">
          {headerLinks.map((l, i) => (
            <a
              key={i}
              href="#"
              className={currentPage === l.page ? "active" : ""}
              onClick={() => setPage(l.page)}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="header-wallet">
          <a className="connect-wallet-btn" href="#">
            Connect Wallet
          </a>
        </div>
      </div>
    </header>
  );
}