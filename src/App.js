import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import DetailCard from "./components/DetailCard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/detail/recipe/:id" component={DetailCard} />

          {/* <Search /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
