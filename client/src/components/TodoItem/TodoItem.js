import React, { useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import { editTodoRequest, deleteTodoRequest } from "../../functions";
import "./TodoItem.css";

const TodoItem = ({ todo, provided, innerRef }) => {
  const queryClient = useQueryClient();
  const [edition, setEdition] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleEdit = () => {
    setEdition(true);
  };
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const { mutate: editTodo } = useMutation(
    (updatedTodo) => editTodoRequest(updatedTodo),
    {
      onSettled: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );

  const { mutate: deleteTodo } = useMutation(
    (todo) => deleteTodoRequest(todo),
    {
      onSettled: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    editTodo({ ...todo, task: newTask });
    setEdition(false);
  };
  return (
    <div
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={innerRef}
    >
      {edition ? (
        <form className="TodoItem-edit" onSubmit={handleSubmit}>
          <input value={newTask} onChange={handleChange} />
          <button>
            <i className="fa fa-check"></i>
          </button>
        </form>
      ) : (
        <div className="TodoItem">
          <div>
            <span className="fas fa-grip-horizontal"></span>
            <label
              htmlFor="check"
              className={` container ${todo.completed ? "checked" : ""}`}
            >
              <span>{todo.task}</span>
              <input
                id="check"
                type="checkbox"
                onClick={() =>
                  editTodo({ ...todo, completed: !todo.completed })
                }
                checked={todo.completed}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <div>
            <button onClick={handleEdit}>
              <i className="fa fa-pencil"></i>
            </button>
            <button onClick={() => deleteTodo(todo)}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
