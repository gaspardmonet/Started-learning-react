import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      allUser: [],
      radioGroup: {
        MEANStack: false,
        MERNStack: true,
        LAMPStack: false
      },
      checkboxGroup: {
        Mongodb: false,
        Express: false,
        React: true,
        Node: false
      },
      selectGroup: Node
    };

    this.formHandler = this.formHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.radioHandler = this.radioHandler.bind(this);
    this.checkboxHandler = this.checkboxHandler.bind(this);
    this.selectHandler = this.selectHandler.bind(this);
    this.emailHandler = this.emailHandler.bind(this);
  }

  formHandler(event) {
    // console.log(ev);
    this.setState({
      username: event.target.value
    });
  }

  clickHandler() {
    let currentUser = this.state.allUser;
    currentUser.push(this.state.username);
    this.setState({
      username: "",
      allUser: currentUser
    });
    console.log(this.state.allUser);
  }

  radioHandler(event) {
    // console.log(event.target.value);
    let radioGroup = this.state.radioGroup;
    for (var key in radioGroup) {
      // console.log(radioGroup[key]);
      radioGroup[key] = false;
    }
    radioGroup[event.target.value] = event.target.checked;
    this.setState({
      radioGroup: radioGroup
    });
  }

  checkboxHandler(event) {
    console.log(event.target.value);
    let checkbox = this.state.checkboxGroup;
    checkbox[event.target.value] = event.target.checked;
    this.setState({
      checkboxGroup: checkbox
    });
  }

  selectHandler(event) {
    this.setState({
      selectGroup: event.target.value
    });
  }

  emailHandler() {
    console.log(this.refs.subscriber.value);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.formHandler}
        />
        <button onClick={this.clickHandler}>Save User</button>
        Developer Category:
        <label>
          MERNStack
          <input
            type="radio"
            category="devCategory"
            value="MERNStack"
            checked={this.state.radioGroup["MERNStack"]}
            onChange={this.radioHandler}
          />
        </label>
        <br />
        <label>
          MEANStack
          <input
            type="radio"
            category="devCategory"
            value="MEANStack"
            checked={this.state.radioGroup["MEANStack"]}
            onChange={this.radioHandler}
          />
        </label>
        <br />
        <label>
          LAMPStack
          <input
            type="radio"
            category="devCategory"
            value="LAMPStack"
            checked={this.state.radioGroup["LAMPStack"]}
            onChange={this.radioHandler}
          />
        </label>
        <br />
        <br />
        Technology:
        <label>
          Mongodb
          <input
            type="radio"
            category="Technology"
            value="Mongodb"
            checked={this.state.checkboxGroup["Mongodb"]}
            onChange={this.checkboxHandler}
          />
        </label>
        <br />
        <label>
          Express
          <input
            type="radio"
            category="Technology"
            value="Express"
            checked={this.state.checkboxGroup["Express"]}
            onChange={this.checkboxHandler}
          />
        </label>
        <br />
        <label>
          React
          <input
            type="radio"
            category="Technology"
            value="React"
            checked={this.state.checkboxGroup["React"]}
            onChange={this.checkboxHandler}
          />
        </label>
        <br />
        <label>
          Node
          <input
            type="radio"
            category="Technology"
            value="Node"
            checked={this.state.checkboxGroup["Node"]}
            onChange={this.checkboxHandler}
          />
        </label>
        <br />
        <br />
        <select value={this.state.selectGroup} onChange={this.selectHandler}>
          <option value="Node"> Node</option>
          <option value="Ruby"> Ruby</option>
          <option value="Python"> Python</option>
        </select>
        <br />
        <br />
        <label>
          Email please
          <input type="email" ref="subscriber" />
          <button onClick={this.emailHandler}> Save</button>
        </label>
      </div>
    );
  }
}
export default Forms;
