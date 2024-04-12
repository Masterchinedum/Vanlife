import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
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
      {/* <div className="filter-buttons">
        <button className= "All" onClick={() => filterVansByType(null, vans)}>All</button>
        <button className = "simple" onClick={() => filterVansByType("simple", vans)}>Simple</button>
        <button className="rugged" onClick={() => filterVansByType("rugged", vans)}>Rugged</button>
        <button className="luxury" onClick={() => filterVansByType("luxury", vans)}>Luxury</button>
      </div> */}
      <div className="filter-buttons">
        <Link className = "filtrin All" to=".">All</Link>
        <Link className = "filtrin simple" to="?type=simple">Simple</Link>
        <Link className = "filtrin rugged" to="?type=rugged">Rugged</Link>
        <Link className = "filtrin luxury" to="?type=luxury">Luxury</Link>
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