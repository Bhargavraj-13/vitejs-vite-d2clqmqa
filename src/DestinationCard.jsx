// DestinationCard.js
import React from "react";

const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card">
      <img src={destination.image} alt={destination.name} />
      <h2>{destination.name}</h2>
      <h3>{destination.location}</h3>
      <p>{destination.description}</p>
      <p className="price">{destination.price}</p>
    </div>
  );
};

export default DestinationCard;
