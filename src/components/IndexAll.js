import React, { Component } from "react";
import ListItem from "./ListItem";
// import _ from 'lodash';

const title_URL = "https://www.healthcare.gov/api/index.json";

class IndexAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch(title_URL)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          items: data
            .filter(item => !!item.title)
            .map(item => ({
              title: item.title,
              url: item.url,
              content: item.bite
            }))
        });
      })
      .catch(error => console.log(error));
  }

  renderItems() {
    return this.state.items.map(item => (
      <ListItem key={item.url} item={item} />
    ));
  }

  render() {
    return (
      <div className="main-div">
        <section className="main-txt-container">
          <h1 className="main-h1s">Site Index</h1>
          <ul className="list-item-container">
            {this.renderItems()}
          </ul>
        </section>
      </div>
    );
  }
}

export default IndexAll;
