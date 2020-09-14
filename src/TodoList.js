import React, { Component } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.editTask = this.editTask.bind(this);
    this.completedTask = this.completedTask.bind(this);
  }

  addTodo(todo) {
    this.setState({ todos: [...this.state.todos, todo] });
  }
  removeTodo(id) {
    let newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodos });
  }
  editTask(id, newTask) {
    let editedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) return { ...todo, task: newTask };
      return todo;
    });
    this.setState({ todos: editedTodos });
  }
  completedTask(id) {
    let completedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) return { ...todo, completed: !todo.completed };
      return todo;
    });
    this.setState({ todos: completedTodos });
  }
  render() {
    let todos = this.state.todos.map((todo) => (
      <TodoItem
        id={todo.id}
        key={todo.id}
        task={todo.task}
        completed={todo.completed}
        remove={this.removeTodo}
        edit={this.editTask}
        complete={this.completedTask}
      />
    ));
    return (
      <div className="TodoList">
        <h1>
          <span>Todo</span>List
        </h1>
        <TodoForm add={this.addTodo} />
        <div>{todos}</div>
      </div>
    );
  }
}

export default TodoList;
