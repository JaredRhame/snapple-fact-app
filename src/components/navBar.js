import React, { Component } from "react";
import { Link } from "react-router-dom";
import Landing from "../pages/landing.js";
import Form from "./form.jsx";
import "../styles/navbar.css";
class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <nav className="container">
          <ul className="row">
            <li className="four columns active">
              <Link to="/">Home</Link>
            </li>
            <li className="four columns">
              <Link to="/factlist">Fact List</Link>
            </li>
            <li className="four columns">
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
