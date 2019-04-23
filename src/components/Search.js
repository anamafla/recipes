import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Spinner from "./Spinner";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [healthLabels, setHealthLabels] = useState([]);

  const APP_ID = process.env.REACT_APP_ID;
  const APP_KEY = process.env.REACT_APP_KEY;

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleHealthLabels = () => {};

  const handleOnSubmit = e => {
    e.preventDefault();
    getRecipes();
  };

  const getRecipes = () => {
    return axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}%20&from=0&to=10&calories=591-722&health=alcohol-free`
      )
      .then(response => {
        const results = response.data.hits;
        setResults(results);
        console.log("results", results);
      })
      .catch(error => {
        console.log("An error has ocurred");
      });
  };

  return (
    <div>
      <header className="masthead text-white text-center">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h1 className="mb-5">What do you want to cook?</h1>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <form onSubmit={handleOnSubmit}>
                <div className="form-row">
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
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                      Vegetarian
                    </label>
                  </div>
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck2"
                    />
                    <label className="form-check-label" for="exampleCheck2">
                      Vegan
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>

      {results ? <Results data={results} /> : <Spinner />}
    </div>
  );
}

export default Search;
