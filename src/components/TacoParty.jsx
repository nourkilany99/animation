import React from "react";
import "./TacoParty.css";

const TacoParty = () => {
  return (
    <section className="taco-section">
      <button className="arrow left">←</button>

      <div className="taco-content">
        <h1 className="taco-title">
          <span className="top">T <span className="line"></span> A</span>
          <span className="middle">PARTY</span>
          <span className="bottom">C <span className="line"></span> O</span>
        </h1>
      </div>

      <button className="arrow right">→</button>

      <div className="footer-text">
        <span className="left-text">Primary Logo</span>
        <span className="right-text">01 / 04</span>
      </div>
    </section>
  );
};

export default TacoParty;