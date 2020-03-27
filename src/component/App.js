import React, { useState, useEffect } from "react";
import "./App.css";
import StandradClock from "./StandardClock";

function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      setTime(startClock(new Date()));
    }, 1000);
  });

  const startClock = date => {
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    console.log(`${h}:${m}:${s}`);
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="App">
      <h1>The Berlin Clock</h1>
      <div>
        <StandradClock time={time} />
      </div>
    </div>
  );
}

export default App;
