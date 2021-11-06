import logo from "./logo.svg";
import "./App.css";
import React from "react";
import UpWardCounter from "./components/UpWardCounter";
import BackWardCounter from "./components/BackWardCounter";
function App() {
  return (
    <React.Fragment>
      <UpWardCounter />
      <BackWardCounter />
    </React.Fragment>
  );
}

export default App;
