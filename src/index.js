import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/landing.css";

// import App from "./App";
import Form from "./components/form.jsx";
import Landing from "./pages/landing.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Landing />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
