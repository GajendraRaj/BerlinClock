import React from "react";
import PropTypes from "prop-types";

const BerlinClock = props => {
  const berlinFormat = time => {
    const [hours, minutes, seconds] = time.split(":").map(d => parseInt(d));
    const firstRow = seconds % 2 === 0 ? "Y" : "O";

    return firstRow;
  };

  return <div>{berlinFormat(props.time)}</div>;
};

BerlinClock.propTypes = {
  time: PropTypes.string.isRequired
};

export default BerlinClock;
