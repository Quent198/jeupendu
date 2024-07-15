import React from "react";

const GameStatus = ({ isGameOver, isWinner, word }) => {
  if (isGameOver) {
    return <p className="text-red-600 mt-4">Perdu! Le mot était: {word}</p>;
  }
  if (isWinner) {
    return <p className="text-green-600 mt-4">Gagné! Félicitations!</p>;
  }
  return null;
};

export default GameStatus;
