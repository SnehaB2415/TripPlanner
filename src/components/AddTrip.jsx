import React from "react";
import "./AddTrip.css";

function AddTrip() {
  function handleFormSubmit(){
     e.preventDefault()
    console.log("name is ", e.target.value)
    alert('Next Trip Added')
  }
  return (
    <div className="addTrip">
      <h1>Add New Trip</h1>

      <form>
        <input type="text" placeholder="Destination" />
        <input type="number" placeholder="Budget" />
        <input type="date" />
        <input type="date" />
        <input type="text" placeholder="Hotel Name" />
        <textarea placeholder="Notes"></textarea>

        <button onSubmit={handleFormSubmit}>Add Trip</button>
      </form>
    </div>
  );
}

export default AddTrip;