import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import About from "./about";
import Navbar from "./links";
import createBrowserHistory from "history/createBrowserHistory";
import Contact from "./contact";

const customHistory = createBrowserHistory();

export default function CustomRoute() {
  return (
    <Router history={customHistory}>
      <div>
        <Navbar />

        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        {/* <Route path="/contact" component={Contact} /> */}
        <Route path="/contact/:id" component={Contact} />
      </div>
    </Router>
  );
}
