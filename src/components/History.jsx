import React from "react";
import "./History.css";

function History() {
  return (
    <div className="history">
      <h1>Trip History</h1>

      <table>
        <thead>
          <tr>
            <th>Destination</th>
            <th>Year</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Goa</td>
            <td>2025</td>
            <td>Completed</td>
          </tr>

          <tr>
            <td>Ooty</td>
            <td>2026</td>
            <td>Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default History;