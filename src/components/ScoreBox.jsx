import React from "react";
import "../styles/ScoreBox.css";
function ScoreBox({ score, highScore }) {
  return (
    <>
      <div className="score">
        <h1 className="score-box">
          Score <span>{score}</span>
        </h1>
        {score === 0 && highScore > 0 ? (
          <h1 className="oops">oops!</h1>
        ) : score === 10 ? (
          <div className="top-score">Top <br/> Score!</div>
        ) : (
          <div className="space"></div>
        )}
        <h1 className="score-box">
          High Score <span>{highScore}</span>
        </h1>
      </div>
    </>
  );
}
export default ScoreBox;
