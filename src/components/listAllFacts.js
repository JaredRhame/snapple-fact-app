import React, { Component } from "react";

class FactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fact: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/facts")
      .then(response => response.json())
      .then(data => {
        data.reverse();
        let facts = data.map(fact => {
          return (
            <div key={fact.id}>
              <h3>{fact.factNumber}</h3>
              <p>{fact.factContent}</p>
            </div>
          );
        });
        this.setState({ fact: facts });
      });
  }
  componentDidUpdate() {
    let factArr = [];
    fetch("http://localhost:5000/facts")
      .then(response => response.json())
      .then(data => {
        data.reverse();
        let facts = data.map(fact => {
          return (
            <div key={fact.id}>
              <h3>{fact.factNumber}</h3>
              <p>{fact.factContent}</p>
            </div>
          );
        });
        this.setState({ fact: facts });
      });
  }

  render() {
    return <div className="recent-facts">{this.state.fact}</div>;
  }
}

export default FactList;
