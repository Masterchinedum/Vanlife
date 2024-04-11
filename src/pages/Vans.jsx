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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  const indexOfLastVan = currentPage * itemsPerPage;
  const indexOfFirstVan = indexOfLastVan - itemsPerPage;
  const currentVans = filteredVans.slice(indexOfFirstVan, indexOfLastVan);

  const totalPages = Math.ceil(filteredVans.length / itemsPerPage);

  return (
    <div className="container">
      <h1 className="vansAvail">Vans Available for Rent</h1>
      <div className="filter-buttons">
        <button className="All" onClick={() => filterVansByType(null, vans)}>
          All
        </button>
        <button
          className="simple"
          onClick={() => filterVansByType("simple", vans)}
        >
          Simple
        </button>
        <button
          className="rugged"
          onClick={() => filterVansByType("rugged", vans)}
        >
          Rugged
        </button>
        <button
          className="luxury"
          onClick={() => filterVansByType("luxury", vans)}
        >
          Luxury
        </button>
      </div>
      <div className="pagination-controls">
        <label>
          Items per page:
          <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value="6">6</option>
            <option value="12">12</option>
            <option value="18">18</option>
          </select>
        </label>
      </div>
      <div className="vans-container">
        {currentVans.map((van) => (
          <Van key={van.id} van={van} />
        ))}
      </div>
      <div className="pagination">
        {Array.from(Array(totalPages).keys()).map((pageNumber) => (
          <button
            key={pageNumber}
            className={`pagination-button ${
              currentPage === pageNumber + 1 ? "active" : ""
            }`}
            onClick={() => handlePageChange(pageNumber + 1)}
          >
            {pageNumber + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Vans;