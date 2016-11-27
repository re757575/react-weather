import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appTitle: 'Simple React'
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.appTitle}</h1>
      </div>
    );
  }
}
