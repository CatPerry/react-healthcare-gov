import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { hot } from "react-hot-loader";
import "./App.css";
import Header from './Header';
import Landing from "./Landing";
import Articles from './Articles';
import IndexAll from './IndexAll';
import Blogs from './Blogs';
import Glossary from "./Glossary";
import States from "./States";
import Topics from "./Topics";
import MainView from './MainView';
import FooterPage from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      data: {},
    }
  }

  componentWillReceiveProps(data) {
    this.setState({
      item: data,
    })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div id="main">
            <Header />

            <Switch>
              <Route exact path="/" component={Landing} items={this.state.items}/>
              <Route exact path="/site-index" component={IndexAll} />
              <Route exact path="/articles" component={Articles} />
              <Route exact path="/blogs" component={Blogs} />
              <Route exact path="/glossary" component={Glossary} />
              <Route exact path="/states" component={States} />
              <Route exact path="/topics" component={Topics} />
              <Route path="*" render={(props) => (
                <MainView props={this.props} {...props}/>
              )} />
            </Switch>
            <FooterPage />
          </div>
          
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
