import React, { Component } from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ListItem from './ListItem';
import {App} from "./App";
import $ from 'jquery';
import { Slideshow } from './Slideshow';

const MainView = (props) => {
  //Display content
  if (props.location.state.item.content) {
    $(function () {
      document.querySelector("#main-content").innerHTML = props.location.state.item.content;
    });
    return ( 
      <div className="main-view-container">
        <Slideshow/>
        <section className="main-view-text-box">
          <h1 className="main-h1s">{props.location.state.item.title}</h1>
          <div id="main-content"></div>
        </section>
      </div>
    ); 
  } 
  else if ((props.location.state.item.content === undefined) || 
    (props.location.state.item.content === "") || 
    (props.location.state.item.content === "\n"))  {      
    return (
      <div className="main-view-container">
        <Slideshow />
        <section className="main-view-text-box">
          <h1 className="main-h1s">{props.location.state.item.title}</h1>
          <div id="main-content">
            <p>We're sorry, there is currently no content for this subject, please check back later.</p>
            <p>Spanish: Lo sentimos, actualmente no hay contenido para este tema, por favor, vuelva más tarde.</p>
          </div>
        </section>
      </div>
    ); 
  }
}
 
export default MainView;
