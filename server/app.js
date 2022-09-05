const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectToMongo = require("./db/connection");

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.NODE_LOCAL_PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectToMongo();
});
