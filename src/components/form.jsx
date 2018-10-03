import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.factNumber = React.createRef();
    this.fact = React.createRef();
    this.loader = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const factNumber = this.factNumber.current.value;
    const fact = this.fact.current.value;

    const factPost = {
      factNumber,
      fact
    };

    e.target.style.display = "none";
    this.loader.current.style.visibility = "visible";

    console.log(factPost);
  }
  render() {
    return (
      <main>
        <h2 id="facts-title">Snapple Facts</h2>

        <form id="fact-form" onSubmit={this.handleSubmit}>
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
      </main>
    );
  }
}

export default Form;
