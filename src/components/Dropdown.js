import React, { Component } from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { relative } from "path";

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
    // if (Route === {Landing})
    return (
      <Dropdown sixe="sm" id="dropdown-container" isOpen={this.state.dropdownOpen} toggle={this.toggle} >
        <DropdownToggle data-boundary="dropdown-menu-style" 
                        id="dropdown-toggle-style" 
                        caret 
                        style={{ transition: "ease-in-out", 
                        textAlign: "center", 
                        transform: "translate3d(0px, -63px, 0px)", 
                        zIndex: "4" }}><strong>Find Answers Here</strong></DropdownToggle>
        <DropdownMenu id="dropdown-menu-style" 
          modifiers={{
            setMaxHeight: {
              enabled: true,
              order: 890,
              fn: (data) => {
                return {
                  ...data,
                  styles: {
                    ...data.styles,
                    overflow: 'auto',
                    maxHeight: 435,
                  },
                };
              },
            },
          }}>
          <Link to={"/articles"}>
            <DropdownItem className="dropdown-item">Articles</DropdownItem>
          </Link>
          {/* <DropdownItem divider /> */}
          <Link to={"/blogs"}>
            <DropdownItem className="dropdown-item">Explore Our Blog</DropdownItem>
          </Link>
          {/* <DropdownItem divider /> */}
          <Link to={"/glossary"}>
            <DropdownItem className="dropdown-item">Glossary / Definitions</DropdownItem>
          </Link>
          {/* <DropdownItem divider /> */}
          <Link to={"/states"}>
            <DropdownItem className="dropdown-item">States</DropdownItem>
          </Link>
          {/* <DropdownItem divider /> */}
          <Link to={"/topics"}>
            <DropdownItem className="dropdown-item">Topics</DropdownItem>
          </Link>
          {/* <DropdownItem divider /> */}
          <Link to={"/site-index"}>
            <DropdownItem className="dropdown-item">Site Index</DropdownItem>
          </Link>
        </DropdownMenu>
      </Dropdown>
    )
  }
}

export default DropdownMenuParent;
