import React, { useEffect, useState } from "react";
import { getLeaderboard } from "../../api/leaderboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom"

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    async function getLeaderboardFromApi() {
      const response = await getLeaderboard();

      setLeaderboard(response.players);
    }
    getLeaderboardFromApi();
  }, []);

  return (
    <div
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: "url('/chalkboard.jpg')",
      }}
      className="min-h-screen flex flex-col items-center  p-4 py-10 w-screen relative"
    >
      <h1 className="text-4xl font-bold mb-4 text-white font-chalk">
        Le Classement
      </h1>
      <FontAwesomeIcon onClick={()=>{
        navigate("/")
      }} className="absolute left-5 text-2xl hover:cursor-pointer" icon={faHouse} style={{color: "#ffffff",}} />
      <div className="overflow-x-auto">
        <table className="table  table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th></th>
              <td className="text-white">Pseudo</td>
              <td className="text-white">Score</td>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {!leaderboard ? (
              <h1>Chargement du classement en cours</h1>
            ) : leaderboard.length === 0 ? (
              <h1>Pas de joueurs</h1>
            ) : (
              <>
                {leaderboard
                  .sort((a, b) => b.score - a.score)
                  .map((player, index) => (
                    <tr className="text-white bg-transparent border-2">
                      <th className="text-white">{index + 1}</th>
                      <td>{player.username}</td>
                      <td>{player.score}</td>
                    </tr>
                  ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
