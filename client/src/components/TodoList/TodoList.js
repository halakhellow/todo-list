import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import TodoItem from "../TodoItem/TodoItem";
import TodoForm from "../TodoForm/TodoForm";

import thumbtack from "../../images/thumbtack.png";

import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState(
    JSON.parse(window.localStorage.getItem("todos") || "[]")
  );

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    window.localStorage.setItem("todos", JSON.stringify(todos));
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    window.localStorage.setItem("todos", JSON.stringify(todos));
  };
  const editTask = (id, newTask) => {
    const editedTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, task: newTask };
      return todo;
    });
    setTodos(editedTodos);
    window.localStorage.setItem("todos", JSON.stringify(todos));
  };
  const completedTask = (id) => {
    const completedTodos = todos.map((todo) => {
      if (todo.id === id)
        return { ...todo, completed: !todo.completed, checked: !todo.checked };
      return todo;
    });
    setTodos(completedTodos);
    window.localStorage.setItem("todos", JSON.stringify(todos));
  };
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    if (
      result.source.droppableId === result.destination.droppableId &&
      result.source.index === result.destination.index
    )
      return;
    const updatedTodos = Array.from(todos);
    const [reorderedItem] = updatedTodos.splice(result.source.index, 1);
    updatedTodos.splice(result.destination.index, 0, reorderedItem);

    setTodos(updatedTodos);
  };
  const todolist = todos.map((todo, index) => (
    <Draggable key={todo.id} draggableId={todo.task} index={index}>
      {(provided) => (
        <TodoItem
          innerRef={provided.innerRef}
          provided={provided}
          id={todo.id}
          task={todo.task}
          completed={todo.completed}
          checked={todo.checked}
          remove={removeTodo}
          edit={editTask}
          complete={completedTask}
        />
      )}
    </Draggable>
  ));
  return (
    <div>
      <h1 className="TodoList-title">
        To Do :
        <img src={thumbtack} />
      </h1>
      <div className="TodoList">
        <TodoForm add={addTodo} />
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="todo-items">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {todolist}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default TodoList;
