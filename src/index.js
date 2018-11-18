import React from "react";
import ReactDOM, { render } from "react-dom";
import 'babel-polyfill';
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from "./components/App.js";
import "./components/App.css";


const store = createStore(() => [], {}, applyMiddleware())

render(
  <Provider store={store}><App /></Provider>, 
document.getElementById("root")
);
