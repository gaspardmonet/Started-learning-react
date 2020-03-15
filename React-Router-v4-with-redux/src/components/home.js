import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeState } from "../actions/index";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    };
    this._changeUserInput = this._changeUserInput.bind(this);
    this._changeData = this._changeData.bind(this);
    this._changeState = this._changeState.bind(this);
  }

  _changeData() {
    console.log("event called");
  }
  _changeState() {
    console.log(this.props.userName);
    this.props.changeStateToReducer(this.state.userName);
    this.setState({
      userName: ""
    });
  }
  _changeUserInput(event) {
    console.log(event.target.value);
    this.setState({
      userName: event.target.value
    });
  }
  render() {
    return (
      <div>
        <h1>Hello World home {this.props.userName}</h1>
        <button onClick={this._changeState}>Change</button>
        <input
          type="text"
          value={this.state.userName}
          onChange={this._changeUserInput}
        />
        <Link to="/about">Go to About</Link>
      </div>
    );
  }
}

// is funtion m aap jo bh state mangwaengy wo is module m this.props s available hujaegi
//jesy is madule m this.props.username le skty hen

function mapStateToProp(state) {
  //return object
  return {
    userName: state.rootReducer.username
    // state k bad reducer ka naam jo combineReducer m huga then us
    // reducer ki state m s jo chahen property mangwalen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeStateToReducer: updatedUserName => {
      dispatch(changeState(updatedUserName));
    }
  };
}
export default connect(mapStateToProp, mapDispatchToProps)(Home);

// 1st connect function: kn kn c states apny mangwani hen
// 2nd connect functiom : kn kn s action dispatch krny hen
// dono milky 1 function return krengy jsmy hamara component pass hujaega
