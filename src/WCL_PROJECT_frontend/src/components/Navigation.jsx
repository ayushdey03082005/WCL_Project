import React, { useState } from "react";

const NAV_LINKS = [
  { key: "home", label: "Home" },
  { key: "donate", label: "Donate" },
  { key: "projects", label: "Projects" },
  { key: "reports", label: "Reports" },
  { key: "dashboard", label: "Dashboard" },
  { key: "leaderboard", label: "Leaderboard" },
  { key: "admin", label: "Admin" },
  { key: "about", label: "About" },
  { key: "faq", label: "FAQ" },
  { key: "terms", label: "Terms" },
];

function Navigation({ currentPage, setPage }) {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav>
      <div className="nav-content">
        <a href="#" className="logo" onClick={() => setPage("home")}>
          DonateChain
        </a>
        <ul className="nav-links">
          {NAV_LINKS.slice(0, 5).map((link) => (
            <li key={link.key}>
              <a
                href="#"
                className={currentPage === link.key ? "active" : ""}
                onClick={() => setPage(link.key)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="menu-toggle"
          onClick={() => setMobileMenu((m) => !m)}
        >
          ☰
        </button>
        <a href="#" className="connect-wallet">
          Connect Wallet
        </a>
      </div>
      <div className={`mobile-menu${mobileMenu ? " active" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a
            href="#"
            key={link.key}
            onClick={() => {
              setPage(link.key);
              setMobileMenu(false);
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
export default Navigation;