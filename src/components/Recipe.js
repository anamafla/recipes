import React from "react";
import { Link } from "react-router-dom";

export default function Recipe(props) {
  const { recipe } = props.recipe;

  return (
    <div className="col-md-3">
      <div className="card mb-4 shadow-sm">
        <img className="card-img-top" src={recipe.image} alt={recipe.label} />
        <div className="card-body">
          <h5>
            {recipe.label.length < 20
              ? `${recipe.label}`
              : `${recipe.label.substring(0, 25)}...`}
          </h5>
        </div>
        <button className="btn">
          <Link
            to={`/detail/recipe/${recipe.uri}`}
            onClick={() => props.handleClickDetails(recipe)}
          >
            View more
          </Link>
        </button>
        <div className="card-body">
          <p>{recipe.source}</p>
        </div>
      </div>
    </div>
  );
}
