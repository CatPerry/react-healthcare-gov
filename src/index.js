import 'materialize-css/dist/css/materialize.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from "./components/App.js";
import "./components/App.css";

const store = createStore(() => [], {}, applyMiddleware())

ReactDOM.render(
  <Provider store={store}><App /></Provider>, 
document.getElementById("root")
);
