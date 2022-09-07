import React, { useState } from "react";
import "./TodoItem.css";

const TodoItem = ({
  id,
  task,
  complete,
  edit,
  remove,
  checked,
  completed,
  provided,
  innerRef,
}) => {
  const [edition, setEdition] = useState(false);
  const [newTask, setNewTask] = useState(task);
  const handleRemove = () => {
    remove(id);
  };
  const handleEdit = () => {
    setEdition(true);
  };
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const handleCompletion = () => {
    complete(id);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    edit(id, newTask);
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
              htmlFor={id}
              className={` container ${completed ? "checked" : ""}`}
            >
              <span>{task}</span>
              <input
                id={id}
                type="checkbox"
                onClick={handleCompletion}
                checked={checked}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <div>
            <button onClick={handleEdit}>
              <i className="fa fa-pencil"></i>
            </button>
            <button onClick={handleRemove}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
