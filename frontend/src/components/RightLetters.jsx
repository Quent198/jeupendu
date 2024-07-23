import React from 'react';

const RightLetters = ({ word, guessedLetters }) => {
  return (
    <div className="flex justify-center flex-wrap mb-4">
      {word.split('').map((letter, index) => (
        <span key={index} className="text-2xl mx-1 text-white font-chalk">
          {guessedLetters.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
};

export default RightLetters;
