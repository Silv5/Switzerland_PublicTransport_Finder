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

  getInfo = () => {
    axios
      .get(`${this.api.url}locations?query=${this.state.query}`)
      .then(({ data }) => {
        this.setState({
          results: data.stations,
          showSuggestions: true
        });
      });
  };

  render() {
    return (
      <section className="search">
        <div className="container__form">
          <form>
            <div className="container__form--child">
              <div className="search__bar">
                <input
                  className="search__bar--input"
                  placeholder="Search for..."
                  ref={input => (this.search = input)}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="search__btn">
                <button type="submit">
                  <i className="fa fa-search" />
                </button>
              </div>
              <div className="search__autocomplete">
                {this.state.showSuggestions && (
                  <Suggestions results={this.state.results} />
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
