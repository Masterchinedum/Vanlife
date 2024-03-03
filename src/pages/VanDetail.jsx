import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function VanDetail() {
  const [van, setVan] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/vans/${params.id}`);
        const data = await response.json();
        setVan(data.van);
      } catch (error) {
        console.error("Error fetching van:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!van) {
    return <div>Van not found.</div>;
  }

  return (
    <div>
      <h1>Van Detail Page</h1>
      <p>Name: {van.name}</p>
      <p>Type: {van.type}</p>
      {/* Display other properties as needed */}
    </div>
  );
}

export default VanDetail;
