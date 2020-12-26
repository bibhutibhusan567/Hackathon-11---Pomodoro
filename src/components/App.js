import React, { Component, useState } from "react";
import '../styles/App.css';

const App = () => {
  const [start, setStart] = useState(true);
  const [stop, setStop] = useState(false);
  const [reset, setReset] = useState(false);
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [duration, setDuration] = useState("Work Duration");

  //start timer
  function startTimer() {
    setStop(true);
    setStart(false);
    setReset(true);
  }
  //change timer

  return (
    <div id="main" >
      <h1 style={{ color: "black" }}>{workDuration}</h1>
      <h1 style={{ color: "black" }}>{duration}</h1>
      <div style={{ marginLeft: "44%" }}>
        <button
          style={{ color: "black" }}
          data-testid='start-btn'
          onClick={startTimer}
          disabled={start ? false : true}
        >Start</button>

        <button
          style={{ color: "black" }}
          data-testid='stop-btn'
          disabled={stop ? false : true}
        >Stop</button>
        <button
          style={{ color: "black" }}
          data-testid='reset-btn'
          disabled={reset ? false : true}
        >Reset</button>
      </div>
      <br />
      <div style={{ marginLeft: "30%" }}>
        <input
          min="0"
          type="number"
          data-testid='work-duration'
          placeholder="work-duration"
          defaultValue={workDuration}
          disabled={start ? false : true}
        />

        <input
          min="0"
          type="number"
          data-testid='break-duration'
          placeholder="break-duration"
          defaultValue={breakDuration}
          disabled={start ? false : true}
        />

        <button
          disabled={start ? false : true}
          style={{ color: "black" }}
          data-testid='set-btn'
        >Set </button>
      </div>
    </div >
  )
}


export default App;
