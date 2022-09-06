const express = require("express");
const router = express.Router();
const authRoutes = require("./auth");
const todosRoutes = require("./todo");

router.use("/auth", authRoutes);
router.use("/todos", todosRoutes);

module.exports = router;
