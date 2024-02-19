import React, { useState, useEffect } from 'react';
import VanCard from '../components/Van';

const Vans = () => {
  const [vans, setVans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/vans');
        const data = await response.json();
        setVans(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading vans...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="vans-container">
      <h1>Explore Our Vans!</h1>
      <div className="vans-grid">
        {vans.map((van) => (
          <VanCard key={van.id} van={van} />
        ))}
      </div>
    </div>
  );
};

export default Vans;
