import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired
};
const defaultProps = {
  name: 'Default name for app'
}

class MyComponent extends Component {
  componentWillMount(){
    console.log('will mount');
  }

  componentDidMount(){
    console.log('mouted');
  }
  render() {
      const {title, name, onClick} = this.props;

    return (
      <div className="component">
        <h1>Title: {title}</h1>
        <p> Name: {name}</p>
        <div onClick = {onClick}> Click me </div>
        <p>Text returned from mycomponent file</p>

      </div>
    );
  }
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;