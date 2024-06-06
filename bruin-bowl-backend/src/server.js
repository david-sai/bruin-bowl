const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const quizRoutes = require("./routes/quizRoutes");
let cors = require("cors");
require('dotenv').config();

const app = express();

//Connect to mongoDB using mongoose
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
      app.listen(4000, () => {
        console.log(
          "connected to db & listening on port",
          4000
        );
      });
  })
  .catch((error) => {
    console.log(error);
  });

//Set up middleware
app.use(cors());
app.use(express.json()); //Parses the JSON bodies

//Routes
app.use("/user", userRoutes);
app.use("/quiz", quizRoutes);

//Logs middeware to output the request methods & paths
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//This is the root route which confirms that the server is online
app.get("/", (req, res) => res.json("BruinBowl Server Online"));

module.exports = app;