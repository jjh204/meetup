import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import * as atatus from "atatus-spa";

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
atatus.config('4102073e1fc743c0b6e44fa01af809f9').install();