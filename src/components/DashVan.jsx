// DashVan.jsx
import './DashVan.css';

function DashVan({ van }) {
  return (
    <div className="dash-van" key={van.id}>
      <img src={van.imageUrl} alt={`Image of ${van.name}`} />
      <div className="van-info">
        <div className="van-header">
          <h3>{van.name}</h3>
          <p>${van.price}<span>/day</span></p>
        </div>
        <div className="van-specs">
          <span className={`van-type ${van.type.toLowerCase()}`}>{van.type}</span>
        </div>
      </div>
    </div>
  );
}

export default DashVan;
