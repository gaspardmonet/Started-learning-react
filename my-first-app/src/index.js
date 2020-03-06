import React from "react";
import ReactDOM from "react-dom";
// import Custom from "./App";
import "./App.css";
// import Method from "./method";
import Clock from "./clock";

// import App from './App';
// import * as serviceWorker from './serviceWorker';

// var h1 = <h1 title="hello">hello world</h1>;

ReactDOM.render(
  <div>
    {/* <Custom link="https://www.google.com" linkText="Google" />,
    <Custom link="https://www.facebook.com" linkText="facebook" />,
     <Custom link="https://www.youtube.com" linkText="youtube" />
   <Method /> */}
    <Clock />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
