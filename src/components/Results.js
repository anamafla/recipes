import React, { useContext } from "react";
import Recipe from "./Recipe";
import { Context } from "../context";

function Results(props) {
  const results = props.data;

  const resultsTest = useContext(Context);
  console.log("resultsTest", resultsTest);

  return (
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
  );
}

export default Results;
