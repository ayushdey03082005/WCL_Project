import React, { useState } from "react";
function FAQ() {
  const [open, setOpen] = useState(null);
  const questions = [
    {
      q: "How does DonateChain ensure transparency?",
      a: "Every transaction and spending report is immutably recorded on the blockchain and accessible to all.",
    },
    {
      q: "What is a Soulbound NFT?",
      a: "It's a non-transferable digital badge awarded to donors for their contributions, visible in their dashboard.",
    },
    {
      q: "How do I know the NGOs are legit?",
      a: "All NGOs undergo a rigorous verification process before being listed on DonateChain.",
    },
    {
      q: "Can I donate using crypto?",
      a: "Yes! You can donate using a range of cryptocurrencies, including ETH, BTC, ICP, and more.",
    },
  ];
  return (
    <div className="page-content active">
      <div className="container">
        <div className="page-header">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div>
          {questions.map((item, idx) => (
            <div className="faq-item" key={idx} style={{ marginBottom: 24 }}>
              <h3
                onClick={() => setOpen(open === idx ? null : idx)}
                className={open === idx ? "active" : ""}
                style={{ cursor: "pointer" }}
              >
                <span>{open === idx ? "-" : "+"}</span> {item.q}
              </h3>
              {open === idx && (
                <div style={{ marginLeft: 32, color: "#fff", opacity: 0.95 }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default FAQ;