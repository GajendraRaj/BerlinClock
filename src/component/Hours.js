import React from "react";
import PropTypes from "prop-types";

function Hours(props) {
  const hourColor = hour => (hour === "R" ? "bg-red" : "bg-silver");

  return (
    <div>
      {props.hours.map((hour, i) => (
        <div key={i} className="hours">
          {hour &&
            hour
              .split("")
              .map((h, idx) => (
                <div
                  key={idx}
                  className={`hours-rows ${hourColor(h)}`}
                  style={{ width: "calc(100% / 4)" }}
                />
              ))}
        </div>
      ))}
    </div>
  );
}

Hours.propTypes = {
  hours: PropTypes.array.isRequired
};

export default Hours;
