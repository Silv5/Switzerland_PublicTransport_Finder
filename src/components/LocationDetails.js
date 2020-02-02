import React from "react";
import { PaginacionTabla } from "./PaginacionTabla";

export class LocationDetails extends React.Component {
  render() {
    let stations = [];

    this.props.data.forEach(obj => {
      let hour = new Date(obj.stop.departureTimestamp)
        .toLocaleTimeString("en-GB")
        .slice(0, 5);
      let date = new Date(obj.stop.departure).toLocaleDateString("en-GB");

      stations.push([obj.to, obj.name, hour, date]);
    });

    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th>To</th>
              <th>Line</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <PaginacionTabla
            itemsperpage={5}
            nocolumns={4}
            items={stations}
            pagesspan={4}
          />
        </table>
      </React.Fragment>
    );
  }
}
