import React, { Component } from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import DropdownMenuParent from './Dropdown';

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={"/"}>
          <h1>Hello Healthcare.gov</h1>
        </Link>
        <DropdownMenuParent />
      </div>
    </nav>
  )
}

export default Header;
