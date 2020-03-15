import React, { Component } from "react";
import Routers from "./Route";
import { Provider } from "react-redux";
import store from "./stores/index";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routers />
      </Provider>
    );
  }
}

export default App;
