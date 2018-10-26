import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomFact: ""
    };
  }
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
  render() {
    return (
      <main className="landing">
        <h1 className="headers">
          Come together, and share your Snapple Facts!
        </h1>
        <button type="submit" className="sub-btn">
          Log in
        </button>
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
