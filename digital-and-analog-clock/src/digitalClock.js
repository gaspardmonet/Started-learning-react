import React, { Component } from "react";

class DigitalClock extends Component {
  render() {
    return <div>{this.props.time};</div>;
  }
}

export default DigitalClock;
