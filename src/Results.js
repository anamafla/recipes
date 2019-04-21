import React from "react";

function Results(props) {
  console.log("props", props);

  const results = props.data;

  return (
    <>
      <div className="results ">
        {results &&
          results.map(item => (
            <div className="card recipe-card col-md-4">
              <img
                className="card-img-top"
                src={item.recipe.image}
                alt={item.recipe.label}
              />
              <div className="card-body">
                <p>{item.recipe.label}</p>
              </div>
              {item.recipe.healthLabels.map(healthLabel => (
                <span>
                  <small>{healthLabel}</small>
                </span>
              ))}
            </div>
          ))}
      </div>
    </>
  );
}

export default Results;
