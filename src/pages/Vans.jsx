import React, { useState, useEffect } from 'react';
import Van from '../components/Van'; // Import the template component

const Vans = () => {
  const [vans, setVans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/vans');
        const data = await response.json();
        setVans(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching vans:', error);
        setIsLoading(false); // Indicate error state
      }
    };

    fetchData();
  }, []);

  return (
    <div className="vans-container">
      {isLoading ? (
        <p>Loading vans...</p>
      ) : (
        <>
          <h1>Available Vans</h1>
          <ul>
            {vans.map((van) => (
              <li key={van.id}>
                <Van vanData={van} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Vans;
