import React, { useState } from 'react'
import Square from './Square';

const Board = () => {

    const initialState = Array(9).fill(null);
    const [state, setState] = useState(initialState);
    const [player, setPlayer] = useState(true);

    const handleClick = (index) => {
        if (state[index] !== null) {
            return;
        }
        const copyState = [...state];
        copyState[index] = player ? 'X' : 'O';
        setState(copyState);
        setPlayer(!player);
    }

    const checkWinner = () => {
        const winningPair = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let winner of winningPair) {
            const [a, b, c] = winner;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return false;
    }

    const isWinner = checkWinner();

    const handlePlayAgain = () => {
        setState(initialState);
    }

    return (
        <>
            <div className="board-container">
                {isWinner ? (<>
                    {<h3 style={{ color: 'white', fontSize: '50px' }}>{isWinner}</h3>}
                    <h3 style={{ color: 'white' }}>Won The Game...!</h3>
                    <button style={{ backgroundColor: 'white', padding: '10px', border: 'none', marginTop: '10px', fontWeight: 'bold' }}
                        onClick={handlePlayAgain}>Play Again</button>
                </>) : (<>
                    <h3 style={{ marginBottom: '10px', color: 'white' }}>Player {player ? 'X' : 'O'} Please Move..!</h3>
                    <div className="board-row">
                        <Square onClick={() => handleClick(0)} value={state[0]} />
                        <Square onClick={() => handleClick(1)} value={state[1]} />
                        <Square onClick={() => handleClick(2)} value={state[2]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={() => handleClick(3)} value={state[3]} />
                        <Square onClick={() => handleClick(4)} value={state[4]} />
                        <Square onClick={() => handleClick(5)} value={state[5]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={() => handleClick(6)} value={state[6]} />
                        <Square onClick={() => handleClick(7)} value={state[7]} />
                        <Square onClick={() => handleClick(8)} value={state[8]} />
                    </div> </>)}
            </div>
        </>
    );
}

export default Board