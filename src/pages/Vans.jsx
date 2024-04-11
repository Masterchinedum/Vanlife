import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Van from "../components/Van";
import "./Vans.css";

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("type");
  const [vans, setVans] = useState([]);
  const [filteredVans, setFilteredVans] = useState([]);

  useEffect(() => {
    fetchVansData();
  }, []);

  useEffect(() => {
    filterVansByType(queryParam, vans);
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

  const filterVansByType = (type, vansToFilter) => {
    if (type) {
      const filteredVans = vansToFilter.filter((van) => van.type === type);
      setFilteredVans(filteredVans);
    } else {
      setFilteredVans(vansToFilter);
    }
  };

  return (
    <div className="container">
      <h1 className="vansAvail">Vans Available for Rent</h1>
      <div className="filter-buttons">
        <button onClick={() => filterVansByType(null, vans)}>All</button>
        <button onClick={() => filterVansByType("simple", vans)}>Simple</button>
        <button onClick={() => filterVansByType("rugged", vans)}>Rugged</button>
        <button onClick={() => filterVansByType("luxury", vans)}>Luxury</button>
      </div>
      <div className="vans-container">
        {filteredVans.map((van) => (
          <Van key={van.id} van={van} />
        ))}
      </div>
    </div>
  );
}

export default Vans;