import React from "react";
import "./styles.css";
import { Search } from "./components/Search";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Switzerland Public Transport</h1>
        <h2>Find a delicious recipe from the cocktailDB</h2>
        <Search />
      </div>
    );
  }
}
