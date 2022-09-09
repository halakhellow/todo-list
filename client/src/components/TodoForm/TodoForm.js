import React, { useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import { addTodoRequest } from "../../functions";
import "./TodoForm.css";

const TodoForm = ({}) => {
  const queryClient = useQueryClient();

  const [task, setTask] = useState("");
  const [disabled, toggleDisabled] = useState(true);

  const { mutate: addTodo } = useMutation(
    (newTodo) => addTodoRequest(newTodo),
    {
      onSettled: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );

  const handelChange = (event) => {
    setTask(event.target.value);
    if (!task) toggleDisabled(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(task);
    setTask("");
    toggleDisabled(true);
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        placeholder="Add new task .."
        value={task}
        onChange={handelChange}
      />
      <button disabled={disabled}>+</button>
    </form>
  );
};

export default TodoForm;
