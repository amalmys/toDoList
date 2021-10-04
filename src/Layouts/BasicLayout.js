import "./BasicLayout.scss";
import React from "react";
import Header from "../components/Header";
import Edit from "../pages/Edit";
import Create from "../pages/Create";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

const basicLayout = () => {
  // by default the route is re directed to create page
  return (
    <div className="basic-component">
      <Header />
      <div className="bottom-part">
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Redirect to="/create-todos" />}
          />
          <Route path="/create-todos" component={Create} />
          <Route path="/edit-todos" component={Edit} />
        </Switch>
      </div>
    </div>
  );
};

export default basicLayout;
