// DashVandet.jsx
import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import DVDmenu from './DVDmenu';
import './DashVandet.css';

const DashVandet = () => {
  const params = useParams();
  const [van, setVan] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch van data when component mounts.
// Fetch van data when component mounts.
useEffect(() => {
  fetch(`/api/host/vans/${params.vanId}`)
    .then((response) => response.json())
    .then((data) => {
      if (data && data.vans && data.vans.length > 0) {
        setVan(data.vans[0]); // Set the first van in the array
      } else {
        console.error('Van details not found');
      }
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching van details:', error);
      setLoading(false);
    });
}, [params.vanId]);


  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!van) {
    return <h2>Van not found</h2>;
  }

  const { imageUrl, type, price, description } = van;
  

  return (
    <section>
      <Link
                to=".."
                relative = "path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
      <div className="dash-vandet-container">
        <div className='dash-van-head'>
          <img src={imageUrl} alt={van.name} className="dash-vandet-img" />
          <div className='dash-van-head-text'>
            <i className={`dash-vandet-type ${type} selected`}>{type}</i>
            <h2 className="dash-vandet-name">{van.name}</h2>
            <p className="dash-vandet-price">
              <span>${price}</span>/day
            </p>
          </div>
        </div>
        <DVDmenu />
        <Outlet context={{van}} />
      </div>
    </section>
  );
};

export default DashVandet;
