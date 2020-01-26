import React from "react";

export class Suggestions extends React.Component {
  clickHandler = event => {
    // grab clicked location data
    let newLocation = event.target.innerHTML;
    let newId = event.target.id;

    // update parent's (Search) query state
    // and id to fetch station details -> new API call
    this.props.queryHandler(newLocation, newId);
  };

  render() {
    const options = this.props.results.map(r => (
      <li key={r.x + "-" + r.id} id={r.id} onClick={this.clickHandler}>
        {r.name}
      </li>
    ));

    return <ul>{options}</ul>;
  }
}
