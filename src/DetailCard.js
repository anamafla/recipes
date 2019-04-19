import React from "react";

function DetailCard() {
  return (
    <div className="card recipe-card">
      <img
        className="card-img-top"
        src={item.recipe.image}
        alt={item.recipe.label}
      />
      <div className="card-body">
        <h3>{item.recipe.label}</h3>
      </div>
      <ul className="list-group list-group-flush">
        {item.recipe.ingredientLines.map(ingredient => (
          <li className="list-group-item"> {ingredient}</li>
        ))}
      </ul>
      <div className="card-body" />
    </div>
  );
}

export default DetailCard;
