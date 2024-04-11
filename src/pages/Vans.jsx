import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Van from "../components/Van";
import "./Vans.css";

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("type");
  const [vans, setVans] = useState([]);

  const fetchVansData = async (type) => {
    try {
      const storedVans = localStorage.getItem("vans");
      if (storedVans) {
        let filteredVans = JSON.parse(storedVans);
        if (type) {
          filteredVans = filteredVans.filter((van) => van.type === type);
        }
        setVans(filteredVans);
      } else {
        const response = await fetch("/api/vans");
        const data = await response.json();
        let fetchedVans = data.vans;
        if (type) {
          fetchedVans = fetchedVans.filter((van) => van.type === type);
        }
        setVans(fetchedVans);
        localStorage.setItem("vans", JSON.stringify(data.vans));
      }
    } catch (error) {
      console.error("Error fetching vans:", error);
    }
  };

  useEffect(() => {
    fetchVansData(queryParam);
  }, [queryParam]);

  useEffect(() => {
    fetchVansData();
  }, []);

  const handleFilter = (type) => {
    setSearchParams({ type });
  };

  return (
    <div className="container">
      <h1 className="vans-avail">Vans Available for Rent</h1>
      <div className="filter-buttons">
        <button onClick={() => handleFilter("")}>All</button>
        <button onClick={() => handleFilter("type1")}>Type 1</button>
        <button onClick={() => handleFilter("type2")}>Type 2</button>
        <button onClick={() => handleFilter("type3")}>Type 3</button>
      </div>
      <div className="vans-container">
        {vans.map((van) => (
          <Van key={van.id} van={van} />
        ))}
      </div>
    </div>
  );
}

export default Vans;
