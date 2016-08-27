import React, { Component } from 'react';
import HelloWorld, { HelloWorld2 } from './HelloWorldComponent';
import Profile from './ProfileComponent';

export default class App extends Component {
  render() {
    return (
	 <div>
	   <HelloWorld />
       <HelloWorld2 />
	   <Profile name="alex" age="26"/>
	 </div>
    );
  }
}
