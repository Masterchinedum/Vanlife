//DashVans.jsx
import React, {useState, useEffect} from 'react';
import DashVan from '../../components/DashVan';

const DashVans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((response) => response.json())
      .then((data) => setVans(data.vans))
      .catch((error) => console.error("Error fetching vans:", error));
  }, []);

  return (
    <div>
      <h1>Vans You're Hosting</h1>
      <div>
        {vans.map((van) => (
          <DashVan key={van.id} van={van} />
        ))}
      </div>
    </div>
  );
}
export default DashVans;
