import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import NavBar from "./navBar.js";
import FactList from "./listAllFacts.js";
import Landing from "../pages/landing.js";
import Form from "./form.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/factlist" component={FactList} />
          <Route path="/form" component={Form} />
        </Switch>
      </div>
    );
  }
}
export default App;
