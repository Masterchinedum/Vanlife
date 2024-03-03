import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function VanDetail() {
  const [vans, setVans] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/vans/${params.id}`);
        const data = await response.json();
        setVans(data.vans);
      } catch (error) {
        console.error("Error fetching vans:", error);
      }
    };

    fetchData();
  }, [params.id]); // Run the effect when params.id changes

  const van = vans[0]; // Access the first van (assuming there's only one)

  console.log(van); // Log the fetched van data outside of useEffect

  return (
    <div>
      <h1>Van Detail Page Goes Here</h1>
      {/* Render van details using the van variable */}
      {van && (
        <>
          <p>Name: {van.name}</p>
          <p>Type: {van.type}</p>
          {/* ... other details */}
        </>
      )}
    </div>
  );
}

export default VanDetail;
