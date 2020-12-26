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
    <div id="main">
      <h1>{workDuration}</h1>
      <h1>{duration}</h1>
      <div style={{ marginLeft: "44%" }}>
        <button
          data-testid='start-btn'
          onClick={startTimer} disabled={start ? false : true}
        >Start</button>

        <button
          data-testid='stop-btn'
          disabled={stop ? false : true}
        >Stop</button>
        <button
          data-testid='reset-btn'
          disabled={reset ? false : true}
        >Reset</button>
      </div>
      <br />
      <div style={{ marginLeft: "30%" }}>
        <input
          type="number"
          data-testid='work-duration'
          placeholder="work-duration"
          defaultValue={workDuration}
        />

        <input
          type="number"
          data-testid='break-duration'
          placeholder="break-duration"
          defaultValue={breakDuration}
        />

        <button data-testid='set-btn'>Set </button>
      </div>



    </div >
  )
}


export default App;
