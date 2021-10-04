import logo from "./logo.svg";
import "./App.css";
import React from "react";
import BasicLayout from "./Layouts/BasicLayout";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  //all routes are handled in the basicLayout
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={BasicLayout} />
          <Route path="/create-todos" component={BasicLayout} />
          <Route path="/edit-todos" component={BasicLayout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
