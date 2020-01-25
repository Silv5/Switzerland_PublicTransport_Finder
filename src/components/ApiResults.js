import React from "react";

export class ApiResults extends React.Component {
  render() {
    var apiData = this.props.apiData;

    if (apiData.length === 0) {
      return (
        <div className="apiResults">
          <h3>Results: 0</h3>
        </div>
      );
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

              <p>X: {res.coordinate["x"]}</p>
              <p>Y: {res.coordinate["y"]}</p>
            </div>
          ))}
        </div>
      );
    }
  }
}
