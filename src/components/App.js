import React, { Component, useState } from "react";
import '../styles/App.css';

const App = () => {
  const [start, setStart] = useState(true);
  const [stop, setStop] = useState(false);
  const [reset, setReset] = useState(false);
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [newWorkTime, setNewWorkTime] = useState(25);
  const [newBreakTime, setNewBreakTime] = useState(5);
  const [duration, setDuration] = useState("Work Time");
  //start timer
  function startTimer() {
    setStop(true);
    setStart(false);
    setReset(true);
  }
  //stop timer
  function stopTimer() {
    setStart(true);
    setStop(false);
  }
  //reset timer
  function resetTimer() {
    setStart(true);
    setStop(false);
    setReset(false);
    setWorkDuration(25);
    setBreakDuration(5);
    setDuration("Work Time");
  }
  function getNewWorkTime(event) {
    const newTime = event.target.value;
    setNewWorkTime(newTime);
  }
  function getNewBreakTime(event) {
    const newTime = event.target.value;
    setNewBreakTime(newTime);
  }
  //set New Timing
  function setNewTiming() {
    if (newWorkTime === "" || newBreakTime === "") {
      console.log(newWorkTime);
    } else {
      setWorkDuration(newWorkTime);
      setBreakDuration(newBreakTime);
    }
  }

  return (
    <div id="main" >
      <h1 style={{ color: "black" }}>{workDuration}</h1>
      <h3 style={{ color: "black", marginLeft: "45%" }}>{duration}</h3>

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
          onClick={stopTimer}
          disabled={stop ? false : true}
        >Stop</button>

        <button
          style={{ color: "black" }}
          data-testid='reset-btn'
          onClick={resetTimer}
          disabled={reset ? false : true}
        >Reset</button>
      </div>
      <br />
      <div style={{ marginLeft: "30%" }}>

        <input
          id="workTime"
          min="0"
          type="number"
          data-testid='work-duration'
          placeholder="work-duration"
          defaultValue={workDuration}
          disabled={start ? false : true}
          onChange={getNewWorkTime}
        />

        <input
          id="breakTime"
          min="0"
          type="number"
          data-testid='break-duration'
          placeholder="break-duration"
          defaultValue={breakDuration}
          disabled={start ? false : true}
          onChange={getNewBreakTime}
        />

        <button
          disabled={start ? false : true}
          style={{ color: "black" }}
          data-testid='set-btn'
          onClick={setNewTiming}
        >Set </button>

      </div>
    </div >
  )
}


export default App;
