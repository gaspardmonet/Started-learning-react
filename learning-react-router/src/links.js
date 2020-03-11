import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { render } from "react-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contacts</Link>
      </div>
    );
  }
}
