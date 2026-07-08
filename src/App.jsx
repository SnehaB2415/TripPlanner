import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddTrip from "./components/AddTrip";
import MyTrip from "./components/MyTrips"
import Favorites from "./components/Favorites"
import History from "./components/History"
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addTrip" element={<AddTrip />} />
        <Route path="/myTrip" element={<MyTrip/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/history" element={<History/>} />
      </Routes>

      <Footer/>
      
    </>
  );
}

export default App;