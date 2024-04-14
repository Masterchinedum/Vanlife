import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './VanDetail.css'

function VanDetail() {
  const params = useParams();
  const [van, setVan] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchVanData = async () => {
    try {
      const storedVan = localStorage.getItem(`van-${params.vanId}`);
      if (storedVan) {
        setVan(JSON.parse(storedVan));
        setLoading(false); // Set loading to false after fetching from localStorage
      } else {
        const response = await fetch(`/api/vans/${params.vanId}`);
        const data = await response.json();
        if (data && data.vans) {
          setVan(data.vans);
          localStorage.setItem(`van-${params.vanId}`, JSON.stringify(data.vans));
          setLoading(false); // Set loading to false after successful fetch
        } else {
          console.error("Van details not found");
          setLoading(false); // Set loading to false if van details not found
        }
      }
    } catch (error) {
      console.error("Error fetching van details:", error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    fetchVanData();
  }, [params.vanId]);

  if (!van) {
    return <h2>Van not found</h2>;
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const { imageUrl, type, price, description } = van;

  return (
    <div className="van-detail-main-container ">
      <div className="returner">
        <Link
          to=".."
          relative = "path"
          className="return-button"
          >&larr; <span>Back to all vans</span>
        </Link>
      </div>
      <div className="van-detail-card">
        <img src={imageUrl} alt={van.name} className="van-detail-img" />
        <i className={`van-type ${type} selected`}>{type}</i>
        <h2 className="van-name">{van.name}</h2>
        <p className="van-price"><span>${price}</span>/day</p>
        <p className="van-description">{description}</p>
        <button className={`rent-button ${type} rent-button-${params.vanId}`}>Rent this van</button>
      </div>
    </div>
  );
}

export default VanDetail;