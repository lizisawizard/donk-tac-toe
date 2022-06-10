import Header from "./components/header"
import Board from "./components/board"
import ScoreBoard from "./components/scoreboard"
import { useState } from 'react';

import './app.css';

function App() {

  // true is X false is O
  const [turn, setTurn] = useState(true);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [ties, setTies] = useState(0);

  const scoreKeeper = {
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
      />
      <ScoreBoard
        scoreKeeper={scoreKeeper} 
      />
    </div>
  );
}

export default App;
