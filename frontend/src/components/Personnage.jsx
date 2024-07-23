import React from "react";
import hangman7 from "../assets/hangman7.png";
import hangman1 from "../assets/hangman1.png";
import hangman2 from "../assets/hangman2.png";
import hangman3 from "../assets/hangman3.png";
import hangman4 from "../assets/hangman4.png";
import hangman5 from "../assets/hangman5.png";
import hangman6 from "../assets/hangman6.png";

function Personnage({ wrongGuesses }) {
  const images = [
    hangman1,
    hangman2,
    hangman3,
    hangman4,
    hangman5,
    hangman6,
    hangman7,
  ];

  return (
    <div className="mb-4">
      {wrongGuesses > 0 && <img src={images[wrongGuesses - 1]} alt=""  />}
    </div>
  );
}

export default Personnage;
