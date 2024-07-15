import React from 'react'

function Personnage({wrongGuesses}) {

  return (
    <div className="mb-4">
      <p className="text-xl">Erreurs: {wrongGuesses}/6</p>
    </div>
  )
}

export default Personnage