import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const input = document.getElementsByClassName("input-username")[0].value;
    console.log(input);
    if (input) {
      localStorage.setItem("username", input);
      window.location.reload();
    }
  }

  return (
    <div
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: "url('/chalkboard.jpg')",
      }}
      className="min-h-screen flex flex-col items-center p-4 py-10 w-screen relative justify-center gap-10"
    >
      <h1 className="text-4xl font-bold mb-4 text-white font-chalk">
        Jeu du Pendu
      </h1>
      <p className="text-white font-chalk text-2xl">
        Essayer de trouver les lettres manquantes des mots. Vous avez le droit à
        7 essais sinon vous êtes pendus.
      </p>
      <main className="flex gap-10 sm:flex-row flex-col">
        {!localStorage.getItem("username") ? (
          <>
            <label htmlFor="my_modal_7" className="btn font-chalk w-[15rem] hover:cursor-pointer">
              Se connecter
            </label>
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box">
                <input
                  className="input-username border-2 h-10 w-full"
                  placeholder="pseudo"
                  type="text"
                />
                <div className="modal-action">
                  <label
                    htmlFor="my_modal_7"
                    className="btn bg-white font-chalk w-full"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    Se connecter
                  </label>
                </div>
              </div>
              <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                navigate("/game");
              }}
              className="btn font-chalk w-[15rem]"
            >
              Commencer le jeu
            </button>
          </>
        )}

        <button
          onClick={() => {
            navigate("/leaderboard");
          }}
          className="btn font-chalk w-[15rem]"
        >
          Découvrir le classement
        </button>
      </main>
    </div>
  );
}

export default Home;

