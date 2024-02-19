// Van.jsx
import React from "react";

export default function Van({ van }) {
  return (
    <div className="van">
      <img src={van.imageUrl} alt={van.name} />
      <h2>{van.name}</h2>
      <p>{van.description}</p>
      <p>${van.price} per night</p>
    </div>
  );
}
