import React from "react";

export class ApiResults extends React.Component {
  render() {
    var apiData = this.props.apiData;

    if (apiData.length === 0) {
      return null;
    } else {
      return (
        <div className="container__results">
          {apiData.stations.map(res => (
            <div key={res.id} className="result">
              <h5>
                {res.icon === "bus" ? (
                  <i className="fas fa-bus" />
                ) : (
                  <i className="fas fa-train" />
                )}
                {res.name}
              </h5>

              <p>Lat: {res.coordinate["x"]}</p>
              <p>Lon: {res.coordinate["y"]}</p>
            </div>
          ))}
        </div>
      );
    }
  }
}
