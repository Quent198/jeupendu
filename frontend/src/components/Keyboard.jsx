import React from "react";

const Keyboard = ({ onGuess, guessedLetters }) => {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="grid grid-cols-8 gap-2 mt-4">
      {letters
        .filter((letter) => !guessedLetters.includes(letter))
        .map((letter) => (
          <button
            key={letter}
            onClick={() => onGuess(letter)}
            disabled={guessedLetters.includes(letter)}
            className={`bg-black bg-opacity-40 hover:bg-black hover:bg-opacity-70 text-white font-bold py-2 px-4 rounded ${
              guessedLetters.includes(letter)
                ? "disabled:bg-gray-400 disabled:bg-opacity-25"
                : ""
            } font-chalk`}
          >
            {letter}
          </button>
        ))}
    </div>
  );
};

export default Keyboard;
