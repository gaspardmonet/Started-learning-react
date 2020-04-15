import { connect } from "react-redux";
import React, { Component } from "react";
import { addTodo, deleteTodo } from "../action/index";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todos: [],
    };

    this.clickHandler = this.clickHandler.bind(this);
    this._changeUserInput = this._changeUserInput.bind(this);
    this.delete = this.delete.bind(this);

  }
  async clickHandler() {
    // console.log(this.props.Text);
    // console.log(this.props.id);
    // console.log(this.state.todo);
    await this.props.onClickAddTodo(this.state.todo);
    this.state.todos.push(this.props.Text)
    this.setState({
      todo: ""
    });
  }
  _changeUserInput(event) {
    // console.log(event.target.value);
    // console.log(event);
    this.setState({
      todo: event.target.value
    });
    // console.log(this.state.todo);
  }
  delete(event) {
    var id = event.target.id;
    console.log(event.target)
    console.log(`event.target.id is `, event.target.id);
    console.log(`event.target.text is `, event.target.text);
    var todosInstance = this.state.todos;
    todosInstance.splice(id, 1);
    this.setState({
      todos: todosInstance
    });
    this.props.onClickX(id)
  }



  render() {
    var listItem = this.state.todos.map((a, b) =>
      <li key={b}> {a}<span onClick={this.delete} id={b} text={a}>  X</span></li>,
    )
    return (
      <div>
        <h1>Todo List App </h1>
        <input
          type="text"
          value={this.state.todo}
          onChange={this._changeUserInput}
        />
        <button onClick={this.clickHandler}> Add todo </button>
        <ul>
          {listItem}
        </ul>
      </div>
    );
  };
}
function mapStateToProps(state) {
  return {
    Text: state.text,
    id: state.id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClickAddTodo: text => {
      dispatch(addTodo(text));
    },
    onClickX: (id, text) => {
      dispatch(deleteTodo(id, text))
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);