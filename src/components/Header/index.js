import "./index.scss";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    // navigation section of the app
  return (
    <div className="header-section-parent">
      <header>
        <div className="header-section">
          <div className="left-section">
            <NavLink
              to="/create-todos"
              className="navigation"
              activeClassName="selected-nav"
            >
              Create
            </NavLink>
            <NavLink
              to="/edit-todos"
              className="navigation"
              activeClassName="selected-nav"
            >
              Edit
            </NavLink>
          </div>
          <div className="right-section">
            TO-DO<span style={{ fontSize: "50px" }}>s</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
