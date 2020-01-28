import React from "react";

import "./styles.css";

// import { Search } from "./components/Search";
import { Search } from "./components/Search";

const header = (
  <header>
    <div className="container centered">
      <h1 className="primary-color">
        <span class="flag">
          <i class="fas fa-times" />
        </span>
        <span class="title">Public Transport Finder</span>
      </h1>
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
        <Search />
      </div>
    );
  }
}
