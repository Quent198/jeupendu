import React from "react";

const GameButtons = ({ isGameOver, isWinner, word, onRestart }) => {
  return (
    <div className="mt-4">
      {isGameOver && (
        <div className="text-white font-chalk text-xl mb-4">
          Vous avez perdu ! Le mot était : {word}
        </div>
      )}
      {isWinner && (
        <div className="text-white font-chalk text-xl mb-4">
          Félicitations ! Vous avez gagné !
        </div>
      )}
      {(isGameOver || isWinner) && (
        <button
          onClick={onRestart}
          className="mt-4 bg-black bg-opacity-40 hover:bg-black hover:bg-opacity-70 text-white font-bold py-2 px-4 rounded font-chalk"
        >
          Recommencer
        </button>
      )}
    </div>
  );
};

export default GameButtons;


//"mt-4 bg-black bg-opacity-40 hover:bg-black hover:bg-opacity-70 text-white font-bold py-2 px-4 rounded font-chalk"