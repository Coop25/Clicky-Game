import React, { useState } from "react";
import dataJSON from "./data.json";
import Img from "./components/img";
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
  function handleClick(id) {
    // do things
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Minecraft Clicky Game</h1>
        <h2>
          Score: {score} | HighScore: {leaderBoard} - Status:
        </h2>
        <h2 className={cssClass}> {status}</h2>
      </header>
      <div className="imgDiv">
        {data.map(img => (
          <Img img={img.img} id={img.name} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
