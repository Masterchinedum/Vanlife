import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Van from "../components/Van";
import "./Vans.css";

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("type");
  const [vans, setVans] = useState([]);
  const [filteredVans, setFilteredVans] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

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

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredVans.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1 className="vansAvail">Vans Available for Rent</h1>
      <div className="filter-buttons">
        <button className="All" onClick={() => filterVansByType(null, vans)}>
          All
        </button>
        <button className="simple" onClick={() => filterVansByType("simple", vans)}>
          Simple
        </button>
        <button className="rugged" onClick={() => filterVansByType("rugged", vans)}>
          Rugged
        </button>
        <button className="luxury" onClick={() => filterVansByType("luxury", vans)}>
          Luxury
        </button>
      </div>
      <div className="vans-container">
        {currentItems.map((van) => (
          <Van key={van.id} van={van} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredVans.length / itemsPerPage) }, (_, i) => (
          <button key={i + 1} onClick={() => paginate(i + 1)} className={currentPage === i + 1 ? "active" : ""}>
            {i + 1}
          </button>
        ))}
      </div>
      <div className="items-per-page">
        Items per page:
        <select value={itemsPerPage} onChange={(e) => setItemsPerPage(parseInt(e.target.value))}>
          <option value="6">6</option>
          <option value="9">9</option>
          <option value="12">12</option>
        </select>
      </div>
    </div>
  );
}

export default Vans;
