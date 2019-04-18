import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);

  const APP_ID = process.env.REACT_APP_ID;
  const APP_KEY = process.env.REACT_APP_KEY;

  console.log("APP_ID", APP_ID);
  console.log("APP_KEY", APP_KEY);

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    getRecipes();
  };

  const getRecipes = () => {
    return axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}%20&from=0&to=3&calories=591-722&health=alcohol-free`
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
    <div className="row  search">
      <form onSubmit={handleOnSubmit}>
        <h2>What do you want to cook</h2>
        <input
          type="text"
          name="query"
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
      {results && <Results data={results} />}
    </div>
  );
}

export default Search;
