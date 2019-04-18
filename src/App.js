import React, { Component } from "react";
import "./App.css";
import Search from "./Search";

class App extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar nabvar-expand-md navbar-light fixed-top"
          style={{ backgroundColor: "tomato" }}
        >
          {" "}
          Easy Recipes{" "}
        </nav>
        <div className="container">
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
