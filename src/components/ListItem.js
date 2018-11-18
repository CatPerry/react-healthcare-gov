import React, { Component } from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Landing from './Landing';
import MainView from './MainView';

const ListItem = ({ item }) => {

  if (item.url.includes('/es/')) {
    return (
      <div className="list-item">
        <Link {...item} to={{
          pathname: item.url,
          params: {content: item},
          state: {
            item: {
              title: item.title,
              url: item.url,
              content: item.content,
            }
          }
        }} component={<MainView item={item}  {...item} />}>{item.title} (Spanish)</Link>
      </div>
    );
  } 
  else {  
    return ( 
      <div className="list-item">
        <Link to={{
          pathname: item.url,
          params: {content: item},
          state: {
            item: {
              title: item.title,
              url: item.url,
              content: item.content,
            }
          }
        }}>{item.title}</Link>
      </div>
    );
  }
}
 
export default ListItem;
