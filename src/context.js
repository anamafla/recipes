import React, { useState, useEffect } from "react";
import axios from "axios";

const APP_ID = process.env.REACT_APP_ID;
const APP_KEY = process.env.REACT_APP_KEY;

export const Context = React.createContext();

export function Provider(props) {
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  //   useEffect(() => {
  //     const query = "avocado";

  //     axios
  //       .get(
  //         `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}%20&from=0&to=10&calories=591-722&health=alcohol-free`
  //       )
  //       .then(response => {
  //         const results = response.data.hits;
  //         setResults(results);
  //         setIsLoading(false);
  //         console.log("results", results);
  //       })
  //       .catch(error => {
  //         console.log("An error has ocurred");
  //         setIsError(true);
  //       });
  //   }, []);

  return (
    <Context.Provider value={[results, setResults]}>
      {props.children}
    </Context.Provider>
  );
}
