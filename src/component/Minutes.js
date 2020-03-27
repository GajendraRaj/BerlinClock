import React from "react";
import PropTypes from "prop-types";

function Minutes(props) {
  const minuteColor = minute => (minute === "Y" ? "bg-yellow" : "bg-silver");

  return (
    <div>
      {props.minutes.map((minute, i) => (
        <div key={i} className="hours">
          {minute &&
            minute.split("").map((m, idx) => (
              <div
                key={idx}
                className={`hours-rows ${minuteColor(m)}`}
                style={{
                  width: i === 0 ? "calc(100% / 11)" : "calc(100% / 4)"
                }}
              />
            ))}
        </div>
      ))}
    </div>
  );
}

Minutes.propTypes = {
  minutes: PropTypes.array.isRequired
};

export default Minutes;
