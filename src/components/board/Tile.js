import "./board.scss";

const Tile = ({ id, onClick, children }) => {

    return (
        <div id={id}  className="tile" onClick={onClick}>
            {children}
        </div>)
};

export default Tile;