import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class About extends Component {
  home() {
    console.log(`about button`);
    console.log(this.props.history)
    this.props.history.push("/");
  }
  contact() {
    this.props.history.push("/contact/");
  }
  render() {
    return (
      <div>
        <h1> hello from About</h1>
        <button onClick={this.home.bind(this)}>Home</button>
        {/* <button onClick={this.contact.bind(this)}>Contact</button> */}

        <ul>
          <Link to="/contact/1234">1234</Link>
          <br />
          <Link to="/contact/2345">2345</Link>
          <br />
          <Link to="/contact/3456">3456</Link>
          <br />
        </ul>
      </div>
    );
  }
}
