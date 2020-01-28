import React from "react";

import "./styles.css";

// import { Search } from "./components/Search";
import { Search } from "./components/Search";

const header = (
  <header>
    <div className="container centered">
      <h1 className="primary-color">
        <span className="flag">
          <i className="fas fa-times" />
        </span>
        <span className="title">Public Transport Finder</span>
      </h1>
      <h2>Find public transport available within Switzerland</h2>
    </div>
  </header>
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
