const express = require("express");

const { signup } = require("../controllers/userController");

const router = express.Router();

router.post("/signup", signup);

router.get("/retrieve", getUser);

router.delete("/delete", deleteUser);

router.put("/updatescore", updateScore);

module.exports = router;