import React from "react";

export class LocationDetails extends React.Component {
  render() {
    // load the next station's departures.
    // display: platform #, date and time
    for (let i = 0; i < this.props.arrayLength; i++) {
      console.log(this.props.data[i]);
    }

    return <p>working on that..</p>;
  }
}
