import React, { Component } from "react";
import FactList from "./listAllFacts.js";
const API_URL = "http://localhost:5000/facts";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fact: {}
    };
    this.form = React.createRef();
    this.factNumber = React.createRef();
    this.fact = React.createRef();
    this.loader = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let factNumber = this.factNumber.current.value;
    let fact = this.fact.current.value;

    this.setState({
      fact: {
        factNumber,
        fact
      }
    });

    this.form.current.style.display = "none";
    this.loader.current.style.visibility = "visible";

    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({ factNumber, fact }),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(createdFact => {
        console.log(createdFact);
        this.loader.current.style.display = "none";
        this.form.current.reset();
        this.form.current.style.display = "block";
      });
  }

  render() {
    return (
      <main>
        <h2 id="facts-title">Snapple Facts</h2>

        <form id="fact-form" onSubmit={this.handleSubmit} ref={this.form}>
          <label>Fact Number</label>
          <input
            type="text"
            id="fact-number"
            name="factNumber"
            type="number"
            ref={this.factNumber}
            required
          />

          <label>Snapple Fact</label>
          <textarea
            className="u-full-width"
            input="text"
            name="fact"
            id="fact"
            ref={this.fact}
            required
          />
          <button className="button-primary" type="submit">
            Send your Fact!
          </button>
        </form>
        <div className="loader" ref={this.loader} />
        <h2 className="headers">Your Recent Facts</h2>
        <FactList />
      </main>
    );
  }
}

export default Form;
