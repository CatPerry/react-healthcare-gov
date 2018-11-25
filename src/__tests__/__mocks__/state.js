import React, { Component } from 'react';

export default class States extends Component {
  static all()
  {
    return fetch('https://www.healthcare.gov/api/states.json')
    .then((response) => {
      console.warn(response.json());
      return response.json();
    })
  }
}


//random test to get around error "Your test suite must contain at least one test."
const add = (a, b) => a + b;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});