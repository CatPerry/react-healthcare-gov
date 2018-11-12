import React, { Component } from "react";
import NewSingleItem from "./NewSingleItem";

const topics = "https://www.healthcare.gov/api/topics.json";

class Topics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch(topics)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          items: data.topics
            .filter(item => !!item.title)
            .map(item => ({
              title: item.title,
              url: item.url,
              descrip: item.content
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

export default Topics;
