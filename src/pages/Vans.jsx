// Vans.jsx
import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import VanDetail from "./VanDetail";
import './Vans.css';

function Vans() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const storedVans = localStorage.getItem('vans');
        if (storedVans) {
          setVans(JSON.parse(storedVans));
        } else {
          const response = await fetch("/api/vans");
          const data = await response.json();
          setVans(data.vans);
          localStorage.setItem('vans', JSON.stringify(data.vans));
        }
      } catch (error) {
        setError("Error fetching vans");
        console.error("Error fetching vans:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVans();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="container">
      <h1 className="vansAvail">Vans Available for Rent</h1>
      <div className="vans-container">
        {vans.map((van) => (
          <Link key={van.id} to={`/vans/${van.id}`}>
            <div className="van" aria-label={`View details for ${van.name}, priced at $${van.price} per day`}>
              <img src={van.imageUrl} alt={`Image of ${van.name}`} />
              <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
              </div>
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </div>
          </Link>
        ))}
      </div>
      <Routes>
        <Route path="/vans/:id" element={<VanDetail vans={vans} />} />
      </Routes>
    </div>
  );
}

export default Vans;