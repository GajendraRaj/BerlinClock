import React, { useState, useEffect } from "react";
import StandradClock from "./StandardClock";
import startClock from "../lib/startClock";
import "./App.css";
import BerlinClock from "./BerlinClock";

function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      setTime(startClock(new Date()));
    }, 1000);
  });

  return (
    <div className="App">
      <h1>The Berlin Clock</h1>
      <div>
        <BerlinClock time={time} />
        <StandradClock time={time} />
      </div>
    </div>
  );
}

export default App;
