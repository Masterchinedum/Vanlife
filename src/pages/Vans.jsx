import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Van from "../components/Van";
import "./Vans.css";

function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const selectedType = searchParams.get("type");

  const fetchVansData = async () => {
    try {
      const response = await fetch(
        `/api/vans${selectedType ? `?type=${selectedType}` : ""}`
      );
      const data = await response.json();
      setVans(data.vans);
    } catch (error) {
      console.error("Error fetching vans:", error);
    }
  };

  useEffect(() => {
    fetchVansData();
  }, [selectedType]);

  const handleSortChange = (e) => {
    const newType = e.target.value;
    setSearchParams({ type: newType === "all" ? null : newType });
  };

  return (
    <div className="container">
      <h1 className="vansAvail">Vans Available for Rent</h1>
      <div>
        <select value={selectedType || "all"} onChange={handleSortChange}>
          <option value="all">All</option>
          <option value="simple">Simple</option>
          <option value="rugged">Rugged</option>
          <option value="luxury">Luxury</option>
        </select>
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