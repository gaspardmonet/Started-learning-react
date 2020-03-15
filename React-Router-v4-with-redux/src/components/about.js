import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class About extends Component {
  render() {
    return (
      <div>
        <h1>Hello About {this.props.userName}</h1>
        <Link to="/">Go to Home</Link>
      </div>
    );
  }
}

function mapStateToProp(state) {
  //return object
  return {
    userName: state.rootReducer.username
    // state k bad reducer ka naam jo combineReducer m huga then us
    // reducer ki state m s jo chahen property mangwalen
  };
}

function mapDispatchToProps(dispatch) {
  return [{}];
}
export default connect(mapStateToProp, mapDispatchToProps)(About);

// 1st connect function: kn kn c states apny mangwani hen
// 2nd connect functiom : kn kn s action dispatch krny hen
// dono milky 1 function return krengy jsmy hamara component pass hujaega

// export default About;
