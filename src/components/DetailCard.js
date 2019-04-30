import React from "react";
import { Link } from "react-router-dom";

function DetailCard(props) {
  const { item } = props;
  return (
    <>
      <Link to="/" className="btn btn-dark btn-sm mb-4">
        Go Back
      </Link>
      <div className="container">
        <div className="row mb-4">
          <div className=" col-sm-6 col-md-6">
            <img src={item.image} alt={item.label} />
          </div>

          <div className="preparation-section col-sm-6 col-md-6">
            <h3>{item.label}</h3>
            <h4>Preparation</h4>
            <p>
              {" "}
              See full recipe on <a href={item.url}>{item.source} </a>
            </p>
          </div>
        </div>

        <div className="row mb-4">
          <div className="ingredients-section col-sm-6 col-md-6">
            <h4>Ingredients</h4>
            <ul className="list-group list-group-flush">
              {item.ingredientLines.map(ingredient => (
                <li className="list-group-item">
                  {" "}
                  <i className="far fa-check-circle" /> {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div className="nutrition-section col-sm-6 col-md-6 ">
            <h4>Nutrition</h4>
            {/* {item.dietLabels.length > 0 && (
                <li className="list-group-item">
                  <strong>Diet Labels: </strong>
                  {item.dietLabels.map(dietLabel => (
                    <span>{dietLabel}</span>
                  ))}
                </li>
              )} */}

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Calories: <span>{Math.round(item.calories)}</span>
              </li>

              {/* <li>
                  <strong>Health Labels: </strong>
                  {item.healthLabels.map(healthLabel => (
                    <span>{healthLabel}</span>
                  ))}
                </li> */}
            </ul>
            <ul className="list-group list-group-flush">
              {item.digest.slice(0, 3).map(item => (
                <li className="list-group-item">
                  <span>{item.label}</span>{" "}
                  <span>{Math.round(item.total)}</span> <span>{item.unit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailCard;
