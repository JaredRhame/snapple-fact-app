import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
// import { Router, Route } from "react-router";

import { GoogleAPI, GoogleLogin, GoogleLogout } from "react-google-oauth";
import NavBar from "../components/navBar.js";
require("dotenv").config();

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomFact: "",
      isAuthenticated: false,
      user: null,
      token: ""
    };
  }

  logout = () => {
    this.setState({ isAuthenticated: false, token: "", user: null });
  };

  onFailure = error => {
    alert(error);
  };
  componentDidMount() {
    fetch("http://localhost:5000/facts")
      .then(response => response.json())
      .then(data => {
        let rnd = data[Math.floor(Math.random() * data.length)];
        let randomFact = (
          <div key={rnd._id}>
            <h3 className="headers">#{rnd.factNumber}</h3>
            <p className="p-txt">{rnd.factContent}</p>
          </div>
        );

        this.setState({ randomFact: randomFact });
      });
  }
  googleResponse = response => {
    const tokenBlob = new Blob(
      [JSON.stringify({ access_token: response.accessToken }, null, 2)],
      { type: "application/json" }
    );
    const options = {
      method: "POST",
      body: tokenBlob,
      mode: "cors",
      cache: "default"
    };
    fetch("http://localhost:5000/api/v1/auth/google", options).then(r => {
      const token = r.headers.get("x-auth-token");
      r.json().then(user => {
        if (token) {
          this.setState({ isAuthenticated: true, user, token });
        }
      });
    });
  };

  render() {
    return (
      <main className="landing">
        <h1 className="headers">
          Come together, and share your Snapple Facts!
        </h1>

        <GoogleAPI
          clientId="970124665905-au60n6u51c1bqhcn9qbgadk03oqvgbrk.apps.googleusercontent.com"
          onUpdateSigninStatus={this.responseGoogle}
          onInitFailure={this.responseGoogle}
        >
          <div>
            <div>
              <GoogleLogin />
            </div>
          </div>
        </GoogleAPI>
        <p className="p-txt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
        </p>
        <div className="rnd-fact">
          <h2 className="headers">Random Fact:</h2>

          <p>{this.state.randomFact}</p>
        </div>
        <div className="parallax" id="apple-parallax" />
        <div className="goal-section">
          <h2 className="headers">Our Goal</h2>

          <p className="p-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in
          </p>
        </div>
      </main>
    );
  }
}

export default Landing;
