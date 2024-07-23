const {getLeaderboard, updateScore} = require("../controllers/leaderboard-controller")

const router = require("express").Router()

router.get("/",getLeaderboard)
router.post("/",updateScore)

module.exports = router