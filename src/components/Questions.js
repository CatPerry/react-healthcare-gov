import React, { Component } from "react";
import NewSingleItem from "./NewSingleItem";

const questions = "https://www.healthcare.gov/api/questions.json";

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch(questions)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ 
          items: data.questions
            .filter(item => !!item.title)
            .map(item => ({
              title: item.title,
              url: item.url,
              descrip: item.content
            })) });
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

export default Questions;
