import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import $ from 'jquery';
import "materialize-css/dist/css/materialize.min.css";

const Landing = () => {
  return (
    <div>
      <article className="landing-text" style={{ textAlign: 'center' }}>Choices, when you need them.</article>
    </div>
  );
};

export default Landing;
