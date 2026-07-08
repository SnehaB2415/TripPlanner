import React from "react";
import "./MyTrips.css";

function MyTrips() {
  return (
    <div className="myTrips">
      <h1>My Trips</h1>

      <div className="trip-card">
        <h2>Dandeli</h2>
        <p>Budget : ₹10,000</p>
        <p>Hotel : Sea View Resort</p>

        <button>View</button>
        <button>Delete</button>
      </div>

      <div className="trip-card">
        <h2>Mangroves</h2>
        <p>Budget : ₹8,000</p>
        <p>Hotel : Snow Valley</p>

        <button>View</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default MyTrips;