//notice the positions of each square on the grid compared to the other functions
function GridwithNumbers() {
    return (
        <>
            <div className="board-row">
                <button className="square">1</button>
                <button className="square">2</button>
                <button className="square">3</button>
            </div>
            <div className="board-row">
                <button className="square">4</button>
                <button className="square">5</button>
                <button className="square">6</button>
            </div>
            <div className="board-row">
                <button className="square">7</button>
                <button className="square">8</button>
                <button className="square">9</button>
            </div>
        </>
    );
}

//notice how the squares are in a straight line instead of the grid we want for tictactoe
function LineOfSquares(){
    return (
        <>
            <button className="square">X</button>
            <button className="square">X</button>
            <button className="square">X</button>
            <button className="square">X</button>
        </>
    );

}

export {GridwithNumbers, LineOfSquares} //dont use default here!! bc we want multiple functions to be exported individually