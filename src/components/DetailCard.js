import React from "react";
import { Link } from "react-router-dom";

function DetailCard(props) {
  const { item } = props;
  return (
    <>
      <Link to="/" className="btn btn-dark btn-sm mb-4">
        Go Back
      </Link>
      <div className="card recipe-card">
        <img className="card-img-top" src={item.image} alt={item.label} />
        <div className="card-body">
          <h3>{item.label}</h3>
        </div>
        <ul className="list-group list-group-flush">
          {item.ingredientLines.map(ingredient => (
            <li className="list-group-item"> {ingredient}</li>
          ))}
        </ul>
        <div className="card-body" />
      </div>
    </>
  );
}

export default DetailCard;
