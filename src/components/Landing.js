import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import $ from 'jquery';
import "materialize-css/dist/css/materialize.min.css";

class Landing extends Component {
  render() {
    return (
      <div >
        <img src={'../images/adult-affection-aged-1449049.jpg'} className="landing-pg-img"/>
        <div className="landing-text-container">
          <p className="landing-text" style={{ textAlign: 'center' }}><strong>Choices</strong> when you need them. <br></br>
          <strong>Health</strong> in your hands.</p>
        </div>
      </div>
    );
  }
};

export default Landing;
