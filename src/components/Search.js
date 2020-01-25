import React from "react";

import { ApiResults } from "./ApiResults";

export class Search extends React.Component {
  state = {
    query: "",
    data: []
  };

  api = {
    url: "https://transport.opendata.ch/v1/",
    location: "locations?query="
  };

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let apiLocation = this.api.url + this.api.location;

    // fetch data from api
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
      // update state data
      this.setState({ data: JSON.parse(xhr.responseText) });
    });

    xhr.open("GET", apiLocation + this.state.query);
    xhr.send();
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  render() {
    return (
      <section className="search">
        <div className="container__form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Search"
              onChange={this.handleChange}
            />
            <input type="submit" value="find" />
          </form>
        </div>
        {/* ApiResults is wrapped in its own div already */}
        <ApiResults apiData={this.state.data} />
      </section>
    );
  }
}
