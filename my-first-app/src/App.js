import React, { Component } from "react";
class Custom extends Component {
  render() {
    return <a href={this.props}>{this.props.linkText}</a>;
  }
}
export default Custom;
