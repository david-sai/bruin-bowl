const express = require("express");

const { signup } = require("../controllers/userController");

const router = express.Router();

router.post("/signup", signup);

router.get("/retrieve", getUserMetaData);

router.delete("/delete", deleteUser);

module.exports = router;