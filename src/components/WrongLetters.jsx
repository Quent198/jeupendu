import React from "react";

const WrongLetters = ({ wrongGuesses }) => {
  return (
    <div className="text-red-600 mb-4">
      <p className="text-white font-chalk text-xl">Erreurs: {wrongGuesses}</p>
    </div>
  );
};

export default WrongLetters;
