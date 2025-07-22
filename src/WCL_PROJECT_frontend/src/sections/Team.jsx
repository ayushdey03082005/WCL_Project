import React from "react";

function Team() {
  return (
    <div className="page-content active">
      <div
        className="container"
        style={{
          background: "rgba(255,255,255,0.08)",
          borderRadius: "40px",
          padding: "40px 0",
          marginTop: "40px",
        }}
      >
        <h1 style={{ textAlign: "left", marginLeft: 60, fontWeight: 800, fontSize: "3rem", color: "#fff" }}>
          Our Team
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          <div style={{ textAlign: "center", margin: 40 }}>
            <div
              style={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                background: "#FF7070",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "3rem",
                margin: "0 auto 16px auto",
              }}
            >
              👨‍💻
            </div>
            <div style={{ fontWeight: 700, fontSize: "2rem", color: "#fff" }}>
              Lorem Ipsum
            </div>
            <div style={{ color: "#fff", fontSize: "1.3rem", opacity: 0.85 }}>
              lorem ipsum dolor sit amet
            </div>
          </div>
          <div style={{ textAlign: "center", margin: 40 }}>
            <div
              style={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                background: "#5EC469",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "3rem",
                margin: "0 auto 16px auto",
              }}
            >
              👩‍💻
            </div>
            <div style={{ fontWeight: 700, fontSize: "2rem", color: "#fff" }}>
              Lorem Ipsum
            </div>
            <div style={{ color: "#fff", fontSize: "1.3rem", opacity: 0.85 }}>
              lorem ipsum dolor sit amet
            </div>
          </div>
          <div style={{ textAlign: "center", margin: 40 }}>
            <div
              style={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                background: "#3DB5FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "3rem",
                margin: "0 auto 16px auto",
              }}
            >
              👨‍💼
            </div>
            <div style={{ fontWeight: 700, fontSize: "2rem", color: "#fff" }}>
              Lorem Ipsum
            </div>
            <div style={{ color: "#fff", fontSize: "1.3rem", opacity: 0.85 }}>
              lorem ipsum dolor sit amet
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;