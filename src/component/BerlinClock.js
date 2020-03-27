import React from "react";
import PropTypes from "prop-types";
import berlinFormat from "../lib/clockEngine";

const BerlinClock = props => {
  const fromLocaleToBerlinFormat = berlinFormat(props.time);

  return <div>{fromLocaleToBerlinFormat.firstRow}</div>;
};

BerlinClock.propTypes = {
  time: PropTypes.string.isRequired
};

export default BerlinClock;
