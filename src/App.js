import React, { Component } from 'react';
import HelloWorld, { HelloWorld2 } from './HelloWorldComponent';

export default class App extends Component {
  render() {
    return (
	 <div>
	   <HelloWorld />
       <HelloWorld2 /> 
	 </div>
    );
  }
}
