import React from "react";

function Leaderboard() {
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
      <div className="overflow-x-auto">
        <table className="table  table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th></th>
              <td>Nom</td>
              <td>Score</td>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-white border-2">
              <th className="text-black">1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
