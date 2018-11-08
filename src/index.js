import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/landing.css";
import { BrowserRouter } from "react-router-dom";

// import App from "./App";
// import Form from "./components/form.jsx";
// import FactList from "./components/listAllFacts.js";
import App from "./components/App.js";

// import Landing from "./pages/landing.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
// <BrowserRouter>
//   <div>
//     <Switch>
//       <Route path="/facts/form" component={Form} />
//       <Route path="/facts/all" component={FactList} />
//       <Route path="/" component={Landing} />
//     </Switch>
//   </div>
// </BrowserRouter>,
