const express = require("express");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const { expressjwt: jwt } = require("express-jwt");
const cookieParser = require("cookie-parser");
const { encryptCookieNodeMiddleware } = require("encrypt-cookie");
const connectToMongo = require("./db/connection");
const apiRoutes = require("./routes");

const app = express();

require("./middleware/passport-setup");
app.use(cookieParser(process.env.SECRET_KEY));
app.use(encryptCookieNodeMiddleware(process.env.SECRET_KEY));

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("tiny"));

app.use(
  "/api",
  jwt({
    secret: process.env.SECRET_KEY,
    algorithms: ["HS256"],
    requestProperty: "user",
    getToken: (req) => req.signedCookies("token") ?? req.cookies("token"),
  }).unless({ path: ["/api/auth/google", "/api/auth/google/callback"] })
);

app.use("/api", apiRoutes);
const port = process.env.NODE_LOCAL_PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectToMongo();
});
