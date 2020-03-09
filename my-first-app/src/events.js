import React, { Component } from "react";

class MyEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    // this.Increment = this.Increment.bind(this);
  }

  Increment(param, ev) {
    //last parametr gives events of reacts
    // console.log(this, `this`);
    // this.setState({
    //   counter: this.state.counter + 1
    // });
    // console.log(param, `hello`);
    console.log(ev, `event`);
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.Increment.bind(this)}> click me</button> */}
        <button onClick={this.Increment.bind(this, "param")}> click me</button>
        {this.state.counter}
        <button onClick={this.Increment.bind(this, "event")}> click me </button>
      </div>
    );
  }
}

export default MyEvents;
