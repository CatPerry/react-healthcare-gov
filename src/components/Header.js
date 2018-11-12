import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DropdownMenuParent from './Dropdown';

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={"/"}>
          <h1>Hello Healthcare</h1>
        </Link>
        <DropdownMenuParent />
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;
