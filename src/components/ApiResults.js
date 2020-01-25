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
              <p>{res.name}</p>
              <p>{res.icon}</p>
            </div>
          ))}
        </div>
      );
    }
  }
}
