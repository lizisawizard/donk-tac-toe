import "./board.scss";
import Tile from "./Tile";
import { useState , useEffect} from "react";

const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
]

const checkWin = (turn, board) => {
    let won = false;

    for (const line of lines) {
        let counter = 0;
        for (const index of line) {
            if (board[index] === turn) {
                counter += 1;
            } 
        }

        if (counter === 3) { won = true; }
        
        if (won) break;
    } 

    if (won) {
        return { gameOver: true, winner: turn }
    } else {
        return { gameOver: false, winner: null }
    }
}


const Board = ({ turn, setTurn }) => {

    const [board, setBoard] = useState(["","","","","","","","",""]);

    useEffect(() => {
        console.log('the board changed')

        const {gameOver, winner} = checkWin(turn, board);

        if (gameOver) {
            alert("Ur mom won: ", winner)
        }
    }, [board, turn]);

    const clickTile = (index) => {
        const boardTemp = [...board];

        if (boardTemp[index] !== "") return;

        boardTemp[index] = turn; 
        setBoard(boardTemp);
        
        setTurn(turn === "X" ? "O" : "X");
    }

    return ( 
        <div className="board">
            {board.map((item, index) => 
            <Tile id={item} key={index} onClick={() => clickTile(index)}>{item}</Tile>)}
        </div>
    )
};

export default Board;

