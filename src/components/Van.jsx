import { Link } from 'react-router-dom';
import './Van.css';


export default function Van({ van }) {
  return (

      <div  className="van" key ={van.id}>
        <Link to = {`/vans/${van.id}`}
        aria-label={`View details for ${van.name}, 
        priced at $${van.price} per day`}
        >
          <img src={van.imageUrl} alt={`Image of ${van.name} ` } />
          <div className="van-info">
              <h3>{van.name}</h3>
              <p>${van.price}<span>/day</span></p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
      </div>

  );
}
