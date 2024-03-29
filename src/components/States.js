import React, { Component } from "react";
import ListItem from "./ListItem";

const states = "https://www.healthcare.gov/api/states.json";

class States extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch(states)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ 
          items: data.states
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
      <ListItem key={item.url} item={item} content={item.content}/>
    ));
  }

  render() {
    return (
      <div className="main-div"> 
        <section className="main-txt-container">
          <h2 className="list-h2s">Information By State</h2>
          <ul className="list-item-container">
            {this.renderItems()}
          </ul>
        </section>
      </div>
    );
  }
}

export default States;
