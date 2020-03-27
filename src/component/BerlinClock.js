import React from "react";
import PropTypes from "prop-types";
import berlinFormat from "../lib/clockEngine";
import Seconds from "./Seconds";

const BerlinClock = props => {
  const fromLocaleToBerlinFormat = berlinFormat(props.time);

  return (
    <div className="clock mv4">
      <Seconds seconds={fromLocaleToBerlinFormat.firstRow} />
    </div>
  );
};

BerlinClock.propTypes = {
  time: PropTypes.string.isRequired
};

export default BerlinClock;
