import './DashVan.css';


function DashVan({ van }) {
  return (

      <div  className="Dashvan" key ={van.id}>
          <img src={van.imageUrl} alt={`Image of ${van.name} ` } />
          <div className="van-info">
              <h3>{van.name}</h3>
              <p>${van.price}<span>/day</span></p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>

  );
}

export default DashVan