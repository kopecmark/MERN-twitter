const mongoose = require('mongoose');
const express = require("express");
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const bodyParser = requrie('body-parser');


const app = express();

app.get("/", (req, res) => res.send("Hello Another world"));
app.use("/api/users", users);
app.use("/api/tweets", tweets);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



const db = require('./config/keys').mongoURI;

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));