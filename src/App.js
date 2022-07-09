import Header from "./components/header"
import Board from "./components/board"
import ScoreBoard from "./components/scoreboard"
import { useState } from 'react';

import './app.css';

function App() {

  const [turn, setTurn] = useState("X");
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [ties, setTies] = useState(0);

  const scoreKeeper = {
    xScore,
    oScore,
    ties,
    setXScore,
    setOScore,
    setTies
  }

  return (
    <div className="app">
      <Header
        turn={turn}
      />
      <Board 
        scoreKeeper={scoreKeeper}
        turn={turn}
        setTurn={setTurn}
      />
      <ScoreBoard
        scoreKeeper={scoreKeeper} 
      />
    </div>
  );
}

export default App;
