require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 62700;
const path = require("path");

const __dirName = path.resolve();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
const leaderboardRoute = require("./routes/leaderboard");
app.use("/api/leaderboard", leaderboardRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log("Le serveur est démarré sur le port", port);
    });
  })
  .catch((err) => console.log(err));
