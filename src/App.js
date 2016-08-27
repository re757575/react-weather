import React, { Component } from 'react';
import HelloWorld, { HelloWorld2 } from './HelloWorldComponent';
import Profile from './ProfileComponent';

export default class App extends Component {

  constructor(props) {
    super(props);

	this.state = {
	  appTitle: 'Simple React'
	};
  }

  handleChangeTitle(title) {
    this.setState({
	  appTitle: title
	});
  }


  render() {
    return (
	 <div>
	   <h1>{this.state.appTitle}</h1>
	   <HelloWorld />
       <HelloWorld2 />
	   <Profile name="alex" age="26" changeTitle={this.handleChangeTitle.bind(this)}/>
	 </div>
    );
  }
}
