import React from "react";

function Results(props) {
  console.log("props", props);

  const results = props.data;

  return (
    <>
      <div className="results d-flex flex-row">
        {results &&
          results.map(item => (
            <div className="card recipe-card col-md-4">
              <img
                className="card-img-top"
                src={item.recipe.image}
                alt={item.recipe.label}
              />
              <div className="card-body">
                <h5>{item.recipe.label}</h5>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Results;
