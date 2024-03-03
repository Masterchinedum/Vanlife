// Vans.jsx
import React, { useState, useEffect } from "react";
import Van from "../components/Van";
import './Vans.css';

function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => setVans(data.vans))
      .catch((error) => console.error("Error fetching vans:", error));
  }, []);

  return (
    <div  className="container">
      <h1 className = "vansAvail">Vans Available for Rent</h1>
      <div className="vans-container">
        {vans.map((van) => (
          <Van key={van.id} van={van} />
        ))}
      </div>
    </div>
  );
}

export default Vans
