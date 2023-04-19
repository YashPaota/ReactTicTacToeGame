import React from 'react';
import { useState } from 'react';
import "./App.css";
import Board from './components/Board';
import ScoreBoard from './components/ScoreBoard';
import ResetButton from './components/ResetButton';

const App = () => {
    const WIN_CONDITIONS = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    const [board , setBoard] = useState(Array(9).fill(null));    
    const [xPlaying , setXPlaying] = useState(true);
    const [scores , setScores] = useState({xScores:0 , oScores:0})
    const[gameOver , setGameOver]= useState(false);

    const handleClick = (boxIdx) =>     
    {
        const updatedBoard = board.map((value , idx) => {
            if(idx === boxIdx)
            {
                return xPlaying === true ? "X" : "O";
            }
            else{
                return value;
            }
        })

        setBoard(updatedBoard);

        const winner = checkWinner(updatedBoard);
        if(winner)
        {
            if(winner === "O")
            {
                let {oScores} = scores;
                oScores += 1;
                setScores({...scores , oScores})

            }else
            {
                let {xScores} = scores;
                xScores += 1;
                setScores({...scores , xScores})
            }
        }
        
        setXPlaying(!xPlaying);
    }
    console.log(scores)

    const checkWinner = (board) => {
        for(let i=0;i<WIN_CONDITIONS.length;i++)
        {
            const[x,y,z] = WIN_CONDITIONS[i];
            if(board[x] && board[x] === board[y] && board[y] === board[z])
            {
                setGameOver(true);
                // console.log(board[x]);
                return board[x];
            }

        }

    }
    const resetBoard = () => {
        setGameOver(false);
        setBoard(Array(9).fill(null));

    }
    // const board = ["X","X","X","X","X","X","X","X","X",]; This is static
    return (
        <div className="App">
            <ScoreBoard scores={scores} xPlaying={xPlaying}/>
            <Board board={board} onClick ={gameOver ? resetBoard : handleClick}/>
            <ResetButton resetBoard ={resetBoard}/>
        </div>
    );
};

export default App;