import React from "react";
import PropTypes from "prop-types";
import berlinFormat from "../lib/clockEngine";
import Seconds from "./Seconds";
import Hours from "./Hours";
import Minutes from "./Minutes";

const BerlinClock = props => {
  const fromLocaleToBerlinFormat = berlinFormat(props.time);

  return (
    <div className="clock mv4">
      <Seconds seconds={fromLocaleToBerlinFormat.firstRow} />
      <Hours
        hours={[
          fromLocaleToBerlinFormat.secondRow,
          fromLocaleToBerlinFormat.thirdRow
        ]}
      />
      <Minutes
        minutes={[
          fromLocaleToBerlinFormat.fourthRow,
          fromLocaleToBerlinFormat.lastRow
        ]}
      />
    </div>
  );
};

BerlinClock.propTypes = {
  time: PropTypes.string.isRequired
};

export default BerlinClock;
