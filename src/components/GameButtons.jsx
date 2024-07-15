import React from "react";

const GameButtons = ({
  setWord,
  setGuessedLetters,
  setWrongGuesses,
  words,
}) => {
  const handleReset = () => {
    setWord(words[Math.floor(Math.random() * words.length)]);
    setGuessedLetters([]);
    setWrongGuesses(0);
  };

  return (
    <button
      onClick={() => window.location.reload()}
      className="mt-4 bg-black bg-opacity-20 hover:bg-black hover:bg-opacity-5 text-white font-bold py-2 px-4 rounded font-chalk"
    >
      Réinitialiser le jeu
    </button>
  );
};

export default GameButtons;
