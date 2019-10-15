import React, { useState } from "react";
import dataJSON from "./data.json";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setDataState] = useState(
    dataJSON.sort(() => Math.random() - 0.5)
  );
  const [score, setScoreState] = useState(0);
  const [leaderBoard, setLeaderState] = useState(0);
  const [status, setStatusState] = useState("Click any button to play!");
  const [cssClass, setClassState] = useState("flashy");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Minecraft Clicky Game</h1>
        <h2>
          Score: {score} | HighScore: {leaderBoard} -
        </h2>
        <h2 className={cssClass}> Status: {status}</h2>
      </header>
    </div>
  );
}

export default App;
