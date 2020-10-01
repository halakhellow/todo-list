import React, { Component } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import thumbtack from "./thumbtack.png";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(window.localStorage.getItem("todos") || "[]"),
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.editTask = this.editTask.bind(this);
    this.completedTask = this.completedTask.bind(this);
  }

  addTodo(todo) {
    this.setState({ todos: [...this.state.todos, todo] }, () =>
      window.localStorage.setItem("todos", JSON.stringify(this.state.todos))
    );
  }
  removeTodo(id) {
    let newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodos }, () =>
      window.localStorage.setItem("todos", JSON.stringify(this.state.todos))
    );
  }
  editTask(id, newTask) {
    let editedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) return { ...todo, task: newTask };
      return todo;
    });
    this.setState({ todos: editedTodos }, () =>
      window.localStorage.setItem("todos", JSON.stringify(this.state.todos))
    );
  }
  completedTask(id) {
    let completedTodos = this.state.todos.map((todo) => {
      if (todo.id === id)
        return { ...todo, completed: !todo.completed, checked: !todo.checked };
      return todo;
    });
    this.setState({ todos: completedTodos }, () =>
      window.localStorage.setItem("todos", JSON.stringify(this.state.todos))
    );
  }
  render() {
    let todos = this.state.todos.map((todo) => (
      <TodoItem
        id={todo.id}
        key={todo.id}
        task={todo.task}
        completed={todo.completed}
        checked={todo.checked}
        remove={this.removeTodo}
        edit={this.editTask}
        complete={this.completedTask}
      />
    ));
    return (
      <div>
        <h1 className="TodoList-title">
          To Do :
          <img src={thumbtack} />
        </h1>
        <div className="TodoList">
          <TodoForm add={this.addTodo} />
          <div>{todos}</div>
        </div>
      </div>
    );
  }
}

export default TodoList;
