import React, { useEffect, useState, useRef } from "react";
import Personnage from "./Personnage";
import RightLetters from "./RightLetters";
import WrongLetters from "./WrongLetters";
import Keyboard from "./Keyboard";
import GameButtons from "./GameButtons";
import GameStatus from "./GameStatus";
import FilterTheme from "./FilterTheme";
import SoundControl from "./SoundControl"; 
import Chalksound from "../../public/writechalk.mp3";
import BackgroundMusic from "../../public/backgroundmusic.mp3";
import { updateScore } from "../../api/leaderboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom"


let words;

function Game() {
 const navigate = useNavigate()
if (!localStorage.getItem("username")) {
  navigate("/")
}

  const [theme, setTheme] = useState("animaux");
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [score, setScore] = useState(0);
 

  const backgroundmusic = useRef(new Audio(BackgroundMusic));
  const writechalksound = useRef(new Audio(Chalksound));

  backgroundmusic.current.loop = true;
  backgroundmusic.current.volume = 0.1;
  writechalksound.current.volume = 0.2;

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
        "écureuil",
        "okapi",
        "capybara",
        "scolopendre",
        "dendrobate",
        "grand calao",
        "requin-gobelin",
         "araignée à face d'ogre",
        "attacus atlas",
        "chat de pallas",
        "monstre de gila",
        "grenouille de verre",
        "vampire des abysses"
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
        "timor-oriental",
        "el salvador",
        "saint-vincent-et-les-grenadines",
        "trinité-et-tobago",
        "iles marshall",
        "papouasie nouvelle-guinée",
        "sainte-lucie",
        "saint-marin"
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
        "hunter x hunter",
        "made in abyss",
        "goblin slayer",
        "black butler",
        "cyberpunk edgerunner",
        "psycho-pass",
        "one piece",
        "black clover"
      ];
    }
    setWord(words[Math.floor(Math.random() * words.length)]);
  }, [theme]);

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter) && letter !== '-' && letter !== ' ' && letter !== "'") {
      setGuessedLetters([...guessedLetters, letter]);
      if (word.includes(letter)) {
        setScore(score + 10); // Augmenter le score de 10 pour chaque bonne réponse
        updateScore(localStorage.getItem("username"), 10);
      } else {
        setWrongGuesses(wrongGuesses + 1);
        setScore(score - 5); // Réduire le score de 5 pour chaque mauvaise réponse
        updateScore(localStorage.getItem("username"), -5);
      }
    }
  };

  const isGameOver = wrongGuesses >= 7;
  const isWinner = word
    .split("")
    .every((letter) => guessedLetters.includes(letter) || "- '".includes(letter));
    
    

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
      <FontAwesomeIcon onClick={()=>{
        navigate("/")
      }} className="absolute left-5 text-2xl hover:cursor-pointer" icon={faHouse} style={{color: "#ffffff",}} />
      <SoundControl
        backgroundmusic={backgroundmusic.current}
        writechalksound={writechalksound.current}
      />{" "}
      {/* Ajouter le contrôle du son */}
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
