import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Van from "../components/Van";
import "./Vans.css";

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("type")
  const [vans, setVans] = useState([]);

  useEffect(() => {
    if (queryParam) {
      const filteredVans = vans.filter((van) => van.type === queryParam);
      setVans(filteredVans);
    }
  }, [queryParam, vans]);
  
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
