import React, { Component, useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {
  const [start, setStart] = useState(true);
  const [stop, setStop] = useState(false);
  const [reset, setReset] = useState(false);
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [newWorkTime, setNewWorkTime] = useState(25);
  const [newBreakTime, setNewBreakTime] = useState(5);
  const [duration, setDuration] = useState("Work-Time");
  const [minutes, setMinutes] = useState(workDuration);
  const [seconds, setSeconds] = useState(0);
  //start timer
  function startTimer() {
    setStop(true);
    setStart(false);
    setReset(true);
  }
  useEffect(() => {

    if (start === false) {
      setTimeout(() => {
        if (minutes === 0 && seconds === 0 && duration === "Work-Time") {
          setMinutes(breakDuration);
          setSeconds(0);
          alert(`work duration is over`);
          setDuration("Break-Time");
        }
        if (minutes === 0 && seconds === 0 && duration === "Break-Time") {
          setMinutes(workDuration);
          setSeconds(0);
          alert(`break duration is over`);
          setDuration("Work-Time");
        }
        else if (seconds === 0 && minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);

        }
        else if (seconds > 0) {
          setSeconds(seconds - 1);
        }
      }, 1 * 1000);
    }
  }, [minutes, seconds, start, duration]);
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
    setDuration("Work-Time");
    setMinutes(25);
    setSeconds(0);
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
    if (newWorkTime === "" || newBreakTime === "" || newWorkTime === "0" || newBreakTime === "0") {
      console.log(newWorkTime);
    } else {
      setWorkDuration(newWorkTime);
      setBreakDuration(newBreakTime);
      setMinutes(newWorkTime);
      setSeconds(0);
    }
  }
  const printFinalString = (val) => {
    if (val < 10) {
      return (`0${val}`);
    }
    return val;
  }
  return (
    <div id="main" >

      <h1 style={{ color: "black" }}>{`${printFinalString(minutes)}:${printFinalString(seconds)}`}</h1>
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
