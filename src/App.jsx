import React, { useState } from "react";
import Personnage from "./components/Personnage";
import RightLetters from "./components/RightLetters";
import WrongLetters from "./components/WrongLetters";
import Keyboard from "./components/Keyboard";
import GameButtons from "./components/GameButtons";
import GameStatus from "./components/GameStatus";
import "./App.css";

const words = ["react", "javascript", "developer", "code", "hangman"];

function App() {
  const [word, setWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  console.log(wrongGuesses);

  const handleGuess = (letter) => {
    if (word.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
    } else {
      setWrongGuesses(wrongGuesses + 1);
    }
  };

  const isGameOver = wrongGuesses >= 7;
  const isWinner = word
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  return (
    <div
      style={{ backgroundImage: "url('/chalkboard.jpg')" }}
      className="min-h-screen flex flex-col items-center justify-center  p-4 w-screen"
    >
      <h1 className="text-4xl font-bold mb-4 text-white font-chalk">
        Jeu du Pendu
      </h1>
      <Personnage wrongGuesses={wrongGuesses} />
      <RightLetters word={word} guessedLetters={guessedLetters} />
      <WrongLetters wrongGuesses={wrongGuesses} />
      <Keyboard onGuess={handleGuess} disabled={isGameOver || isWinner} />
      <GameButtons isGameOver={isGameOver} isWinner={isWinner} word={word} />
      <GameStatus isGameOver={isGameOver} isWinner={isWinner} word={word} />
    </div>
  );
}

export default App;
