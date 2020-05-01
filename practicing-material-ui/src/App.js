import React, { Fragment } from "react";
import "./styles.css";
import { Header, Footer } from "./layout";
import Exercise from "./exercises/index";
export default function App() {
  return (
    <Fragment className="App">
      <Header />
      <Exercise />
      <Footer />
    </Fragment>
  );
}
