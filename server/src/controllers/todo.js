const Todos = require("../models/todo");

const todoControllers = {};

todoControllers.getTodos = async (req, res) => {
  try {
    const userId = req.user._id;
    const userTodos = await Todos.find({ user: userId });
    if (userTodos.length === 0)
      res.status(404).json({ message: "No todos to show" });
    else res.json(userTodos);
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

todoControllers.editTodo = async (req, res) => {
  try {
    const { todoid } = req.params;
    const { task, completed } = req.body;
    const userId = req.user._id;
    if (!task) res.status(400).json({ message: "field can't be empty" });
    else {
      const todo = await Todos.findOne({ _id: todoid, user: userId });
      if (todo) {
        const updatedTodo = await Todos.findByIdAndUpdate(
          todoid,
          {
            task,
            completed,
          },
          {
            new: true,
          }
        );
        res.json(updatedTodo);
      } else res.status(403).json({ message: "Forbidden" });
    }
  } catch (err) {
    res.json({ error: err.message });
  }
};

todoControllers.deleteTodo = async (req, res) => {
  try {
    const { todoid } = req.params;
    const userId = req.user._id;
    const todo = await Todos.findOne({ _id: todoid, user: userId });
    if (todo) {
      await Todos.findByIdAndDelete(todoid);
      res.json(await Todos.find());
    } else res.status(403).json({ message: "Forbidden" });
  } catch (err) {
    res.json({ error: err.message });
  }
};

module.exports = todoControllers;
