import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">Trip Planner</div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/addTrip">Add Trip</Link>
        <Link to="/myTrip">My Trip</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/history">History</Link>
      </div>
    </nav>
  );
}

export default NavBar;