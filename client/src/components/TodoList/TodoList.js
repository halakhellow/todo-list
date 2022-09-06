import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import TodoItem from "../TodoItem/TodoItem";
import TodoForm from "../TodoForm/TodoForm";

import thumbtack from "../../images/thumbtack.png";

import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(window.localStorage.getItem("todos") || "[]"),
    };
  }

  addTodo = (todo) => {
    this.setState({ todos: [...this.state.todos, todo] }, () =>
      window.localStorage.setItem("todos", JSON.stringify(this.state.todos))
    );
  };
  removeTodo = (id) => {
    let newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodos }, () =>
      window.localStorage.setItem("todos", JSON.stringify(this.state.todos))
    );
  };
  editTask = (id, newTask) => {
    let editedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) return { ...todo, task: newTask };
      return todo;
    });
    this.setState({ todos: editedTodos }, () =>
      window.localStorage.setItem("todos", JSON.stringify(this.state.todos))
    );
  };
  completedTask = (id) => {
    let completedTodos = this.state.todos.map((todo) => {
      if (todo.id === id)
        return { ...todo, completed: !todo.completed, checked: !todo.checked };
      return todo;
    });
    this.setState({ todos: completedTodos }, () =>
      window.localStorage.setItem("todos", JSON.stringify(this.state.todos))
    );
  };
  handleOnDragEnd = (result) => {
    if (!result.destination) return;
    if (
      result.source.droppableId === result.destination.droppableId &&
      result.source.index === result.destination.index
    )
      return;
    let updatedTodos = Array.from(this.state.todos);
    let [reorderedItem] = updatedTodos.splice(result.source.index, 1);
    updatedTodos.splice(result.destination.index, 0, reorderedItem);

    this.setState({ todos: updatedTodos });
  };
  render() {
    let todos = this.state.todos.map((todo, index) => (
      <Draggable key={todo.id} draggableId={todo.task} index={index}>
        {(provided) => (
          <TodoItem
            innerRef={provided.innerRef}
            provided={provided}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
            checked={todo.checked}
            remove={this.removeTodo}
            edit={this.editTask}
            complete={this.completedTask}
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
          <TodoForm add={this.addTodo} />
          <DragDropContext onDragEnd={this.handleOnDragEnd}>
            <Droppable droppableId="todo-items">
              {(provided) => (
                <ul {...provided.droppableProps} ref={provided.innerRef}>
                  {todos}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    );
  }
}

export default TodoList;
