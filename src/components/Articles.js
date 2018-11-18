import React, { Component } from "react";
import ListItem from "./ListItem";

const articles = "https://www.healthcare.gov/api/articles.json";

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch(articles)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          items: data.articles
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
    return this.state.items.reverse().map(item => (
      <ListItem key={item.url} item={item} content={item.content} />
    ));
  }

  render() {
    return (
      <div className="main-div">
        <section className="main-txt-container">
          <h1 className="main-h1s">Blogs by Subject</h1>
          <ul className="list-item-container">
            {this.renderItems()}
          </ul>
        </section>
      </div>
    );
  }
}

export default Articles;
