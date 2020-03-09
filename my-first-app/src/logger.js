import React, { Component } from "react";

class Logger extends Component {
  constructor(props) {
    // this runs first
    //this constructor and super make let use " this.state "
    super(props);
    console.log(`constructor running`);
    this.state = {
      name: "umer here"
    };
  }

  componentWillMount() {
    // component render huny s pehly chlta h
    console.log(`componentWillMount is runing`);
  }
  componentDidMount() {
    // component render huny k baad chlta h
    console.log(`Component did Mount is running `);
  }
  componentWillReceiveProps(nextProps) {
    // props changes so will appear here
    console.log(`next props`, nextProps);
  }
  shouldComponentUpdate(newProps, newState) {
    // runs after updating component
    //if you want to get old props so write " this.props "
    console.log(`should component update is running`);
    console.log(`New props are`, newProps);
    console.log(`New states are`, newState);
    return true; //necessary boolean return to control the update of component
  }

  componentWillUpdate(nextProps, nextState) {
    // component huny s phly koi bh operation chla skty hen
    console.log(`should component update is running`);
    console.log(`New props are`, nextProps);
    console.log(`New states are`, nextState);
  }
  componentDidUpdate(oldProps, oldState) {
    // component update huny k baad
    console.log(`componentDidUpdate is running`);
    console.log(`old props are`, oldProps);
    console.log(`old states are`, oldState);
  }
  componentWillUnmount() {
    // jab component DOM s hat rha huga
    console.log(`componentWillUnmount is running`);
  }
  // static getDerivedStateFromProps(prop, state) {
  //   console.log(`getDerivedStateFromProps is runing`);
  //   console.log(`Next Props are :`, prop);
  //   console.log(`State is `, state);
  // }

  render() {
    return (
      <div>
        {console.log(`Render method runing`)}
        {this.props.time}
      </div>
    );
  }
}

export default Logger;
