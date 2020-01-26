import React from "react";

export const Suggestions = props => {
  const options = props.results.map(r => <li key={r.id}>{r.name}</li>);
  return <ul>{options}</ul>;
};
