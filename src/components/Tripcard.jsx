import React from "react";
import "./TripCard.css";

function TripCard() {
  return (
    <div className="card">
      <h2>🏖 Goa</h2>

      <p>Budget : ₹20,000</p>

      <p>Hotel : Sea View Resort</p>

      <button>View Details</button>
    </div>
  );
}

export default TripCard;