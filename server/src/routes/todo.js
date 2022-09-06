const express = require("express");
const todoControllers = require("../controllers/todo");

const router = express.Router();

router.get("/", todoControllers.getTodos);
router.post("/", todoControllers.addTodo);

module.exports = router;
