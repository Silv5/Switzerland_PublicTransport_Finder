import React from "react";
import axios from "axios";

import { Suggestions } from "./Suggestions";

export class Search extends React.Component {
  state = {
    query: "",
    results: [],
    showSuggestions: false
  };

  api = {
    url: "https://transport.opendata.ch/v1/",
    location: "locations?query="
  };

  constructor(props) {
    super(props);

    this.queryHandler = this.queryHandler.bind(this);
  }

  handleInputChange = e => {
    if (e.target.value === "") {
      this.setState({ showSuggestions: false });
    }

    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        }
      }
    );
  };

  getInfo() {
    axios
      .get(`${this.api.url}locations?query=${this.state.query}`)
      .then(({ data }) => {
        this.setState({
          results: data.stations,
          showSuggestions: true
        });
      });
  }

  queryHandler(newLocation) {
    this.setState({
      query: newLocation,
      showSuggestions: false
    });
  }

  handleSubmit() {
    alert("getting all the data!");
  }

  render() {
    return (
      <section className="search">
        <div className="container__form">
          <form onSubmit={this.handleSubmit}>
            <div className="container__form--child">
              <div className="search__bar">
                <input
                  className="search__bar--input"
                  placeholder="Search for..."
                  ref={input => (this.search = input)}
                  onChange={this.handleInputChange}
                  value={this.state.query}
                />
              </div>
              <div className="search__btn">
                <button type="submit">
                  <i className="fa fa-search" />
                </button>
              </div>
              <div className="search__autocomplete" id="clickNhide">
                {this.state.showSuggestions && (
                  <Suggestions
                    results={this.state.results}
                    queryHandler={this.queryHandler}
                  />
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
