import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class DropdownMenuParent extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} style={{ textAlign: "center" }}>
        <DropdownToggle id="dropdown-menu-style" caret>Dropdown</DropdownToggle>
        <DropdownMenu id="dropdown-menu-style">
          <Link to={"/articles"}>
            <DropdownItem>Healthcare Articles</DropdownItem>
          </Link>
          <DropdownItem divider />
          <Link to={"/blogs"}>
            <DropdownItem>Healthcare Blogs</DropdownItem>
          </Link>
          <DropdownItem divider />
          <Link to={"/questions"}>
            <DropdownItem>Ask Questions. Get Asnwers.</DropdownItem>
          </Link>
          <DropdownItem divider />
          <Link to={"/glossary"}>
            <DropdownItem>Healthcare Glossary</DropdownItem>
          </Link>
          <DropdownItem divider />
          <Link to={"/states"}>
            <DropdownItem>States</DropdownItem>
          </Link>
          <DropdownItem divider />
          <Link to={"/topics"}>
            <DropdownItem>Topics</DropdownItem>
          </Link>
        </DropdownMenu>
      </Dropdown>
    )
  }
}

export default DropdownMenuParent;
