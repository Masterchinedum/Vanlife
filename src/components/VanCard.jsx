import React from 'react';
import './VanCard.css'; // Import your CSS file for styling

const VanCard = ({ van }) => {
  return (
    <div className="van-card">
      <img src={van.imageUrl} alt={van.name} className="van-image" />
      <div className="van-details">
        <h3 className="van-name">{van.name}</h3>
        <p className="van-price">${van.price}/night</p>
        <p className="van-description">{van.description}</p>
        <button className="van-button">Rent Now</button>
      </div>
    </div>
  );
};

export default VanCard;
