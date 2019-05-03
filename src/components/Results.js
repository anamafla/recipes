import React, { useContext } from "react";
import Recipe from "./Recipe";
import { Context } from "../context";

function Results(props) {
  const [results] = useContext(Context);

  return (
    <div className="container">
      <div className="row mt-4">
        {results &&
          results.map(item => (
            <Recipe
              recipe={item}
              key={item.recipe.uri}
              handleClickDetails={props.handleClickDetails}
            />
          ))}
      </div>
    </div>
  );
}

export default Results;
