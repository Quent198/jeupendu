const Leaderboard = require("../models/leaderboard.schema");

const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Leaderboard.find({});
    res.status(200).json(leaderboard[0]);
  } catch (error) {
    console.error(error);
  }
};

const updateScore = async (req, res) => {
  const { username, score } = req.body;
  try {
    const leaderboard = await Leaderboard.find({});
    console.log(leaderboard)
    const player = leaderboard[0].players.find(
      (player) => player.username === username
    );

    if (player) {
      // Update the player's score
      player.score = score+player.score;
    } else {
      // Create a new player and add to the players array
      leaderboard[0].players.push({ username, score });
    }

    // Save the updated leaderboard
    await leaderboard[0].save();
    res.status(200).json(leaderboard);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getLeaderboard, updateScore };
