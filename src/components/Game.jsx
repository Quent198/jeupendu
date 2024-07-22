import React, { useEffect, useState, useRef } from "react";
import Personnage from "./Personnage";
import RightLetters from "./RightLetters";
import WrongLetters from "./WrongLetters";
import Keyboard from "./Keyboard";
import GameButtons from "./GameButtons";
import GameStatus from "./GameStatus";
import FilterTheme from "./FilterTheme";
import SoundControl from "./SoundControl"; // Importer le composant
import Chalksound from "../../public/writechalk.mp3";
import BackgroundMusic from "../../public/backgroundmusic.mp3";

let words;

function Game() {
  const [theme, setTheme] = useState("animaux");
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [score, setScore] = useState(0);

  const backgroundmusic = useRef(new Audio(BackgroundMusic));
  const writechalksound = useRef(new Audio(Chalksound));

  backgroundmusic.current.loop = true;
  backgroundmusic.current.volume = 0.01;
  writechalksound.current.volume = 0.1;

  useEffect(() => {
    backgroundmusic.current.play();
  }, []);

  useEffect(() => {
    if (wrongGuesses > 0) {
      writechalksound.current.play();
    }
  }, [wrongGuesses]);

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

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (word.includes(letter)) {
        setScore(score + 10); // Augmenter le score de 10 pour chaque bonne réponse
      } else {
        setWrongGuesses(wrongGuesses + 1);
        setScore(score - 5); // Réduire le score de 5 pour chaque mauvaise réponse
      }
    }
  };

  const isGameOver = wrongGuesses >= 7;
  const isWinner = word
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const handleRestart = () => {
    setWord(words[Math.floor(Math.random() * words.length)]);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setScore(0); // Réinitialiser le score
  };

  return (
    <div
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: "url('/chalkboard.jpg')",
      }}
      className="min-h-screen flex flex-col items-center justify-between p-4 py-10 w-screen relative"
    >
      <SoundControl
        backgroundmusic={backgroundmusic.current}
        writechalksound={writechalksound.current}
      /> {/* Ajouter le contrôle du son */}
      <h1 className="text-4xl font-bold mb-4 text-white font-chalk">
        Jeu du Pendu
      </h1>
      <div className="text-white font-chalk text-2xl mb-4 lg:absolute lg:top-4 lg:right-4">
        Score: {score}
      </div>
      <GameStatus isGameOver={isGameOver} isWinner={isWinner} word={word} />
      <Personnage wrongGuesses={wrongGuesses} />
      <RightLetters word={word} guessedLetters={guessedLetters} />
      <WrongLetters wrongGuesses={wrongGuesses} />
      {!isGameOver && !isWinner && (
        <>
          <Keyboard onGuess={handleGuess} guessedLetters={guessedLetters} />
          <FilterTheme setTheme={setTheme} theme={theme} />
        </>
      )}

      <GameButtons
        isGameOver={isGameOver}
        isWinner={isWinner}
        word={word}
        onRestart={handleRestart}
      />
    </div>
  );
}

export default Game;

