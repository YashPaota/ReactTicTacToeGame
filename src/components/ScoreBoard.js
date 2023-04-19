import React from 'react';
import "./ScoreBoard.css";

const ScoreBoard = ({scores , xPlaying}) => {
    const {xScores, oScores} = scores;
  return (
    <div className="scoreboard">
        <span className={`score x-score ${!xPlaying && "inactive"}`}>X - {xScores}</span>
        <span className={`score o-score ${xPlaying && "inactive"}`}>O - {oScores}</span>
    </div>
  )
}

export default ScoreBoard;