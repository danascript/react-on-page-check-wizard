import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="navigation container">
        <div className="row d-flex justify-content-between">
          <NavLink
            exact
            to="/"
            className="btn btn-lg btn-outline-dark"
            activeClassName="active"
          >
            1
          </NavLink>
          <NavLink to="/2" className="btn btn-lg btn-outline-dark">
            2
          </NavLink>
          <NavLink to="/3" className="btn btn-lg btn-outline-dark">
            3
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Nav;
