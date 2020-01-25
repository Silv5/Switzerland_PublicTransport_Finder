import React from "react";

import "./styles.css";

import { Search } from "./components/Search";

const header = (
  <header>
    <div className="container centered">
      <h1 className="title">Switzerland Public Transport Finder</h1>
      <h2>Find public transport available within Switzerland</h2>
    </div>
  </header>
);

const choices = (
  <section className="choices">
    <div className="container centered">
      <button className="btn">Find Points</button>
      <button className="btn">Search Routes</button>
    </div>
  </section>
);

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        {header}
        {choices}
        <Search />
      </div>
    );
  }
}
