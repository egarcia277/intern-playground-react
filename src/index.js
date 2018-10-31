import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1 className="Title">MEDS4 Lookup Tables</h1>
      <ul>
        <li>AMR_Agency</li>
        <li>AMR_Emp</li>
        <li>AMR_Zone</li>
        <li>AMR_LookupDependencies</li>
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
