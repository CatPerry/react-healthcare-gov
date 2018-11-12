import React, { Component } from "react";
import NewSingleItem from "./NewSingleItem";
import { findDOMNode } from "react-dom";

const title_URL = "https://www.healthcare.gov/api/index.json";

class ItemsList extends Component {
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
              url: `http://www.healthcare.gov${item.url}`,
              descrip: item.bite
            }))
        });
      })
      .catch(error => console.log(error));
  }

  renderItems() {
    return this.state.items.map(item => (
      <NewSingleItem key={item.title} item={item} />
    ));
  }

  render() {
    // console.log(this.state)
    return <ul>{this.renderItems()}</ul>;
  }
}

export default ItemsList;
