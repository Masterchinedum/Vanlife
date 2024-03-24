// DashVandet.jsx
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';


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

  const { description } = van;

  return (
        <div  className="dash-vandet-body">
          <p className="dash-vandet-description">{description}</p>
          <button className={`dash-vandet-button ${type}`}>Rent this van</button>
        </div>
  );
};

export default DashVandet;
