import React from "react";

const Keyboard = ({ onGuess, disabled }) => {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="grid grid-cols-8 gap-2 mt-4">
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => onGuess(letter)}
          disabled={disabled}
          className="bg-black bg-opacity-20 hover:bg-black hover:bg-opacity-5 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 font-chalk"
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
