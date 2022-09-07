import React, { useState } from "react";
import uuid from "react-uuid";
import "./TodoForm.css";

const TodoForm = ({ add }) => {
  const [todo, setTodo] = useState("");
  const [disabled, toggleDisabled] = useState(true);

  const handelChange = (event) => {
    setTodo(event.target.value);
    if (!todo) toggleDisabled(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    add({ task: todo, id: uuid(), completed: false });
    setTodo("");
    toggleDisabled(true);
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        placeholder="Add new task .."
        value={todo}
        onChange={handelChange}
      />
      <button disabled={disabled}>+</button>
    </form>
  );
};

export default TodoForm;
