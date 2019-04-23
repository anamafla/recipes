import React from "react";
import Recipe from "./Recipe";

function Results(props) {
  const results = props.data;

  return (
    <div className="row">
      {results &&
        results.map(item => <Recipe recipe={item} key={item.recipe.uri} />)}
    </div>
  );
}

export default Results;
