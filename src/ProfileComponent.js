import React, { Component } from 'react';

export default class ProfileComponent extends Component {

  constructor(props) {
    super(props);
	this.state = {
	  address: '台灣台中市....'
	}
  }

  handleChangeAddress(event) {
    this.setState({
	  address: event.target.value
	});
  }

  render() {

   var address = this.state.address;

    return ( 
	  <div>
	    <p>name: {this.props.name}</p>
		<p>age: {this.props.age}</p>
		<hr/>
		<p>address: &nbsp;   
		  <input type="text" value={address} onChange={
		    // this.handleChangeAddress.bind(this)
			// 使用 arrow function
			(event) => this.handleChangeAddress(event)
		  } />

		</p>
        {this.state.address}
	  </div>
	);
  }
}
