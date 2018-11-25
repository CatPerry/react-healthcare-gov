'use strict';

let PropTypes;
let React;
let ReactDOM;

describe('ReactES6Class', () => {
  let container;
  const freeze = function (expectation) {
    Object.freeze(expectation);
    return expectation;
  };
  let Inner;
  let attachedListener = null;
  let renderedName = null;

  beforeEach(() => {
    PropTypes = require('prop-types');
    React = require('react');
    ReactDOM = require('react-dom');
    container = document.createElement('div');
    attachedListener = null;
    renderedName = null;
    Inner = class extends React.Component {
      getName() {
        return this.props.name;
      }
      render() {
        attachedListener = this.props.onClick;
        renderedName = this.props.name;
        return <div className={this.props.name} />;
      }
    };
  });

  function test(element, expectedTag, expectedClassName) {
    const instance = ReactDOM.render(element, container);
    expect(container.firstChild).not.toBeNull();
    expect(container.firstChild.tagName).toBe(expectedTag);
    expect(container.firstChild.className).toBe(expectedClassName);
    return instance;
  }

  it('preserves the name of the class for use in error messages', () => {
    class Foo extends React.Component { }
    expect(Foo.name).toBe('Foo');
  });

  it('throws if no render function is defined', () => {
    class Foo extends React.Component { }
    expect(() =>
      expect(() => ReactDOM.render(<Foo />, container)).toThrow(),
    )
  });

  it('renders a simple stateless component with prop', () => {
    class Foo extends React.Component {
      render() {
        return <Inner name={this.props.bar} />;
      }
    }
    test(<Foo bar="foo" />, 'DIV', 'foo');
    test(<Foo bar="bar" />, 'DIV', 'bar');
  });

  it('renders based on state using initial values in this.props', () => {
    class Foo extends React.Component {
      constructor(props) {
        super(props);
        this.state = { bar: this.props.initialValue };
      }
      render() {
        return <span className={this.state.bar} />;
      }
    }
    test(<Foo initialValue="foo" />, 'SPAN', 'foo');
  });

  it('renders based on state using props in the constructor', () => {
    class Foo extends React.Component {
      constructor(props) {
        super(props);
        this.state = { bar: props.initialValue };
      }
      changeState() {
        this.setState({ bar: 'bar' });
      }
      render() {
        if (this.state.bar === 'foo') {
          return <div className="foo" />;
        }
        return <span className={this.state.bar} />;
      }
    }
    const instance = test(<Foo initialValue="foo" />, 'DIV', 'foo');
    instance.changeState();
    test(<Foo />, 'SPAN', 'bar');
  });
});