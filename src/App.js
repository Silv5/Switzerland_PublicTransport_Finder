import React from "react";

import "./styles.css";

import { Search } from "./components/Search";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Switzerland Public Transport Finder</h1>
        <h2>Find public transport available within Switzerland</h2>
        <Search />
      </div>
    );
  }
}
