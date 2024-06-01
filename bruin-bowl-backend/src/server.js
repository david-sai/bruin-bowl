const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const quizRoutes = require("./routes/quizRoutes");
var cors = require("cors");

const app = express();

mongoose
  .connect("mongodb+srv://BruinBowl35L:PZ7R06@bruin-bowl-database.dytrqfo.mongodb.net/?retryWrites=true&w=majority&appName=Bruin-Bowl-Database")
  .then(() => {
    if (process.env.NODE_ENV !== "test") {
      app.listen(4000, () => {
        console.log(
          "connected to db & listening on port",
          4000
        );
      });
    }
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cors());
app.use(express.json());
app.use("/user", userRoutes);
app.use("/quiz", quizRoutes);

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.get("/", (req, res) => res.json("BruinBowl Server Online"));

module.exports = app;