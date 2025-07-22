import React from "react";

const footerLinks = [
  {
    heading: "Quick Links",
    links: [
      { label: "Home", page: "home" },
      { label: "Donate", page: "donate" },
      { label: "Projects", page: "projects" },
      { label: "Reports", page: "reports" },
    ],
  },
  {
    heading: "About Us",
    links: [
      { label: "Our Mission", page: "about" },
      { label: "Our Technology", page: "about" },
      { label: "Our Team", page: "team" },
      { label: "FAQ", page: "faq" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { label: "Leaderboard", page: "leaderboard" },
      { label: "Dashboard", page: "dashboard" },
      { label: "Admin Panel", page: "admin" },
    ],
  },
  {
    heading: "Legal & Support",
    links: [
      { label: "Terms of Service", page: "terms" },
      { label: "Privacy Policy", url: "#" },
      { label: "Security", url: "#" },
      { label: "Compliance", url: "#" },
      { label: "Help Center", url: "#" },
      { label: "Contact Us", url: "#" },
      { label: "Documentation", url: "#" },
      { label: "API", url: "#" },
    ],
  }
];

export default function Footer({ setPage }) {
  return (
    <footer className="footer-bar">
      <div className="footer-grid">
        {footerLinks.map((group, i) => (
          <div className="footer-col" key={i}>
            <h3>{group.heading}</h3>
            <ul>
              {group.links.map((l, idx) =>
                l.page ? (
                  <li key={idx}>
                    <a href="#" onClick={() => setPage && setPage(l.page)}>
                      {l.label}
                    </a>
                  </li>
                ) : (
                  <li key={idx}><a href={l.url}>{l.label}</a></li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} DonateChain. All rights reserved.
      </div>
    </footer>
  );
}