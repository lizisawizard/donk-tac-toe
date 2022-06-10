import "./scoreboard.scss";

const ScoreBoard = (props) => {
    return ( 
        <footer className="scoreboard">
            <div className="scoreboard__tile scoreboard__x-wins">
                <p>X WINS</p>
                <h2>{props.scoreKeeper.xScore}</h2>
            </div>
            <div className="scoreboard__tile scoreboard__ties">
                <p>TIES</p>
                <h2>{props.scoreKeeper.ties}</h2>
            </div>
            <div className="scoreboard__tile scoreboard__o-wins">
                <p>O WINS</p>
                <h2>{props.scoreKeeper.oScore}</h2>
            </div>
        </footer>
    )
};

export default ScoreBoard;