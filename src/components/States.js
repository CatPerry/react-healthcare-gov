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
    // var u = states.slice(31);
    // var urlPath = u.replace(/\.json/g, "");

    return this.state.items.reverse().map(item => (
      <ListItem key={item.url} item={item} content={item.content}/>
    ));
  }

  render() {
    return (
      <div className="main-div"> 
        <section className="main-txt-container">
          <h1 className="main-h1s">Information By State</h1>
          <ul className="list-item-container">
            {this.renderItems()}
          </ul>
        </section>
      </div>
    );
  }
}

export default States;
