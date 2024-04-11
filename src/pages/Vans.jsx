import React, { useState, useEffect } from "react";
import Van from "../components/Van";
import "./Vans.css";

function Vans() {
  const [vans, setVans] = useState([]);

  const fetchVansData = async () => {
    try {
      const storedVans = localStorage.getItem("vans");

      if (storedVans) {
        setVans(JSON.parse(storedVans));
      } else {
        const response = await fetch("/api/vans");
        const data = await response.json();

        setVans(data.vans);
        localStorage.setItem("vans", JSON.stringify(data.vans));
      }
    } catch (error) {
      console.error("Error fetching vans:", error);
    }
  };

  useEffect(() => {
    fetchVansData();
  }, []);

  return (
    <div className="container">
      <h1 className="vansAvail">Vans Available for Rent</h1>
      <div className="vans-container">
        {vans.map((van) => (
          <Van key={van.id} van={van} />
        ))}
      </div>
    </div>
  );
}

export default Vans;
