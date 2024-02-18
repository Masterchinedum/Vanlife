import './Van.css';

const Van = ({ vanData }) => {
  const { id, name, price, description, imageUrl, type } = vanData;

  return (
    <div className="van-card">
      <img src={imageUrl} alt={name} width="200" height="150" />
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>{description.substring(0, 100) + '...'}</p>
      <p>Type: {type}</p>
      <button>Read More</button> </div>
  );
};

export default Van;
