import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let [test, setTest] = useState(0);

  function inc() {
    setTest(test + 1);
  }
  function dec() {
    setTest(test - 1);
  }
  function reset() {
    setTest(0);
  }

  return (
    <div className="App">
      <button onClick={inc}>next</button>
      <div>This is {test}</div>
      <button onClick={dec}>previous</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
