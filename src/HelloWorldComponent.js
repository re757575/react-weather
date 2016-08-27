import React, { Component } from 'react';

// 在沒有使用 state的情況下, 直接使用 function 建立 Component 是比較好的！
// 預設
export default function HelloWorld() {
  return <h1>Hello, World</h1>;
}

// 使用 class 方式建立
export class HelloWorld2 extends Component {
  render () {
    return (
	  <h1>Hello, World2</h1>
	);
  }
}
