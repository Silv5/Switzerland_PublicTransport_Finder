import React from "react";
import { PaginacionTabla } from "./PaginacionTabla";

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

  render() {
    let stations = [];

    this.props.data.forEach(obj => {
      stations.push([
        obj.to,
        obj.name,
        this.getFormattedHour(obj.stop.departureTimestamp),
        this.getFormattedDate(obj.stop.departure)
      ]);
    });

    return (
      <React.Fragment>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>To</th>
              <th>Line</th>
              <th>Time</th>
              <th>Date</th>
              <th />
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
