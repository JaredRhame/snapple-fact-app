import React, { Component } from "react";
import { Link } from "react-router-dom";
import Landing from "../pages/landing.js";
import Form from "./form.jsx";
class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/factlist">Fact List</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavBar;

// <nav className="navbar navbar-dark bg-primary fixed-top">
