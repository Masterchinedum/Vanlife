import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Van from "../components/Van";
import "./Vans.css";

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("type");
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetchVansData();
  }, []);


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

  const displayedVans = queryParam ? vans.filter((van) => van.type === queryParam) : vans;

  const viviVan = displayedVans.map((van) => (
    <Van key={van.id} van={van} />
  ));

  return (
    <div className="container">
      <h1 className="vansAvail">Vans Available for Rent</h1>
      <div className="filter-buttons">
        {queryParam!== 'simple' && <button className="filtrin simple" onClick={() => setSearchParams({ type: "simple" })}>Simple</button>}
        {queryParam!== 'rugged' && <button className="filtrin rugged" onClick={() => setSearchParams({ type: "rugged" })}>Rugged</button>}
        {queryParam!== 'luxury' && <button className="filtrin luxury" onClick={() => setSearchParams({ type: "luxury" })}>Luxury</button>}
        {queryParam!== null && <button className="filtrin All" onClick={() => setSearchParams("")}>All</button>}

      </div>
      {/* <div className="filter-buttons">
        <Link className = "filtrin All" to=".">All</Link>
        <Link className = "filtrin simple" to="?type=simple">Simple</Link>
        <Link className = "filtrin rugged" to="?type=rugged">Rugged</Link>
        <Link className = "filtrin luxury" to="?type=luxury">Luxury</Link>
      </div> */}
      <div className="vans-container">
        {viviVan}
      </div>
    </div>
  );
}

export default Vans;