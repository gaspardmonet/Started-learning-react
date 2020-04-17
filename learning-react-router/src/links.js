import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { render } from "react-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link> <br />
        <Link to="/about">About</Link><hr />
        {/* <Link to="/contact">Contacts</Link> */}
      </div>
    );
  }
}
