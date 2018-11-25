import React, { Component } from "react";
import ListItem from "./ListItem";

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
              content: item.content
            }))
        });
      })
      .catch(error => console.log(error));
  }

  renderItems() {
    return this.state.items.map(item => (
      <ListItem key={item.url} item={item} content={item.content} />
    ));
  }

  render() {
    return (
      <div className="main-div">
        <section className="main-txt-container">
          <h2 className="list-h2s">Topics Most Visited</h2>
          <ul className="list-item-container">
            {this.renderItems()}
          </ul>
        </section>
      </div>
    );
  }
}

export default Topics;
