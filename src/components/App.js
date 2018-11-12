import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import { hot } from "react-hot-loader";
import "./App.css";
import Header from './Header';
import Landing from "./Landing";
import Detail from "./Detail";
import Articles from './Articles';
import IndexAll from './IndexAll';
import Blogs from './Blogs';
import Glossary from "./Glossary";
import Questions from "./Questions";
import States from "./States";
import Topics from "./Topics";



// const Header = () => <h2>Header</h2>;
// const Dashboard = () => <h2>Dashboard</h2>;
// const Landing = () => <h2>Landing</h2>;
// const DetailPage = () => <h2>DetailPage</h2>;

class App extends Component {
  render() {
    return <div>
        <BrowserRouter>
          <div>
            {/* <div className="container"> */}
            <Header />
            <Route exact path="/" component={Landing} />
            <Route path="/site-index" component={IndexAll} />
            <Route path="/articles" component={Articles} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/questions" component={Questions} />
            <Route path="/glossary" component={Glossary} />
            <Route path="/states" component={States} />
            <Route path="/topics" component={Topics} />
            {/* <IndexAll {...this.state}/> */}
            {/* < AllCollections /> */}
          </div>
        </BrowserRouter>
      </div>;
  }
}

export default App;
