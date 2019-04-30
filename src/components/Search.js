import React, { useState, useContext } from "react";
import axios from "axios";
import Results from "./Results";
import Spinner from "./Spinner";
import { Context } from "../context";

function Search(props) {
  const [query, setQuery] = useState("");
  const [healthLabels, setHealthLabels] = useState("alcohol-free");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const APP_ID = process.env.REACT_APP_ID;
  const APP_KEY = process.env.REACT_APP_KEY;

  const [results, setResults] = useContext(Context);
  console.log("resultsInSearch", results);

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleHealthLabels = e => {
    e.preventDefault();
    console.log("e.targel.value", e.target.value);
    setHealthLabels(e.target.value);
  };

  const handleOnSubmit = e => {
    console.log("submited");
    e.preventDefault();
    getRecipes();
  };

  const getRecipes = () => {
    console.log("consulting API");
    setIsError(false);
    setIsLoading(true);
    return axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}%20&from=0&to=15&calories=591-722&health=${healthLabels}`
      )
      .then(response => {
        const results = response.data.hits;
        setResults(results);
        setIsLoading(false);
      })
      .catch(error => {
        console.log("An error has ocurred");
        setIsError(true);
      });
  };

  return (
    <div>
      <header className="masthead text-white text-center">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h1 className="title mb-5">Recipes Searcher</h1>
              <h3 className="intro">
                Find the recipe to fit your lifestyle y health
              </h3>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <form onSubmit={handleOnSubmit}>
                <div className="form-row mb-4">
                  <div className="col-12 col-md-9 mb-2 mb-md-0">
                    <input
                      type="text"
                      name="query"
                      value={query}
                      onChange={handleInputChange}
                      className="form-control form-control-lg"
                      placeholder="Enter the recipe that you are looking"
                    />
                  </div>
                  <div className="col-12 col-md-3">
                    <button
                      type="submit"
                      className="btn btn-block btn-lg btn-primary"
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group form-check mr-4">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="check1"
                      value="vegetarian"
                      onChange={handleHealthLabels}
                    />
                    <label className="form-check-label" htmlFor="check1">
                      Vegetarian
                    </label>
                  </div>
                  <div className="form-group form-check mr-4">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="check2"
                      value="vegan"
                      onChange={handleHealthLabels}
                    />
                    <label className="form-check-label" htmlFor="check2">
                      Vegan
                    </label>
                  </div>
                  <div className="form-group form-check mr-4">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="check3"
                      value="dairy-free"
                      onChange={handleHealthLabels}
                    />
                    <label className="form-check-label" htmlFor="check3">
                      Dairy-free
                    </label>
                  </div>
                  <div className="form-group form-check mr-4">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="check4"
                      value="fat-free"
                      onChange={handleHealthLabels}
                    />
                    <label className="form-check-label" htmlFor="check4">
                      Fat-free
                    </label>
                  </div>
                  <div className="form-group form-check mr-4">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="check5"
                      value="low-sugar"
                      onChange={handleHealthLabels}
                    />
                    <label className="form-check-label" htmlFor="check5">
                      Low-sugar
                    </label>
                  </div>
                  <div className="form-group form-check mr-4">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="check5"
                      value="gluten-free"
                      onChange={handleHealthLabels}
                    />
                    <label className="form-check-label" htmlFor="check5">
                      Gluten-free
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
      {isError && <div> Something went wrong... </div>}

      {isLoading ? (
        <Spinner />
      ) : (
        results && (
          <Results
            data={results}
            handleClickDetails={props.handleClickDetails}
          />
        )
      )}
    </div>
  );
}

export default Search;
