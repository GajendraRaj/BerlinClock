import React from "react";
import PropTypes from "prop-types";

function Seconds(props) {
  const secondsColor = props.seconds === "Y" ? "bg-yellow" : "bg-silver";
  return <div className={`seconds ${secondsColor}`} />;
}

Seconds.propTypes = {
  seconds: PropTypes.string.isRequired
};

export default Seconds;
