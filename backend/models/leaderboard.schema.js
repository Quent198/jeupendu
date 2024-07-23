const mongoose = require("mongoose");

const leaderboardschema = new mongoose.Schema(
  {
    players: [
      {
        username: { type: String, required: false },
        score: { type: Number, required: false },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Leaderboard",leaderboardschema)