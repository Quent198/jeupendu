import axios from "axios";

const BASE_URL = "http://localhost:5000/api/leaderboard";

export async function getLeaderboard() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateScore(username, score) {
  try {
    const response = await axios.post(BASE_URL, { username, score });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
