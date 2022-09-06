const Todos = require("../models/todo");

const todoControllers = {};

todoControllers.getTodos = async (req, res) => {
  try {
    const todos = await Todos.find();
    if (todos.length === 0)
      res.status(404).json({ message: "No todos to show" });
    else res.json(todos);
  } catch (err) {
    res.json({ error: err.message });
  }
};

todoControllers.addTodo = async (req, res) => {
  try {
    const { task, completed, checked } = req.body;
    const userId = req.user._id;
    const newTodo = await Todos.create({
      task,
      completed,
      checked,
      user: userId,
    });
    res.status(201).json(newTodo);
  } catch (err) {
    res.json({ error: err.message });
  }
};

module.exports = todoControllers;
