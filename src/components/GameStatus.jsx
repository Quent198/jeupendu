import React from "react";

const GameStatus = ({ isGameOver, isWinner, word }) => {
  if (isGameOver) {
    return (
      <p className="text-red-600 mt-4 font-bold text-2xl font-chalk">Ah ! Vous avez perdu !<br/> Le mot était {word}</p>
    );
  }
  if (isWinner) {
    return <p className="text-green-600 mt-4 text-2xl font-bold font-chalk">Mince ! <br/> Vous avez trouvé le mot. </p>;
  }
  return null;
};

export default GameStatus;
