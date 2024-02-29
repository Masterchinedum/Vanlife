import { Link } from 'react-router-dom';
import './Van.css';

export default function Van({ van }) {
  return (
    <Link to = "/vans/${van.id}">
      <div  className="van" key ={van.id}>
        <img src={van.imageUrl} />
        <div className="van-info">
            <h3>{van.name}</h3>
            <p>${van.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
    </Link>
  );
}
