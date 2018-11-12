import React, { Component } from "react";

const NewSingleItem = ({ item }) => {
  return (
    <li key={item.title} item={item} >
      <a href={item.url}>{item.title}</a>
    </li>
  )
};
 
export default NewSingleItem;
