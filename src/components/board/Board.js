import "./board.scss";

const Board = () => {
    return ( 
        <div className="board">
            {[1,2,3,4,5,6,7,8,9].map((item) => 
            <div id={item} className="board__tile">
                Jams
            </div>)}
            {/* {[1,2,3,4,5,6,7,8,9].map((item) => <div>{item}</div>)} */}
        </div>
    )
};

export default Board;