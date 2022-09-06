const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectToMongo = require("./db/connection");
const apiRoutes = require("./routes");

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", apiRoutes);
const port = process.env.NODE_LOCAL_PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectToMongo();
});
