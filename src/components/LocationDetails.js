import React from "react";

export class LocationDetails extends React.Component {
  getFormattedHour(timeObj) {
    let date = new Date(timeObj);
    let hour = date.getHours();
    let mins = date.getMinutes().toString();

    mins = mins.length === 1 ? "0" + mins : mins;

    return hour + ":" + mins;
  }

  getFormattedDate(timeObj) {
    let date = new Date(timeObj);
    let day = date.getUTCDay().toString();
    let month = (date.getUTCMonth() + 1).toString();
    let year = date.getUTCFullYear();

    day = day.length === 1 ? "0" + day : day;
    month = month.length === 1 ? "0" + month : month;

    return day + "/" + month + "/" + year;
  }

  getRandomInt() {
    return Math.floor(Math.random() * Math.floor(100));
  }

  render() {
    let stations = this.props.data;

    return (
      <React.Fragment>
        <React.Fragment>
          <div className="search__results--grid-title">
            <h3>To:</h3>
          </div>
          <div className="search__results--grid-title">
            <h3>Line:</h3>
          </div>
          <div className="search__results--grid-title">
            <h3>Date:</h3>
          </div>
        </React.Fragment>

        {stations.map(st => (
          <React.Fragment key={"00fr-" + st.number + st.name}>
            <div
              key={"a-" + st.number + st.name}
              className="search__results--grid"
            >
              <p>{st.to}</p>
            </div>
            <div
              key={"b-" + st.number + st.name}
              className="search__results--grid"
            >
              <p>{st.name}</p>
            </div>
            <div
              key={"c-" + st.number + st.name}
              className="search__results--grid"
            >
              <p>
                {this.getFormattedHour(st.stop.departure)} -{" "}
                {this.getFormattedDate(st.stop.departure)}
              </p>
            </div>
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}
