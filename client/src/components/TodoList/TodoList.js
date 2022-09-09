import React from "react";
import { useQuery } from "react-query";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Loader from "../Loader/Loader";
import TodoItem from "../TodoItem/TodoItem";
import TodoForm from "../TodoForm/TodoForm";

import { getTodosRequest } from "../../functions";

import thumbtack from "../../images/thumbtack.png";

import "./TodoList.css";

const TodoList = () => {
  const { isLoading, data: todos } = useQuery("todos", getTodosRequest);

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

    // setTodos(updatedTodos);
  };
  let todolist;
  if (!isLoading) {
    !todos
      ? (todolist = (
          <h2 className="no-todos">
            Let's get things <span>DONE</span> today
            <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
          </h2>
        ))
      : (todolist = todos.map((todo, index) => (
          <Draggable key={todo._id} draggableId={todo.task} index={index}>
            {(provided) => (
              <TodoItem
                innerRef={provided.innerRef}
                provided={provided}
                todo={todo}
              />
            )}
          </Draggable>
        )));
  }
  return (
    <div>
      <h1 className="TodoList-title">
        To Do :
        <img src={thumbtack} />
      </h1>
      <div className="TodoList">
        <TodoForm />
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="todo-items">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {isLoading ? <Loader /> : todolist}
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
