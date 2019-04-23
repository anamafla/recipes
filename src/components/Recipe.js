import React from "react";

export default function Recipe(props) {
  const { recipe } = props.recipe;

  return (
    <div className="col-md-3">
      <div className="card mb-4 shadow-sm">
        <img className="card-img-top" src={recipe.image} alt={recipe.label} />
        <div className="card-body">
          <p>{recipe.label}</p>
        </div>
        {/* {recipe.healthLabels.map((healthLabel, index) => (
          <span key={index}>
            <small>{healthLabel}</small>
          </span>
        ))} */}
      </div>
    </div>
  );
}
