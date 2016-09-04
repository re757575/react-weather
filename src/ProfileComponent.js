import React, { Component } from 'react';

export default class ProfileComponent extends Component {

  constructor(props) {
    super(props);

	this.state = {
	  address: '台灣台中市....'
	}
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
	// return true;
	return nextState.address !== this.state.address;
  }

  componentWillUpdate(inextProps, nextState) {
    console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleChangeAddress(event) {
    this.setState({
	  address: event.target.value
	});

	// change parent component state
	this.props.changeTitle(event.target.value);
  }

  render() {

   console.log('render');

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
