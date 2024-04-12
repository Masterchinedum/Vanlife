// Importing necessary modules and components
import React, { useState, useEffect } from "react"; // React hooks for state and lifecycle features
import { useSearchParams } from "react-router-dom"; // Hook for accessing search parameters from the URL
import Van from "../components/Van"; // Custom Van component for displaying individual vans
import "./Vans.css"; // Stylesheet for the Vans component

// The Vans functional component
function Vans() {
  // State hooks for managing component state
  const [searchParams, setSearchParams] = useSearchParams(); {/* Hook to read and modify search parameters in the URL */}
  const queryParam = searchParams.get("type"); {/*Retrieve 'type' parameter from the URL */}
  const [vans, setVans] = useState([]); {/*State for storing the list of all vans*/}
  const [filteredVans, setFilteredVans] = useState([]); {/*State for storing the list of vans filtered by type */}
  const [currentPage, setCurrentPage] = useState(1); {/*State for tracking the current page number */}
  const [itemsPerPage, setItemsPerPage] = useState(6); {/*State for setting the number of items to display per page */}

  // Effect hook for fetching van data on component mount
  useEffect(() => {
    fetchVansData(); {/* Call the function to fetch van data */}
  }, []); {/* Empty dependency array means this effect runs once on mount */}

  // Effect hook for filtering vans whenever the queryParam or vans state changes
  useEffect(() => {
    filterVansByType(queryParam, vans); // Call the function to filter vans by type
  }, [queryParam, vans]); // Dependency array with queryParam and vans, so it runs when either changes

  // Function to fetch van data
  const fetchVansData = async () => {
    try {
      const storedVans = localStorage.getItem("vans"); // Attempt to retrieve vans from local storage
      if (storedVans) {
        setVans(JSON.parse(storedVans)); // If vans are stored, parse them from JSON and update the state
      } else {
        const response = await fetch("/api/vans"); // Fetch vans from the server API
        const data = await response.json(); // Parse the JSON response
        setVans(data.vans); // Update the vans state with the fetched data
        localStorage.setItem("vans", JSON.stringify(data.vans)); // Store the fetched vans in local storage
      }
    } catch (error) {
      console.error("Error fetching vans:", error); // Log any errors during fetch
    }
  };

  // Function to filter vans by type
  const filterVansByType = (type, vansToFilter) => {
    if (type) {
      const filteredVans = vansToFilter.filter((van) => van.type === type); // Filter vans that match the given type
      setFilteredVans(filteredVans); // Update the filteredVans state with the filtered list
    } else {
      setFilteredVans(vansToFilter); // If no type is specified, use the unfiltered list
    }
  };

  // Function to handle page number changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber); // Update the currentPage state with the new page number
  };

  // Function to handle changes in the number of items per page
  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value)); // Update the itemsPerPage state based on the selected value
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  // Calculations for pagination
  const indexOfLastVan = currentPage * itemsPerPage; // Index of the last van to display on the current page
  const indexOfFirstVan = indexOfLastVan - itemsPerPage; // Index of the first van to display on the current page
  const currentVans = filteredVans.slice(indexOfFirstVan, indexOfLastVan); // Slice of vans to display on the current page

  // Calculate the total number of pages needed for pagination
  const totalPages = Math.ceil(filteredVans.length / itemsPerPage);

  // JSX to render the component UI
  return (
    <div className="container">
      <h1 className="vansAvail">Vans Available for Rent</h1> {/*Title for the vans listing */} 
      <div className="filter-buttons">
        {/*Buttons for filtering vans by type */}
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
        {/* Dropdown for selecting the number of items per page */}
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
        {/* Mapping through the current vans to display them using the Van component */}
        {currentVans.map((van) => (
          <Van key={van.id} van={van} />
        ))}
      </div>
      <div className="pagination">
        {/* Pagination buttons to navigate through the pages */}
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

// Exporting the Vans component for use in other parts of the application
export default Vans;
