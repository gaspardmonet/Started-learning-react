import React, { Component } from "react";
import Counter from "./counter";

class MyEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    // this.Increment = this.Increment.bind(this);
    this.IncrementCounter = this.IncrementCounter.bind(this);
    this.DecrementCounter = this.DecrementCounter.bind(this);
  }

  // Increment(param, ev) {
  //last parametr gives events of reacts
  // console.log(this, `this`);
  // this.setState({
  //   counter: this.state.counter + 1
  // });
  // console.log(param, `hello`);
  // console.log(ev, `event`);
  // }
  IncrementCounter() {
    console.log("Increment");
    this.setState({
      counter: this.state.counter + 1
    });
  }

  DecrementCounter() {
    console.log("decrement");
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.Increment.bind(this)}> click me</button> */}
        {/* <button onClick={this.Increment.bind(this, "param")}> click me</button>
        {this.state.counter}
        <button onClick={this.Increment.bind(this, "event")}> click me </button> */}

        <Counter
          counter={this.state.counter}
          increment={this.IncrementCounter}
          decrement={this.DecrementCounter}
        />
      </div>
    );
  }
}

export default MyEvents;
