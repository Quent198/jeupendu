import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: "url('/chalkboard.jpg')",
      }}
      className="min-h-screen flex flex-col items-center  p-4 py-10 w-screen relative justify-center gap-10"
    >
      <h1 className="text-4xl font-bold mb-4 text-white font-chalk">
        Jeu du Pendu
      </h1>
      <p className="text-white font-chalk text-2xl">
        Essayer de trouver les lettres manquantes des mots. Vous avez le droit à
        7 essais sinon vous êtes pendus.
      </p>
      <main className="flex gap-10 sm:flex-row flex-col">
        <button
          onClick={() => {
            navigate("/game");
          }}
          className="btn  font-chalk w-[15rem] "
        >
          Commencer le jeu
        </button>

        <button
          onClick={() => {
            navigate("/leaderboard");
          }}
          className="btn font-chalk  w-[15rem]"
        >
          Découvrir le classement
        </button>
      </main>
    </div>
  );
}

export default Home;
