import React, { useEffect, useState } from "react";
import Personnage from "./Personnage";
import RightLetters from "./RightLetters";
import WrongLetters from "./WrongLetters";
import Keyboard from "./Keyboard";
import GameButtons from "./GameButtons";
import GameStatus from "./GameStatus";
import FilterTheme from "./FilterTheme";

let words;

function Game() {
  const [theme, setTheme] = useState("animaux");
  useEffect(() => {
    if (theme === "animaux") {
      words = [
        "gavial",
        "baudroie",
        "ornithorynque",
        "ecureuil",
        "okapi",
        "capybara",
        "scolopendre",
        "dendrobate",
      ];
    } else if (theme === "pays") {
      words = [
        "zimbabwe",
        "kiribati",
        "suriname",
        "bhoutan",
        "liechtenstein",
        "botswana",
        "kirghizistan",
        "nauru",
      ];
    } else if (theme === "anime") {
      words = [
        "bleach",
        "monster",
        "evangelion",
        "pluto",
        "parasyte",
        "naruto",
        "berserk",
        "erased",
      ];
    }
    setWord(words[Math.floor(Math.random() * words.length)]);
  }, [theme]);

  const [word, setWord] = useState("");
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
      <FilterTheme setTheme={setTheme} theme={theme} />
      <GameButtons isGameOver={isGameOver} isWinner={isWinner} word={word} />
      <GameStatus isGameOver={isGameOver} isWinner={isWinner} word={word} />
    </div>
  );
}

export default Game;
