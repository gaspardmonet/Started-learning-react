import React, { Component } from "react";

class Method extends Component {
  myFacebookLink() {
    return "https://www.facebook.com/muhammadumeridreesi";
  }

  myFacebookName() {
    return "Muhammad Umer Idreesi";
  }

  render() {
    return (
      <div>
        <p>
          My facebook ID is{" "}
          <a href={this.myFacebookLink()}> {this.myFacebookName()} </a>
        </p>
      </div>
    );
  }
}

export default Method;
