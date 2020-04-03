import { connect } from "react-redux";
import React, { Component } from "react";
import { addTodo } from "../action/index";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todos: new Array(),
    };

    this.clickHandler = this.clickHandler.bind(this);
    this._changeUserInput = this._changeUserInput.bind(this);
  }
  async clickHandler() {
    console.log(this.props.Text);
    console.log(this.props.id);
    console.log(this.state.todo);
    await this.props.onClick(this.state.todo);
    this.state.todos.push(this.props.id + ' ' + this.props.Text)
    this.setState({
      todo: ""
    });
  }
  _changeUserInput(event) {
    console.log(event.target.value);
    // console.log(event);
    this.setState({
      todo: event.target.value
    });
    console.log(this.state.todo);
  }

  render() {
    return (
      <div>
        <h1>Todo List App </h1>
        <input
          type="text"
          value={this.state.todo}
          onChange={this._changeUserInput}
        />
        <button onClick={this.clickHandler}> Add todo</button>
        <ul>
        
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Text: state.text,
    id: state.id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: text => {
      dispatch(addTodo(text));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
