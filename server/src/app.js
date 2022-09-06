const express = require("express");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const connectToMongo = require("./db/connection");
const apiRoutes = require("./routes");

const app = express();

require("./middleware/passport-setup");

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("tiny"));

app.use("/api", apiRoutes);
const port = process.env.NODE_LOCAL_PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectToMongo();
});
