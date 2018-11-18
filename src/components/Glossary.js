import React, { Component } from "react";
import ListItem from "./ListItem";

const glossary = "https://www.healthcare.gov/api/glossary.json";

class Glossary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch(glossary)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          items: data.glossary
            .filter(item => !!item.title)
            .map(item => ({
              title: item.title,
              url: item.url,
              content: item.content,
            }))
        });
      })
      .catch(error => console.log(error));
  }

  renderItems() {
    return this.state.items.map(item => (
      <ListItem key={item.url} item={item} content={item.content}/>
    ));
  }

  render() {
    return (
      <div className="main-div">
        <section className="main-txt-container">
          <h1 className="main-h1s">Glossary / Definitions</h1>
          <ul className="list-item-container">
            {this.renderItems()}
          </ul>
        </section>
      </div>
    );
  }
}

export default Glossary;
