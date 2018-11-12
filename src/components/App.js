import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import ItemsList from './ItemsList';
import NewSingleItem from "./NewSingleItem";
import AllCollections from './AllCollections';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello Healthcare </h1>
        <ItemsList {...this.state}/>
        {/* < AllCollections /> */}
        <article id="main"></article>
      </div>
    );
  }
}

export default App;
