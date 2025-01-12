import React from "react";
import "./css/procurement.css";

const ProcurementSection = () => {
  return (
    <div className="procurement-section">
      <div className="procurement-hero">
        <h1 className="title">Procurement Management</h1>
        <p className="subtitle">
          Streamline your procurement process for better efficiency and results.
        </p>
      </div>
      <div className="procurement-content">
        <h2>Key Features</h2>
        <ul className="features-list">
          <li>Manage supplier relationships</li>
          <li>Track purchase orders</li>
          <li>Monitor inventory levels</li>
          <li>Generate real-time procurement reports</li>
        </ul>
        <button className="cta-button">Learn More</button>
      </div>
    </div>
  );
};

export default ProcurementSection;
