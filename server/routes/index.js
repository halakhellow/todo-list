const express = require("express");
const router = express.Router();
const todosRoutes = require("./todo");

router.use("/todos", todosRoutes);

module.exports = router;
