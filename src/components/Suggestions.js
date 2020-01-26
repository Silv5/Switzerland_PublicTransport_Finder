import React from "react";

export class Suggestions extends React.Component {
  clickHandler = event => {
    // grab clicked location
    let newLocation = event.target.innerHTML;

    // update parent's query state
    this.props.queryHandler(newLocation);
  };

  render() {
    const options = this.props.results.map(r => (
      <li key={r.x + "-" + r.id} onClick={this.clickHandler}>
        {r.name}
      </li>
    ));

    return <ul>{options}</ul>;
  }
}
