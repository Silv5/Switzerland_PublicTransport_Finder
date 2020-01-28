import React from "react";
import axios from "axios";

import { Suggestions } from "./Suggestions";
import { LocationDetails } from "./LocationDetails";

const apiKey = "";

export class Search extends React.Component {
  state = {
    id: 0,
    query: "",
    limit: 10,
    results: [],
    locationDetails: [],
    showSuggestions: false
  };

  api = {
    url: "https://transport.opendata.ch/v1/",
    location: "locations?query=",
    station: "stationboard?id=",
    max: "&limit="
  };

  constructor(props) {
    super(props);

    this.queryHandler = this.queryHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    let url = this.api.url + this.api.location + this.state.query;

    axios.get(url).then(({ data }) => {
      this.setState({
        results: data.stations,
        showSuggestions: true
      });
    });
  }

  // used by child component (Suggestions)
  queryHandler(newLocation, newId) {
    let newLocationUrlCompatible = newLocation.replace(" ", "+");

    this.setState({
      id: newId,
      query: newLocation,
      showSuggestions: false,
      iframeSrc:
        "https://www.google.com/maps/embed/v1/place?key=" +
        apiKey +
        "&q=" +
        newLocationUrlCompatible +
        "+Switzerland+station"
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    // this.state.id is changed on child element (Suggestions)
    // now this function fetches the station details from the API's endpoint:
    // `https://transport.opendata.ch/v1/stationboard?id=${this.state.id}&limit=10`
    let url =
      this.api.url +
      this.api.station +
      this.state.id +
      this.api.max +
      this.state.limit;

    axios.get(url).then(({ data }) => {
      this.setState({
        locationDetails: data.stationboard
      });
    });
  }

  render() {
    return (
      <section className="search">
        <div className="container__form">
          <form onSubmit={this.handleSubmit}>
            <div className="container__form--child">
              <div className="search__bar">
                <label htmlFor="station location" className="hidden">
                  Station Location
                </label>
                <input
                  name="station location"
                  className="search__bar--input"
                  placeholder="Search for location"
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

        {this.state.locationDetails.length > 0 ? (
          <React.Fragment>
            <div className="search__results--container">
              <LocationDetails
                data={this.state.locationDetails}
                arrayLength={this.state.limit}
              />
            </div>
            <div className="search__results--map">
              <h3>{this.state.query}'s position: </h3>
              <iframe
                title="station google maps"
                src={this.state.iframeSrc}
                allowFullScreen
              />
            </div>
          </React.Fragment>
        ) : null}
      </section>
    );
  }
}
