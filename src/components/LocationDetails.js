import React from "react";

export class LocationDetails extends React.Component {
  getFormattedHour(timeObj) {
    let date = new Date(timeObj);
    return date.getHours() + ":" + date.getMinutes();
  }

  getFormattedDate(timeObj) {
    let date = new Date(timeObj);

    return (
      date.getUTCDay() +
      "/" +
      (date.getUTCMonth() + 1) +
      "/" +
      date.getUTCFullYear()
    );
  }

  render() {
    // load the next station's departures.
    // display: platform #, date and time
    // for (let i = 0; i < this.props.arrayLength; i++) {
    //   let a = this.props.data[i];
    //   console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
    //   console.log(a.to);
    //   console.log(a.name);
    //   console.log(a.operator); // SBB (German) CFF (French) FFS (Italian)
    //   console.log(a.stop.departure);
    //   console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

    // parse timestamp:
    // new Date(el.stop.departureTimestamp * 1000);
    // }

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
          <React.Fragment>
            <div className="search__results--grid">
              <p>{st.to}</p>
            </div>
            <div className="search__results--grid">
              <p>{st.name}</p>
            </div>
            <div className="search__results--grid">
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
