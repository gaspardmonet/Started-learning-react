import React, { Component } from "react";

export default class Contact extends Component {
  test() {
    console.log(this.props)
    console.log(this.props.match.params.id);
  }

  render() {
    let Users = {
      1234: {
        name: "ali"
      },
      2345: {
        name: "umer"
      },
      3456: {
        name: "subhan"
      }


    };
    return (
      <div>
        <h1> hello Contacts</h1>
        <button onClick={this.test.bind(this)}>test</button>
        <br />
          username is {Users[this.props.match.params.id].name}
      </div>
    );
  }
}
