import { Component } from "react";
class MainHeader extends Component {
  constructor() {
    super();
    this.cass = true;
  }
  render() {
    return <h1>Hello, {this.cass ? "O" : "X"} world!</h1>;
  }
}

// function MainHeader() {
//   const test = "test";
//   const friends = "친구들";
//   const arr = [1, 2, 3, 4, 5];
//   const cass = true;
//   return <h1>Hello, {cass ? "Hi" : "안녕"} world!</h1>;
// }

export default MainHeader;
